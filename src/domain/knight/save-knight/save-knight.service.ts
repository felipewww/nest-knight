import { Injectable } from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {KnightEntity} from "@/domain/knight/Knight.entity";
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {SaveKnightSO} from "@/domain/knight/knight.dto";

@Injectable()
export class SaveKnightService extends BaseService<boolean> {
    constructor(
        private knightRepo: KnightRepo
    ) {
        super();
    }
    
    async handle(serviceObject: SaveKnightSO): Promise<boolean> {
        const knight = new KnightEntity(
            serviceObject.name,
            serviceObject.nickname,
            serviceObject.birthday,
            serviceObject.weapons,
            serviceObject.attributes,
            serviceObject.keyAttribute,
            serviceObject._id
        )
        
        await this.knightRepo.save(knight)
        
        return Promise.resolve(true);
    }
}
