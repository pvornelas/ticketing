import { Publisher, Subjects, TicketCreatedEvent } from '@smartcloser/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
  readonly subject = Subjects.TicketCreated;
}