import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTodoDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @MaxLength(256)
    description: string;

}