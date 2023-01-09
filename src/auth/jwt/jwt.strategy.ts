import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy){
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Permite validar que la generación del token se ha generado por el backend.
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret,
        });
      }
    
      async validate(payload: any) {
        return { userId: payload.id, name: payload.name };
      }
}