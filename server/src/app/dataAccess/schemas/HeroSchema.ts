/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import {ISchema} from "./ISchema";
import {DataAccess} from "../DataAccess";
import {IHeroModel} from "./../../model/interfaces/HeroModel";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export class HeroSchema implements ISchema {

    getModel(){
      return mongooseConnection.model<IHeroModel>("Heroes", mongoose.Schema({
          name : {
              type: String,
              required: true
          },
          power: {
              type: String,
              required: true
          },
          amountPeopleSaved: {
              type: Number,
              required: true
          }
      }));
    }
}
