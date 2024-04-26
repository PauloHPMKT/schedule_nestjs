import { Provider } from '@nestjs/common';
import { OrdersMongoRepository } from 'src/modules/database/repositories/orders/orders-mongoose.repository';

export const orderProvider = (): Provider[] => [
  {
    provide: 'OrderRepository',
    useClass: OrdersMongoRepository,
  },
];
