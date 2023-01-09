import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/user/interfaces/user.interface';
import { CreateUserDTO } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){} 

    async loginUser(email: string): Promise<User>{
        const loginUser = await this.userModel.findOne({email}); // Permite devolver el nuevo objeto 
        return loginUser;
    }

}
