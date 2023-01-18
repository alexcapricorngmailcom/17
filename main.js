// Ваша сложнейшая на данный момент задача. Переписать наш "интернетный магазин". 
// Функционал весь по сути готов, только его нужно переделать, под идейно "правильную" объектную структуру. 
// К примеру, все данные что у нас есть должны находиться в пределах одного объекта. Как его методы к примеру:
// const veryCoolShop = {
//   cart: [
//     {
//       id: 'xcds',
//       category: 'Процессоры',
//       // и т.д.
//     }
//   ]
// };

// То есть все данные должны быть внутри, как и функции должны стать методами этого объекта:
// const veryCoolShop = {
//   // ...
//   addToCart: function(id) {
//     // ваш код
//     this.card.push(/*товар*/);
//   }
//   // ...
// };

// Так же они должны обращаться ко внутренним свойствам через this. И в идеале, если у вас всё получится, 
// я хочу чтобы вызовы можно было делать цепочкой по типу:
// veryCoolShop.addToCart('xcds').showCart().addToCart('xcds').cupit();

// // можно писать и так, для удобочитаемости

// veryCoolShop
//   .addToCart('xcds')
//   .showCart()
//   .addToCart('xcds')
//   .cupit();

const objectShop = {
    user: '',
    money: 2000,
    cart: [],
    discount: .13,

    goods: [
        {
            id: 'xcds', 
            category: 'Процессоры', 
            name: 'intel i7 w8', 
            price: 600
        },

        {
            id: 'asd2', 
            category: 'Материнская плата', 
            name: 'Acer b450', 
            price: 200
        },

        {
            id: 'zg82', 
            category: 'Процессоры', 
            name: 'AMD', 
            price: 900
        },

        {
            id: '1tgy', 
            category: 'Одежда', 
            name: 'Радужные', 
            price: 2.22
        },

        {
            id: 'n6ba', 
            category: 'Продукты', 
            name: 'Tomato', 
            price: 1.5
        },

        {
            id: 'kio1', 
            category: 'Процессоры', 
            name: 'Rizen', 
            price: 780.5
        },

        {
            id: 'IVAN', 
            category: 'Одежда', 
            name: 'Футболка розовая', 
            price: 40
        },
    ],

    showList: function(category) {
        let list;

        if (!category) { list = this.goods; }
        else {
            let preList = [];
            for (let i = 0; i < this.goods.length; i++) {
                preList[i] = this.goods[i].category;
            }
            list = preList.filter(function(el, i, arr) {
                return el.toLowerCase() == category.toLowerCase();
            });

            if ( !list.length ) list = 'Такой категории нет';
        }
        return list;
    },

    addToCart: function(id) {
        let item = goods.find(function(goodId) {
            return goodId[0] == id;
        });

        if (item) {
            cart.push(item.map(function(el) {
                return el;
            }));
            return `В корзину добавлен товар '${item[2]}'`;
        } else {
            return 'Товар не найден!';
        }
    },
    




};

objectShop.user = prompt('Добрый день, представьтесь пожалуйста :)') || 'Сеньор(-ита)';
console.log(objectShop.user);

console.log(objectShop.showList('Процессоры'));








// function removeFromCart(id) {
//     let item = cart.find(function(goodId) {
//         return goodId[0] == id;
//     });
//     let index = cart.indexOf(item);

//     cart.splice(index, 1);
// }

// function clearCart() {
//     cart = [];
// }

// function showCart() {
//     return cart;
// }

// function cupit() {
//     let infoList = cart.map(function(good) {
//        return `${good[2]} | $${good[3]}`;
//     }).join('\n');

//     calcDiscount();

//     let summ = cart.map(function(price) {
//         return price[3];
//     }).reduce(function(result, price) {
//         return result + price;
//     });

//     summ = roundTo(summ);

//     infoList += `\n===============\nИтоговая стоимость товаров: $${summ}`;
//     infoList += `\nНа вашем счету: $${money}`;
//     infoList += `\n\nКупи?`;

//     let cond = confirm(infoList);

//     if (cond) {
//         let check = money - summ;

//         if (check >= 0) {
//             money -= summ;
//             clearCart();
//             return `Списание денег со счета прошло успешно!\nНа вашем счету: $${roundTo(money)}`;
//         } else {
//             return `На вашем счету недостаточно денег! Стоимость товаров превышает ваш счет на $${roundTo(Math.abs(check))}`;
//         }
//     }
// }

// function roundTo(num, n = 2) {
//     return Math.round( num * (10 ** parseInt(n)) ) / (10 ** parseInt(n));
// }

// function calcDiscount() {
//     let sameCategory = [];

//     cart.forEach(function(good) {
//         let cat = good[1];

//         if (!sameCategory.length) {
//             sameCategory.push([cat, 1]);
//         } else {
//             let item = sameCategory.find(function(el, i, arr) {
//                 return el[0] == cat;
//             });

//             if (item) {
//                 item[1]++;
//             } else {
//                 sameCategory.push([cat, 1]);
//             }
//         }
//     });

//     let filtered = sameCategory.filter(function(el) {
//         return el[1] >= 3;
//     });

//     cart.forEach(function(good) {
//         let check = filtered.some(function(filter) {
//             return filter[0] == good[1];
//         });

//         if (check) {
//             let price = good[3] * (1 - discount);
//             good[3] = roundTo(price);
//         }
//     });
// }

// addToCart('xcds');
// addToCart('xcds');

// addToCart('IVAN'); 
// addToCart('IVAN');
// addToCart('IVAN');
// addToCart('IVAN');

// addToCart('n6ba');
// addToCart('n6ba');
// addToCart('n6ba');

// addToCart('1tgy');

// calcDiscount();