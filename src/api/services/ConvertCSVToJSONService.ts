import xlsx from 'xlsx';
import { Files, File } from "formidable";
import AppError from "../errors/typeErrors/AppError";
class ConvertCSVToJSONService<T> {

    constructor(private file: Files, private fileName: string) { };

    public async execute() {
        try {
            const fileFormatted = this.file[this.fileName] as File;
            if (
                fileFormatted.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
                fileFormatted.mimetype !== 'text/csv'
            ) {
                throw new AppError("Arquivo não compatível. Por favor, tente novamente!", 500);
            }
            const csv = xlsx.readFile(fileFormatted.filepath);
            const dataJSON = xlsx.utils.sheet_to_json<T>(csv.Sheets[Object.keys(csv.Sheets).toString()]);
            return dataJSON;
        } catch (error) {
             throw new AppError("Falha ao converter a planilha em JSON. Por favor, tente novamente!", 500);
        }
    }

}

export { ConvertCSVToJSONService }