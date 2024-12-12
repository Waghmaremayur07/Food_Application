// utils/cartCalculations.ts
export const GST_RATE = 0.08; // 8% GST
export const DELIVERY_FEE = 40;

export function calculateGST(subtotal: number): number {
  return subtotal * GST_RATE;
}

export function calculateTotal(subtotal: number): number {
  const gst = calculateGST(subtotal);
  const total = subtotal + gst + DELIVERY_FEE;
  return total;
}
