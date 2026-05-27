import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'
import { CheckmarkIcon, CloseIcon } from '../primitives/Icons'

export interface PickerOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

export interface OptionPickerModalProps {
  title: string
  options: PickerOption[]
  /** Currently selected value (the committed one). */
  value: string
  onConfirm: (value: string) => void
  onClose: () => void
  confirmLabel?: string
  cancelLabel?: string
  t?: (k: string) => string
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.backgroundOverlay ?? 'rgba(40, 13, 95, 0.6)'};
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min(456px, 100%);
  max-height: calc(100vh - 32px);
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.card};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`

const Title = styled.h2`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.text};
`

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  min-height: 0;
  scrollbar-width: thin;
`

const OptionCard = styled.button<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  text-align: left;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.55 : 1)};
  font-family: 'Kanit', sans-serif;
`

const OptionTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

/* eslint-disable no-restricted-syntax */
const CheckBox = styled.span<{ $checked: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 8px;
  ${({ $checked, theme }) =>
    $checked
      ? `background: ${theme.colors.success ?? '#31d0aa'};
         border-bottom: 2px solid rgba(0, 0, 0, 0.2);
         color: #08060b;`
      : `background: ${theme.colors.inputPrimary};
         border: 1px solid ${theme.colors.inputSecondary};
         box-shadow: inset 0 2px 0 -1px rgba(0, 0, 0, 0.16);`}
`
/* eslint-enable no-restricted-syntax */

const OptionLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`

const OptionDescription = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Footer = styled.div`
  display: flex;
  gap: 8px;
`

/* eslint-disable no-restricted-syntax */
const ConfirmButton = styled.button`
  flex: 1;
  height: 48px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: #08060b;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
  }
`

const CancelButton = styled.button`
  flex: 1;
  height: 48px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary60 ?? theme.colors.primary};
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
  }
`
/* eslint-enable no-restricted-syntax */

const identity = (s: string) => s

/**
 * Centered option-picker modal (Figma 1101:39922 / 1101:40127) — used by
 * the AI Copilot panel's Style + Strategy dropdowns. Each option is a card
 * with a green check when selected; Confirm commits, Cancel/X dismisses.
 */
/**
 * Mount this only while open (e.g. `{open && <OptionPickerModal … />}`) — it
 * seeds the tentative selection from `value` on mount, so a fresh open always
 * starts from the committed choice without a reset effect.
 */
export const OptionPickerModal: React.FC<OptionPickerModalProps> = ({
  title,
  options,
  value,
  onConfirm,
  onClose,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  t = identity,
}) => {
  const [pending, setPending] = useState(value)

  if (typeof document === 'undefined') return null

  return createPortal(
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()} role="dialog" aria-label={title}>
        <Header>
          <Title>{t(title)}</Title>
          <CloseButton type="button" aria-label={t('Close')} onClick={onClose}>
            <CloseIcon width="20px" height="20px" />
          </CloseButton>
        </Header>

        <OptionList>
          {options.map((opt) => {
            const checked = pending === opt.value
            return (
              <OptionCard
                key={opt.value}
                type="button"
                $disabled={opt.disabled}
                aria-pressed={checked}
                disabled={opt.disabled}
                onClick={() => !opt.disabled && setPending(opt.value)}
              >
                <OptionTop>
                  <CheckBox $checked={checked} aria-hidden>
                    {checked && <CheckmarkIcon width="18px" height="18px" />}
                  </CheckBox>
                  <OptionLabel>{t(opt.label)}</OptionLabel>
                </OptionTop>
                {opt.description && <OptionDescription>{t(opt.description)}</OptionDescription>}
              </OptionCard>
            )
          })}
        </OptionList>

        <Footer>
          <ConfirmButton type="button" onClick={() => onConfirm(pending)}>
            {t(confirmLabel)}
          </ConfirmButton>
          <CancelButton type="button" onClick={onClose}>
            {t(cancelLabel)}
          </CancelButton>
        </Footer>
      </Modal>
    </Overlay>,
    document.body,
  )
}
