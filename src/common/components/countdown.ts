import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'countdown',
    template: `<div>{{displayTime}}</div>`
})
export class CountdownComponent {
    @Input() endDate: string;
    @Output() timeReached: EventEmitter<Date> = new EventEmitter();
    displayTime: string;

    constructor() {
        setInterval( () => { this.display(); }, 1000);
    }

    display(): void {
        const countDownDate = new Date(this.endDate);
        const now = new Date();

            const distance = countDownDate.getTime() - now.getTime();

            if (distance < 0) {
                this.timeReached.emit(countDownDate);
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.displayTime = `${days} days ${hours}:${minutes}:${seconds}`;
    }
}
