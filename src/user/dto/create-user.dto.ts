import {
  IsString,
  MinLength,
  IsNotEmpty,
  IsAlphanumeric,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Must contain at least 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @MinLength(3, { message: 'Must contain at least 3 characters' })
  @IsAlphanumeric(null, { message: 'Alpha numeric charts arent allowed' })
  username: string;
}
