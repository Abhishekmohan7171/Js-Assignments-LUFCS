// button 

function printTable(){
    let giv = +document.getElementById('entry').value
    
    console.log(giv)
    for(i=1;i<=20;i++){
         let table = [`${giv} x ${i} = ${giv * i}`]
        //  console.log(table)
         ans.innerText += [(`${giv} x ${i} = ${giv * i}\n`)]
    }
}