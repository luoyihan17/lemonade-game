import { ORDER_TYPES } from "./gameConfig";
import type { OrderType, StageConfig } from "./types";

export function getCurrentStage(timeLeft: number): StageConfig {
  const elapsed = 120 - timeLeft;
  if (elapsed < 10)
    return {
      maxCustomers: 1,
      allowedOrders: ["lemon_water"],
      doubleOrderChance: 0,
    };
  if (elapsed < 15)
    return {
      maxCustomers: 1,
      allowedOrders: ["lemon_water", "lemon_tea"],
      doubleOrderChance: 0,
    };
  if (elapsed < 40)
    return {
      maxCustomers: 2,
      allowedOrders: ["lemon_water", "lemon_tea"],
      doubleOrderChance: 0,
    };
  if (elapsed < 65)
    return {
      maxCustomers: 3,
      allowedOrders: ORDER_TYPES,
      doubleOrderChance: 0,
    };
  if (elapsed < 90)
    return {
      maxCustomers: 3,
      allowedOrders: ORDER_TYPES,
      doubleOrderChance: 0.3,
    };
  return {
    maxCustomers: 3,
    allowedOrders: ORDER_TYPES,
    doubleOrderChance: 0.5,
  };
}

export function randomOrders(timeLeft: number): OrderType[] {
  const { allowedOrders, doubleOrderChance } = getCurrentStage(timeLeft);
  const pick = () =>
    allowedOrders[Math.floor(Math.random() * allowedOrders.length)];
  if (Math.random() < doubleOrderChance) return [pick(), pick()];
  return [pick()];
}

export function formatTime(s: number) {
  return `${Math.floor(s / 60)
    .toString()
    .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
}
