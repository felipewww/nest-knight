import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot('mongodb://localhost:27017', {
            user: 'mongoadmin',
            pass: 'secret',
            dbName: 'knights_db'
        }),
    ]
})
export class InfraModule {}
