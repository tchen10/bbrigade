import {Component, Input} from '@angular/core';
import {OrderCategory} from '../models/order-category';

@Component({
    selector: '[order-list-inline-edit]',
    template: `
        <div (click)="toggleEditing(true)" *ngIf="!editing">{{readonly}}</div>
        <div *ngIf="editing">
            <order-category-edit [orderKey]="orderKey" [categoryIndex]="categoryIndex" [category]="category"
                                 (editInProgress)="toggleEditing($event)"></order-category-edit>
        </div>
    `
})
export class OrderListInlineEdit {
    @Input() readonly: string;
    @Input() orderKey: string;
    @Input() categoryIndex: number;
    @Input() category: OrderCategory;

    private editing: boolean = false;

    toggleEditing(editInProgress): void {
        this.editing = editInProgress;
    }
}
