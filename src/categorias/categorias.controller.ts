import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './entities/categoria.entity';

@Controller('/categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post('/cadastrar')
  create(@Body() Categoria: Categoria) {
    return this.categoriasService.create(Categoria);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Categoria[]> {
    return this.categoriasService.findAll();
  }

  @Get(':id_ct2')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id_ct2', ParseIntPipe) id_ct2: number): Promise<Categoria> {
    return this.categoriasService.findById(id_ct2);
  }

  @Get('/decoracao/:decoracao')
  @HttpCode(HttpStatus.OK)
    findByName(@Param('decoracao') decoracao:string): Promise<Categoria[]>{
      return this.categoriasService.findByName(decoracao)
    }

  @Patch('/atualizar/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id_ct2') id_ct2: number, @Body() Categoria: Categoria) {
    return this.categoriasService.update(Categoria);
  }

  @Delete(':id_ct2')
  @HttpCode(HttpStatus.OK)
  Delete(@Param('id_ct2', ParseIntPipe) id_ct2: number) {
    return this.categoriasService.delete(id_ct2);
  }
}
