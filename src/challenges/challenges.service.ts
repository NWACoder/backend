import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChallengeDocument } from './challenge.schema';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';

@Injectable()
export class ChallengesService {

	constructor(@InjectModel(Tag.name) private challengeModel: Model<ChallengeDocument>) {}

	create(createChallengeDto: CreateChallengeDto) {
		const createdChallenge = new this.challengeModel(createChallengeDto);
		
		return createdChallenge.save();
	}

	findAll() {
		return this.challengeModel.find();
	}

	findOne(id: number) {
		return this.challengeModel.findById(id);
	}

	update(id: number, updateChallengeDto: UpdateChallengeDto) {
    	return this.challengeModel.findByIdAndUpdate(id,updateChallengeDto, {new: true});
	}

	remove(id: number) {
		return `This action removes a #${id} challenge`;
	}
}
