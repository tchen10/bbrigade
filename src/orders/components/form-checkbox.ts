import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItem} from '../models/order';

@Component({
    selector: 'form-checkbox',
    styles: [
        require('./form-checkbox.scss')
    ],
    template: `
        <div class="form-row">
            <div class="order-item">
                <label>
                    <input class="form-check-input" type="checkbox" name="{{name}}" [ngModel]="orderItem.selected"
                           (ngModelChange)="change($event)"/>
                    {{label}}
                </label>
                <div class="options">
                    <select class="form-control" name="{{name}}-amount" [ngModel]="orderItem.options.amount"
                            (ngModelChange)="change($event)">
                        <option vale="lite">lite</option>
                        <option value="regular">regular</option>
                        <option value="extra">extra</option>
                    </select>
                    <span (click)="showComment()" class="glyphicon glyphicon-comment" aria-hidden="true"></span>
                </div>
            </div>
            <input *ngIf="comments" class="comments" type="text" name="{{name}}-text"
                   [ngModel]="orderItem.options.detail"
                   (ngModelChange)="change($event)" placeholder="comments">
        </div>

    `
})

export class FormCheckbox {
    @Input() orderItem: OrderItem;
    @Input() label: string;
    @Input() name: string;

    @Output() orderItemChange = new EventEmitter();

    comments: boolean = false;

    change(newValue): void {
        this.orderItem = newValue;
        this.orderItemChange.emit(newValue);
    }

    showComment(): void {
        this.comments = !this.comments;
    }
}
