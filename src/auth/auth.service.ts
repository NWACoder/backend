import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {

	constructor(private usersService: UsersService, private jwtService: JwtService) {}

	async validateUser(username: string, password: string): Promise<any> {

		const user = await this.usersService.login(username);
		
		if(user == null){
			return null
		}

		const isMatch = await bcrypt.compare(password, user.password);
		
		if (user && isMatch) {
			const { password, ...result } = user;
			return result;
		}

		return null;
	}

	async login(user: any) {
		const payload = { username: user.username, sub: user._id };
		return {access_token: this.jwtService.sign(payload)};
	}

	async register(createUserDto: CreateUserDto) {
		const user = await this.usersService.create(createUserDto);
		
		if(typeof(user) == "string"){
			return user
		}

		const payload = { username: user.username, sub: user._id };

		return {access_token: this.jwtService.sign(payload)};
	}

}
