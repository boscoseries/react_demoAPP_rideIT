import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Homepage from '../Pages/Homepage';

test('<Homepage />', () => {
  const wrapper = render(<Homepage />);
  // wrapper.debug()
  expect(wrapper.getByText("Let's Get you on your way").tagName).toBe('H1');
});
