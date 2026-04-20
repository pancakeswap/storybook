import { styled } from "styled-components";
import { Text } from "../../components";
import TokenLogo from "./TokenLogo";
import type { TokenDisplayProps } from "./types";

const TOKEN_CHAIN_RATIO = 0.4167;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoContainer = styled.div<{ $size: number }>`
  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
`;

const InnerBorder = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`;

const ChainBadge = styled.div<{ $badgeSize: number }>`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: ${({ $badgeSize }) => $badgeSize}px;
  height: ${({ $badgeSize }) => $badgeSize}px;
  border-radius: 35%;
  background: ${({ theme }) => theme.colors.card};
  border: 2px solid ${({ theme }) => theme.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ChainImg = styled.img<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 35%;
`;

const InfoStack = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export default function TokenDisplay({ token, size = 40, showChainLogo }: TokenDisplayProps) {
  const badgeSize = Math.round(size * TOKEN_CHAIN_RATIO);
  const showBadge = showChainLogo ?? !!token.chainLogoUrl;

  return (
    <Container>
      <LogoContainer $size={size}>
        <TokenLogo
          srcs={token.logoUrls}
          size={`${size}px`}
          alt={`${token.symbol} logo`}
        />
        <InnerBorder />
        {showBadge && token.chainLogoUrl && (
          <ChainBadge $badgeSize={badgeSize}>
            <ChainImg
              src={token.chainLogoUrl}
              alt={token.chainName ?? "chain"}
              $size={Math.round(badgeSize * 0.667)}
            />
          </ChainBadge>
        )}
      </LogoContainer>
      <InfoStack>
        <Text bold fontSize="16px" ellipsis>
          {token.symbol}
        </Text>
        {token.chainName && (
          <Text
            fontSize="12px"
            color="textSubtle"
            bold
            textTransform="uppercase"
            ellipsis
            style={{ letterSpacing: "0.24px" }}
          >
            {token.chainName}
          </Text>
        )}
      </InfoStack>
    </Container>
  );
}
