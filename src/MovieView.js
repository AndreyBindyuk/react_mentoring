import React from 'react';
import MovieDescription from "./movieItemImpl/MovieDescription"
import MovieItemList from './movieItemImpl/MovieItemList';
import Footer  from './frameImpl/Footer';

class MovieView extends React.Component{
    render(){
        return(
            <div>
            <MovieDescription />
            <MovieItemList />
            <Footer />
            </div>
        );
    }
}

export default MovieView;