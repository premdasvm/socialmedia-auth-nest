import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';
import { FacebookModule } from './facebook/facebook.module';

@Module({
  imports: [GoogleModule, FacebookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
