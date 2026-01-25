//import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { PartialType } from '@nestjs/swagger'; //for showing partial type in swagger documentation
export class UpdatePostDto extends PartialType(CreatePostDto) {}
