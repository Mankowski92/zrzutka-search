import React, { useCallback } from 'react';
import { Zrzutka } from '../../lib/types/zrzutka';

import {
  Container,
  DetailsWrapper,
  ZrzutkaBalance,
  ZrzutkaImage,
  ZrzutkaName,
} from './ZrzutkaItem.styled';

type ZrzutkaItemProps = {
  zrzutka: Zrzutka;
};

export const ZrzutkaItem = ({ zrzutka }: ZrzutkaItemProps) => {
  const handleDirectToZrzutkaSite = useCallback(() => {
    window.location.href = `https://zrzutka.pl/${zrzutka.url}`;
  }, [zrzutka.url]);

  return (
    <Container onClick={handleDirectToZrzutkaSite}>
      <ZrzutkaImage src={zrzutka.coverUrl} alt={zrzutka.subject.pl} />
      <DetailsWrapper>
        <ZrzutkaName>{zrzutka.subject.pl}</ZrzutkaName>
        <ZrzutkaBalance>
          Zebrano: {zrzutka.balance} {zrzutka.currency.unitSymbol}
        </ZrzutkaBalance>
      </DetailsWrapper>
    </Container>
  );
};
