import {ILogger} from "./interfaces/logger";

//this class might have dependencies on files or network
class SimpleLogger implements ILogger{
    info(text: string) {
    }
}
