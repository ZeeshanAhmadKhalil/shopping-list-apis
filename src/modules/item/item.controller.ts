import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import {
  ApiTags
} from '@nestjs/swagger';
import {
  CreateItemDto
} from './dto/create-item.dto';
import {
  UpdateItemDto
} from './dto/update-item.dto';
import {
  ItemService
} from './item.service';

@Controller('item')
@ApiTags('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) { }

  @Post()
  create(
    @Body()
    createItemDto:
      CreateItemDto) {

    return this.itemService
      .create(
        createItemDto
      );
  }

  @Get(':page')
  findAll(
    @Param('page')
    page:
      number
  ) {
    return this.itemService
      .findAll(
        page
      );
  }

  @Get('find-one/:id')
  findOne(
    @Param('id')
    id: string
  ) {
    return this.itemService
      .findOne(
        id
      );
  }

  @Patch(':id')
  update(
    @Param('id')
    id: string,
    @Body()
    updateItemDto:
      UpdateItemDto
  ) {
    return this.itemService
      .update(
        id,
        updateItemDto
      );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService
      .remove(
        id
      );
  }
}
