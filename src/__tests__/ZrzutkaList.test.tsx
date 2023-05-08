import React from 'react';
import { render, screen } from '@testing-library/react';
import { ZrzutkasList } from '../components/zrzutkasList/ZrzutkasList';
import { Zrzutka } from '../lib/types/zrzutka';

const mockedZrzutkas: Zrzutka[] = [
  {
    id: '1',
    url: 'some url',
    coverUrl: 'some other url',
    currency: {
      unitSymbol: 'zł',
    },
    subject: {
      pl: 'Test Zrzutka 1',
    },
    balance: 100,
  },
  {
    id: '2',
    url: 'some url',
    coverUrl: 'some other url',
    currency: {
      unitSymbol: 'zł',
    },
    subject: {
      pl: 'Test Zrzutka 2',
    },
    balance: 100,
  },
];

describe('ZrzutkasList', () => {
  it('renders the list of zrzutkas', () => {
    render(<ZrzutkasList searchedZrzutkasList={mockedZrzutkas} />);
    const zrzutkaElements = screen.getAllByRole('article');
    expect(zrzutkaElements).toHaveLength(2);
  });

  it('renders the zrzutka details', () => {
    render(<ZrzutkasList searchedZrzutkasList={mockedZrzutkas} />);
    const zrzutkaNameElements = screen.getAllByText('Test Zrzutka 1');
    expect(zrzutkaNameElements).toHaveLength(1);
    const zrzutkaBalanceElements = screen.getAllByText('Test Zrzutka 2');
    expect(zrzutkaBalanceElements).toHaveLength(1);
  });
});
