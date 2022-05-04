import { useState,useEffect} from "react";
import { Api } from "../../Services/Api";
import { TypePokemon } from "../../Type/Pokemon";


export const Home = () => {

    const [Pokemon, setPokemon] = useState<TypePokemon[]>([]);
  

    useEffect( () => {
        async function Loading () {
        let response = await Api.getAllPokemon();
        setPokemon(response);
        }

        Loading();
    })
     
       

    


    return(
        <div>

         

        

            {Pokemon.map((item,index) =>
            <div>{item.name}<br />
            <img src={item.img} alt="" /></div>)}

        </div>
    );
}