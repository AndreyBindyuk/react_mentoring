import React from 'react';
import MovieItem from './MovieItem';
class MovieItemList extends React.Component{
    render(){
        return(
            <div>
            <h1>MovieItemList Component</h1>
            <MovieItem />
            </div>
        );
    }
}

export default MovieItemList;