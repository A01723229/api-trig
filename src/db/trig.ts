import { Hypotenuse, Adjacent, Opposite } from "../types/trig";

class TrigDB {
    async getHyp(): Promise<Hypotenuse> {
        return {opposite: 5, adjacent: 4};
    }
    async getOpp(): Promise<Opposite> {
        return {hypotenuse: 7, adjacent: 4}
    }
    async getAdj(): Promise<Adjacent> {
        return {hypotenuse: 7, opposite: 4}
    }
}

export default new TrigDB();