import { Injectable } from '@nestjs/common';
import {BaseService} from "@/domain/base-service";

export interface IDeleteKnightSO {
    id: number
}

@Injectable()
export class DeleteKnightService extends BaseService<any> {
    async handle(dto: IDeleteKnightSO): Promise<any> {
        return Promise.resolve(`delete ${dto.id} success`);
    }
}
