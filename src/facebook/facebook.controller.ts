import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class FacebookController {
  constructor(private readonly facebookService: FacebookService) {}

  @Get('/auth/facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth(@Req() req) {}

  @Get('/auth/facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  facebookAuthRedirect(@Req() req) {
    return this.facebookService.facebookLogin(req);
  }
}
