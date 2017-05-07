import {Component, Input} from '@angular/core';
import {IMeal} from '../models/meal';

@Component({
    selector: 'new-meal',
    template: `
        <div class="row">
            <h2>{{meal.date}}</h2>
        </div>

        <meal-form [mealKey]="meal.$key"></meal-form>
    `
})
export class NewMealComponent {
    @Input() meal: IMeal;
}
