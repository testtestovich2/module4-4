// Первая задача:

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 73 рубля.

const converter = (sum) => {
    const euro = 1.2;
    const dollar = 73;

    let convertDollar = sum * euro;
    let converRub = convertDollar * dollar;

    return converRub;
}

console.log(converter(50));