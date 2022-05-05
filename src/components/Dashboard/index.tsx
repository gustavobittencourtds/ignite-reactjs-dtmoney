import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

interface DashboardProps {
  onOpenTransactionModal: () => void;
  transactionModalTitleUpdateTransaction: () => void;
}

export function Dashboard({ onOpenTransactionModal, transactionModalTitleUpdateTransaction }: DashboardProps) {
  return (
    <Container>
      <Summary />
      <TransactionsTable
        onOpenTransactionModal={onOpenTransactionModal}
        transactionModalTitleUpdateTransaction={transactionModalTitleUpdateTransaction}
      />
    </Container>
  );
}