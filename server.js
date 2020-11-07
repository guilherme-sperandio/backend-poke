const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');



app.use(cors());
app.get('/', async (req,res) => {
    try {
        const id = req.query.idpoke;
        console.log(req.query.idpoke);
        const pokeInfo =   await axios.get(`https://pokeapi.glitch.me/v1/pokemon/${id}/`);
        return res.json(pokeInfo.data);
    } catch (error) {
        console.log(error);
    }
    
})

app.listen(process.env.PORT || '4567');