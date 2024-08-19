import dbConnect from '@/db/connect.js';
import Recipe from '@/db/models/Recipe';

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === 'GET') {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return response.status(404).json({ status: 'Not Found' });
    }
    response.status(200).json(recipe);
  } else if (request.method === 'PUT') {
    try {
      const recipeData = request.body;
      await Recipe.findByIdAndUpdate(id, recipeData);
      return response.status(200).json({ status: `Recipe ${id} updated!` });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: 'Method not allowed' });
  }
}
