import { Provider } from '@nestjs/common';
import mongoose from 'mongoose';

export const makeDatabaseProvider = (): Provider[] => [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      return mongoose.connect('mongodb://localhost:27017/orders');
    },
  },
];
