import React from 'react';
import { shallow } from 'enzyme';
import MovieView from './MovieView';

describe('<MovieView />', () => {
  it('render internal components correctly', () => {
    const ModalTriggerComponent = shallow(<MovieView />);
    expect(ModalTriggerComponent).toMatchSnapshot();
  });
});
