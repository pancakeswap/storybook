import { useMemo, useState } from "react";
import { styled, useTheme } from "styled-components";
import { NetworkBadgeETH, TOKENS } from "./tokens";
import type { HopV2, RouteV2, TokenSymbol } from "./types";

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

const PoolPillOuter = styled.div<{ $hovered: boolean }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transform: ${(p) => (p.$hovered ? "translateY(-2px)" : "none")};
  transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1.1);
`;

const PoolPillBadge = styled.div<{ $hovered: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px 8px 3px 4px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  box-shadow: ${({ theme, $hovered }) =>
    $hovered
      ? `0 4px 14px -4px color-mix(in srgb, ${theme.colors.secondary} 40%, transparent)`
      : "none"};
  transition: box-shadow 160ms;
`;

interface PoolPillProps {
  hop: HopV2;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function PoolPill({ hop, hovered, onHover, onLeave }: PoolPillProps) {
  return (
    <PoolPillOuter onMouseEnter={onHover} onMouseLeave={onLeave} $hovered={hovered}>
      <PoolPillBadge $hovered={hovered}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: -8, position: "relative", zIndex: 2 }}>
            <TokenChip token={hop.pair[0]} size={22} />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <TokenChip token={hop.pair[1]} size={22} />
          </div>
        </div>
      </PoolPillBadge>
    </PoolPillOuter>
  );
}

const TooltipBox = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: ${({ theme }) => theme.shadows.tooltip};
  min-width: 180px;
  z-index: 50;
  pointer-events: none;
  font-family: "Kanit", sans-serif;
`;

const TooltipTitle = styled.div`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 6px;
`;

const TooltipRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
  padding: 3px 0;
  font-size: 13px;
`;

