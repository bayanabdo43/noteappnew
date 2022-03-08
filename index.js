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
if (coand=== 'add'){
    console.log('add it')
}
else if (coand==='delete'){
    console.log('delete it')
}
else{
    console.log('error')
}


const yargs = require('yargs')
const { describe } = require('yargs')
console.log(yargs.argv)


yargs.command({
    command:'list',
    describe:'list note',
    handler:()=>{
        console.log('list notees')
    }
})




/*const fs = reqire('fs')
fs.writeFileSync('notes.txt','hello')
console.log(fs.readfilesync('note.txt').toString())*/



const notes =require('./notes')
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
})