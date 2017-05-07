import {Component, Input} from '@angular/core';
import {Meal} from '../models/meal';
@Component({
    selector: 'new-meal',
    template: `
        <div>{{meal.date}}</div>
    `
})
export class NewMealComponent {
    @Input() meal: Meal;
}