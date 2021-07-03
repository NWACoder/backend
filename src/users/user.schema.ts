import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type SnippetDocument = User & Document;

@Schema()
export class User {

	@Prop()
	id: string;

	@Prop()
	username: string;

	@Prop()
	password: string;

}

export const CatSchema = SchemaFactory.createForClass(User);