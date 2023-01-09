import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserSchema } from 'src/user/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/jwt/jwt.constants';
import { JwtStrategy } from '../auth/jwt/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([
        {name: 'User', schema: UserSchema}
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
], 
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
