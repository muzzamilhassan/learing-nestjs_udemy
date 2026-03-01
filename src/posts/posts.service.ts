import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Get all posts
  async findAll(): Promise<Post[]> {
    return this.postRepository.find({
      relations: ['author', 'metaOptions'],
    });
  }

  // Get a single post by ID
  async findOne(id: number): Promise<Post> {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['author', 'metaOptions'],
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return post;
  }

  // Get all posts by a specific user
  async findByUser(userId: number): Promise<Post[]> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.postRepository.find({
      where: { author: { id: userId } },
      relations: ['author', 'metaOptions'],
    });
  }

  // Create a new post
  async create(createPostDto: CreatePostDto): Promise<Post> {
    // Find the author (user)
    const author = await this.userRepository.findOne({
      where: { id: createPostDto.authorId },
    });

    if (!author) {
      throw new NotFoundException(
        `User with ID ${createPostDto.authorId} not found`,
      );
    }

    // Check if slug already exists
    const existingPost = await this.postRepository.findOne({
      where: { slug: createPostDto.slug },
    });

    if (existingPost) {
      throw new BadRequestException(
        `Post with slug "${createPostDto.slug}" already exists`,
      );
    }

    // Create the post using repository pattern
    const post = this.postRepository.create({
      title: createPostDto.title,
      postType: createPostDto.postType,
      slug: createPostDto.slug,
      status: createPostDto.status,
      content: createPostDto.content,
      schema: createPostDto.schema,
      featuredImageUrl: createPostDto.featuredImageUrl,
      publishOn: createPostDto.publishOn,
      tags: createPostDto.tags,
      author,
    });

    return this.postRepository.save(post);
  }

  // Update a post
  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const post = await this.findOne(id);

    // If authorId is provided, verify the user exists
    if (updatePostDto.authorId) {
      const author = await this.userRepository.findOne({
        where: { id: updatePostDto.authorId },
      });

      if (!author) {
        throw new NotFoundException(
          `User with ID ${updatePostDto.authorId} not found`,
        );
      }

      post.author = author;
    }

    // If slug is being updated, check it doesn't exist
    if (updatePostDto.slug && updatePostDto.slug !== post.slug) {
      const existingPost = await this.postRepository.findOne({
        where: { slug: updatePostDto.slug },
      });

      if (existingPost) {
        throw new BadRequestException(
          `Post with slug "${updatePostDto.slug}" already exists`,
        );
      }
    }

    // Update the post
    Object.assign(post, updatePostDto);

    return this.postRepository.save(post);
  }

  // Delete a post
  async remove(id: number): Promise<void> {
    const post = await this.findOne(id);
    await this.postRepository.remove(post);
  }
}
