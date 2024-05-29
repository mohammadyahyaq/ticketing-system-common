import { Subjects } from "./Subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: string;
    userId: string;
    orderId?: string;
    createdAt: string;
    updatedAt: string;
    version: number;
  };
}
