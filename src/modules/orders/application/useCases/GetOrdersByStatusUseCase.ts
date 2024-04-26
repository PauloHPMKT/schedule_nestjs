import { Inject, Injectable } from '@nestjs/common';
import { FindOrdersByStatusRepository } from '../../infra/repository/FindOrdersByStatusRepository';

@Injectable()
export class GetOrdersByStatusUseCase {
  constructor(
    @Inject('OrderRepository')
    private readonly findOrdersRepository: FindOrdersByStatusRepository,
  ) {}

  async execute(status: string) {
    const order = await this.findOrdersRepository.findByStatus(status);
    if (!order) throw new Error('Order not found');

    return order;
  }
}
