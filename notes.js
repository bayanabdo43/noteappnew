const fs = require('fs')
const { title } = require('process')

const addnote = (title,body) =>{
    const notes = loadnotes()
    notes.push({
        title:title,
        body
    })
    savenotes(notes)
}

const loadnotes =() =>{
    try{
        const dataBuffer =fs.readFileSync('notes.json').toString()

        const savedata = JSON,stringify(notes)
        fs.writeFileSync('notes,json',savedata)
    }
    module.exports ={
        addnote
    }
}