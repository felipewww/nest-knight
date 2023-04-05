import {Module} from '@nestjs/common';
import { DeleteKnightService } from './delete-knight/delete-knight.service';
import { ReadKnightService } from './read-knight/read-knight.service';
import { SaveKnightService } from './save-knight/save-knight.service';
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {KnightSource} from "@/data/knight.model";
import {EntityDtoAdapter} from "@/domain/EntityDtoAdapter";

@Module({
    providers: [DeleteKnightService,
        ReadKnightService,
        SaveKnightService,
        KnightRepo,
        KnightSource, //todo - isso poderia estar num modulo em DATA, certo?
        EntityDtoAdapter
    ],
    exports: [DeleteKnightService,
        ReadKnightService,
        SaveKnightService
    ],
})
export class KnightModule {
}
