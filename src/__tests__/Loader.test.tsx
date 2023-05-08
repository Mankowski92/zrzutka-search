import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../components/loader/Loader';

describe('Loader', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('displays loading indicator', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader')).toContainElement(
      getByTestId('loading-indicator')
    );
  });
});
