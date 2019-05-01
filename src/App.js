import React from 'react';
import {Header, Body, Footer}  from './frameImpl/*'

class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Hello React!</h1>
            <Header />
            <Body />
            <Footer />
            </div>
        );
    }
}

export default App;