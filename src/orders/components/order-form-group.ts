import {Component, Input} from '@angular/core';
import {OrderCategory} from '../models/order-category';

@Component({
    selector: 'order-form-group',
    template: `
        <div class="form-group col-md-3">
            <h4>{{orderCategory.name}}</h4>
            <form-checkbox *ngFor="let item of orderCategory.orderItems" [orderItem]="item"></form-checkbox>
        </div>
    `
})
export class OrderFormGroupComponent {
    @Input() orderCategory: OrderCategory;
}
