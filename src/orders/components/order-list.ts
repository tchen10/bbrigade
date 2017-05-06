import {Component, Input} from '@angular/core';
import {IOrder} from '../models/order';
import {OrderItem} from '../models/order-item';

@Component({
    selector: 'order-list',
    template: `
        <table class="table table-condensed table-hover">
            <thead>
            <th>Name</th>
            <th>Base 1</th>
            <th>Base 2</th>
            <th>Toppings</th>
            <th>Sauce</th>
            </thead>
            <tbody>
            <tr *ngFor='let order of orders | async'>
                <td>
                    {{order.name}}
                    <span class="glyphicon glyphicon-pencil"></span>
                </td>
                <td *ngFor="let category of order.orderCategories">
                    {{display(category.orderItems)}}
                </td>
            </tr>
            </tbody>
        </table>
    `
})
export class OrderListComponent {
    @Input() orders: IOrder[];

    display(orderItems: OrderItem[]): string {
        const itemStrings = [];
        orderItems.forEach((item) => {
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
}
