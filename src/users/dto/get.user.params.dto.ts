import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class GetUserParamsDto {
  @ApiPropertyOptional({ description: 'User ID', example: 1 })
  @IsOptional()
  @Type(() => Number) // to transform string to number
  id?: number;
}
