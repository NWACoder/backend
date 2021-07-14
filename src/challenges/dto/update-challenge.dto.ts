import { PartialType } from '@nestjs/swagger';
import { Snippet } from 'src/snippets/snippet.schema';
import { CreateChallengeDto } from './create-challenge.dto';

export class UpdateChallengeDto extends PartialType(CreateChallengeDto) {
	name: string
	content: string
	solutions: Snippet[]
}
