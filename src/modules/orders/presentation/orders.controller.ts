import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from '../dto/CreateOrder.dto';
import { CreateOrderUseCase } from '../application/useCases/CreateOrder.useCase';
import { GetAllOrdersUseCase } from '../application/useCases/GetAllOrders.useCase';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    private readonly findOrdersUseCase: GetAllOrdersUseCase,
  ) {}

  @Post()
  async createOrder(@Body() data: CreateOrderDto) {
    return await this.createOrderUseCase.execute(data);
  }

  @Get()
  async getOrders() {
    return await this.findOrdersUseCase.execute();
  }
}
