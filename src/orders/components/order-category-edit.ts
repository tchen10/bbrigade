import {Component, Input} from '@angular/core';
import {OrderCategory} from '../models/order-category';
import {OrderService} from '../services/order_service';

@Component({
    selector: 'order-category-inline-edit',
    template: `
    `
})
export class OrderCategoryInlineEditComponent {
    @Input() orderKey: string;
    @Input() categoryIndex: number;
    @Input() category: OrderCategory;

    constructor(public orderService: OrderService) {
    }

    updateOrderCategory(orderKey:string, categoryIndex: number, updatedCatgory: OrderCategory) {
        orderService.
    }
}