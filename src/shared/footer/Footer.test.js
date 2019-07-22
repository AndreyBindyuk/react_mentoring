import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('render internal components correctly', () => {
    const ModalTriggerComponent = shallow(<Footer />);
    expect(ModalTriggerComponent).toMatchSnapshot();
  });
});
