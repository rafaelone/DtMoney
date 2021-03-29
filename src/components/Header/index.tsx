import { useCallback, useState } from "react";
import Modal from "react-modal"
import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";



export function Header({ onOpenNewTransactionModal }: IHeaderProps){
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}