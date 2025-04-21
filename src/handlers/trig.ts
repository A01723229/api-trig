import { Request, Response, NextFunction } from 'express';
import TrigController from '../controllers/trig';

const trigController = new TrigController();

class TrigHttpHandler {
    async getHyp(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await trigController.getHyp();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async getOpp(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await trigController.getOpp();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
    async getAdj(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await trigController.getAdj();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default TrigHttpHandler;