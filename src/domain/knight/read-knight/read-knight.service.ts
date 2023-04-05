import {Injectable} from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {KnightEntity} from "@/domain/knight/Knight.entity";
import {IReadKnightSO, KnightDto} from "@/domain/knight/knight.dto";
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {EntityDtoAdapter} from "@/domain/EntityDtoAdapter";

@Injectable()
export class ReadKnightService extends BaseService<Array<KnightDto>> {
    constructor(
        private knightRepo: KnightRepo,
        private dtoAdapter: EntityDtoAdapter<KnightEntity, KnightDto>
    ) {
        super();
    }
    
    async handle(so: IReadKnightSO): Promise<any> {
        const knights = await this.knightRepo.get()
        
        const dtos = this.dtoAdapter.handle(knights);
        
        return Promise.resolve(dtos);
    }
}
