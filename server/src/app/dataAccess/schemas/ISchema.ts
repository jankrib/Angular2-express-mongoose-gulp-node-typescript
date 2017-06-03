
import { mongoose } from "mongoose";

export interface ISchema {
  getModel: () => mongoose.Model<mongoose.Document>;
}
