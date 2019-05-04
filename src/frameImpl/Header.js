import React from 'react';
import SearchContainer from "../searchImpl/SearchContainer";

class Header extends React.Component{
    render(){
        return(
            <div>
            <SearchContainer />
            </div>
        );
    }
}

export default Header;