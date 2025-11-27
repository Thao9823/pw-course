//bai1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tính tổng từ 1 đến 100: " + sum);

//bai2
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

}

//bai3
let arr = [];
for (let i = 1; i <= 99; i += 2) {
    arr.push(i);
}
console.log("Các số lẻ từ 1 đến 99: " + arr);


//bai4
for (let i = 1; i <= 10; i++) {
    console.log("Email: " + `user${i}@example.com`);
}

//bai5
let totaldt = 0;
const doanhthu = [
    { month: 1, total: 100 },
    { month: 2, total: 100 },
    { month: 3, total: 100 },
    { month: 4, total: 100 },
    { month: 5, total: 100 },
    { month: 6, total: 100 },
    { month: 7, total: 100 },
    { month: 8, total: 100 },
    { month: 9, total: 100 },
    { month: 10, total: 100 },
    { month: 11, total: 100 },
    { month: 12, total: 100 },
];
for (let i = 0; i < doanhthu.length; i++) {
    totaldt += doanhthu[i].total;
}
console.log("Tổng doanh thu trong năm: " + totaldt);



