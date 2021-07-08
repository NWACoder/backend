import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {

	@Prop()
	id: string;

	@Prop()
	name: string;

	@Prop()
	content: string;

}

export const ItemSchema = SchemaFactory.createForClass(Item);