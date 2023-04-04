import {WeaponEntity} from "@/domain/weapon/Weapon.entity";
import {AttributesDto, AttributesEntity} from "@/domain/knight/Attributes.entity";

export enum EKnightKeyAttributes {
    STRENGTH = 'strength',
    AGILITY = 'agility'
}

export class KnightWeaponVO extends WeaponEntity {
    equipped?: boolean
}

export interface IKnightDto {
    id?: number
    name: string
    nickname: string
    birthday: string
    weapons: Array<KnightWeaponVO>
    attributes: AttributesDto
    keyAttribute: EKnightKeyAttributes
}

export class KnightEntity implements IKnightDto {
    
    constructor(
        public name: string,
        public nickname: string,
        public birthday: string,
        public weapons: Array<KnightWeaponVO>,
        public attributes: AttributesEntity,
        public keyAttribute: EKnightKeyAttributes,
        public id?: number,
    ) {
        this.initWeapons()
    }
    
    private initWeapons() {
        for (const weapon of this.weapons) {
            if (weapon.equipped === undefined) {
                weapon.equipped = false
            }
        }
    }
    
    public equipWeapon(pos: number) {
        if (this.weapons[pos]) {
            this.weapons[pos].equipped = true;
        }
    }
}