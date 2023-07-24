import React from 'react';
import { render,  screen } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
  it('renders a heading', () => {
    render(<Index/>)
    const heading = screen.getByRole('heading', {
      name: /Hello there, Welcome/i,
    })
    expect(heading).toBeInTheDocument()
  })
});

