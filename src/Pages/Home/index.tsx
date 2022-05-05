import { useState,useEffect} from "react";
import { HomePokemon } from "../../Components/Home";
import { Api } from "../../Services/Api";
import { TypePokemon } from "../../Type/Pokemon";
import './style.css';



export const Home = () => {

    const [Pokemon, setPokemon] = useState<TypePokemon[]>([]);
    const [Loading,setLoading] = useState(false);
  

    useEffect( () => {
        async function Loading () {
        let response = await Api.getAllPokemon();
        setPokemon(response);
        setLoading(true);
        }

        Loading();
    },[])
     
       

    


    return(
        <div>         
            {!Loading && 'Carregando'}     
           <div className="ContainerHome">
            {Pokemon.map((item,index) =>
           <HomePokemon key={index} name={item.name} url={item.url} img={item.img} />)}
           </div>
          
        </div>
    );
}