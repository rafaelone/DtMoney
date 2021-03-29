interface IHeaderProps {
  onOpenNewTransactionModal: () => void;
}

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface IRadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}