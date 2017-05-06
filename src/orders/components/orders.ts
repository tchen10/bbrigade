import {Component} from '@angular/core';
import {OrderService} from '../services/order_service';

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
            <order-list [orders]="orderService.orders$"></order-list>
        </div>
    `
})

export class OrdersComponent {
    constructor(public orderService: OrderService) {
    }
}
