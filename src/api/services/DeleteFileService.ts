import aws from 'aws-sdk';
import { DeleteObjectRequest } from "aws-sdk/clients/s3";
import AppError from "../errors/typeErrors/AppError";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRETKEY,
  accessKeyId: process.env.AWS_ACCESSKEY,
});

const s3: aws.S3 = new aws.S3({
     apiVersion: '2022-04-26', region: process.env.AWSREGION
})

class DeleteFileService {
    constructor(private key: string) { };

    public async execute() {
        const params: DeleteObjectRequest = {
            Bucket: String(process.env.AWSBUCKET),
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