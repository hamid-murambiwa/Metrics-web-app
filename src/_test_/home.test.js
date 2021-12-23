import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../pages/home';

describe('Render components', () => {
  test('render HomePage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Home /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
