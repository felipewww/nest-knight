import { Module } from '@nestjs/common';
import {KnightPresenterModule} from "@/presentation/knight/knight-presenter.module";

@Module({
    imports: [
        KnightPresenterModule,
    ]
})
export class PresentationModule {}
