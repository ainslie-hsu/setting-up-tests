import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './react';

describe('App', () => {
  test('has hello world', () => {
    // If you don't need componentDidMount
    const wrapApp = shallow(<App text="Mondays" />);

    expect(wrapApp.contains('Mondays')).toBe(true);
  });

  test('mounted', () => {
    // If you need componendDidMount
    const wrapApp = mount(<App text="Mondays" />);

    expect(wrapApp.state().onMount).toBe(true);

    // Change state
    wrapApp.setState({
      text: 'Hello!!',
    });

    expect(wrapApp.contains('Hello!!')).toBe(true);
  });

  test('prop', () => {
    const wrapApp = mount(<App text="Mondays" />);

    expect(wrapApp.props().text).toEqual('Mondays');
  });
});

// shallow: non-lifecycle methods (stateful and stateless)
// mount: lifecycle methods
