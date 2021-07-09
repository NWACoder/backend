import { Controller, Request, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ItemsService } from 'src/items/items.service';

@ApiTags('snippets')
@Controller('snippets')
export class SnippetsController {
	constructor(private readonly snippetsService: SnippetsService, 
		private readonly itemsService: ItemsService) {}

	@Post()
	@UseGuards(JwtAuthGuard)
	async create(@Body() createSnippetDto: CreateSnippetDto, @Request() req : any){

		createSnippetDto.user_id = req.user.id;
		
		createSnippetDto.items = await this.itemsService.createMany(createSnippetDto.items)
		
  		return this.snippetsService.create(createSnippetDto);
	}

	@Get()
	findAll() {
		return this.snippetsService.findAll();
	}
	@Get('lastest')
	getLatest(@Query('size') size: number){
		return this.snippetsService.getLatest(size);
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.snippetsService.findById(id);
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	async update(@Param('id') id: string, @Body() updateSnippetDto: UpdateSnippetDto, @Request() req : any) {
		let currentSnippet = await this.snippetsService.findById(id);
		
		if(req.user._id == currentSnippet.user_id.id){
			return this.snippetsService.update(id, updateSnippetDto);
		}else{
			return "user doesnt have permission to update snippet"
		}
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	async remove(@Param('id') id: string, @Request() req : any) {

		let currentSnippet = await this.snippetsService.findById(id);
		
		if(req.user._id == currentSnippet.user_id.id){
			return this.snippetsService.remove(id);
		}else{
			return "user doesnt have permission to delete snippet"
		}

		
	}
}