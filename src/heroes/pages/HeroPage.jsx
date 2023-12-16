import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

    const {id} = useParams();

    const hero = useMemo( () => getHeroById( id ), [id] );
    //useMemo se usa para que si derrepente se abre el componente con el mismo id,
    //react lo memorize para que no lo tenga que renderizar de nuevo.
    //que lo cambie solo cuando cambie el id

    
    // const navigateTo = (hero.publisher === 'Marvel Comics')
    //     ? 'marvel'
    //     : 'dc';

    const navigate = useNavigate();

    const onNavigateBack = () => {
        // return navigate(`/${navigateTo}`)
        return navigate(-1); //va a donde se estaba antes segun el historial del navegador
    }   

    if( !hero ) {
        return <Navigate to={`/${navigate}`} />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/heroes/${ id }.jpg`} 
                    alt={ hero.superhero } 
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>  
                <ul className="list-group">
                    <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher} </li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

            <button 
                className="btn btn-outline-primary"
                onClick={ onNavigateBack }
            >
                Back
            </button>

            </div>
        </div>
    )
}
