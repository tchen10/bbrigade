import {Component} from '@angular/core';
import {AuthService} from '../../auth';


@Component({
    selector: 'app',
    styles: [
        require('./app.scss')
    ],
    template: `
        <app-header
                [authenticated]="auth.authenticated"
                (signOut)="signOut()"></app-header>

        <main class="main">
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </main>
    `
})

export class AppComponent {
    constructor(private auth: AuthService) {
    }

    signOut(): void {
        this.auth.signOut();
    }
}
