import { Test, TestingModule } from '@nestjs/testing';
import { OnlineUsersGateway } from './online-users.gateway';
import { OnlineUsersService } from './online-users.service';

describe('OnlineUsersGateway', () => {
  let gateway: OnlineUsersGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineUsersGateway, OnlineUsersService],
    }).compile();

    gateway = module.get<OnlineUsersGateway>(OnlineUsersGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
