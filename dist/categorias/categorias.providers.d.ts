import { DataSource } from 'typeorm';
import { categorias } from './entities/categorias.entity';
export declare const categoriasProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<categorias>;
    inject: string[];
}[];
