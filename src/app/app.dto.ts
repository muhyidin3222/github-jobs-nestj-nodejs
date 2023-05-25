import { IsOptional, IsString, MaxLength } from 'class-validator';

export class ParamTopicDto {
  @MaxLength(1000)
  @IsString()
  token: string;
}

export class ParamGet {
  @MaxLength(2)
  @IsString()
  page: string;

  @MaxLength(2)
  @IsString()
  total: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsString()
  @IsOptional()
  type: string;
}
