export class OrderItem {
    selected: boolean;
    amount: string;
    detail: string;
    label: string;
    name: string;

    constructor(label: string, name: string, selected: boolean = false) {
        this.label = label;
        this.name = name;
        this.amount = '';
        this.detail = '';
        this.selected = selected;
    }
}
