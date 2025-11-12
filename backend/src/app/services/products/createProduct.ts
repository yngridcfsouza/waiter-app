import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = (req as any).file?.filename;
    const { name, description, price, ingredients, category } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      ingredients: JSON.parse(ingredients),
      imagePath,
      category
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Error creating product' });
  }
}
