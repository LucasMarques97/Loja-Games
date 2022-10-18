import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutosController } from "../controllers/produto.controller";
import { Produto } from "./produto.entity";
import { ProdutosService } from "../services/produto.service";
import { DatabaseModule } from "../database/database.module";


@Module({
    imports: [TypeOrmModule.forFeature([Produto]), DatabaseModule],
    providers: [ProdutosService],
    controllers: [ProdutosController],
    exports: [TypeOrmModule]
})
export class ProdutoModule{}