import React from 'react';
import {SearchButton, SearchField, SearchFilter} from './*';

class SearchContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>SearchContainer Component</h1>
                <SearchButton />
                <SearchField />
                <SearchFilter />
                </div>
        );
    }
}

export default SearchContainer;