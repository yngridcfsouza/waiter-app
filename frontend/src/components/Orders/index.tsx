import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import { Check, Clock, CookingPot } from "lucide-react";

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon={<Clock />}
        title="Fila de espera"
        orders={[]}
      />

      <OrdersBoard
        icon={<CookingPot />}
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon={<Check />}
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
