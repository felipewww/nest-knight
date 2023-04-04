import {KnightEntity} from "@/domain/knight/Knight.entity";

export class KnightRepo {
    async save(knight: KnightEntity) {
        if (knight.id) {
            console.log('should update only NICKNAME')
        } else {
            console.log('should create a new knight!')
        }
        
        return Promise.resolve(true)
    }
    
    get(id?: number) {
    
    }
}