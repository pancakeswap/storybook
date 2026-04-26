export interface WalletAvatarProps {
  /** Wallet address (full hex string) */
  address: string;
  /** Avatar image URL (e.g. pixel art profile picture). Falls back to PixelAvatarIcon if omitted. */
  avatarUrl?: string;
  /** Wallet provider icon URL (e.g. MetaMask fox) */
  walletIconUrl?: string;
  /** Avatar diameter in px. Default 40 */
  size?: number;
  /** Address font size in px. Default 32 */
  fontSize?: number;
  /** Callback when copy button is clicked. If omitted, uses navigator.clipboard */
  onCopy?: (address: string) => void;
}
