import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'

@Entity(({name: 'produtos'}))
export class Produto {
    name(name: any) {
      throw new Error('Method not implemented.');
    }
    produto(produto: any) {
      throw new Error('Method not implemented.');
    }
  
    @PrimaryGeneratedColumn()
    id_pdt: number;

    @Column({length: 100})
    nome: string;

    @Column({length: 100})
    preco: string;

    @Column({length: 100})
    peso: string;

    @Column({length: 10000})
    descricao: string;


   /*  @Column({ length: 100})
    valor: number; */
    @ManyToOne(() => Usuario, (Usuarios) => Usuarios.produtos)
    Usuarios: Usuario[]

    @OneToMany(() => Categoria, (Categoria) => Categoria.produto)
    Categorias: Categoria[]
}

