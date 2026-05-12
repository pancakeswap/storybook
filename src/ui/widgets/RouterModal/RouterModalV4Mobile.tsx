import { useState } from "react";
import { styled, useTheme } from "styled-components";
import { Card, CardBody, CardFooter, CardHeader, Text } from "../../components";
import { HelpIcon, RefreshIcon } from "../../Icons";
import { SOURCE_COLORS } from "./tokens";
import { TokenChip } from "./TokenChip";
import { RouteDiagramV4 } from "./RouteDiagramV4";
import type { LegV4, RouteV4, SourceName } from "./types";

const ModalCard = styled(Card)`
  width: 100%;
  min-width: 360px;
  max-width: 575px;
  font-family: "Kanit", sans-serif;
`;

const DragHandle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 6px;
`;

const DragPill = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.cardBorder};
`;

const HeaderInner = styled(CardHeader)`
  padding: 12px 20px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DetailWrap = styled.div`
  margin: 0 20px 8px;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.cardSecondary};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;
`;

const DetailTitle = styled.div`
  font-family: "Kanit", sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 8px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
  font-size: 13px;
  font-family: "Kanit", sans-serif;
`;

const DetailPct = styled.span`
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.text};
`;

const SummaryRow = styled.div`
  padding: 14px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const SummarySide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

const SummaryDivider = styled.div`
  flex: 1;
  margin: 0 8px;
  height: 1px;
  border-top: 1px dashed ${({ theme }) => theme.colors.cardBorder};
`;

const SubtitleRow = styled.div`
  padding: 8px 20px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const SubtitleText = styled(Text)`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const RefreshedText = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.textSubtle};
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
`;

const DiagramArea = styled.div`
  padding: 8px 20px 16px;
  overflow-x: auto;
`;

const FooterArea = styled(CardFooter)`
  padding: 12px 20px 18px;
`;

const StatLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`;

const HintBox = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 12px;
  background: ${({ theme }) =>
    `color-mix(in srgb, ${theme.colors.secondary} 8%, transparent)`};
  border: 1px solid
    ${({ theme }) => `color-mix(in srgb, ${theme.colors.secondary} 20%, transparent)`};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  line-height: 1.45;
`;

function MobileSourceDot({ source }: { source: SourceName }) {
  const c = SOURCE_COLORS[source];
  const id = `mdot-${source.replace(/\s+/g, "")}`;
  return (
    <svg width={12} height={12} viewBox="0 0 14 14" style={{ display: "block", flexShrink: 0 }}>
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

function MobileDetailPanel({ leg }: { leg: LegV4 }) {
  const theme = useTheme() as { colors: { text: string; textSubtle: string } };
  return (
    <DetailWrap>
      <DetailTitle>
        {leg.pair[0]} / {leg.pair[1]} · liquidity sources
      </DetailTitle>
      {leg.pools.map((p, i) => (
        <DetailRow key={i}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MobileSourceDot source={p.source} />
            <span style={{ color: theme.colors.text, fontWeight: 500 }}>
              {p.source}
              <span style={{ color: theme.colors.textSubtle, fontWeight: 400 }}>
                {" "}
                ({p.fee})
              </span>
            </span>
          </span>
          <DetailPct>{p.pct}%</DetailPct>
        </DetailRow>
      ))}
    </DetailWrap>
  );
}

interface RouterModalV4MobileProps {
  route: RouteV4;
  onClose?: () => void;
}

export function RouterModalV4Mobile({ route, onClose }: RouterModalV4MobileProps) {
  const [activeLeg, setActiveLeg] = useState<LegV4 | null>(null);
  const totalPools = route.branches.reduce(
    (a, b) => a + b.legs.reduce((x, l) => x + l.pools.length, 0),
    0,
  );

  return (
    <ModalCard>
      <DragHandle role="button" aria-label="Close" onClick={onClose}>
        <DragPill />
      </DragHandle>

      <HeaderInner variant="pale">
        <Text bold fontSize="20px">
          Route
        </Text>
        <HelpIcon width="18px" color="textSubtle" />
      </HeaderInner>

      <SummaryRow>
        <SummarySide>
          <TokenChip token={route.src.token} size={28} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, minWidth: 0 }}>
            <Text bold fontSize="15px">
              {route.src.amount} {route.src.token}
            </Text>
            <Text fontSize="11px" color="textSubtle">
              {route.src.usd}
            </Text>
          </div>
        </SummarySide>
        <SummaryDivider />
        <SummarySide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1,
              alignItems: "flex-end",
              minWidth: 0,
            }}
          >
            <Text bold fontSize="15px">
              {route.dst.amount} {route.dst.token}
            </Text>
            <Text fontSize="11px" color="textSubtle">
              {route.dst.usd}
            </Text>
          </div>
          <TokenChip token={route.dst.token} size={28} />
        </SummarySide>
      </SummaryRow>

      <SubtitleRow>
        <SubtitleText color="textSubtle">Best route via PancakeSwap Smart Router</SubtitleText>
        <RefreshedText>
          <RefreshIcon width="11px" color="textSubtle" />
          <span>updated 4s ago</span>
        </RefreshedText>
      </SubtitleRow>

      <DiagramArea>
        <RouteDiagramV4 route={route} mobile onActiveChange={setActiveLeg} />
      </DiagramArea>

      {activeLeg && <MobileDetailPanel leg={activeLeg} />}

      <CardBody style={{ padding: 0 }} />

      <FooterArea>
        <StatLine>
          <Text fontSize="13px" color="textSubtle">
            Routing splits
          </Text>
          <Text fontSize="13px" bold>
            {route.branches.length} routes · {totalPools} pools
          </Text>
        </StatLine>
        <HintBox>
          Routes that share the same token path are merged. Each leg shows its pool count and
          source dots — hover for fee tiers and shares.
        </HintBox>
      </FooterArea>
    </ModalCard>
  );
}
