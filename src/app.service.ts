import {Injectable} from '@nestjs/common';
import * as process from "process";

@Injectable()
export class AppService {
    constructor() {
        console.log('constructing APPSERVICE!')
        console.log(process.env.APP_ENV)
    }
    
    getHello(): string {
        return 'Hello World!';
    }
}
