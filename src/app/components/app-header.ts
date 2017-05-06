import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-default">
            <div class="container">
                <h1 class="navbar-brand">Bibille Brigade</h1>
                <p class="navbar-text navbar-right"><a *ngIf="authenticated" (click)="signOut.emit()" href="#">Sign out</a></p>
            </div>
        </nav>
    `
})

export class AppHeaderComponent {
    @Input() authenticated: boolean;
    @Output() signOut = new EventEmitter(false);
}
