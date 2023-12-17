
const person = {
    fullname: function(color) {
        return this.name + ' ' +  this.lastname + ' ' + this.age + ' ' + color;
    }
}

const person1 = {
    name: 'Mohabat',
    lastname: 'Omarzai',
    age: 21
}

const person2 = {
    name: 'Omar',
    lastname: 'Omari',
    age: 20
}

console.log(person.fullname.call(person1, 'withe'));
console.log(person.fullname.apply(person2, ['withe']));
