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

    static createFromSnapshot(orderCategories: IOrderCategory[]): OrderCategory[] {
        return orderCategories.map((category) => {
            return new OrderCategory(category.name, category.orderItems);
        });
    }
}
