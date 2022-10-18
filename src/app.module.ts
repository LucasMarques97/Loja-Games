import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/entities/produto.module';
import { CategoriasModule } from './categorias/entities/categorias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'tb_jogos',
    entities: [ProdutoModule, CategoriasModule],
    synchronize: true,
    }),
    ProdutoModule,
    CategoriasModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

