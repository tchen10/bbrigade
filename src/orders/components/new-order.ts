import {Component} from '@angular/core';
import {Order} from '../models/order';

@Component({
    selector: 'new-order',
    template: `
        <div class="col-md-3"></div>
        <div class="col-md-3">
            <button (click)="createOrderForm('bibimbap')" class="btn btn-default btn-block">Bibimbap</button>
        </div>
        <div class="col-md-3">
            <button (click)="createOrderForm('udon')" class="btn btn-default btn-block">Udon</button>
        </div>
        <div class="col-md-3"></div>
        <order-form *ngIf="displayForm" [order]="orderForm"></order-form>
    `
})
export class NewOrderComponent {
    orderForm: Order;
    displayForm: boolean = false;

    createOrderForm(type: string): void {
        if (type === 'udon') {
            this.orderForm = Order.createUdon();
        } else {
            this.orderForm = Order.createBibimbap();
        }
        this.displayForm = true;
    }
}
