import { Module } from '@nestjs/common';
import { KnightController } from './post-knight/knight.controller';
import {KnightModule} from "@/domain/knight/knight.module";

@Module({
    imports: [
        KnightModule
    ],
    controllers: [
        KnightController
    ],
    providers: [KnightController],
    exports: [
        KnightModule
    ]
})
export class KnightPresenterModule {}
