export type GamePhase = "start" | "sign_select" | "playing" | "over";

export type SignType =
  | "aespa"
  | "winter"
  | "karina"
  | "ningning"
  | "giselle";

export type IngredientType = "lemon" | "water" | "egg" | "tea";
export type OrderType = "lemon_water" | "lemon_tea" | "lemon_cake";
export type CustomerVariant = number;

export interface CustomerData {
  id: number;
  orders: OrderType[];
  pending: OrderType[];
  posIndex: 0 | 1 | 2;
  variant: CustomerVariant;
  enterPhase: 0 | 1 | 2;
  waitProgress: number;
}

export interface ServedDish {
  id: number;
  dishType: OrderType;
  posIndex: 0 | 1 | 2;
  leaving: boolean;
}

export interface StageConfig {
  maxCustomers: number;
  allowedOrders: OrderType[];
  doubleOrderChance: number;
}
