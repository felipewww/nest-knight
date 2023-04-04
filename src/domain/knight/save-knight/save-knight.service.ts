import { Injectable } from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {IKnightDto, KnightEntity} from "@/domain/knight/Knight.entity";
import {KnightRepo} from "@/domain/knight/Knight.repo";

@Injectable()
export class SaveKnightService extends BaseService<any>{
    async handle(dto: IKnightDto): Promise<any> {
        const knight = new KnightEntity(
            dto.name,
            dto.nickname,
            dto.birthday,
            dto.weapons,
            dto.attributes,
            dto.keyAttribute,
            dto.id
        )
        
        const repo = new KnightRepo(); // todo - colocar como INJECTABLE???
        await repo.save(knight)
        
        let txt = (dto.id) ? 'update' : 'create'
        return Promise.resolve(txt+" success");
    }
}
