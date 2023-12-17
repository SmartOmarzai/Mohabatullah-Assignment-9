const person1 = {
   name: 'Ali',
   lastname: 'Omari',
   age: 20,

   sleep: function(){
    const myconst = `Name is: ${this.name} and lastName: ${this.lastname} and age: ${this.age}`;
    return myconst;

   }
}
console.log(person1.sleep());