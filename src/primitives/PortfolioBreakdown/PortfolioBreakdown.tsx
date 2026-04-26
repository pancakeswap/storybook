import { styled } from "styled-components";
import { Text } from "..";
import type { PortfolioBreakdownProps, BreakdownItem } from "./types";

function getGradient(color: BreakdownItem["color"]): string {
  if (Array.isArray(color)) {
    return `linear-gradient(to bottom, ${color[0]}, ${color[1]})`;
  }
  return color;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BarTrack = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
`;

const BarSegment = styled.div<{ $pct: number; $bg: string; $isFirst: boolean; $isLast: boolean }>`
  height: 100%;
  min-width: ${({ $pct }) => ($pct > 0 ? "2px" : "0")};
  flex: ${({ $pct }) => $pct} 0 0%;
  background: ${({ $bg }) => $bg};
  border-radius: ${({ $isFirst, $isLast }) => {
    const left = $isFirst ? "99px" : "0";
    const right = $isLast ? "99px" : "0";
    return `${left} ${right} ${right} ${left}`;
  }};
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LegendRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LegendLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ColorDot = styled.div<{ $bg: string }>`
  width: 4px;
  align-self: stretch;
  border-radius: 99px;
  background: ${({ $bg }) => $bg};
`;

const LabelStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function PortfolioBreakdown({ items }: PortfolioBreakdownProps) {
  return (
    <Container>
      <BarTrack>
        {items.filter((item) => item.percentage > 0).map((item, i, visible) => (
          <BarSegment
            key={item.title}
            $pct={item.percentage}
            $bg={getGradient(item.color)}
            $isFirst={i === 0}
            $isLast={i === visible.length - 1}
          />
        ))}
      </BarTrack>
      <Legend>
        {items.map((item) => (
          <LegendRow key={item.title}>
            <LegendLeft>
              <ColorDot $bg={getGradient(item.color)} />
              <LabelStack>
                <Text bold fontSize="16px" color="textSubtle">
                  {item.title}
                </Text>
                <Text fontSize="12px" color="textSubtle" style={{ letterSpacing: "0.12px" }}>
                  {item.percentage}%
                </Text>
              </LabelStack>
            </LegendLeft>
            <Text bold fontSize="16px" style={{ fontVariantNumeric: "tabular-nums" }}>
              {item.balance}
            </Text>
          </LegendRow>
        ))}
      </Legend>
    </Container>
  );
}
