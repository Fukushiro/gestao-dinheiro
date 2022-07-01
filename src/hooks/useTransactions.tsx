import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionsContextData {
  transactions: TransactionData[];
  createTransaction: (transaction: TransactionInput) => void;
}
interface TransactionData {
  title: string;
  type: "deposit" | "withdraw";
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<TransactionData, "createdAt">;

interface TransactionProviderProps {
  children?: any;
}
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider(props: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  useEffect(() => {
    (async () => {
      const response = await api.get("transactions");
      console.log(response.data);

      setTransactions(response.data.transactions);
    })();
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: transactions,
        createTransaction: createTransaction,
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
