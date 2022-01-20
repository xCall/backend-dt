import { Product } from '../entities/Product';

interface ICreateProductDTO {
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

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<void>;
  findProductByName(nome: string): Promise<Product>;
}

export { ICreateProductDTO, IProductsRepository };
