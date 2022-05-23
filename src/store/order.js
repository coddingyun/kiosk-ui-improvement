import {defineStore} from 'pinia';

export const useOrderStore = defineStore('order', {
    state: () => ({
        place: undefined,
        menu: '',
    }),
    actions: {
        setPlace(place) {
            this.place = place;
        },
        setMenu(item) {
            this.menu = item;
        }
    }
});
