/* eslint-disable react-refresh/only-export-components -- shared module mixing
   styled-component exports with small wrapper components. */
import React from "react";
import type { ComponentType, MouseEvent } from "react";
import type { FlexProps } from "../Box/types";
import { styled } from "styled-components";
import { MotionBox } from "../Box";
import Flex from "../Box/Flex";
import { IconButton } from "../Button";
import type { BaseButtonProps } from "../Button";
import { ArrowBackIcon, CloseIcon } from "../Svg";
import type { ModalProps } from "./types";

export const mobileFooterHeight = 73;

export const ModalHeader = styled(Flex)<{ width?: string; background?: string; headerBorderColor?: string }>`
  align-items: center;
  background: transparent;
  border-bottom: 1px solid ${({ theme, headerBorderColor }) => headerBorderColor || theme.colors.cardBorder};
  display: flex;
  padding: 12px 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    background: ${({ background }) => background || "transparent"};
  }

  /* On mobile + tablet bottom-sheets the grabber pill is the dismissal
     affordance — drop the redundant X close button so the header stays
     clean. */
  @media (max-width: 967.98px) {
    [aria-label="Close the dialog"] {
      display: none;
    }
  }
`;

export const ModalTitle: ComponentType<FlexProps> = styled(Flex)`
  align-items: center;
  flex: 1;
`;

export const ModalBody: ComponentType<FlexProps> = styled(Flex)`
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(90vh - ${mobileFooterHeight}px);

  /* Mobile + tablet (≤967.98): 16px gutter for breathing room around
     inner cards/lists. Desktop (≥968): default 24px from the
     bodyPadding prop is kept. */
  @media (max-width: 967.98px) {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    max-height: 90vh;
  }
`;

export const ModalCloseButton: React.FC<
  React.PropsWithChildren<{ onDismiss: ModalProps["onDismiss"] }> & BaseButtonProps
> = ({ onDismiss, ...props }) => {
  return (
    <IconButton
      variant="text"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onDismiss?.();
      }}
      aria-label="Close the dialog"
      // Pulls the close-button 4px closer to the modal's right edge so
      // the icon optically aligns with the header padding.
      mr="-4px"
      {...props}
    >
      <CloseIcon color="textSubtle" width="24px" />
    </IconButton>
  );
};

export const ModalBackButton: React.FC<React.PropsWithChildren<{ onBack: ModalProps["onBack"] }>> = ({ onBack }) => {
  return (
    <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
      <ArrowBackIcon color="textSubtle" width="24px" />
    </IconButton>
  );
};

export const ModalContainer = styled(MotionBox)<{
  $minHeight: string;
}>`
  overflow: hidden;
  background: ${({ theme }) => theme.modal.background};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 32px 32px 0px 0px;
  width: 100%;
  max-height: calc(var(--vh, 1vh) * 100);
  z-index: ${({ theme }) => theme.zIndices.modal};
  position: absolute;
  bottom: 0;
  max-width: none !important;
  min-height: ${({ $minHeight }) => $minHeight};
  /* Reserve room for the bottom-sheet grabber so the header below
     doesn't sit underneath it. Removed at the desktop breakpoint when
     the layout becomes a centered modal. */
  padding-top: 28px;

  /* Grabber pill — black/white at 10% opacity, matches BottomDrawer's
     TopBar so every bottom-sheet on mobile/tablet feels consistent. */
  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: calc(50% - 18px);
    width: 36px;
    height: 4px;
    border-radius: 9999px;
    background: ${({ theme }) => theme.colors.v2Inverse};
    opacity: 0.1;
    pointer-events: none;
  }

  /* Promote the bottom-sheet breakpoint to the lg (968px) cutoff used
     by the rest of the perps app, so tablet widths (576-967.98) stay
     in the bottom-sheet treatment instead of switching to centered at
     852. Above 968, the grabber is dropped and the modal centers. */
  ${({ theme }) => theme.mediaQueries.lg} {
    width: auto;
    position: auto;
    bottom: auto;
    border-radius: 32px;
    max-height: 100vh;
    padding-top: 0;

    &::before {
      display: none;
    }
  }
` as typeof MotionBox;
