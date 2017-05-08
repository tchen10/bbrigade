import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth';
import {OrdersComponent} from './components/orders';
import {OrderListComponent} from './components/order-list';
import {OrderFormComponent} from './components/order-form';
import {OrderService} from './services/order_service';
import {OrderCategoryEditComponent} from './components/order-category-edit';
import {NewOrderComponent} from './components/new-order';
import {SharedModule} from '../common/index';

const routes: Routes = [
    {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
    {path: 'orders/create', component: NewOrderComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        OrdersComponent,
        OrderListComponent,
        OrderFormComponent,
        OrderCategoryEditComponent,
        NewOrderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [
        OrderService
    ]
})

export class OrdersModule {
}
