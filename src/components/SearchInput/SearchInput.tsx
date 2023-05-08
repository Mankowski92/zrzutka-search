import React from 'react';
import search from '../../assets/search.png';
import { SearchBar, SearchWrapper, SearchIcon } from './SearchInput.styled';

type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      <SearchBar
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search for zrzutka"
        id="search"
      />
      <SearchIcon src={search} alt="Search icon" />
    </SearchWrapper>
  );
};

export default SearchInput;
