import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsEnum,
  IsOptional,
  IsUrl,
  IsISO8601,
  IsInt,
  IsArray,
  IsNotEmpty,
} from 'class-validator';
import { postStatus } from '../entities/enums/postStatus.enum';
import { postType } from '../entities/enums/postType.enum';

export class CreatePostDto {
  @ApiProperty({ example: 'Understanding TypeScript with NestJS' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ example: 'post', enum: postType })
  @IsEnum(postType)
  @IsNotEmpty()
  postType!: postType;

  @ApiProperty({ example: 'understanding-typescript-with-nestjs' })
  @IsString()
  @IsNotEmpty()
  slug!: string;

  @ApiPropertyOptional({ example: 'draft', enum: postStatus })
  @IsEnum(postStatus)
  @IsOptional()
  status?: postStatus;

  @ApiPropertyOptional({ example: 'This is the content of the post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({ example: '{"schema": "value"}' })
  @IsString()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({ example: 'https://example.com/image.jpg' })
  @IsUrl()
  @IsOptional()
  featuredImageUrl?: string;

  @ApiPropertyOptional({ example: '2024-12-31T00:00:00Z' })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({ example: ['typescript', 'nestjs'] })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiPropertyOptional({ example: [{ key: 'sidebarEnabled', value: false }] })
  @IsOptional()
  metaOptions?: any;

  @ApiProperty({
    example: 1,
    description: 'The ID of the user who is the author',
  })
  @IsInt()
  @IsNotEmpty()
  authorId!: number;
}
