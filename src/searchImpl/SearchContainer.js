import React from 'react';
import "../css/Search.css";
import mainLogo from '../movie_pic.png';

class SearchContainer extends React.Component {
    render() {
        console.log(mainLogo);
        return (
            <div className="search-container">
                {/* <div className="logo-container"> */}
                <img className="logo-container" src={mainLogo}/>
                {/* </div> */}
                <div className="input-button-container">
                    <input className="input-container" type="input" />
                    <div className="buttons-container">
                        <div className="title-genre-button-container">
                            <button><span>TITLE</span></button>
                            <button><span>GENRE</span></button>
                        </div>
                        <button><span>SEARCH</span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;