import type { OrderType, SignType } from "./types";

export const SVG_ARROW =
  "M10 5L18.8215 13.8215C19.4724 14.4724 19.4724 15.5276 18.8215 16.1785L10 25";

// Bell icon path — viewBox 0 0 32 30.4 (from Frame2147203904/svg-544pav50hz.ts)
export const SVG_BELL =
  "M1.992 22.1584H30.008C30.5536 22.1584 31.0216 21.9384 31.4144 21.5072C31.8032 21.0712 31.9984 20.5448 32 19.928C32.0008 19.3136 31.8032 18.7872 31.4144 18.3504C31.0192 17.92 30.552 17.6992 30.008 17.6992H29.8296C29.4528 14.7056 28.3608 12.0552 26.5592 9.7576C24.76 7.4584 22.5544 5.8888 19.948 5.0472V5.008C19.9936 4.744 20.016 4.5472 20.016 4.4176C20.016 3.1808 19.628 2.136 18.8448 1.2824C18.0632 0.4296 17.1152 0.0008 16.0008 0C14.8848 0 13.9448 0.4272 13.1752 1.2824C12.404 2.1368 12.0208 3.1824 12.02 4.4176C12.02 4.5472 12.0312 4.7576 12.0544 5.048C9.4448 5.8896 7.2416 7.46 5.4408 9.7584C3.6384 12.056 2.5488 14.7064 2.168 17.7H1.992C1.7312 17.7 1.476 17.7608 1.2264 17.8808C0.983573 17.9937 0.765716 18.1539 0.5856 18.352C0.402118 18.5611 0.258178 18.8018 0.1608 19.0624C0.0544 19.3416 0.0008 19.6376 0 19.9512C0 20.5544 0.1952 21.0728 0.5856 21.5072C0.9776 21.9368 1.4456 22.1584 1.992 22.1584ZM16 2.2104C16.5456 2.2104 17.0136 2.4272 17.4032 2.8624C17.7952 3.2952 17.9904 3.8144 17.992 4.4176V4.536L17.9544 4.576C17.3081 4.47216 16.6546 4.4192 16 4.4176C15.3449 4.41911 14.6908 4.47208 14.044 4.576L14.008 4.536V4.4176C14.008 3.8136 14.2048 3.2944 14.5968 2.8624C14.9872 2.4272 15.456 2.2112 16 2.2104ZM7.5728 14.0768C8.19723 12.939 9.02254 11.9237 10.0088 11.08C10.9673 10.2526 12.088 9.63465 13.2992 9.2656C13.3431 9.24115 13.3922 9.22745 13.4424 9.2256C13.4983 9.20347 13.5575 9.19076 13.6176 9.188C13.9024 9.188 14.148 9.3 14.3488 9.5232C14.5504 9.7464 14.6504 10.0176 14.6504 10.3312C14.6504 10.516 14.616 10.6856 14.5432 10.8424C14.4758 10.9964 14.3727 11.1321 14.2424 11.2384C14.1247 11.3377 13.9838 11.4057 13.8328 11.436C13.2014 11.641 12.5986 11.9257 12.0392 12.2832C10.9139 13.0016 9.98011 13.9828 9.3184 15.1424C9.2704 15.2712 9.1976 15.3928 9.1016 15.4944C9.01383 15.5955 8.90557 15.6768 8.784 15.7328C8.66089 15.7876 8.52756 15.8157 8.3928 15.8152C8.108 15.8152 7.8712 15.708 7.68 15.496C7.4928 15.288 7.3976 15.024 7.3976 14.7104C7.3976 14.4728 7.456 14.2624 7.5728 14.08V14.0768ZM30.0096 25.9416H1.992C1.4448 25.9416 0.9776 26.1608 0.5872 26.592C0.1968 27.028 0.0024 27.5544 0.0016 28.1728C0 28.7896 0.1952 29.312 0.5872 29.7496C0.9792 30.1808 1.4464 30.4 1.992 30.4H30.0088C30.5528 30.4 31.0208 30.1808 31.4136 29.7496C31.8024 29.312 31.9976 28.7904 31.9992 28.1728C32 27.5552 31.8024 27.028 31.4136 26.592C31.0184 26.1608 30.5512 25.9416 30.0096 25.9416Z";

export const SIGN_CONFIRM_MASK =
  "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20400%2080%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20id%3D%22%26%23231%3B%26%23159%3B%26%23169%3B%26%23229%3B%26%23189%3B%26%23162%3B%22%20width%3D%22400%22%20height%3D%2280%22%20rx%3D%2240%22%20fill%3D%22var(--fill-0%2C%20%23DFEF01)%22%20style%3D%22fill%3A%23DFEF01%3Bfill%3Acolor(display-p3%200.8745%200.9373%200.0039)%3Bfill-opacity%3A1%3B%22%2F%3E%0A%3C%2Fsvg%3E%0A";

