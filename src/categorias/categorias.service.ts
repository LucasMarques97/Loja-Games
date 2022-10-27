import { Injectable,Inject } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Repository } from 'typeorm';
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

    async create(categoria: Categoria): Promise<Categoria> {
      return this.categoriaRepository.save(categoria);
    }
  
    async update(categoria: Categoria) : Promise<Categoria> {
      let buscaCategoria: Categoria = await this.findById(categoria.id_ct2);

      if (!buscaCategoria || !categoria.id_ct2)
      throw new HttpException('categoria não encontrada', HttpStatus.NOT_FOUND)

      return this.categoriaRepository.save(categoria);
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
