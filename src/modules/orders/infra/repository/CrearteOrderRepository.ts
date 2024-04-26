import { CreateOrderDto } from '../../dto/CreateOrder.dto';

export interface CreateOrderRepository {
  create(data: CreateOrderDto): Promise<string>;
}
