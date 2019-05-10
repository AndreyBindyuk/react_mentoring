import React from 'react';
import MovieSingleView from "./movieItemImpl/MovieSingleView"
import MovieItemList from './movieItemImpl/MovieItemList';
import Footer  from './frameImpl/Footer';

class MovieView extends React.Component{
    render(){
        return(
            <div>
            <MovieSingleView />
            <MovieItemList />
            <Footer />
            </div>
        );
    }
}

export default MovieView;