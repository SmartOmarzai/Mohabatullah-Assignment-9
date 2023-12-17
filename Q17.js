var person = {
    name : "Ali",
    lastname : "zahedi",
    age : 19,
    set newname (n){
        this.name = n;
    },
    get getname (){
        console.log(this.name);
    }
 };

person.newname = "Amir";
person.getname;
