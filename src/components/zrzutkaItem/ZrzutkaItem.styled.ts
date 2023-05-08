import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GREY_SECONDARY } from '../../styles/tokens/colors';

export const Container = styled.article`
  background-color: ${COLOR_GREY_SECONDARY};
  color: ${COLOR_WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15rem;
  max-width: 300px;
  margin: 0 auto;
`;

export const ZrzutkaImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: fill;
`;

export const DetailsWrapper = styled.div`
  height: 30%;
  margin: 0.25rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ZrzutkaName = styled.div`
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ZrzutkaBalance = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
`;
