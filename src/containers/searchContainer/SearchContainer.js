import React from 'react';
import classNames from 'classnames';
import "./Search.css";
import MovieStub from '../../MovieStub.json'

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn_title_genre_red: true,
            btn_release_rating_red: true
        }
    }

     changeBtnColor = (params) => {
        if ((params == "btn_title" || params == "btn_genre") && document.getElementById(params).className != "btn-red") {
            this.setState({ btn_title_genre_red: !this.state.btn_title_genre_red })
        } else if ((params == "btn_release" || params == "btn_rating") && document.getElementById(params).className != "btn-red") {
            this.setState({ btn_release_rating_red: !this.state.btn_release_rating_red })
        }
    }

    render() {
        return (
            <div className="search-container">
                <div className="input-button-container">
                    <input className="input-container" type="input" placeholder="Search..." />
                    <div className="buttons-movies-result-container">
                        <div className="buttons-container">
                            <span className="desc">SEARCH BY</span>
                            <div className="buttons-position">
                                <button id="btn_title" onClick={this.changeBtnColor.bind(this,"btn_title")} className={this.state.btn_title_genre_red ? "btn-red" : "btn-gray"}>
                                    <span>TITLE</span>
                                </button>
                                <button id="btn_genre" onClick={this.changeBtnColor.bind(this,"btn_genre")} className={this.state.btn_title_genre_red ? "btn-gray" : "btn-red"}>
                                    <span>GENRE</span>
                                </button>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <span className="desc">SORT BY</span>
                            <div className="buttons-position">
                                <button id="btn_release" className={this.state.btn_release_rating_red ? "btn-red" : "btn-gray"}  onClick={this.changeBtnColor.bind(this,"btn_release")}>
                                    <span>RELEASE DATE</span>
                                </button>
                                <button id="btn_rating" className={this.state.btn_release_rating_red ? "btn-gray" : "btn-red"} onClick={this.changeBtnColor.bind(this,"btn_rating")}>
                                <span>RATING</span>
                            </button>
                            </div>
                        </div>
                        <div className="movies-search-result">
                            <div className="result-count"><span>{MovieStub.length}</span>results</div>
                            <button className="btn-search">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchContainer;