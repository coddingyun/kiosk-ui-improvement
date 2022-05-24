import {Menu, SetMenu} from "@/classes/base";

// http://m.lotteria.com/menu/goodsCategoryList.do?C2=&C3=&roll=dessert


// Burger
export const bulgogiBurger = new Menu(1, '불고기 버거', '두툼한 쇠고기패티와 한국적인 맛의 소스가 \n 잘 조화된 롯데리아 대표 버거', 4100);
export const cheeseBurger = new Menu(2, '한우불고기버거', '국내산 한우를 사용한 패티, 신선한 야채,\n 특제 소스로 완성한 프리미엄 버거', 7500);
export const hanwooBurger = new Menu(3, '사각새우더블버거', '미니새우패티 2장의 새우 매니아를 위한 버거', 4800);
export const chickenBurger = new Menu(4, '원조 빅불', '불고기패티 2장으로 더 진하고 더 커진 빅 불고기버거', 6200);
export const folderBurger = new Menu(5, '폴더 버거 비프', '모짜렐라 자연 치즈와 소불고기가 토핑된 접어먹는 버거', 6100);
export const shrimpBurger = new Menu(6, '새우 버거', '새우살을 가득넣어 더 맛있어진 오리지널 새우버거', 4100);
export const miracleBurger = new Menu(7, '리아미라클 버거', '100% 식물성패티\n 고기 없이 고기 맛이 나는기적', 6000);
export const doubleX2Burger = new Menu(8, 'Double X2 버거', '비프패티2장, 치즈2장으로 깊고 풍부한맛의 정통 아메리칸버거', 6000);

// export const Burger = new Menu(6, '', '');
// Desert
export const frenchFries = new Menu(1000, '감자튀김', '바로 튀겨낸 바삭바삭한 감자튀김', 1200);
export const cheeseBall = new Menu(1001, '모짜크림 치즈볼', '달콤하고 고소한 모짜크림치즈가 가득한 치즈볼', 1500);
export const cheeseStick = new Menu(1002, '치즈스틱', '통모짜렐라치즈에 튀김옷을 입혀 만든\n 바삭하고 고소한 롯데리아 대표 디저트 메뉴', 1700);
export const seasonedPotato = new Menu (1003, '양념 감자', '시즈닝(오니언, 치즈, 칠리)을 한가지를 선택해 뿌려먹는 포테이토', 1700);

//side-Desert
export const frenchFries_s = new Menu(1000, '감자튀김', '바로 튀겨낸 바삭바삭한 감자튀김', 0);
export const cheeseBall_s = new Menu(1001, '모짜크림 치즈볼', '달콤하고 고소한 모짜크림치즈가 가득한 치즈볼', 300);
export const cheeseStick_s = new Menu(1002, '치즈스틱', '통모짜렐라치즈에 튀김옷을 입혀 만든\n 바삭하고 고소한 롯데리아 대표 디저트 메뉴', 500);
export const seasonedPotato_s = new Menu (1003, '양념 감자', '시즈닝(오니언, 치즈, 칠리)을 한가지를 선택해 뿌려먹는 포테이토', 500);

// Beverage
export const cocaCola = new Menu(10000, '콜라', '톡 쏘는 시원 상쾌한 펩시콜라', 900);
export const sprite = new Menu(10001, '사이다', '톡 쏘는 시원 청량한 칠성사이다', 900);
export const zeroCola = new Menu(10002, '제로 콜라', '칼로리 걱정 없는 시원 상쾌한 제로 슈거 콜라', 900);
export const americano = new Menu(10003, '아메리카노', '공정무역 커피 원두를 사용한 ICE아메리카노', 900);
//export const zeroamericano = new Menu(10004, '제로 환타', '', 6200);

// Beverage
export const cocaCola_s = new Menu(10000, '콜라', '톡 쏘는 시원 상쾌한 펩시콜라', 0);
export const sprite_s = new Menu(10001, '사이다', '톡 쏘는 시원 청량한 칠성사이다', 0);
export const zeroCola_s = new Menu(10002, '제로 콜라', '칼로리 걱정 없는 시원 상쾌한 제로 슈거 콜라', 0);
export const americano_s = new Menu(10003, '아메리카노', '공정무역 커피 원두를 사용한 ICE아메리카노', 300);
//export const zeroamericano_s = new Menu(10004, '제로 환타', '', 0);

// Sets
export const bulgogiSet = new SetMenu(100, '불고기 버거 세트', '두툼한 쇠고기패티와 한국적인 맛의 소스가 \n 잘 조화된 롯데리아 대표 버거',6200, [
    bulgogiBurger,
    frenchFries,
    cocaCola,
]);
export const cheeseSet = new SetMenu(101, '한우불고기버거 세트', '국내산 한우를 사용한 패티, 신선한 야채,\n 특제 소스로 완성한 프리미엄 버거',9200, [
    cheeseBurger,
    frenchFries,
    cocaCola,
]);
export const hanwooSet = new SetMenu(102, '사각새우더블버거 세트', '미니새우패티 2장의 새우 매니아를 위한 버거',6800, [
    hanwooBurger,
    frenchFries,
    cocaCola,
]);
export const chickenSet = new SetMenu(103, '원조 빅불 세트', '불고기패티 2장으로 더 진하고 더 커진 빅 불고기버거',8000, [
    chickenBurger,
    frenchFries,
    cocaCola,
]);
export const folderSet = new SetMenu(104, '폴더 버거 비프 세트', '모짜렐라 자연 치즈와 소불고기가 토핑된 접어먹는 버거',7900, [
    folderBurger,
    frenchFries,
    cocaCola,
]);
export const shrimpSet = new SetMenu(105, '새우 버거 세트', '새우살을 가득넣어 더 맛있어진 오리지널 새우버거',6200, [
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
        cheeseBall,
        cheeseStick,
        seasonedPotato,
    ],
    '음료/디저트': [
        cocaCola,
        sprite,
        zeroCola,
        americano,
        //zeroamericano,
    ],
    side: [
        frenchFries_s,
        cheeseBall_s,
        cheeseStick_s,
        seasonedPotato_s,
    ],
    beverage: [
        cocaCola_s,
        sprite_s,
        zeroCola_s,
        americano_s,
        //zeroamericano_s,
    ],
}