import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

import engineImg from '../../assets/engine.svg';

interface transactionTableProps {
  onOpenTransactionModal: () => void;
  transactionModalTitleUpdateTransaction: () => void;
}

export function TransactionsTable({ onOpenTransactionModal, transactionModalTitleUpdateTransaction }: transactionTableProps) {
  const { transactions } = useTransactions();
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}  
              </td>
              <button type="button" className="edit" onClick={() => { onOpenTransactionModal(); transactionModalTitleUpdateTransaction(); }}>
                <img src={engineImg} alt="Editar" />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );

}