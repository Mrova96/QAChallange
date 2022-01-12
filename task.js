/*
Task 1 DONE last update: 11.01.2022 23:00
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2 DONE last update: 12.01.2022 1:05
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".
Compare email addresses, first names, last names and phone numbers.
*/


//wykorzystanie NodeJS'owego file systemu
const fs=require('fs');
//Sparsowanie danych z zewnetrznego pliku JSON do obiektu JS dla ZADANIA 2
var users1 = JSON.parse(fs.readFileSync('user1.json', 'utf8'));

//Import danych z pliku JS dla ZADANIA 1
var users2 = require('./user2.js');




//ZADANIE 1

console.log("TASK 1: \n \n");


function check_phone_numerics(importedArray_1)
{
        for (var FAValue of importedArray_1) {

        if (isNaN(FAValue.phoneNumber)) {     //Jesli wartosc phonenumber z importowanej tablicy nie jest liczba

            console.log("Phone number of user ID:", FAValue.userId, "is incorrect!");  //Wyswietl: string, wartosc userId z importowanego Arraya ,string

        } else console.log(!isNaN(FAValue.phoneNumber)); //W innym wypadku: wyswietl wartosc logiczna rozwiazania problemu: czy wartosc phonenumber z importowanego arraya nie jest liczba?
    }

}

check_phone_numerics(users1.users);  //Wywolanie funkcji uzywajacej zaimportowanej tablicy
//check_phone_numerics(secondArray); //Test wykonany na drugiej tablicy - przechodzi :)

//ZADANIE 2
console.log("TASK 2: \n \n");


function compare_data(importedArray_1, importedArray_2) {

//EMAIL CHECK
for (var i = 0; i < importedArray_1.length; i++){
            if (importedArray_1[i].emailAddress === importedArray_2[i].emailAddress) {

            }
            else console.log("MISMATCH FOUND!: Email addresses of user with ID", importedArray_1[i].userId ,"are not the same. Email in first array is:", importedArray_1[i].emailAddress, "but in the second array is:", importedArray_2[i].emailAddress)


        }
//FIRST NAME CHECK
    for (var i = 0; i < importedArray_1.length; i++){
        if (importedArray_1[i].firstName === importedArray_2[i].firstName) {

        }
        else console.log("MISMATCH FOUND!: First names of user with ID", importedArray_1[i].userId ,"are not the same. First name in first array  is:", importedArray_1[i].firstName, "but in the second array is:", importedArray_2[i].firstName)

    }
//LAST NAME CHECK
    for (var i = 0; i < importedArray_1.length; i++){
        if (importedArray_1[i].lastName === importedArray_2[i].lastName) {

        }
        else console.log("MISMATCH FOUND!: Last names of user with ID", importedArray_1[i].userId ,"are not the same. Last name in first array  is:", importedArray_1[i].lastName, "but in the second array is:", importedArray_2[i].lastName)

    }
//PHONE NUMBER CHECK
    for (var i = 0; i < importedArray_1.length; i++){
        if (importedArray_1[i].phoneNumber === importedArray_2[i].phoneNumber) {

        }
        else console.log("MISMATCH FOUND!: Phone numbers of user with ID", importedArray_1[i].userId ,"are not the same. Phone number in first array  is:", importedArray_1[i].phoneNumber, "but in the second array is:", importedArray_2[i].phoneNumber)

    }

}
compare_data(users1.users, users2.users);



