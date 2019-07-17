import React, { useEffect } from "react";
import "./Search.css";
import { sortService, searchService } from "./SearchContainerService";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import classnames from "classnames";
import { sortMoviesSuccess, searchMoviesSuccess } from "./actionCreators";

export class SearchContainer extends React.Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.sortBy) {
      this.props.sortService(values.sortBy);
    }
    if (values.query !== "undefined" && values.query) {
      this.props.searchService(values.searchBy, values.query);
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.sorting !== this.props.sorting || prevProps.searching !== this.props.searching || prevProps.query !== this.props.query){
      let URL = `/search?sortBy=${this.props.sorting}&searchBy=${this.props.searching}&query=${this.props.query}`
      this.props.history.push(URL)
    }
  }

  toggleTitleColor = value => {
    this.props.searchService(value);
  };

  toggleRatingColor = value => {
    this.props.sortService(value);
  };

  submit = () => {
    var text = document.getElementById("text").value;
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
            placeholder={this.props.query ? this.props.query : "Search..."}
          />
          <div className="buttons-movies-result-container">
            <div className="buttons-container">
              <span className="desc">SEARCH BY</span>
              <div className="buttons-position">
                <button
                  id="btn_title"
                  onClick={() => this.toggleTitleColor("title")}
                  className={classnames({
                    "btn-red": this.props.searching === "title",
                    "btn-gray": this.props.searching === "genres"
                  })}
                >
                  TITLE
                </button>
                <button
                  id="btn_genre"
                  onClick={() => this.toggleTitleColor("genres")}
                  className={classnames({
                    "btn-gray": this.props.searching === "title",
                    "btn-red": this.props.searching === "genres"
                  })}
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
                  onClick={() => this.toggleRatingColor("release_date")}
                  className={classnames({
                    "btn-red": this.props.sorting === "release_date",
                    "btn-gray": this.props.sorting === "vote_average"
                  })}
                >
                  RELEASE DATE
                </button>
                <button
                  id="btn_rating"
                  onClick={() => this.toggleRatingColor("vote_average")}
                  className={classnames({
                    "btn-gray": this.props.sorting === "release_date",
                    "btn-red": this.props.sorting === "vote_average"
                  })}
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

const mapDispatchToProps = dispatch => ({
  sortService: sort_by => dispatch(sortMoviesSuccess(sort_by)),
  searchService: (search_by, query) =>
    dispatch(searchMoviesSuccess(search_by, query))
});

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  sorting: state.searchContainer.sort_by,
  searching: state.searchContainer.search_by,
  query: state.searchContainer.query
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchContainer)
);
