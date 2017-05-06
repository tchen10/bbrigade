import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth';
import {OrdersComponent} from './components/orders';
import {OrderListComponent} from './components/order-list';
import {OrderFormComponent} from './components/order-form';
import {OrderService} from './services/order_service';
import {FormCheckbox} from './components/form-checkbox';

const routes: Routes = [
    {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
    {path: 'orders/create', component: OrderFormComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        OrdersComponent,
        OrderListComponent,
        OrderFormComponent,
        FormCheckbox
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
