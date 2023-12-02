import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { ChatProviders } from './chat.provider';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  imports: [DatabaseModule],
  providers: [...ChatProviders,ChatGateway, ChatService],
})
export class ChatModule {}
