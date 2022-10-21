import { IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {
    
    @IsNumber()
    id_user: number;

    @IsString()
    nome: string;

    @IsString()
    usuario: string;

    @IsString()
    email: string;

    @IsString()
    senha: string;

    @IsString()
    foto: string;

}
