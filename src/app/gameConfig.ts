import type { IngredientType, OrderType } from "./types";
import imgIngredientLemon from "../imports/Frame2147203725/855ebb18a16f1dcfa83aa285a0efa9e5d75250c2.webp";
import imgIngredientWater from "../imports/Frame2147203725/7c4a3282301c917ae17c20995b3dceea3f1d8451.webp";
import imgIngredientEgg from "../imports/Frame2147203725/fa818e4d3f4113fc75020047ec4fc3d1c0e797fc.webp";
import imgIngredientTea from "../imports/Frame2147203725/a8e6709c6a2c67679a42af7469e918dd2170285d.webp";

export const RECIPES: Record<OrderType, IngredientType[]> = {
  lemon_water: ["lemon", "water"],
  lemon_tea: ["lemon", "tea", "water"],
  lemon_cake: ["lemon", "egg", "tea", "water"],
};

export const ORDER_TYPES: OrderType[] = [
  "lemon_water",
  "lemon_tea",
  "lemon_cake",
];

export const WAIT_TICK_MS = 200;
export const MAKE_DURATION_MS = 650;

export const CUSTOMER_POS = [
  { left: 0, top: 379 },
  { left: 248, top: 378 },
  { left: 496, top: 378 },
] as const;

export const BUBBLE_POS = [
  { left: 132, top: 360 },
  { left: 380, top: 360 },
  { left: 628, top: 360 },
] as const;

export const INGREDIENTS = [
  {
    type: "lemon" as IngredientType,
    img: imgIngredientLemon,
    label: "柠檬片",
    left: 165,
    top: 844,
  },
  {
    type: "water" as IngredientType,
    img: imgIngredientWater,
    label: "水",
    left: 385,
    top: 844,
  },
  {
    type: "egg" as IngredientType,
    img: imgIngredientEgg,
    label: "鸡蛋",
    left: 165,
    top: 1064,
  },
  {
    type: "tea" as IngredientType,
    img: imgIngredientTea,
    label: "茶",
    left: 385,
    top: 1064,
  },
];

export const DISH_SLOTS = [
  { left: 40, top: 570 },
  { left: 288, top: 570 },
  { left: 536, top: 570 },
] as const;

export const EMOTION_POS = [
  { left: 30, top: 410 },
  { left: 278, top: 409 },
  { left: 526, top: 409 },
] as const;

export const DESIGN_WIDTH = 750;
export const DESIGN_HEIGHT = 1680;
export const BG_WIDTH = 1680;
export const BG_HEIGHT = 1680;
export const COUNTER_HEIGHT = 1049;
export const COUNTER_TOP = DESIGN_HEIGHT - COUNTER_HEIGHT;
export const HOME_WIDTH = 1560;
export const STAGE_BASE_WIDTH = 390;
export const STAGE_BASE_HEIGHT = 844;
export const STAGE_MAX_WIDTH = 430;
