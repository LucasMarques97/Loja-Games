import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: "tb_categorias"})
export class categorias{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    Produto: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    Especificação: string

    @UpdateDateColumn()
    data: Date
}