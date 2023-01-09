import { Controller, Res, Get, Post, Put, Delete, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { hash, compare } from 'bcrypt';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('user')
export class UserController {

    constructor(private userService:UserService,
                private jwtService: JwtService){}

    @Get('/')
    async getAllUsers(@Res() res){
        const users = await this.userService.getAllUsers();
        return res.status(HttpStatus.OK).json({users});
    }

    @Get('/:userID') // @Param- permite recibir el parámetro
    async getOneUser(@Res() res, @Param('userID') userID){
        const user = await this.userService.getOneUser(userID);
        if (!user) throw new NotFoundException("User does not exist");
        return res.status(HttpStatus.OK).json({user})
    }

    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO){

        // Contraseña Encriptada
        const pswtoHash = await hash(createUserDTO.psw, 10);
        createUserDTO = {...createUserDTO, psw:pswtoHash}; // Sobreescribe la propiedad password con hash en el modelo

        // Propiedad Usuario
        const user = await this.userService.createUser(createUserDTO);
        console.log(user);

        return res.status(HttpStatus.OK).json({
            message: 'User Created Successfully!!!',
            user: user
        });
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID){ // @Query - permite recibir de la cadena de consulta
        const userDeleted = await this.userService.deleteUser(userID);
        if (!userDeleted) throw new NotFoundException("User does not exist");
        return res.status(HttpStatus.OK).json({
            message: 'User Deleted Successfully!!!',
            userDeleted })
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update')
    async updateUser(@Res() res, @Body() createUserDTO:CreateUserDTO, @Query('userID') userID){
        const userUpdated = await this.userService.updateUser(userID, createUserDTO);
        if (!userUpdated) throw new NotFoundException("User does not exist");
        return res.status(HttpStatus.OK).json({
            message: 'User Updated Successfully!!!',
            userUpdated
        })
    }

}
