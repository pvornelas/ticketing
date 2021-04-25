import { Publisher, Subjects, TicketUpdatedEvent } from '@smartcloser/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
  readonly subject = Subjects.TicketUpdated;
}