import { DataSource } from 'typeorm';
import { OnlineUser } from 'src/online-users/entities/online-user.entity';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        // host: process.env.DATABASE_HOST,
        port: 3306,
        // username: 'root',
        // password: '',  
        username: process.env.DB_USERNAME,
        password:  process.env.DB_PASSWORD,
        database: 'chat',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
  {
    provide: 'MEMORY_DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "sqlite",
        database: ":memory:",
        dropSchema: true,
        // entities: [  __dirname + '/../**/*.entity{.ts,.js}',],
        entities: [ OnlineUser],
        synchronize: true,
        logging: false,
      });
console.log('memory')
      return dataSource.initialize();
    },
  },
];