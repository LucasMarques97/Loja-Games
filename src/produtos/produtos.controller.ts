import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Get(':id_pdt')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_pdt', ParseIntPipe) id_pdt: number): Promise<Produto> {
    return this.produtosService.findById(id_pdt);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
    findByName(@Param('nome') nome:string): Promise<Produto[]>{
      return this.produtosService.findByName(nome);
    }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Patch('/atualizar/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(id, updateProdutoDto);
  }

  @Delete(':id_pdt')
  @HttpCode(HttpStatus.OK)
  Delete(@Param('id_pdt', ParseIntPipe) id_pdt: number) {
   return this.produtosService.delete(id_pdt);
}
}
