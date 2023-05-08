import styled from 'styled-components';
import { COLOR_BLACK, COLOR_WHITE } from '../../styles/tokens/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR_BLACK};
  padding: 1rem 2rem;
  gap: 1rem;
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${COLOR_WHITE};
`;

export const LogoText = styled.span``;

export const PiggyBankLogo = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 2.5rem;
`;
