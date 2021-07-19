import { Controller, Request, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';

@ApiTags('challenges')
@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	create(@Body() createChallengeDto: CreateChallengeDto, @Request() req : any){

		createChallengeDto.user_id = req.user.id;

		return this.challengesService.create(createChallengeDto);
	}
  
	@Get('latest')
	getLatest(@Query('size') size: number){
    	return this.challengesService.getLatest(size);
    }

	@Get()
	findAll() {
		return this.challengesService.findAll();
	}

	@Get('user')
	@UseGuards(JwtAuthGuard)
	findByUser(@Request() req) {
		return this.challengesService.findByUser(req.user.id);
	}
	

	@Get('search')
	search(@Query('query') query: string){
		return this.challengesService.search(query);
	}
	
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.challengesService.findOne(id);
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateChallengeDto: UpdateChallengeDto) {
		return this.challengesService.update(id, updateChallengeDto);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.challengesService.remove(id);
	}
}
