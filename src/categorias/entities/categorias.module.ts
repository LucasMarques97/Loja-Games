import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categorias } from "./categorias.entity";
import { CategoriaService } from "../services/categorias.service";
import { CategoriasController } from "../controller/categorias.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [TypeOrmModule.forFeature([categorias]), DatabaseModule],
  providers: [CategoriaService],
  controllers: [CategoriasController],
  exports: [TypeOrmModule]
})
export class CategoriasModule{}