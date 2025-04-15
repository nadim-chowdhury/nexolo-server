import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS (Cross-Origin Resource Sharing)
  app.enableCors();

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
