import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';
 
 export const HeroList = ( { publisher } ) => {

   const heroes=  useMemo(() => getHerosByPublisher( publisher ), [ publisher ]);

    // const heroes = getHerosByPublisher( publisher ); 
    
     return (
        
         <div className="card-columns">
             {
                 heroes.map( hero=>(
                     <HeroCard
                         key= { hero.id }
                         {...hero}
                     />
                 )) 
             }
         </div>
         
     )
 }
 