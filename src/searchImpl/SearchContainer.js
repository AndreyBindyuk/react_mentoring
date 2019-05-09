import React from 'react';
import "../css/Search.css";
import mainLogo from '../images/logo.png';
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
        if ((params == "btn_title" || params == "btn_genre") && document.getElementById(params).className != "btn-red") {
            this.setState({ btn_title_genre: !this.state.btn_title_genre })
        } else if ((params == "btn_release" || params == "btn_rating") && document.getElementById(params).className != "btn-red") {
            this.setState({ btn_release_rating: !this.state.btn_release_rating })
        }
    }

    render() {
        let red_btn = this.state.btn_title_genre ? "btn-red" : "btn-gray";
        let gray_btn = this.state.btn_title_genre ? "btn-gray" : "btn-red";
        let r_red_btn = this.state.btn_release_rating ? "btn-red" : "btn-gray";
        let r_gray_btn = this.state.btn_release_rating ? "btn-gray" : "btn-red";
        return (
            <div className="search-container">
                <img className="logo-container" src={mainLogo} />
                <div className="input-button-container">
                    <input className="input-container" type="input" placeholder="Search..." />
                    <div className="buttons-movies-result-container">
                        <div className="buttons-container">
                            <span className="desc">SEARCH BY</span>
                            <div className="buttons-position">
                                <button id="btn_title" onClick={this.changeBtnColor.bind(this, "btn_title")} className={red_btn}>
                                    <span>TITLE</span>
                                </button>
                                <button id="btn_genre" onClick={this.changeBtnColor.bind(this, "btn_genre")} className={gray_btn}>
                                    <span>GENRE</span>
                                </button>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <span className="desc">SORT BY</span>
                            <div className="buttons-position">
                                <button id="btn_release" className={r_red_btn}  onClick={this.changeBtnColor.bind(this, "btn_release")}>
                                    <span>RELEASE DATE</span>
                                </button>
                                <button id="btn_rating" className={r_gray_btn} onClick={this.changeBtnColor.bind(this, "btn_rating")}>
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