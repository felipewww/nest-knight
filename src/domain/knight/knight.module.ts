import {Module} from '@nestjs/common';
import { DeleteKnightService } from './delete-knight/delete-knight.service';
import { ReadKnightService } from './read-knight/read-knight.service';
import { SaveKnightService } from './save-knight/save-knight.service';
import {KnightRepo} from "@/domain/knight/Knight.repo";
import {KnightSource} from "@/data/knight.model";
import {EntityDtoAdapter} from "@/domain/EntityDtoAdapter";
import {HeroSource} from "@/data/heroes.model";
import {HeroRepo} from "@/domain/knight/Hero.repo";

@Module({
    imports: [
        KnightSource,
    ],
    providers: [DeleteKnightService,
        ReadKnightService,
        SaveKnightService,
        KnightRepo,
        KnightSource,
        HeroRepo,
        HeroSource,
        EntityDtoAdapter
    ],
    exports: [DeleteKnightService,
        ReadKnightService,
        SaveKnightService
    ],
})
export class KnightModule {
}
