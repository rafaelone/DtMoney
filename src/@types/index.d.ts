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

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}