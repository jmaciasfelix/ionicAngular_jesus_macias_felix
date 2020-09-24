# Encuestas backend

## Tabla de contenidos

- [Tecnología usada](#tecnologia)
- [Instalación y configuracion](#instalacion)
  - [Inicio rápido](#inicio-rapido)
  - [Configuracion](#configuracion)
- [Despliegue](#despliegue)

## <a name="tecnologia">Tecnología usada</a>

- **NestJS**, como framework base para el desarrollo de la aplicación
- **TSLint**, para comprobar la calidad de código
- **Nodemon**, como herramienta para desarrollo local y auto-refresco de la aplicación
- **Websockets**, para enviar datos en tiempo real a los clientes
- **Tsconfig-paths**, para simplificar los paths dentro de la aplicación
- **Morgan**, como herramienta de logs de la aplicación

## <a name="instalacion">Instalación y configuración</a>

### <a name="inicio-rapido">Inicio rápido</a>

```bash
# Clonar repositorio
$ git clone https://fpacheco@git.atsistemas.com/scm/~fpacheco/encuestas-backend.git

# Cambiar directorio
$ cd encuestas-backend

# Instalar dependencias del proyecto
$ npm i # npm install

# Levantar el servidor de desarrollo
$ npm start
```

### <a name="configuracion">Configuracion</a>

El servidor se levantará por defecto en el puerto **3000**, y en la dirección **0.0.0.0** para permitir todas las conexiones entrantes. Para cambiar estos parámetros, hay que modificar desde la línea 52, a la linea 56:

```ts
await app.listen(3000, '0.0.0.0', () => {
  Logger.log('Server listening on http://localhost:3000/api', 'Bootstrap');
  Logger.log('Websocket listening on ws://localhost:3030/votes', 'Bootstrap');
  Logger.log('Swagger listening on http://localhost:3000/swagger', 'Bootstrap');
});
```

Por otro lado, los datos usados en la aplicación son proporcionados por el archivo **data.json**, ubicado en la raiz del proyecto. Dentro de este archivo se encuentran los usuarios que pueden autenticarse en la aplicación, y las encuestas.

## <a name="despliegue">Despliegue</a>

Para desplegar el servidor en un servidor VPS o similar:

```bash
# Build del proyecto
$ npm run build

# Levantar servidor de producción
$ npm run start:prod
```

Para el correcto funcionamiento del servidor de producción, es necesario disponer junto a la carpeta **dist**, las carpetas y ficheros siguientes en la raiz de la aplicación:

- **node_modules**, donde están las dependencias del proyecto. Sólo se precisan las dependencias de producción.
- **data.json**, donde se encuentran los datos de la aplicación.
- **package.json**, donde están los comandos npm y las dependencias del proyecto.
- **package-lock.json**, donde están las versiones de las dependencias usadas.
- **tsconfig.json**, necesario para la definición de los paths de la aplicación.
- **tsconfig-paths.js**, necesario para que la aplicación, a través del tsconfig.json, sepa encontrar los paths dentro de la aplicación.
