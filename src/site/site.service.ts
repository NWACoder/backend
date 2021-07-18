import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSiteDto } from './dto/create-site.dto';
import { Site, SiteDocument } from './site.schema';
import { Cron } from '@nestjs/schedule';
import { UsersService } from 'src/users/users.service';
import { SnippetsService } from 'src/snippets/snippets.service';
import { ChallengesService } from 'src/challenges/challenges.service';

@Injectable()
export class SiteService {
	private readonly logger = new Logger(Site.name);

	constructor(@InjectModel(Site.name) private siteModel: Model<SiteDocument>,
		private readonly usersService: UsersService,
		private readonly snippetsService: SnippetsService,
		private readonly challengesService: ChallengesService

		) {}

	findbyKey(key: string) {
		 return this.siteModel.findOne({ key: key});
	}

	create(createSiteDto: CreateSiteDto) {
		const createdSite = new this.siteModel(createSiteDto);
		
    	return createdSite.save();
	}

	findAll() {
		return this.siteModel.find();
	}

	@Cron('0 10 * * * *')
	async updateStatsCron() {
		
		let cStat = await this.siteModel.findOne({ key: "community-stats"})

		cStat.value ={
			Users: await this.usersService.getCount(),
			Snippets: await this.snippetsService.getCount(),
			Challenges: await this.challengesService.getCount()
		}

		cStat.save()

    	this.logger.debug('Called when the current second is 45');
	}

	// findOne(id: number) {
	// 	return `This action returns a #${id} site`;
	// }

	// update(id: number, updateSiteDto: UpdateSiteDto) {
	// 	return `This action updates a #${id} site`;
	// }

	// remove(id: number) {
	// 	return `This action removes a #${id} site`;
	// }
}
