import {BaseModel} from "@/data/base-model";
import {KnightModel} from "@/data/knight.model";

export interface HeroModel extends KnightModel {
}

export class HeroSource extends BaseModel<HeroModel> {
    collectionName = 'heroes'
}
