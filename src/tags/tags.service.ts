import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag, TagDocument } from './tags.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TagsService {

	constructor(@InjectModel(Tag.name) private tagModel: Model<TagDocument>) {}

	create(createTagDto: CreateTagDto) {
		const createdTag = new this.tagModel(createTagDto);
		
		return createdTag.save();
	}

	findAll() {
		return this.tagModel.find();
	}

	findOne(id: number) {
		return this.tagModel.findById(id);
	}

	update(id: number, updateTagDto: UpdateTagDto) {
		return `This action updates a #${id} tag`;
	}

	remove(id: number) {
		return `This action removes a #${id} tag`;
	}
}
