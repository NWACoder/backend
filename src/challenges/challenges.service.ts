import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/user.schema';
import { Challenge, ChallengeDocument } from './challenge.schema';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';

@Injectable()
export class ChallengesService {

	constructor(@InjectModel(Challenge.name) private challengeModel: Model<ChallengeDocument>) {}

	async create(createChallengeDto: CreateChallengeDto) {
		const createdChallenge = new this.challengeModel(createChallengeDto);
		
		return createdChallenge.save();
	}

	async getLatest(size: number): Promise<Challenge[]> {
		return this.challengeModel.find().populate('solutions').limit(+size).sort({$natural:-1});
	}

	async findAll() {
		return this.challengeModel.find().populate('user_id', "username").sort({$natural:-1});
	}

	async findByUser(user_id: User): Promise<Challenge[]> {
		return this.challengeModel
		  .find({ user_id })
		  .populate('user_id', 'username');
	}

	async search(query: string): Promise<Challenge[]> {
		return this.challengeModel.find({ "name": { "$regex": query, "$options": "i" } }).populate('user_id', 'username').populate('tags');
	}

	async findOne(id: string) {
		return this.challengeModel.findById(id).populate('user_id', "username").populate({path: 'solutions', populate: { path: 'user_id', select: "username" }});
	}

	async update(id: string, updateChallengeDto: UpdateChallengeDto) {
    	return this.challengeModel.findByIdAndUpdate(id,updateChallengeDto, {new: true});
	}

	async getCount(){
		return this.challengeModel.estimatedDocumentCount();
	}

	async remove(id: string) {
		return this.challengeModel.findByIdAndDelete(id);
	}
}