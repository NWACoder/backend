import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('snippets')
@Controller('snippets')
export class SnippetsController {
	constructor(private readonly snippetsService: SnippetsService) {}

	@Post()
	create(@Body() createSnippetDto: CreateSnippetDto) {
		return this.snippetsService.create(createSnippetDto);
	}

	@Get()
	findAll() {
		return this.snippetsService.findAll();
	}
	@Get('lastest')
	getLatest(@Query('size') size: number){
		console.log(size);
		return this.snippetsService.getLatest(size);
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.snippetsService.findById(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateSnippetDto: UpdateSnippetDto) {
		return this.snippetsService.update(id, updateSnippetDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.snippetsService.remove(id);
	}
}