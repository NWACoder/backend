import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Snippet } from 'src/snippets/snippet.schema';

export type ChallengeDocument = Challenge & Document;

@Schema()
export class Challenge {

	@Prop()
	id: string;

	@Prop()
	name: string;

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Snippet' }] })
	soultions: Snippet[];

}

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);