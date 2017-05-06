import {Component} from '@angular/core';
import {OrderService} from '../services/order_service';

@Component({
    selector: 'orders',
    template: `
        <div class="row">
            <div class="col-md-4">
                <h1>Orders</h1>
                <order-list [orders]="orderService.orders$"></order-list>
            </div>
            <div class="col-md-8">
                <order-form (createOrder)="orderService.create($event)"></order-form>
            </div>
        </div>
    `
})

export class OrdersComponent {

    constructor(public orderService: OrderService) {
    }
}
