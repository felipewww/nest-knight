import {KnightEntity, KnightEntityFactory} from "@/domain/knight/Knight.entity";
import {Injectable} from "@nestjs/common";
import {HeroSource} from "@/data/heroes.model";

@Injectable()
export class HeroRepo {
    constructor(
        private source: HeroSource
    ) {
    }
    
    async save(knight: KnightEntity) {
        return this.source.create(knight)
    }
    
    async get(id?: number) {
        const heroesModel = await this.source.find(id)
        
        const entities: Array<KnightEntity> = []
        for (let row of heroesModel) {
            entities.push(KnightEntityFactory(row))
        }
        
        return entities;
    }
}