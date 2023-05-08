import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/header/Header';

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Header />);
    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the logo and text', () => {
    const { getByText, getByAltText } = render(<Header />);
    const logoTextElement = getByText('Zrzutkas search');
    const piggyBankLogoElement = getByAltText('piggy logo');
    expect(logoTextElement).toBeInTheDocument();
    expect(piggyBankLogoElement).toBeInTheDocument();
  });
});
