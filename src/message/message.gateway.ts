import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Server, Socket } from 'socket.io';
import { OnlineUsersService } from 'src/online-users/online-users.service';

@WebSocketGateway()
export class MessageGateway {
  constructor(private readonly messageService: MessageService, private readonly uerService: OnlineUsersService) { }
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto);
    console.log('client')

    // await this.messageService.create(createMessageDto);
    let { author } = createMessageDto
    console.log(author);
    let mauthor = await this.uerService.findOne(author)
    let message: any = createMessageDto
    message.author = mauthor
    let to: any = createMessageDto.to
    this.server.to(to).emit('createMessage', createMessageDto)
    console.log('message',message)
    // this.server.emit('createMessage',message)
  }

  @SubscribeMessage('findAllMessage')
  findAll() {
    return this.messageService.findAll();
  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody() id: string) {
    return this.messageService.findOne(id);
  }

  @SubscribeMessage('updateMessage')
  update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(updateMessageDto.id, updateMessageDto);
  }

  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: string) {
    return this.messageService.remove(id);
  }
}
