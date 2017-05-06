export interface IOrder {
    $key?: string;
    name: string;
    base: Base;
}

export class Order implements IOrder {
    name: string;
    base: Base;

    constructor(name: string, base: Base) {
        this.name = name;
        this.base = base;
    }

    static default(): Order {
        return new Order('Me', Base.default());
    }
}

class Base {
    whiteRice: boolean;
    brownRice: boolean;
    purpleRice: boolean;
    lettuce: boolean;

    constructor(whiteRice: boolean, brownRice: boolean, purpleRice: boolean, lettuce: boolean) {
        this.whiteRice = whiteRice;
        this.brownRice = brownRice;
        this.purpleRice = purpleRice;
        this.lettuce = lettuce;
    }

    static default(): Base {
        return new Base(true, false, false, false);
    }
}
