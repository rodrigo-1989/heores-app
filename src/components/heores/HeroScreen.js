import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHerosById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history })=>{
    const { heroeId } = useParams ();

    const hero = useMemo(() => getHerosById(heroeId), [ heroeId ]);
    //  const hero = getHerosById( heroeId );

    if(!hero ){
        return <Redirect to="/" />
    }

    const handleReturn = ()=>{
        if(history.length <= 2){
            history.push('/')
        }else{ 
            history.goBack(); 
        }
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5 animate__animated animate__lightSpeedInLeft">
            <div className="col-4"> 
                <img className=" img-thumbnail" alt= { superhero }
                    src= { `../assets/heroes/${ heroeId }.jpg` }
                ></img>
            </div>    
            <div className="col-8 ">
                <h3> { superhero } </h3>
                <ul className="list-group list-gropu-flus">
                    <li className="list-group-item"><b> Alter ego:</b> { alter_ego }</li>
                    <li className="list-group-item"><b> Publiser:</b>  { publisher  }</li>
                    <li className="list-group-item"><b> First appeara nce:</b> { first_appearance }</li>
                </ul>
                <h5 className="mt-4"> Characters </h5>
                <p> { characters } </p>
                <button 
                    className="btn btn-outline-info"
                    onClick= { handleReturn }
                > Return </button>
            </div>        
        </div>
    )
}