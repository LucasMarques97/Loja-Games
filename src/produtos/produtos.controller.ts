import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get('/todos')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id_pdt: number): Promise<Produto> {
    return this.produtosService.findById(id_pdt);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
    findByName(@Param('nome') nome:string): Promise<Produto[]>{
      return this.produtosService.findByName(nome);
    }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Produto: Produto) {
    return this.produtosService.create(Produto);
  }

  @Patch('/atualizar/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id_pdt: number, @Body() Produto: Produto) {
    return this.produtosService.update(id_pdt, Produto);
  }

}
