import {OrderCategory} from './order-category';
import {OrderItem} from './order-item';

export interface IOrder {
    $key?: string;
    name: string;
    comments: string;
    orderCategories: OrderCategory[];
}

export class Order implements IOrder {
    name: string;
    comments: string;
    orderCategories: OrderCategory[];

    constructor(name: string = '', comments: string = '', orderCategories: OrderCategory[] = []) {
        this.name = name;
        this.comments = comments;
        this.orderCategories = orderCategories;
    }

    static createFromSnapshot(snapshot: IOrder): Order {
        return new Order(snapshot.name, snapshot.comments, OrderCategory.createFromSnapshot(snapshot.orderCategories));
    }

    static createUdon(): Order {
        return new Order(undefined, undefined, [
            new OrderCategory('Base 1', [
                new OrderItem('Udon', 'udon', true)
            ]),
            new OrderCategory('Protein', [
                new OrderItem('Chicken', 'chicken'),
                new OrderItem('Beef', 'beef'),
                new OrderItem('Spicy Pork', 'spicyPork'),
                new OrderItem('Tofu', 'tofu'),
                new OrderItem('Mushroom', 'mushroom')
            ]),
            new OrderCategory('Toppings', [
                new OrderItem('Eggs', 'eggs', true),
                new OrderItem('Carrots', 'carrots', true),
                new OrderItem('Crown Daisy', 'crownDaisy', true),
                new OrderItem('Enoki Mushroom', 'enokiMushroom', true),
                new OrderItem('Scallion', 'scallion', true)
            ])
        ]);
    }

    static createBibimbap(): Order {
        return new Order(undefined, undefined, [
            new OrderCategory('Base 1', [
                new OrderItem('White Rice', 'whiteRice'),
                new OrderItem('Brown Rice', 'brownRice'),
                new OrderItem('Purple Rice', 'purpleRice'),
                new OrderItem('Lettuce', 'lettuce')
            ]),
            new OrderCategory('Protein', [
                new OrderItem('Chicken', 'chicken'),
                new OrderItem('Beef', 'beef'),
                new OrderItem('Spicy Pork', 'spicyPork'),
                new OrderItem('Tofu', 'tofu'),
                new OrderItem('Mushroom', 'mushroom')
            ]),
            new OrderCategory('Toppings', [
                new OrderItem('Eggs', 'eggs', true),
                new OrderItem('Carrots', 'carrots', true),
                new OrderItem('Cucumbers', 'cucumbers', true),
                new OrderItem('Radish', 'radish', true),
                new OrderItem('Bean Sprouts', 'beanSprouts', true),
                new OrderItem('Cabbage', 'cabbage', true),
                new OrderItem('Beets', 'beets', true)
            ]),
            new OrderCategory('Sauce', [
                new OrderItem('Korean Hot Sauce', 'koreanHot'),
                new OrderItem('Bibille Sauce', 'bibille'),
                new OrderItem('Teriyaki', 'teriyaki'),
                new OrderItem('Yogurt Wasabi', 'yogurtWasabi'),
                new OrderItem('Sesame Oil', 'sesameOil'),
                new OrderItem('Sesame Seeds', 'sesameSeeds')
            ])
        ]);
    }
}
