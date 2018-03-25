import React, { Component } from 'react';
import Playlists from './Playlists';
import './CSS/listcontainer.css';

export default function ListContainer({ favorite,array,fav,deleteItem }) {
     
    let playlists = array.map((cur,ind) => {
        if(cur.platformId === 1){
            return <Playlists key={ind} name={cur.name} platformName={'XBOX One'} platformId={cur.platformId}  
            population={cur.population.players} id={cur.id} favorite={favorite} fav={fav} deleteItem={deleteItem} /> 
        }
        else if(cur.platformId === 2){
            return <Playlists key={ind} name={cur.name} platformName={'Play Station 4'} platformId={cur.platformId} 
            population={cur.population.players} id={cur.id} favorite={favorite} fav={fav} deleteItem={deleteItem} /> 
        }
        else if(cur.platformId === 3){
            return <Playlists key={ind} name={cur.name} platformName={'Steam'} platformId={cur.platformId} 
            population={cur.population.players} id={cur.id} favorite={favorite} fav={fav} deleteItem={deleteItem} /> 
        }
    })

    return (
        <div className="Flex-Box">
            {playlists}
        </div>
    )
}