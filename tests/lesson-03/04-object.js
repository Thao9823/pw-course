//bai1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
}
console.log(car.year);


//bai2
const person = {
    name: 'Thao',
    address: {
        street: '123 Main St',
        city: 'Hanoi',
        country: 'Vietnam'
    }
}
console.log(person.address.street);


//bai3
const student = {
    name: 'Thao',
    grades: {
        math: 90,
        english: 80
    }
}
console.log(student.grades["math"]);


//bai4
const settings = {
    volumn: 10,
    brightness: 70
}
settings.volumn = 20;
console.log(settings.volumn);


//bai5
const bike = {}
bike.color = 'yellow';
console.log(bike.color);


//bai6
const employee = {
    name: 'Thao',
    age: 28
}
delete employee.age;
console.log(employee);

//bai7
let school = {
    classA: ['An', 'Binh', 'Chau'],
    classB: ['Dao', 'Huong', 'Giang']
}
console.log("school: ", school);