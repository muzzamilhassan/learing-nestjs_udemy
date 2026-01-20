import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class GetUserParamsDto {
  @IsOptional()
  @Type(() => Number) // to transform string to number
  id?: number;
}
