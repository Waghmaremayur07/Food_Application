export type PaymentMethod = 'upi' | 'card' | 'cod';

export interface PaymentDetails {
  method: PaymentMethod;
  amount: number;
  orderId: string;
}