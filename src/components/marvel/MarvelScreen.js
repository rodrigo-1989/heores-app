import React from 'react'
import { HeroList } from '../heores/HeroList'

export const MarvelScreen = ()=>{
    return(
        <div>
            <h1>Marvel App</h1>
            <hr></hr>
            <HeroList publisher = { 'Marvel Comics' }  />
        </div>
    )
}