import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
	id: string
	@ApiProperty()
	name: string
	@ApiProperty()
	content: string
}
