/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import { Read } from "./common/Read";
import { Write } from "./common/Write";

export interface IBaseBusiness<T> extends Read<T>, Write<T>
{
}
