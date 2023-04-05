export enum IWeaponAttributes {
    Strength= 'strength',
    Distance= 'distance', //todo - manter distance de exemplo?
}

export interface WeaponModel {
    name: string,
    mod: number,
    attr: IWeaponAttributes,
    equipped: boolean
}
