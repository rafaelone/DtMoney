import Modal from "react-modal"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import { useCallback, useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root')

export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true)
  }, []);

  const handleCloseNewTransactionModal= useCallback(() => {
    setIsNewTransactionModalOpen(false)
  },[])

  return (
    <>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}

