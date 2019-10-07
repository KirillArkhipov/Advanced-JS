class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    priceTotal(){
        let sum = 0;
        this.goods.forEach(function (elem) {
            sum += elem.price;
        });
        let sumCost = document.createElement('p');
        sumCost.innerHTML = `Суммарная стоимость товаров: $${sum}`;
        document.querySelector("header").appendChild(sumCost);
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.priceTotal();

//Добавьте пустые классы для корзины товаров и элемента корзины товаров. 
// Продумайте, какие методы понадобятся для работы с этими сущностями.

/*
class Cart {
    //переход к оформлению заказа
    checkout();
}
class CartElement {
    //изменить количество товара
    changeQuantity();
    //удалить товар из корзины
    remove();
}
*/