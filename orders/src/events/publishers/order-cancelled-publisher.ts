import { Publisher, OrderCancelledEvent, Subjects } from '@smartcloser/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
  readonly subject = Subjects.OrderCancelled;
}