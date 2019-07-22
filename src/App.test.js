import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const ModalTriggerComponent = shallow(<App />);
    expect(ModalTriggerComponent).toMatchSnapshot();
  });
});
