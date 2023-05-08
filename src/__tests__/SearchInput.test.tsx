import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInput from '../components/SearchInput/SearchInput';

test('renders search input with a placeholder', () => {
  const placeholderText = 'Search for zrzutka';
  const { getByPlaceholderText } = render(
    <SearchInput value="" onChange={() => {}} />
  );
  const searchInput = getByPlaceholderText(placeholderText);
  expect(searchInput).toBeInTheDocument();
});
