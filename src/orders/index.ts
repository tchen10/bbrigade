import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { OrdersComponent } from './components/orders';
import { OrderListComponent } from './components/order-list';
import { OrderFormComponent } from './components/order-form';

const routes: Routes = [
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})

export class OrdersModule {}
