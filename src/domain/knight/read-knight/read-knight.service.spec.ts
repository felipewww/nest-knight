import { Test, TestingModule } from '@nestjs/testing';
import { ReadKnightService } from './read-knight.service';

describe('ReadKnightService', () => {
  let service: ReadKnightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadKnightService],
    }).compile();

    service = module.get<ReadKnightService>(ReadKnightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
