const fs = require('fs')

let content = 'Write to file successfully\n'

// write to file 
fs.writeFile('test.txt', content,{encoding: 'base64' , flags: 'w'}, (err) =>{
    if (err) throw err
    console.log(`Write to file ${content}`)
})

// read from file
fs.readFile('test.txt' , 'base64' , (err,data) => {
    if (err) throw err
    console.log(`Read From file ${data}`)

})



//fs.writeFileSync('test2.txt', content,{encoding: 'utf8' , flag: 'a'})

