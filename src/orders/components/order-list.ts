import {Component, Input} from '@angular/core';
import {IOrder} from '../models/order';
import {FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'order-list',
    template: `
        <table class="table table-condensed">
            <tr *ngFor='let order of orders | async'>
                <td>
                    {{order.name}}
                </td>
            </tr>
        </table>
    `
})
export class OrderListComponent {
    @Input() orders: FirebaseListObservable<IOrder[]>;
}
