import {Component, Input} from '@angular/core';
import {IOrder, Order} from '../../orders/models/order';
import {OrderItem} from '../../orders/models/order-item';
import {displayOrderItems} from '../../common/functions/display-order-item';
import {MealService} from '../services/meal_service';

@Component({
    selector: 'meal-order-list',
    styles: [
        require('./meal-order-list.scss')
    ],
    template: `
        <table class="table table-condensed table-hover">
            <thead>
            <th>Name</th>
            <th>Base 1</th>
            <th>Protein</th>
            <th>Toppings</th>
            <th>Sauce</th>
            </thead>
            <tbody>
            <tr *ngFor='let order of orders'>
                <td>
                    <div>{{order.name}} <span (click)="removeOrder(order)" class="glyphicon glyphicon-trash"></span></div>
                    <div>{{order.comments}}</div>
                </td>
                <td #inline inline-edit *ngFor="let category of order.orderCategories; let i = index;"
                    [readonly]="display(category.orderItems)">
                    <meal-order-category-edit [mealKey]="mealKey" [orderKey]="order.$key" [categoryIndex]="i" [category]="category"
                                         (editInProgress)="inline.toggleEditing($event)"></meal-order-category-edit>
                </td>
            </tr>
            </tbody>
        </table>
    `
})
export class MealOrderListComponent {
    @Input() mealKey: string;
    @Input('mealOrders')
    set mealOrders(value: { key: string, order: Order }) {
        if (value) {
            const keys = Object.keys(value);
            this.orders = [];
            keys.forEach((key) => {
                this.orders.push({$key: key, ...value[key]});
            });
        }
    }

    orders: IOrder[];

    constructor(public mealService: MealService) {
    }

    display(orderItems: OrderItem[]): string {
        return displayOrderItems(orderItems);
    }

    removeOrder(order: IOrder): void {
        this.mealService.deleteOrder(this.mealKey, order.$key);
        const indexToRemove = this.orders.indexOf(order);
        this.orders.splice(indexToRemove, 1);
    }
}
