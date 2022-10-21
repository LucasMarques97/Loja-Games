import { IsString, IsNumber } from "class-validator";

export class CreateCategoriaDto {
    @IsNumber()
    id_ct2: number;

    @IsString()
    moveis: string;

    @IsString()
    decoracao: string;
}
