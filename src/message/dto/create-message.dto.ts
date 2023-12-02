import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateMessageDto {
    idTo:string
    id: string;
    type: string;
    status: string;
    url: string;
    text: string;
    chatId: string;
    createdAt: Date;
    updatedAt: Date;
    author: CreateUserDto;
    to: CreateUserDto;
}
