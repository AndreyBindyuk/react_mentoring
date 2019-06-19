import React from "react";
import "./Search.css";
import {
  searchContainerService,
  sortService,
  searchService
} from "./SearchContainerService";
import { connect } from "react-redux";

class SearchContainer extends React.Component {
  toggleTitleColor = event => {
    if (event.target.id == "btn_genre" && this.props.searching == "title") {
      this.props.searchService("genres");
    } else if (
      event.target.id == "btn_title" &&
      this.props.searching == "genres"
    ) {
      this.props.searchService("title");
    }
  };

  toggleRatingColor = event => {
    if (
      event.target.id == "btn_rating" &&
      this.props.sorting == "release_date"
    ) {
      this.props.sortService("vote_average");
    } else if (
      event.target.id == "btn_release" &&
      this.props.sorting == "vote_average"
    ) {
      this.props.sortService("release_date");
    }
  };

  submit = () => {
    var text = document.getElementById("text").value;
    console.log(text);
    this.props.searchService(this.props.searching, text);
  };

  render() {
    return (
      <div className="search-container">
        <div className="input-button-container">
          <input
            id="text"
            className="input-container"
            type="input"
            placeholder="Search..."
          />
          <div className="buttons-movies-result-container">
            <div className="buttons-container">
              <span className="desc">SEARCH BY</span>
              <div className="buttons-position">
                <button
                  id="btn_title"
                  onClick={this.toggleTitleColor}
                  className={
                    this.props.searching == "title" ? "btn-red" : "btn-gray"
                  }
                >
                  TITLE
                </button>
                <button
                  id="btn_genre"
                  onClick={this.toggleTitleColor}
                  className={
                    this.props.searching == "title" ? "btn-gray" : "btn-red"
                  }
                >
                  GENRE
                </button>
              </div>
            </div>
            <div className="buttons-container">
              <span className="desc">SORT BY</span>
              <div className="buttons-position">
                <button
                  id="btn_release"
                  onClick={this.toggleRatingColor}
                  className={
                    this.props.sorting == "release_date"
                      ? "btn-red"
                      : "btn-gray"
                  }
                >
                  RELEASE DATE
                </button>
                <button
                  id="btn_rating"
                  onClick={this.toggleRatingColor}
                  className={
                    this.props.sorting == "release_date"
                      ? "btn-gray"
                      : "btn-red"
                  }
                >
                  RATING
                </button>
              </div>
            </div>
            <div className="movies-search-result">
              <div className="result-count">
                <span>{this.props.movies.length}</span>results
              </div>
              <button
                id="btn_search"
                onClick={this.submit}
                className="btn-search"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sortService: sortService,
  searchService: searchService
};

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  sorting: state.searchContainer.sort_by,
  searching: state.searchContainer.search_by
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
