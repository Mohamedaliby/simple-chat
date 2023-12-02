import { Message } from "src/message/entities/message.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName:string;
    @Column()
    lastName:string;
    @Column()
    imageUrl:string;
    // @ManyToOne(() => OnlineUser, (snd) => snd.messagesOut)
    // author: OnlineUser;
  
    @OneToMany(() => Message, (message) => message.id)
    to: Message;
}
