import { Injectable,Inject } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { ILike } from 'typeorm/find-options/operator/ILike';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@Injectable()
export class CategoriasService {
  constructor( 
    @Inject("CATEGORIA_REPOSITORY")
    private categoriaRepository: Repository<Categoria>){}

    async findAll(): Promise<Categoria[]>{
      return await this.categoriaRepository.find();
    } 

    async findById (id_ct2: number): Promise <Categoria>{
      let categoria = await this.categoriaRepository.findOne({
        where: {
          id_ct2
        }
      })
      if (!categoria){
        throw new HttpException('categoria não encontrada', HttpStatus.NOT_FOUND)
      }
      return categoria
    }

    async findByName (decoracao: string): Promise<Categoria[]>{
      return await this.categoriaRepository.find({
        where:{
          decoracao: ILike(`"%${decoracao}%"`)
        }
      })
    }

    async create(createCategoriaDto: CreateCategoriaDto): Promise<CreateCategoriaDto> {
      return this.categoriaRepository.save(createCategoriaDto);
    }
  
    async update(id_ct2: number, updateCategoriaDto: UpdateCategoriaDto) : Promise<UpdateCategoriaDto> {
      return this.categoriaRepository.update(id_ct2, updateCategoriaDto);
    }
  
    async delete(id_ct2
      : number): Promise<DeleteResult> {
  
      let buscaCategoria = await this.findById(id_ct2
        );
  
      if (!buscaCategoria) {
          throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
      }
      return await this.categoriaRepository.delete(id_ct2
        );
    }
  }
