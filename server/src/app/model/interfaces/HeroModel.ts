/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import { mongoose } from "mongoose";

export interface IHeroModel extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}
