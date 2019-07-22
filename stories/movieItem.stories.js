import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from './Provider';
import MovieItem from '../src/shared/movieItem/MovieItem';

const movie = {
  id: '1',
  title: 'Jurassic World',
  release_date: '2018',
  genres: 'fantasy',
  poster_path: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
};

storiesOf('MovieItem', module).addDecorator(story => <Provider story={story()} />).add('MovieItem', () => (
  <MovieItem movie={movie} />
));