export { default as imgBgMain } from "../imports/bg_main.webp";
export { default as imgCounterFrontPng } from "../imports/counter_front.webp";
export { default as imgButtonRestart } from "../imports/Frame2147203725/524389c260fb47c1ee213c019f2376033f702fd7.webp";
export { default as imgButtonMake } from "../imports/ButtonMake/dcab72e2e2469bb61f3d470728b94b6393aab6bf.webp";
export { default as imgButtonClear } from "../imports/Frame2147203725/b3dee6bcfc977b9edbc56872e81e23ac5d5ee303.webp";
export { default as imgCoinIcon } from "../imports/Frame2147203725/ceeaab9b8b9b5c4eb29ef6cb3312e588935f26b3.webp";
export { default as imgTimerIcon } from "../imports/Frame2147203725/6231e3681918c9c670981d2bc53b0866b7a80263.webp";
export { default as imgMusicIcon } from "../imports/Frame2147203725/7cc5115b5e3481422324172f9fb1f85048f64a18.webp";
export { default as imgSignGiselle } from "../imports/Frame2147203725/5fec252c2f1037dbf780a2365cfc7a4d12500051.webp";
export { default as imgHomeBg } from "../imports/HomePage.webp";
export { default as imgCoinReward } from "../imports/Coin.webp";
export { default as imgResultBg } from "../imports/resultbg.webp";
export { default as imgButtonSupport } from "../imports/button_support.webp";
export { default as imgCustomerSmall } from "../imports/customersmall.webp";
export { default as imgFoodSmall } from "../imports/foodsmall.webp";
export { default as imgLemonSmall } from "../imports/lemonsmall.webp";
export { default as imgBarcode } from "../imports/barcode.webp";
export { default as imgEmotionHappy } from "../imports/emotion_happy.webp";
export { default as imgEmotionNormal } from "../imports/emotion_normal.webp";
export { default as imgEmotionAngry } from "../imports/emotion_angry.webp";
export { default as imgCombos } from "../imports/Combos.webp";
export { default as imgSignSelectBg } from "../imports/Frame2147203905/4ff21df11c5b1fbdc84b3fc89b96e9d1d5457472.webp";
export { default as imgSignSlimeDrip } from "../imports/Frame2147203905/9d605782a4bfa8c81a18e3902c84856e586b1942.webp";

import imgOrderBubbleWater from "../imports/order_bubble_water.webp";
import imgOrderBubbleCake from "../imports/order_bubble_cake.webp";
import imgOrderBubbleTea from "../imports/order_bubble_tea.webp";
import imgDishLemonTea from "../imports/Frame2147203725/764c5ed62c464a244f1dc8169a759b4a2140e7c3.webp";
import imgDishLemonCake from "../imports/Frame2147203725/901b0c5ae98f968f9f3aed52dcc64cee99580533.webp";
import imgDishLemonWater from "../imports/Frame2147203725/9f392054e17131be8e792810121a0f9f8348dac6.webp";
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
import imgSignKarina from "../imports/sign_KARINA.webp";
import imgSignWinter from "../imports/sign_WINTER.webp";
import imgSignNingning from "../imports/sign_NINGNING.webp";
import imgSignAespa from "../imports/sign_aespa.webp";
import imgSignKarinaSmall from "../imports/sign_KARINAsmall.webp";
import imgSignWinterSmall from "../imports/sign_WINTERsmall.webp";
import imgSignGiselleSmall from "../imports/sign_gisellesmall.webp";
import imgSignNingningSmall from "../imports/sign_NINGNINGsmall.webp";
import imgSignAespaSmall from "../imports/sign_aespasmall.webp";
import imgSignKarinAchoice from "../imports/Frame2147203905/dc583622675ec4d43d4af219faa6cf237d7e76e4.webp";
import imgSignWinterchoice from "../imports/Frame2147203905/da4313fea9eb7d44cfc55506f8082b7c9aa29643.webp";
import imgSignGisellechoice from "../imports/Frame2147203905/677ff8357c9c67dafce1db90333b8a3dfef0d3dc.webp";
import imgSignNingningchoice from "../imports/Frame2147203905/3ac01fdc32888558f493c7dffd95ae035a36d6cc.webp";
import imgSignAespachoice from "../imports/Frame2147203905/813c28df9c1bde2c6d8a68fd160e5e7e2ddd5338.webp";
import imgSignGiselle from "../imports/Frame2147203725/5fec252c2f1037dbf780a2365cfc7a4d12500051.webp";

export const ORDER_BUBBLES: Record<OrderType, string> = {
  lemon_water: imgOrderBubbleWater,
  lemon_tea: imgOrderBubbleTea,
  lemon_cake: imgOrderBubbleCake,
};

export const DISH_IMGS: Record<OrderType, string> = {
  lemon_water: imgDishLemonWater,
  lemon_tea: imgDishLemonTea,
  lemon_cake: imgDishLemonCake,
};

export const CUSTOMER_IMGS = [
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

export const SIGN_IMGS: Record<SignType, string> = {
  karina: imgSignKarina,
  winter: imgSignWinter,
  giselle: imgSignGiselle,
  ningning: imgSignNingning,
  aespa: imgSignAespa,
};

export const SIGN_SMALL_IMGS: Record<SignType, string> = {
  karina: imgSignKarinaSmall,
  winter: imgSignWinterSmall,
  giselle: imgSignGiselleSmall,
  ningning: imgSignNingningSmall,
  aespa: imgSignAespaSmall,
};

export const SIGN_CHOICE_IMGS: Record<SignType, string> = {
  karina: imgSignKarinAchoice,
  winter: imgSignWinterchoice,
  giselle: imgSignGisellechoice,
  ningning: imgSignNingningchoice,
  aespa: imgSignAespachoice,
};

export const SIGN_LABELS: Record<SignType, string> = {
  aespa: "aespa",
  winter: "WINTER",
  karina: "KARINA",
  ningning: "NINGNING",
  giselle: "GISELLE",
};

export { imgOrderBubbleWater, imgOrderBubbleCake, imgOrderBubbleTea };
