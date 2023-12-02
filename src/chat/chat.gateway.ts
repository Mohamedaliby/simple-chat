import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) { }
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('createChat')
  create(@MessageBody(new ValidationPipe({transform:true})) createChatDto: CreateChatDto) {

    console.log(this.chatService);
    this.server.emit('message','hi')

    return this.chatService.create(createChatDto);
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.chatService.findAll();
  }

  @SubscribeMessage('findOneChat')
  findOne(@MessageBody() id: number) {
    return this.chatService.findOne(id);
  }

  @SubscribeMessage('updateChat')
  update(@MessageBody() updateChatDto: UpdateChatDto) {
    return this.chatService.update(updateChatDto.id, updateChatDto);
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatService.remove(id);
  }
}
