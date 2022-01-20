import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { CreateProductsUseCase } from './CreateProductsUseCase';

class CreateProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {
      nome,
      descricao,
      ativo,
      eancode,
      qtdestoque,
      anuncatalogo,
      anunlista,
      tipoanuncio,
      fretegratis,
      retirada,
      qtdminestoque,
      qtdmaxestoque,
      precocompra,
      precovenda,
      valorfrete,
      valortaxa,
      visitas,
      qtdvend,
    } = request.body;

    const createProductsUseCase = container.resolve(CreateProductsUseCase);

    await createProductsUseCase.execute({
      nome,
      descricao,
      ativo,
      eancode,
      qtdestoque,
      anuncatalogo,
      anunlista,
      tipoanuncio,
      fretegratis,
      retirada,
      qtdminestoque,
      qtdmaxestoque,
      precocompra,
      precovenda,
      valorfrete,
      valortaxa,
      visitas,
      qtdvend,
    });

    return response.status(201).send();
  }
}

export { CreateProductsController };
