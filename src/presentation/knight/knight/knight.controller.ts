import {Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes} from '@nestjs/common';
import {DeleteKnightService} from "@/domain/knight/delete-knight/delete-knight.service";
import {ReadKnightService} from "@/domain/knight/read-knight/read-knight.service";
import {SaveKnightService} from "@/domain/knight/save-knight/save-knight.service";
import {KnightViewModel, StoreKnightVMSchema, UpdateKnightVMSchema} from "@/presentation/knight/knight.viewmodel";
import {IReadKnightSO, KnightStatus} from "@/domain/knight/knight.dto";
import {ObjectValidationPipe} from "@/presentation/pipes/ObjectValidationPipe";

@Controller('knights')
export class KnightController {
    constructor(
        private readonly deleteKnightService: DeleteKnightService,
        private readonly readKnightService: ReadKnightService,
        private readonly saveKnightService: SaveKnightService,
    ) {
    }
    
    @Post()
    @UsePipes(new ObjectValidationPipe(StoreKnightVMSchema()))
    async storeKnight(
        @Body() body: Omit<KnightViewModel, 'id'>
    ) {
        await this.saveKnightService.handle(body)
    }
    
    @Put(':id')
    async saveKnight(
        @Param('id') id: number,
        @Body(new ObjectValidationPipe(UpdateKnightVMSchema())) body: Pick<KnightViewModel, 'nickname'>
    ) {
        await this.saveKnightService.handle({
            _id: id,
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
            type: (filter) ? filter : 'alive'
        }
        
        return this.readKnightService.handle(serviceObject);
    }
    
    @Delete(':id')
    async deleteKnight(
        @Param('id') id?: number,
    ) {
        await this.deleteKnightService.handle({id})
    }
}
