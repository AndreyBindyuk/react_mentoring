import React from 'react';
import MovieView  from './MovieView';
import MainPage  from './MainPage';

class App extends React.Component{
    render(){
        return(
            <div>
            <MainPage />
            {/* <MovieView /> */}
            </div>
        );
    }
}

export default App;