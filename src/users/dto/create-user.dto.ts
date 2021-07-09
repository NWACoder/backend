import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
	id: string
	@ApiProperty()
	email: string
	@ApiProperty()
	username: string
	@ApiProperty()
	password : string
}
