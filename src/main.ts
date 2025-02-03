import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ConfigService } from '@nestjs/config';
// import { connect } from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // const configService = app.get(ConfigService);
  // const mongoUri = connect(configService.get<string>('MONGODB_URI'));

  // console.log('MongoDB URI:', mongoUri);
  await app.listen(3000);
}
bootstrap();
