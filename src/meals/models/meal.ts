import {Order} from '../../orders/models/order';

export interface IMeal {
    $key?: string;
    date: string;
    comments: string;
    mealOrders: Order[];
}

export class Meal {
    date: string;
    comments: string;
    mealOrders: Order[];

    constructor(date: string, comments: string = '', mealOrders: Order[] = []) {
        this.date = date;
        this.comments = comments;
        this.mealOrders = mealOrders;
    }

    static createFromSnapshot(snapshot: IMeal): Meal {
        return new Meal(snapshot.date, snapshot.comments, snapshot.mealOrders);
    }
}
