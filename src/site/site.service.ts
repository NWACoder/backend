import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site, SiteDocument } from './site.schema';

@Injectable()
export class SiteService {

	constructor(@InjectModel(Site.name) private siteModel: Model<SiteDocument>) {}

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
