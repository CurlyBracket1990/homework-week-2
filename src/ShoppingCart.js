class ShoppingCart {

    constructor(name) {
        this.name = name
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        const item = { name: itemName, quantity: quantity, pricePerUnit: price }
        this.items.push(item)
    }

    clear() {
        this.items = []
    }

    total() {
        return this.items.reduce((totaalbedrag, item) => {
            return totaalbedrag + (item.pricePerUnit * item.quantity)
        }, 0)

    }

};


module.exports = ShoppingCart
