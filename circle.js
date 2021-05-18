const PI = 3.14;
function circleArea (r) {
 console.log("Dairenin Alanı: " + r * r * PI);
}
 
function CircleCircumference (r) {
console.log("Dairenin Çevresi: " + 2 * PI * r);
}
module.exports = { circleArea ,
 CircleCircumference }