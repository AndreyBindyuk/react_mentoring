import React from 'react';
import "../css/Search.css";
import mainLogo from'../movie_pic.png';

class SearchContainer extends React.Component{
    render(){
        console.log(mainLogo);
        return(
            <div className="search-container">
            <div className="search-container-name-style">
            <img src={mainLogo} alt="fireSpot"/>
            </div>
            <input className="search-container-input-style" type="input"/>
            <div className="search-container-button-style">
            <div className="search-container-search-by-button-style">
                    <button type="button">TITLE</button>
                    <button type="button">GENRE</button>
                    </div>
                    <div>
                    <button type="button">SEARCH</button>
                </div>
            </div>
            </div>
        );
    }
}

export default SearchContainer;