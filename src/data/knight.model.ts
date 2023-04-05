import {IWeaponAttributes, WeaponModel} from "@/data/weapon.model";
import {Attributes, EKnightKeyAttributes} from "@/domain/knight/knight.dto";
import {Injectable} from "@nestjs/common";

export interface KnightModel {
    id?: number
    name: string
    nickname: string
    birthday: string
    weapons: Array<WeaponModel>
    attributes: Attributes
    keyAttribute: EKnightKeyAttributes
}

@Injectable()
export class KnightSource {
    constructor() {
    }
    
    async get(id?: number): Promise<Array<KnightModel>> {
        const sourceRes: Array<KnightModel> = [{
            id: 1,
            name: 'fake1',
            nickname: 'fake1nick',
            birthday: "1988-09-24",
            weapons: [{
                name: 'sword',
                mod: 3,
                attr: IWeaponAttributes.Strength,
                equipped: false
            }],
            attributes: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
            },
            keyAttribute: EKnightKeyAttributes.Strength,
        }]
        
        return Promise.resolve(sourceRes)
    }
}