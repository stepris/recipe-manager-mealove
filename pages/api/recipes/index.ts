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

  if (request.method === 'GET') {
    const recipes = await Recipe.find();
    return response.status(200).json(recipes);
  }

  if (request.method === 'POST') {
    if (!session) {
      return response.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const recipeData = request.body;
      const newRecipe = await Recipe.create(recipeData);

      response
        .status(201)
        .json({ status: 'Recipe created', newId: newRecipe._id });
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
