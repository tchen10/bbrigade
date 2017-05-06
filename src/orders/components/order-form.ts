import {Component, EventEmitter, Output} from '@angular/core';
import {Order} from '../models/order';

@Component({
    selector: 'order-form',
    template: `
        <h2>New Order</h2>
        <form class="order-form">
            <div class="form-group">
                <label for="name">Name: </label>
                <input type="text" name="name" [(ngModel)]="order.name"/>
            </div>
            <label>Base</label>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="whiteRice" [(ngModel)]="order.base.whiteRice"/>
                    White Rice
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="brownRice" [(ngModel)]="order.base.brownRice"/>
                    Brown Rice
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="purpleRice" [(ngModel)]="order.base.purpleRice"/>
                    Purple Rice
                </label>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="lettuce" [(ngModel)]="order.base.lettuce"/>
                    Lettuce
                </label>
            </div>
            <button class="btn btn-default" (click)="submit()">Submit</button>
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

