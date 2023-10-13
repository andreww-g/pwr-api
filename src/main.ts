import { NestFactory } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger";
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
      .setTitle('pwr-api')
      .setVersion('1.0')
      .addServer('http://localhost:3000', 'Local environment')
      .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-docs', app, document)

  await app.listen(process.env.PORT || 3000)
}
bootstrap();
