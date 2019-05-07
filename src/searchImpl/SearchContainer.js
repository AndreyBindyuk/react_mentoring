import React from 'react';
import "../css/Search.css";
import mainLogo from '../movie_pic.png';
import MovieStub from '../movieItemImpl/MovieStub.json'

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn_title_genre: true,
            btn_release_rating: true
        }
    }

    changeBtnColor(params) {
        if ((params =="btn_title" || params =="btn_genre") && document.getElementById(params).style.color != "red"){
            this.setState({ btn_title_genre: !this.state.btn_title_genre })
        } else if((params =="btn_release" || params =="btn_rating") && document.getElementById(params).style.color != "red"){
            this.setState({ btn_release_rating: !this.state.btn_release_rating })
        }
    }

    render() {
        let red_btn = this.state.btn_title_genre ? "red" : "";
        let gray_btn = this.state.btn_title_genre ? "" : "red";
        let r_red_btn = this.state.btn_release_rating ? "red" : "";
        let r_gray_btn = this.state.btn_release_rating ? "" : "red";

        return (
            <div className="search-container">
                <img className="logo-container" src={mainLogo} />
                <div className="input-button-container">
                    <input className="input-container" type="input" />
                    <div className="buttons-container">
                        <div className="title-genre-button-container">
                            <button id="btn_title" onClick={this.changeBtnColor.bind(this, "btn_title")} style={{ color: red_btn }}>
                                <span>TITLE</span>
                            </button>
                            <button id="btn_genre" onClick={this.changeBtnColor.bind(this, "btn_genre")} style={{ color: gray_btn }}>
                                <span>GENRE</span>
                            </button>
                        </div>
                        <button><span>SEARCH</span></button>
                    </div>
                    <div className="movies-search">
                        <h5>{MovieStub.length} movies found</h5>
                        <div className="release-rating">
                            <button id="btn_release" className="btn" style={{ color: r_red_btn }} onClick={this.changeBtnColor.bind(this, "btn_release")}>release date</button>
                            <button id="btn_rating" className="btn" style={{ color: r_gray_btn }} onClick={this.changeBtnColor.bind(this, "btn_rating")}>rating</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;