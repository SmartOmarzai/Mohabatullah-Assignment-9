
class Calculate {

    add(a, b) {
        return a + b;
    };

    sub(a, b) {
        return a - b;
    };
};

const Cal = new Calculate();
console.log(Cal.add(23, 7));
console.log(Cal.sub(20, 10));