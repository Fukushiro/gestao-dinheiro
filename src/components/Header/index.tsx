import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";
// import { Container } from './styles';
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
