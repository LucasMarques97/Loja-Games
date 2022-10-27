import { Produto } from "src/produtos/entities/produto.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity(({name: 'categoria'}))
export class Categoria {
    @PrimaryGeneratedColumn()
    id_ct2: number;

    @Column({length: 100})
    moveis: string;

    @Column({name: "ambiente", length: 100})
    decoracao: string;

    @OneToMany(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    produto: Produto[];
    
}
