function check_phone_numerics(importedArray_1)
{

        for (var FAValue of importedArray_1) {
            var regex = new RegExp( /^[0-9]+$/);

        if(importedArray_1.phoneNumber.match(regex)) {     //Jesli wartosc phonenumber z importowanej tablicy nie zawiera tylko liczb

            console.log("Phone number of user ID:", FAValue.userId, "is incorrect!");  //Wyswietl: string, wartosc userId z importowanego Arraya ,string

        } else console.log(!isNaN(FAValue.phoneNumber)); //W innym wypadku: wyswietl wartosc logiczna rozwiazania problemu: czy wartosc phonenumber z importowanego arraya nie jest liczba?
    }

}

check_phone_numerics(users1.users); 