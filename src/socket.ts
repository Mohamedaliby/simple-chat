import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, ConnectedSocket, MessageBody  } from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    console.log(  client.handshake.headers,client.handshake.auth);
  
    
    // Handle connection event
  }

  handleDisconnect(client: any) {
    // Handle disconnection event
  }
  @SubscribeMessage('mag')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    // Handle received message
    console.log(data);
    this.server.emit('message', data); // Broadcast the message to all connected clients
  }
}