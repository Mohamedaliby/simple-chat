import { DataSource } from 'typeorm';
import { Chat } from './entities/chat.entity';

export const ChatProviders = [
  {
    provide: 'CHAT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Chat),
    inject: ['DATA_SOURCE'],
  },
];