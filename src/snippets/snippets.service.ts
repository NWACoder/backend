import { Injectable } from '@nestjs/common';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { Snippet, SnippetDocument } from './snippet.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SnippetsService {

	constructor(@InjectModel(Snippet.name) private snippetModel: Model<SnippetDocument>) {}

	async create(createSnippetDto: CreateSnippetDto): Promise<Snippet> {
		const createdSnippet = new this.snippetModel(createSnippetDto);
		
    	return createdSnippet.save();
	}

	async findAll(): Promise<Snippet[]> {
		return this.snippetModel.find().populate('tags');
	}

	async getLatest(size: number): Promise<Snippet[]> {
		return this.snippetModel.find().limit(+size).sort({$natural:-1});
	}

	async findById(id: string): Promise<Snippet> {
		return this.snippetModel.findById(id).populate('user_id', "username");
	}

	async update(id: string, updateSnippetDto: UpdateSnippetDto): Promise<Snippet> {
    	return this.snippetModel.findByIdAndUpdate(id,updateSnippetDto, {new: true});
	}

	async remove(id: string) {
		return this.snippetModel.findByIdAndDelete(id);
	}
}
