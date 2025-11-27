//bai1
function multiply(a, b) {
    return (a * b);
}
console.log(multiply(4, 5));

//bai2
function findMin (a, b, c) {
    return Math.min(a, b, c);
}
let result1 = findMin(5, 2, 8);
console.log("Giá trị nhỏ nhất của (5, 2, 8) là:", result1);


//bai3
function getTopStudents(students, threshold) {
  return students
    .filter(student => student.score >= threshold)
    .map(student => student.name);
}

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 90 },
  { name: "David", score: 65 },
  { name: "Eva", score: 95 }
];

const topStudents = getTopStudents(students, 80);
console.log("Những học sinh đạt điểm cao (>=80):", topStudents);

//bai4
function calculateInterest(principal, rate, years) {
  const total = principal + (principal * rate * years) / 100;
  return total;
}
const principal = 1000; 
const rate1 = 5;
const years1 = 3;

const total1 = calculateInterest(principal, rate1, years1);
console.log(`Tổng số tiền sau ${years1} năm:`, total1);

