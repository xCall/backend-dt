import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduto1642591410246 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produtos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          /* {
            name: 'codprod',
            type: 'int',
            isPrimary: true,
            isUnique: true,
          }, */
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'ativo',
            type: 'boolean',
          },
          {
            name: 'eancode',
            type: 'int',
          },
          {
            name: 'qtdestoque',
            type: 'int',
          },
          {
            name: 'anuncatalogo',
            type: 'boolean',
          },
          {
            name: 'anunlista',
            type: 'boolean',
          },
          /*  {
             name: 'sku',
             type: 'varchar',
             isUnique: true,
           }, */
          {
            name: 'tipoanuncio',
            type: 'int',
          },
          {
            name: 'fretegratis',
            type: 'boolean',
          },
          {
            name: 'retirada',
            type: 'boolean',
          },
          {
            name: 'qtdminestoque',
            type: 'int',
          },
          {
            name: 'qtdmaxestoque',
            type: 'int',
          },
          {
            name: 'precocompra',
            type: 'float',
          },
          {
            name: 'precovenda',
            type: 'float',
          },
          {
            name: 'valorfrete',
            type: 'float',
          },
          {
            name: 'valortaxa',
            type: 'float',
          },
          {
            name: 'visitas',
            type: 'int',
          },
          {
            name: 'qtdvend',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos');
  }
}
