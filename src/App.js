import React from "react";
import MovieView from "./containers/movieView/MovieView";
import MainPage from "./containers/mainPage/MainPage";
import ErrorBoundary from "./shared/errorBoundary/ErrorBoundary";
import mainLogo from "./assets/logo.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <React.Fragment>
          <img className="logo-container" src={mainLogo} />
          <MainPage />
          {/* <MovieView /> */}
        </React.Fragment>
      </ErrorBoundary>
    );
  }
}

export default App;
