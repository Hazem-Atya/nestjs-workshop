import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty()
    @MaxLength(256)
    name: string;

    @IsEmail()
    @MaxLength(256)
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(256)
    password: string;
}