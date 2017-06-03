/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
export interface IReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;

}
