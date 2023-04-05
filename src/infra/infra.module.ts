import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "process";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot(`mongodb://${process.env.MDB_HOST}:${process.env.MDB_PORT}`, {
            user: process.env.MDB_USER,
            pass: process.env.MDB_PASS,
            dbName: process.env.MDB_DATABASE,
        }),
    ]
})
export class InfraModule {}
