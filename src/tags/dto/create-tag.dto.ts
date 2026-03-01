import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({ example: 'Tag 1' })
  @IsNotEmpty()
  @IsString()
  name!: string;
  @ApiProperty({ example: 'tag-1' })
  @IsNotEmpty()
  @IsString()
  slug!: string;
  @ApiPropertyOptional({ example: 'This is a tag description' })
  @IsOptional()
  @IsString()
  description?: string;
  @ApiPropertyOptional({ example: '{"schema": "schema-1"}' })
  @IsOptional()
  @IsString()
  schema?: string;
  @ApiPropertyOptional({ example: 'https://example.com/image.jpg' })
  @IsOptional()
  @IsString()
  @IsUrl()
  featuredImageUrl?: string;
}
