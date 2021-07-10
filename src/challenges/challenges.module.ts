import { Module } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { Challenge, ChallengeSchema } from './challenge.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [MongooseModule.forFeature([{ name: Challenge.name, schema: ChallengeSchema }])],
	controllers: [ChallengesController],
	providers: [ChallengesService]
})
export class ChallengesModule {}
