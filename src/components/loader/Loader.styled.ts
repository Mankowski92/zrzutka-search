import styled, { keyframes } from 'styled-components';
import { COLOR_GREY_TERTIARY, COLOR_PINK } from '../../styles/tokens/colors';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
`;

export const LoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIndicator = styled.div`
  border: 4px solid ${COLOR_GREY_TERTIARY};
  border-top: 4px solid ${COLOR_PINK};
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: ${LoaderAnimation} 2s linear infinite;
`;
