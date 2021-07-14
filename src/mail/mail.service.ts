import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
	constructor(private readonly mailerService: MailerService) {}

	example(): void {
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

	confirmUserEmail(username: string, code: string): void {
		this.mailerService
		.sendMail({
			to: 'test@codeparcel.io',
			from: 'noreply@codeparcel.io',
			subject: 'confirm email from Code Parcel',
			template:  './confirmEmail',
			context: {
				username: username,
				code: code,
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
