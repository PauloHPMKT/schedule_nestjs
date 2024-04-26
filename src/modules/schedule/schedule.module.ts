import { Global, Module, Provider } from '@nestjs/common';
import { ScheduleModule as Schedule } from '@nestjs/schedule';
import { ScheduleService } from './schedule.service';
import { OrdersModule } from '../orders/orders.module';
import { makeOrdersProvider } from '../orders/infra/providers/orders-db.provider';
import { UpdateOrderStatusUseCase } from '../orders/application/useCases/UpdateOrderStatusUseCase';
import { GetOrdersByStatusUseCase } from '../orders/application/useCases/GetOrdersByStatusUseCase';

const providers: Provider[] = [
  GetOrdersByStatusUseCase,
  UpdateOrderStatusUseCase,
  ScheduleService,
  ...makeOrdersProvider(),
];

@Global()
@Module({
  imports: [Schedule.forRoot(), OrdersModule],
  controllers: [],
  providers,
})
export class ScheduleModule {}
