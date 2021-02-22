import * as AWS from "aws-sdk";

const s3Client = new AWS.S3({});
interface IBucket {
  s3Client: AWS.S3;
}
const bucket: IBucket = {
  s3Client,
};
export { bucket };
