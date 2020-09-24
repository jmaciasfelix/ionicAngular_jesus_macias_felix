// nestjs
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WsAdapter } from '@nestjs/platform-ws';

// fastify plugins
import * as compress from 'fastify-compress';
import * as helmet from 'fastify-helmet';
import * as rateLimit from 'fastify-rate-limit';

// morgan
import * as morgan from 'morgan';

// node
import { createWriteStream, exists, mkdir } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

// @encuestas packages
import { AppModule } from '@encuestas/app';
import { ServerResponse, IncomingMessage } from 'http';

/**
 * bootstrap application
 *
 * @returns promise with startup status
 */
const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.useWebSocketAdapter(new WsAdapter(app));
  const logsFolder = join(process.cwd(), 'logs');

  if (!await promisify(exists)(logsFolder)) {
    await promisify(mkdir)(logsFolder);
  }

  const accessLogStream = createWriteStream(join(logsFolder, 'access.log'), { encoding: 'utf-8', flags: 'a' });

  app.setGlobalPrefix('api');
  app.enableCors();

  app.use(middleware);
  app.use(morgan('combined', { stream: accessLogStream }));
  app.register(compress);
  app.register(helmet);
  app.register(rateLimit, { max: 100, timeWindow: '1 minute' });

  SwaggerModule.setup('swagger', app, SwaggerModule.createDocument(app, createSwaggerOptions()));

  await app.listen(3000, '0.0.0.0', () => {
    Logger.log('Server listening on http://localhost:3000/api', 'Bootstrap');
    Logger.log('Websocket listening on ws://localhost:3030/votes', 'Bootstrap');
    Logger.log('Swagger listening on http://localhost:3000/swagger', 'Bootstrap');
  });
};

/**
 * middleware
 *
 * @param request incoming message
 * @param response server response
 * @param next express next function
 */
const middleware = (request: IncomingMessage, response: ServerResponse, next: () => void) => {

  if (request.url.includes('swagger')) {
    next();
    return;
  }

  const random = Math.floor(Math.random() * (101 - 0) + 0);

  if (random < 10) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ statusCode: 500, message: 'Internal server error' }));
    return;
  }

  setTimeout(next, 1500);
}

/**
 * create swagger options
 *
 * @returns swagger options
 */
const createSwaggerOptions = () => {

  return new DocumentBuilder()
    .setTitle('Encuestas')
    .setDescription('Encuestas api docs')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('Auth', 'Authentication api docs')
    .addTag('Survey', 'Survey api docs')
    .build();
};

bootstrap();
