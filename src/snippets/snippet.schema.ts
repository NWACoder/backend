import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../users/user.schema';
import * as mongoose from 'mongoose';

export type SnippetDocument = Snippet & Document;

@Schema()
export class Snippet {

	@Prop()
	id: string;

	@Prop()
	parent_id: string; // parent of snippet if forked || null if original

	@Prop()
	title: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
	author_id: string; // uuids of author

	@Prop([String])
	files: string[]; // array of file uuids 

	@Prop([String])
	tags: string[]; // array of tags uuids

	@Prop()
	public: boolean;

}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);