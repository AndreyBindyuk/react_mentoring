import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { MovieSingleView } from './MovieSingleView';

const mockStore = configureMockStore();
const store = mockStore({});

function setup() {
  const props = {
    movies: [],
    error: '',
    movie: {},
    fetchMovie: jest.fn(),
  };
  const enzymeWrapper = shallow(<MovieSingleView {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('<MovieSingleView />', () => {
  it('should render components correctly', () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
