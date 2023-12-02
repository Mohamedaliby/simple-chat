import { OnlineUser } from "src/online-users/entities/online-user.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ nullable: true })
    type: string;
    @Column({ default: 'unread' })
    status: string;
    @Column({ nullable: true })
    url: string;
    @Column({ nullable: true })
    text: string;
    @Column({ nullable: true })
    chatId: string;
    @CreateDateColumn()
    createdAt: Date;
    @CreateDateColumn({ nullable: true })
    updatedAt: Date;
    @ManyToOne(() => User, (author) => author.id)
    author: User;
    @ManyToOne(() => User, (to) => to.id)
    to: User;
}
