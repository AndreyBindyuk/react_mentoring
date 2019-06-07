import React from "react";
import SearchContainer from "../searchContainer/SearchContainer";
import MovieItemList from "../movieList/MovieItemList";
import Footer from "../../shared/footer/Footer";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <MovieItemList />
        <Footer />
      </div>
    );
  }
}

export default MainPage;
