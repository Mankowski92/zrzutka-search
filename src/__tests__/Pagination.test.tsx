import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../components/pagination/Pagination';
import { Zrzutka } from '../lib/types/zrzutka';

const mockZrzutkas: Zrzutka[] = [
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
      pl: 'Test Zrzutka 1',
    },
    balance: 100,
  },
];

describe('Pagination', () => {
  it('should render Previous and Next buttons and current page number', () => {
    const handlePrevPage = jest.fn();
    const handleNextPage = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={1}
        searchedZrzutkas={mockZrzutkas}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    );
    const prevButton = getByText('Previous');
    const nextButton = getByText('Next');
    const pageIndicator = getByText('Page 1');
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageIndicator).toBeInTheDocument();
  });

  it('should call handlePrevPage when Previous button is clicked', () => {
    const handlePrevPage = jest.fn();
    const handleNextPage = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={2}
        searchedZrzutkas={mockZrzutkas}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    );
    const prevButton = getByText('Previous');
    fireEvent.click(prevButton);
    expect(handlePrevPage).toHaveBeenCalled();
  });

  it('should call handleNextPage when Next button is clicked', () => {
    const handlePrevPage = jest.fn();
    const handleNextPage = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={1}
        searchedZrzutkas={mockZrzutkas}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    );
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    expect(handleNextPage).toHaveBeenCalled();
  });

  it('should disable Previous button when current page is the first page', () => {
    const handlePrevPage = jest.fn();
    const handleNextPage = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={1}
        searchedZrzutkas={mockZrzutkas}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    );
    const prevButton = getByText('Previous');
    expect(prevButton).toBeDisabled();
  });

  it('should disable Next button when there are no searched zrzutkas on current page', () => {
    const handlePrevPage = jest.fn();
    const handleNextPage = jest.fn();
    const { getByText } = render(
      <Pagination
        currentPage={2}
        searchedZrzutkas={[]}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    );
    const nextButton = getByText('Next');
    expect(nextButton).toBeDisabled();
  });
});
