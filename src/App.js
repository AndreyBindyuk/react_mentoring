import React from 'react';
import Header  from './frameImpl/Header';
import Body  from './frameImpl/Body';
import Footer  from './frameImpl/Footer';

class App extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Body />
            <Footer />
            </div>
        );
    }
}

export default App;