import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
  );


export function TransactionsProvider({children}: ITransactionsProviderProps){
  const [ transactions, setTransactions ] = useState<ITransaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        setTransactions(response.data.transactions)
      })
  }, []);

  const createTransaction = useCallback(async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);

  }, [transactions]);


  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}