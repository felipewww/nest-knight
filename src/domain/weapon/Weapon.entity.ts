export interface WeaponDto {
    name: string,
    mod: number,
    attr: string,
}

export class WeaponEntity implements WeaponDto {
    constructor(
        public name: string,
        public mod: number,
        public attr: string,
    ) {
    }
}