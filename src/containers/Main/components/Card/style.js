import styled from "styled-components";
import { Typography, CardContent } from "../../../../components";

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`;

export const CardContentStyled = styled(CardContent)`
  border-left: 0.5rem solid ${({ color }) => color || "#5d78ff"};
`;
