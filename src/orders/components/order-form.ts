import {Component, EventEmitter, Output} from '@angular/core';
import {Order} from '../models/order';

@Component({
    selector: 'order-form',
    styles: [
        require('./order-form.scss')
    ],
    template: `
        <form class="order-form">
            <div class="form-group col-md-12">
                <h4>Name: </h4>
                <input required type="text" name="name" [(ngModel)]="order.name"/>
            </div>
            <div class="form-group col-md-3">
                <h4>Base 1:</h4>
                <form-checkbox [label]="'White Rice'" [name]="'whiteRice'"
                               [(orderItem)]="order.base.whiteRice"></form-checkbox>
                <form-checkbox [label]="'Brown Rice'" [name]="'brownRice'"
                               [(orderItem)]="order.base.brownRice"></form-checkbox>
                <form-checkbox [label]="'Purple Rice'" [name]="'purpleRice'"
                               [(orderItem)]="order.base.purpleRice"></form-checkbox>
                <form-checkbox [label]="'Lettuce'" [name]="'lettuce'"
                               [(orderItem)]="order.base.lettuce"></form-checkbox>
            </div>
            <div class="form-group col-md-3">
                <h4>Base 2:</h4>
                <form-checkbox [label]="'Chicken'" [name]="'chicken'"
                               [(orderItem)]="order.protein.chicken"></form-checkbox>
                <form-checkbox [label]="'Beef'" [name]="'beef'" [(orderItem)]="order.protein.beef"></form-checkbox>
                <form-checkbox [label]="'Spicy Pork'" [name]="'spicyPork'"
                               [(orderItem)]="order.protein.spicyPork"></form-checkbox>
                <form-checkbox [label]="'Shrimp'" [name]="'shrimp'"
                               [(orderItem)]="order.protein.shrimp"></form-checkbox>
                <form-checkbox [label]="'Tofu'" [name]="'tofu'" [(orderItem)]="order.protein.tofu"></form-checkbox>
                <form-checkbox [label]="'Mushroom'" [name]="'mushroom'"
                               [(orderItem)]="order.protein.mushroom"></form-checkbox>
            </div>
            <div class="form-group col-md-3">
                <h4>Toppings:</h4>
                <form-checkbox [label]="'Eggs'" [name]="'eggs'" [(orderItem)]="order.topping.eggs"></form-checkbox>
                <form-checkbox [label]="'Carrot'" [name]="'carrot'"
                               [(orderItem)]="order.topping.carrot"></form-checkbox>
                <form-checkbox [label]="'Cucumber'" [name]="'cucumber'"
                               [(orderItem)]="order.topping.cucumber"></form-checkbox>
                <form-checkbox [label]="'Radish'" [name]="'radish'"
                               [(orderItem)]="order.topping.radish"></form-checkbox>
                <form-checkbox [label]="'Bean Sprouts'" [name]="'beanSprout'"
                               [(orderItem)]="order.topping.beanSprout"></form-checkbox>
                <form-checkbox [label]="'Cabbage'" [name]="'cabbage'"
                               [(orderItem)]="order.topping.cabbage"></form-checkbox>
                <form-checkbox [label]="'Beets'" [name]="'beets'" [(orderItem)]="order.topping.beets"></form-checkbox>
            </div>
            <div class="form-group col-md-3">
                <h4>Sauce:</h4>
                <form-checkbox [label]="'Korean Hot Sauce'" [name]="'koreanHot'"
                               [(orderItem)]="order.sauce.koreanHot"></form-checkbox>
                <form-checkbox [label]="'Bibille Sauce'" [name]="'bibille'"
                               [(orderItem)]="order.sauce.bibille"></form-checkbox>
                <form-checkbox [label]="'Teriyaki'" [name]="'teriyaki'"
                               [(orderItem)]="order.sauce.teriyaki"></form-checkbox>
                <form-checkbox [label]="'Yogurt Wasabi'" [name]="'yogurtWasabi'"
                               [(orderItem)]="order.sauce.yogurtWasabi"></form-checkbox>
                <form-checkbox [label]="'Sesame Oil'" [name]="'sesameOil'"
                               [(orderItem)]="order.sauce.sesameOil"></form-checkbox>
                <form-checkbox [label]="'Sesame Seeds'" [name]="'sesameSeeds'"
                               [(orderItem)]="order.sauce.sesameSeeds"></form-checkbox>
            </div>
            <div class="col-md-12">
                <div class="form-center">
                    <div class="form-group">
                    <textarea required type="text" name="name" placeholder="anything else?"
                              [(ngModel)]="order.comments">
                    </textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default btn-block" (click)="submit()">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    `
})
export class OrderFormComponent {
    @Output() createOrder = new EventEmitter(false);
    order: Order = new Order();

    submit(): void {
        this.createOrder.emit(this.order);
    }
}

