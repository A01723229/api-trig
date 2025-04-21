import express from 'express';
import TrigHttpHandler from '../handlers/trig';

const router = express.Router();
const trigHttpHandler = new TrigHttpHandler();

router.get('/hyp', trigHttpHandler.getHyp);
router.get('/opp', trigHttpHandler.getOpp);
router.get('/adj', trigHttpHandler.getAdj);

export default router;