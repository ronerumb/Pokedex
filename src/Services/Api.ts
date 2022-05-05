import axios from 'axios';
import { PokemonDetails } from '../Type/PokemonDetails';

const http = axios.create({
    baseURL:'https://pokeapi.co/api/v2'
})

export const Api = {

    getAllPokemon: async () =>{

        let response = await http.get('/pokemon?offset=0&limit=8');
        let data = response.data.results;
        
        for(let i = 0; i < data.length; i++){
           let img = await axios.get(`${data[i].url}`);
           data[i].img = img.data.sprites["front_default"];
        }
       
        return data;

    },

    getPokemonDetails: async (id:string):Promise<PokemonDetails> => {

        let response = await http.get<PokemonDetails>(`/pokemon/${id}`);
        
        return response.data;
        
       


    }

    

}