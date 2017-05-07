import {Component, Input} from '@angular/core';
import {Order} from '../../orders/models/order';
import {OrderItem} from '../../orders/models/order-item';
import * as _ from 'lodash';
import {displayOrderItems} from '../../common/functions/display-order-item';

@Component({
    selector: 'meal-order-list',
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
                    <div>{{order.name}}</div>
                    <div>{{order.comments}}</div>
                </td>
                <td *ngFor="let category of order.orderCategories; let i = index;">
                    <div>{{display(category.orderItems)}}</div>
                </td>
            </tr>
            </tbody>
        </table>
    `
})
export class MealOrderList {
    @Input('mealOrders')
    set mealOrders(value: { key: string, order: Order }) {
        this.orders = _.values(value);
    }

    orders: Order[];

    display(orderItems: OrderItem[]): string {
        return displayOrderItems(orderItems);
    }
}
