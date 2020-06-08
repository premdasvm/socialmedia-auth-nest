import { Injectable } from '@nestjs/common';

@Injectable()
export class FacebookService {
  facebookLogin(req) {
    if (!req.user) {
      return 'No USer from Facebook';
    }

    return {
      message: 'USer information from facebook',
      user: req.user,
    };
  }
}
