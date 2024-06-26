import { Subjects } from "./Subjects";

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
}
