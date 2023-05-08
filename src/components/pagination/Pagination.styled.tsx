import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_GREY_TERTIARY,
  COLOR_WHITE,
} from '../../styles/tokens/colors';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  flex-direction: column;
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 4px;
  background-color: ${COLOR_WHITE};
  color: ${COLOR_BLACK};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLOR_GREY_TERTIARY};
    color: ${COLOR_WHITE};
  }

  &:disabled {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }
`;

export const PageIndicator = styled.span`
  color: ${COLOR_WHITE};
`;

export const PaginationButtonWrapper = styled.div`
  margin-bottom: 0.5rem;
`;
