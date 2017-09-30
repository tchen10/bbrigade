import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {IMeal, Meal} from '../models/meal';
import {Order} from '../../orders/models/order';
import {OrderService} from '../../orders/services/order_service';
import {OrderCategory} from '../../orders/models/order-category';

@Injectable()
export class MealService {
    meals$: FirebaseListObservable<IMeal[]>;

    private PATH = `/meals`;
    private db: AngularFireDatabase;
    private orderService: OrderService;

    constructor(db: AngularFireDatabase, orderService: OrderService) {
        this.db = db;
        this.meals$ = this.db.list(this.PATH);
        this.orderService = orderService;
    }

    create(): firebase.Promise<any> {
        const meal = new Meal(new Date().toDateString());
        return this.meals$.push(meal);
    }

    find(key: string): FirebaseObjectObservable<IMeal> {
        return this.db.object(this.PATH + `/${key}`);
    }

    today(): FirebaseListObservable<any> {
       return this.db.list(this.PATH,  {
            query: {
                orderByChild: 'date',
                equalTo: new Date().toDateString(),
                limitToLast: 1
            }
        });
    }

    addOrder(mealKey: string, selectedOrderKey: string): void {
        this.orderService.find(selectedOrderKey).subscribe((snapshot) => {
            const newMealOrder = Order.createFromSnapshot(snapshot);
            this.db.list(this.PATH + `/${mealKey}/mealOrders`).push(newMealOrder);
        });
    }

    deleteOrder(mealKey: string, selectedOrderKey: string): void {
        this.db.list(this.PATH + `/${mealKey}/mealOrders`).remove(selectedOrderKey);
    }

    updateCategory(mealKey: string, orderKey: string, categoryIndex: number, category: OrderCategory): firebase.Promise<any> {
        const dbCategory  = this.db.object(this.PATH + `/${mealKey}/mealOrders/${orderKey}/orderCategories/${categoryIndex}`);
        return dbCategory.update(category);
    }
}
