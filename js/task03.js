// Третья задача:

// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:

//     Общая сумма корзины
//     Количество товаров в корзине
//     Промокод

// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

// Порядок применения скидок должен соблюдаться

const calculate = (sum, count, promo) => {
    let money = sum;
    if(count > 10){
        resultCart = money * 0.3;
    }

    if(sum > 30000){
        resultCart = money * 0.15;
    }

    if(promo === 'METHED'){
        resultCart = money * 0.1;
    }

    if(promo === 'G3H2Z1'){
        if(money > 2000){
            resultCart = money - 500;
        }else{
            resultCart;
        }
    }

    let resultCartPromo = sum - resultCart;

    return resultCartPromo;
}

console.log(calculate(10000, 5, 'METHED'));