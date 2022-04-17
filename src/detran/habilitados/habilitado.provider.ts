import { Connection } from 'typeorm';
import { Habilitado } from './habilitados.entity';

export const habilitadoProviders = [
    {
      provide: 'HABILITADO_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(Habilitado),
      inject: ['DATABASE_CONNECTION'],
    },
];