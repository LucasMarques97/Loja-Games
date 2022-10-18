import { Module } from '@nestjs/common';
import { categoriasProviders } from '../categorias.providers';
import { databaseProviders } from './database.providers';

@Module({
  imports: [],
  providers: [...databaseProviders, ...categoriasProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}