import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderCategory} from '../models/order-category';
import {OrderService} from '../services/order_service';

@Component({
    selector: 'order-category-edit',
    template: `
        <form-checkbox *ngFor="let item of category.orderItems" [orderItem]="item"></form-checkbox>
        <button class="btn btn-default btn-xs" (click)="editInProgress.emit(false)">Cancel</button>
        <button class="btn btn-default btn-xs" (click)="updateOrderCategory()">Update</button>
    `
})
export class OrderCategoryEditComponent {
    @Input() orderKey: string;
    @Input() categoryIndex: number;
    @Input() category: OrderCategory;

    @Output() editInProgress = new EventEmitter();

    constructor(public orderService: OrderService) {
    }

    updateOrderCategory(): void {
        this.orderService.updateCategory(this.orderKey, this.categoryIndex, this.category)
            .then(() => {
                this.editInProgress.emit(false);
            })
            .catch((error) => {
                console.log(error);
            });

    }
}
