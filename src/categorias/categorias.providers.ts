import { DataSource } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

export const categoriasProviders = [
  {
    provide: 'CATEGORIA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
    inject: ['DATA_SOURCE'],
  },
];