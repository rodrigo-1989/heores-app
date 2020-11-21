import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heores/HeroCard';
import  queryString  from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [formValues,handleInputChange]= useForm ({
        searchHero:q
    });
    const {  searchHero } = formValues;
    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${searchHero}`)
        
    }   
   
    const heroesFilterd =  useMemo(() => getHeroesByName( q ), [ q ]);

        return (
            <div>
                <h1> Search Screen </h1>
                <hr ></hr>
                <div className="row">

                    <div className="col-5">
                        <h4>Search Form</h4>
                        
                        <form className="form-inline my-2 my-lg-0" onSubmit = {handleSearch}>
                            <input className="form-control my-2 w-100" type="text" autoComplete="off"
                            placeholder="Find your hero" name="searchHero" value= {searchHero} onChange= { handleInputChange }/>
                            <button className="btn btn-outline-success btn-md w-100" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="col-7 ">
                            <h4>Results</h4>
                            <hr />
                            {
                             (q === '') 
                                && <div className="alert alert-info">
                                    Search a hero...
                                </div>
                            }
                            {
                             (q !== '' && heroesFilterd.length === 0) 
                                && <div className="alert alert-danger">
                                    There is a no hero with {q}
                                </div>
                            }
                                
                            {
                                heroesFilterd.map( hero =>(
                                    
                                    <HeroCard 
                                        
                                        key = {hero.id}
                                        {...hero}
                                    />
                                    
                                ))
                            }
                            
                    </div>

                </div>
            </div>
        )
}
