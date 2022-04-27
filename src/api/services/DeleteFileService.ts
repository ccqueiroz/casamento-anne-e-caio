import aws from 'aws-sdk';
import { DeleteObjectRequest } from "aws-sdk/clients/s3";
import AppError from "../errors/typeErrors/AppError";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
});

const s3: aws.S3 = new aws.S3({
     apiVersion: '2022-04-26', region: process.env.AWS_REGION
})

class DeleteFileService {
    constructor(private key: string) { };

    public async execute() {
        const params: DeleteObjectRequest = {
            Bucket: String(process.env.AWS_BUCKET),
            Key: this.key
        }
        const fileDeleted = s3.deleteObject(params, function (err: aws.AWSError, data: aws.S3.DeleteObjectOutput) {
            if (err) {
                throw new AppError(err?.message, +err.code);
            }
            return data;
        });
        return fileDeleted;
    };
}
export { DeleteFileService };