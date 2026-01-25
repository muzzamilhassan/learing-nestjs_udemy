import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

enum postStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  REVIEW = 'review',
  PUBLISHED = 'published',
}
export class CreatePostDto {
  @ApiProperty({ example: 'Understanding TypeScript with NestJS' }) // this is use for swagger documentation
  @ApiPropertyOptional({ example: 'Understanding TypeScript with NestJS' }) // this is use for swagger documentation optional field
  title: string;
  postType: string;
  slug: string;
  status: postStatus;
  content: string;
  schema: string;
  featuredImageUrl: string;
  publishOn: Date;
  tags: ['typescript', 'nestjs'];
  metaOptions: [{ key: 'sidebarEnabled'; value: false }];
}
