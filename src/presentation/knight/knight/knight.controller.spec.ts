import { Test, TestingModule } from '@nestjs/testing';
import { KnightController } from './knight.controller';

describe('PostKnightController', () => {
  let controller: KnightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnightController],
    }).compile();

    controller = module.get<KnightController>(KnightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
