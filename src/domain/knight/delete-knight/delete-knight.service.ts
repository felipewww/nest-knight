import { Injectable } from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {IDeleteKnightSO} from "@/domain/knight/knight.dto";

// todo - confirmar BOOL com oretorno
@Injectable()
export class DeleteKnightService extends BaseService<boolean> {
    constructor(
        private knightRepo: KnightRepo
    ) {
        super();
    }
    
    async handle(dto: IDeleteKnightSO): Promise<boolean> {
        console.log(`delete ${dto.id} success`);
        return Promise.resolve(true);
    }
}
