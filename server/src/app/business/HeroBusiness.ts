/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import {HeroRepository} from "./../repository/HeroRepository";
import {IHeroBusiness} from "./interfaces/HeroBusiness";
import {IHeroModel} from "./../model/interfaces/HeroModel";
import {HeroModel} from "./../model/HeroModel";


export class HeroBusiness implements IHeroBusiness {
    private _heroRepository: HeroRepository;

    constructor () {
        this._heroRepository = new HeroRepository();
    }

    create (item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._heroRepository.retrieve(callback);
    }

    update (_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {

        this._heroRepository.findById(_id, (err, res) => {
            if(err)
              callback(err, res);
            else
                this._heroRepository.update(_id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._heroRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }

}


Object.seal(HeroBusiness);
