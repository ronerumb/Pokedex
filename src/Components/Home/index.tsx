import { Link,useNavigate } from 'react-router-dom';
import { Details } from '../../Pages/Details';

import './style.css'

type Props = {

    name:string,
    url:string,
    img:string,
    

}



export const HomePokemon = ({name,url,img}:Props) => {

    const navigate = useNavigate();

    const handlePokemonDetails = (url:string) => {
        let string = url.replace("https://pokeapi.co/api/v2/pokemon/","");
        navigate(`/Details/${string}`);

    }

    return (
       
        <div className="Container-Comp-Home" onClick={() => handlePokemonDetails(url)}>
          
        <img src={img} alt="" />
        <p>{name}</p>

        </div>
        
       
    );
}