import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SiteDocument = Site & Document;

@Schema()
export class Site {

	@Prop()
	id: string;

	@Prop()
	key: string;

	@Prop({ type: Object})
	value: Object;
}

export const SiteSchema = SchemaFactory.createForClass(Site);