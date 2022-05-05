import logImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenTransactionModal: () => void;
  transactionModalTitleNewTransaction: () => void;
}

export function Header({ onOpenTransactionModal, transactionModalTitleNewTransaction }: HeaderProps ) {

  return (
    <Container>
      <Content>
        <img src={logImg} alt="dtmoney" />
        <button type="button" onClick={() => { onOpenTransactionModal(); transactionModalTitleNewTransaction(); }}>
          Nova Transação
        </button>
      </Content>
    </Container>

  )
}