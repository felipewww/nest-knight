import {Injectable} from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {KnightEntity} from "@/domain/knight/Knight.entity";
import {IReadKnightSO, KnightDto} from "@/domain/knight/knight.dto";
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {EntityDtoAdapter} from "@/domain/EntityDtoAdapter";
import {HeroRepo} from "@/domain/knight/Hero.repo";

@Injectable()
export class ReadKnightService extends BaseService<Array<KnightDto>> {
    constructor(
        private knightRepo: KnightRepo,
        private heroRepo: HeroRepo,
        private dtoAdapter: EntityDtoAdapter<KnightEntity, KnightDto>
    ) {
        super();
    }
    
    async handle(so: IReadKnightSO): Promise<any> {
        
        let dtos: Array<KnightDto>;
        
        if (so.type === 'heroes') {
            const heroes = await this.heroRepo.get(so.id)
            dtos = this.dtoAdapter.handle(heroes);
        } else {
            const knights = await this.knightRepo.get(so.id);
            dtos = this.dtoAdapter.handle(knights);
        }
        
        return Promise.resolve(dtos);
    }
}
