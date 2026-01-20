import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Get('/:id?')
  getPosts(@Param('id') id: string) {
    return this.postService.findAll(id);
  }
}
