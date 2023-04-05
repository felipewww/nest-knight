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
        if (knight._id) {
            return this.source.update(
                { nickname: knight.nickname },
                knight._id
            )
        } else {
            return this.source.create(knight)
        }
    }
    
    async get(id?: number) {
        const knightsModel = await this.source.find(id)
        
        const entities: Array<KnightEntity> = []
        for (let row of knightsModel) {
            entities.push(KnightEntityFactory(row))
        }
        
        return entities;
    }
    
    delete(id: any) {
        return this.source.delete(id)
    }
}