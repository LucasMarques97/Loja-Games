import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { usuariosProviders } from './usuarios.provider';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Usuario]), JwtModule.register({secret: 'hard!to-guess_secret'})],
  controllers: [UsuariosController],
  providers: [UsuariosService, ...usuariosProviders]
})
export class usuariosModule {}