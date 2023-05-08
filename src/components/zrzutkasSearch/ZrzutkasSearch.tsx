import React, { useState, useCallback, useEffect } from 'react';
import { searchZrzutkas } from '../../lib/api/search';
import { useDebounceMinCharacters } from '../../lib/hooks/debounce';
import { Container, ZrzutkasInfo } from './ZrzutkasSearch.styled';
import { Zrzutka } from '../../lib/types/zrzutka';
import { ZrzutkasList } from '../zrzutkasList/ZrzutkasList';
import Loader from '../loader/Loader';
import SearchInput from '../SearchInput/SearchInput';
import Pagination from '../pagination/Pagination';

const SEARCH_MIN_CHARACTERS = 2;

const ZrzutkasSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedZrzutkas, setSearchedZrzutkas] = useState<Zrzutka[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState(false);

  const deferredSearchPhrase = useDebounceMinCharacters(
    searchQuery,
    500,
    SEARCH_MIN_CHARACTERS
  );

  const debouncedSearch = useCallback(() => {
    if (deferredSearchPhrase) {
      setIsLoading(true);
      setIsData(false);
      setSearchedZrzutkas([]);
      searchZrzutkas(deferredSearchPhrase, currentPage)
        .then((data) => {
          setSearchedZrzutkas(data);
          setIsData(data.length > 0);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [deferredSearchPhrase, currentPage]);

  useEffect(() => {
    debouncedSearch();
  }, [debouncedSearch, deferredSearchPhrase, currentPage]);

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchQuery(query);
    },
    []
  );

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, []);

  return (
    <Container>
      <SearchInput value={searchQuery} onChange={handleSearchQueryChange} />
      {isLoading && <Loader />}
      {isData && (
        <>
          <ZrzutkasList searchedZrzutkasList={searchedZrzutkas} />
          <Pagination
            currentPage={currentPage}
            searchedZrzutkas={searchedZrzutkas}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </>
      )}
      {!isLoading && !searchedZrzutkas.length && searchQuery && (
        <ZrzutkasInfo>No data to show</ZrzutkasInfo>
      )}
      {!isData && !searchQuery && (
        <ZrzutkasInfo>Use the force Luke! Input i meant</ZrzutkasInfo>
      )}
    </Container>
  );
};

export default ZrzutkasSearch;
