import React from "react";
import MovieItem from "./MovieItem";
class MovieItemList extends React.Component {
  constructor(props) {
    super(props);
    const movies = [
      {
        id: 0,
        poster_src:
          "https://st.kp.yandex.net/images/film_iphone/iphone360_843650.jpg",
        title: "Мстители: Финал",
        date: "2019",
        genre: "фэнтези"
      },
      {
        id: 1,
        poster_src:
          "https://st.kp.yandex.net/images/film_iphone/iphone360_843649.jpg",
        title: "Мстители: Война бесконечности",
        date: "2019",
        genre: "фэнтези"
      }
      ,
      {
        id: 2,
        poster_src:
          "https://st.kp.yandex.net/images/film_iphone/iphone360_843649.jpg",
        title: "Мстители: Война бесконечности",
        date: "2019",
        genre: "фэнтези"
      }
      ,
      {
        id: 3,
        poster_src:
          "https://st.kp.yandex.net/images/film_iphone/iphone360_843649.jpg",
        title: "Мстители: Война бесконечности",
        date: "2019",
        genre: "фэнтези"
      }
    ];

    this.state = {rows: this.iterateData(movies)};
    this.createTable();
  }

  iterateData(array) {
    var movieRows = [];
    array.forEach(movie => {
      const movieRow = <MovieItem key={movie.id} movie={movie} />;
      movieRows.push(movieRow);
    });
    return movieRows;
  }

  createTable(){
    let table = [];
    let columns = [];
    let rows = [];
    for(var i = 0; i < this.state.rows.length; i++){
    if(i % 3 == 0) {
      rows.push(<tr>{columns}</tr>);
      columns = [];
    }
    columns.push(<td>{this.state.rows[i]}</td>)
  }
    rows.push(<tr>{columns}</tr>)
    table.push(<tbody>{rows}</tbody>);
    return table;
  };




  render() {
    return (
      <table>
        {this.createTable()}
      </table>
    );
  }
}

export default MovieItemList;
