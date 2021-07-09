import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@ApiTags('site')
@Controller('site')
export class SiteController {
	
	constructor(private readonly siteService: SiteService) {}

	@Get(':key')
	findbyKey(@Param('key') key: string) {
		return this.siteService.findbyKey(key);
	}

	@Post()
	create(@Body() createSiteDto: CreateSiteDto) {
		return this.siteService.create(createSiteDto);
	}

  	@Get()
	findAll() {
		return this.siteService.findAll();
	}

	// @Get(':id')
	// findOne(@Param('id') id: string) {
	//   return this.siteService.findOne(+id);
	// }

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
	//   return this.siteService.update(+id, updateSiteDto);
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	//   return this.siteService.remove(+id);
	// }
}
