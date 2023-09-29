import express, { Request, Response } from 'express';
import { getAllCategoriesController } from '../controllers/categoriesController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('shahd roots');
});
router.get('/getAllCategories', getAllCategoriesController);



export default router;
