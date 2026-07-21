/* eslint-disable react/no-array-index-key */
import React, { useMemo, useRef, useState, useEffect } from 'react'
import { styled, useTheme } from 'styled-components'
import { Box, Flex, Grid } from '../primitives/Box'
import { Heading } from '../primitives/Heading'
import { Text } from '../primitives/Text'
import { Button, IconButton } from '../primitives/Button'
import { Card, CardBody } from '../primitives/Card'
import { Input } from '../primitives/Input'
import { Tag } from '../primitives/Tag'
import { Modal, ModalProvider, useModal } from '../primitives/Modal'
import {
  SearchIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  CloseIcon,
  OpenNewIcon,
} from '../primitives/Icons'

// ---------- Data ----------

type Persona = 'new' | 'trader' | 'earner' | 'all'

interface FAQItem {
  id: number
  q: string
  a: string
  cat: string
  icon: string
  seg: Persona[]
  doc: string
  shill: { t: string; l: string } | null
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    q: 'What is PancakeSwap?',
    a: "PancakeSwap is the world's most popular decentralized exchange. Swap tokens, earn rewards, and trade — all without giving up control of your crypto. No accounts, no KYC, just connect and go.",
    cat: 'Welcome',
    icon: '🥞',
    seg: ['new'],
    doc: 'https://docs.pancakeswap.finance/',
    shill: { t: 'Try your first swap →', l: 'https://pancakeswap.finance/swap' },
  },
  {
    id: 2,
    q: 'How do I connect my wallet?',
    a: "Click 'Connect Wallet' on pancakeswap.finance. Use MetaMask, Trust Wallet, Binance Wallet, or social login (no seed phrase!). Make sure you're on BNB Chain.",
    cat: 'Welcome',
    icon: '💳',
    seg: ['new'],
    doc: 'https://docs.pancakeswap.finance/get-started/connection-guide',
    shill: { t: 'Connect & swap →', l: 'https://pancakeswap.finance/swap' },
  },
  {
    id: 3,
    q: 'How do I make my first swap?',
    a: 'Connect wallet → pick tokens (e.g. BNB → CAKE) → enter amount → hit Swap → confirm in wallet. Done in under a minute.',
    cat: 'Welcome',
    icon: '⚡',
    seg: ['new'],
    doc: 'https://docs.pancakeswap.finance/products/pancakeswap-exchange',
    shill: { t: 'Make your first swap →', l: 'https://pancakeswap.finance/swap' },
  },
  {
    id: 4,
    q: 'What is social login?',
    a: 'Create a self-custodial wallet with just Google or email. No seed phrase, no extension. The easiest onramp to PancakeSwap.',
    cat: 'Welcome',
    icon: '🔓',
    seg: ['new'],
    doc: 'https://docs.pancakeswap.finance/',
    shill: null,
  },
  {
    id: 5,
    q: "What are PancakeSwap's fees?",
    a: 'V2: flat 0.25%. V3: flexible tiers (0.01%, 0.05%, 0.25%, 1%). No frontend surcharge. BNB Chain gas is usually pennies.',
    cat: 'Trading',
    icon: '💰',
    seg: ['new', 'trader'],
    doc: 'https://docs.pancakeswap.finance/products/pancakeswap-exchange/faq',
    shill: { t: 'See fees live →', l: 'https://pancakeswap.finance/swap' },
  },
  {
    id: 6,
    q: 'What is slippage and how do I set it?',
    a: 'The gap between expected and actual price. Set via gear icon: 0.5% for most tokens, 1-5% for volatile ones. Failed swap? Increase slippage.',
    cat: 'Trading',
    icon: '🎯',
    seg: ['trader'],
    doc: 'https://docs.pancakeswap.finance/products/pancakeswap-exchange/faq',
    shill: null,
  },
  {
    id: 7,
    q: "How do I fix 'Insufficient output amount'?",
    a: "Slippage too low or thin liquidity. Fix: (1) bump slippage to 1-3%, (2) smaller amount, (3) try later. Can't sell at all? Might be a scam token.",
    cat: 'Troubleshooting',
    icon: '🔧',
    seg: ['new', 'trader'],
    doc: 'https://docs.pancakeswap.finance/welcome-to-pancakeswap/contact-us/faq/troubleshooting',
    shill: null,
  },
  {
    id: 8,
    q: 'Which chains are supported?',
    a: '9+ chains: BNB Chain, Ethereum, Arbitrum, Base, Solana, zkSync Era, Linea, opBNB, Monad. Bridge tokens directly in-app.',
    cat: 'Trading',
    icon: '🌍',
    seg: ['trader'],
    doc: 'https://docs.pancakeswap.finance/',
    shill: { t: 'Cross-chain swap →', l: 'https://pancakeswap.finance/swap' },
  },
  {
    id: 9,
    q: 'How do I provide liquidity?',
    a: 'Liquidity page → pick pair → choose V3/Infinity → set price range → deposit. Earn fees from every swap in your pool.',
    cat: 'Earning',
    icon: '💧',
    seg: ['earner'],
    doc: 'https://docs.pancakeswap.finance/products/pancakeswap-exchange/liquidity-guide',
    shill: { t: 'Add liquidity →', l: 'https://pancakeswap.finance/liquidity' },
  },
  {
    id: 10,
    q: 'What is impermanent loss?',
    a: "When your deposited tokens' price ratio shifts vs. holding. It's 'impermanent' — reverses if prices return. Fees often offset it, but it's the LP's key risk.",
    cat: 'Earning',
    icon: '⚠️',
    seg: ['earner'],
    doc: 'https://docs.pancakeswap.finance/products/pancakeswap-exchange/liquidity-guide',
    shill: null,
  },
  {
    id: 11,
    q: 'How do I stake CAKE?',
    a: 'Syrup Pools page → stake CAKE → earn CAKE or partner tokens. Flexible = withdraw anytime. Fixed = higher APR, locked period.',
    cat: 'Earning',
    icon: '🍰',
    seg: ['earner'],
    doc: 'https://docs.pancakeswap.finance/products/syrup-pool',
    shill: { t: 'Stake CAKE →', l: 'https://pancakeswap.finance/pools' },
  },
  {
    id: 12,
    q: 'What is PancakeSwap Infinity?',
    a: 'The latest liquidity engine (April 2025). CLAMM + LBAMM pools, custom fees, programmable hooks, less gas. V3, evolved.',
    cat: 'Product',
    icon: '♾️',
    seg: ['earner', 'trader'],
    doc: 'https://docs.pancakeswap.finance/',
    shill: { t: 'Explore Infinity →', l: 'https://pancakeswap.finance/liquidity' },
  },
  {
    id: 13,
    q: 'What is CAKE Tokenomics 3.0?',
    a: 'Buy-and-burn model (April 2025). veCAKE retired, emissions cut to ~22k/day, max supply now 400M. Deflationary for 29+ months.',
    cat: 'Tokenomics',
    icon: '🔥',
    seg: ['earner'],
    doc: 'https://docs.pancakeswap.finance/protocol/cake-tokenomics',
    shill: {
      t: 'Buy CAKE →',
      l: 'https://pancakeswap.finance/swap?outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
  },
  {
    id: 14,
    q: 'How do I spot scams?',
    a: "Never share your seed phrase. Admins NEVER DM first. Check you're on pancakeswap.finance. Ignore 'free CAKE' giveaways and wallet 'validation' requests.",
    cat: 'Security',
    icon: '🛡️',
    seg: ['new', 'trader', 'earner'],
    doc: 'https://docs.pancakeswap.finance/welcome-to-pancakeswap/contact-us/faq',
    shill: null,
  },
  {
    id: 15,
    q: 'What is CAKE.PAD?',
    a: 'Replaced IFOs. Use CAKE for early access to new token launches. Participation fees are burned — every launch makes CAKE scarcer.',
    cat: 'Product',
    icon: '🎪',
    seg: ['trader', 'earner'],
    doc: 'https://docs.pancakeswap.finance/',
    shill: { t: 'See launches →', l: 'https://pancakeswap.finance/' },
  },
  {
    id: 16,
    q: 'Why did my transaction fail?',
    a: "Common causes: expired (confirm faster), gas too low (increase gas limit), network congestion (wait and retry). Don't panic — your funds are safe in your wallet.",
    cat: 'Troubleshooting',
    icon: '⏳',
    seg: ['new', 'trader'],
    doc: 'https://docs.pancakeswap.finance/welcome-to-pancakeswap/contact-us/faq/troubleshooting',
    shill: null,
  },
  {
    id: 17,
    q: 'How do yield farms work?',
    a: 'Deposit LP tokens into farms to earn CAKE rewards on top of trading fees. Higher APR = more volatile. Always check if the farm pair matches your risk tolerance.',
    cat: 'Earning',
    icon: '🌾',
    seg: ['earner'],
    doc: 'https://docs.pancakeswap.finance/products/yield-farming',
    shill: { t: 'Browse farms →', l: 'https://pancakeswap.finance/farms' },
  },
  {
    id: 18,
    q: 'Is PancakeSwap safe?',
    a: 'Non-custodial (your keys, your crypto). Multiple audits (Infinity, V3, MasterChef). Multisig contracts with timelocks. Bug bounty program. But always DYOR on individual tokens.',
    cat: 'Security',
    icon: '🔒',
    seg: ['new'],
    doc: 'https://docs.pancakeswap.finance/welcome-to-pancakeswap/contact-us/faq',
    shill: null,
  },
]

