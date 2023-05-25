import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '../common/library/config.module';
import { RolesGuard } from './roles.guard';
import { user_provider } from 'src/database/master-provider-model';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
  ],
  providers: [JwtStrategy, RolesGuard, user_provider],
  exports: [],
  controllers: [],
})
export class AuthModule {}