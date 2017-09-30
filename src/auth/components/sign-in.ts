import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';


@Component({
    styles: [
        require('./sign-in.scss')
    ],
    template: `
        <div class="row text-center">
            <h1>Ready to Bibille?</h1>
            <button class="btn-default btn-lg" (click)="signInWithGoogle()" type="button">Sign in with Google</button>
        </div>
    `
})

export class SignInComponent {
    constructor(private auth: AuthService, private router: Router) {
    }

    signInAnonymously(): void {
        this.auth.signInAnonymously()
            .then(() => this.postSignIn());
    }

    signInWithGoogle(): void {
        this.auth.signInWithGoogle()
            .then(() => this.postSignIn());
    }

    signInWithFacebook(): void {
        this.auth.signInWithFacebook()
            .then(() => this.postSignIn());
    }

    private postSignIn(): void {
        this.router.navigate(['/orders']);
    }
}
