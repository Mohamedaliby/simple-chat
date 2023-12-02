import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersProviders } from './user.provider';
import { DatabaseModule } from 'src/db/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UsersProviders,UserService],
})
export class UserModule {}
