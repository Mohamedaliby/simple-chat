import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './socket';
import { DatabaseModule } from './db/db.module';
import { ChatModule } from './chat/chat.module';
import { UsersService } from './users/users.service';
import { OnlineUsersModule } from './online-users/online-users.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [DatabaseModule,ChatModule, OnlineUsersModule, MessageModule, UserModule,ConfigModule.forRoot({envFilePath: '.env'})],
  controllers: [AppController],
  providers: [AppService, ChatGateway, UsersService],
})
export class AppModule {}
