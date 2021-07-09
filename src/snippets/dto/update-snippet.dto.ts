import { PartialType } from '@nestjs/mapped-types';
import { CreateSnippetDto } from './create-snippet.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Tag } from 'src/tags/tags.schema';
import { Item } from 'src/items/items.schema';

export class UpdateSnippetDto extends PartialType(CreateSnippetDto) {

	@ApiProperty()
	user_id: string
	@ApiProperty()
	title: string
	@ApiProperty()
	tags: Tag[]
	@ApiProperty()
	items: Item[]
	@ApiProperty()
	public: boolean
	@ApiProperty()
	challenge_id?: string
}
