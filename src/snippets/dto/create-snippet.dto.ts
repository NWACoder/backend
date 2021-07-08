import { Tag } from "src/tags/tags.schema"
import { Item } from "src/items/items.schema"

export class CreateSnippetDto {
	user_id: string
	title: string
	tags: Tag[]
	files: Item[]
	public: boolean
	challenge_id?: string
}
