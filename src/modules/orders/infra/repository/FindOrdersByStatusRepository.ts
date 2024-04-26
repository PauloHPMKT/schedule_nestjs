import { OrderEntity } from '../../domain/entities/Order';

export interface FindOrdersByStatusRepository {
  findByStatus(status: string): Promise<OrderEntity[]>;
}
