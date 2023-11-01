import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  async create(@Body() catData: Cat) {
    return this.catsService.create(catData);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() catData: Cat) {
    return this.catsService.update(id, catData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
