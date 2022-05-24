export class Menu {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

export class SetMenu extends Menu {
    constructor(id, name, description, price, menus) {
        super(id, name, description, price);
        this.menus = menus;
    }
}
