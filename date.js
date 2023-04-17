//выведение текущей даты
let now = new Date();
console.log(now)


//установка даты в виде строки
let date3 = new Date('1941.03.01');
console.log(date3)

// //изменение значения текущей даты
// let date5 = new Date('1984.05.23');
// date5.getFullYear(1984)
// date5.getMonth()                            //месяцы в JS считаются от 0  
// date5.getDate()                            
// console.log(date5)


// //полyчение компонентов даты
let date4 = new Date('1984-5-23');
console.log(date4.getFullYear());
console.log(date4.getMonth() + 1);
console.log(date4.getDate());



function getDate(date) {

    let result = date.getDate() < 10 ? '0' + date.getDate() + '.' : date.getDate() + '.'
    result = result + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) + '.' :
        (date.getMonth() + 1 + '.'))
    result = result + date.getFullYear()
    return result;

}


let date = new Date('1984-5-22')

//прибавление +1 день к дате
date.setDate(date.getDate() + 1)
console.log(getDate(date));


// //сравнение дат
let date1 = new Date('28.01.2000')
let date2 = new Date('27.01.2000')

console.log(date2 <= date1);
console.log(date1 !== date2);
console.log(date1 > date2);


//сортировка дат
let users = [
    {
        name: 'Алекс',
        birthday: new Date(2017, 4, 12),
    },
    {
        name: 'Оля',
        birthday: new Date(2011, 7, 11),
    },
    {
        name: 'Юля',
        birthday: new Date(1997, 12, 8),
    },
    {
        name: 'Полина',
        birthday: new Date(1990, 4, 5),
    }  
]

users = users.sort(function(a,b) {
    if(a.birthday < b.birthday) return -1
})

console.log(users)



let search = '1997, 12, 8'                             //сортировка по дате рождения
let searchDate = new Date(search)
console.log(searchDate)


users = users.filter(function (user) {
    console.log(user.birthday.getTime(), searchDate.getTime())
    if (user.birthday.getTime() == searchDate.getTime()) return true    //сортировка по году рождения
})
console.log(users)



function getAge(birthDate) {
    var today = new Date();                                    //сортировка по возрасту
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || ( m === 0 & today.getDate() < birthDate.getDate())) {
    age--;
}
return age;
}

console.log(getAge(searchDate))