/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import {Mongoose} from "mongoose";
import {Constants} from "./../../config/constants/constants";

export class DataAccess {
    public static mongooseInstance: any;
    public static mongooseConnection: Mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });

        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}

DataAccess.connect();
