import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from "class-validator";
import {IsNull} from "typeorm";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    isActive: boolean;

    @IsEmail()
    email: string;

}
