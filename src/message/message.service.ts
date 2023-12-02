import { Inject, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) { }
  async create(createMessageDto: CreateMessageDto) {
    console.log('service', createMessageDto);

    await this.messageRepository.insert(createMessageDto)
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: string) {
    return `This action returns a #${id} message`;
  }

  update(id: string, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: string) {
    return `This action removes a #${id} message`;
  }
}