interface PersonaInfo {
  id: Persona
  emoji: string
  name: string
  desc: string
  colorKey: 'warning' | 'primary' | 'secondary'
  menuName: string
  menuDesc: string
}

const PERSONAS: PersonaInfo[] = [
  {
    id: 'new',
    emoji: '🐣',
    name: "I'm new here",
    desc: 'Wallets, first swap, staying safe',
    colorKey: 'warning',
    menuName: 'Starter menu',
    menuDesc: 'The essentials to get you going',
  },
  {
    id: 'trader',
    emoji: '🚀',
    name: "I'm here to trade",
    desc: 'Fees, slippage, multichain, perps',
    colorKey: 'primary',
    menuName: "Trader's specials",
    menuDesc: 'Everything for the active swapper',
  },
  {
    id: 'earner',
    emoji: '🍯',
    name: 'I want to earn',
    desc: 'Liquidity, farming, staking CAKE',
    colorKey: 'secondary',
    menuName: "Chef's earning menu",
    menuDesc: 'Put your crypto to work',
  },
]

const genTicket = () =>
  `PCS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

// ---------- Bunny avatar (small inline drawing for chat header) ----------

const Bunny = ({ size = 40 }: { size?: number }) => (
  <svg viewBox="0 0 120 120" fill="none" width={size} height={size}>
    <ellipse cx="44" cy="28" rx="9" ry="23" fill="#D1884F" transform="rotate(-12 44 28)" />
    <ellipse cx="44" cy="26" rx="6" ry="18" fill="#FEDC90" transform="rotate(-12 44 28)" />
    <ellipse cx="76" cy="28" rx="9" ry="23" fill="#D1884F" transform="rotate(12 76 28)" />
    <ellipse cx="76" cy="26" rx="6" ry="18" fill="#FEDC90" transform="rotate(12 76 28)" />
    <circle cx="60" cy="68" r="28" fill="#D1884F" />
    <circle cx="60" cy="66" r="28" fill="#FEDC90" />
    <circle cx="48" cy="62" r="4.5" fill="#633001" />
    <circle cx="72" cy="62" r="4.5" fill="#633001" />
    <circle cx="49" cy="60.5" r="1.6" fill="white" />
    <circle cx="73" cy="60.5" r="1.6" fill="white" />
    <ellipse cx="60" cy="72" rx="3.5" ry="2" fill="#D1884F" />
    <path d="M53 76 Q60 81 67 76" stroke="#D1884F" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <circle cx="40" cy="68" r="5.5" fill="#ED4B9E" opacity=".2" />
    <circle cx="80" cy="68" r="5.5" fill="#ED4B9E" opacity=".2" />
  </svg>
)

// ---------- Pancake rain (cosmetic only) ----------

const PancakeRainCanvas = styled.canvas`
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
`

const usePancakeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pancakesRef = useRef<
    { x: number; y: number; vx: number; vy: number; r: number; rs: number; s: number; o: number }[]
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    let raf = 0
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pancakesRef.current.forEach((p) => {
        // eslint-disable-next-line no-param-reassign
        p.x += p.vx
        // eslint-disable-next-line no-param-reassign
        p.vy += 0.35
        // eslint-disable-next-line no-param-reassign
        p.y += p.vy
        // eslint-disable-next-line no-param-reassign
        p.r += p.rs
        if (p.y > canvas.height - 100) {
          // eslint-disable-next-line no-param-reassign
          p.o -= 0.03
        }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.r * Math.PI) / 180)
        ctx.globalAlpha = p.o
        ctx.beginPath()
        ctx.ellipse(0, 2, p.s, p.s * 0.38, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#D1884F'
        ctx.fill()
        ctx.beginPath()
        ctx.ellipse(0, -1, p.s, p.s * 0.38, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#FEDC90'
        ctx.fill()
        ctx.restore()
      })
      pancakesRef.current = pancakesRef.current.filter((p) => p.o > 0 && p.y < canvas.height + 50)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const spawn = (x: number, y: number, n = 10) => {
    for (let i = 0; i < n; i += 1) {
      pancakesRef.current.push({
        x: x + (Math.random() - 0.5) * 80,
        y: y - 10,
        vx: (Math.random() - 0.5) * 5,
        vy: -(Math.random() * 7 + 3),
        r: Math.random() * 360,
        rs: (Math.random() - 0.5) * 10,
        s: 12 + Math.random() * 16,
        o: 1,
      })
    }
  }

  return { canvasRef, spawn }
}

// ---------- Styled helpers ----------

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 0 20px;
`

