import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth';
import {OrdersComponent} from './components/orders';
import {OrderListComponent} from './components/order-list';
import {OrderFormComponent} from './components/order-form';
import {OrderService} from './services/order_service';
import {OrderFormGroupComponent} from './components/order-form-group';
import {OrderFormCheckboxComponent} from './components/order-form-checkbox';
import {OrderCategoryEditComponent} from './components/order-category-edit';
import {OrderListInlineEdit} from './components/order-list-inline-edit';

const routes: Routes = [
    {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
    {path: 'orders/create', component: OrderFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        OrdersComponent,
        OrderListComponent,
        OrderFormComponent,
        OrderFormGroupComponent,
        OrderFormCheckboxComponent,
        OrderCategoryEditComponent,
        OrderListInlineEdit
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        OrderService
    ]
})

export class OrdersModule {
}
