import { DataSource } from 'typeorm';
import { Message } from './entities/message.entity';

export const MessageProviders = [
  {
    provide: 'MESSAGE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Message),
    inject: ['DATA_SOURCE'],
  },
];