import {InjectConnection} from "@nestjs/mongoose";
import mongoose, {Connection} from "mongoose";

export abstract class BaseModel<IMODEL extends {_id?: any}> {
    abstract collectionName: string
    
    constructor(
        @InjectConnection() private connection: Connection
    ) {}
    
    protected db() {
        return this.connection.db.collection(this.collectionName)
    }
    
    public async find(id?: any) {
        const filter: {[key: string]: any} = {}
        
        let hex = /[0-9A-Fa-f]{6}/g;
        
        // if (id && !hex.test(id)) {
        //     return Promise.resolve([])
        // }
        //
        // if (id) {
        //     // filter._id = new ObjectId(id);
        // }
        filter._id = new mongoose.Types.ObjectId(id);
        
        const sourceRes = await this.db().find(filter).toArray() as Array<any>;
        return sourceRes as Array<IMODEL>
    }
    
    public async create(model: IMODEL) {
        return this.db()
            .insertOne(model)
    }
    
    public async update(data: { [key: string]: any }, id: any) {
        return this.db()
            .updateOne({_id: new mongoose.Types.ObjectId(id)}, {
                $set: data
            })
    }
    
    public async delete(id: number) {
        return this.db().deleteOne({_id: new mongoose.Types.ObjectId(id)})
    }
}