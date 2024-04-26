import { Inject, Injectable } from '@nestjs/common';
import { UpdateOrderStatusRepository } from '../../infra/repository/UpdateOrderStatusRepository';

@Injectable()
export class UpdateOrderStatusUseCase {
  constructor(
    @Inject('OrderRepository')
    private readonly updateOrderStatusRepository: UpdateOrderStatusRepository,
  ) {}
  async execute(orderId: string, status: string) {
    return await this.updateOrderStatusRepository.updateStatus(orderId, status);
  }
}
