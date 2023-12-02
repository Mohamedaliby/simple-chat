import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class OnlineUser {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName:string;
    @Column()
    lastName:string;
    @Column()
    imageUrl:string;
}
