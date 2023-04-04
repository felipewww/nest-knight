import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import {KnightController} from "@/presentation/knight/post-knight/knight.controller";
import {KnightPresenterModule} from "@/presentation/knight/knight-presenter.module";
import { WeaponModule } from './domain/weapon/weapon.module';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      MongooseModule.forRoot('mongodb://localhost/nest'),
      KnightPresenterModule,
      WeaponModule,
  ],
  controllers: [
      AppController,
      KnightController
  ],
  providers: [AppService],
})
export class AppModule {}
