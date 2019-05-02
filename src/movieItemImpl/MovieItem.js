import React from 'react';

class MovieItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <table width="150" key={this.props.movie.id}>
        <tbody>
            <tr>
                <td>
                    <img width="200%" alt="poster" src={this.props.movie.poster_src}/>
                </td>
            </tr>
            <tr>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.date}</td>
            </tr>
            <tr>
                <td>{this.props.movie.genre}</td>
            </tr>
        </tbody>
    </table>
    }
}

export default MovieItem;