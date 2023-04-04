import {Injectable} from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {EKnightKeyAttributes, KnightEntity} from "@/domain/knight/Knight.entity";
import {AttributesEntity} from "@/domain/knight/Attributes.entity";
import {WeaponEntity} from "@/domain/weapon/Weapon.entity";

export type KnightStatus = 'heroes'|'alive';

export interface IReadKnightSO {
    id?: number,
    type: KnightStatus
}

@Injectable()
export class ReadKnightService extends BaseService<any>{
    async handle(dto: IReadKnightSO): Promise<any> {
        const sword = new WeaponEntity('sword', 3, "strength")
        
        const knight = new KnightEntity(
            "Fake knight",
            "pãogordo",
            "1988-09-24",
            [sword],
            new AttributesEntity(),
            EKnightKeyAttributes.STRENGTH, // todo - de onde vem isso?
        )
        
        knight.equipWeapon(1)
        
        return Promise.resolve(
            knight
        );
    }
}
