import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { OnlineUsersService } from './online-users.service';
import { CreateOnlineUserDto } from './dto/create-online-user.dto';
import { UpdateOnlineUserDto } from './dto/update-online-user.dto';
import { Server,Socket } from 'socket.io';
import { UserService } from 'src/user/user.service';

@WebSocketGateway()
export class OnlineUsersGateway {
  constructor(private readonly onlineUsersService: OnlineUsersService,private readonly userService: UserService) {}
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    console.log( client.handshake.headers,client.handshake.auth);
    if (client.handshake.headers.authorization) {
     let user  = await this.userService.findOne(parseInt(client.handshake.headers.authorization))
     client.join(client.handshake.headers.authorization)
      this.onlineUsersService.create(user);
    }
    if (client.handshake.auth.authorization) {
      client.join(String( client.handshake.auth.authorization))
      // this.onlineUsersService.create({id: client.handshake.auth.authorization});
    }


    console.log( client.rooms)
   
    // Handle connection event
  }

  handleDisconnect(client: any) {
    // Handle disconnection event
  }

  @SubscribeMessage('createOnlineUser')
  create(@MessageBody() createOnlineUserDto: CreateOnlineUserDto) {
    return this.onlineUsersService.create(createOnlineUserDto);
  }

  @SubscribeMessage('findAllOnlineUsers')
  findAll() {
    return this.onlineUsersService.findAll();
  }

  @SubscribeMessage('findOneOnlineUser')
  findOne(@MessageBody() id: number) {
    return this.onlineUsersService.findOne(id);
  }

  @SubscribeMessage('updateOnlineUser')
  update(@MessageBody() updateOnlineUserDto: UpdateOnlineUserDto) {
    return this.onlineUsersService.update(updateOnlineUserDto.id, updateOnlineUserDto);
  }

  @SubscribeMessage('removeOnlineUser')
  remove(@MessageBody() id: number) {
    return this.onlineUsersService.remove(id);
  }
}
