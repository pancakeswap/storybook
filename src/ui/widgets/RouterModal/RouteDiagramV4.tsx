import { useMemo, useState } from "react";
import { styled, useTheme } from "styled-components";
import { SOURCE_COLORS } from "./tokens";
import { TokenChip } from "./RouteDiagramV2";
import type { LegV4, RouteV4, SourceName, TokenSymbol } from "./types";

interface SourceDotProps {
  source: SourceName;
  size?: number;
}

function SourceDot({ source, size = 14 }: SourceDotProps) {
  const c = SOURCE_COLORS[source];
  const id = `dot-${source.replace(/\s+/g, "")}-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      style={{ display: "block", flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.from} />
          <stop offset="100%" stopColor={c.to} />
        </linearGradient>
      </defs>
      <circle cx="7" cy="7" r="6" fill={`url(#${id})`} stroke="rgba(255,255,255,0.6)" strokeWidth="0.7" />
    </svg>
  );
}

const LegBadgeWrap = styled.div<{ $hovered: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid
    ${({ theme, $hovered }) => ($hovered ? theme.colors.secondary : theme.colors.cardBorder)};
  border-radius: 999px;
  box-shadow: ${({ theme, $hovered }) =>
    $hovered
      ? `0 6px 18px -6px color-mix(in srgb, ${theme.colors.secondary} 45%, transparent)`
      : theme.shadows.level1};
  transition: all 160ms;
  transform: ${(p) => (p.$hovered ? "translateY(-1px)" : "none")};
  cursor: pointer;
  white-space: nowrap;
  padding: 4px 12px 4px 6px;
`;

const LegBadgeMore = styled.div`
  margin-left: -5px;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.input};
  border: 1.5px solid ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-size: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LegBadgeText = styled.span`
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text};
  font-variant-numeric: tabular-nums;
`;

const LegBadgeUnit = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: 400;
`;

interface LegBadgeProps {
  leg: LegV4;
  hovered: boolean;
}

function LegBadge({ leg, hovered }: LegBadgeProps) {
  const uniqueSources = Array.from(new Set(leg.pools.map((p) => p.source)));
  const shown = uniqueSources.slice(0, 3);
  const more = uniqueSources.length - shown.length;
  const theme = useTheme() as { colors: { card: string } };

  return (
    <LegBadgeWrap $hovered={hovered}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {shown.map((s, i) => (
          <div
            key={s}
            style={{
              marginLeft: i === 0 ? 0 : -5,
              border: `1.5px solid ${theme.colors.card}`,
              borderRadius: 999,
              display: "flex",
            }}
          >
            <SourceDot source={s} size={14} />
          </div>
        ))}
        {more > 0 && <LegBadgeMore>+{more}</LegBadgeMore>}
      </div>
      <LegBadgeText>
        {leg.pools.length}
        <LegBadgeUnit> {leg.pools.length > 1 ? "pools" : "pool"}</LegBadgeUnit>
      </LegBadgeText>
    </LegBadgeWrap>
  );
}

const TokenStopWrap = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 999px;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: ${({ theme }) => theme.shadows.level1};
`;

interface TokenStopProps {
  token: TokenSymbol;
}

function TokenStop({ token }: TokenStopProps) {
  return (
    <TokenStopWrap>
      <TokenChip token={token} size={26} />
    </TokenStopWrap>
  );
}

const TooltipBox = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: ${({ theme }) => theme.shadows.tooltip};
  min-width: 220px;
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
  padding: 4px 0;
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

interface PoolBreakdownTooltipProps {
  leg: LegV4;
  x: number;
  y: number;
}

