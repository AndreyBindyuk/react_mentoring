import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from './Provider';
import MovieList from '../src/containers/movieList/MovieItemList';

storiesOf('MovieList', module).addDecorator(story => <Provider story={story()} />).add('MovieList', () => (
<MovieList />
))