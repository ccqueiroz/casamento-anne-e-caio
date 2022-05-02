import { Files, File } from "formidable";
import AppError from "../errors/typeErrors/AppError";
class ConvertCSVToJSONService {

    constructor(private file: Files, private fileName: string) { };

    public async execute() {
        try {
            const fileFormatted = this.file[this.fileName] as File;
            console.log(fileFormatted);
            
        } catch (error) {
             throw new AppError("Falha ao converter a planilha em JSON. Por favor, tente novamente!", 500);
        }
    }

}

export { ConvertCSVToJSONService }