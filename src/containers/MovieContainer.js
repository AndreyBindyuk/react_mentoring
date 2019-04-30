import React from 'react';
import Search from '../searchImpl/Search';

class MovieContainer extends React.Component{
    render(){
        return(
            <div>
            <h1>This is Movie Container</h1>
            <Search />
            </div>
        );
    }

}

export default MovieContainer;