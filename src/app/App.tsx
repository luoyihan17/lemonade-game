import { useState, useEffect, useRef } from "react";

const SVG_ARROW =
  "M10 5L18.8215 13.8215C19.4724 14.4724 19.4724 15.5276 18.8215 16.1785L10 25";
// Bell icon path — viewBox 0 0 32 30.4 (from Frame2147203904/svg-544pav50hz.ts)
const SVG_BELL =
  "M1.992 22.1584H30.008C30.5536 22.1584 31.0216 21.9384 31.4144 21.5072C31.8032 21.0712 31.9984 20.5448 32 19.928C32.0008 19.3136 31.8032 18.7872 31.4144 18.3504C31.0192 17.92 30.552 17.6992 30.008 17.6992H29.8296C29.4528 14.7056 28.3608 12.0552 26.5592 9.7576C24.76 7.4584 22.5544 5.8888 19.948 5.0472V5.008C19.9936 4.744 20.016 4.5472 20.016 4.4176C20.016 3.1808 19.628 2.136 18.8448 1.2824C18.0632 0.4296 17.1152 0.0008 16.0008 0C14.8848 0 13.9448 0.4272 13.1752 1.2824C12.404 2.1368 12.0208 3.1824 12.02 4.4176C12.02 4.5472 12.0312 4.7576 12.0544 5.048C9.4448 5.8896 7.2416 7.46 5.4408 9.7584C3.6384 12.056 2.5488 14.7064 2.168 17.7H1.992C1.7312 17.7 1.476 17.7608 1.2264 17.8808C0.983573 17.9937 0.765716 18.1539 0.5856 18.352C0.402118 18.5611 0.258178 18.8018 0.1608 19.0624C0.0544 19.3416 0.0008 19.6376 0 19.9512C0 20.5544 0.1952 21.0728 0.5856 21.5072C0.9776 21.9368 1.4456 22.1584 1.992 22.1584ZM16 2.2104C16.5456 2.2104 17.0136 2.4272 17.4032 2.8624C17.7952 3.2952 17.9904 3.8144 17.992 4.4176V4.536L17.9544 4.576C17.3081 4.47216 16.6546 4.4192 16 4.4176C15.3449 4.41911 14.6908 4.47208 14.044 4.576L14.008 4.536V4.4176C14.008 3.8136 14.2048 3.2944 14.5968 2.8624C14.9872 2.4272 15.456 2.2112 16 2.2104ZM7.5728 14.0768C8.19723 12.939 9.02254 11.9237 10.0088 11.08C10.9673 10.2526 12.088 9.63465 13.2992 9.2656C13.3431 9.24115 13.3922 9.22745 13.4424 9.2256C13.4983 9.20347 13.5575 9.19076 13.6176 9.188C13.9024 9.188 14.148 9.3 14.3488 9.5232C14.5504 9.7464 14.6504 10.0176 14.6504 10.3312C14.6504 10.516 14.616 10.6856 14.5432 10.8424C14.4758 10.9964 14.3727 11.1321 14.2424 11.2384C14.1247 11.3377 13.9838 11.4057 13.8328 11.436C13.2014 11.641 12.5986 11.9257 12.0392 12.2832C10.9139 13.0016 9.98011 13.9828 9.3184 15.1424C9.2704 15.2712 9.1976 15.3928 9.1016 15.4944C9.01383 15.5955 8.90557 15.6768 8.784 15.7328C8.66089 15.7876 8.52756 15.8157 8.3928 15.8152C8.108 15.8152 7.8712 15.708 7.68 15.496C7.4928 15.288 7.3976 15.024 7.3976 14.7104C7.3976 14.4728 7.456 14.2624 7.5728 14.08V14.0768ZM30.0096 25.9416H1.992C1.4448 25.9416 0.9776 26.1608 0.5872 26.592C0.1968 27.028 0.0024 27.5544 0.0016 28.1728C0 28.7896 0.1952 29.312 0.5872 29.7496C0.9792 30.1808 1.4464 30.4 1.992 30.4H30.0088C30.5528 30.4 31.0208 30.1808 31.4136 29.7496C31.8024 29.312 31.9976 28.7904 31.9992 28.1728C32 27.5552 31.8024 27.028 31.4136 26.592C31.0184 26.1608 30.5512 25.9416 30.0096 25.9416Z";

import imgBgMain from "../imports/bg_main.webp";
import imgOrderBubbleWater from "../imports/order_bubble_water.webp";
import imgCustomerLemon from "../imports/customer_lemon.webp";
import imgCustomerLemon01 from "../imports/customer_lemon01.webp";
import imgCustomerLemon02 from "../imports/customer_lemon02.webp";
import imgCustomerLemon03 from "../imports/customer_lemon03.webp";
import imgCustomerLemon04 from "../imports/customer_lemon04.webp";
import imgCustomerLemon05 from "../imports/customer_lemon05.webp";
import imgCustomerLemon06 from "../imports/customer_lemon06.webp";
import imgCustomerLemon07 from "../imports/customer_lemon07.webp";
import imgCustomerLemon08 from "../imports/customer_lemon08.webp";
import imgCustomerLemon09 from "../imports/customer_lemon09.webp";
import imgOrderBubbleCake from "../imports/order_bubble_cake.webp";
import imgOrderBubbleTea from "../imports/order_bubble_tea.webp";
import imgCounterFrontPng from "../imports/counter_front.webp";
import imgIngredientLemon from "../imports/Frame2147203725/855ebb18a16f1dcfa83aa285a0efa9e5d75250c2.webp";
import imgIngredientWater from "../imports/Frame2147203725/7c4a3282301c917ae17c20995b3dceea3f1d8451.webp";
import imgIngredientEgg from "../imports/Frame2147203725/fa818e4d3f4113fc75020047ec4fc3d1c0e797fc.webp";
import imgIngredientTea from "../imports/Frame2147203725/a8e6709c6a2c67679a42af7469e918dd2170285d.webp";
import imgButtonRestart from "../imports/Frame2147203725/524389c260fb47c1ee213c019f2376033f702fd7.webp";
import imgButtonMake from "../imports/ButtonMake/dcab72e2e2469bb61f3d470728b94b6393aab6bf.webp";
import imgButtonClear from "../imports/Frame2147203725/b3dee6bcfc977b9edbc56872e81e23ac5d5ee303.webp";
import imgCoinIcon from "../imports/Frame2147203725/ceeaab9b8b9b5c4eb29ef6cb3312e588935f26b3.webp";
import imgTimerIcon from "../imports/Frame2147203725/6231e3681918c9c670981d2bc53b0866b7a80263.webp";
import imgMusicIcon from "../imports/Frame2147203725/7cc5115b5e3481422324172f9fb1f85048f64a18.webp";
import imgSignGiselle from "../imports/Frame2147203725/5fec252c2f1037dbf780a2365cfc7a4d12500051.webp";

// ── Full-size sign images for game header ─────────────────────────────────────
import imgSignKarina from "../imports/sign_KARINA.webp";
import imgSignWinter from "../imports/sign_WINTER.webp";
import imgSignNingning from "../imports/sign_NINGNING.webp";
import imgSignAespa from "../imports/sign_aespa.webp";
import imgHomeBg from "../imports/HomePage.webp";
import imgCoinReward from "../imports/Coin.webp";
import imgResultBg from "../imports/resultbg.webp";
import imgButtonSupport from "../imports/button_support.webp";
import imgCustomerSmall from "../imports/customersmall.webp";
import imgFoodSmall from "../imports/foodsmall.webp";
import imgLemonSmall from "../imports/lemonsmall.webp";
import imgBarcode from "../imports/barcode.webp";
import imgEmotionHappy from "../imports/emotion_happy.webp";
import imgEmotionNormal from "../imports/emotion_normal.webp";
import imgEmotionAngry from "../imports/emotion_angry.webp";
import imgCombos from "../imports/Combos.webp";

