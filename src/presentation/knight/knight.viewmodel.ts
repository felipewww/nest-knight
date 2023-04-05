import {EKnightKeyAttributes, SaveKnightSO} from "@/domain/knight/knight.dto";
import * as joi from "joi"

export function StoreKnightVMSchema() {
    
    let schema: { [key: string]: any } = {
        name: joi.string().required(),
        nickname: joi.string().required(),
        attributes: {},
        birthday: joi.string().required(),
        weapons: joi.array(),
        keyAttribute: joi.string().required(),
    }
    
    for (const key in EKnightKeyAttributes) {
        schema.attributes[EKnightKeyAttributes[key]] = joi.number().required()
    }
    
    return joi.object(schema)
}

export function UpdateKnightVMSchema() {
    
    let schema: { [key: string]: any } = {
        nickname: joi.string().required(),
    }
    
    return joi.object(schema)
}

export interface KnightViewModel extends SaveKnightSO {

}