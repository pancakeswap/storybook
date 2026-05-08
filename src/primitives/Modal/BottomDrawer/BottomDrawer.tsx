import React, { useRef } from "react";
import { styled } from "styled-components";
import { Box } from "../../Box";
import { ModalWrapper } from "../Modal";
import { ModalV2 } from "../ModalV2";
import { ModalCloseButton } from "../styles";
import { DrawerContainer } from "./styles";

/* Tap- and swipe-down-to-close hit area covering the top 28px of the
   drawer (where the grabber pill sits). Transparent button so it
   doesn't interfere with the drawer's visual chrome — the visible
   pill is rendered separately as TopBar with pointer-events: none. */
const GrabberArea = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 28px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: grab;
  touch-action: none;
  z-index: 1;

  &:active {
    cursor: grabbing;
  }
`;

// eslint-disable-next-line react-refresh/only-export-components -- styled-component sibling export, intentional
export const TopBar = styled.div`
  position: absolute;
  top: 16px;
  left: calc(50% - 18px);
  width: 36px;
  height: 4px;
  border-radius: 9999px;
  /* PCS v2-expanded "inverse" — black in light mode, white in dark — at
     10% opacity. */
  background: ${({ theme }) => theme.colors.v2Inverse};
  opacity: 0.1;
  pointer-events: none;
`;

/* Swipe-down threshold (px) past which a pointer release dismisses the
   drawer. Below this we treat the gesture as a tap, which also closes. */
const DISMISS_THRESHOLD = 30;

interface BottomDrawerProps {
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void | null;
  drawerContainerStyle?: React.CSSProperties;
  hideCloseButton?: boolean;
}

const BottomDrawer: React.FC<React.PropsWithChildren<BottomDrawerProps>> = ({
  drawerContainerStyle = {},
  content,
  isOpen,
  setIsOpen,
  hideCloseButton = false,
}) => {
  const dragStartY = useRef<number | null>(null);

  const onGrabberPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    dragStartY.current = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onGrabberPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    const startY = dragStartY.current;
    dragStartY.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Safari may have already released — ignore.
    }
    if (startY === null) return;
    // Treat both a tap (delta < threshold) and a downward swipe past
    // the threshold as a dismiss. Upward / large-horizontal gestures
    // are ignored.
    const dy = e.clientY - startY;
    if (dy >= 0 || dy >= DISMISS_THRESHOLD) {
      setIsOpen(false);
    }
  };

  const onGrabberPointerCancel = () => {
    dragStartY.current = null;
  };

  return (
    <ModalV2 isOpen={isOpen} onDismiss={() => setIsOpen(false)} closeOnOverlayClick>
      <ModalWrapper onDismiss={() => setIsOpen(false)}>
        <DrawerContainer style={drawerContainerStyle}>
          {!hideCloseButton ? (
            <Box position="absolute" right="24px" top="24px">
              <ModalCloseButton onDismiss={() => setIsOpen(false)} />
            </Box>
          ) : (
            <>
              <GrabberArea
                type="button"
                aria-label="Close drawer"
                onPointerDown={onGrabberPointerDown}
                onPointerUp={onGrabberPointerUp}
                onPointerCancel={onGrabberPointerCancel}
              />
              <TopBar aria-hidden />
            </>
          )}

          {content}
        </DrawerContainer>
      </ModalWrapper>
    </ModalV2>
  );
};

export default BottomDrawer;
