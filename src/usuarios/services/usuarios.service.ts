import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ILike } from 'typeorm';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { Usuario } from '../entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>, 
    private bcrypt: Bcrypt
  ) {}

    async findByUsuario(usuario: string): Promise<Usuario | undefined> {
      return await this.usuarioRepository.findOne({
          where: {
              usuario: usuario
          }
      })
    }

    async findAll(): Promise<Usuario[]> {
      return await this.usuarioRepository.find({
        relations:{ produtos: true }
      });
    }

    async findById (id_user: number): Promise<Usuario>{
      let usuario = await this.usuarioRepository.findOne({
        where: {
          id_user
        },
      });
      if (!usuario){
        throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND)
      }
      return usuario
    }

  /*   async findByName (nome: string): Promise<Usuario[]>{
      return await this.usuarioRepository.find({
        where:{
          nome: ILike(`"%${nome}%"`)
        }
      })
    } */

    async create(usuario: Usuario): Promise<Usuario> {
      let buscaUsuario = await this.findByUsuario(usuario.usuario);

      if (!buscaUsuario) {
          usuario.senha = await this.bcrypt.cripitografarsenha(usuario.senha)
          return await this.usuarioRepository.save(usuario);
      }

      throw new HttpException("O Usuario ja existe!", HttpStatus.BAD_REQUEST);
    }

    async update(usuario: Usuario): Promise<Usuario>{ 
      let updateUsuario: Usuario = await this.findById(usuario.id_user);
      let buscaUsuario = await this.findByUsuario(usuario.usuario);

      if (!updateUsuario)
          throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

      if (buscaUsuario && buscaUsuario.id_user !== usuario.id_user)
          throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

      usuario.senha = await this.bcrypt.cripitografarsenha(usuario.senha)
      return await this.usuarioRepository.save(usuario);
    }
  }
