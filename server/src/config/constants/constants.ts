/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

export class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://db:27017/quickStart"
}
Object.seal(Constants);
