import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { ILike } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ){}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findById(id_pdt
    : number): Promise<Produto> {

    let produto = await this.produtoRepository.findOne({

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

  async create(Produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(Produto);
  }

  async update(id_pdt
    : number, Produto: Produto) {
    return this.produtoRepository.update(id_pdt, Produto);
  }

/*   async delete(id_pdt
    : number): Promise<DeleteResult> {

    let buscaProduto = await this.findById(id_pdt
      );

    if (!buscaProduto) {
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.produtoRepository.delete(id_pdt);
  } */
}
