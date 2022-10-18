import { DataSource } from 'typeorm';
import { categorias } from './entities/categorias.entity';

export const categoriasProviders = [
  {
    provide: 'CATEGORIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(categorias),
    inject: ['DATA_SOURCE'],
  },
];