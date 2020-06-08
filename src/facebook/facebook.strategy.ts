import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { Injectable } from '@nestjs/common';
import { FACEBOOK_APP_ID, FACEBOOK_SECRET } from './config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'email'],
    });
  }

  // async validate(accessToken: any, refreshToken: any, profile: any, done) {
  //   return {
  //     name: profile.displayName,
  //     email: profile.emails[0].value,
  //     provider: 'facebook',
  //     providerId: profile.id,
  //     photo: profile.photos[0].value,
  //   };
  // }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done,
  ): Promise<any> {
    const { id, displayName, photos, emails } = profile;
    const user = {
      name: displayName,
      // email: emails[0].value,
      provider: 'facebook',
      providerId: id,
      // photo: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
