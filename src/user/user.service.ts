import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){} //Inyecta el modelo de User - <User> -> Interfaz

    async getAllUsers(): Promise<User[]>{ //(Promise) se pone porque la respuesta de (users) no es instantánea y toma tiempo. Luego devuelve un arreglo de usuarios 
        const users = await this.userModel.find(); // La conexion de mongoose - como toma tiempo, continua con el código debajo
        return users;
    }

    async getOneUser(userID: string): Promise<User>{ // <User> -> Interfaz
        const user = await this.userModel.findById(userID);
        return user;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        const user = new this.userModel(createUserDTO); //Se crea el objeto que se va a guardar
        return await user.save();
    }

    async deleteUser(userID: string): Promise<User>{ //<any> Puede tomar cualquiera
        const deletedUser = await this.userModel.findByIdAndDelete(userID);
        return deletedUser; 
    }

    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User>{ // Importante: Mongoose no devuelve el objeto nuevo
        const updateUser = await this.userModel.findByIdAndUpdate(userID,createUserDTO, {new: true}); // Permite devolver el nuevo objeto 
        return updateUser;
    }



}
