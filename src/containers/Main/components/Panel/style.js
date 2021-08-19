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

  @media (max-width: 400px) {
    flex-direction: column;

    .pt-2 {
      div {
        width: 100%;
      }
    }

    button {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export const ItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 9.375rem;
`;
