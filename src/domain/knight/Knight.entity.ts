import {Attributes, EKnightKeyAttributes, KnightDto, KnightWeaponSO} from "@/domain/knight/knight.dto";
import {KnightModel} from "@/data/knight.model";
import {BaseEntity} from "@/domain/base-entity";

export class KnightEntity extends BaseEntity<KnightDto> implements KnightModel {
    
    constructor(
        public name: string,
        public nickname: string,
        public birthday: string,
        public weapons: Array<KnightWeaponSO>,
        public attributes: Attributes,
        public keyAttribute: EKnightKeyAttributes,
        public id?: number,
    ) {
        super();
        
        // todo - testar leitura de weapon equiped do banco se vem corretamente
        this.initWeapons();
    }
    
    // todo - ainda precisa mesmo inicializar?
    private initWeapons() {
        for (const weapon of this.weapons) {
            if (weapon.equipped === undefined) {
                weapon.equipped = false
            }
        }
    }
    
    
    public mountDto() {
        return {
            id: this.id,
            name: this.name,
            age: this.calcAge(),
            weapons: this.weapons,
            keyAttribute: this.keyAttribute,
            attack: this.calcAttack(),
            exp: this.calcExp(),
        }
    }
    
    private calcAge() {
        return 10 //todo
    }
    
    private calcAttack() {
        return 10 //todo
    }
    
    private calcExp() {
        return 10 //todo
    }
    
    public equipWeapon(pos: number) {
        if (this.weapons[pos]) {
            this.weapons[pos].equipped = true;
        }
    }
}

export function KnightEntityFactory(model: KnightModel) {
    return new KnightEntity(
        model.name,
        model.nickname,
        model.birthday,
        model.weapons,
        model.attributes,
        model.keyAttribute,
        model.id
    )
}