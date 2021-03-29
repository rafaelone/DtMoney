import { FormEvent, useCallback, useState } from "react"
import Modal from "react-modal"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, TransasctionTypeContainer, RadioBox } from "./styles"

import closeImage from "../../assets/close.svg"
import { api } from "../../services/api"


export function NewTransactionModal({ isOpen, onRequestClose }: INewTransactionModalProps){
  
  const [ type, setType ] = useState('deposit');
  const [ title, setTitle ] = useState('');
  const [ value, setValue ] = useState(0);
  const [ category, setCategory ] = useState('');
  
  const handleCreateNewTransaction = useCallback((event: FormEvent) => {
    event.preventDefault();

    const data  = { 
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)

  }, [title, value, type, category]);

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={e => setTitle(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Valor"
          value={value} 
          onChange={e => setValue(Number(e.target.value))}
        />
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

        <input 
          type="text" 
          placeholder="Categoria"
          value={category} 
          onChange={e => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}