import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';
import { Api } from "../../Services/Api";
import { PokemonDetails } from "../../Type/PokemonDetails";



export const Details = () => {
    const params = useParams();
    const [pokemondetails, setpokemondetails] = useState<PokemonDetails>();
    const [img, setImg] = useState<any>();

    let url = params.url

    useEffect(() => {

        async function Loading() {
            let response = await Api.getPokemonDetails(`${url}`);

            setpokemondetails(response);


        }

        Loading();
    }, [])


    useEffect(() => {

        async function loadingimage() {
            setImg(pokemondetails?.sprites.front_default);


        }

        loadingimage();
    }, [pokemondetails])

    const ReplaceImg = (img: any) => {

        setImg(img);

    }




    return (
        <div className="Container-Details">

            <div className="Container-Details-Body">


                <h1>{pokemondetails?.name}</h1>

                <div className="imagearea">
                    <img src={img} alt="" />
                </div>
                <div className="imagearea-bottom">

                    <img src={pokemondetails?.sprites.front_default} onClick={() => ReplaceImg(pokemondetails?.sprites.front_default)} alt="" />
                    <img src={pokemondetails?.sprites.back_default} onClick={() => ReplaceImg(pokemondetails?.sprites.back_default)} alt="" />

                </div>


            </div>
        </div>
    )
}