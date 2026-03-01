import { IsInt, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetPostParamsDto {
  @ApiProperty({ example: 1, description: 'The ID of the post' })
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  id!: number;
}
