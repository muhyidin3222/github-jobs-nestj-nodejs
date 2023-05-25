import { IsString, MaxLength } from 'class-validator';

export class ParamAuthDto {
  @IsString()
  @MaxLength(250)
  email: string;

  @IsString()
  @MaxLength(200)
  password: string;
}
