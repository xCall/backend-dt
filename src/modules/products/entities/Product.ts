import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('produtos')
class Product {
  @PrimaryColumn()
  id: string;

  /*  @PrimaryColumn()
   codprod: number; */

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  ativo: boolean;

  @Column()
  eancode: number;

  @Column()
  qtdestoque: number;

  @Column()
  anuncatalogo: boolean;

  @Column()
  anunlista: boolean;

  /* @Column()
  sku: string; */

  @Column()
  tipoanuncio: number;

  @Column()
  fretegratis: boolean;

  @Column()
  retirada: boolean;

  @Column()
  qtdminestoque: number;

  @Column()
  qtdmaxestoque: number;

  @Column()
  precocompra: number;

  @Column()
  precovenda: number;

  @Column()
  valorfrete: number;

  @Column()
  valortaxa: number;

  @Column()
  visitas: number;

  @Column()
  qtdvend: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Product };
