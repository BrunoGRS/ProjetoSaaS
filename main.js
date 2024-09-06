import express from 'express';
import { connect } from './database/mongo.js';
import User from './database/use.model.js';
import user_routes from './routes/user.routes.js';

const app = express();
const port = 7878;

app.use('/api/user', user_routes);
app.use(express.json());

connect().then(()=>{
    app.listen(port, ()=>{
        console.log(`aplicação iniciou ${port}`);
    })    
}).catch(()=>{
    console.error('Erro');
})



