const fs = require("node:fs");


fs.readFile("data.json", (err, data)=> {
    if (err === null){
        const datajson = JSON.parse(data);
        let a = "";
        for (let list of datajson){
            console.log(`${list.exchangedate}:${list.rate}`)
            a = a +`${list.exchangedate}:${list.rate}\n`
        }
        fs.writeFile("output.txt", a, (err)=>{
            if (err === null) {
                console.log("The file has been saved");
    }})  
    } else {
        console.log(err);
    }
});


