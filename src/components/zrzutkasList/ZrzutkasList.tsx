import React from 'react';
import { Container } from './ZrzutkasList.styled';
import { ZrzutkaItem } from '../zrzutkaItem/ZrzutkaItem';
import { Zrzutka } from '../../lib/types/zrzutka';

type Props = {
  searchedZrzutkasList: Zrzutka[];
};

export const ZrzutkasList: React.FC<Props> = ({ searchedZrzutkasList }) => {
  return (
    <>
      <Container>
        {searchedZrzutkasList &&
          searchedZrzutkasList.map((zrzutka) => (
            <ZrzutkaItem key={zrzutka.id} zrzutka={zrzutka} />
          ))}
      </Container>
    </>
  );
};
