import {Component, OnInit} from '@angular/core';
import {MealService} from '../services/meal_service';
import {IMeal} from '../models/meal';

@Component({
    selector: 'meals',
    template: `
        <div class="row">
            <div class="header-row">
                <h1>Lunch Today</h1>
            </div>
        </div>

        <div *ngIf="pageReady">
            <div *ngIf="!mealExists" class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div>No lunch has been created yet today.</div>
                    <button (click)="createMeal()" class="btn btn-default btn-block">CREATE LUNCH</button>
                </div>
            </div>

            <new-meal *ngIf="mealExists" [meal]="meal"></new-meal>
        </div>
    `
})
export class MealsComponent implements OnInit {
    mealExists: boolean;
    meal: IMeal;
    pageReady: boolean = false;

    constructor(public mealService: MealService) {
    }

    ngOnInit(): void {
        this.mealService.today().subscribe((snapshot) => {
            if (snapshot.length < 1) {
                this.mealExists = false;
                this.pageReady = true;
            } else {
                this.meal = snapshot[0];
                this.mealExists = true;
                this.pageReady = true;
            }
        });
    }

    createMeal(): void {
        this.mealService.create().then((snapshot) => {
            this.mealExists = true;
        }).catch((error) => console.log(error));
    }
}
