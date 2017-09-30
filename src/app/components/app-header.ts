import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-header',
    template: `
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a href="/orders" class="navbar-brand">Bibille Brigade</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li><a href="/meals">Lunch</a></li>
                    <li><a href="/orders">Orders</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li *ngIf="authenticated"><a (click)="signOut.emit()" href="#">Sign out</a></li>
                </ul>
                </div>
            </div>
        </nav>
    `
})

export class AppHeaderComponent {
    @Input() authenticated: boolean;
    @Output() signOut = new EventEmitter(false);
}
