import React from 'react';
import SearchButton from './SearchButton';
import SearchField from './SearchField';
import SearchFilter from './SearchFilter';

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