import {Menu, SetMenu} from "@/classes/base";

// http://m.lotteria.com/menu/goodsCategoryList.do?C2=&C3=&roll=dessert


// Burger
export const bulgogiBurger = new Menu(1, '불고기 버기', '맛있는 불고기버거에요', 4500);
export const cheeseBurger = new Menu(2, '치즈 버거', '', 4500);
export const hanwooBurger = new Menu(3, '한우불고기 버거', '', 5500);
export const chickenBurger = new Menu(4, '치킨 버거', '', 5000);
export const folderBurger = new Menu(5, '폴더 버거', '', 5200);
export const shrimpBurger = new Menu(6, '새우 버거', '', 5000);
export const miracleBurger = new Menu(7, '미라클 버거', '', 5200);
export const doubleX2Burger = new Menu(8, 'Double X2 버거', '', 5500);

// export const Burger = new Menu(6, '', '');
// Desert
export const frenchFries = new Menu(1000, '감자튀김', '', 1200);
export const cornCheese = new Menu(1001, '콘치즈', '', 1200);
export const squidRing = new Menu(1002, '오징어링', '', 1500);
export const seasonedPotato = new Menu (1003, '양념 감자', '', 1800);

// Beverage
export const cocaCola = new Menu(10000, '코카콜라', '', 1000);
export const sprite = new Menu(10001, '스프라이트', '', 1000);
export const zeroCola = new Menu(10002, '제로 콜라', '', 1200);
export const fanta = new Menu(10003, '환타', '', 1200);
export const zeroFanta = new Menu(10004, '제로 환타', '', 1400);

// Sets
export const bulgogiSet = new SetMenu(100, '불고기 버거 세트', '달콤 짭짜름한 소스를 이용한 불고기버거', 7000, [
    bulgogiBurger,
    frenchFries,
    cocaCola,
]);
export const cheeseSet = new SetMenu(101, '치즈 버거 세트', '달콤 짭짜름한 소스를 이용한 불고기버거',7000, [
    cheeseBurger,
    frenchFries,
    cocaCola,
]);
export const hanwooSet = new SetMenu(102, '한우 버거 세트', '달콤 짭짜름한 소스를 이용한 불고기버거', 9200, [
    hanwooBurger,
    frenchFries,
    cocaCola,
]);
export const chickenSet = new SetMenu(103, '치킨 버거 세트', '달콤 짭짜름한 소스를 이용한 불고기버거', 8500, [
    chickenBurger,
    frenchFries,
    cocaCola,
]);
export const folderSet = new SetMenu(104, '폴더 버거 세트', '달콤 짭짜름한 소스를 이용한 불고기버거', 8000, [
    folderBurger,
    frenchFries,
    cocaCola,
]);
export const shrimpSet = new SetMenu(105, '새우 버거 세트', '달콤 짭짜름한 소스를 이용한 불고기버거', 8000, [
    shrimpBurger,
    frenchFries,
    cocaCola,
]);

export const menu = {
    세트: [
        bulgogiSet,
        cheeseSet,
        hanwooSet,
        chickenSet,
        folderSet,
        shrimpSet,
    ],
    버거: [
        bulgogiBurger,
        cheeseBurger,
        hanwooBurger,
        chickenBurger,
        folderBurger,
        shrimpBurger,
        miracleBurger,
        doubleX2Burger,
    ],
    사이드: [
        frenchFries,
        cornCheese,
        squidRing,
        seasonedPotato,
    ],
    '음료/디저트': [
        cocaCola,
        sprite,
        zeroCola,
        fanta,
        zeroFanta,
    ],
}