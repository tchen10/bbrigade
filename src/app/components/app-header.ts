import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-default">
            <div class="container">
                <a href="/orders" class="navbar-brand">Bibille Brigade</a>
                <ul class="nav navbar-nav navbar-right">
                    <li *ngIf="authenticated"><a (click)="signOut.emit()" href="#">Sign out</a></li>
                </ul>
            </div>
        </nav>
    `
})

export class AppHeaderComponent {
    @Input() authenticated: boolean;
    @Output() signOut = new EventEmitter(false);
}
