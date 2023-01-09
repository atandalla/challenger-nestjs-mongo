import { Controller, Res, Get, Post, Body, NotFoundException, HttpStatus } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { hash, compare } from 'bcrypt';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Login Auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService,
        private jwtService: JwtService){}

    @Post('/login')
    async login(@Res() res, @Body() createUserDTO:CreateUserDTO){
        console.log(createUserDTO);
        const {email, psw} = createUserDTO; // Lo que envia la persona por http
        const findUser = await this.authService.loginUser(email);
        if (!findUser) throw new NotFoundException("User does not exist");

        console.log("find userrr ",findUser);
        const checkPassword = await compare(psw, findUser.psw)
        if (!checkPassword) throw new NotFoundException('Password Incorrect');
        
        const payload = {id:findUser._id, name:findUser.name}
        const token = await this.jwtService.sign(payload)
        const data = {
            user: findUser,
            token 
        }

        return res.status(HttpStatus.OK).json({
            message: `User ${data.user.name} has successfully logged in !!!`,
            token: data.token
        })
        
    }
}
