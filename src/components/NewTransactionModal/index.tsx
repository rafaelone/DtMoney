import Modal from "react-modal"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, TransasctionTypeContainer, RadioBox } from "./styles"

import closeImage from "../../assets/close.svg"
import { useState } from "react"

export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps){
  
  const [ type, setType ] = useState('deposit')
  console.log(type)
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImage} alt="Fechar modal"/>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título"/>
        <input type="number" placeholder="Valor"/>
        <TransasctionTypeContainer>
          <RadioBox 
            type="button" 
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => { setType('deposit') }}>
              <img src={incomeImg} alt="Entrada"/>
              <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button" 
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => { setType('withdraw') }}>
              <img src={outcomeImg} alt="Saída"/>
              <span>Saída</span>
          </RadioBox>
        </TransasctionTypeContainer>

        <input type="text" placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}