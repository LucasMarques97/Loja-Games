import { Injectable, Inject } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { ILike } from 'typeorm';

@Injectable()
export class ProdutosService {
  produtosRepository: any;
  constructor( 
    @Inject("PRODUTOS_REPOSITORY")
    private produtoRepository: Repository<Produto>){}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findById(id_pdt
    : number): Promise<Produto> {

    let produto = await this.produtosRepository.findOne({

      where: {
        id_pdt

      }

    })
    if(!produto)
    throw new HttpException ('Produto não encontrado', HttpStatus.NOT_FOUND)

    return produto
  }

  async findByName (name: string): Promise<Produto[]>{
    return await this.produtoRepository.find({
      where:{
        nome: ILike(`"%${name}%"`)
      }
    })
  }

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    return this.produtosRepository.save(createProdutoDto);
  }

  async update(id_pdt
    : number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtosRepository.update(id_pdt
      , updateProdutoDto);
  }
  async delete(id_pdt
    : number): Promise<DeleteResult> {

    let buscaProduto = await this.findById(id_pdt
      );

    if (!buscaProduto) {
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.produtoRepository.delete(id_pdt);
  }
}
