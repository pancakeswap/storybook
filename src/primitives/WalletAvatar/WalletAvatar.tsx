import { useCallback, useState } from "react";
import { styled } from "styled-components";
import { Text } from "..";
import { CopyIcon, CheckmarkCircleFillIcon, PixelAvatarIcon } from "../Icons";
import type { WalletAvatarProps } from "./types";

function truncateAddress(address: string): string {
  if (address.length <= 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PfpContainer = styled.div<{ $size: number }>`
  position: relative;
  flex-shrink: 0;
  padding-right: 12px;
`;

const Avatar = styled.img<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  display: block;
`;

const WalletBadge = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6px 2.4px;
  box-sizing: border-box;
`;

const WalletIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const CopyButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSubtle};
  &:hover {
    opacity: 0.65;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export default function WalletAvatar({
  address,
  avatarUrl,
  walletIconUrl,
  size = 40,
  fontSize = 32,
  onCopy,
}: WalletAvatarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (onCopy) {
      onCopy(address);
    } else {
      navigator.clipboard.writeText(address);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [address, onCopy]);

  return (
    <Container>
      <PfpContainer $size={size}>
        {avatarUrl ? (
          <Avatar src={avatarUrl} alt="Wallet avatar" $size={size} />
        ) : (
          <PixelAvatarIcon size={size} aria-label="Wallet avatar" />
        )}
        {walletIconUrl && (
          <WalletBadge>
            <WalletIcon src={walletIconUrl} alt="Wallet provider" />
          </WalletBadge>
        )}
      </PfpContainer>
      <Text
        bold
        fontSize={`${fontSize}px`}
        style={{
          fontFamily: 'Kanit, sans-serif',
          lineHeight: '120%',
          letterSpacing: '-0.32px',
          fontFeatureSettings: '"liga" off',
          color: 'var(--pcs-colors-text)',
        }}
      >
        {truncateAddress(address)}
      </Text>
      <CopyButton onClick={handleCopy} aria-label="Copy address">
        {copied ? (
          <CheckmarkCircleFillIcon width="24px" height="24px" color="success" />
        ) : (
          <CopyIcon width="24px" height="24px" />
        )}
      </CopyButton>
    </Container>
  );
}
