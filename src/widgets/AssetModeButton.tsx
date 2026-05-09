import React from 'react'
import { styled } from 'styled-components'
import type { AssetMode } from './AssetModeModal'

export interface AssetModeButtonProps {
  /** Current account-wide mode. The label flips between Single/Multi. */
  mode: AssetMode
  /** Click → consumer opens the AssetModeModal. */
  onClick: () => void
  /** Disabled while the consumer is in flight or auth isn't ready. */
  disabled?: boolean
  /** Optional translator. */
  t?: (key: string) => string
}

const Pill = styled.button`
  flex: 1;
  background: ${({ theme }) => theme.colors.input};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  padding: 4px 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.12s;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    filter: brightness(1.08);
  }
`

const identity = (s: string) => s

/**
 * Trigger pill for the AssetModeModal. Standalone widget so consumers
 * can drop it into the OrderForm pills row (via `extraControls`), the
 * AccountPanel footer, or any other surface — independent of the modal
 * itself. Visual matches the Cross/Isolated + Leverage pills the
 * OrderForm already renders.
 */
export const AssetModeButton: React.FC<AssetModeButtonProps> = ({ mode, onClick, disabled, t = identity }) => (
  <Pill type="button" onClick={onClick} disabled={disabled} title={t('Asset mode')}>
    {mode === 'MULTI' ? t('Multi') : t('Single')}
  </Pill>
)
