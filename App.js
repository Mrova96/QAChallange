
//Import danych z pliku JSON
const fs=require('fs');
//Sparsowanie danych JSON do obiektu JS
var firstArray = JSON.parse(fs.readFileSync('array.json', 'utf8'));





//ZADANIE 1
for (var FAValue of firstArray.users)
{

    if (isNaN(FAValue.phoneNumber)){     //Jesli wartosc phonenumber z importowanego Arraya nie jest liczba

        console.log("Phone number of user ID:", FAValue.userId, "is incorrect!" );  //Wyswietl: string, wartosc userId z importowanego Arraya ,string

    }
    else console.log(!isNaN(FAValue.phoneNumber)); //W innym wypadku: wyswietl wartosc logiczna problemu: czy wartosc phonenumber z importowanego arraya nie jest liczba?
}


