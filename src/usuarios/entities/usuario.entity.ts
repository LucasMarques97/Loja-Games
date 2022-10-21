import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { MinLength } from "class-validator";
import { Produto } from "src/produtos/entities/produto.entity";

@Entity(({name: 'usuarios'}))
export class Usuario {

    @PrimaryGeneratedColumn()
    public id_user: number;

    @Column({length: 100, nullable: false})
    public nome: string;

    @Column({length: 100, nullable: false})
    public usuario: string;

    @Column({length: 100, nullable: false})
    public email: string;

    @Column({length: 100, nullable: false})
    @MinLength(1) //@MinLength, para definir que a senha deve ter caracteres especiais, e (1) para quantificar quantos caracteres minimos deve ter.
    senha: string;

    @Column({length: 5000})
    public foto: string;

    @OneToMany(() => Produto, (produtos) => produtos.Usuarios)
    produtos: Produto[]
}

