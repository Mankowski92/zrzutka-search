import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ZrzutkaItem } from '../components/zrzutkaItem/ZrzutkaItem';

const zrzutka = {
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
};

describe('ZrzutkaItem', () => {
  test('renders zrzutka item with correct data', () => {
    render(<ZrzutkaItem zrzutka={zrzutka} />);

    const zrzutkaName = screen.getByText(zrzutka.subject.pl);
    const zrzutkaBalance = screen.getByText(
      `Zebrano: ${zrzutka.balance} ${zrzutka.currency.unitSymbol}`
    );
    const zrzutkaImage = screen.getByAltText(zrzutka.subject.pl);

    expect(zrzutkaName).toBeInTheDocument();
    expect(zrzutkaBalance).toBeInTheDocument();
    expect(zrzutkaImage).toBeInTheDocument();
    expect(zrzutkaImage).toHaveAttribute('src', zrzutka.coverUrl);
  });
});
