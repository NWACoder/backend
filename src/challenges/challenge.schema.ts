import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Snippet } from 'src/snippets/snippet.schema';
import { User } from 'src/users/user.schema';

export type ChallengeDocument = Challenge & Document;

@Schema()
export class Challenge {

	@Prop()
	id: string;

	@Prop()
	name: string;

	@Prop()
	content: string;

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Snippet' }] })
	solutions: Snippet[];

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
	user_id: User; // uuids of author

}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);