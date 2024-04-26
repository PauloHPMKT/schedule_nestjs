export interface UpdateOrderStatusRepository {
  updateStatus(orderId: string, status: string): Promise<void>;
}
