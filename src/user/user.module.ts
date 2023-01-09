import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../auth/jwt/jwt.constants';
import { JwtStrategy } from '../auth/jwt/jwt.strategy';

@Module({
    imports:[
        MongooseModule.forFeature([
            {name: 'User', schema: UserSchema},
        ]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '24h' },
          }),
    ],  
    controllers: [UserController],
    providers: [UserService, JwtStrategy]
})
export class UserModule {}
