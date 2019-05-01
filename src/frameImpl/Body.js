import React from 'react';
import MovieItemList from '../movieItemImpl/MovieItemList';
class Body extends React.Component{
    render(){
        return(
            <div>
            <h1>Body Component</h1>
            <MovieItemList />
            </div>
        );
    }
}

export default Body;