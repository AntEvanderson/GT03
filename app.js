const express = require('express');

const app = express();

app.get('/', (req, resp) =>{
    console.log("Chamou o endpoint raiz, com o método GET");
    //resp.write('EXEMPLO API LIVROS');
    resp.json(descricao);
    resp.end();
})


//app.post()
//app.put()
//app.delete()
app.listen(5000)


