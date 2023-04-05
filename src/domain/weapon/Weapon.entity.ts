import {IWeaponAttributes, WeaponModel} from "@/data/weapon.model";

export class WeaponEntity implements WeaponModel {
    constructor(
        public name: string,
        public mod: number,
        public attr: IWeaponAttributes,
        public equipped: boolean = false
    ) {
    }
}