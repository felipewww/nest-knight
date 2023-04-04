import {All, Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {DeleteKnightService} from "@/domain/knight/delete-knight/delete-knight.service";
import {IReadKnightSO, KnightStatus, ReadKnightService} from "@/domain/knight/read-knight/read-knight.service";
import {SaveKnightService} from "@/domain/knight/save-knight/save-knight.service";
import {IKnightDto} from "@/domain/knight/Knight.entity";

@Controller('knight')
export class KnightController {
    constructor(
        private readonly deleteKnightService: DeleteKnightService,
        private readonly readKnightService: ReadKnightService,
        private readonly saveKnightService: SaveKnightService,
    ) {
    }
    
    @Post()
    async storeKnight(
        @Body() body: Omit<IKnightDto, 'id'>
    ) {
        return this.saveKnightService.handle(body)
    }
    
    @Put(':id')
    async saveKnight(
        @Param('id') id: number,
        @Body() body: Pick<IKnightDto, 'nickname'>
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
