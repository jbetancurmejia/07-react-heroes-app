import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    
  const publisher='Marvel Comics';
  return (
    <div><h1>MarvelSCreen</h1>
       <hr/>
    <HeroList publisher={publisher}/>
    </div>
  )
}