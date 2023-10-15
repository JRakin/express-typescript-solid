import { IsDateString, IsEmail, IsString, MaxDate, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    firstName: string

    @IsString()
    @MinLength(2)
    lastName: string

    @IsDateString()
    @MaxDate(new Date())
    dateOfBirth: Date

    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    password: string

}