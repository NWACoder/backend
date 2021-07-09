import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { Site, SiteSchema } from './site.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
	MongooseModule.forFeature([{ name: Site.name, schema: SiteSchema }]),
	],
  controllers: [SiteController],
  providers: [SiteService]
})
export class SiteModule {}
