import { Inject, Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';
@Injectable()
export class ChatService {
  constructor(
    // @InjectRepository(Chat)
    // private chatRepository: Repository<Chat>,
    @Inject('CHAT_REPOSITORY')
    private chatRepository: Repository<Chat>,
  ) {}
  async create(createChatDto: CreateChatDto) {
    
    // return 'This action adds a new chat';
    let res = await this.chatRepository.insert(createChatDto) 
    console.log(res);
    return this.chatRepository.find();

  }

  findAll() {
    return `This action returns all chat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}

