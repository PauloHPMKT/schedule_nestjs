import { Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateOrderRepository } from '../../../orders/infra/repository/CrearteOrderRepository';
import { OrderDocument } from '../../../orders/infra/schemas/OrderSchema';
import { CreateOrderDto } from 'src/modules/orders/dto/CreateOrder.dto';
import { FindOrdersRepository } from 'src/modules/orders/infra/repository/FindOrdersRepository';
import { OrderEntity } from 'src/modules/orders/domain/entities/Order';
import { FindOrdersByStatusRepository } from 'src/modules/orders/infra/repository/FindOrdersByStatusRepository';
import { UpdateOrderStatusRepository } from 'src/modules/orders/infra/repository/UpdateOrderStatusRepository';

export class OrdersMongoRepository
  implements
    CreateOrderRepository,
    FindOrdersRepository,
    FindOrdersByStatusRepository,
    UpdateOrderStatusRepository
{
  constructor(
    @Inject('ORDER_MODEL')
    private readonly orderModel: Model<OrderDocument>,
  ) {}

  async create(data: CreateOrderDto): Promise<string> {
    const newOrder = await this.orderModel.create(data);
    return newOrder._id.toString();
  }

  async findAll(): Promise<OrderEntity[]> {
    return await this.orderModel.find();
  }

  async findByStatus(status: string): Promise<OrderEntity[]> {
    return await this.orderModel.find({ status });
  }

  async updateStatus(orderId: string, status: string): Promise<void> {
    await this.orderModel.updateOne({ _id: orderId }, { status });
  }
}
