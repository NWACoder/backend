import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async create(createUserDto: CreateUserDto) {
		
		const salt = await bcrypt.genSalt(8,"b");
		const password = createUserDto.password;
		const hashpwd = await bcrypt.hash(password, salt);
		createUserDto.password = hashpwd;

		const createdUser = new this.userModel(createUserDto);

		return createdUser.save().then((user) => {
			return user
		})
    	.catch((error) => {
       	 	return "Username or Email already used"
    	});

	}

	findAll() {
		return this.userModel.find();
	}

	async findOne(username: string): Promise<User | undefined> {
		return this.userModel.findOne({username: username});
	}

	async login(username: string): Promise<User | undefined> {
		return this.userModel.findOne({username: username}).select("+password");
	}

	update(id: string, updateUserDto: UpdateUserDto): string {
		return `This action updates a #${id} user`;
	}
	async getCount(){
		return this.userModel.count();
	}

	remove(id: string) {
		return this.userModel.findByIdAndDelete(id);
	}
}
