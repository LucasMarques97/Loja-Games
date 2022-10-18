import { Module } from '@nestjs/common';
import { produtosProviders } from '../produto.providers';
import { databaseProviders } from './database.providers';

@Module({
  imports: [],
  providers: [...databaseProviders, ...produtosProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}