import {Module} from '@nestjs/common';
import { DeleteKnightService } from './delete-knight/delete-knight.service';
import { ReadKnightService } from './read-knight/read-knight.service';
import { SaveKnightService } from './save-knight/save-knight.service';

@Module({
    providers: [DeleteKnightService, ReadKnightService, SaveKnightService],
    exports: [DeleteKnightService, ReadKnightService, SaveKnightService]
})
export class KnightModule {
}
