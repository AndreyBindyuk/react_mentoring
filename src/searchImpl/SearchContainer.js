import React from 'react';
import "../css/Search.css";
import mainLogo from '../movie_pic.png';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: true
        }
    }

    changeColor() {
        this.setState({ red: !this.state.red })
    }
    render() {
        
        let btn_title_class = this.state.red ? "btn_red" : "";
        let btn_genre_class = this.state.red ? "" : "btn_red";
        return (
            <div className="search-container">
                <img className="logo-container" src={mainLogo} />
                <div className="input-button-container">
                    <input className="input-container" type="input" />
                    <div className="buttons-container">
                        <div className="title-genre-button-container">
                            <button id="btn_title" className={btn_title_class} onClick={this.changeColor.bind(this)}>
                                <span>TITLE</span>
                            </button>
                            <button id="btn_genre" className={btn_genre_class} onClick={this.changeColor.bind(this)}>
                                <span>GENRE</span>
                            </button>
                        </div>
                        <button><span>SEARCH</span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;