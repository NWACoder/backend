import { Tag } from "src/tags/tags.schema"
import { Item } from "src/items/items.schema"
import { ApiProperty } from '@nestjs/swagger';
import { User } from "src/users/user.schema";
import { Stats } from "./Stats.dto";

export class CreateSnippetDto {
	user_id: User
	@ApiProperty()
	title: string
	@ApiProperty({ example: [ "60e5dc7b81860bfbabb6381e","60e5dc7b81860bfbabb6381e" ]})
	tags: Tag[]
	@ApiProperty({ example: [{ "name": "app.js", "content": "let name = blue;", "langauge": "js"},{ "name": "app.css", "content": "text center", "langauge": "css"}]})
	items: Item[]
	@ApiProperty()
	public: boolean
	@ApiProperty({example: "60e5dc7b81860bfbabb6381e"})
	challenge_id?: string
	@ApiProperty({ example: {files: 1,forks: 1,stars: 1} })
	stats: Stats
}
