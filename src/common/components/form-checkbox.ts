import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItem} from '../../orders/models/order-item';

@Component({
    selector: 'form-checkbox',
    styles: [
        require('./form-checkbox.scss')
    ],
    template: `
        <div class="form-row">
            <div class="order-item">
                <label>
                    <input class="form-check-input" type="checkbox" name="{{orderItem.name}}" [ngModel]="orderItem.selected"
                           (ngModelChange)="change($event, 'selected')"/>
                    {{orderItem.label}}
                </label>
                <div class="options">
                    <select class="form-control" name="{{orderItem.name}}-amount" [ngModel]="orderItem.amount"
                            (ngModelChange)="change($event, 'amount')">
                        <option value=""></option>
                        <option value="lite">lite</option>
                        <option value="extra">extra</option>
                    </select>
                    <span (click)="showComment()" class="glyphicon glyphicon-comment" aria-hidden="true"></span>
                </div>
            </div>
            <input *ngIf="comments" class="comments" type="text" name="{{orderItem.name}}-comments"
                   [ngModel]="orderItem.detail"
                   (ngModelChange)="change($event, 'detail')" placeholder="comments">
        </div>

    `
})

export class FormCheckboxComponent {
    @Input() orderItem: OrderItem;
    @Output() orderItemChange = new EventEmitter();

    comments: boolean = false;

    change(newValue: string, key: string): void {
        this.orderItem[key] = newValue;
        this.orderItemChange.emit(this.orderItem);
    }

    showComment(): void {
        this.comments = !this.comments;
    }
}
