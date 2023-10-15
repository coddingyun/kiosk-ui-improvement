export class Menu {
    constructor(id, name, description, price, amount) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.amount = amount;
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

export class SetMenu extends Menu {
    constructor(id, name, description, price, amount, sideprice, cokeprice, menus) {
        super(id, name, description, price, amount);
        this.menus = menus;
        this.sideprice = sideprice;
        this.cokeprice = cokeprice;
    }
}
