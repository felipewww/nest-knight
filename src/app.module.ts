import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import {KnightPresenterModule} from "@/presentation/knight/knight-presenter.module";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      MongooseModule.forRoot('mongodb://localhost/nest'),
      KnightPresenterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
