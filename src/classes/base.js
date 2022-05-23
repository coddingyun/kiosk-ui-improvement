export class Menu {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

export class SetMenu extends Menu {
    constructor(id, name, description, menus) {
        super(id, name, description);
        this.menus = menus;
    }
}
