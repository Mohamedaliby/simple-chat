import { Message } from 'src/message/entities/message.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type: string;
    @OneToMany(type => Message, message => message.chatId)
    message: Message[];
  
}
