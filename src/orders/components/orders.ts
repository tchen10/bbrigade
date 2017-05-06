import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'orders',
  template: `
    <div class="g-row">
      <div class="g-col">
        <order-form></order-form>
      </div>

      <div class="g-col">
       <order-list></order-list>
      </div>
    </div>
  `
})

export class OrdersComponent {

  constructor(public route: ActivatedRoute) {
  }
}
