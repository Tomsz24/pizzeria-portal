import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

it('render without crashing', () => {
  shallow(<App />);
});
