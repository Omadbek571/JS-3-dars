// Funksiyani yaratamiz
function hisoblash(a, b, operator) {
    let natija;
    // Operatorni tekshiramiz va mos funksiyani ishga tushiramiz
    if (operator === '+') {
        natija = a + b;
    } else if (operator === '-') {
        natija = a - b;
    } else if (operator === '*') {
        natija = a * b;
    } else if (operator === '/') {
        natija = a / b;
    } else if (operator === '%') {
        natija = a % b;
    } 
    else {
        // Noto'g'ri operator uchun xatolik xabarini chiqaramiz
        natija = 'Notogri operator';
    }
    // Natijani qaytarib beramiz
    return natija;
}

// Test qilib ko'ramiz
let son1 = (+prompt("BIRINCHI SONI KIRITING"));
let operator = (prompt("OPERATOR KIRITING YANI (+ - / * %)"));
let son2 = (+prompt("IKINCHI SONI KIRITING"));
let netija = hisoblash(son1, son2, operator);
console.log(`${son1} ${operator} ${son2} = ${netija}`);
