const  fs  = require('fs')

const creatPerson = function(person){
    fs.writeFileSync('./nama.json', JSON.stringify(person))
    return person;
}

const sarah = creatPerson({
    nama : 'sarah azizah',
    umur : 18,
    alamat : 'kota wisata batu'
})
