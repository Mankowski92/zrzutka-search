import React from 'react';
import { Container, Logo, LogoText, PiggyBankLogo } from './Header.styled';
import piggyBankLogo from '../../assets/piggyBankLogo.png';

const Header = () => {
  return (
    <Container data-testid="header">
      <Logo>
        <LogoText>Zrzutkas search</LogoText>
        <PiggyBankLogo src={piggyBankLogo} alt="piggy logo" />
      </Logo>
    </Container>
  );
};

export default Header;
