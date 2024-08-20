import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields, Files } from 'formidable';
import cloudinary from 'cloudinary';

type CloudinaryUploadResponse = {
  public_id: string;
  version: number;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  url: string;
  secure_url: string;
  original_filename: string;
};

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

type File = {
  newFilename: string;
  filepath: string;
};

type CloudinaryResponse = CloudinaryUploadResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ensure this route can only be used for POST requests
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Method not allowed' });
    return;
  }

  // Initialize formidable with an empty options object
  const form = formidable({});

  // Parse the form
  try {
    const [_, files] = (await form.parse(req)) as [Fields, Files];

    // Ensure that 'imageUpload' is present and it's an array
    const file = (files.imageUpload as File[])[0];
    const { newFilename, filepath } = file;

    // Upload to Cloudinary
    const result: CloudinaryResponse = await cloudinary.v2.uploader.upload(
      filepath,
      {
        public_id: newFilename,
        folder: 'recipes',
      }
    );

    // Respond with the Cloudinary result
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error processing the file' });
  }
}
