/*

//Exercise #1: A Person Object
//Part 1 Javascript

function Person(firstName, lastName, edad) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;
    this.edad = edad;

    // a method which returns the full name
    this.fullName = function() {
        return this.firstName + " " + this.lastName + " " + this.edad;
    }
}
var myPerson = new Person("Jonatan", "Rafael", "29");
alert(myPerson.fullName());



//Part 2 HTML

class person {
    constructor(name, age) {
        this.name_person = name;
        this.age_person = age;
    }

    describe() {
        return (
            this.name_person + ", " + this.age_person + " years old");
    }
}


function getdata() {
    var name1 = document.getElementById('name').value;
    var age1 = parseInt(document.getElementById('age').value);

    let persona1 = new person(name1, age1);
    document.getElementById("Id").innerHTML = persona1.describe();
}

//Part1 Book
var library = [{
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Ya leído " + book);
    } else {
        console.log("Todavía necesitas leer " + book);
    }
}
*/
var library = [{
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

var sort_by = function(field_name, reverse, initial) {

    var key = initial ?
        function(x) {
            return initial(x[field_name]);
        } :
        function(x) {
            return x[field_name];
        };

    reverse = !reverse ? 1 : -1;

    return function(x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
    };
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);