import {Component} from '@angular/core';
import {OrderService} from '../services/order_service';

@Component({
    selector: 'orders',
    template: `
        <div class="row">
            <h1>Orders</h1>
        </div>
        <div class="row">
            <h2>New Order</h2>
            <order-form (createOrder)="orderService.create($event)"></order-form>
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
