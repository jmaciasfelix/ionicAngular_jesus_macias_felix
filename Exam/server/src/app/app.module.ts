// nestjs
import { CacheInterceptor, CacheModule, Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

// @encuestas packages
import { AuthModule } from '@encuestas/auth';
import { DataModule } from '@encuestas/data';
import { SurveyModule } from '@encuestas/survey';

@Module({
  imports: [
    AuthModule,
    CacheModule.register(),
    DataModule,
    SurveyModule
  ],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
    { provide: APP_PIPE, useClass: ValidationPipe }
  ]
})
export class AppModule { }
