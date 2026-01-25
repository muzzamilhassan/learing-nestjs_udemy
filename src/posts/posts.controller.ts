import { Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Get('/:id?')
  getPosts(@Param('id') id: string) {
    return this.postService.findAll(id);
  }

  @ApiOperation({ summary: 'Create a new post' }) // this is use for swagger documentation for operation summary
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  @Post()
  createPost(@Param('id') id: string) {
    return this.postService.findAll(id);
  }
}
