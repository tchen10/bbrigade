import {Component} from '@angular/core';
import {MealService} from '../services/meal_service';
import {Meal} from '../models/meal';

@Component({
    selector: 'meals',
    template: `
        <div class="row">
            <div class="header-row">
                <h1>Lunch Today</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <button (click)="createMeal()" class="btn btn-default btn-block">START LUNCH</button>
            </div>
        </div>

        <new-meal *ngIf="displayMeal" [meal]="currentMeal"></new-meal>
    `
})
export class MealsComponent {
    displayMeal: boolean = false;
    currentMeal: Meal;

    constructor(public mealService: MealService) {
    }

    createMeal(): void {
        this.mealService.create().then((snapshot) => {
            this.mealService.find(snapshot.key).subscribe((snapshot) => {
                this.currentMeal = Meal.createFromSnapshot(snapshot);
                this.displayMeal = true;
            });
        }).catch((error) => console.log(error));
    }
}
