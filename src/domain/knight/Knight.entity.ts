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
        public _id?: number,
    ) {
        super();
    }
    
    public mountDto() {
        return {
            _id: this._id,
            name: this.nickname, // a prop da api é NOME, mas imaginei ser o nickname pelo fato de poder fazer update
            age: this.calcAge(),
            weapons: this.weapons,
            keyAttribute: this.keyAttribute,
            attack: this.calcAttack(),
            exp: this.calcExp(),
        }
    }
    
    private calcAge() {
        const now = new Date();
        const birthDate = new Date(this.birthday);
        let age = now.getFullYear() - birthDate.getFullYear();
        
        const birthMonth = now.getMonth() - birthDate.getMonth();
        if (
            birthMonth < 0
            || (
                birthMonth === 0
                && now.getDate() < birthDate.getDate()
            )
        ) {
            age--;
        }
        
        return age;
    }
    
    private calcAttack() {
        const modAttr = this.attributes[this.keyAttribute];
        const equippedWeapon = this.getEquippedWeapon();
        
        let modWeapon = 0;
        if (equippedWeapon) {
            modWeapon = equippedWeapon.mod
        }
        
        return 10 + modAttr + modWeapon;
    }
    
    private calcExp() {
        let age = this.calcAge();
        let xp = 0;
        
        if (age >= 7) {
            xp = Math.floor((age - 7) * Math.pow(22, 1.45))
        }
        
        return xp; //todo
    }
    
    private getEquippedWeapon() {
        for (let w of this.weapons) {
            if (w.equipped) {
                return w;
            }
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
        model._id
    )
}