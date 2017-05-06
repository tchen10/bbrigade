import {Component, Input} from '@angular/core';
import {Order} from '../models/order';

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
            <tr *ngFor='let order of orders'>
                <td>
                    {{order.name}}
                </td>
                <td>
                    {{order.orderCategories[0].display()}}
                </td>
                <td>
                    {{order.orderCategories[1].display()}}
                </td>
                <td>
                    {{order.orderCategories[2].display()}}
                </td>
                <td>
                    {{order.orderCategories[3].display()}}
                </td>
            </tr>
            </tbody>
        </table>
    `
})
export class OrderListComponent {
    @Input() orders: Order[];
}
