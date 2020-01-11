import React, { Component } from "react";
import './Characters.css';
import Character from "./Character";
import Filter from "./Filter";


class Characters extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            filteredCharacters: [],
            search: '',
            sort: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
        this.listCharacters();
      }

      handleChangeSort = (e) => {
        this.setState({
            sort: e.target.value
        });
        this.listCharacters();
      }

      listCharacters() {          
          this.setState( state => {
              if(state.sort !== ''){
                  state.characters.sort((a,b) => 
                  (state.sort === 'asc') ? (a.id > b.id ? 1 : -1 ) : (a.id < b.id ? 1 : -1))
            }else{
                state.characters.sort( (a, b) => (a.id > b.id ? 1 : -1));
            }              

            if(state.search !== ''){              
                return {
                    filteredCharacters: state.characters.filter((item) => {
                        return item.name.toLowerCase().indexOf(state.search.trim().toLowerCase()) > -1; 
                    })
                }
            }
            return {
                filteredCharacters: state.characters
            }

          })        
          

      }


    componentDidMount(){

        fetch('https://rickandmortyapi.com/api/character/')
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({
                characters: data.results,
                filteredCharacters: data.results
            });
        })
    }
    render(){

        const { search, filteredCharacters, sort } = this.state;

        return (
            <div className="container">
                
                <Filter 
                    search={search}
                    handleChangeSearch={this.handleChange}                    
                    sort={sort }
                    handleChangeSort={this.handleChangeSort}                
                />    
                <div className="characters">            
                    {filteredCharacters.map(character=> {
                        return <Character key={character.id} character={character}/>
                    })}            
                </div>
            </div>
        );
    }
    
} 

export default Characters;