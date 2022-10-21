import { IsString, IsNumber } from "class-validator";

export class CreateProdutoDto {
    @IsNumber()
    id_ct1: number;

    @IsString()
    nome: string;

    @IsString()
    preco: string;

    @IsString()
    peso: string;

    @IsString()
    descricao: string;
}
