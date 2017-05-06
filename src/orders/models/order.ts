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

    display(): string {
        const displays = this.orderCategories.map((category) => {
            let display = `${category.name}: `;
            return display += category.display();
        });
        return displays.join(', ');
    }

    constructor(name: string = '', comments: string = '', orderCategories: OrderCategory[] = []) {
        this.name = name;
        this.comments = comments;
        this.orderCategories = orderCategories;
    }

    static createFromSnapshot(snapshot: IOrder): Order {
        return new Order(snapshot.name, snapshot.comments, OrderCategory.createFromSnapshot(snapshot.orderCategories));
    }

    static createBibimbap(): Order {
        return new Order(undefined, undefined, [
            new OrderCategory('Base 1', [
                new OrderItem('White Rice', 'whiteRice'),
                new OrderItem('Brown Rice', 'brownRice'),
                new OrderItem('Purple Rice', 'purpleRice'),
                new OrderItem('Lettuce', 'lettuce')
            ]),
            new OrderCategory('Base 2', [
                new OrderItem('Chicken', 'chicken'),
                new OrderItem('Beef', 'beef'),
                new OrderItem('Spicy Pork', 'spicyPork'),
                new OrderItem('Tofu', 'tofu'),
                new OrderItem('Mushroom', 'mushroom')
            ]),
            new OrderCategory('Toppings', [
                new OrderItem('Eggs', 'eggs'),
                new OrderItem('Carrots', 'carrots'),
                new OrderItem('Cucumbers', 'cucumbers'),
                new OrderItem('Radish', 'radish'),
                new OrderItem('Bean Sprouts', 'beanSprouts'),
                new OrderItem('Cabbage', 'cabbage'),
                new OrderItem('Beets', 'beets')
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
