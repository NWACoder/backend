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
		// return 'This action adds a new snippet';
	}

	findAll() {
		return `This action returns all snippets`;
	}

	findOne(id: number) {
		return `This action returns a #${id} snippet`;
	}

	update(id: number, updateSnippetDto: UpdateSnippetDto) {
		return `This action updates a #${id} snippet`;
	}

	remove(id: number) {
		return `This action removes a #${id} snippet`;
	}
}
