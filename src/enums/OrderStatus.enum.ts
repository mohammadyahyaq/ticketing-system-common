export enum OrderStatus {
  // order created, but ticket not reserved
  Created = "created",
  // ticket not successfully reservered for that order, or user cancelled the order
  Cancelled = "cancelled",
  // order has successfully reserved a ticket
  AwaitingPayment = "awaiting:payment",
  // the user who reserved the ticket provided ticket successfully
  Complete = "complete",
}
