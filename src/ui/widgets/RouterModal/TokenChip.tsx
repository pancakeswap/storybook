import { styled } from "styled-components";
import { NetworkBadgeETH, TOKENS } from "./tokens";
import type { TokenSymbol } from "./types";

interface TokenChipProps {
  token: TokenSymbol;
  size?: number;
  withChain?: boolean;
}

const TokenChipWrap = styled.div<{ $size: number }>`
  position: relative;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
`;

const ChainBadgeWrap = styled.div<{ $size: number }>`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: ${(p) => p.$size * 0.45}px;
  height: ${(p) => p.$size * 0.45}px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.card};
`;

export function TokenChip({ token, size = 32, withChain = false }: TokenChipProps) {
  const Icon = TOKENS[token];
  if (!Icon) return null;
  return (
    <TokenChipWrap $size={size}>
      <Icon size={size} />
      {withChain && (
        <ChainBadgeWrap $size={size}>
          <NetworkBadgeETH size={size * 0.42} />
        </ChainBadgeWrap>
      )}
    </TokenChipWrap>
  );
}
