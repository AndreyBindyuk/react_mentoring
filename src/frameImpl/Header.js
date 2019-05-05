import React from 'react';
import SearchContainer from "../searchImpl/SearchContainer";
import MovieDescription from "../movieItemImpl/MovieDescription"

class Header extends React.Component{
    render(){
        return(
            <div>
            <SearchContainer />
            {/* <MovieDescription /> */}
            </div>
        );
    }
}

export default Header;