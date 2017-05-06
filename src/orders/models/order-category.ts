import {OrderItem} from './order-item';

export interface IOrderCategory {
    name: string;
    orderItems: Array<OrderItem>;
}

export class OrderCategory implements IOrderCategory {
    name: string;
    orderItems: Array<OrderItem>;

    constructor(name: string, orderItems: Array<OrderItem>) {
        this.name = name;
        this.orderItems = orderItems;
    }

    display(): string {
        const itemStrings = [];
        this.orderItems.forEach((item) => {
            if (item.selected) {
                let display = item.label;
                if (item.amount || item.detail) {
                    display += item.amount ? ` (${item.amount}` : ' (';
                    display += item.detail ? ` ${item.detail})` : ')';
                }
                itemStrings.push(display);
            }
        });
        return itemStrings.join(', ');
    }

    static createFromSnapshot(orderCategories: IOrderCategory[]): OrderCategory[] {
        return orderCategories.map((category) => {
            return new OrderCategory(category.name, category.orderItems);
        });
    }
}