const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`

const Hero = styled.div`
  text-align: center;
  padding: 56px 20px 28px;
  max-width: 740px;
  margin: 0 auto;
`

const ShimmerHeading = styled(Heading)`
  display: inline;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.failure}
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s ease infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const PersonaCard = styled.div<{ accent: string }>`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 20px;
  padding: 28px 24px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &:hover {
    border-color: ${({ accent }) => accent};
  }
`

const MenuBanner = styled(Flex)`
  background: var(--pcs-colors-card-header);
  border-radius: 20px;
  padding: 24px 28px;
  margin-bottom: 28px;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
`

const FAQItemCard = styled(Card)<{ $open: boolean }>`
  cursor: pointer;
  border: 2px solid ${({ theme, $open }) => ($open ? theme.colors.primary : theme.colors.cardBorder)};
  transition: all 0.3s;
`

const Chevron = styled(ChevronDownIcon)<{ $open: boolean }>`
  transition: transform 0.3s;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
`

const FilterScroller = styled(Flex)`
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 14px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const PillButton = styled(Button)`
  white-space: nowrap;
  flex-shrink: 0;
`

const FabButton = styled(IconButton)<{ $open: boolean }>`
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 200;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid ${({ theme, $open }) => ($open ? theme.colors.failure : theme.colors.primary)};
  background: ${({ theme }) => theme.colors.backgroundAlt};
  box-shadow: 0 4px 24px rgba(31, 199, 212, 0.25);
  animation: ${({ $open }) => ($open ? 'none' : 'fabPulse 3s ease infinite')};
  @keyframes fabPulse {
    0%,
    100% {
      box-shadow: 0 4px 24px rgba(31, 199, 212, 0.25);
    }
    50% {
      box-shadow: 0 4px 32px rgba(31, 199, 212, 0.5), 0 0 0 8px rgba(31, 199, 212, 0.06);
    }
  }
`

const ChatPanel = styled.div<{ $open: boolean }>`
  position: fixed;
  bottom: 96px;
  left: 24px;
  z-index: 199;
  width: 390px;
  max-width: calc(100vw - 48px);
  height: 540px;
  max-height: calc(100vh - 130px);
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)')};
  pointer-events: ${({ $open }) => ($open ? 'all' : 'none')};
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
`

const ChatHeader = styled(Flex)`
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  align-items: center;
  gap: 10px;
  background: var(--pcs-colors-card-header);
`

const ChatBubble = styled.div<{ $assistant: boolean }>`
  max-width: 82%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 13px;
  line-height: 1.55;
  white-space: pre-wrap;
  background: ${({ theme, $assistant }) => ($assistant ? theme.colors.input : theme.colors.primary)};
  color: ${({ theme, $assistant }) => ($assistant ? theme.colors.text : theme.colors.background)};
  border-bottom-left-radius: ${({ $assistant }) => ($assistant ? '4px' : '16px')};
  border-bottom-right-radius: ${({ $assistant }) => ($assistant ? '16px' : '4px')};
  align-self: ${({ $assistant }) => ($assistant ? 'flex-start' : 'flex-end')};
  font-weight: ${({ $assistant }) => ($assistant ? 400 : 500)};
