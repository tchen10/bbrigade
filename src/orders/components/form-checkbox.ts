import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItem} from '../models/order';

@Component({
    selector: 'form-checkbox',
    template: `
        <form class="form-inline">
            <label>
                <input type="checkbox" name="{{name}}" [ngModel]="orderItem.selected"
                       (ngModelChange)="change($event)"/>
                {{label}}
            </label>
            <select class="form-control" name="{{name}}-amount" [ngModel]="orderItem.options.amount"
                    (ngModelChange)="change($event)">
                <option vale="lite">lite</option>
                <option value="regular">regular</option>
                <option value="extra">extra</option>
            </select>
            <input type="text" name="{{name}}-text" [ngModel]="orderItem.options.detail"
                   (ngModelChange)="change($event)" placeholder="comments">
        </form>

    `
})

export class FormCheckbox {
    @Input() orderItem: OrderItem;
    @Input() label: string;
    @Input() name: string;

    @Output() orderItemChange = new EventEmitter();

    change(newValue): void {
        this.orderItem = newValue;
        this.orderItemChange.emit(newValue);
    }
}
