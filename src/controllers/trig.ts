import TrigDB from '../db/trig';
import { Result } from '../types/trig';

class TrigController {
    async getHyp(): Promise<Result> {
        const {opposite, adjacent} = await TrigDB.getHyp(); 
        return {result: Math.sqrt(opposite ** 2 + adjacent ** 2)};
    }
    
    async getOpp(): Promise<Result> {
        const {hypotenuse, adjacent} = await TrigDB.getOpp();
        return {result: Math.sqrt(hypotenuse ** 2 - adjacent ** 2)};
    }

    async getAdj(): Promise<Result> {
        const {hypotenuse, opposite} = await TrigDB.getAdj();
        return {result: Math.sqrt(hypotenuse ** 2 - opposite ** 2)};
    }
}

export default TrigController;