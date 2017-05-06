import {Component} from '@angular/core';
import {OrderService} from '../services/order_service';

@Component({
    selector: 'orders',
    template: `
        <div class="row">
            <h1>Orders</h1>
            <span (click)="showForm()" class="glyphicon glyphicon-plus-sign"></span>
        </div>
        <div *ngIf="form" class="row">
            <order-form (createOrder)="orderService.create($event)"></order-form>
        </div>
        <div class="row">
            <order-list [orders]="orderService.orders$"></order-list>
        </div>
    `
})

export class OrdersComponent {
    form: boolean = false;

    constructor(public orderService: OrderService) {
    }

    showForm() {
        this.form = !this.form;
    }
}
