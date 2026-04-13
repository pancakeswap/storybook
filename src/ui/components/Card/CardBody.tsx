import { styled } from "styled-components";
import { space } from "styled-system";
import type { SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  padding: 24px;
  ${space}
`;

export default CardBody;
