import { Injectable } from '@nestjs/common';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { Snippet, SnippetDocument } from './snippet.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from 'src/users/user.schema';

@Injectable()
export class SnippetsService {

	constructor(@InjectModel(Snippet.name) private snippetModel: Model<SnippetDocument>) {}

	async create(createSnippetDto: CreateSnippetDto): Promise<Snippet> {
		const createdSnippet = new this.snippetModel(createSnippetDto);
		
    	return createdSnippet.save();
	}

	async findAll(): Promise<Snippet[]> {
		return this.snippetModel.find({ public: true}).populate('tags');
	}

	async findByUser(user_id: User): Promise<Snippet[]> {
		return this.snippetModel.find({ user_id }).populate('tags');
	}

	async getLatest(size: number): Promise<Snippet[]> {
		return this.snippetModel.find({ public: true}).populate('tags').limit(+size).sort({$natural:-1});
	}

	async findById(id: string): Promise<Snippet> {
		return this.snippetModel.findById(id).populate('user_id', "username").populate('items').populate('tags');
	}

	async update(id: string, updateSnippetDto: UpdateSnippetDto): Promise<Snippet> {
    	return this.snippetModel.findByIdAndUpdate(id,updateSnippetDto, {new: true});
	}

	async remove(id: string) {
		return this.snippetModel.findByIdAndDelete(id);
	}
}
