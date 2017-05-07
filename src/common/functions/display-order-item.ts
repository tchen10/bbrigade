export function displayOrderItems(orderItems: any): string {
    const itemStrings = [];
    orderItems.forEach((item) => {
        if (item.selected) {
            let display = item.label;
            if (item.amount || item.detail) {
                display += item.amount ? ` (${item.amount}` : ' (';
                display += item.detail ? ` ${item.detail})` : ')';
            }
            itemStrings.push(display);
        }
    });
    return itemStrings.join(', ');
}
