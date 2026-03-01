import { IsNumber, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsString()
  email!: string;

  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be minimum eight characters, at least one letter and one number',
  })
  password!: string;

  @IsNumber()
  age?: number;
}
