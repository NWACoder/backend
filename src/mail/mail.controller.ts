import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { MailService } from './mail.service';

@Controller("mail")
export class MailController {
	constructor(private readonly mailService: MailService) {}

	@ApiExcludeEndpoint()	
  	@Get("example")
	findAll() {
		return this.mailService.example();
	}
}