function PoolBreakdownTooltip({ leg, x, y }: PoolBreakdownTooltipProps) {
  const theme = useTheme() as { colors: { text: string; textSubtle: string } };
  return (
    <TooltipBox style={{ left: x, top: y, transform: "translate(-50%, calc(-100% - 18px))" }}>
      <TooltipTitle>
        {leg.pair[0]} / {leg.pair[1]} · liquidity sources
      </TooltipTitle>
      {leg.pools.map((p, i) => (
        <TooltipRow key={i}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <SourceDot source={p.source} size={14} />
            <span style={{ color: theme.colors.text, fontWeight: 500 }}>
              {p.source}
              <span style={{ color: theme.colors.textSubtle, fontWeight: 400 }}>
                {" "}
                ({p.fee})
              </span>
            </span>
          </span>
          <span
            style={{
              color: theme.colors.text,
              fontWeight: 700,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {p.pct}%
          </span>
        </TooltipRow>
      ))}
      <TooltipPointer />
    </TooltipBox>
  );
}

const DiagramRoot = styled.div<{ $w: number; $h: number }>`
  position: relative;
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
`;

interface RouteDiagramV4Props {
  route: RouteV4;
}

interface HoverState {
  branchIdx: number;
  legIdx: number;
  x: number;
  y: number;
}

interface PointV4 {
  x: number;
  y: number;
  token: TokenSymbol | null;
  type: "src" | "stop" | "mid" | "dst";
}

interface BuiltBranchV4 {
  pct: number;
  path: TokenSymbol[];
  legs: LegV4[];
  d: string;
  points: PointV4[];
  y: number;
}

export function RouteDiagramV4({ route }: RouteDiagramV4Props) {
  const [hover, setHover] = useState<HoverState | null>(null);
  const theme = useTheme() as {
    colors: { text: string; backgroundAlt: string; inputSecondary: string };
  };

  const W = 512;
  const padX = 24;
  const srcX = padX + 24;
  const dstX = W - padX - 24;

  const N = route.branches.length;
  const rowH = 96;
  const H = rowH * N + 30;
  const cy = H / 2;

  const branchY = (i: number) => {
    const spread = (N - 1) / 2;
    return cy + (i - spread) * rowH;
  };

  const branches: BuiltBranchV4[] = useMemo(() => {
    const buildPath = (branchIdx: number, path: TokenSymbol[]) => {
      const y = branchY(branchIdx);
      const intermediates = path.length - 2;
      const span = dstX - srcX;
      const points: PointV4[] = [{ x: srcX, y: cy, token: path[0], type: "src" }];

      if (intermediates === 0) {
        const midX = (srcX + dstX) / 2;
        points.push({ x: midX, y, token: null, type: "mid" });
      } else {
        const step = span / (intermediates + 1);
        for (let i = 0; i < intermediates; i++) {
          points.push({
            x: srcX + step * (i + 1),
            y,
            token: path[i + 1],
            type: "stop",
          });
        }
      }
      points.push({ x: dstX, y: cy, token: path[path.length - 1], type: "dst" });

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
      const built = buildPath(i, b.path);
      return { ...b, ...built, y: branchY(i) };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const pathStroke = theme.colors.inputSecondary;
  const labelText = theme.colors.text;
  const labelBg = theme.colors.backgroundAlt;

  const legHotspots = (b: BuiltBranchV4, branchIdx: number) =>
    b.legs.map((leg, li) => {
      if (b.legs.length === 1 && b.path.length === 2) {
        return { leg, x: (srcX + dstX) / 2, y: branchY(branchIdx) };
      }
      const p0 = b.points[li];
      const p1 = b.points[li + 1];
      const t = li === 0 ? 0.7 : 0.3;
      return { leg, x: p0.x + (p1.x - p0.x) * t, y: p0.y + (p1.y - p0.y) * t };
    });

  return (
    <DiagramRoot $w={W} $h={H}>
      <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
        <defs>
          <linearGradient id="rd-v4-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={pathStroke} stopOpacity="0.25" />
            <stop offset="20%" stopColor={pathStroke} stopOpacity="1" />
            <stop offset="80%" stopColor={pathStroke} stopOpacity="1" />
            <stop offset="100%" stopColor={pathStroke} stopOpacity="0.25" />
          </linearGradient>
          <marker
            id="rd-v4-arr"
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
                stroke="url(#rd-v4-grad)"
                strokeWidth={isHover ? 3.5 : 2.5}
                strokeLinecap="round"
                markerEnd="url(#rd-v4-arr)"
                style={{ transition: "stroke-width 160ms" }}
              />
            </g>
          );
        })}

        {branches.map((b, i) => {
          const labelX = srcX + 56;
          const labelY = cy + (b.y - cy) * 0.42;
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
        <div key={`legs-${bi}`}>
          {b.points.map((pt, pi) => {
            if (pt.type !== "stop" || !pt.token) return null;
            return (
              <div
                key={`stop-${pi}`}
                style={{
                  position: "absolute",
                  left: pt.x,
                  top: pt.y,
                  transform: "translate(-50%, -50%)",
                  opacity: hover && hover.branchIdx !== bi ? 0.3 : 1,
                  transition: "opacity 160ms",
                }}
              >
                <TokenStop token={pt.token} />
              </div>
            );
          })}
          {legHotspots(b, bi).map((h, li) => {
            const isHover = hover?.branchIdx === bi && hover?.legIdx === li;
            return (
              <div
                key={`hot-${li}`}
                onMouseEnter={() => setHover({ branchIdx: bi, legIdx: li, x: h.x, y: h.y })}
                onMouseLeave={() => setHover(null)}
                style={{
                  position: "absolute",
                  left: h.x,
                  top: h.y,
                  transform: "translate(-50%, -50%)",
                  opacity: hover && hover.branchIdx !== bi ? 0.4 : 1,
                  transition: "opacity 160ms",
                  zIndex: 5,
                }}
              >
                <LegBadge leg={b.legs[li]} hovered={!!isHover} />
              </div>
            );
          })}
        </div>
      ))}

      {hover &&
        (() => {
          const leg = branches[hover.branchIdx].legs[hover.legIdx];
          return <PoolBreakdownTooltip leg={leg} x={hover.x} y={hover.y} />;
        })()}
    </DiagramRoot>
  );
}
