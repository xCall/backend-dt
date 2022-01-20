import { getRepository, Repository } from 'typeorm';

import { Product } from '../../entities/Product';
import { ICreateProductDTO, IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  public async create({
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
  }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({
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

    await this.repository.save(product);

    return null;
  }
  public async findProductByName(nome: string): Promise<Product> {
    const product = await this.repository.findOne({ nome });

    return product;
  }
}

export { ProductsRepository };
