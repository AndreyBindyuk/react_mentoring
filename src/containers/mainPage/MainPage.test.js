import React from 'react';
import { shallow } from 'enzyme';
import MainPage  from './MainPage';

describe('<MainPage />', () => {
    it('render internal components correctly', () => {  
        const ModalTriggerComponent = shallow(<MainPage />);
        expect(ModalTriggerComponent).toMatchSnapshot();
    });
});