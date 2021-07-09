import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Tag } from 'src/tags/tags.schema';
import { User } from 'src/users/user.schema';
import { Item } from 'src/items/items.schema';

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
	user_id: User; // uuids of author

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })
	items: Item[]; // array of file uuids 

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] })
	tags: Tag[]; // array of tags uuids

	@Prop()
	public: boolean;

}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);