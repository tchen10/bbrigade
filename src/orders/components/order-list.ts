import {Component, Input} from '@angular/core';
import {IOrder} from '../models/order';
import {FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'order-list',
    template: `
        <ul class='order-list'>
            <li *ngFor='let order of orders | async'>{{order.name}}</li>
        </ul>
    `
})
export class OrderListComponent {
    @Input() orders: FirebaseListObservable<IOrder[]>;
}
