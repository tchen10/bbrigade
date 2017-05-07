import {Injectable} from '@angular/core';
import {IOrder, Order} from '../models/order';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {OrderCategory} from '../models/order-category';

@Injectable()
export class OrderService {
    orders$: FirebaseListObservable<IOrder[]>;
    private PATH = `/orders`;
    private db: AngularFireDatabase;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.orders$ = this.db.list(this.PATH);
    }

    create(order: Order): firebase.Promise<any> {
        return this.orders$.push(order);
    }

    find(key: string): FirebaseObjectObservable<IOrder> {
        return this.db.object(this.PATH + `/${key}`);
    }

    updateCategory(orderKey: string, categoryIndex: number, updatedCategory: OrderCategory): firebase.Promise<any> {
        const dbCategory  = this.db.object(this.PATH + `/${orderKey}/orderCategories/${categoryIndex}`);
        return dbCategory.update(updatedCategory);
    }
}
