import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule],
  providers: [],
  exports: [],
  controllers: [],
})
export class LibraryModule {}
