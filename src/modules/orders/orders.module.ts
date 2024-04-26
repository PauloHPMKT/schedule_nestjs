import { Module, Provider } from '@nestjs/common';
import { OrderController } from './presentation/orders.controller';
import { DatabaseModule } from '../database/database.module';
import { makeOrdersProvider } from './infra/providers/orders-db.provider';
import { orderProvider } from './infra/providers/order.provider';
import { CreateOrderUseCase } from './application/useCases/CreateOrder.useCase';
import { GetAllOrdersUseCase } from './application/useCases/GetAllOrders.useCase';

const providers: Provider[] = [
  CreateOrderUseCase,
  GetAllOrdersUseCase,
  ...makeOrdersProvider(),
  ...orderProvider(),
];

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
  providers,
  exports: [OrdersModule, ...providers],
})
export class OrdersModule {}
