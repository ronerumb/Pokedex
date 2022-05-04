import axios from 'axios';

const http = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
})

export const Api = {

    getAllPokemon: async () =>{

        let response = await http.get('/');
        let data = response.data.results;
        
        for(let i = 0; i < data.length; i++){
           let img = await axios.get(`${data[i].url}`);
           data[i].img = img.data.sprites["front_default"];
        }
       
        return data;

    }

    

}