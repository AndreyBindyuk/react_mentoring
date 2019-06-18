import React from "react";
import "./Search.css";
import MovieStub from "../../MovieStub.json";
import { searchContainerService } from "./SearchContainerService";
import { connect } from "react-redux";

class SearchContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search_by: "title",
  //     sort_by: "release_date"
  //   };
  // }

  // componentDidUpdate(prevProps, prevState){
  //   const sort_by = this.state.sort_by
  //   if(prevState.sort_by !== sort_by){
  //     this.props.sortMovies(sort_by)
  //   }
  // }


  // toggleTitleColor = event => {
  //   if (event.target.id == "btn_genre" && this.state.search_by == "title") {
  //     this.setState({ search_by: "genre" });
  //   } else if (
  //     event.target.id == "btn_title" &&
  //     this.state.search_by == "genre"
  //   ) {
  //     this.setState({ search_by: "title" });
  //   }
  // };

  // toggleRatingColor = event => {
  //   if (event.target.id == "btn_rating" && this.state.sort_by == "release_date") {
  //     this.setState({ sort_by: "vote_average" });
  //   } else if (
  //     event.target.id == "btn_release" &&
  //     this.state.sort_by == "vote_average"
  //   ) {
  //     this.setState({ sort_by: "release_date" });
  //   }
  // };

  toggleTitleColor = event => {
    if (event.target.id == "btn_genre" && this.props.searching == "title") {
      this.props.searchContainer("genre");
    } else if (
      event.target.id == "btn_title" &&
      this.props.searching == "genre"
    ) {
      this.props.searchContainer("title");
    }
  };

  toggleRatingColor = event => {
    if (event.target.id == "btn_rating" && this.props.sorting == "release_date") {
      this.props.searchContainer("vote_average");
    } else if (
      event.target.id == "btn_release" &&
      this.props.sorting == "vote_average"
    ) {
      this.props.searchContainer("release_date");
    }
  };

  render() {
    return (
      <div className="search-container">
        <div className="input-button-container">
          <input
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
                    this.props.sorting == "release_date" ? "btn-red" : "btn-gray"
                  }
                >
                  RELEASE DATE
                </button>
                <button
                  id="btn_rating"
                  onClick={this.toggleRatingColor}
                  className={
                    this.props.sorting == "release_date" ? "btn-gray" : "btn-red"
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
              <button className="btn-search">SEARCH</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchContainer: searchContainerService
};

const mapStateToProps = state => ({
  movies: state.movieList.movies,
  sorting: state.searchContainer.sort_by,
  searching: state.searchContainer.search_by
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
