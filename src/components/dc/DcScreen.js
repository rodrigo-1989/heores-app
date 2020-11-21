import React from 'react'
import { HeroList } from '../heores/HeroList'

export const DcScreen = ()=>{
    return (
        <>
            <h1>Dc Screen</h1>
            <hr></hr>
            <HeroList publisher = { 'DC Comics' } />
        </>
    )
}