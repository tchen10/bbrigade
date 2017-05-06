import {Component} from '@angular/core';
import {OrderService} from '../services/order_service';
import {Order} from '../models/order';

@Component({
    selector: 'orders',
    styles: [
        require('./orders.scss')
    ],
    template: `
        <div class="row">
            <div class="header-row">
                <h1>Orders</h1>
                <a href="orders/create"><span class="glyphicon glyphicon-plus-sign"></span></a>
            </div>
        </div>
        <div class="row">
            <order-list [orders]="orders"></order-list>
        </div>
    `
})

export class OrdersComponent {
    orders: Order[];

    constructor(public orderService: OrderService) {
        orderService.orders$.subscribe((snapshot) => {
            this.orders = snapshot.map((order) => {
                return Order.createFromSnapshot(order);
            });
        });
    }
}