const TooltipPointer = styled.div`
  position: absolute;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

interface SourceBreakdownTooltipProps {
  hop: HopV2;
  x: number;
  y: number;
}

function SourceBreakdownTooltip({ hop, x, y }: SourceBreakdownTooltipProps) {
  const theme = useTheme() as { colors: { text: string; textSubtle: string } };
  return (
    <TooltipBox style={{ left: x, top: y, transform: "translate(-50%, calc(-100% - 14px))" }}>
      <TooltipTitle>
        {hop.pair[0]} / {hop.pair[1]} · liquidity sources
      </TooltipTitle>
      {hop.sources.map((s, i) => {
        const m = s.name.match(/^(.*?)\s*([\d.]+%)\s*$/);
        const srcName = m ? m[1].trim() : s.name;
        const srcFee = m ? m[2] : null;
        return (
          <TooltipRow key={i}>
            <span style={{ color: theme.colors.text, fontWeight: 500 }}>
              {srcName}
              {srcFee && (
                <span style={{ color: theme.colors.textSubtle, fontWeight: 400 }}>
                  {" "}
                  ({srcFee})
                </span>
              )}
            </span>
            <span
              style={{
                color: theme.colors.text,
                fontWeight: 700,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.pct}%
            </span>
          </TooltipRow>
        );
      })}
      <TooltipPointer />
    </TooltipBox>
  );
}

const DiagramRoot = styled.div<{ $w: number; $h: number }>`
  position: relative;
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
`;

interface RouteDiagramV2Props {
  route: RouteV2;
}

interface HoverState {
  branchIdx: number;
  hopIdx: number;
  x: number;
  y: number;
}

interface Point {
  x: number;
  y: number;
}

interface BuiltBranch {
  pct: number;
  hops: HopV2[];
  d: string;
  points: Point[];
  y: number;
}

export function RouteDiagramV2({ route }: RouteDiagramV2Props) {
  const [hover, setHover] = useState<HoverState | null>(null);
  const theme = useTheme() as {
    colors: { text: string; backgroundAlt: string; inputSecondary: string };
  };

  const W = 512;
  const padX = 24;
  const srcX = padX + 24;
  const dstX = W - padX - 24;

  const N = route.branches.length;
  const rowH = 56;
  const H = rowH * N + 40;
  const cy = H / 2;

  const branchY = (i: number) => {
    const spread = (N - 1) / 2;
    return cy + (i - spread) * rowH;
  };

  const branches: BuiltBranch[] = useMemo(() => {
    const buildPath = (branchIdx: number, hops: HopV2[]) => {
      const y = branchY(branchIdx);
      const cols = hops.length;
      const span = dstX - srcX;
      const step = span / (cols + 1);
      const points: Point[] = [{ x: srcX, y: cy }];
      for (let i = 0; i < cols; i++) {
        points.push({ x: srcX + step * (i + 1), y });
      }
      points.push({ x: dstX, y: cy });
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const cx1 = p0.x + (p1.x - p0.x) * 0.5;
        const cx2 = p0.x + (p1.x - p0.x) * 0.5;
        d += ` C ${cx1} ${p0.y}, ${cx2} ${p1.y}, ${p1.x} ${p1.y}`;
      }
      return { d, points };
    };
    return route.branches.map((b, i) => {
      const built = buildPath(i, b.hops);
      return { ...b, ...built, y: branchY(i) };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const pathStroke = theme.colors.inputSecondary;
  const labelText = theme.colors.text;
  const labelBg = theme.colors.backgroundAlt;

  return (
    <DiagramRoot $w={W} $h={H}>
      <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <defs>
          <linearGradient id="rd-v2-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={pathStroke} stopOpacity="0.25" />
            <stop offset="20%" stopColor={pathStroke} stopOpacity="1" />
            <stop offset="80%" stopColor={pathStroke} stopOpacity="1" />
            <stop offset="100%" stopColor={pathStroke} stopOpacity="0.25" />
          </linearGradient>
          <marker
            id="rd-v2-arr"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill={pathStroke} />
          </marker>
        </defs>

        {branches.map((b, i) => {
          const isHover = hover?.branchIdx === i;
          return (
            <g
              key={i}
              style={{ opacity: hover && !isHover ? 0.3 : 1, transition: "opacity 160ms" }}
            >
              <path
                d={b.d}
                fill="none"
                stroke="url(#rd-v2-grad)"
                strokeWidth={isHover ? 3.5 : 2.5}
                strokeLinecap="round"
                markerEnd="url(#rd-v2-arr)"
                style={{ transition: "stroke-width 160ms" }}
              />
            </g>
          );
        })}

        {branches.map((b, i) => {
          const firstHopX = b.points[1].x;
          const labelX = srcX + (firstHopX - srcX) * 0.32;
          const labelY = cy + (b.y - cy) * 0.55;
          return (
            <g key={`lbl-${i}`}>
              <rect
                x={labelX - 19}
                y={labelY - 9}
                width={38}
                height={18}
                rx={9}
                fill={labelBg}
                stroke={pathStroke}
                strokeWidth="1"
                strokeOpacity="0.7"
              />
              <text
                x={labelX}
                y={labelY + 4}
                textAnchor="middle"
                fontFamily="Kanit"
                fontWeight="700"
                fontSize="11"
                fill={labelText}
              >
                {b.pct}%
              </text>
            </g>
          );
        })}
      </svg>

      <div style={{ position: "absolute", left: padX, top: cy - 20 }}>
        <TokenChip token={route.src.token} size={40} withChain />
      </div>

      <div style={{ position: "absolute", right: padX, top: cy - 20 }}>
        <TokenChip token={route.dst.token} size={40} withChain />
      </div>

      {branches.map((b, bi) => (
        <div key={`hops-${bi}`}>
          {b.hops.map((hop, hi) => {
            const p = b.points[hi + 1];
            const isHover = hover?.branchIdx === bi && hover?.hopIdx === hi;
            return (
              <div
                key={hi}
                style={{
                  position: "absolute",
                  left: p.x,
                  top: p.y,
                  transform: "translate(-50%, -50%)",
                  opacity: hover && hover.branchIdx !== bi ? 0.35 : 1,
                  transition: "opacity 160ms",
                }}
              >
                <PoolPill
                  hop={hop}
                  hovered={!!isHover}
                  onHover={() =>
                    setHover({ branchIdx: bi, hopIdx: hi, x: p.x, y: p.y - 24 })
                  }
                  onLeave={() => setHover(null)}
                />
              </div>
            );
          })}
        </div>
      ))}

      {hover &&
        (() => {
          const hop = branches[hover.branchIdx].hops[hover.hopIdx];
          return <SourceBreakdownTooltip hop={hop} x={hover.x} y={hover.y} />;
        })()}
    </DiagramRoot>
  );
}
