import dbConnect from '@/db/connect.ts';
import Recipe from '@/db/models/Recipe';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await dbConnect();

  const session = await getServerSession(request, response, authOptions);
  const { id } = request.query;

  if (request.method === 'GET') {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return response.status(404).json({ status: 'Not Found' });
    }
    response.status(200).json(recipe);
  }

  if (request.method === 'PUT') {
    // Check if Session
    if (!session) {
      return response.status(401).json({ message: 'Unauthorized' });
    }
    // Check if author id is session user id and if fetch recipe
    try {
      const recipeData = request.body;

      if (!recipeData.authorId || !id) {
        return response.status(400).json({ message: 'Invalid Request' });
      }

      const existingRecipe = await Recipe.findById(id);

      if (!existingRecipe) {
        return response.status(404).json({ message: 'Recipe not found' });
      }

      if (recipeData.authorId !== session.user?.id) {
        return response.status(403).json({ message: 'Forbidden' });
      }

      // Update Recipe
      await Recipe.findByIdAndUpdate(id, recipeData);
      return response.status(200).json({ status: `Recipe ${id} updated!` });
    } catch (error: unknown) {
      if (error instanceof Error) {
        response.status(400).json({ error: error.message });
      } else {
        response.status(400).json({ error: 'an unknown error occured' });
      }
    }
  }

  if (request.method === 'DELETE') {
    try {
      await Recipe.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ message: `${id} Deleted Successfully!` });
    } catch (error: unknown) {
      if (error instanceof Error) {
        response.status(400).json({ error: error.message });
      } else {
        response.status(400).json({ error: 'an unknown error occured' });
      }
    }
  } else {
    return response.status(405).json({ message: 'Method not allowed' });
  }
}
