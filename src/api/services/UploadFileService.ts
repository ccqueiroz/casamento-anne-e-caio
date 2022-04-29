import { Files, File } from "formidable";
import aws from 'aws-sdk';
import fs, { PathOrFileDescriptor } from 'fs';
import { PutObjectRequest } from "aws-sdk/clients/s3";
import AppError from "../errors/typeErrors/AppError";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRETKEY,
  accessKeyId: process.env.AWS_ACCESSKEY,
});

const s3: aws.S3 = new aws.S3({
     apiVersion: '2022-04-26', region: process.env.AWSREGION
})

class UploadFileService {

    constructor(private file: Files, private fileName: string) { }
    
    public async execute(): Promise<string> {
        try {
            const fileFormatted = this.file[this.fileName] as File;
            const fileaPath: PathOrFileDescriptor = fileFormatted.filepath;
            const fileContent: Buffer = fs.readFileSync(fileaPath);
            const params: PutObjectRequest = {
                Bucket: String(process.env.AWSBUCKET),
                Key: `${fileFormatted?.newFilename}-${fileFormatted?.originalFilename}`,
                Body: fileContent,
            }
            const data = await s3.upload(params).promise();
            return data.Location;
        } catch (error) {
            throw new AppError("Falha ao fazer upload do cartão de vacina. Por favor, tente novamente!", 500);
        }
    }
}

export default UploadFileService;