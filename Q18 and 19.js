var person = {
    id: 1000,
    name: 'Ahmad',

    favoriteBooks: [
        { id: 1, name: 'java', pages: 200 },
        { id: 2, name: 'css', pages: 250 },
    ],

}
for (let x in person) {
    console.log(person.favoriteBooks[1].name);
}

let friends = {
    id: 1098,
    name: 'karim',
    favoriteBooks: [
        { id: 1, name: 'java', pages: 1100 },
        { id: 2, name: 'javaScript', pages: 1200 },
    ],

}
    for(let y in friends) {
        console.log(person.favoriteBooks[0].name);
    }
