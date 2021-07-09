import { Tag } from "src/tags/tags.schema"
import { Item } from "src/items/items.schema"
import { ApiProperty } from '@nestjs/swagger';
import { User } from "src/users/user.schema";

export class CreateSnippetDto {
	user_id: User
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
