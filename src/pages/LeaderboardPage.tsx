import { useState } from 'react'
import { styled } from 'styled-components'
import { Text } from '../primitives/Text'
import { Toggle } from '../primitives/Toggle'
import { IconButton } from '../primitives/Button'
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  BellIcon,
  CogIcon,
  ChevronDownIcon,
  SearchIcon,
  SwapVertIcon,
} from '../primitives/Icons'
import './LeaderboardPage.css'

/* ── Types ──────────────────────────────────────────────── */

export interface LeaderboardRow {
  rank: number
  trader: string
  xAccount?: string
  pnl: string
  volume: string
}

export interface LeaderboardPageProps {
  yourRanking?: LeaderboardRow
  rows?: LeaderboardRow[]
  lastUpdated?: string
  walletDisplay?: string
  walletBalance?: string
  totalPages?: number
}

/* ── Demo data ──────────────────────────────────────────── */

const DEMO_YOUR_RANKING: LeaderboardRow = {
  rank: 43,
  trader: '0x64A1...45a0',
  xAccount: '@pancakeswaptrader',
  pnl: '+$48,098.22',
  volume: '$1,098,098.15',
}

const DEMO_ROWS: LeaderboardRow[] = Array.from({ length: 10 }, (_, i) => ({
  rank: i + 1,
  trader: '0x64A1...45a0',
  pnl: '+$48,098.22',
  volume: '$1,098,098.15',
}))

/* ── Sub-components ─────────────────────────────────────── */

function NavBar({
  walletDisplay = '0x1234…abcd',
  walletBalance = '$6,488.98',
}: {
  walletDisplay?: string
  walletBalance?: string
}) {
  const tabs = ['Trade', 'Perps', 'Earn', 'Play', 'AI']
  return (
    <header className="lb-nav">
      <div className="lb-nav-left">
        <a className="lb-brand" href="#">
          <span className="lb-bunny" aria-hidden>
            🥞
          </span>
          <span className="lb-brand-text">PancakeSwap</span>
          <ChevronDownIcon size={20} className="lb-brand-caret" />
        </a>
        <nav className="lb-tabs" aria-label="Primary">
          {tabs.map((t) => (
            <a className="lb-tab" key={t} href="#">
              {t}
            </a>
          ))}
          <a className="lb-tab lb-tab-active" href="#">
            Dashboard
          </a>
        </nav>
      </div>

      <div className="lb-nav-right">
        <button className="lb-search" type="button">
          <SearchIcon size={20} />
          <span>Search</span>
          <kbd className="lb-search-kbd">/</kbd>
        </button>
        <IconButton variant="text" scale="md" aria-label="Settings">
          <CogIcon size={24} />
        </IconButton>
        <IconButton variant="text" scale="md" aria-label="Notifications">
          <BellIcon size={24} />
        </IconButton>
        <div className="lb-wallet">
          <span className="lb-wallet-avatar" aria-hidden>
            <img
              src="https://cdn.jsdelivr.net/gh/MetaMask/brand-resources@master/SVG/metamask-fox.svg"
              alt=""
              width={18}
              height={18}
            />
          </span>
          <span className="lb-wallet-balance">
            <strong>{walletBalance.split('.')[0]}</strong>
            <span className="lb-wallet-decimals">.{walletBalance.split('.')[1]}</span>
          </span>
          <ChevronDownIcon size={20} />
          {/* hidden helper: lets future consumers swap walletDisplay in */}
          <span className="lb-sr">{walletDisplay}</span>
        </div>
      </div>
    </header>
  )
}

function Dropdown({ label }: { label: string }) {
  return (
    <button className="lb-dropdown" type="button">
      <span className="lb-dropdown-label">{label}</span>
      <ChevronDownIcon size={20} />
    </button>
  )
}

function HeaderSection({ lastUpdated }: { lastUpdated: string }) {
  return (
    <section className="lb-section lb-section-header">
      <div className="lb-title-row">
        <h1 className="lb-page-title">Leaderboard</h1>
        <p className="lb-last-updated">Last updated: {lastUpdated}</p>
      </div>
      <div className="lb-filters">
        <Dropdown label="All" />
        <Dropdown label="7D" />
      </div>
    </section>
  )
}

const HeaderCell = styled.th<{ $align?: 'left' | 'right' | 'center' }>`
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: ${(p) => p.$align ?? 'left'};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const BodyCell = styled.td<{ $align?: 'left' | 'right' | 'center' }>`
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: ${(p) => p.$align ?? 'left'};
  color: ${({ theme }) => theme.colors.text};
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  white-space: nowrap;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr:last-child td {
    border-bottom: none;
  }
`

const SortToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  padding: 0;
  vertical-align: middle;
  background: ${({ theme }) => theme.colors.tertiary};
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.textSubtle};
  cursor: pointer;
`

