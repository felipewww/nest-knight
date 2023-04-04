import { Test, TestingModule } from '@nestjs/testing';
import { SaveKnightService } from './save-knight.service';

describe('SaveKnightService', () => {
  let service: SaveKnightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveKnightService],
    }).compile();

    service = module.get<SaveKnightService>(SaveKnightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
