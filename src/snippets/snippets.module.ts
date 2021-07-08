import { Module } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { SnippetsController } from './snippets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Snippet, SnippetSchema } from './snippet.schema';
import { Item, ItemSchema } from 'src/items/items.schema';
import { ItemsService } from 'src/items/items.service';

@Module({
	imports: [
	MongooseModule.forFeature([{ name: Snippet.name, schema: SnippetSchema }]),
	MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
	],
	controllers: [SnippetsController],
	providers: [SnippetsService, ItemsService]
})
export class SnippetsModule {}
