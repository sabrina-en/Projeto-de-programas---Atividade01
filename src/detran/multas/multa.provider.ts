import { Connection } from 'typeorm';
import { Multa } from './multa.entity';

export const multaProviders = [
    {
      provide: 'MULTA_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Multa),
      inject: ['DATABASE_CONNECTION'],
    },
];