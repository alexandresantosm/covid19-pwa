import styled from "styled-components";
import { CardContent } from "components";

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 1.5625rem;

  .updatedAt {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 9.375rem;
`;
