import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { ParseIntPipe } from '@nestjs/common/pipes';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id_user')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number) {
    return this.usuariosService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
    findByName(@Param('nome') nome:string): Promise<Usuario[]>{
      return this.usuariosService.findByName(nome);
    }

  @Patch('/atualizar/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id_user: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id_user, updateUsuarioDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  Delete(@Param('id', ParseIntPipe) id_user: number) {
    return this.usuariosService.delete(id_user);
  }
}
