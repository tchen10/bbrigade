import {Component, Input} from '@angular/core';
import {OrderService} from '../../orders/services/order_service';
import {MealService} from '../services/meal_service';

@Component({
    selector: 'meal-form',
    styles: [
        require('./meal-form.scss')
    ],
    template: `
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <form>
                    <h4>Add an order:</h4>
                    <div class="form-group form-inline">
                        <select (change)="selectOrder($event)" class="form-control">
                            <option value=""></option>
                            <option *ngFor="let order of orderService.orders$ | async" value="{{order.$key}}">
                                {{order.name}}
                            </option>
                        </select>
                        <button (click)="addOrder()" class="btn btn-default">Add</button>
                    </div>
                </form>
            </div>
        </div>
    `
})
export class MealFormComponent {
    @Input() mealKey: string;
    selectedOrderKey: string;

    constructor(public orderService: OrderService, public mealService: MealService) {
    }

    selectOrder(event: any): void {
        this.selectedOrderKey = event.target.value;
    }

    addOrder(): void {
        this.mealService.addOrder(this.mealKey, this.selectedOrderKey);
    }
}
