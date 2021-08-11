import express from 'express';
import { routeSetup } from './routes/routes';
import { Viacep } from './controllers/viacep.controller';

const app = express();

const setupApp = async (viacepWebservice = new Viacep()) => {
    app.use('/documentation', express.static(__dirname + '/../public'));
    app.use(express.json());
    app.use('/', routeSetup(viacepWebservice));

    return app;
};

export { setupApp };
