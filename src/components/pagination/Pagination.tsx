import React, { useCallback } from 'react';
import {
  PaginationContainer,
  PaginationButton,
  PageIndicator,
  PaginationButtonWrapper,
} from './Pagination.styled';
import { Zrzutka } from '../../lib/types/zrzutka';

interface PaginationProps {
  currentPage: number;
  searchedZrzutkas: Zrzutka[];
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  searchedZrzutkas,
  handlePrevPage,
  handleNextPage,
}) => {
  const handlePrevButtonClick = useCallback(() => {
    handlePrevPage();
  }, [handlePrevPage]);

  const handleNextButtonClick = useCallback(() => {
    handleNextPage();
  }, [handleNextPage]);

  return (
    <PaginationContainer>
      <PaginationButtonWrapper>
        <PaginationButton
          onClick={handlePrevButtonClick}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          onClick={handleNextButtonClick}
          disabled={searchedZrzutkas && searchedZrzutkas.length === 0}
        >
          Next
        </PaginationButton>
      </PaginationButtonWrapper>
      <PageIndicator>{`Page ${currentPage}`}</PageIndicator>
    </PaginationContainer>
  );
};

export default Pagination;
