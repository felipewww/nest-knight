import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {DeleteKnightService} from "@/domain/knight/delete-knight/delete-knight.service";
import {ReadKnightService} from "@/domain/knight/read-knight/read-knight.service";
import {SaveKnightService} from "@/domain/knight/save-knight/save-knight.service";
import {KnightViewModel} from "@/presentation/knight/knight.viewmodel";
import {IReadKnightSO, KnightStatus} from "@/domain/knight/knight.dto";

@Controller('knights')
export class KnightController {
    constructor(
        private readonly deleteKnightService: DeleteKnightService,
        private readonly readKnightService: ReadKnightService,
        private readonly saveKnightService: SaveKnightService,
    ) {
    }
    
    // todo pipe de validação "weapons attributes keyAttribute"
    @Post()
    async storeKnight(
        @Body() body: Omit<KnightViewModel, 'id'>
    ) {
        return this.saveKnightService.handle(body)
    }
    
    @Put(':id')
    async saveKnight(
        @Param('id') id: number,
        @Body() body: Pick<KnightViewModel, 'nickname'>
    ) {
        return this.saveKnightService.handle({
            id,
            nickname: body.nickname,
            name: null,
            birthday: null,
            weapons: [],
            attributes: null,
            keyAttribute: null,
        })
    }
    
    @Get(':id?')
    async getKnights(
        @Param('id') id?: number,
        @Query('filter') filter?: KnightStatus,
    ) {
        const serviceObject: IReadKnightSO = {
            id: id,
            type: (filter) ? filter : 'alive' // todo - fazer isso num pipe?
        }
        
        return this.readKnightService.handle(serviceObject);
    }
    
    @Delete(':id')
    async deleteKnight(
        @Param('id') id?: number,
    ) {
        return this.deleteKnightService.handle({id})
    }
}
