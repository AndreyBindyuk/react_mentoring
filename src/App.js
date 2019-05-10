import React from 'react';
import MovieView  from './MovieView';
import MainPage  from './MainPage';
import ErrorBoundary  from './errorImpl/ErrorBoundary';
import mainLogo from './images/logo.png';
import "./css/App.css";

class App extends React.Component{
    render(){
        return(
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