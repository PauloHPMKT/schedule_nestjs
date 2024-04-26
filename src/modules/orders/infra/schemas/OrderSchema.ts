import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { OrderEntity } from '../../domain/entities/Order';

export type OrderDocument = HydratedDocument<Order>;

@Schema({})
export class Order
  implements Omit<OrderEntity, '_id' | 'created_at' | 'updated_at'>
{
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  price: string;

  @Prop({
    type: String,
    enum: ['pending', 'paid', 'canceled'],
    default: 'pending',
  })
  status: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  created_at: Date;

  @Prop({
    type: Date,
    default: null,
  })
  updated_at: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
