import {KnightModel} from "@/data/knight.model";
import {WeaponModel} from "@/data/weapon.model";

export interface SaveKnightSO extends KnightModel {}

export interface IDeleteKnightSO {
    id: number
}

export type KnightStatus = 'heroes'|'alive';

export interface IReadKnightSO {
    id?: number,
    type: KnightStatus
}

// todo - não pode chamar SO, não faz parte de um serviço
export interface KnightWeaponSO extends WeaponModel {
    equipped: boolean
}

export enum EKnightKeyAttributes {
    Strength = 'strength',
    Dexterity = "dexterity",
    Constitution = "constitution",
    Intelligence = "intelligence",
    Wisdom = "wisdom",
    Charisma = "charisma",
}

export type Attributes = {
    [key in EKnightKeyAttributes]: number
}

export interface KnightDto {
    id: number,
    name: string,
    age: number,
    weapons: Array<KnightWeaponSO>,
    keyAttribute: EKnightKeyAttributes,
    attack: number,
    exp: number
}
