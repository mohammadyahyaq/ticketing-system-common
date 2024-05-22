import { OrderStatus } from "../enums/OrderStatus.enum";
import { Subjects } from "./Subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    userId: string;
    status: OrderStatus;
    // we need to store it as UTC time stamp to not share the location of the orders service
    expiresAt: string;
    version: number;
    ticket: {
      id: string;
      price: number;
    };
  };
}
