export interface IOrder {
    $key?: string;
    name: string;
    base: Base;
    protein: Protein;
    topping: Topping;
    sauce: Sauce;
}

export class Order implements IOrder {
    name: string;
    base: Base;
    protein: Protein;
    topping: Topping;
    sauce: Sauce;

    constructor(name: string, base: Base, protein: Protein, topping: Topping, sauce: Sauce) {
        this.name = name;
        this.base = base;
        this.protein = protein;
        this.topping = topping;
        this.sauce = sauce;
    }

    static default(): Order {
        return new Order('', new Base(), new Protein(), new Topping(), new Sauce());
    }
}

class Base {
    whiteRice: OrderItem = new OrderItem(true);
    brownRice: OrderItem = new OrderItem();
    purpleRice: OrderItem = new OrderItem();
    lettuce: OrderItem = new OrderItem();
}

class Protein {
    chicken: OrderItem = new OrderItem();
    beef: OrderItem = new OrderItem();
    spicyPork: OrderItem = new OrderItem(true);
    shrimp: OrderItem = new OrderItem();
    tofu: OrderItem = new OrderItem();
    mushroom: OrderItem = new OrderItem();
}

class Topping {
    eggs: OrderItem = new OrderItem(true);
    carrot: OrderItem = new OrderItem(true);
    cucumber: OrderItem = new OrderItem(true);
    radish: OrderItem = new OrderItem(true);
    beanSprout: OrderItem = new OrderItem(true);
    cabbage: OrderItem = new OrderItem(true);
    beets: OrderItem = new OrderItem(true);
}

class Sauce {
    koreanHot: OrderItem = new OrderItem();
    bibille: OrderItem = new OrderItem();
    teriyaki: OrderItem = new OrderItem();
    yogurtWasabi: OrderItem = new OrderItem();
    sesameSeeds: OrderItem = new OrderItem();
    sesameOil: OrderItem = new OrderItem();
}

export class OrderItem {
    selected: boolean;
    options = {
        amount: 'regular',
        detail: ''
    };

    constructor(selected: boolean = false) {
        this.selected = selected;
    }
}
