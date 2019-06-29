import React from "react";
import MovieSingleView from "../movieSingleView/MovieSingleView";
import MovieItemList from "../movieList/MovieItemList";
import Footer from "../../shared/footer/Footer";
import { withRouter } from "react-router-dom";

class MovieView extends React.Component {
  render() {
    return (
      <div>
        <MovieSingleView />
        <MovieItemList />
        <Footer />
      </div>
    );
  }
}

export default withRouter(MovieView);
