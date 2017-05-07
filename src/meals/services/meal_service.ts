import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {IMeal, Meal} from '../models/meal';

@Injectable()
export class MealService {
    meals$: FirebaseListObservable<IMeal[]>;

    private PATH = `/meals`;
    private db: AngularFireDatabase;

    constructor(db: AngularFireDatabase) {
        this.db = db;
        this.meals$ = this.db.list(this.PATH);
    }

    create(): firebase.Promise<any> {
        const meal = new Meal(new Date().toUTCString());
        return this.meals$.push(meal);
    }

    find(key: string): FirebaseObjectObservable<IMeal> {
        return this.db.object(this.PATH + `/${key}`);
    }
}
