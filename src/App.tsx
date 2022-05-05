import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { Header } from "./components/Header";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  const [transactionModalTitle, setTransactionModalTitle] = useState('')

  function handleOpenTransactionModal() {
    setTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setTransactionModalOpen(false);
  }

  function transactionModalTitleNewTransaction () {
    setTransactionModalTitle('Cadastrar transação');
  }

  function transactionModalTitleUpdateTransaction() {
    setTransactionModalTitle('Editar ou excluir transação');
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenTransactionModal={handleOpenTransactionModal}
        transactionModalTitleNewTransaction={transactionModalTitleNewTransaction}
      />
      <Dashboard
        onOpenTransactionModal={handleOpenTransactionModal}
        transactionModalTitleUpdateTransaction={transactionModalTitleUpdateTransaction}
      />

      <TransactionModal
        isOpen={transactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
        transactionModalTitle={transactionModalTitle}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
