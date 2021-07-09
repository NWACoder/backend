import { Tag } from "src/tags/tags.schema"
import { Item } from "src/items/items.schema"
import { ApiProperty } from '@nestjs/swagger';

export class CreateSnippetDto {
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
