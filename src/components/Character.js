import React from "react";
import './Character.css';

const getYear = (created) => {
    var at = new Date(created);
    return new Date().getFullYear() - at.getFullYear();
}

const Character = (props) => {
    
    const { character } = props;
    
        return (
            <div className="character">
                <div className="avatar">
                    <img className="avatarImage" src={character.image} alt={character.name} />
                </div>   
                <div className="details">
                <div className="heading">
                    <h4>{character.name}</h4>
                    <span>id: {character.id} - created {getYear(character.created)} years ago</span>
                </div>
                <div className="data">
                    <div className="info">
                        <span>STATUS</span>
                        <span>{character.status}</span>
                    </div>

                     <div className="info">
                        <span>SPECIES</span>
                        <span>{character.species}</span>
                    </div>

                     <div className="info">
                        <span>GENDER</span>
                        <span>{character.gender}</span>
                    </div>

                     <div className="info">
                        <span>ORIGIN</span>
                        <span>{character.origin && character.origin.name}</span>
                    </div>

                     <div className="info">
                        <span>LAST LOCATION</span>
                        <span>{character.location && character.location.name}</span>
                    </div>                    
                </div> 
                </div>           
            </div>
        );    
    
} 

export default Character;