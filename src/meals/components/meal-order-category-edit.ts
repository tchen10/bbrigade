import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderCategory} from '../../orders/models/order-category';
import {MealService} from '../services/meal_service';

@Component({
    selector: 'meal-order-category-edit',
    template: `
        <form-checkbox *ngFor="let item of category.orderItems" [orderItem]="item"></form-checkbox>
        <button class="btn btn-default btn-xs" (click)="editInProgress.emit(false)">Cancel</button>
        <button class="btn btn-default btn-xs" (click)="updateOrderCategory()">Update</button>
    `
})
export class MealOrderCategoryEditComponent {
    @Input() mealKey: string;
    @Input() orderKey: string;
    @Input() categoryIndex: number;
    @Input() category: OrderCategory;

    @Output() editInProgress = new EventEmitter();

    constructor(public mealService: MealService) {
    }

    updateOrderCategory(): void {
        this.mealService.updateCategory(this.mealKey, this.orderKey, this.categoryIndex, this.category)
            .then(() => {
                this.editInProgress.emit(false);
            })
            .catch((error) => {
                console.log(error);
            });

    }
}
