import React from 'react';
import { shallow } from 'enzyme';
import { SearchContainer } from './SearchContainer';

function setup() {
  const props = {
    searchService: jest.fn(),
    sortService: jest.fn(),
    movies: jest.fn(),
    sorting: 'release_date',
    searching: 'title',
  };
  const enzymeWrapper = shallow(<SearchContainer {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('<SearchContainer />', () => {
  it('should render components correctly', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper).toMatchSnapshot();
  });

  it('should call toggleTitleColor', () => {
    const { enzymeWrapper } = setup();
    enzymeWrapper.instance().toggleTitleColor = jest.fn();
    enzymeWrapper.instance().forceUpdate();
    enzymeWrapper.update();
    const mockedEvent = { target: {} };
    enzymeWrapper
      .find('button#btn_genre')
      .first()
      .simulate('click', mockedEvent);
    expect(enzymeWrapper.instance().toggleTitleColor).toHaveBeenCalled();
  });

  it('should call searchService if search_by=title and btn=btn_genre', () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.instance().toggleTitleColor = jest.fn();
    const mockedEvent = { target: { id: 'btn_genre' } };
    enzymeWrapper.find('button#btn_genre').simulate('click', mockedEvent);
    expect(props.searchService).toBeCalled();
  });

  it('should call searchService if search_by=genres and btn=btn_title', () => {
    const { props } = setup();
    props.searching = 'genres';
    const enzymeWrapper = shallow(<SearchContainer {...props} />);
    enzymeWrapper.instance().toggleTitleColor = jest.fn();
    const mockedEvent = { target: { id: 'btn_title' } };
    enzymeWrapper.find('button#btn_title').simulate('click', mockedEvent);
    expect(props.searchService).toBeCalled();
  });

  it('should call sortService if sort_by=release_date and btn=btn_rating', () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.instance().toggleRatingColor = jest.fn();
    const mockedEvent = { target: { id: 'btn_rating' } };
    enzymeWrapper.find('button#btn_rating').simulate('click', mockedEvent);
    expect(props.sortService).toBeCalled();
  });

  it('should call sortService if sort_by=vote_average and btn=btn_release', () => {
    const { props } = setup();
    props.sorting = 'vote_average';
    const enzymeWrapper = shallow(<SearchContainer {...props} />);
    enzymeWrapper.instance().toggleRatingColor = jest.fn();
    const mockedEvent = { target: { id: 'btn_release' } };
    enzymeWrapper.find('button#btn_release').simulate('click', mockedEvent);
    expect(props.sortService).toBeCalled();
  });
});
