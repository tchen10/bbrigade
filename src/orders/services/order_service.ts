import {Injectable} from '@angular/core';
import {IOrder, Order} from '../models/order';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AuthService} from '../../auth/services/auth-service';

@Injectable()
export class OrderService {
    orders$: FirebaseListObservable<IOrder[]>;
    private PATH = `/orders`;

    constructor(af: AngularFire, auth: AuthService) {
        this.orders$ = af.database.list(this.PATH);
    }

    create(order: Order): firebase.Promise<any> {
        return this.orders$.push(order);
    }
}
