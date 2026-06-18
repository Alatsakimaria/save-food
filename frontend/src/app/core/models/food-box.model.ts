export interface FoodBox {
  id: number;
  storeId: number;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  quantityAvailable: number;
  pickupStart: string;
  pickupEnd: string;
}