import { NestFactory } from '@nestjs/core';
import { ControllerModule } from './controller.module';

async function bootstrap() {
  const app = await NestFactory.create(ControllerModule);
  await app.listen(3000);
}
bootstrap();