`

const TypingDots = styled.div`
  display: flex;
  gap: 4px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  width: fit-content;
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.textDisabled};
    animation: typeDot 1.4s ease infinite;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes typeDot {
    0%,
    60%,
    100% {
      transform: translateY(0);
      opacity: 0.4;
    }
    30% {
      transform: translateY(-6px);
      opacity: 1;
    }
  }
`

const TicketIdBox = styled(Box)`
  background: ${({ theme }) => theme.colors.input};
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 14px;
`

// ---------- Inline brand marks ----------

const LogoMark: React.FC<{ height?: number }> = ({ height = 28 }) => {
  const width = (451 / 47) * height
  return (
    <svg width={width} height={height} viewBox="0 0 451 47" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M289.032 18.3242C296.405 18.3243 300.092 21.4494 300.092 27.6992C300.092 30.5309 299.31 32.7892 297.748 34.4736C296.186 36.1582 293.976 37 291.119 37C290.314 37 289.532 36.9023 288.775 36.707C288.043 36.5117 287.433 36.2431 286.944 35.9014V42.0176C286.944 42.6522 286.798 43.1162 286.505 43.4092C286.212 43.7019 285.712 43.8486 285.004 43.8486H281.598C280.89 43.8486 280.39 43.702 280.097 43.4092C279.828 43.1162 279.694 42.6522 279.694 42.0176V21.0342C280.793 20.253 282.172 19.6054 283.832 19.0928C285.492 18.5801 287.226 18.3242 289.032 18.3242ZM67.3643 11.5488C70.7819 11.5489 73.296 12.2697 74.9072 13.71C76.5185 15.1504 77.3242 17.2989 77.3242 20.1553C77.3242 22.9871 76.5185 25.1231 74.9072 26.5635C73.3204 27.9793 70.8062 28.6874 67.3643 28.6875H63.8848V34.6201C63.8848 35.2548 63.7383 35.7188 63.4453 36.0117C63.1524 36.3046 62.6521 36.4511 61.9443 36.4512H58.3916C57.6839 36.4511 57.1836 36.3045 56.8906 36.0117C56.6221 35.7188 56.4873 35.2548 56.4873 34.6201V13.417C56.4873 12.7824 56.6339 12.3184 56.9268 12.0254C57.2197 11.708 57.7081 11.5489 58.3916 11.5488H67.3643Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.091 47.0091C16.1812 47.0039 10.6153 45.3458 6.72633 42.3677C2.79071 39.3538 0.702881 35.0768 0.702881 30.2373C0.702881 25.5742 2.78613 22.2116 5.14332 19.9387C6.99062 18.1575 9.02915 17.0168 10.4486 16.3606C10.1276 15.3755 9.72713 14.0858 9.36883 12.7538C8.8894 10.9714 8.41907 8.88012 8.41907 7.34767C8.41907 5.53379 8.81454 3.71214 9.88085 2.29665C11.0074 0.801151 12.7035 0 14.7438 0C16.3384 0 17.6923 0.591505 18.7522 1.61191C19.7653 2.58727 20.4396 3.88259 20.9051 5.23286C21.7232 7.60555 22.0418 10.5865 22.1311 13.5612H24.0855C24.1748 10.5865 24.4933 7.60555 25.3114 5.23286C25.777 3.88259 26.4513 2.58727 27.4644 1.61191C28.5243 0.591505 29.8781 0 31.4728 0C33.5131 0 35.2091 0.801151 36.3357 2.29665C37.402 3.71214 37.7975 5.53379 37.7975 7.34767C37.7975 8.88012 37.3272 10.9714 36.8477 12.7538C36.4894 14.0858 36.089 15.3755 35.768 16.3606C37.1874 17.0168 39.2259 18.1575 41.0732 19.9387C43.4304 22.2116 45.5137 25.5742 45.5137 30.2373C45.5137 35.0768 43.4258 39.3538 39.4902 42.3677C35.6013 45.3458 30.0353 47.0039 23.1256 47.0091H23.091Z"
        fill="#633001"
      />
      <path
        d="M14.7438 1.7251C11.7554 1.7251 10.3798 3.97732 10.3798 7.09209C10.3798 9.56788 11.9781 14.5262 12.6339 16.4564C12.7814 16.8906 12.5497 17.3662 12.127 17.5346C9.73183 18.4886 2.66357 21.9818 2.66357 29.9817C2.66357 38.4088 9.84654 44.7628 23.0925 44.7729C23.0978 44.7729 23.103 44.7729 23.1083 44.7729C23.1136 44.7729 23.1188 44.7729 23.1241 44.7729C36.3701 44.7628 43.553 38.4088 43.553 29.9817C43.553 21.9818 36.4848 18.4886 34.0897 17.5346C33.6669 17.3662 33.4352 16.8906 33.5827 16.4564C34.2385 14.5262 35.8368 9.56788 35.8368 7.09209C35.8368 3.97732 34.4612 1.7251 31.4728 1.7251C27.171 1.7251 26.0987 7.88083 26.0222 14.4874C26.0171 14.9285 25.6642 15.2863 25.2275 15.2863H20.9891C20.5524 15.2863 20.1995 14.9285 20.1944 14.4874C20.1179 7.88083 19.0456 1.7251 14.7438 1.7251Z"
        fill="#D1884F"
      />
      <path
        d="M23.1241 42.0735C13.3916 42.0735 2.68039 36.8106 2.66361 29.9978C2.66359 30.0084 2.66357 30.0191 2.66357 30.0297C2.66357 38.4635 9.85797 44.8209 23.1241 44.8209C36.3903 44.8209 43.5847 38.4635 43.5847 30.0297C43.5847 30.0191 43.5846 30.0084 43.5846 29.9978C43.5678 36.8106 32.8566 42.0735 23.1241 42.0735Z"
        fill="#FEDC90"
      />
      <path
        d="M17.7165 27.9052C17.7165 30.2054 16.6404 31.4034 15.3131 31.4034C13.9857 31.4034 12.9097 30.2054 12.9097 27.9052C12.9097 25.6051 13.9857 24.4071 15.3131 24.4071C16.6404 24.4071 17.7165 25.6051 17.7165 27.9052Z"
        fill="#633001"
      />
      <path
        d="M33.3385 27.9052C33.3385 30.2054 32.2625 31.4034 30.9351 31.4034C29.6078 31.4034 28.5317 30.2054 28.5317 27.9052C28.5317 25.6051 29.6078 24.4071 30.9351 24.4071C32.2625 24.4071 33.3385 25.6051 33.3385 27.9052Z"
        fill="#633001"
      />
    </svg>
  )
}

const BunnyMark: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg
    width={size}
    height={(size * 1636) / 1349}
    viewBox="0 0 1349 1636"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1293.84 1201.94C1293.84 1410.99 1016.53 1580.46 674.448 1580.46C332.367 1580.46 55.0566 1410.99 55.0566 1201.94V1105.59H1293.84V1201.94Z"
      fill="#FEDC90"
    />
    <path
      d="M933.939 327.914C1025.73 327.914 1094.03 412.758 1074.41 502.433L1011.92 788.141C1181.63 855.655 1293.84 972.617 1293.84 1105.59C1293.84 1314.64 1016.53 1484.11 674.448 1484.11C332.368 1484.11 55.0568 1314.64 55.0566 1105.59C55.0566 967.863 175.431 847.314 355.396 781.092L294.444 502.433C274.829 412.758 343.121 327.914 434.916 327.914C514.331 327.914 578.709 392.293 578.709 471.707V731.573C609.913 728.614 641.887 727.077 674.448 727.077C713.989 727.077 752.665 729.342 790.146 733.67V471.707C790.146 392.293 854.525 327.915 933.939 327.914Z"
      fill="#D1884F"
    />
    <ellipse cx="433.573" cy="1078.07" rx="68.8212" ry="103.232" fill="#633001" />
    <path
      d="M395.115 901.331C509.939 901.331 603.021 994.415 603.021 1109.24C603.021 1224.06 509.939 1317.14 395.115 1317.14C280.292 1317.14 187.208 1224.06 187.208 1109.24C187.208 994.414 280.292 901.331 395.115 901.331Z"
      stroke="#633001"
      strokeWidth="45.6938"
    />
    <path
      d="M957.148 901.331C1071.97 901.331 1165.05 994.415 1165.05 1109.24C1165.05 1224.06 1071.97 1317.14 957.148 1317.14C842.325 1317.14 749.241 1224.06 749.241 1109.24C749.241 994.415 842.325 901.331 957.148 901.331Z"
      stroke="#633001"
      strokeWidth="45.6938"
    />
    <path
      d="M607.591 1106.95C632.265 1093.16 694.226 1073.85 744.672 1106.95"
      stroke="#633001"
      strokeWidth="45.6938"
    />
    <path
      d="M1000.98 1089.9C1000.98 1157.04 969.571 1192.01 930.825 1192.01C892.08 1192.01 860.67 1157.04 860.67 1089.9C860.67 1022.76 892.08 987.789 930.825 987.789C969.571 987.789 1000.98 1022.76 1000.98 1089.9Z"
      fill="#633001"
    />
  </svg>
)

// ---------- Page ----------

interface ChatMessage {
  role: 'user' | 'assistant'
  text: string
}

const cannedReply = (q: string): string => {
  const lower = q.toLowerCase()
  if (lower.includes('swap'))
    return 'Easy! Connect your wallet, pick your tokens, enter an amount, and hit Swap. Want me to walk you through it step-by-step, fren?'
  if (lower.includes('fee'))
    return 'V2 is a flat 0.25%, V3 has flexible tiers from 0.01% to 1%. BNB Chain gas is pennies. No frontend surcharge.'
  if (lower.includes('stake') || lower.includes('cake'))
    return 'Head to Syrup Pools, stake CAKE, earn CAKE (or partner tokens). Flexible lets you withdraw anytime; Fixed gives higher APR but locks for a period.'
  if (lower.includes('fail'))
    return 'Most common cause is slippage too low. Bump it to 1-3% in settings. If it still fails, try a smaller amount or wait for less congestion.'
  return "Great question! This is a Storybook demo — in production the Chef Bot would answer via the live Groq API. Try 'create ticket' to see the support flow."
}

const TicketModalContent: React.FC<{ ticketId: string; onDismiss?: () => void }> = ({ ticketId, onDismiss }) => {
  const theme = useTheme()
  return (
    <Modal title="Order up! Ticket created" onDismiss={onDismiss} minWidth="320px">
      <Box style={{ textAlign: 'center', maxWidth: 360 }}>
        <Text fontSize="44px" mb="10px">
          🎫
        </Text>
        <TicketIdBox>
          <Text color="textDisabled" fontSize="11px" mb="2px">
            Ticket ID
          </Text>
          <Text color="primary" fontSize="18px" bold style={{ fontFamily: 'monospace' }}>
            {ticketId}
          </Text>
        </TicketIdBox>
        <Text color="textSubtle" fontSize="12px" mb="14px" style={{ lineHeight: 1.6 }}>
          Conversation logged. Reference this on PancakeSwap Discord for follow-up.
        </Text>
        <Button
          onClick={() => {
            if (typeof navigator !== 'undefined' && navigator.clipboard) {
              navigator.clipboard.writeText(ticketId).catch(() => undefined)
            }
            onDismiss?.()
          }}
          style={{ background: theme.colors.primary }}
        >
          Copy ID & Close
        </Button>
      </Box>
    </Modal>
  )
}

const FAQKitchen: React.FC = () => {
  const theme = useTheme()
  const [persona, setPersona] = useState<Persona | null>(null)
  const [activeCat, setActiveCat] = useState('All')
  const [searchQ, setSearchQ] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [msgs, setMsgs] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      text: "Hey fren! 👋 I'm the PancakeSwap Chef Bot. Ask me anything — or describe your issue. If I can't fix it, I'll whip up a support ticket for you!",
    },
  ])
  const [chatIn, setChatIn] = useState('')
  const [typing, setTyping] = useState(false)
  const [ticketId, setTicketId] = useState<string | null>(null)
  const chatEnd = useRef<HTMLDivElement>(null)
  const { canvasRef, spawn } = usePancakeRain()

  const [onPresentTicket] = useModal(<TicketModalContent ticketId={ticketId ?? ''} />, true, true, 'ticketModal')

  useEffect(() => {
    if (ticketId) onPresentTicket()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticketId])

  const readFaq = openFaq ? FAQS.find((f) => f.id === openFaq) ?? null : null

  const filtered = useMemo(() => {
    return FAQS.filter((f) => {
      if (persona && persona !== 'all' && !f.seg.includes(persona)) return false
      if (activeCat !== 'All' && f.cat !== activeCat) return false
      if (searchQ && !`${f.q}${f.a}${f.cat}`.toLowerCase().includes(searchQ.toLowerCase())) return false
      return true
    })
  }, [persona, activeCat, searchQ])
  const cats = useMemo(() => ['All', ...Array.from(new Set(filtered.map((f) => f.cat)))], [filtered])

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  const personaInfo = PERSONAS.find((p) => p.id === persona)

  const send = (raw?: string) => {
    const t = (raw ?? chatIn).trim()
    if (!t || typing) return
    setChatIn('')
    setMsgs((p) => [...p, { role: 'user', text: t }])
    if (t.toLowerCase().includes('create ticket') || t.toLowerCase().includes('generate ticket')) {
      setTyping(true)
      window.setTimeout(() => {
        setTyping(false)
        const tid = genTicket()
        setTicketId(tid)
        const m = `🎫 Order up! Ticket created.\n\nTicket: ${tid}\nStatus: In the queue\n\nThe kitchen team will review. Use this ID on Discord for follow-up!`
        setMsgs((p) => [...p, { role: 'assistant', text: m }])
      }, 900)
      return
    }
    setTyping(true)
    window.setTimeout(() => {
      setTyping(false)
      setMsgs((p) => [...p, { role: 'assistant', text: cannedReply(t) }])
    }, 900)
  }

  return (
    <Box minHeight="100vh" background={theme.colors.background} color={theme.colors.text}>
      <PancakeRainCanvas ref={canvasRef} />

      {/* === NAV === */}
      <Nav>
        <NavInner>
          <Flex
            alignItems="center"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setPersona(null)
              setActiveCat('All')
              setOpenFaq(null)
              setSearchQ('')
            }}
          >
            <LogoMark height={28} />
          </Flex>
          <Flex alignItems="center" style={{ gap: 6 }}>
            {persona && (
              <Button
                variant="text"
                scale="sm"
                startIcon={<ChevronLeftIcon color="textSubtle" width="14px" />}
                onClick={() => {
                  setPersona(null)
                  setActiveCat('All')
                  setOpenFaq(null)
                }}
              >
                Change menu
              </Button>
            )}
            <Button
              scale="sm"
              onClick={(e: React.MouseEvent) => {
                setChatOpen((c) => !c)
                spawn(e.clientX, e.clientY, 8)
              }}
            >
              Ask the Chef
            </Button>
          </Flex>
        </NavInner>
      </Nav>

      {/* === HERO === */}
      <Hero>
        <Heading scale="xxl" mt="12px" mb="8px" style={{ fontSize: 32 }}>
          Welcome to the{' '}
          <ShimmerHeading as="span" scale="xxl" style={{ fontSize: 32, fontWeight: 800 }}>
            PancakeSwap Kitchen
          </ShimmerHeading>
        </Heading>
        <Text color="textSubtle" fontSize="16px" style={{ maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.55 }}>
          Got a question? Our Chef Bot has answers. Or browse the menu below.
        </Text>

        <Box style={{ maxWidth: 580, margin: '0 auto 10px', position: 'relative' }}>
          <Box
            style={{
              position: 'absolute',
              left: 18,
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.colors.textDisabled,
              pointerEvents: 'none',
            }}
          >
            <SearchIcon width="18px" color="textDisabled" />
          </Box>
          <Input
            scale="lg"
            value={chatIn}
            onChange={(e) => setChatIn(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter' && chatIn.trim()) {
                setChatOpen(true)
                send(chatIn)
              }
            }}
            placeholder="Ask the Chef anything..."
            style={{ paddingLeft: 50, height: 52, fontSize: 15, borderRadius: 20 }}
          />
        </Box>
        <Flex justifyContent="center" flexWrap="wrap" style={{ gap: 6, marginTop: 12 }}>
          {['How do I swap?', 'What are the fees?', 'Fix failed swap', 'Stake CAKE'].map((q) => (
            <Button
              key={q}
              scale="xs"
              variant="tertiary"
              onClick={() => {
                setChatIn(q)
                setChatOpen(true)
                send(q)
              }}
            >
              {q}
            </Button>
          ))}
        </Flex>
      </Hero>

      {/* === PERSONA PICKER === */}
      {!persona && (
        <Box style={{ maxWidth: 820, margin: '0 auto', padding: '20px 20px 40px' }}>
          <Box style={{ textAlign: 'center', marginBottom: 24 }}>
            <Text
              color="textDisabled"
              fontSize="13px"
              textTransform="uppercase"
              style={{ letterSpacing: 1.5, marginBottom: 6 }}
            >
              Choose your menu
            </Text>
            <Heading scale="lg">What brings you to the kitchen?</Heading>
          </Box>
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))" style={{ gap: 14 }}>
            {PERSONAS.map((p) => {
              const accent = theme.colors[p.colorKey]
              return (
                <PersonaCard
                  key={p.id}
                  accent={accent}
                  onClick={(e: React.MouseEvent) => {
                    setPersona(p.id)
                    setActiveCat('All')
                    setOpenFaq(null)
                    spawn(e.clientX, e.clientY, 20)
                  }}
                >
                  <Text fontSize="40px" mb="10px">
                    {p.emoji}
                  </Text>
                  <Text bold fontSize="18px" mb="4px">
                    {p.name}
                  </Text>
                  <Text color="textSubtle" fontSize="13px" style={{ lineHeight: 1.5, marginBottom: 14 }}>
                    {p.desc}
                  </Text>
                  <Text bold fontSize="12px" style={{ color: accent }}>
                    Open {p.menuName.toLowerCase()} →
                  </Text>
                </PersonaCard>
              )
            })}
          </Grid>
          <Box style={{ textAlign: 'center', marginTop: 20 }}>
            <Button
              variant="text"
              scale="sm"
              onClick={() => {
                setPersona('all')
                setActiveCat('All')
              }}
            >
              Explore the kitchen →
            </Button>
          </Box>
        </Box>
      )}

      {/* === MENU / FAQ === */}
      {persona && (
        <Box style={{ maxWidth: 820, margin: '0 auto', padding: '0 20px 60px' }}>
          {personaInfo && (
            <MenuBanner>
              <Text fontSize="48px">{personaInfo.emoji}</Text>
              <Box style={{ flex: 1, minWidth: 200 }}>
                <Text
                  color="textDisabled"
                  fontSize="11px"
                  textTransform="uppercase"
                  style={{ letterSpacing: 1.5, marginBottom: 2 }}
                >
                  Now serving
                </Text>
                <Text bold fontSize="22px">
                  {personaInfo.menuName}
                </Text>
                <Text color="textSubtle" fontSize="14px">
                  {personaInfo.menuDesc}
                </Text>
              </Box>
              <Button
                as="a"
                external
                href={
                  persona === 'earner'
                    ? 'https://pancakeswap.finance/liquidity/pools'
                    : 'https://pancakeswap.finance/swap'
                }
              >
                Launch App
              </Button>
            </MenuBanner>
          )}

          {persona === 'all' && !personaInfo && (
            <MenuBanner justifyContent="space-between">
              <Box>
                <Text
                  color="textDisabled"
                  fontSize="11px"
                  textTransform="uppercase"
                  style={{ letterSpacing: 1.5, marginBottom: 2 }}
                >
                  Now serving
                </Text>
                <Text bold fontSize="22px">
                  🥞 The full menu
                </Text>
              </Box>
              <Button as="a" external href="https://pancakeswap.finance/swap">
                Launch App
              </Button>
            </MenuBanner>
          )}

          {/* Search + filters */}
          <Box mb="12px" style={{ position: 'relative' }}>
            <Input
              scale="md"
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              placeholder="Search this menu..."
              style={{ paddingLeft: 40 }}
            />
            <Box
              style={{
                position: 'absolute',
                left: 13,
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <SearchIcon width="15px" color="textDisabled" />
            </Box>
          </Box>

          <FilterScroller>
            {cats.map((c) => (
              <PillButton
                key={c}
                scale="sm"
                variant={activeCat === c ? 'primary' : 'tertiary'}
                onClick={(e: React.MouseEvent) => {
                  setActiveCat(c)
                  spawn(e.clientX, e.clientY, 5)
                }}
              >
                {c === 'All' ? '🥞 All dishes' : c}
              </PillButton>
            ))}
          </FilterScroller>

          {/* Chef's recommendation */}
          {readFaq?.shill && (
            <Flex
              alignItems="center"
              justifyContent="space-between"
              mb="12px"
              style={{
                background: 'rgba(31, 199, 212, 0.06)',
                border: '1px solid rgba(31, 199, 212, 0.15)',
                borderRadius: 14,
                padding: '10px 16px',
                gap: 12,
              }}
            >
              <Text color="textSubtle" fontSize="12px">
                💡 Chef's recommendation
              </Text>
              <Text
                as="a"
                {...({ href: readFaq.shill.l, target: '_blank', rel: 'noopener noreferrer' } as any)}
                bold
                color="primary"
                fontSize="12px"
              >
                {readFaq.shill.t}
              </Text>
            </Flex>
          )}

          {/* FAQ items */}
          <Flex flexDirection="column" style={{ gap: 8 }}>
            {filtered.map((f) => {
              const open = openFaq === f.id
              return (
                <FAQItemCard
                  key={f.id}
                  $open={open}
                  onClick={(e: React.MouseEvent) => {
                    setOpenFaq(open ? null : f.id)
                    spawn(e.clientX, e.clientY, 4)
                  }}
                >
                  <CardBody p="0 !important">
                    <Flex alignItems="center" p="16px 20px" style={{ gap: 12 }}>
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          fontSize: 18,
                          flexShrink: 0,
                          background: 'rgba(31, 199, 212, 0.06)',
                        }}
                      >
                        {f.icon}
                      </Flex>
                      <Text bold fontSize="14px" style={{ flex: 1, lineHeight: 1.35 }}>
                        {f.q}
                      </Text>
                      <Chevron $open={open} width="14px" color="textDisabled" />
                    </Flex>
                    {open && (
                      <Box
                        p="0 20px 18px"
                        style={{ borderTop: `1px solid ${theme.colors.cardBorder}` }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Text color="textSubtle" fontSize="13px" mt="12px" mb="14px" style={{ lineHeight: 1.65 }}>
                          {f.a}
                        </Text>
                        <Flex flexWrap="wrap" alignItems="center" style={{ gap: 8 }}>
                          <Button
                            as="a"
                            external
                            href={f.doc}
                            scale="xs"
                            variant="text"
                            endIcon={<OpenNewIcon color="primary" width="12px" />}
                          >
                            📖 Full docs
                          </Button>
                          {f.shill && (
                            <Button as="a" external href={f.shill.l} scale="xs">
                              {f.shill.t}
                            </Button>
                          )}
                          <Button
                            scale="xs"
                            variant="tertiary"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation()
                              setChatIn(`Tell me more: ${f.q}`)
                              setChatOpen(true)
                              send(`Tell me more: ${f.q}`)
                            }}
                          >
                            👨‍🍳 Ask the Chef
                          </Button>
                        </Flex>
                      </Box>
                    )}
                  </CardBody>
                </FAQItemCard>
              )
            })}
          </Flex>

          {filtered.length === 0 && (
            <Box style={{ textAlign: 'center', padding: '48px 20px' }}>
              <Text fontSize="40px" mb="10px">
                🤔
              </Text>
              <Text bold fontSize="16px">
                Nothing on the menu for that
              </Text>
              <Text color="textDisabled" fontSize="13px" mt="4px">
                Try a different search or ask the Chef!
              </Text>
            </Box>
          )}

          <Box style={{ textAlign: 'center', padding: '32px 0 0' }}>
            <Text color="textDisabled" fontSize="14px" mb="12px">
              Still hungry for answers?
            </Text>
            <Button onClick={() => setChatOpen(true)}>👨‍🍳 Chat with the Chef</Button>
          </Box>
        </Box>
      )}

      {/* === CHAT FAB === */}
      <FabButton
        $open={chatOpen}
        variant="text"
        onClick={(e: React.MouseEvent) => {
          setChatOpen((c) => !c)
          spawn(e.clientX, e.clientY, 8)
        }}
      >
        <BunnyMark size={36} />
      </FabButton>

      {/* === CHAT PANEL === */}
      <ChatPanel $open={chatOpen}>
        <ChatHeader>
          <Bunny size={26} />
          <Box style={{ flex: 1 }}>
            <Text bold fontSize="13px">
              PancakeSwap Chef Bot
            </Text>
            <Flex alignItems="center" style={{ gap: 4 }}>
              <Box style={{ width: 5, height: 5, borderRadius: '50%', background: theme.colors.success }} />
              <Text color="success" fontSize="10px">
                Always cooking
              </Text>
            </Flex>
          </Box>
          <IconButton variant="text" scale="sm" onClick={() => setChatOpen(false)}>
            <CloseIcon color="textSubtle" width="16px" />
          </IconButton>
        </ChatHeader>

        <Box style={{ flex: 1, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {msgs.map((m, i) => (
            <ChatBubble key={i} $assistant={m.role === 'assistant'}>
              {m.text}
            </ChatBubble>
          ))}
          {typing && (
            <TypingDots>
              <span />
              <span />
              <span />
            </TypingDots>
          )}
          <div ref={chatEnd} />
        </Box>

        {readFaq && (
          <Box px="12px" pb="4px">
            <Text color="textDisabled" fontSize="10px">
              💡 Reading:{' '}
              <Text as="strong" bold color="primary" fontSize="10px">
                {readFaq.q}
              </Text>
            </Text>
          </Box>
        )}

        <Flex
          alignItems="center"
          style={{
            padding: '10px 12px',
            borderTop: `1px solid ${theme.colors.cardBorder}`,
            gap: 6,
          }}
        >
          <Input
            scale="sm"
            value={chatIn}
            onChange={(e) => setChatIn(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') send()
            }}
            placeholder="Ask the Chef..."
            style={{ borderRadius: 100 }}
          />
          <IconButton
            scale="sm"
            onClick={() => send()}
            disabled={typing}
            style={{ borderRadius: '50%', flexShrink: 0 }}
          >
            ➤
          </IconButton>
        </Flex>
      </ChatPanel>
    </Box>
  )
}

export const FAQKitchenPage: React.FC = () => (
  <ModalProvider>
    <FAQKitchen />
  </ModalProvider>
)

export const FAQTagShowcase: React.FC = () => (
  <Box p="32px">
    <Heading scale="lg" mb="16px">
      Category tags (Tag component)
    </Heading>
    <Flex flexWrap="wrap" style={{ gap: 8 }}>
      {Array.from(new Set(FAQS.map((f) => f.cat))).map((c) => (
        <Tag key={c} variant="secondary">
          {c}
        </Tag>
      ))}
    </Flex>
  </Box>
)
