import { Subjects } from "./Subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
}
