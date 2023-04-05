import { Injectable } from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {KnightEntity} from "@/domain/knight/Knight.entity";
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {SaveKnightSO} from "@/domain/knight/knight.dto";

@Injectable()
export class SaveKnightService extends BaseService<any> {
    // todo - confirmar tipo de retorno
    constructor(
        private knightRepo: KnightRepo
    ) {
        super();
    }
    
    async handle(dto: SaveKnightSO): Promise<any> {
        const knight = new KnightEntity(
            dto.name,
            dto.nickname,
            dto.birthday,
            dto.weapons,
            dto.attributes,
            dto.keyAttribute,
            dto._id
        )
        
        await this.knightRepo.save(knight)
        
        let txt = (dto._id) ? 'update' : 'create'
        return Promise.resolve(txt+" success");
    }
}
