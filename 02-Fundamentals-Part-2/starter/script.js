'use strict';

let friends = ['Cody', "Brolando"]
friends.push(0)
friends.unshift("slingger")
friends.shift()
console.log(friends.includes("slingger"))

const map = {
    first: 'Cody',
    last: 'Lundie',
    age: 37,

    introduce: function () {
        return `My name is ${this.first} ${this.last} and I am ${this.age} years old.`;
    }
}

console.log(map.introduce())