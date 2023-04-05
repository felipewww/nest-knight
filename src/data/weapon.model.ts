export enum IWeaponAttributes {
    Strength= 'strength',
    Distance= 'distance',
}

export interface WeaponModel {
    name: string,
    mod: number,
    attr: IWeaponAttributes,
    equipped: boolean
}
