import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    const products = await Category.find().where('categoryId').equals(req.params.categoryId);
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: 'Error listing products by category' });
  }
}
