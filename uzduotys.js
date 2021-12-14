/* 1 uzduotis

let num = 10
while(num >= 1) {
    console.log(num)
    num--
}
*/

/* 2 uzduotis

for(let num = 10; num >= 1; num--) {
    console.log(num)
}
*/

/* 3 uzduotis

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

while(numMenuo <= kiekMenSpausdinti) {
    numAvys *= 4
    console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`)
    numMenuo++
}
*/

/* 4 uzduotis

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

for(numMenuo; numMenuo <= kiekMenSpausdinti; numMenuo++) {
    numAvys *= 4
    console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`)
}
*/

/* 5 uzduotis

let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

while(currentGen <=(totalGen-15)) {
    totalMW += 62
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`)
    currentGen++
}
for(currentGen; currentGen <= totalGen; currentGen++) {
    totalMW += 124
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`)
}
*/

/* 6 uzduotis

let totalGen = 19;
let totalMW = 0;

for(currentGen = 1; currentGen <= totalGen; currentGen++) {
    if(currentGen % 2 == 0) {
        if(currentGen > 4) {
            totalMW += 124
            console.log(`Generatorius #${currentGen} įjungtas, pridėjo 124 MW, viso generuojama ${totalMW} MW!`)
        } else {
            totalMW += 62
            console.log(`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`)
        }
    } else {
        console.log(`Generatorius #${currentGen} išjungtas.`)
    }
}
*/

/* 7 uzduotis

let num=10;

while (num > 0) {
    if(num % 2 == 0) {
        console.log(num);
    }
    num--
}
*/

/* 8 uzduotis

function maxOf2(a,b) {
    if(a >= b) {
        return a
    } else {
        return b
    }
}
*/

/* 9 uzduotis

let temp = "Lietuvoje šiuo metu laipsnių pagal Celsijų"
let farenh = 26
let cels = (farenh-32) * 0.5556

console.log(`${temp.slice(0, 19)} ${cels.toFixed(1)}${temp.slice(19)}`)
*/

/* 10 uzduotis
let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"]

function largestWords(a) {
    let masyvoDydis = a.length
    let ilgiausiZodziai = []

    for(let i = 0; i < masyvoDydis; i++) {
        var atskirtaEilute = a[i].split(' ')
        var ilgiausiasZodis = ''
        for(let j = 0; j < atskirtaEilute.length - 1; j++) {
            
            if(atskirtaEilute[j].length > atskirtaEilute[j+1].length && atskirtaEilute[j].length > ilgiausiasZodis.length) {
                ilgiausiasZodis = atskirtaEilute[j]
            } else if(atskirtaEilute[j+1] > ilgiausiasZodis.length) {
                ilgiausiasZodis = atskirtaEilute[j+1]
            } 
        }
    ilgiausiZodziai.push(ilgiausiasZodis)
    }
    console.log(ilgiausiZodziai)

}
largestWords(posts)
*/

/* Bonus 11 uzduotis

let pcs = [
    { "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
    { "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
    { "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
    { "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
    { "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
    { "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
    { "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
    ]


function isrinktasPC(a) {
    let sarasoIlgis = a.length

    console.log("Galimi variantai: \n\n")
    for(let i = 0; i < sarasoIlgis; i++) {
        var kaina = false
        var spalva = false
        if(a[i].kaina <= 800) {
            if(a[i].spalva["juoda"] !== undefined || a[i].spalva["balta"] !== undefined) {

                if(a[i].spalva["juoda"] >= 2 && a[i].spalva["balta"] >= 2) {
                    console.log(`Modelis: ${a[i]["modelis"]}\nKaina: ${a[i].kaina*2}\nSpalvos:juoda ir balta\n`)
                } else if(a[i].spalva["juoda"] >= 2) {
                    console.log(`Modelis: ${a[i]["modelis"]}\nKaina: ${a[i].kaina*2}\nSpalvos:juoda\n`)
                } else {
                    console.log(`Modelis: ${a[i]["modelis"]}\nKaina: ${a[i].kaina*2}\nSpalvos:balta\n`)
                }
            } else {
                continue
            }
            
        }else{
            continue
        }
    } 
    return ("Ačiū kad naudojatės mūsų paslaugomis")
}
isrinktasPC(pcs)
*/
