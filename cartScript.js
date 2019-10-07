function sendRequest(url) {
    // pending->fulfulled|rejected
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status !== 200) {
                    reject();
                }
                const users = JSON.parse(xhr.responseText);

                resolve(users);
            }
        };
        xhr.send();
    });
}

class CartList {
    constructor() {
        this.items = [];
    }

    fetchItems() {
        return sendRequest('http://localhost:3000/cart')
            .then((items) => {
                this.items = items;
            });
    }

    render() {
        return this.items.map((item) => new Item(item.title, item.price).render()).join('');
    }
}

class Item {
    constructor(title, price) {
        this.price = price;
        this.title = title;
    }

    render() {
        return `<div class="cart-item"><h3>${this.title}</h3><p>${this.price}</p></div>`
    }
}

const items = new CartList();
items.fetchItems().then(() => {
    document.querySelector('.cart-list').innerHTML = items.render();
});