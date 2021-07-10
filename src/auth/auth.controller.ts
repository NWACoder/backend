import { Controller, Request, Post, UseGuards,  Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@ApiTags('auth')
@Controller("auth")
export class AuthController {

	constructor(private authService: AuthService) {}
	
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return this.authService.login(req.user._doc);
	}

	@Post('register')
	async register(@Body() createUserDto: CreateUserDto) {
		return this.authService.register(createUserDto);
	}
}