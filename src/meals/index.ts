import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth';
import {OrderService} from '../orders/services/order_service';
import {MealsComponent} from './components/meals';
import {MealService} from './services/meal_service';
import {NewMealComponent} from './components/new_meal';

const routes: Routes = [
    {path: 'meals', component: MealsComponent, canActivate: [AuthGuard]},
];

@NgModule({
    declarations: [
        MealsComponent,
        NewMealComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        OrderService,
        MealService
    ]
})

export class MealsModule {
}
