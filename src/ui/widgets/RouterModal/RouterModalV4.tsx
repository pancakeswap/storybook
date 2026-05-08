import { styled } from "styled-components";
import { Card, CardBody, CardFooter, CardHeader, IconButton, Text } from "../../components";
import { CloseIcon, HelpIcon, RefreshIcon } from "../../Icons";
import { TokenChip } from "./RouteDiagramV2";
import { RouteDiagramV4 } from "./RouteDiagramV4";
import type { RouteV4 } from "./types";

const ModalCard = styled(Card)`
  width: 560px;
  max-width: 100%;
`;

const HeaderInner = styled(CardHeader)`
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SummaryRow = styled.div`
  padding: 14px 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummarySide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SummaryDivider = styled.div`
  flex: 1;
  margin: 0 12px;
  height: 1px;
  border-top: 1px dashed ${({ theme }) => theme.colors.cardBorder};
`;

const SubtitleRow = styled.div`
  padding: 8px 24px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const DiagramArea = styled.div`
  padding: 8px 24px 16px;
  overflow-x: auto;
`;

const FooterArea = styled(CardFooter)`
  padding: 12px 24px 18px;
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

interface RouterModalV4Props {
  route: RouteV4;
  onClose?: () => void;
}

export function RouterModalV4({ route, onClose }: RouterModalV4Props) {
  const totalPools = route.branches.reduce(
    (a, b) => a + b.legs.reduce((x, l) => x + l.pools.length, 0),
    0,
  );

  return (
    <ModalCard>
      <HeaderInner>
        <HeaderTitle>
          <Text bold fontSize="20px">
            Route
          </Text>
          <HelpIcon width="18px" color="textSubtle" />
        </HeaderTitle>
        <IconButton variant="text" scale="sm" onClick={onClose} aria-label="Close">
          <CloseIcon color="text" width="20px" />
        </IconButton>
      </HeaderInner>

      <SummaryRow>
        <SummarySide>
          <TokenChip token={route.src.token} size={28} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
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
            }}
          >
            <Text bold fontSize="15px">
              {route.dst.amount}
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
        <RouteDiagramV4 route={route} />
      </DiagramArea>

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
