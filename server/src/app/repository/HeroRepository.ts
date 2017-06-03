/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import {HeroModel} from "./../model/HeroModel";
import {IHeroModel} from "./../model/interfaces/HeroModel";
import {HeroSchema} from "./../dataAccess/schemas/HeroSchema";
import {RepositoryBase} from "./BaseRepository";

export class HeroRepository  extends RepositoryBase<IHeroModel> {
    constructor () {
        super(new HeroSchema);
    }
}

Object.seal(HeroRepository);
