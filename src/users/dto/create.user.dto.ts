import { IsNumber, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must be minimum eight characters, at least one letter and one number',
  })
  password: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  age?: number;
}
