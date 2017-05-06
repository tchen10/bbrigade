import {Component, EventEmitter, Output} from '@angular/core';
import {Order} from '../models/order';

@Component({
    selector: 'order-form',
    template: `
        <form class="order-form">
            Name: <input type="text" name="name" [(ngModel)]="order.name"/>
            Base
            <input type="checkbox" name="whiteRice" [(ngModel)]="order.base.whiteRice"/> White Rice 
            <input type="checkbox" name="brownRice" [(ngModel)]="order.base.brownRice"/> Brown Rice
            <input type="checkbox" name="purpleRice" [(ngModel)]="order.base.purpleRice"/> Purple Rice
            <input type="checkbox" name="lettuce" [(ngModel)]="order.base.lettuce"/> Lettuce
            <button (click)="submit()">Submit</button>
        </form>
    `
})
export class OrderFormComponent {
    @Output() createOrder = new EventEmitter(false);
    order: Order = Order.default();

    submit(): void {
        this.createOrder.emit(this.order);
    }
}

