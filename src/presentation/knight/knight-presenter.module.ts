import { Module } from '@nestjs/common';
import { KnightController } from './post-knight/knight.controller';
import {KnightModule} from "@/domain/knight/knight.module";
import {WeaponModule} from "@/domain/weapon/weapon.module";

@Module({
    imports: [
        KnightModule,
        WeaponModule
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
