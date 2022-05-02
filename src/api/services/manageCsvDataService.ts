import { Files } from "formidable";
import { handleErrors } from "../errors/handleErrors";
import AppError from "../errors/typeErrors/AppError";
import { ConvertCSVToJSONService } from "./ConvertCSVToJSONService";

class ManageCsvDataService {

    constructor(private file: Files) { };

    public async execute() {
        try {
            const fileName = Object.keys(this.file).toString();
            const convertCSVToJSON = await new ConvertCSVToJSONService(this.file, fileName).execute();
        } catch (error) {
            const err = handleErrors(error);
            throw new AppError(err.message , err.statusCode);
        }
    }
}

export { ManageCsvDataService }