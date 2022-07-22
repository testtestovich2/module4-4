// Вторая задача:

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие

// Пример:  "привет Мир" => "Привет мир"

const converterStr = (str) => {

    // строка принимает вид привет мир, в нижнем регистре
    let strToLowerCase = str.toLowerCase();
    // строка делает первую букву заглавной
    let resultStr = strToLowerCase[0].toUpperCase() + strToLowerCase.slice(1);

    return resultStr;
}

console.log(converterStr('привет Мир'));

// делал по stackoverflow примеру, но возможно есть решение элегантнее в рамках данного урока, потому что
// slice и применение .toLowerCase и тд, мне кажется выходит за рамки 
// https://ru.stackoverflow.com/questions/1167618/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%B7%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BF%D0%B5%D1%80%D0%B2%D1%83%D1%8E-%D0%B1%D1%83%D0%BA%D0%B2%D1%83-%D0%B2-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B5