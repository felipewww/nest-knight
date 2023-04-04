import { Test, TestingModule } from '@nestjs/testing';
import { DeleteKnightService } from './delete-knight.service';

describe('DeleteKnightService', () => {
  let service: DeleteKnightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteKnightService],
    }).compile();

    service = module.get<DeleteKnightService>(DeleteKnightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
