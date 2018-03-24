import React, { Component } from 'react';
import Playlists from './Playlists';
import './CSS/listcontainer.css';

export default function ListContainer(props) {
    const { favorite,array,fav,deleteItem } = props;
     
    let playlists = props.array.map((cur,ind) => {
        if(cur.platformId === 1){
            return <Playlists key={ind} name={cur.name} platformName={'XBOX One'} platformId={cur.platformId}  
            population={cur.population.players} id={cur.id} favorite={favorite} fav={fav} deleteItem={deleteItem} /> 
        }
        else if(cur.platformId === 2){
            return <Playlists key={ind} name={cur.name} platformName={'Play Station 4'} platformId={cur.platformId} 
            population={cur.population.players} id={cur.id} favorite={favorite} fav={fav} deleteItem={deleteItem} /> 
        }
        else{
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