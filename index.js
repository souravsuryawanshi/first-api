const express = require('express');
const app = express();
const PORT = '8000';

app.use(express.json()); //middleware

app.get('/t-shirt',(req, res)=>{
  res.status(200).send({
    name : 'Peter England',
    size : 'xl'
  })
});

app.post('/t-shirt/:id',(req,res)=>{
    const { id } = req.params;
    const { logo } = req.body;
    if(!logo){
        res.status(413).send({message : 'we need a logo!'});
    }
    res.send({
        tshirt : `t-shirt with logo : ${logo} and id  : ${id}`
    })

})

app.listen(PORT)
