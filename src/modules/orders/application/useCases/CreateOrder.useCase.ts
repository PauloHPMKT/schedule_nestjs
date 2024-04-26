import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRepository } from '../../infra/repository/CrearteOrderRepository';
import { CreateOrderDto } from '../../dto/CreateOrder.dto';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: CreateOrderRepository,
  ) {}

  async execute(data: CreateOrderDto): Promise<string> {
    return await this.orderRepository.create(data);
  }
}
