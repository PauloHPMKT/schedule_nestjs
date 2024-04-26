import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { OrderSchema } from '../schemas/OrderSchema';

export const makeOrdersProvider = (): Provider[] => [
  {
    provide: 'ORDER_MODEL',
    useFactory: async (connection: Connection) => {
      return connection.model('Orders', OrderSchema);
    },
    inject: ['DATABASE_CONNECTION'],
  },
];
