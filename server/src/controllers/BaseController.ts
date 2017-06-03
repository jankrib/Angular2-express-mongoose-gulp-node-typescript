/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import { IReadController} from "./interfaces/ReadController";
import { IWriteController} from "./interfaces/WriteController";
import { IBaseBusiness} from "../app/business/BaseBusiness";

export interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController{


}
