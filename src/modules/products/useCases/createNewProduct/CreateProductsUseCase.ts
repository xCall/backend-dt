import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  nome: string;
  descricao: string;
  ativo: boolean;
  eancode: number;
  qtdestoque: number;
  anuncatalogo: boolean;
  anunlista: boolean;
  tipoanuncio: number;
  fretegratis: boolean;
  retirada: boolean;
  qtdminestoque: number;
  qtdmaxestoque: number;
  precocompra: number;
  precovenda: number;
  valorfrete: number;
  valortaxa: number;
  visitas: number;
  qtdvend: number;
}

@injectable()
class CreateProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {
    this.productsRepository = productsRepository;
  }
  public async execute({
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
  }: IRequest): Promise<void> {
    const productAlreadyExists =
      await this.productsRepository.findProductByName(nome);

    if (productAlreadyExists) {
      throw new AppError('Produto já existe.');
    }

    await this.productsRepository.create({
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
  }
}

export { CreateProductsUseCase };
