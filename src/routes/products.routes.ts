import { Router } from 'express';

import { CreateProductsController } from '../modules/products/useCases/createNewProduct/CreateProductsController';

const productsRoutes = Router();

const createProductsController = new CreateProductsController();

productsRoutes.post('/', createProductsController.handle);

export { productsRoutes };
