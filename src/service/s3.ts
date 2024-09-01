import { S3 } from "aws-sdk";
import { ImageType } from "react-images-uploading";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

export const uploadImage = async (
  directory: string,
  image: ImageType | undefined
) => {
  if (image && process.env.REACT_APP_AWS_BUCKET_NAME) {
    const contentType = image.file?.type;
    if (image.file?.type) {
      const uuid = uuidv4();
      const blob = await image.file.arrayBuffer();
      const params = {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
        Key: `event/${directory}/${uuid}-${image.file.name}`,
        Body: blob,
        ContentType: contentType,
      };

      return (await s3.upload(params).promise()).Location;
    }
  }
};
