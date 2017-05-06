import {Component} from '@angular/core';
import {Order} from '../models/order';
import {OrderService} from '../services/order_service';
import {Router} from '@angular/router';

@Component({
    selector: 'order-form',
    styles: [
        require('./order-form.scss')
    ],
    template: `
        <form class="order-form">
            <div class="form-group col-md-12">
                <h4>Name: </h4>
                <input required type="text" name="name" [(ngModel)]="order.name"/>
            </div>
            <order-form-group *ngFor="let category of order.orderCategories" [orderCategory]="category"></order-form-group>
            <div class="col-md-12">
                <div class="form-center">
                    <div class="form-group">
                    <textarea type="text" name="name" placeholder="anything else?"
                              [(ngModel)]="order.comments">
                    </textarea>
                    </div>
                    <div class="form-group">
                        <button [disabled]="formSubmitted" class="btn btn-default btn-block" (click)="submit()">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    `
})
export class OrderFormComponent {
    order: Order = Order.createBibimbap();
    formSubmitted: boolean = false;

    constructor(public orderService: OrderService, public router: Router) {
    }

    submit(): void {
        this.formSubmitted = true;
        this.orderService.create(this.order);
        this.router.navigateByUrl('/orders');
    }
}