// ── Small sign previews (shown in header when a sign is selected) ─────────────
import imgSignKarinaSmall from "../imports/sign_KARINAsmall.webp";
import imgSignWinterSmall from "../imports/sign_WINTERsmall.webp";
import imgSignGiselleSmall from "../imports/sign_gisellesmall.webp";
import imgSignNingningSmall from "../imports/sign_NINGNINGsmall.webp";
import imgSignAespaSmall from "../imports/sign_aespasmall.webp";

// ── Frame2147203905: sign select screen ───────────────────────────────────────
import imgSignSelectBg from "../imports/Frame2147203905/4ff21df11c5b1fbdc84b3fc89b96e9d1d5457472.webp";
import imgSignSlimeDrip from "../imports/Frame2147203905/9d605782a4bfa8c81a18e3902c84856e586b1942.webp";
import imgSignKarinAchoice from "../imports/Frame2147203905/dc583622675ec4d43d4af219faa6cf237d7e76e4.webp";
import imgSignWinterchoice from "../imports/Frame2147203905/da4313fea9eb7d44cfc55506f8082b7c9aa29643.webp";
import imgSignGisellechoice from "../imports/Frame2147203905/677ff8357c9c67dafce1db90333b8a3dfef0d3dc.webp";
import imgSignNingningchoice from "../imports/Frame2147203905/3ac01fdc32888558f493c7dffd95ae035a36d6cc.webp";
import imgSignAespachoice from "../imports/Frame2147203905/813c28df9c1bde2c6d8a68fd160e5e7e2ddd5338.webp";
// SVG mask data URL for confirm button (rounded-rect pill)
const SIGN_CONFIRM_MASK =
  "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20400%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20id%3D%22%26%23231%3B%26%23159%3B%26%23169%3B%26%23229%3B%26%23189%3B%26%23162%3B%22%20width%3D%22400%22%20height%3D%2280%22%20rx%3D%2240%22%20fill%3D%22var(--fill-0%2C%20%23DFEF01)%22%20style%3D%22fill%3A%23DFEF01%3Bfill%3Acolor(display-p3%200.8745%200.9373%200.0039)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E%0A";
import imgDishLemonTea from "../imports/Frame2147203725/764c5ed62c464a244f1dc8169a759b4a2140e7c3.webp";
import imgDishLemonCake from "../imports/Frame2147203725/901b0c5ae98f968f9f3aed52dcc64cee99580533.webp";
import imgDishLemonWater from "../imports/Frame2147203725/9f392054e17131be8e792810121a0f9f8348dac6.webp";

// ── Types ──────────────────────────────────────────────────────────────────────
type GamePhase = "start" | "sign_select" | "playing" | "over";
type SignType =
  | "aespa"
  | "winter"
  | "karina"
  | "ningning"
  | "giselle";
type IngredientType = "lemon" | "water" | "egg" | "tea";
type OrderType = "lemon_water" | "lemon_tea" | "lemon_cake";
type CustomerVariant = number;

interface CustomerData {
  id: number;
  orders: OrderType[]; // original orders (1 or 2)
  pending: OrderType[]; // unfulfilled orders
  posIndex: 0 | 1 | 2;
  variant: CustomerVariant;
  enterPhase: 0 | 1 | 2; // 0=entering, 1=emotion shown, 2=bubble shown
  waitProgress: number; // 0–100; 100 = angry leave
}

interface ServedDish {
  id: number;
  dishType: OrderType;
  posIndex: 0 | 1 | 2;
  leaving: boolean;
}

// ── Config ────────────────────────────────────────────────────────────────────
const RECIPES: Record<OrderType, IngredientType[]> = {
  lemon_water: ["lemon", "water"],
  lemon_tea: ["lemon", "tea", "water"],
  lemon_cake: ["lemon", "egg", "tea", "water"],
};
const ORDER_BUBBLES: Record<OrderType, string> = {
  lemon_water: imgOrderBubbleWater,
  lemon_tea: imgOrderBubbleTea,
  lemon_cake: imgOrderBubbleCake,
};
const DISH_IMGS: Record<OrderType, string> = {
  lemon_water: imgDishLemonWater,
  lemon_tea: imgDishLemonTea,
  lemon_cake: imgDishLemonCake,
};
const ORDER_TYPES: OrderType[] = [
  "lemon_water",
  "lemon_tea",
  "lemon_cake",
];
const CUSTOMER_IMGS = [
  imgCustomerLemon,
  imgCustomerLemon01,
  imgCustomerLemon02,
  imgCustomerLemon03,
  imgCustomerLemon04,
  imgCustomerLemon05,
  imgCustomerLemon06,
  imgCustomerLemon07,
  imgCustomerLemon08,
  imgCustomerLemon09,
] as const;

// Sign images shown in game header (top-left during gameplay)
const SIGN_IMGS: Record<SignType, string> = {
  karina: imgSignKarina,
  winter: imgSignWinter,
  giselle: imgSignGiselle,
  ningning: imgSignNingning,
  aespa: imgSignAespa,
};
// Small sign images shown in modal header when a sign is selected
const SIGN_SMALL_IMGS: Record<SignType, string> = {
  karina: imgSignKarinaSmall,
  winter: imgSignWinterSmall,
  giselle: imgSignGiselleSmall,
  ningning: imgSignNingningSmall,
  aespa: imgSignAespaSmall,
};

// Sign choice images used in sign select modal
const SIGN_CHOICE_IMGS: Record<SignType, string> = {
  karina: imgSignKarinAchoice,
  winter: imgSignWinterchoice,
  giselle: imgSignGisellechoice,
  ningning: imgSignNingningchoice,
  aespa: imgSignAespachoice,
};
const SIGN_LABELS: Record<SignType, string> = {
  aespa: "aespa",
  winter: "WINTER",
  karina: "KARINA",
  ningning: "NINGNING",
  giselle: "GISELLE",
};
const WAIT_TICK_MS = 200; // ms per tick
const MAKE_DURATION_MS = 650; // quick making lock for successful recipes

