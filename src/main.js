import express from 'express';

const app = express();
const port = 7878;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`aplicação iniciou ${port}`);
});


