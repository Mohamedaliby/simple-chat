import { DataSource } from 'typeorm';
import { OnlineUser } from './entities/online-user.entity';

export const OnlineUsersProviders = [
  {
    provide: 'ONLINE_USERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(OnlineUser),
    inject: ['MEMORY_DATA_SOURCE'],
  },
];