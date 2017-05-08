import {Component, Input} from '@angular/core';
import {IMeal} from '../models/meal';

@Component({
    selector: 'new-meal',
    styles: [
        require('./new-meal.scss')
    ],
    template: `
        <div class="row">
            <h2>{{meal.date}}</h2>
        </div>
        <meal-form [mealKey]="meal.$key"></meal-form>
        <div class="row space">
            <meal-order-list [mealKey]="meal.$key" [mealOrders]="meal.mealOrders"></meal-order-list>
        </div>
    `
})
export class NewMealComponent {
    @Input() meal: IMeal;
}
