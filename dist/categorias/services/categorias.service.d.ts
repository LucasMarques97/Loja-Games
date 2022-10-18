import { CreateCategoriaDto } from '../dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../dto/update-categoria.dto';
export declare class CategoriaService {
    create(CreateCategoriaDto: CreateCategoriaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, UpdateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: number): string;
}
