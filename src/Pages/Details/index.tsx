import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../Services/Api";

type Props = {
    url:string;
}



export const Details = () => {
    const params = useParams();
    let url = params.url

    useEffect( () => {
        async function Loading () {
        let response = await Api.getPokemonDetails(`${url}`);
        
        
        }

        Loading();
    })


    return(
        <div>Details{params.url}</div>
    )
}