import {defineStore} from 'pinia';

export const useOrderStore = defineStore('order', {
    state: () => ({
        place: undefined,
        menu: [],
        chosenItem: '',
        side: '감자튀김',
        beverage: '콜라',
    }),
    actions: {
        setPlace(place) {
            this.place = place;
        },
        setMenu(item) {
            this.menu.push(item);
        },
        setChosenItem(item){
            this.chosenItem = item;
        },
        setSide(item){
            this.side = item;
        },
        setBeverage(item){
            this.beverage = item;
        }
    }
});
