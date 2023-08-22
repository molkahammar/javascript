function hello() {
	return "hello edabit.com" 
}
function nextEdge(side1, side2) {
	let max;
	max=(side1+side2)-1;
	return max
}
function addition(a, b) {
	let sum;
	sum=a+b;
	return sum;
}
function convert(minutes) {
	let s;
	s=minutes*60;
	return s;
}
function findPerimeter(length, width) {
	let p;
	p=(length+width)*2;
	return p;
}
function howManySeconds(hours) {
	let s;
	s=hours*3600;
	return s;
}
function cubes(a) {
	let c;
		c=a**3;
	return c;
}
function remainder(x, y) {
	let m;
	m=x%y;
	return m;
}
function giveMeSomething(a) {
	return "something"+ " "+ a
}
function sumPolygon(n) {
	return (n-2)*180
}
function lessThan100(a, b) {
	if (a+b<100){
		return true;
	}
	else{
		return false;
	}
}
function squared(b) {
	return b**2;
}
function getFirstValue(arr) {
	return arr[0];
}
function points(twoPointers, threePointers) {
	return (twoPointers*2)+( threePointers*3)
}
function addition(num) {
	return num+1
}
function caesarCipher(s, k) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
 let result = '';

 for (let i = 0; i < s.length; i++) {
   let char = s[i];

   if (char.match(/[a-zA-Z]/)) {
	 const isUpperCase = char === char.toUpperCase();
	 char = char.toLowerCase();
	 const index = (alphabet.indexOf(char) + k) % 26;

	 if (index >= 0) {
	   char = isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
	 } else {
	   char = isUpperCase ? alphabet[26 + index].toUpperCase() : alphabet[26 + index];
	 }
   }

   result += char;
 }

 return result;

}
