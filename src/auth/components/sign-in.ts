import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';


@Component({
    styles: [
        require('./sign-in.scss')
    ],
    template: `
        <div class="row sign-in">
            <h1 class="sign-in__heading">Sign in</h1>
            <button class="sign-in__button" (click)="signInWithGoogle()" type="button">Google</button>
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