// ── Stage config (§8) ─────────────────────────────────────────────────────────
interface StageConfig {
  maxCustomers: number;
  allowedOrders: OrderType[];
  doubleOrderChance: number;
}
function getCurrentStage(timeLeft: number): StageConfig {
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

function randomOrders(timeLeft: number): OrderType[] {
  const { allowedOrders, doubleOrderChance } =
    getCurrentStage(timeLeft);
  const pick = () =>
    allowedOrders[
      Math.floor(Math.random() * allowedOrders.length)
    ];
  if (Math.random() < doubleOrderChance)
    return [pick(), pick()];
  return [pick()];
}

// ── Figma positions ────────────────────────────────────────────────────────────
const CUSTOMER_POS = [
  { left: 0, top: 379 },
  { left: 248, top: 378 },
  { left: 496, top: 378 },
] as const;

const BUBBLE_POS = [
  { left: 132, top: 360 },
  { left: 380, top: 360 },
  { left: 628, top: 360 },
] as const;

const INGREDIENTS = [
  {
    type: "lemon" as IngredientType,
    img: imgIngredientLemon,
    label: "柠檬片",
    left: 165,
    top: 816,
  },
  {
    type: "water" as IngredientType,
    img: imgIngredientWater,
    label: "水",
    left: 385,
    top: 816,
  },
  {
    type: "egg" as IngredientType,
    img: imgIngredientEgg,
    label: "鸡蛋",
    left: 165,
    top: 1036,
  },
  {
    type: "tea" as IngredientType,
    img: imgIngredientTea,
    label: "茶",
    left: 385,
    top: 1036,
  },
];

const DISH_SLOTS = [
  { left: 40, top: 570 },
  { left: 288, top: 570 },
  { left: 536, top: 570 },
] as const;

const EMOTION_POS = [
  { left: 30, top: 410 },
  { left: 278, top: 409 },
  { left: 526, top: 409 },
] as const;

// ── Helpers ────────────────────────────────────────────────────────────────────
let _nextId = 1;
function nextId() {
  return _nextId++;
}

function formatTime(s: number) {
  return `${Math.floor(s / 60)
    .toString()
    .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
}

function getEmotion(p: number) {
  if (p < 40)
    return { src: imgEmotionHappy, shake: false };
  if (p < 75)
    return { src: imgEmotionNormal, shake: false };
  return { src: imgEmotionAngry, shake: true };
}

const ASSET_IMG: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  pointerEvents: "none",
};

const DESIGN_WIDTH = 750;
const DESIGN_HEIGHT = 1680;
const BG_WIDTH = 1680;
const BG_HEIGHT = 1680;
const COUNTER_TOP = 600;
const COUNTER_HEIGHT = 1049;
const HOME_WIDTH = 1560;
const STAGE_BASE_WIDTH = 390;
const STAGE_BASE_HEIGHT = 844;
const STAGE_MAX_WIDTH = 430;

// ── Component ──────────────────────────────────────────────────────────────────
export default function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    scale: 0.5,
    offsetLeft: 0,
  });
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const measure = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
      const el = wrapperRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const baseW = Math.min(w, STAGE_BASE_WIDTH);
      const baseH = Math.min(h, STAGE_BASE_HEIGHT);
      const finalScale = Math.min(
        baseW / DESIGN_WIDTH,
        baseH / DESIGN_HEIGHT,
      );
      const left = Math.max(
        0,
        (w - DESIGN_WIDTH * finalScale) / 2,
      );
      setLayout((prev) =>
        Math.abs(prev.scale - finalScale) < 0.0001 &&
        Math.abs(prev.offsetLeft - left) < 0.5
          ? prev
          : { scale: finalScale, offsetLeft: left },
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    window.addEventListener("orientationchange", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // ── Game state ──────────────────────────────────────────────────────────────
  const [gamePhase, setGamePhase] =
    useState<GamePhase>("start");
  const [selectedSign, setSelectedSign] =
    useState<SignType>("giselle");
  const [choosingSign, setChoosingSign] =
    useState<SignType | null>(null);
  const [customers, setCustomers] = useState<CustomerData[]>(
    [],
  );
  const [selected, setSelected] = useState<Set<IngredientType>>(
    new Set(),
  );
  const [coins, setCoins] = useState(0);
  const [combo, setCombo] = useState(0);
  const [comboToast, setComboToast] = useState<{
    id: number;
    value: number;
  } | null>(null);
  const [maxCombo, setMaxCombo] = useState(0);
  const [servedTotal, setServedTotal] = useState(0);
  const [customersServed, setCustomersServed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [musicOn, setMusicOn] = useState(true);
  const [feedback, setFeedback] = useState<{
    type: "ok" | "fail";
    coins?: number;
    posIndex?: number;
  } | null>(null);
  const [coinPopups, setCoinPopups] = useState<
    { id: number; coins: number; posIndex: number }[]
  >([]);
  const [leaving, setLeaving] = useState<Set<number>>(
    new Set(),
  );
  const [servedDishes, setServedDishes] = useState<
    ServedDish[]
  >([]);
  const [successBursts, setSuccessBursts] = useState<
    { id: number; posIndex: 0 | 1 | 2; combo: number }[]
  >([]);
  const [isMaking, setIsMaking] = useState(false);

  // Refs for stale-closure-safe access
  const phaseTimers = useRef<
    Map<number, ReturnType<typeof setTimeout>>
  >(new Map());
  const angryProcessed = useRef<Set<number>>(new Set());
  const isMakingRef = useRef(false);
  const timeLeftRef = useRef(120);
  const leavingRef = useRef<Set<number>>(new Set());
  const customersRef = useRef<CustomerData[]>([]);
  const comboRef = useRef(0);
  const comboToastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gamePhaseRef = useRef<GamePhase>("start");

  useEffect(() => {
    isMakingRef.current = isMaking;
  }, [isMaking]);
  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);
  useEffect(() => {
    leavingRef.current = leaving;
  }, [leaving]);
  useEffect(() => {
    customersRef.current = customers;
  }, [customers]);
  useEffect(() => {
    comboRef.current = combo;
  }, [combo]);
  useEffect(() => {
    gamePhaseRef.current = gamePhase;
  }, [gamePhase]);

  // ── Spawn helpers ─────────────────────────────────────────────────────────
  function spawnCustomer(
    id: number,
    orders: OrderType[],
    posIndex: 0 | 1 | 2,
    variant: CustomerVariant,
  ): CustomerData {
    return {
      id,
      orders,
      pending: [...orders],
      posIndex,
      variant,
      enterPhase: 0,
      waitProgress: 0,
    };
  }

  function pickCustomerVariant(activeCustomers: CustomerData[]) {
    const used = new Set(
      activeCustomers.map((customer) => customer.variant),
    );
    const available = CUSTOMER_IMGS
      .map((_, index) => index)
      .filter((index) => !used.has(index));
    const pool = available.length > 0
      ? available
      : CUSTOMER_IMGS.map((_, index) => index);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // ── Auto-spawn: poll every 700 ms, spawn if a slot is open (§7) ──────────
  // Using an interval avoids the stale-closure reset problem caused by having
  // timeLeft in a timeout's dependency array (timeLeft changes every second,
  // cancelling the timer before it fires).
  useEffect(() => {
    if (gamePhase !== "playing") return;
    const id = setInterval(() => {
      if (
        isMakingRef.current ||
        gamePhaseRef.current !== "playing"
      )
        return;
      setCustomers((prev) => {
        const stage = getCurrentStage(timeLeftRef.current);
        const activeCustomers = prev.filter(
          (c) => !leavingRef.current.has(c.id),
        );
        const activeCnt = activeCustomers.length;
        if (activeCnt >= stage.maxCustomers) return prev; // same ref → no re-render
        const used = new Set(prev.map((c) => c.posIndex));
        const free = ([0, 1, 2] as const).find(
          (p) => !used.has(p),
        );
        if (free === undefined) return prev;
        return [
          ...prev,
          spawnCustomer(
            nextId(),
            randomOrders(timeLeftRef.current),
            free,
            pickCustomerVariant(activeCustomers),
          ),
        ];
      });
    }, 700);
    return () => clearInterval(id);
  }, [gamePhase]); // eslint-disable-line

  // ── Phase transition: char(0) → emotion(1) → bubble(2) ───────────────────
  useEffect(() => {
    customers.forEach((c) => {
      if (c.enterPhase !== 0 || phaseTimers.current.has(c.id))
        return;
      const t = setTimeout(() => {
        setCustomers((prev) =>
          prev.map((x) =>
            x.id === c.id ? { ...x, enterPhase: 1 } : x,
          ),
        );
        setTimeout(() => {
          setCustomers((prev) =>
            prev.map((x) =>
              x.id === c.id ? { ...x, enterPhase: 2 } : x,
            ),
          );
        }, 350);
      }, 550);
      phaseTimers.current.set(c.id, t);
    });
  });

  // ── Wait progress tick (slows 50% during making) ──────────────────────────
  useEffect(() => {
    if (gamePhase !== "playing") return;
    const id = setInterval(() => {
      setCustomers((prev) =>
        prev.map((c) => {
          if (c.enterPhase < 2 || leavingRef.current.has(c.id))
            return c;
          const inc = isMakingRef.current ? 0.5 : 1;
          return {
            ...c,
            waitProgress: Math.min(100, c.waitProgress + inc),
          };
        }),
      );
    }, WAIT_TICK_MS);
    return () => clearInterval(id);
  }, [gamePhase]);

  // ── Auto-leave when waitProgress >= 100 ──────────────────────────────────
  useEffect(() => {
    customers.forEach((c) => {
      if (c.waitProgress < 100) return;
      if (
        leavingRef.current.has(c.id) ||
        angryProcessed.current.has(c.id)
      )
        return;
      angryProcessed.current.add(c.id);
      setCombo(0);
      setComboToast(null);
      if (comboToastTimer.current) {
        clearTimeout(comboToastTimer.current);
        comboToastTimer.current = null;
      }
      setLeaving((prev) => new Set([...prev, c.id]));
      setTimeout(() => {
        phaseTimers.current.delete(c.id);
        angryProcessed.current.delete(c.id);
        setCustomers((prev) =>
          prev.filter((x) => x.id !== c.id),
        );
        setLeaving((prev) => {
          const n = new Set(prev);
          n.delete(c.id);
          return n;
        });
      }, 750);
    });
  }, [customers]); // eslint-disable-line

  // ── Countdown ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (gamePhase !== "playing") return;
    if (timeLeft <= 0) {
      setGamePhase("over");
      return;
    }
    const t = setTimeout(() => setTimeLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, gamePhase]);

  // ── Actions ──────────────────────────────────────────────────────────────
  function startGame(sign: SignType) {
    setSelectedSign(sign);
    phaseTimers.current.forEach(clearTimeout);
    phaseTimers.current.clear();
    angryProcessed.current.clear();
    _nextId = 1;
    setCustomers([]);
    setSelected(new Set());
    setCoins(0);
    setCombo(0);
    setTimeLeft(120);
    setFeedback(null);
    setLeaving(new Set());
    setServedDishes([]);
    setSuccessBursts([]);
    setIsMaking(false);
    setGamePhase("playing");
  }

  function toggleIngredient(type: IngredientType) {
    if (gamePhase !== "playing" || isMaking) return;
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
  }

  function handleMake() {
    if (
      gamePhase !== "playing" ||
      isMaking ||
      selected.size === 0
    )
      return;

    const capturedSel = new Set(selected);

    // Identify which dish was made before entering the making state.
    const matchedDish = (
      Object.keys(RECIPES) as OrderType[]
    ).find((dish) => {
      const r = RECIPES[dish];
      return (
        r.length === capturedSel.size &&
        r.every((i) => capturedSel.has(i))
      );
    });

    const showFail = () => {
      const penalty = 100;
      setCombo(0);
      setComboToast(null);
      if (comboToastTimer.current) {
        clearTimeout(comboToastTimer.current);
        comboToastTimer.current = null;
      }
      setCoins((n) => Math.max(0, n - penalty));
      setFeedback({ type: "fail", coins: penalty });
      setTimeout(() => {
        setFeedback(null);
        setSelected(new Set());
      }, 900);

      // Fail coin popup (use posIndex of first visible customer, or center)
      const visibleCustomer = customersRef.current.find(
        (c) => !leavingRef.current.has(c.id),
      );
      const failPosIndex = visibleCustomer
        ? visibleCustomer.posIndex
        : 1;
      const failPopupId = nextId();
      setCoinPopups((prev) => [
        ...prev,
        { id: failPopupId, coins: -penalty, posIndex: failPosIndex },
      ]);
      setTimeout(
        () =>
          setCoinPopups((prev) =>
            prev.filter((p) => p.id !== failPopupId),
          ),
        1200,
      );
    };

    if (!matchedDish) {
      showFail();
      return;
    }

    // Auto-match: longest-waiting customer who needs this dish (§6)
    const cur = customersRef.current;
    const lv = leavingRef.current;
    const candidates = cur
      .filter(
        (c) =>
          !lv.has(c.id) && c.pending.includes(matchedDish),
      )
      .sort((a, b) => b.waitProgress - a.waitProgress);

    if (candidates.length === 0) {
      showFail();
      return;
    }

    setIsMaking(true);

    setTimeout(() => {
      setIsMaking(false);
      const match = candidates[0];
      const newCombo = comboRef.current + 1;
      // Tip based on combo: x1=10, x3=20, x5=30, x10+=50 (capped)
      const tip = newCombo >= 10 ? 50 : newCombo >= 5 ? 30 : newCombo >= 3 ? 20 : 10;
      const earned = tip;
      setCombo(newCombo);
      if (newCombo >= 2) {
        if (comboToastTimer.current) {
          clearTimeout(comboToastTimer.current);
        }
        setComboToast({ id: nextId(), value: newCombo });
        comboToastTimer.current = setTimeout(() => {
          setComboToast(null);
          comboToastTimer.current = null;
        }, 650);
      }
      setMaxCombo((prev) => Math.max(prev, newCombo));
      setServedTotal((n) => n + 1);
      setCoins((n) => n + earned);
      setSelected(new Set());
      setFeedback({ type: "ok", coins: earned, posIndex: match.posIndex });
      setTimeout(() => setFeedback(null), 900);

      const burstId = nextId();
      setSuccessBursts((prev) => [
        ...prev,
        { id: burstId, posIndex: match.posIndex, combo: newCombo },
      ]);
      setTimeout(
        () =>
          setSuccessBursts((prev) =>
            prev.filter((burst) => burst.id !== burstId),
          ),
        420,
      );

      // Coin popup above customer head
      const popupId = nextId();
      setCoinPopups((prev) => [
        ...prev,
        { id: popupId, coins: earned, posIndex: match.posIndex },
      ]);
      setTimeout(
        () =>
          setCoinPopups((prev) =>
            prev.filter((p) => p.id !== popupId),
          ),
        1200,
      );

      // Dish appears on counter
      const dishId = nextId();
      setServedDishes((prev) => [
        ...prev,
        {
          id: dishId,
          dishType: matchedDish,
          posIndex: match.posIndex,
          leaving: false,
        },
      ]);

      const newPending = match.pending.filter(
        (o) => o !== matchedDish,
      );

      if (newPending.length === 0) {
        // All orders done → customer leaves
        setCustomersServed((n) => n + 1);
        setLeaving((prev) => new Set([...prev, match.id]));
        setTimeout(() => {
          setServedDishes((prev) =>
            prev.map((d) =>
              d.id === dishId ? { ...d, leaving: true } : d,
            ),
          );
        }, 250);
        setTimeout(() => {
          setServedDishes((prev) =>
            prev.filter((d) => d.id !== dishId),
          );
          phaseTimers.current.delete(match.id);
          angryProcessed.current.delete(match.id);
          setCustomers((prev) =>
            prev.filter((c) => c.id !== match.id),
          );
          setLeaving((prev) => {
            const n = new Set(prev);
            n.delete(match.id);
            return n;
          });
        }, 750);
      } else {
        // Still has orders → stays, update pending
        setCustomers((prev) =>
          prev.map((c) =>
            c.id === match.id
              ? { ...c, pending: newPending }
              : c,
          ),
        );
        setTimeout(() => {
          setServedDishes((prev) =>
            prev.map((d) =>
              d.id === dishId ? { ...d, leaving: true } : d,
            ),
          );
        }, 500);
        setTimeout(
          () =>
            setServedDishes((prev) =>
              prev.filter((d) => d.id !== dishId),
            ),
          1000,
        );
      }
    }, MAKE_DURATION_MS);
  }

  function handleRestart() {
    phaseTimers.current.forEach(clearTimeout);
    phaseTimers.current.clear();
    angryProcessed.current.clear();
    _nextId = 1;
    setCustomers([]);
    setSelected(new Set());
    setCoins(0);
    setCombo(0);
    setComboToast(null);
    if (comboToastTimer.current) {
      clearTimeout(comboToastTimer.current);
      comboToastTimer.current = null;
    }
    setMaxCombo(0);
    setServedTotal(0);
    setCustomersServed(0);
    setTimeLeft(120);
    setFeedback(null);
    setLeaving(new Set());
    setServedDishes([]);
    setSuccessBursts([]);
    setIsMaking(false);
    setGamePhase("start");
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  const inputsLocked = isMaking || gamePhase !== "playing";
  const showGameBackground = gamePhase === "playing";
  const backgroundFrameWidth =
    showGameBackground
      ? `calc(100dvh * ${BG_WIDTH / BG_HEIGHT})`
      : `calc(100dvh * ${HOME_WIDTH / BG_HEIGHT})`;

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100vw;
          height: 100dvh;
          overflow: hidden;
          position: fixed;
          inset: 0;
          overscroll-behavior: none;
        }
        #root,
        .game-root {
          width: 100vw;
          height: 100dvh;
          overflow: hidden;
          overscroll-behavior: none;
        }

        @keyframes charEnter {
          from { transform: translateY(80px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes emotionPop {
          0%   { transform: scale(0.3); opacity: 0; }
          70%  { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes emotionShake {
          0%   { transform: translateX(0)    scale(1.08); }
          20%  { transform: translateX(-6px) scale(1.08); }
          40%  { transform: translateX(6px)  scale(1.08); }
          60%  { transform: translateX(-6px) scale(1.08); }
          80%  { transform: translateX(6px)  scale(1.08); }
          100% { transform: translateX(0)    scale(1.08); }
        }
        @keyframes bubbleShake {
          0%   { transform: translateX(0); }
          20%  { transform: translateX(-4px); }
          40%  { transform: translateX(4px); }
          60%  { transform: translateX(-4px); }
          80%  { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
        @keyframes bubblePop {
          0%   { transform: scale(0.6); opacity: 0; }
          70%  { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes dishAppear {
          0%   { transform: scale(0.4) translateY(-20px); opacity: 0; }
          70%  { transform: scale(1.1) translateY(2px);   opacity: 1; }
          100% { transform: scale(1)   translateY(0);     opacity: 1; }
        }
        @keyframes dishLeave {
          0%   { transform: scale(1)   translateY(0);     opacity: 1; }
          100% { transform: scale(1.5) translateY(-50px); opacity: 0; }
        }
        @keyframes successBurst {
          0%   { transform: scale(0.25) rotate(0deg); opacity: 0; filter: blur(0); }
          18%  { transform: scale(0.9)  rotate(8deg); opacity: 0.95; filter: blur(0); }
          52%  { transform: scale(1.18) rotate(-4deg); opacity: 0.75; filter: blur(0.5px); }
          100% { transform: scale(1.65) rotate(0deg); opacity: 0; filter: blur(2px); }
        }
        @keyframes feedbackPop {
          0%   { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes comboBurst {
          0%   { transform: scale(0.55) translateY(12px); opacity: 0; }
          14%  { transform: scale(1.18) translateY(0);    opacity: 1; }
          28%  { transform: scale(0.96) translateY(0);    opacity: 1; }
          52%  { transform: scale(1.04) translateY(0);    opacity: 1; }
          76%  { transform: scale(1)    translateY(-4px); opacity: 1; }
          100% { transform: scale(0.88) translateY(-18px); opacity: 0; }
        }
        @keyframes makingPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.97); }
        }
        @keyframes failShake {
          0%   { transform: scale(1.04) translateX(0); }
          20%  { transform: scale(1.04) translateX(-6px); }
          40%  { transform: scale(1.04) translateX(6px); }
          60%  { transform: scale(1.04) translateX(-6px); }
          80%  { transform: scale(1.04) translateX(4px); }
          100% { transform: scale(1.04) translateX(0); }
        }
        @keyframes coinFloat {
          0%   { transform: translateY(0) scale(0.7); opacity: 0; }
          15%  { transform: translateY(-10px) scale(1.1); opacity: 1; }
          25%  { transform: translateY(-16px) scale(1); opacity: 1; }
          70%  { transform: translateY(-20px) scale(1); opacity: 1; }
          100% { transform: translateY(-50px) scale(1); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* ── Landscape warning (§10.5) ── */}
      {isLandscape && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 64 }}>📱</div>
          <p
            style={{
              color: "#DEF000",
              fontSize: 28,
              fontFamily: "'PingFang SC',sans-serif",
              textAlign: "center",
              margin: 0,
              padding: "0 32px",
            }}
          >
            请旋转手机，竖屏体验
            <br />
            LEMONADE 甜品工坊。
          </p>
        </div>
      )}

      <div
        className="game-root"
        onContextMenu={(event) => event.preventDefault()}
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {/* Full-screen background frame: scale by original 1680 height, crop width only. */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: backgroundFrameWidth,
            height: "100dvh",
            transform: "translateX(-50%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <img
            alt=""
            src={showGameBackground ? imgBgMain : imgHomeBg}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              objectFit: "fill",
              pointerEvents: "none",
            }}
          />
        </div>
        {showGameBackground && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: `calc(100dvh * ${COUNTER_TOP / BG_HEIGHT})`,
              width: backgroundFrameWidth,
              height: `calc(100dvh * ${COUNTER_HEIGHT / BG_HEIGHT})`,
              transform: "translateX(-50%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <img
              alt=""
              src={imgCounterFrontPng}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                objectFit: "fill",
                pointerEvents: "none",
              }}
            />
          </div>
        )}
        {(gamePhase === "sign_select" || gamePhase === "over") && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 3,
              background: "rgba(0,0,0,0.8)",
              pointerEvents: "none",
            }}
          />
        )}

        <div
          className="game-stage"
          ref={wrapperRef}
          style={{
            position: "relative",
            zIndex: 4,
            width: `min(100vw, ${STAGE_MAX_WIDTH}px)`,
            minWidth: 0,
            maxWidth: STAGE_MAX_WIDTH,
            height: "calc(100dvh - env(safe-area-inset-bottom))",
            overflow: "hidden",
            flex: "0 0 auto",
          }}
        >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: layout.offsetLeft,
                width: DESIGN_WIDTH,
                height: DESIGN_HEIGHT,
                transformOrigin: "top left",
                transform: `scale(${layout.scale})`,
              }}
            >
              {gamePhase === "playing" && (
                <>
                  {/* ── Customers + emotions + bubbles — behind counter (zIndex 3) ── */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 3,
                      pointerEvents: "none",
                    }}
                  >
                    {([0, 1, 2] as const).map((posIndex) => {
                  const customer = customers.find(
                    (c) => c.posIndex === posIndex,
                  );
                  if (!customer) return null;
                  const gone = leaving.has(customer.id);
                  const emo = getEmotion(customer.waitProgress);
                  const showEmotion =
                    customer.enterPhase >= 1 && !gone;
                  const showBubble =
                    customer.enterPhase >= 2 && !gone;
                  const isDouble =
                    customer.pending.length === 2;

                  // Figma double-order layout: two 116×230 bubbles with 12px diagonal offset.
                  // pending[0] = behind  → left+12, top+0
                  // pending[1] = in front → left+0,  top+12
                  const BUBBLE_OFFSETS = [
                    { left: 12, top: 0 }, // first order: peek from top-right
                    { left: 0, top: 12 }, // second order: rendered on top
                  ];

                  return (
                    <div key={customer.id}>
                      {/* Pending order bubbles */}
                      {customer.pending.map((order, i) => {
                        const off = isDouble
                          ? BUBBLE_OFFSETS[i]
                          : { left: 0, top: 0 };
                        return (
                          <div
                            key={`${customer.id}-bubble-${i}`}
                            style={{
                              position: "absolute",
                              left:
                                BUBBLE_POS[posIndex].left +
                                off.left,
                              top:
                                BUBBLE_POS[posIndex].top +
                                off.top,
                              width: 116,
                              height: 230,
                              zIndex: 1 + i, // second bubble renders on top of first
                              opacity: showBubble ? 1 : 0,
                              animation: gone
                                ? undefined
                                : emo.shake && showBubble
                                  ? "bubbleShake 0.4s ease infinite"
                                  : customer.enterPhase === 2
                                    ? "bubblePop 0.35s ease forwards"
                                    : undefined,
                              transition: gone
                                ? "opacity 0.35s"
                                : undefined,
                            }}
                          >
                            <img
                              alt=""
                              src={ORDER_BUBBLES[order]}
                              style={ASSET_IMG}
                            />
                          </div>
                        );
                      })}

                      {/* Character */}
                      <div
                        style={{
                          position: "absolute",
                          left: CUSTOMER_POS[posIndex].left,
                          top: CUSTOMER_POS[posIndex].top,
                          width: 200,
                          height: 300,
                          zIndex: 2,
                          animation:
                            !gone && customer.enterPhase === 0
                              ? "charEnter 0.55s ease-out forwards"
                              : undefined,
                          opacity: gone ? 0 : 1,
                          transform: gone
                            ? "translateY(20px)"
                            : undefined,
                          transition: gone
                            ? "opacity 0.5s, transform 0.5s"
                            : undefined,
                        }}
                      >
                        <img
                          alt=""
                          src={CUSTOMER_IMGS[customer.variant]}
                          style={ASSET_IMG}
                        />
                      </div>

                      {/* Emotion badge */}
                      {showEmotion && (
                        <img
                          alt=""
                          src={emo.src}
                          style={{
                            position: "absolute",
                            left: EMOTION_POS[posIndex].left,
                            top: EMOTION_POS[posIndex].top,
                            width: 50,
                            height: 50,
                            zIndex: 3,
                            objectFit: "contain",
                            pointerEvents: "none",
                            animation: emo.shake
                              ? "emotionShake 0.4s ease infinite"
                              : "emotionPop 0.3s ease forwards",
                          }}
                        />
                      )}
                    </div>
                  );
                    })}
                  </div>

                  {/* Counter occluder inside the UI stage: customers stay below it. */}
                  <div
                    style={{
                      position: "absolute",
                      left: (DESIGN_WIDTH - BG_WIDTH) / 2,
                      top: COUNTER_TOP,
                      width: BG_WIDTH,
                      height: COUNTER_HEIGHT,
                      zIndex: 4,
                      pointerEvents: "none",
                    }}
                  >
                    <img
                      alt=""
                      src={imgCounterFrontPng}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

              {/* ── Success burst — quick lemon flash on completed dishes ── */}
              {successBursts.map((burst) => {
                const size = burst.combo >= 10 ? 190 : burst.combo >= 5 ? 170 : 150;
                return (
                  <div
                    key={burst.id}
                    style={{
                      position: "absolute",
                      left: DISH_SLOTS[burst.posIndex].left + 60 - size / 2,
                      top: DISH_SLOTS[burst.posIndex].top + 54 - size / 2,
                      width: size,
                      height: size,
                      zIndex: 5,
                      pointerEvents: "none",
                      borderRadius: "50%",
                      mixBlendMode: "screen",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(222,240,0,0.95) 18%, rgba(166,255,0,0.8) 34%, rgba(222,240,0,0.28) 58%, rgba(222,240,0,0) 72%)",
                      boxShadow:
                        "0 0 22px rgba(222,240,0,0.85), 0 0 46px rgba(166,255,0,0.5)",
                      animation:
                        "successBurst 0.42s cubic-bezier(0.16, 0.9, 0.22, 1) forwards",
                    }}
                  />
                );
              })}

              {/* ── Served dishes — zIndex 5 ── */}
              {servedDishes.map((dish) => (
                <div
                  key={dish.id}
                  style={{
                    position: "absolute",
                    left: DISH_SLOTS[dish.posIndex].left,
                    top: DISH_SLOTS[dish.posIndex].top,
                    width: 120,
                    height: 120,
                    zIndex: 5,
                    animation: dish.leaving
                      ? "dishLeave 0.5s ease forwards"
                      : "dishAppear 0.4s ease forwards",
                  }}
                >
                  <img
                    alt=""
                    src={DISH_IMGS[dish.dishType]}
                    style={ASSET_IMG}
                  />
                </div>
              ))}

              {/* ── Ingredient cards — zIndex 6 ── */}
              {INGREDIENTS.map((ing) => {
                const isSel = selected.has(ing.type);
                return (
                  <div
                    key={ing.type}
                    onClick={() => toggleIngredient(ing.type)}
                    style={{
                      position: "absolute",
                      left: ing.left,
                      top: ing.top,
                      width: 200,
                      height: 200,
                      zIndex: 6,
                      cursor: inputsLocked
                        ? "default"
                        : "pointer",
                      borderRadius: 12,
                      outline: isSel
                        ? (feedback?.type === "fail"
                          ? "3px solid #FF004D"
                          : "2px solid #DEF000")
                        : "2px solid transparent",
                      boxShadow: isSel
                        ? (feedback?.type === "fail"
                          ? "0 0 16px rgba(255,0,77,0.8), inset 0 0 8px rgba(255,0,77,0.3)"
                          : "0 0 12px rgba(222,240,0,0.6)")
                        : "none",
                      transform: isSel && !(feedback?.type === "fail")
                        ? "scale(1.04)"
                        : "scale(1)",
                      animation: isSel && feedback?.type === "fail"
                        ? "failShake 0.4s ease"
                        : undefined,
                      transition:
                        "outline 0.12s, box-shadow 0.12s",
                      overflow: "hidden",
                      opacity: inputsLocked ? 0.5 : 1,
                    }}
                  >
                    <img
                      alt={ing.label}
                      src={ing.img}
                      style={ASSET_IMG}
                    />
                  </div>
                );
              })}

              {/* ── Make button — zIndex 6 ── */}
              <div
                onClick={handleMake}
                style={{
                  position: "absolute",
                  left: 214,
                  top: 1301,
                  width: 320,
                  height: 166,
                  zIndex: 6,
                  cursor: inputsLocked ? "default" : "pointer",
                  animation: isMaking
                    ? "makingPulse 0.6s ease infinite"
                    : undefined,
                }}
              >
                {/* Button background — Figma inset: top 12.65%, right 1.56%, bottom -1.81%, left 1.56% */}
                <div
                  style={{
                    position: "absolute",
                    top: "12.65%",
                    left: "1.56%",
                    right: "1.56%",
                    bottom: "-1.81%",
                    pointerEvents: "none",
                  }}
                >
                  <img
                    alt=""
                    src={imgButtonMake}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {isMaking ? (
                  /* Making state: centred text only, no icon */
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'PingFang SC', sans-serif",
                        fontWeight: 600,
                        fontSize: 32,
                        color: "#27292F",
                      }}
                    >
                      制作中
                    </span>
                  </div>
                ) : (
                  /* Normal state: bell icon (Figma inset) + "制作" text */
                  <>
                    {/* Bell icon: Figma inset top=39.76%, right=69.06%, bottom=41.93%, left=20.94% */}
                    <div
                      style={{
                        position: "absolute",
                        top: "39.76%",
                        left: "20.94%",
                        right: "69.06%",
                        bottom: "41.93%",
                        pointerEvents: "none",
                      }}
                    >
                      <svg
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        fill="none"
                        viewBox="0 0 32 30.4"
                        preserveAspectRatio="none"
                      >
                        <path d={SVG_BELL} fill="#27292F" />
                      </svg>
                    </div>
                    {/* "制作" text: Figma left=calc(50%+14px), top=calc(50%-23px), -translate-x-1/2 */}
                    <span
                      style={{
                        position: "absolute",
                        left: "calc(50% + 14px)",
                        top: "calc(50% - 23px)",
                        transform: "translateX(-50%)",
                        fontFamily: "'PingFang SC', sans-serif",
                        fontWeight: 600,
                        fontSize: 32,
                        color: "#27292F",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                      }}
                    >
                      制作
                    </span>
                  </>
                )}
              </div>

              {/* ── Header: sign ── */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 64,
                  width: 240,
                  height: 240,
                }}
              >
                <img
                  alt={SIGN_LABELS[selectedSign]}
                  src={SIGN_IMGS[selectedSign]}
                  style={ASSET_IMG}
                />
              </div>

              {/* ── Header: coin ── */}
              <div
                style={{
                  position: "absolute",
                  left: 294,
                  top: 244,
                  width: 168,
                  height: 60,
                }}
              >
                <img
                  alt=""
                  src={imgCoinIcon}
                  style={ASSET_IMG}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 349,
                  top: 249,
                  width: 113,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'PingFang SC',sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    color: "#DEF000",
                  }}
                >
                  {coins}
                </span>
              </div>

              {/* ── Header: timer ── */}
              <div
                style={{
                  position: "absolute",
                  left: 482,
                  top: 244,
                  width: 168,
                  height: 60,
                }}
              >
                <img
                  alt=""
                  src={imgTimerIcon}
                  style={ASSET_IMG}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 540,
                  top: 249,
                  width: 110,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'PingFang SC',sans-serif",
                    fontWeight: 600,
                    fontSize: 24,
                    color:
                      timeLeft <= 30 ? "#FF5555" : "#DEF000",
                    transition: "color 0.3s",
                  }}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>

              {/* ── Combo banner ── */}
              {comboToast && (
                <div
                  key={comboToast.id}
                  style={{
                    position: "absolute",
                    left: "calc(50% - 159px)",
                    top: 689,
                    width: 318,
                    height: 128,
                    zIndex: 20,
                    pointerEvents: "none",
                    transformOrigin: "center center",
                    animation: "comboBurst 0.65s cubic-bezier(0.18, 0.9, 0.2, 1) forwards",
                  }}
                >
                  <img
                    alt=""
                    src={imgCombos}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 122.09,
                      top: 99.25,
                      width: 48,
                      height: 34,
                      fontFamily: "'PingFang SC', sans-serif",
                      fontWeight: 600,
                      fontSize: 24,
                      lineHeight: "34px",
                      color: "#DDF000",
                      textShadow:
                        "-1.7px -1.7px 0 #000, 1.7px -1.7px 0 #000, -1.7px 1.7px 0 #000, 1.7px 1.7px 0 #000",
                    }}
                  >
                    连击
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      left: 176.62,
                      top: 101,
                      width: 70,
                      height: 33,
                      fontFamily: "'PingFang SC', sans-serif",
                      fontWeight: 600,
                      fontSize: 20.1342,
                      lineHeight: "28px",
                      color: "#DDF000",
                      textShadow:
                        "-1.7px -1.7px 0 #000, 1.7px -1.7px 0 #000, -1.7px 1.7px 0 #000, 1.7px 1.7px 0 #000",
                    }}
                  >
                    x {comboToast.value}
                  </span>
                </div>
              )}

              {/* ── Header: music ── */}
              <div
                onClick={() => setMusicOn((v) => !v)}
                style={{
                  position: "absolute",
                  left: 670,
                  top: 244,
                  width: 60,
                  height: 60,
                  cursor: "pointer",
                  opacity: musicOn ? 1 : 0.35,
                  transition: "opacity 0.2s",
                }}
              >
                <img
                  alt="music"
                  src={imgMusicIcon}
                  style={ASSET_IMG}
                />
              </div>

              {/* ── Support text ── */}
              <p
                style={{
                  position: "absolute",
                  left: "29.6%",
                  right: "32.8%",
                  top: 1487,
                  margin: 0,
                  zIndex: 6,
                  fontFamily: "'PingFang SC',sans-serif",
                  color: "#D2D791",
                  fontSize: 28,
                  textAlign: "center",
                  letterSpacing: "0.6px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                前往巅峰榜支持aespa
              </p>
              <div
                style={{
                  position: "absolute",
                  left: 510,
                  top: 1492,
                  width: 30,
                  height: 30,
                  zIndex: 6,
                  pointerEvents: "none",
                }}
              >
                <svg
                  fill="none"
                  viewBox="0 0 30 30"
                  style={{ width: "100%", height: "100%" }}
                >
                  <path
                    d={SVG_ARROW}
                    opacity="0.3"
                    stroke="#D2D791"
                    strokeWidth="3.33333"
                  />
                </svg>
              </div>

              {/* ── Coin popups above customer heads ── */}
              {coinPopups.map((popup) => {
                const isFail = popup.coins < 0;
                const cx = CUSTOMER_POS[popup.posIndex].left + (isFail ? 90 : 126);
                const cy = CUSTOMER_POS[popup.posIndex].top - 10;
                return (
                  <div
                    key={popup.id}
                    style={{
                      position: "absolute",
                      left: cx,
                      top: cy,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      pointerEvents: "none",
                      zIndex: 50,
                      animation: "coinFloat 1.2s ease-out forwards",
                    }}
                  >
                    <img
                      src={imgCoinReward}
                      alt=""
                      style={{ width: isFail ? 36 : 40, height: 39 }}
                    />
                    <span
                      style={{
                        fontFamily: "'PingFang SC', sans-serif",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: 24,
                        lineHeight: "34px",
                        color: isFail ? "#FFFFFF" : "#DDF000",
                        WebkitTextStroke: isFail ? "2px #F11B1B" : "2px #000000",
                        paintOrder: "stroke fill",
                      }}
                    >
                      {isFail ? popup.coins : `+${popup.coins}`}
                    </span>
                  </div>
                );
              })}

              {/* Feedback flash removed — using coin popups instead */}
                </>
              )}

              {/* ── Start screen — Figma HomePage (750×1680, 1:1 with canvas) ── */}
              {gamePhase === "start" && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 150,
                    animation: "fadeIn 0.4s ease",
                  }}
                >
                  {/* ButtonStart — Figma: centered, top=931, w=500, h=260 */}
                  <div
                    onClick={() => {
                      setChoosingSign(null);
                      setGamePhase("sign_select");
                    }}
                    style={{
                      position: "absolute",
                      left: (750 - 500) / 2,
                      top: 931,
                      width: 500,
                      height: 260,
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                  >
                    {/* Button background image — Figma inset: top=12.65%, right=1.53%, bottom=-1.81%, left=1.6% */}
                    <div
                      style={{
                        position: "absolute",
                        top: "12.65%",
                        right: "1.53%",
                        bottom: "-1.81%",
                        left: "1.6%",
                      }}
                    >
                      <img
                        alt=""
                        src={imgButtonMake}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "calc(50% - 38px)",
                        transform: "translateX(-50%)",
                        fontFamily:
                          "'Plus Jakarta Sans', 'PingFang SC', sans-serif",
                        fontWeight: 600,
                        fontSize: 56,
                        color: "#000",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        textTransform: "uppercase",
                      }}
                    >
                      开始营业
                    </span>
                  </div>

                  {/* ButtonSupport — Figma: left=175, top=1231, w=400, h=80 */}
                  <div
                    style={{
                      position: "absolute",
                      left: 175,
                      top: 1231,
                      width: 400,
                      height: 80,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      alt="去巅峰榜版支持aespa"
                      src={imgButtonSupport}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 400,
                        height: 80,
                        objectFit: "contain",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ── Sign select modal — Figma HomePage-1 layout ── */}
              {/* Sits on top of the homepage: bg image → 80% overlay → card */}
              {gamePhase === "sign_select" && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 150,
                  }}
                >
                  {/* Frame card */}
                  <div
                    style={{
                      position: "absolute",
                      left: 54,
                      top: 130,
                      width: 645,
                      height: 1235,
                      overflow: "hidden",
                    }}
                  >
                    {/* Store background image — Figma: left=-3, top=3, w=648, h=1104 */}
                    <img
                      alt=""
                      src={imgSignSelectBg}
                      style={{
                        position: "absolute",
                        left: -3,
                        top: 3,
                        width: 648,
                        height: 1104,
                        objectFit: "cover",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Selected sign preview — empty until the user picks a sign */}
                    {choosingSign && (
                      <div
                        style={{
                          position: "absolute",
                          left: 105,
                          top: 63,
                          width: 180,
                          height: 180,
                          overflow: "hidden",
                          pointerEvents: "none",
                        }}
                      >
                        <img
                          key={choosingSign}
                          alt={choosingSign}
                          src={SIGN_SMALL_IMGS[choosingSign]}
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            animation: "none",
                          }}
                        />
                      </div>
                    )}

                    {/* Sign choice cards — Figma positions 1:1 within the 645px frame */}
                    {[
                      {
                        type: "karina" as SignType,
                        fx: 61,
                        fy: 499,
                        fw: 250,
                        fh: 168,
                      },
                      {
                        type: "winter" as SignType,
                        fx: 331,
                        fy: 499,
                        fw: 250,
                        fh: 168,
                      },
                      {
                        type: "giselle" as SignType,
                        fx: 61,
                        fy: 687,
                        fw: 250,
                        fh: 168,
                      },
                      {
                        type: "ningning" as SignType,
                        fx: 331,
                        fy: 687,
                        fw: 250,
                        fh: 168,
                      },
                      {
                        type: "aespa" as SignType,
                        fx: 61,
                        fy: 875,
                        fw: 520,
                        fh: 168,
                      },
                    ].map(({ type, fx, fy, fw, fh }) => {
                      const isSel = choosingSign === type;
                      return (
                        <div
                          key={type}
                          onClick={() => setChoosingSign(type)}
                          style={{
                            position: "absolute",
                            left: fx,
                            top: fy,
                            width: fw,
                            height: fh,
                            cursor: "pointer",
                            borderRadius: 12,
                            overflow: "hidden",
                            outline: isSel
                              ? "3px solid #DEF000"
                              : "3px solid transparent",
                            boxShadow: isSel
                              ? "0 0 16px rgba(222,240,0,0.7)"
                              : "none",
                            transform: isSel
                              ? "scale(1.04)"
                              : "scale(1)",
                            transition:
                              "outline 0.12s, box-shadow 0.12s, transform 0.12s",
                          }}
                        >
                          <img
                            alt={type}
                            src={SIGN_CHOICE_IMGS[type]}
                            style={{
                              position: "absolute",
                              inset: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              pointerEvents: "none",
                            }}
                          />
                        </div>
                      );
                    })}

                    {/* Confirm button background — MaskGroup: left=121, top=1155, w=400, h=80 */}
                    <div
                      style={{
                        position: "absolute",
                        left: 121,
                        top: 1155,
                        width: 400,
                        height: 80,
                        WebkitMaskImage: `url("${SIGN_CONFIRM_MASK}")`,
                        maskImage: `url("${SIGN_CONFIRM_MASK}")`,
                        WebkitMaskSize: "100% 100%",
                        maskSize: "100% 100%",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        overflow: "hidden",
                        pointerEvents: "none",
                        opacity: choosingSign ? 1 : 0.45,
                      }}
                    >
                      <img
                        alt=""
                        src={imgSignSlimeDrip}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "bottom",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                    {/* "确认选择" text — Figma: top=calc(50%+558.5px) in 1235px frame = 1176px */}
                    <span
                      style={{
                        position: "absolute",
                        left: "calc(50% - 1.5px)",
                        top: 1176,
                        transform: "translateX(-50%)",
                        fontFamily: "'PingFang SC', sans-serif",
                        fontWeight: 600,
                        fontSize: 28,
                        color: "#040404",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        opacity: choosingSign ? 1 : 0.45,
                      }}
                    >
                      确认选择
                    </span>
                    {/* Clickable hit area for confirm button */}
                    <div
                      onClick={() => {
                        if (choosingSign) startGame(choosingSign);
                      }}
                      style={{
                        position: "absolute",
                        left: 121,
                        top: 1155,
                        width: 400,
                        height: 80,
                        cursor: choosingSign ? "pointer" : "default",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* ── Game over ── */}
              {gamePhase === "over" && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 200,
                    animation: "fadeIn 0.4s ease",
                  }}
                >
                  {/* finallist frame — coordinates match the 648px Figma result artboard */}
                  <div
                    style={{
                      position: "absolute",
                      width: 648,
                      height: 1235,
                      left: "calc(50% - 324px)",
                      top: 0,
                    }}
                  >
                    {/* resultbg — 648 x 1104, left: 0, top: 10 */}
                    <img
                      src={imgResultBg}
                      alt=""
                      style={{
                        position: "absolute",
                        width: 648,
                        height: 1104,
                        left: 0,
                        top: 10,
                        objectFit: "cover",
                        pointerEvents: "none",
                      }}
                    />

                    {/* "你为 XX 的工坊共收获" — top: 342 */}
                    <p style={{ position: "absolute", width: 411, left: 118, top: 342, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", textAlign: "center", color: "#FFFFFF", margin: 0 }}>
                      你为 {SIGN_LABELS[selectedSign]} 的工坊共收获
                    </p>

                    {/* TOTAL — top: 423 */}
                    <p style={{ position: "absolute", width: 92, left: "calc(50% - 92px/2 + 1px)", top: 423, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404", margin: 0 }}>
                      TOTAL
                    </p>

                    {/* Big number — top: 453 */}
                    <p style={{ position: "absolute", width: 361, left: "calc(50% - 361px/2 + 0.5px)", top: 453, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 90, lineHeight: "126px", textAlign: "center", color: "#040404", margin: 0 }}>
                      {coins}
                    </p>

                    {/* Coin icon — left: 255, top: 569 */}
                    <img src={imgCoinReward} alt="" style={{ position: "absolute", width: 50, height: 50, left: 255, top: 569 }} />
                    {/* 柠檬币 — left: 310, top: 574 */}
                    <span style={{ position: "absolute", left: 310, top: 574, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404" }}>
                      柠檬币
                    </span>

                    {/* Vector 214 — divider top, top: 651 */}
                    <div style={{ position: "absolute", width: 580, left: "calc(50% - 290px)", top: 651, borderTop: "4px solid #000000" }} />

                    {/* Row 1: 顾客 customer — top: 680 */}
                    <span style={{ position: "absolute", left: 65, top: 680, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404" }}>顾客</span>
                    <span style={{ position: "absolute", left: 134, top: 684, fontFamily: "'Pixelify Sans', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "34px", textTransform: "uppercase" as const, color: "#040404", opacity: 0.5 }}>customer</span>
                    <img src={imgCustomerSmall} alt="" style={{ position: "absolute", width: 50, height: 50, left: 431, top: 674 }} />
                    <span style={{ position: "absolute", left: 498, top: 680, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404" }}>x {customersServed}</span>

                    {/* Row 2: 出品数 Number — top: 744 */}
                    <span style={{ position: "absolute", left: 65, top: 746, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404" }}>出品数</span>
                    <span style={{ position: "absolute", left: 158, top: 750, fontFamily: "'Pixelify Sans', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "34px", textTransform: "uppercase" as const, color: "#040404", opacity: 0.5 }}>Number</span>
                    <img src={imgFoodSmall} alt="" style={{ position: "absolute", width: 50, height: 50, left: 431, top: 744 }} />
                    <span style={{ position: "absolute", left: 498, top: 749, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404" }}>x {servedTotal}</span>

                    {/* Row 3: 最高连击 Highest Combo — top: 814 */}
                    <span style={{ position: "absolute", left: 65, top: 819, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404" }}>最高连击</span>
                    <span style={{ position: "absolute", left: 186, top: 822, fontFamily: "'Pixelify Sans', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "34px", textTransform: "uppercase" as const, color: "#040404", opacity: 0.5 }}>Highest Combo</span>
                    <img src={imgLemonSmall} alt="" style={{ position: "absolute", width: 50, height: 50, left: 429, top: 814 }} />
                    <span style={{ position: "absolute", left: 499, top: 819, fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 28, lineHeight: "39px", color: "#040404" }}>x {maxCombo}</span>

                    {/* Vector 215 — divider bottom, top: 889 */}
                    <div style={{ position: "absolute", width: 580, left: "calc(50% - 290px)", top: 889, borderTop: "4px solid #000000" }} />

                    {/* 再来一次 button — top: 925 */}
                    <div
                      onClick={handleRestart}
                      style={{ position: "absolute", width: 266, height: 68, left: "calc(50% - 133px)", top: 925, background: "#000000", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    >
                      <span style={{ fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 29.8, lineHeight: "42px", textAlign: "center", color: "#FFFFFF" }}>再来一次</span>
                    </div>

                    {/* barcode — top: 1026 */}
                    <img src={imgBarcode} alt="" style={{ position: "absolute", width: 415, height: 38, left: "calc(50% - 415px/2 + 0.5px)", top: 1026 }} />

                    {/* button_support — left: 132, top: 1156 */}
                    <div
                      style={{ position: "absolute", width: 400, height: 80, left: 132, top: 1156, cursor: "pointer" }}
                    >
                      <img src={imgButtonSupport} alt="去巅峰榜版支持aespa" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* end canvas */}
        </div>
        {gamePhase === "playing" && (
          <>
            <div
              onClick={handleRestart}
              style={{
                position: "absolute",
                left: 0,
                top: 1339 * layout.scale,
                width: 189 * layout.scale,
                height: 90 * layout.scale,
                zIndex: 20,
                cursor: "pointer",
              }}
            >
              <img
                alt="重新开始"
                src={imgButtonRestart}
                style={ASSET_IMG}
              />
            </div>
            <div
              onClick={() => {
                if (!inputsLocked) setSelected(new Set());
              }}
              style={{
                position: "absolute",
                right: 0,
                top: 1339 * layout.scale,
                width: 189 * layout.scale,
                height: 90 * layout.scale,
                zIndex: 20,
                cursor: inputsLocked ? "default" : "pointer",
              }}
            >
              <img
                alt="清空选项"
                src={imgButtonClear}
                style={ASSET_IMG}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
