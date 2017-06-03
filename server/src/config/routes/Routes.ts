/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import {express} from 'express';

import {HeroRoutes} from '../routes/HeroRoutes';

var app = express();

export class Routes {

    get routes() {

        app.use("/", new HeroRoutes().routes);

        return app;
    }
}
