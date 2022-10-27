import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Usuario } from './entities/usuario.entity';
import { Bcrypt } from 'src/auth/bcrypt/bcrypt';
import { UsuariosService } from './services/usuarios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService, Bcrypt],
  exports: [UsuariosService],
})
export class UsuariosModule {}