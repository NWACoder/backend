import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema({
  toJSON: {
    transform: (doc: DocumentType, ret) => {
      ret.id = ret._id;
    },
  },
})
export class Item {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  content: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
