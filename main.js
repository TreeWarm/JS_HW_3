//Задание 1

function f1() {
let p;
	p = document.getElementById("out");
let prime = 1;
    let primeArr = [];

    while (prime <= 100) {
        if (prime == 1) {
            primeArr.push(1)
        } else {
            let result = 2;
            let i = 2;
            while (prime % i !== 0 ){
                i += 1;
                result +=1;
                }
            if (result == prime) {
                primeArr.push(result);
            }
        }
        prime += 1;
    }
    p.innerHTML+=primeArr;
}

//задание 2/3
//не смог запихнуть в одну функцию
//арифметику задания и вывод на экран (ибо чайник),
//поэтому добавил вторую функцию.
//Также результат выводится в консоль.
//Прошу прощения за занудство, но "корзина"
//в нашем случае "cart", в связи с чем и
//переименовал функцию.

let cart = [['buzz', 1000], ['tommygun', 5000],
            ['pipboy', 10000]];
    t = countCartPrice(cart);

function countCartPrice(cart){
    let sum = 0;
        for(let i = 0; i < cart.length; i++){
        sum = sum + cart[i][1];
    }
    return sum;
}
    console.log(+t);

function f2() {
	let p2;
    p2 = document.getElementById("out_cart");
    p2.innerHTML+=('price ' +t);
}

//Задание 4
//
function f3() {
	let p3;
    p3 = document.getElementById("out_numbers");

for (let i = 0; i < 9; i++, console.log(i),
      p3.innerHTML+=i ) {}
}




