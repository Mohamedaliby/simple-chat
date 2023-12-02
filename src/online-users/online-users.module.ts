import { Module } from '@nestjs/common';
import { OnlineUsersService } from './online-users.service';
import { OnlineUsersGateway } from './online-users.gateway';
import { OnlineUsersProviders } from './online-users.provider';
import { OnlineUsersController } from './online-users.controller';
import { DatabaseModule } from 'src/db/db.module';
import { UserService } from 'src/user/user.service';
import { UsersProviders } from 'src/user/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...OnlineUsersProviders,OnlineUsersGateway, OnlineUsersService,UserService,...UsersProviders],
  controllers: [OnlineUsersController],
})
export class OnlineUsersModule {}
