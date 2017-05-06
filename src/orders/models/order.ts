export interface IOrder {
    $key?: string;
    name: string;
    comments: string;
    base: Base;
    protein: Protein;
    topping: Topping;
    sauce: Sauce;
}

export class Order implements IOrder {
    name: string = '';
    comments: string = '';
    base: Base = new Base();
    protein: Protein = new Protein();
    topping: Topping = new Topping();
    sauce: Sauce = new Sauce();
}

class Base {
    whiteRice: OrderItem = new OrderItem();
    brownRice: OrderItem = new OrderItem();
    purpleRice: OrderItem = new OrderItem();
    lettuce: OrderItem = new OrderItem();
}

class Protein {
    chicken: OrderItem = new OrderItem();
    beef: OrderItem = new OrderItem();
    spicyPork: OrderItem = new OrderItem();
    shrimp: OrderItem = new OrderItem();
    tofu: OrderItem = new OrderItem();
    mushroom: OrderItem = new OrderItem();
}

class Topping {
    eggs: OrderItem = new OrderItem();
    carrot: OrderItem = new OrderItem();
    cucumber: OrderItem = new OrderItem();
    radish: OrderItem = new OrderItem();
    beanSprout: OrderItem = new OrderItem();
    cabbage: OrderItem = new OrderItem();
    beets: OrderItem = new OrderItem();
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
    amount: '';
    detail: '';

    constructor(selected: boolean = false) {
        this.selected = selected;
    }
}
