import { OrderStatus } from "../enums/OrderStatus.enum";
import { Subjects } from "./Subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    userId: string;
    status: OrderStatus;
    expiresAt: Date;
    ticket: {
      id: string;
      price: number;
    };
  };
}
