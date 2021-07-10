import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
	constructor(private readonly mailerService: MailerService) {}

	public example(): void {
		this.mailerService
		.sendMail({
			to: 'test@codeparcel.io',
			from: 'noreply@codeparcel.io',
			subject: 'Testing Mail ✔',
			template:  './example',
			context: {
				code: 'cf1a3f828287',
				username: 'John doe',
			},
		})
		.then(() => {
			console.log("successful")
		})
		.catch((error) => {
			console.log(error)
		});
	}


}
