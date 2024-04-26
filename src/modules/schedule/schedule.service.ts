import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UpdateOrderStatusUseCase } from '../orders/application/useCases/UpdateOrderStatusUseCase';
import { GetOrdersByStatusUseCase } from '../orders/application/useCases/GetOrdersByStatusUseCase';

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);

  constructor(
    private readonly getOrdersByStatusUseCase: GetOrdersByStatusUseCase,
    private readonly updateOrderStatusUseCase: UpdateOrderStatusUseCase,
  ) {}

  @Cron('*/45 * * * * *')
  async cancelOrders() {
    try {
      const ordersToCancel =
        await this.getOrdersByStatusUseCase.execute('pending');

      for (const order of ordersToCancel) {
        await this.updateOrderStatusUseCase.execute(order._id, 'cancelled');
        this.logger.debug(`Order ${order._id} has been cancelled.`);
      }
    } catch (error) {
      return error;
    }
  }
}
