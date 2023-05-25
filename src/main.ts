import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { HttpExceptionFilter } from 'src/common/library/http-exception.filter';
import { JoinValidationPipe } from 'src/common/library/validation.pipe';
import { ConfigService } from 'src/common/library/config.service';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import featurePolicy from 'feature-policy';

async function bootstrap() {
  const configService = new ConfigService();
  const getAllowedOrigins = ['http://localhost:3000'];
  const allowedOrigins = getAllowedOrigins;
  const port: any = configService.get('PORT');
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new JoinValidationPipe());
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
  });
  app.use(cookieParser());
  app.use(
    helmet({
      crossOriginResourcePolicy: {
        policy: 'cross-origin',
      },
    }),
  );
  app.use(
    featurePolicy({
      features: {
        fullscreen: ["'self'"],
        vibrate: ["'none'"],
        syncXhr: ["'none'"],
      },
    }),
  );

  await app.listen(port);
}

bootstrap();
