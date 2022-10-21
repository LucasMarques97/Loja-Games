import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { ILike } from 'typeorm';

@Injectable()
export class UsuariosService {
  usuariosRepository: any;
  constructor(
    @Inject("USUARIOS_REPOSITORY")
    private usuarioRepository: Repository<Usuario>) {}

    async findAll(): Promise<Usuario[]> {
      return await this.usuarioRepository.find();
    }

    async findById (id_user: number): Promise<Usuario>{
      let usuario = await this.usuarioRepository.findOne({
        where: {
          id_user
        }
      })
      if (!usuario){
        throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND)
      }
      return new Usuario
    }

    async findByName (nome: string): Promise<Usuario[]>{
      return await this.usuarioRepository.find({
        where:{
          nome: ILike(`"%${nome}%"`)
        }
      })
    }

    async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
      return this.usuariosRepository.save(createUsuarioDto);
    }

    async update(id_user: number, updateProdutoDto: UpdateUsuarioDto) {
      return this.usuariosRepository.update(id_user, updateUsuarioDto);
    }

  async delete(id_user
    : number): Promise<DeleteResult> {

    let buscaUsuario = await this.findById(id_user
      );

    if (!buscaUsuario) {
        throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)
    }
    return await this.usuariosRepository.delete(id_user);
  }
}
