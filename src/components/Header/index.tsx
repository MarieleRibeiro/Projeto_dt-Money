import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
} // essa função não vai receber nenhum parametro e não vai devolver nenhum retorno

// agora meu header esta falando que recebe uma propriedade chamada onOpenNewTransactionModal ele repassa essa propriedade para o botão
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
// sempre que estiver usando typescript é bom definir uma interface para definir quais são as propriedades que o meu componente vai receber
// quando é um compßonente que recebe uma função é bom começar com on
