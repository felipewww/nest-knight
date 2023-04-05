import {BaseEntity} from "@/domain/base-entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export class EntityDtoAdapter<ENT extends BaseEntity<DTO>, DTO> {
    // private dtos: Array<DTO> = [];
    
    constructor(
        // private entities: Array<ENT>
    ) {
    
    }
    
    handle(entities: Array<ENT>) {
        const dtos: Array<DTO> = [];
        
        for (const entity of entities) {
            dtos.push(entity.mountDto())
        }
        
        return dtos;
    }
}