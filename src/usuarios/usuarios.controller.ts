import { Controller, Get, Post, Body, Patch, Param, HttpCode, HttpStatus, UseGuards, ParseIntPipe } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { UsuariosService } from './services/usuarios.service';


@Controller('/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/todos')
  @HttpCode(HttpStatus.OK)
  findAll():  Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/cadastrar')
  async create(@Body() usuario: Usuario): Promise<Usuario> {
      return this.usuariosService.create(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuariosService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
    findByName(@Param('nome') nome:string): Promise<Usuario>{
      return this.usuariosService.findByUsuario(nome);
    }

  @UseGuards(JwtAuthGuard)
  @Patch('/atualizar')
  @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuariosService.update(usuario);
    }
}
