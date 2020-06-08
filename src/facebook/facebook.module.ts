import { Module } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  providers: [FacebookService, FacebookStrategy],
  controllers: [FacebookController],
})
export class FacebookModule {}
