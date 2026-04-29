import { styled, css, keyframes } from "styled-components";
import { useEffect } from "react";
import { Box } from "../Box";
import type { BoxProps } from "../Box";

const unmountAnimation = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;

const mountAnimation = keyframes`
    0% {
     opacity: 0;
    }
    100% {
     opacity: 1;
    }
  `;

const StyledOverlay = styled(Box)<{ isUnmounting?: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.colors.backgroundOverlay}`};
  z-index: 20;
  will-change: opacity;
  animation: ${mountAnimation} 350ms ease forwards;
  ${({ isUnmounting }) =>
    isUnmounting &&
    css`
      animation: ${unmountAnimation} 350ms ease forwards;
    `}
`;

const bodyLockState: {
  lockCount: number;
  originalOverflow: string;
  originalPaddingRight: string;
} = {
  lockCount: 0,
  originalOverflow: "",
  originalPaddingRight: "",
};

const BodyLock = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !document?.body?.style || !document?.documentElement) return undefined;

    if (bodyLockState.lockCount === 0) {
      bodyLockState.originalOverflow = document.body.style.overflow;
      bodyLockState.originalPaddingRight = document.body.style.paddingRight;

      const scrollbarWidth: number = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
    bodyLockState.lockCount++;

    return () => {
      if (typeof window === "undefined" || !document?.body?.style) return;

      bodyLockState.lockCount--;

      if (bodyLockState.lockCount <= 0) {
        document.body.style.overflow = bodyLockState.originalOverflow;
        document.body.style.paddingRight = bodyLockState.originalPaddingRight;
        bodyLockState.lockCount = 0;
      }
    };
  }, []);

  return null;
};

interface OverlayProps extends BoxProps {
  isUnmounting?: boolean;
}

export const Overlay: React.FC<React.PropsWithChildren<OverlayProps>> = (props) => {
  return (
    <>
      <BodyLock />
      <StyledOverlay role="presentation" {...props} />
    </>
  );
};

export default Overlay;
