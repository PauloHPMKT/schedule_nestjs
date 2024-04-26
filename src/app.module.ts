import { Module } from '@nestjs/common';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { OrdersModule } from './modules/orders/orders.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [DatabaseModule, ScheduleModule, OrdersModule],
})
export class AppModule {}
