import React from 'react';
import "../css/Search.css";
import mainLogo from '../movie_pic.png';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: true
        }
    }

    changeColor(params) {
        if(document.getElementById(params).style.backgroundColor == "red"){
            return
        } else{
            this.setState({ red: !this.state.red })
        }
    }

    render() {
        
        let btn_title = this.state.red ? "red" : "";
        let btn_genre = this.state.red ? "" : "red";
        return (
            <div className="search-container">
                <img className="logo-container" src={mainLogo} />
                <div className="input-button-container">
                    <input className="input-container" type="input" />
                    <div className="buttons-container">
                        <div className="title-genre-button-container">
                            <button id="btn_title" onClick={this.changeColor.bind(this,"btn_title")} style={{backgroundColor: btn_title}}>
                                <span>TITLE</span>
                            </button>
                            <button id="btn_genre" onClick={this.changeColor.bind(this,"btn_genre")} style={{backgroundColor: btn_genre}}>
                                <span>GENRE</span>
                            </button>
                        </div>
                        <button><span>SEARCH</span></button>
                    </div>
                </div>
            </div>
        );
    }
}

class Button extends React.Component {   
    constructor(){
    super(); 
    this.state = {
        color_black: true,
      }
    }
    changeColor(){
            this.setState({color_black: !this.state.color_black})
    }
        render(){
        let bgColor = this.state.color_black ? this.props.color : this.props.color2
        return (
        <div>
            <button style={{backgroundColor: bgColor}} onClick={this.changeColor.bind(this)}>Button1</button>
        </div>
      )
    }
}

export default SearchContainer;