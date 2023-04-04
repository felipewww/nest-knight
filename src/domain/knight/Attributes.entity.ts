export interface AttributesDto {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
}

export class AttributesEntity implements AttributesDto {
    constructor(
        public strength: number = 0,
        public dexterity: number = 0,
        public constitution: number = 0,
        public intelligence: number = 0,
        public wisdom: number = 0,
        public charisma: number = 0,
    ) {
    
    }
}