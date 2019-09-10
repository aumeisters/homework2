let fDeg = 32;
let roubles = 25000;
let a = 8;
let b = 45;
let c = -18;

cDeg = (fDeg * 9/5) + 32;
dollars = roubles * 0.015;
x1 = (-b + (Math.sqrt((b * b) - 4 * a * c))) / (2 * a);
x2 = (-b - (Math.sqrt((b * b) - 4 * a * c))) / (2 * a);

console.log(cDeg, dollars, x1, x2);
// Aвтор: Аумеистерс Андрейс
