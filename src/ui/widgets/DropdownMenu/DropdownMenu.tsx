import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";
import { Button } from "../../components";
import type { DropdownMenuProps } from "./types";

const Container = styled.div`
  display: inline-flex;
`;

const TriggerWrap = styled.div`
  cursor: pointer;
  display: inline-flex;
`;

const Panel = styled.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  width: 220px;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.input};
  border-top: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.inputSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 16px;
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.secondary},
    0 0 0 4px rgba(118, 69, 217, 0.2);
  overflow: hidden;
`;

const MenuItem = styled(Button).attrs({ variant: "text" })`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 100%;
  border-radius: 0;
  justify-content: flex-start;
  height: auto;
  font-family: Kanit, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  font-feature-settings: 'liga' off;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }
  &:hover:not(:disabled):not(:active) {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;

export default function DropdownMenu({ trigger, items, placement = "bottom-end" }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useLayoutEffect(() => {
    if (!open || !containerRef.current || !panelRef.current) return;
    const triggerRect = containerRef.current.getBoundingClientRect();
    const panelRect = panelRef.current.getBoundingClientRect();
    const top = triggerRect.bottom + 8;

    let left: number;
    if (placement === "bottom-end") {
      left = triggerRect.right - panelRect.width;
    } else {
      left = triggerRect.left;
    }

    // Clamp so the panel stays within the viewport
    const maxLeft = window.innerWidth - panelRect.width - 8;
    left = Math.max(8, Math.min(left, maxLeft));

    setPos({ top, left });
  }, [open, placement]);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        containerRef.current && !containerRef.current.contains(target) &&
        panelRef.current && !panelRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <Container ref={containerRef}>
      <TriggerWrap onClick={toggle}>{trigger}</TriggerWrap>
      {open &&
        createPortal(
          <Panel
            ref={panelRef}
            style={{ top: pos.top, left: pos.left }}
          >
            {items.map((item) => (
              <MenuItem
                key={item.label}
                startIcon={item.icon}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Panel>,
          document.body
        )}
    </Container>
  );
}
