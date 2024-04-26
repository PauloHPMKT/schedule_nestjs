import { Inject, Injectable } from '@nestjs/common';
import { FindOrdersRepository } from '../../infra/repository/FindOrdersRepository';

@Injectable()
export class GetAllOrdersUseCase {
  constructor(
    @Inject('OrderRepository')
    private readonly orderRepository: FindOrdersRepository,
  ) {}

  async execute() {
    return await this.orderRepository.findAll();
  }
}
