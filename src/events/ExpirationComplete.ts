import { Subjects } from "./Subjects";

export interface ExpirationComplete {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
