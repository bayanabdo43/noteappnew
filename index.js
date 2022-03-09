const fs = require('fs')
const { default: validator } = require('validator')
fs.writeFileSync('notes.txt','heloo')

console.log(fs.readFileSync('notes.txt').toString())

//fs.appendFileSync('notes.txt','bayan')


const x =require('./data')
console.log(x)

console.log(x.sum(5,5))

/*const validator = require('validator')
console.log(validator.isEmail('bayan'))*/

console.log(process.argv)

console.log(process.argv[2])


const coand=process.argv[2]
if (coand === 'add'){
    console.log('add it')
}
else if (coand==='delete'){
    console.log('delete it')
}
else{
    console.log('error')
}


//////////////بستدعي ملف yarags
const yargs = require('yargs')
const { describe } = require('yargs')
console.log(yargs.argv)




yargs.command({
    command:'add',
    describe:'add note',
    handler:()=>{
        console.log('add note')
    }
})


yargs.command({
    command:'delete',
    describe:'delete note',
    handler:()=>{
        console.log('delete note')
    }
})



yargs.command({
    command:'list',
    describe:'list note',
    handler:()=>{
        console.log('list notees')
    }
})



yargs.command({
    command:'read',
    describe:'read note',
    handler:()=>{
        console.log('read note')
    }
})




yargs.command({
    command:'delete',
    describe:'delet note',
    builder:{
        title:{
            describe:'',
            demandOption:true,
            type:'string'
        },
        handler:()=>{
            console.log('delet note')
        }
    }
})





yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'read note',
            demandOption:true,
            type:'string'
        },
        handler:()=>{
            console.log('delet note')
        }
    }
})



const person={
    name:'bayan',
    age:22
}

const personjson = JSON.stringify(person)
console.log(personjson)

//console.log(fs=require('fs'))
fs.writeFileSync('person.json', personjson)

const data = fs.readFileSync('person.json').toString
console.log(data)

const dataobject = JSON.parse(data)
console.log(dataobject)

dataobject.name='abdo'
dataobject.age=45

const newjson = JSON.stringify(dataobject)
fs.writeFileSync('person.json',newjson)


/*const fs = reqire('fs')
fs.writeFileSync('notes.txt','hello')
console.log(fs.readfilesync('notes.txt').toString())*/




/*const notes =require('./notes')
yargs.command({
    command:'add',
    describe:'add note',
    builder:{
        title:{
            describe:'this is title description in add comand',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'this is body description in add comand',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        notes.addnote(x.title,x.body)
    }
})*/