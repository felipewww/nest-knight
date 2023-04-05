import {KnightEntity, KnightEntityFactory} from "@/domain/knight/Knight.entity";
import {KnightModel, KnightSource} from "@/data/knight.model";
import {EKnightKeyAttributes} from "@/domain/knight/knight.dto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class KnightRepo {
    constructor(
        private source: KnightSource
    ) {
    }
    
    async save(knight: KnightEntity) {
        if (knight.id) {
            console.log('should update only NICKNAME')
        } else {
            console.log('should create a new knight!')
        }
        
        return Promise.resolve(true)
    }
    
    async get(id?: number) {
        const knightsModel = await this.source.get(id)
        
        const entities: Array<KnightEntity> = []
        for (let row of knightsModel) {
            entities.push(KnightEntityFactory(row))
        }
        
        return entities;
    }
}