import { IsNotEmpty, MinLength, IsInt, IsEmpty, IsOptional, Matches, MaxLength, ValidateIf, IsBoolean, Allow } from 'class-validator';
export class CreateUserDto {
  
  @Allow()
  @IsNotEmpty()
  @IsOptional()
  email: string;

  @Allow()
  @IsNotEmpty()
  @Matches(RegExp('^[6-9]{1}[0-9]{9}$'))
  phone: string;

  @Allow()
  @IsNotEmpty()
  age: string;

  @Allow()
  @IsNotEmpty()
  @Matches(RegExp('^[1-9][0-9]{5}$'))
  picode: string;

  @Allow()
  @IsNotEmpty()
  name: string;

}
