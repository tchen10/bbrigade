import {Component, Input} from '@angular/core';

@Component({
    selector: '[inline-edit]',
    template: `
        <div (click)="toggleEditing(true)" *ngIf="!editing">{{readonly}}</div>
        <div *ngIf="editing">
            <ng-content></ng-content>
        </div>
    `
})
export class InlineEdit {
    @Input() readonly: string;

    private editing: boolean = false;

    toggleEditing(editInProgress: boolean): void {
        this.editing = editInProgress;
    }
}
