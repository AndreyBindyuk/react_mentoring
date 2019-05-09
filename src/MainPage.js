import React from 'react';
import SearchContainer from "../searchImpl/SearchContainer";
import MovieItemList from '../movieItemImpl/MovieItemList';
import Footer  from './frameImpl/Footer';

class MainPage extends React.Component{
    render(){
        return(
            <div>
            <SearchContainer />
            <MovieItemList />
            <Footer />
            </div>
        );
    }
}

export default MainPage;