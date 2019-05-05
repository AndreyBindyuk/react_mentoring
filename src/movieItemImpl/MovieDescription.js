import React from 'react';
import "../css/MovieDescription.css";

class MovieDescription extends React.Component {
    render() {
        return <div className="movie-description-container">
            <img className="movie-image" alt="poster"
                src="https://st.kp.yandex.net/images/film_iphone/iphone360_843650.jpg" />
            <div className="movie-info-container">
                <button className="search">
                    <span>SEARCH</span>
                </button>
                <div className="movie-details">
                    <div className="movie-name-rating">
                        <h3>Мстители: Финал</h3>
                        <h3>7.8</h3>
                    </div>
                    <h3>Победитель премии Оскар</h3>
                    <div className="movie-date">
                        <h3>2019</h3>
                        <h3>180 min</h3>
                    </div>
                </div>
                <div className="movie-text">
                    asdasd asd asd as asd as as das as asd
                    asqwe qweqw asda qwe qw asd asd asqwe asd
                </div>
            </div>
        </div>
    }
}

export default MovieDescription;