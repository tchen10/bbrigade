import {Component} from '@angular/core';
import {OrderService} from '../services/order_service';

@Component({
    selector: 'orders',
    template: `
        <h1>Existing Orders</h1>
        <div class="g-row">
            <div class="g-col">
                <order-form (createOrder)="orderService.create($event)"></order-form>
            </div>

            <div class="g-col">
                <order-list [orders]="orderService.orders$"></order-list>
            </div>
        </div>
    `
})

export class OrdersComponent {

    constructor(public orderService: OrderService) {
    }
}
