import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { DatabaseModule } from 'src/db/db.module';
import { MessageProviders } from './message.provider';
import { OnlineUsersProviders } from 'src/online-users/online-users.provider';
import { OnlineUsersService } from 'src/online-users/online-users.service';

@Module({
  imports: [DatabaseModule],
  providers: [...MessageProviders,MessageGateway, MessageService,OnlineUsersService,...OnlineUsersProviders],
})
export class MessageModule {}
