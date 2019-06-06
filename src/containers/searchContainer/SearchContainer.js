import React from 'react';
import "./Search.css";
import MovieStub from '../../MovieStub.json'

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_by:"title",
            sort_by:"release"
        }
    }

    toggleTitleColor = (event) => {
        if(event.target.id == "btn_genre" && this.state.search_by == "title"){
            this.setState({ search_by: "genre"})
        }
        else if(event.target.id == "btn_title" && this.state.search_by == "genre"){
            this.setState({ search_by: "title"})
        }
    }
    
    toggleRatingColor = (event) => {
        if(event.target.id == "btn_rating" && this.state.sort_by == "release"){
            this.setState({ sort_by: "rating"})
        }
        else if(event.target.id == "btn_release" && this.state.sort_by == "rating"){
            this.setState({ sort_by: "release"})
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
                                <button id="btn_title" onClick={this.toggleTitleColor} className={this.state.search_by =="title" ? "btn-red" : "btn-gray"}>
                                    TITLE
                                </button>
                                <button id="btn_genre" onClick={this.toggleTitleColor} className={this.state.search_by =="title" ? "btn-gray" : "btn-red"}>
                                    GENRE
                                </button>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <span className="desc">SORT BY</span>
                            <div className="buttons-position">
                                <button id="btn_release" onClick={this.toggleRatingColor} className={this.state.sort_by =="release" ? "btn-red" : "btn-gray"}>
                                    RELEASE DATE
                                </button>
                                <button id="btn_rating" onClick={this.toggleRatingColor} className={this.state.sort_by =="release" ? "btn-gray" : "btn-red"}>
                                RATING
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