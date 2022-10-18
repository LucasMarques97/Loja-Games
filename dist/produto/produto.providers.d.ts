import { DataSource } from 'typeorm';
import { Produto } from './entities/produto.entity';
export declare const produtosProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Produto>;
    inject: string[];
}[];
