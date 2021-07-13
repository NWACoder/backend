import { Snippet } from "src/snippets/snippet.schema"
import { User } from "src/users/user.schema"

export class CreateChallengeDto {
	id: string
	name: string
	content: string
	solutions: Snippet[]
	user_id: User
}
