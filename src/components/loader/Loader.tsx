import React from 'react';
import { LoaderContainer, LoadingIndicator } from './Loader.styled';

const Loader: React.FC = () => (
  <LoaderContainer data-testid="loader">
    <LoadingIndicator data-testid="loading-indicator" />
  </LoaderContainer>
);

export default Loader;
