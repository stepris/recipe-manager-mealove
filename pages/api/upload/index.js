import formidable from 'formidable';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  // ensure this route can only be used for POST requests
  if (request.method !== 'POST') {
    response.status(400).json({ message: 'Method not allowed' });
    return;
  }
  // we initialize formidable with an empty options object
  const form = formidable({});

  // we have access to a .parse() method that allows us to access the fields
  // and more importantly the files
  const [fields, files] = await form.parse(request);

  //  refers to the first file in the array of files uploaded through the form input with the "name "attribute set to "image".
  const file = files.imageUpload[0];
  const { newFilename, filepath } = file;

  // now we have the information about the image, we can send it to Cloudinary

  const result = await cloudinary.v2.uploader.upload(filepath, {
    public_id: newFilename,
    folder: 'recipes',
  });
  /*
  To upload a file, we call the upload method with the file's path. 
  Additionally, we can provide an optional configuration object:
  - 'public_id' allows us to specify a custom identifier for the uploaded file.
  - 'folder' lets us designate a specific folder within Cloudinary where the file should be stored.
  */

  response.status(200).json(result);
}
