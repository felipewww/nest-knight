import {WeaponModel} from "@/data/weapon.model";
import {Attributes, EKnightKeyAttributes} from "@/domain/knight/knight.dto";
import {BaseModel} from "@/data/base-model";

export interface KnightModel {
    _id?: any
    name: string
    nickname: string
    birthday: string
    weapons: Array<WeaponModel>
    attributes: Attributes
    keyAttribute: EKnightKeyAttributes
}

export class KnightSource extends BaseModel<KnightModel> {
    collectionName = 'knights'
}
