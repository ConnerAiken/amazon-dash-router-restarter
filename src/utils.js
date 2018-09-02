import dotenv from "dotenv";
import path from "path"; 

class Utils { 
    static loadENV() {
        const defaultConfig = dotenv.config({
            path: path.resolve(process.cwd(), '.env.default')
        }); 
        const config = dotenv.config({
            path: path.resolve(process.cwd(), '.env')
        }); 
    }
}

export default Utils;