import { Inject, Injectable } from '@nestjs/common';
import { CreateOnlineUserDto } from './dto/create-online-user.dto';
import { UpdateOnlineUserDto } from './dto/update-online-user.dto';
import { Repository } from 'typeorm';
import { OnlineUser } from './entities/online-user.entity';

@Injectable()
export class OnlineUsersService {
  constructor(
    // @InjectRepository(Chat)
    // private chatRepository: Repository<Chat>,
    @Inject('ONLINE_USERS_REPOSITORY')
    private onlineUserRepository: Repository<OnlineUser>,
  ) {}
  async create(createOnlineUserDto: CreateOnlineUserDto) {
    // return 'This action adds a new onlineUser';
  await this.onlineUserRepository.insert(createOnlineUserDto) 
  let users = await this.onlineUserRepository.find() 
  console.log(users)
   

  }

  async findAll() {
      let users = await this.onlineUserRepository.find() 
  }

  async findOne(id: any) {

    return await this.onlineUserRepository.findOneBy({id:id}) 
  }

  update(id: number, updateOnlineUserDto: UpdateOnlineUserDto) {
    return `This action updates a #${id} onlineUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} onlineUser`;
  }
}
