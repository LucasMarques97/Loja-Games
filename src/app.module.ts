import { Module } from '@nestjs/common';
/* import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import { CategoriasModule } from './categorias/categorias.module';
/* import { DatabaseModule } from './database/database.module'; */
import { ProdutosModule } from './produtos/produtos.module';
import { AuthModule } from './auth/auth.module';
import { usuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categorias/entities/categoria.entity';
import { Produto } from './produtos/entities/produto.entity';
import { Usuario } from './usuarios/entities/usuario.entity';

/* @Module({
  imports: [CategoriasModule, DatabaseModule, ProdutosModule, AuthModule, usuariosModule],
  controllers: [AppController],
  providers: [AppService],
}) */
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
    ProdutosModule,
    CategoriasModule,
    usuariosModule,
  ],
  controllers:[],
  providers:[],
})
export class AppModule {}
