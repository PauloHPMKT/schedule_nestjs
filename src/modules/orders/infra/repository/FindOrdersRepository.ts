import { OrderEntity } from '../../domain/entities/Order';

export interface FindOrdersRepository {
  findAll(): Promise<OrderEntity[]>;
}