function YourRankingSection({ data }: { data: LeaderboardRow }) {
  return (
    <section className="lb-section">
      <h2 className="lb-section-title">Your ranking</h2>
      <div className="lb-card">
        <StyledTable>
          <thead>
            <tr>
              <HeaderCell style={{ width: 65 }}>Rank</HeaderCell>
              <HeaderCell style={{ width: 143 }} $align="right">
                Trader
              </HeaderCell>
              <HeaderCell $align="right">X account</HeaderCell>
              <HeaderCell $align="right">PnL (30d)</HeaderCell>
              <HeaderCell $align="right">Volume</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <BodyCell style={{ textAlign: 'center', fontWeight: 600 }}>{data.rank}</BodyCell>
              <BodyCell $align="right">{data.trader}</BodyCell>
              <BodyCell $align="right">{data.xAccount}</BodyCell>
              <BodyCell $align="right">
                {data.pnl} <span className="lb-unit">USD</span>
              </BodyCell>
              <BodyCell $align="right">{data.volume}</BodyCell>
            </tr>
          </tbody>
        </StyledTable>
      </div>
    </section>
  )
}

function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number
  totalPages: number
  onPageChange: (next: number) => void
}) {
  const canPrev = page > 1
  const canNext = page < totalPages
  return (
    <div className="lb-pagination">
      <button
        type="button"
        className="lb-page-btn"
        aria-label="Previous page"
        disabled={!canPrev}
        onClick={() => canPrev && onPageChange(page - 1)}
      >
        <ArrowBackIcon size={24} />
      </button>
      <span className="lb-page-label">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        className="lb-page-btn lb-page-btn-next"
        aria-label="Next page"
        disabled={!canNext}
        onClick={() => canNext && onPageChange(page + 1)}
      >
        <ArrowForwardIcon size={24} />
      </button>
    </div>
  )
}

function LeaderboardSection({
  rows,
  privacy,
  onPrivacyChange,
  page,
  totalPages,
  onPageChange,
}: {
  rows: LeaderboardRow[]
  privacy: boolean
  onPrivacyChange: (v: boolean) => void
  page: number
  totalPages: number
  onPageChange: (next: number) => void
}) {
  return (
    <section className="lb-section">
      <h2 className="lb-section-title">Leaderboard</h2>
      <div className="lb-card lb-card-leaderboard">
        <div className="lb-privacy-bar">
          <Text className="lb-privacy-note">
            *Only considers Pro trading data. Excluding accounts with balances less than 1,000 USD.
          </Text>
          <div className="lb-privacy-toggle">
            <Text bold>Account privacy</Text>
            <Toggle checked={privacy} onChange={(e) => onPrivacyChange(e.target.checked)} scale="sm" />
          </div>
        </div>
        <StyledTable>
          <thead>
            <tr>
              <HeaderCell style={{ width: 65 }}>Rank</HeaderCell>
              <HeaderCell style={{ width: 143 }} $align="right">
                Trader
              </HeaderCell>
              <HeaderCell $align="right">
                PnL (30d)
                <SortToggle aria-label="Sort by PnL">
                  <SwapVertIcon size={14} />
                </SortToggle>
              </HeaderCell>
              <HeaderCell $align="right">
                Volume (30d)
                <SortToggle aria-label="Sort by Volume">
                  <SwapVertIcon size={14} />
                </SortToggle>
              </HeaderCell>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.rank} className={r.rank <= 3 ? `lb-rank-${r.rank}` : undefined}>
                <BodyCell style={{ textAlign: 'center', fontWeight: 600 }}>{r.rank}</BodyCell>
                <BodyCell $align="right">{r.trader}</BodyCell>
                <BodyCell $align="right">
                  {r.pnl} <span className="lb-unit">USD</span>
                </BodyCell>
                <BodyCell $align="right">{r.volume}</BodyCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </section>
  )
}

/* ── Page ───────────────────────────────────────────────── */

export function LeaderboardPage({
  yourRanking = DEMO_YOUR_RANKING,
  rows = DEMO_ROWS,
  lastUpdated = '2026-04-12 00:00:00 - 2026-05-11 21:59:59',
  walletDisplay,
  walletBalance,
  totalPages = 30,
}: LeaderboardPageProps) {
  const [privacy, setPrivacy] = useState(false)
  const [page, setPage] = useState(1)
  return (
    <div className="lb-root">
      <NavBar walletDisplay={walletDisplay} walletBalance={walletBalance} />
      <main className="lb-body">
        <div className="lb-content">
          <HeaderSection lastUpdated={lastUpdated} />
          <YourRankingSection data={yourRanking} />
          <LeaderboardSection
            rows={rows}
            privacy={privacy}
            onPrivacyChange={setPrivacy}
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </main>
    </div>
  )
}
