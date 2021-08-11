import { Router, Request, Response } from 'express';

const router = Router();

const routeSetup = (viacepWebservice: any) => {
    router.get('/:cep/address', async (req: Request, res: Response) => {
        const { cep } = req.params;
        const response = await viacepWebservice.searchAddress(cep);
        res.json(response);
    });

    return router;
};

export { routeSetup };
