import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Get('/:id?')
  getPosts(@Param('id') id: string) {
    return this.postService.findAll(id);
  }
}
