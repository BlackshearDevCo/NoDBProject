import React, {Component} from 'react';
import Favorites from './Favorites'
import './CSS/favorites.css';

export default class FavoritesContainer extends Component{
    constructor(props){
        super(props)
    }

    gameOver(){
        alert('Game Over!')
    }

    render(){
        const { favorites,move } = this.props;
        let favoritesList = favorites.map((cur,ind) => {
            if(cur.platformId === 1){
                return <Favorites key={ind} name={cur.name} platformName={'XBOX One'} platformId={cur.platformId}  population={cur.population} id={cur.id} favorite={favorites} move={move} /> 
            }
            else if(cur.platformId === 2){
                return <Favorites key={ind} name={cur.name} platformName={'Play Station 4'} platformId={cur.platformId} population={cur.population} id={cur.id} favorite={favorites} move={move} /> 
            }
            else{
                return <Favorites key={ind} name={cur.name} platformName={'Steam'} platformId={cur.platformId} population={cur.population} id={cur.id} favorite={favorites} move={move} /> 
            }
        })
        
        if(favorites.length > 5){
            alert('Game Over!')
        }

        return (
            <div className="favoritesBar">
                <div className="favorite-title">
                    <h1>Favorites:</h1>
                    <h5 className="choose">Choose Carefully ;)</h5>
                </div>
                <div className="favorite-list">{favoritesList}</div>
            </div>
        )
    }
}