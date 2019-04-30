import React from 'react';
import MovieContainer from './containers/MovieContainer';

class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Hello React!</h1>
            <MovieContainer />
            </div>
        );
    }
}

export default App;