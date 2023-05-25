import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '../common/library/config.module';
import { AuthModule } from '../auth/auth.module';
import { LibraryModule } from '../common/library/library.module';
import { HttpExceptionFilter } from 'src/common/library/http-exception.filter';
import { ConfigService } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import {
  jobs_provider,
  user_provider,
} from 'src/database/master-provider-model';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/auth.constants';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    LibraryModule,
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    DatabaseModule,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    user_provider,
    jobs_provider,
  ],
  exports: [AppService],
})
export class AppModule {}
