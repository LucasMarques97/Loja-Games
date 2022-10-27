import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias/entities/categoria.entity';
import { Produto } from './produtos/entities/produto.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ecommerce',
      entities: [Categoria, Produto, Usuario],
      synchronize: true,
    }),
    AuthModule,
    CategoriasModule,
    UsuariosModule,
    ProdutosModule
  ],
  controllers:[],
  providers:[],
})
export class AppModule {}
