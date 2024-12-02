import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

// DTO для регистрации
export class RegisterDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsNotEmpty()
    name?: string; // Поле для имени при регистрации
}

// DTO для входа
export class LoginDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}