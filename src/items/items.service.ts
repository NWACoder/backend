import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item, ItemDocument } from './items.schema';

@Injectable()
export class ItemsService {

	constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

	async create(createItemDto: CreateItemDto) {
		const createdTag =  new this.itemModel(createItemDto);
		
		return createdTag.save();
	}

	async createMany(createItemDto: CreateItemDto[]): Promise<CreateItemDto[]> {
		
		const createdTag =  this.itemModel.insertMany(createItemDto)
		
		return createdTag;
		
	}

	findAll() {
		return `This action returns all items`;
	}

	findOne(id: number) {
		return `This action returns a #${id} item`;
	}

	async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    	return this.itemModel.findByIdAndUpdate(id,updateItemDto, {new: true});

	}

	remove(id: number) {
		return `This action removes a #${id} item`;
	}
}
