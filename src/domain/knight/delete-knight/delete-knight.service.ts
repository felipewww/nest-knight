import { Injectable } from '@nestjs/common';
import {BaseService} from "@/domain/base-service";
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {IDeleteKnightSO} from "@/domain/knight/knight.dto";

@Injectable()
export class DeleteKnightService extends BaseService<any> {
    constructor(
        private knightRepo: KnightRepo
    ) {
        super();
    }
    
    async handle(dto: IDeleteKnightSO): Promise<any> {
        return Promise.resolve(`delete ${dto.id} success`);
    }
}
