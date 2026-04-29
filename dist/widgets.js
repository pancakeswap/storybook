import { B as e, D as t, E as n, F as r, H as i, Ht as a, Jn as o, Jt as s, Ki as c, M as l, Q as u, S as d, T as f, V as p, Vt as m, b as h, i as g, it as _, j as v, nn as y, nr as b, o as x, qi as S, qn as C, t as w, w as T, wi as E } from "./chunks/useTooltip-BHDD4AgF.js";
import D, { Children as O, cloneElement as k, useCallback as A, useEffect as j, useId as ee, useLayoutEffect as M, useMemo as N, useRef as P, useState as F } from "react";
import I, { css as L, useTheme as R } from "styled-components";
import { Fragment as z, jsx as B, jsxs as V } from "react/jsx-runtime";
import { createPortal as te } from "react-dom";
//#region src/widgets/primitives.tsx
var H = I(e)`
  border-radius: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  & > div {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 0;
    background: ${({ theme: e }) => e.colors.backgroundAlt};
  }
`, ne = I.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, re = I.button`
  background: transparent;
  border: 0;
  flex: ${({ $fullWidth: e }) => e ? "1" : "0 0 auto"};
  padding: ${({ $fullWidth: e }) => e ? "12px 0" : "8px 0 10px"};
  text-align: ${({ $fullWidth: e }) => e ? "center" : "left"};
  font-size: 14px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  border-bottom: 2px solid
    ${({ $active: e, $fullWidth: t, theme: n }) => e ? n.colors.primary : t ? n.colors.cardBorder : "transparent"};
  margin-bottom: ${({ $fullWidth: e }) => e ? "0" : "-1px"};
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s;

  &:hover:not(:disabled) {
    color: ${({ theme: e }) => e.colors.text};
  }
`, U = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(re, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), W = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(ne, {
	$fullWidth: r,
	children: O.map(n, (n, i) => !n || typeof n != "object" ? n : k(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), G = I(H)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, ie = I(r).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, ae = I(T)`
  justify-content: space-between;
  align-items: center;
`, oe = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, se = I(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, ce = I.button`
  flex: 1;
  height: 48px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: filter 0.12s, transform 0.1s;
  background: ${({ $variant: e, theme: t }) => e === "primary" ? t.colors.primary : t.colors.input};
  color: ${({ $variant: e, theme: t }) => e === "primary" ? t.colors.invertedContrast : t.colors.primary};
  &:hover:not(:disabled) {
    filter: brightness(1.08);
  }
  &:active:not(:disabled) {
    transform: scale(0.98);
    filter: brightness(0.95);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, le = I(T)`
  flex-direction: column;
  gap: 8px;
`, ue = I(se)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, de = (e) => e, fe = I(T)`
  align-items: center;
  gap: 12px;
  padding: 12px;
`, pe = I(r).attrs({ fontSize: "14px" })`
  flex: 1;
  color: ${({ theme: e }) => e.colors.text};
`, me = I.strong`
  margin-left: 8px;
  font-weight: 600;
`, he = I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 14px;
  background: ${({ theme: e }) => e.colors.primary};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s, transform 0.1s;
  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, ge = ({ state: e, canDeposit: t = !0, onDeposit: n, t: r = de, mobileLabel: i }) => {
	let a = e.kind === "ready" && e.equity ? e.equity : "$0.00";
	return /* @__PURE__ */ V(fe, { children: [/* @__PURE__ */ V(pe, { children: [
		i ?? r("Perpetual Account"),
		" ",
		/* @__PURE__ */ B(me, { children: a })
	] }), /* @__PURE__ */ B(he, {
		type: "button",
		onClick: n,
		disabled: !t,
		children: r("Deposit")
	})] });
}, _e = (e) => {
	let { isMobile: a } = h();
	if (a) return /* @__PURE__ */ B(ge, { ...e });
	let { walletDisplay: o, state: s, canDeposit: c = !0, canWithdraw: l = !0, onDeposit: u, onWithdraw: d, onEnableTrading: f, t: p = de } = e;
	return /* @__PURE__ */ V(G, { children: [
		/* @__PURE__ */ V(T, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(ce, {
				$variant: "primary",
				onClick: u,
				disabled: !c,
				children: p("Deposit")
			}), /* @__PURE__ */ B(ce, {
				$variant: "secondary",
				onClick: d,
				disabled: !l,
				children: p("Withdraw")
			})]
		}),
		s.kind === "needs-deposit" && /* @__PURE__ */ B(n, {
			variant: "warning",
			children: /* @__PURE__ */ V(T, {
				flexDirection: "column",
				style: { gap: 4 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "14px",
					bold: !0,
					children: p("Deposit to get started")
				}), /* @__PURE__ */ B(t, {
					fontSize: "12px",
					children: p("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
				})]
			})
		}),
		s.kind === "needs-trading" && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(n, {
			variant: "warning",
			children: /* @__PURE__ */ V(T, {
				flexDirection: "column",
				style: { gap: 4 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "14px",
					bold: !0,
					children: p("Enable Trading to view your Aster balance")
				}), /* @__PURE__ */ B(t, {
					fontSize: "12px",
					children: p("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
				})]
			})
		}), /* @__PURE__ */ B(i, {
			onClick: f,
			scale: "sm",
			variant: "primary",
			children: p("Enable Trading")
		})] }),
		s.kind === "ready" && /* @__PURE__ */ V(le, { children: [
			/* @__PURE__ */ B(ie, { children: p("Account Equity") }),
			/* @__PURE__ */ V(ae, { children: [/* @__PURE__ */ B(oe, { children: p("Wallet") }), /* @__PURE__ */ B(se, { children: o ?? "—" })] }),
			/* @__PURE__ */ V(ae, { children: [/* @__PURE__ */ B(oe, { children: p("Equity") }), /* @__PURE__ */ B(se, { children: s.equity || "—" })] }),
			/* @__PURE__ */ V(ae, { children: [/* @__PURE__ */ B(oe, { children: p("Available") }), /* @__PURE__ */ B(se, { children: s.available || "—" })] }),
			/* @__PURE__ */ V(ae, { children: [/* @__PURE__ */ B(oe, { children: p("Unrealized PnL") }), /* @__PURE__ */ B(ue, {
				$sign: s.pnlSign,
				children: s.unrealizedPnl || "—"
			})] }),
			/* @__PURE__ */ V(ae, { children: [/* @__PURE__ */ B(oe, { children: p("Margin mode") }), /* @__PURE__ */ B(se, { children: s.marginMode ?? p("Cross") })] })
		] })
	] });
}, ve = I(T)`
  gap: 10px;
  align-items: stretch;
`, ye = I(i).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, be = I(T)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, xe = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Se = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: a = 1, maxLeverage: o = 100, availableBalance: s, onConfirm: c, onClose: l, isSubmitting: u = !1, errorSlot: p, t: m = xe }) => {
	let [h, _] = F(n);
	j(() => {
		e && _(n);
	}, [e, n]);
	let v = (e) => Math.max(a, Math.min(o, Math.round(e))), y = s * h;
	return /* @__PURE__ */ B(x, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(g, {
			title: m("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: l,
			children: /* @__PURE__ */ V(T, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(ve, { children: [
						/* @__PURE__ */ B(ye, {
							onClick: () => _((e) => v(e - 1)),
							disabled: h <= a,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ V(be, { children: [h, "X"] }),
						/* @__PURE__ */ B(ye, {
							onClick: () => _((e) => v(e + 1)),
							disabled: h >= o,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ B(d, {
						variant: "dotted",
						name: "perp-leverage",
						min: 0,
						max: o,
						value: h,
						onValueChanged: (e) => _(v(e)),
						width: "100%"
					}),
					/* @__PURE__ */ V(f, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: m("Maximum position at current leverage:")
					}), /* @__PURE__ */ B(r, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(y) && y > 0 ? `${y.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ B(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: m("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					p,
					/* @__PURE__ */ B(i, {
						scale: "md",
						disabled: u,
						onClick: () => c(h),
						children: m(u ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, Ce = I.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, we = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Te = I.div`
  overflow-y: auto;
  min-height: 0;
`, Ee = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, De = I.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Oe = I.span`
  text-align: right;
`, ke = I(Oe)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ae = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, je = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = N(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ V(z, { children: [
		t && /* @__PURE__ */ B(Ce, { children: t }),
		/* @__PURE__ */ V(we, { children: [
			/* @__PURE__ */ B("span", { children: o }),
			/* @__PURE__ */ B("span", {
				style: { textAlign: "right" },
				children: s
			}),
			/* @__PURE__ */ B("span", {
				style: { textAlign: "right" },
				children: c
			})
		] }),
		/* @__PURE__ */ B(Te, { children: a.map((e) => /* @__PURE__ */ V(Ee, { children: [
			/* @__PURE__ */ B(De, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ B(Oe, { children: e.size }),
			/* @__PURE__ */ B(ke, { children: Ae(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ B("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ B(H, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, Me = I(f)`
  margin-top: 6px;
  padding: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  line-height: 1.45;
  color: ${({ theme: e }) => e.colors.textSubtle};
  word-break: break-all;
  white-space: pre-wrap;
  max-height: 120px;
  overflow: auto;
`, Ne = I(i).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Pe = (e) => e, Fe = ({ variant: e, title: i, message: a, details: o, t: s = Pe }) => {
	let [c, l] = F(!1);
	return i ? /* @__PURE__ */ B(n, {
		variant: e,
		children: /* @__PURE__ */ V(T, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ B(t, { children: /* @__PURE__ */ B(r, {
					fontSize: "13px",
					bold: !0,
					children: i
				}) }),
				/* @__PURE__ */ B(t, { children: /* @__PURE__ */ B(r, {
					fontSize: "12px",
					children: a
				}) }),
				o && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(Ne, {
					onClick: () => l((e) => !e),
					children: s(c ? "Hide details" : "Show details")
				}), c && /* @__PURE__ */ B(Me, { children: o })] })
			]
		})
	}) : /* @__PURE__ */ B(n, {
		variant: e,
		children: /* @__PURE__ */ B(t, { children: a })
	});
}, Ie = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Le = I(T)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Re = I(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, ze = I(T)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Be = I.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  background: ${({ $selected: e, theme: t }) => e ? t.colors.tertiary : "transparent"};
  cursor: pointer;
  width: 100%;
  text-align: left;
  &:hover {
    background: ${({ theme: e }) => e.colors.input};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, Ve = I(T)`
  flex-direction: column;
`, He = I.div`
  width: ${({ $size: e = 24 }) => e}px;
  height: ${({ $size: e = 24 }) => e}px;
  border-radius: 50%;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.text};
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
`, Ue = I.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.primary};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  &:hover { filter: brightness(1.1); }
`, We = I(T)`
  flex-direction: column;
  gap: 8px;
`, Ge = I(T)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
`, Ke = I(T)`
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 80px;
  padding: 0 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-radius: 24px;
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: ${({ theme: e }) => `inset 0px 2px 0px -1px ${e.colors.cardBorder}`};
  transition: border-color 0.12s, box-shadow 0.12s;
  &:focus-within {
    border-color: ${({ theme: e }) => e.colors.secondary};
    box-shadow:
      inset 0px 2px 0px -1px ${({ theme: e }) => e.colors.cardBorder},
      0 0 0 4px ${({ theme: e }) => `color-mix(in srgb, ${e.colors.secondary} 20%, transparent)`};
  }
`, qe = I.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 4px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${({ theme: e }) => e.colors.text};
  cursor: pointer;
  flex-shrink: 0;
  font-family: inherit;
  &:hover { filter: brightness(1.05); }
`, Je = I.input`
  background: transparent;
  border: 0;
  outline: 0;
  flex: 1;
  min-width: 0;
  text-align: right;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.24px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Ye = I(T)`
  align-items: center;
  gap: 8px;
`, Xe = I.button`
  background: transparent;
  border: 0;
  color: ${({ theme: e }) => e.colors.primary};
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12px;
  padding: 4px 0;
  cursor: pointer;
  &:hover { filter: brightness(1.1); }
`, Ze = I.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Qe = I.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, $e = I(T)`
  justify-content: space-between;
  align-items: center;
`, et = I(T)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, tt = [
	25,
	50,
	75
], nt = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: a, selectedAssetId: o, onSelectAsset: s, selectedAsset: c, destinationAddress: l, destinationChainName: u = "BSC", feeText: d, amount: p, onAmountChange: m, onPercentClick: h, onBack: v, onWithdraw: y, onClose: b, isSubmitting: S = !1, canSubmit: C = !0, errorSlot: w, t: E = Ie, renderTokenIcon: O }) => {
	let k = (e, t = 24) => O ? O(e, t) : /* @__PURE__ */ B(He, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ B(x, {
		isOpen: e,
		onDismiss: b,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(g, {
			title: t === "select" ? E("Withdraw from Aster") : E("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: b,
			children: /* @__PURE__ */ V(Le, { children: [
				t === "amount" && /* @__PURE__ */ B(T, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ V(Ue, {
						type: "button",
						onClick: v,
						"aria-label": "back",
						children: [/* @__PURE__ */ B(_, {
							width: "14px",
							color: "primary"
						}), /* @__PURE__ */ B("span", { children: E("Back") })]
					})
				}),
				t === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(f, { children: [/* @__PURE__ */ B(Re, {
						color: "textSubtle",
						children: E("Select asset")
					}), /* @__PURE__ */ B(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: E("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ B(r, {
						fontSize: "12px",
						children: E("Loading assets...")
					}),
					!n && a.length === 0 && /* @__PURE__ */ V(et, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						children: E("Nothing to withdraw yet")
					}), /* @__PURE__ */ B(r, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: E("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					a.length > 0 && /* @__PURE__ */ B(ze, { children: a.map((e) => /* @__PURE__ */ V(Be, {
						$selected: o === e.id,
						onClick: () => s(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ V(T, {
							alignItems: "center",
							style: { gap: 12 },
							children: [k(e, 32), /* @__PURE__ */ V(Ve, { children: [/* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ B(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: E("Withdrawable")
							})] })]
						}), /* @__PURE__ */ V(T, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ B(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && c && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(We, { children: [/* @__PURE__ */ V(Ge, { children: [/* @__PURE__ */ B(r, {
						fontSize: "12px",
						bold: !0,
						color: "textSubtle",
						children: E("Withdrawable: %amt% %sym%", {
							amt: c.withdrawableText,
							sym: c.symbol
						})
					}), h && /* @__PURE__ */ V(Ye, { children: [
						tt.map((e, t) => /* @__PURE__ */ V(D.Fragment, { children: [t > 0 && /* @__PURE__ */ B(Ze, {}), /* @__PURE__ */ V(Xe, {
							onClick: () => h(e),
							children: [e, "%"]
						})] }, e)),
						/* @__PURE__ */ B(Ze, {}),
						/* @__PURE__ */ B(Xe, {
							onClick: () => h(100),
							children: E("MAX")
						})
					] })] }), /* @__PURE__ */ V(Ke, { children: [/* @__PURE__ */ V(qe, {
						type: "button",
						children: [k(c, 40), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							bold: !0,
							children: c.displayName || c.symbol
						})]
					}), /* @__PURE__ */ B(Je, {
						value: p,
						onChange: (e) => m(e.target.value),
						placeholder: "0.0",
						inputMode: "decimal"
					})] })] }),
					/* @__PURE__ */ V(Qe, { children: [
						/* @__PURE__ */ V($e, { children: [/* @__PURE__ */ B(Re, {
							color: "textSubtle",
							children: E("Destination")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ V($e, { children: [/* @__PURE__ */ B(Re, {
							color: "textSubtle",
							children: E("Network")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							children: u
						})] }),
						/* @__PURE__ */ V($e, { children: [/* @__PURE__ */ B(Re, {
							color: "textSubtle",
							children: E("Token")
						}), /* @__PURE__ */ V(T, {
							alignItems: "center",
							style: { gap: 6 },
							children: [k(c, 16), /* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ V($e, { children: [/* @__PURE__ */ B(Re, {
							color: "textSubtle",
							children: E("Fee")
						}), /* @__PURE__ */ V(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								d ?? "—",
								" ",
								c.symbol
							]
						})] })
					] }),
					w,
					/* @__PURE__ */ B(i, {
						onClick: y,
						disabled: !C || !p || S,
						isLoading: S,
						scale: "md",
						children: E(S ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ B(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: E("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, K = I(T)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, q = I(r).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, J = I(r).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, rt = I(T)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, it = I.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, at = I(J)`
  color: ${({ theme: e }) => e.colors.failure};
`, ot = I(i)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, st = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, ct = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", lt = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, ut = ({ isOpen: e, details: t, onConfirm: n, onClose: i, onSkipFutureChange: a, t: o = st }) => {
	let [s, c] = F(!1);
	return /* @__PURE__ */ B(x, {
		isOpen: e,
		onDismiss: i,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(g, {
			title: o("Confirm Order"),
			onDismiss: i,
			children: /* @__PURE__ */ V(T, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Symbol") }), /* @__PURE__ */ B(J, { children: t.symbol })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Side / Type") }), /* @__PURE__ */ V(J, { children: [
						/* @__PURE__ */ B(it, {
							$side: t.side,
							children: t.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						lt(t.type, o)
					] })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Size") }), /* @__PURE__ */ V(J, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Price") }), /* @__PURE__ */ V(J, { children: [
						ct(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Trigger Price") }), /* @__PURE__ */ V(J, { children: [
						ct(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Leverage") }), /* @__PURE__ */ V(J, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Cost") }), /* @__PURE__ */ B(J, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Est. Liq. Price") }), /* @__PURE__ */ B(at, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Reduce Only") }), /* @__PURE__ */ B(J, { children: o("Yes") })] }),
					/* @__PURE__ */ V(rt, { children: [/* @__PURE__ */ B(l, {
						scale: "sm",
						checked: s,
						onChange: (e) => c(e.target.checked)
					}), /* @__PURE__ */ B(r, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ B(f, {
						mt: "8px",
						children: /* @__PURE__ */ B(ot, {
							$side: t.side,
							onClick: () => {
								s && a?.(!0), n(), i();
							},
							scale: "md",
							children: t.side === "BUY" ? o("Confirm Buy / Long") : o("Confirm Sell / Short")
						})
					})
				]
			})
		})
	});
}, dt = I.div`
  width: 100%;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  height: 50vh;
  max-height: 50vh;
  display: flex;
  flex-direction: column;

  /* On mobile viewports the dropdown takes over the screen as a
   * full-page action sheet — same behaviour as the symbol-pill on
   * MobilePerpsPage, but applied directly to the widget so it works
   * when used standalone too. */
  @media (max-width: 767px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    z-index: 200;
    padding: 12px 12px 16px;
  }
`, ft = I(T)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, pt = I.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, mt = I.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, ht = I.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, gt = I.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, _t = I.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, vt = I.button`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding: 10px 8px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  transition: background 0.12s;
  &:hover {
    background: ${({ theme: e }) => e.colors.cardSecondary};
  }
`, yt = I.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $filled: e, theme: t }) => e ? t.colors.warning : t.colors.textSubtle};
  &:hover {
    color: ${({ theme: e }) => e.colors.warning};
  }
`, bt = I(T)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, xt = I.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, St = I.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
`, Ct = I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, wt = I(r)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, Tt = I(T)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Et = ({ filled: e }) => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: e ? "currentColor" : "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinejoin: "round",
	strokeLinecap: "round",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Dt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, Ot = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, kt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, At = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), jt = (e) => At(e).slice(0, 1) || e.slice(0, 1), Mt = (e) => e, Nt = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: i, logoForSymbol: a, isLoading: o = !1, t: s = Mt }) => {
	let [c, l] = F("all"), [u, d] = F(""), f = N(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ V(dt, { children: [
		/* @__PURE__ */ V(ft, { children: [/* @__PURE__ */ B(pt, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ B(pt, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ V(mt, { children: [/* @__PURE__ */ B(E, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ B(ht, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ V(gt, { children: [
			/* @__PURE__ */ B("span", {}),
			/* @__PURE__ */ B("span", { children: s("Symbols") }),
			/* @__PURE__ */ B(wt, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ B(wt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ B(wt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ B(_t, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ B(Tt, { children: /* @__PURE__ */ B(r, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let r = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(At(e.symbol));
				return /* @__PURE__ */ V(vt, {
					onClick: () => i(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ B(yt, {
							$filled: r,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(r ? "Unfavorite" : "Favorite"),
							"aria-pressed": r,
							children: /* @__PURE__ */ B(Et, { filled: r })
						}),
						/* @__PURE__ */ V(bt, { children: [
							/* @__PURE__ */ B(St, { children: c ? /* @__PURE__ */ B(Ct, {
								src: c,
								alt: At(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = jt(e.symbol));
								}
							}) : jt(e.symbol) }),
							/* @__PURE__ */ B("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ V(xt, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ B(wt, { children: Dt(e.lastPrice) }),
						/* @__PURE__ */ B(wt, {
							$tone: o >= 0 ? "up" : "down",
							children: Ot(e.priceChangePercent)
						}),
						/* @__PURE__ */ B(wt, { children: kt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, Pt = I(T)`
  align-items: center;
  gap: 24px;
  padding: 12px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`, Ft = I(T)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, It = I.button`
  display: inline-flex;
  align-items: center;
  gap: 0;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: inherit;
  font: inherit;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(1.08);
  }
`, Lt = I.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, Rt = I.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.warning};
  cursor: pointer;
  flex-shrink: 0;
`, zt = I.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  flex-shrink: 0;
  background: ${({ $bg: e, theme: t }) => e ?? t.colors.primary};
  overflow: hidden;
`, Bt = I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Vt = I(r)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`;
I.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`;
var Ht = I.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Ut = I(T)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Wt = I(T)`
  flex-direction: column;
  flex-shrink: 0;
`, Gt = I(r)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, Kt = I(r)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, qt = I(T)`
  align-items: baseline;
  white-space: nowrap;
`, Jt = I.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Yt = I.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, Xt = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Zt = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Qt = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, $t = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, en = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", tn = () => /* @__PURE__ */ B("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), nn = (e) => e, rn = (e) => {
	let { isMobile: t } = h();
	return B(t ? gn : an, { ...e });
}, an = ({ symbol: e, pairLabel: t, logoUrl: n, leverage: r, lastPrice: i, markPrice: a, indexPrice: o, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, marketsOpen: h, onMarketsOpenChange: g, t: _ = nn }) => {
	let v = R(), y = h !== void 0, [b, x] = F(!1), S = y ? h : b, C = A((e) => {
		let t = typeof e == "function" ? e(S) : e;
		y || x(t), g?.(t);
	}, [
		y,
		S,
		g
	]), [w, T] = F(null), E = P(null), D = P(null);
	M(() => {
		if (!S || !E.current) return;
		let e = () => {
			let e = E.current.getBoundingClientRect();
			T({
				top: e.bottom + 8,
				left: e.left
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [S]), j(() => {
		if (!S) return;
		let e = (e) => {
			let t = e.target;
			E.current?.contains(t) || D.current?.contains(t) || C(!1);
		}, t = (e) => {
			e.key === "Escape" && C(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [S]);
	let O = A(() => C(!1), []), k = Number(c) < 0, ee = Number(u) < 0;
	return /* @__PURE__ */ V(Pt, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ V(Ft, { children: [p && /* @__PURE__ */ B(Rt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": _(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ B(tn, {})
			}), /* @__PURE__ */ V(It, {
				ref: E,
				"aria-haspopup": "listbox",
				"aria-expanded": S,
				disabled: !m,
				onClick: () => m && C((e) => !e),
				children: [
					/* @__PURE__ */ B(zt, {
						$bg: n ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: n ? /* @__PURE__ */ B(Bt, {
							src: n,
							alt: t
						}) : en(t)
					}),
					/* @__PURE__ */ B(Vt, { children: t }),
					/* @__PURE__ */ B(s, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			S && w && typeof document < "u" && m ? te(/* @__PURE__ */ B(Lt, {
				ref: D,
				style: {
					top: w.top,
					left: w.left
				},
				children: m(O)
			}), document.body) : null,
			/* @__PURE__ */ B(Ht, {
				"aria-label": `Last price: ${i ?? ""}`,
				children: i ?? "—"
			}),
			/* @__PURE__ */ V(Ut, {
				role: "list",
				children: [
					/* @__PURE__ */ V(Wt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Gt, {
							$dashed: !0,
							children: _("Mark")
						}), /* @__PURE__ */ B(Kt, { children: a ?? "—" })]
					}),
					/* @__PURE__ */ V(Wt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Gt, {
							$dashed: !0,
							children: _("Index")
						}), /* @__PURE__ */ B(Kt, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ V(Wt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Gt, {
							$dashed: !0,
							children: _("Funding / Countdown")
						}), /* @__PURE__ */ V(qt, { children: [
							/* @__PURE__ */ B(Jt, {
								$negative: k,
								children: Xt(c)
							}),
							/* @__PURE__ */ B(Yt, { children: "/" }),
							/* @__PURE__ */ B(Kt, {
								as: "span",
								children: Qt(l)
							})
						] })]
					}),
					/* @__PURE__ */ V(Wt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Gt, { children: _("24h Change") }), /* @__PURE__ */ B(Kt, {
							style: { color: u ? ee ? v.colors.failure : v.colors.success : void 0 },
							children: Zt(u)
						})]
					}),
					/* @__PURE__ */ V(Wt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Gt, { children: _("24h Volume (USDT)") }), /* @__PURE__ */ B(Kt, { children: $t(d) })]
					})
				]
			})
		]
	});
}, on = I(T)`
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  font-variant-numeric: tabular-nums;
`, sn = I.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  &[aria-disabled='true'] {
    cursor: default;
  }
`, cn = I.span`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  background: ${({ $bg: e }) => e ?? "#F7931A"};
  overflow: hidden;
`, ln = I.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, un = I.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 4px;
  background: ${({ theme: e }) => e.colors.input};
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
`, dn = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  display: inline-flex;
  align-items: center;
`, fn = I.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, pn = I.span`
  flex: 1;
`, mn = I.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ $starred: e, $active: t, theme: n }) => e ? n.colors.warning : t ? n.colors.primary : n.colors.textSubtle};
  &:hover {
    color: ${({ $starred: e, $active: t, theme: n }) => e ? n.colors.warning : t ? n.colors.primary : n.colors.text};
  }
`, hn = I.div`
  position: fixed;
  z-index: 1000;
`, gn = ({ symbol: e, pairLabel: t, logoUrl: n, change24h: r, favorited: i = !1, onToggleFavorite: o, chartOpen: l = !1, onChartToggle: u, renderMarketsDropdown: d, marketsOpen: f, onMarketsOpenChange: p, t: h = nn }) => {
	let g = f !== void 0, [_, v] = F(!1), y = g ? f : _, b = A((e) => {
		let t = typeof e == "function" ? e(y) : e;
		g || v(t), p?.(t);
	}, [
		g,
		y,
		p
	]), x = P(null), C = P(null), [w, T] = F(null);
	M(() => {
		if (!y || !x.current) return;
		let e = () => {
			let e = x.current.getBoundingClientRect(), t = Math.max(12, e.left), n = Math.min(window.innerWidth - 24, 480);
			T({
				top: e.bottom + 4,
				left: t,
				width: n
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [y]), j(() => {
		if (!y) return;
		let e = (e) => {
			let t = e.target;
			x.current?.contains(t) || C.current?.contains(t) || b(!1);
		}, t = (e) => {
			e.key === "Escape" && b(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [y]);
	let E = A(() => b(!1), [b]), D = Number(r) < 0, O = t.split(/[- ]/)[0] ?? t, k = !!d;
	return /* @__PURE__ */ V(on, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ V(sn, {
				ref: x,
				role: "button",
				"aria-haspopup": "listbox",
				"aria-expanded": y,
				"aria-disabled": !k,
				tabIndex: k ? 0 : -1,
				onClick: () => k && b((e) => !e),
				onKeyDown: (e) => {
					k && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), b((e) => !e));
				},
				children: [
					/* @__PURE__ */ B(cn, {
						$bg: n ? "transparent" : void 0,
						children: n ? /* @__PURE__ */ B(Bt, {
							src: n,
							alt: t
						}) : O
					}),
					/* @__PURE__ */ B(ln, { children: e }),
					/* @__PURE__ */ B(un, { children: h("Perp") }),
					/* @__PURE__ */ B(dn, { children: /* @__PURE__ */ B(s, {
						width: "16px",
						color: "textSubtle"
					}) })
				]
			}),
			r !== void 0 && /* @__PURE__ */ B(fn, {
				$negative: D,
				children: Zt(r)
			}),
			/* @__PURE__ */ B(pn, {}),
			o && /* @__PURE__ */ B(mn, {
				type: "button",
				$starred: i,
				"aria-label": h(i ? "Unfavorite" : "Favorite"),
				"aria-pressed": i,
				onClick: o,
				children: B(i ? c : S, {
					width: "20px",
					"aria-hidden": "true"
				})
			}),
			u && /* @__PURE__ */ B(mn, {
				type: "button",
				$active: l,
				"aria-label": h(l ? "Hide chart" : "Show chart"),
				"aria-pressed": l,
				onClick: u,
				children: B(l ? m : a, { width: "20px" })
			}),
			y && w && typeof document < "u" && d ? te(/* @__PURE__ */ B(hn, {
				ref: C,
				style: {
					top: w.top,
					left: w.left,
					width: w.width
				},
				children: d(E)
			}), document.body) : null
		]
	});
}, _n = 10, vn = 27, yn = I(T)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, bn = I(T)`
  gap: 5px;
`, xn = I.button`
  width: 26px;
  height: 24px;
  background: ${({ $active: e, theme: t }) => e ? t.colors.input : "transparent"};
  border: 0;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $active: e }) => e ? 1 : .45};
  transition: opacity 0.12s, background 0.12s;
  &:hover {
    opacity: ${({ $active: e }) => e ? 1 : .8};
  }
`, Sn = I.div`
  position: relative;
`, Cn = I.button`
  background: transparent;
  border: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 0;
  font-variant-numeric: tabular-nums;
  &:hover {
    opacity: 0.75;
  }
`, wn = I.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  min-width: 60px;
  overflow: hidden;
  z-index: 200;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
`, Tn = I.button`
  background: transparent;
  border: 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.text};
  font-size: 14px;
  font-weight: 400;
  padding: 8px 16px;
  text-align: center;
  cursor: pointer;
  font-variant-numeric: tabular-nums;
  transition: background 0.1s;
  &:hover {
    background: ${({ theme: e }) => e.colors.input};
  }
`, En = I(T)`
  align-items: center;
  gap: 2px;
`, Dn = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, On = I.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, kn = I.div`
  height: ${({ $size: e }) => e === "full" ? _n * 2 * vn : _n * vn}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, An = I.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${vn}px;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  line-height: 1.5;
  overflow: hidden;
  &:hover {
    filter: brightness(1.06);
  }
`, jn = I.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, Mn = I.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, Nn = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4px 16px;
  gap: 4px;
  background: ${({ theme: e }) => e.colors.input};
  font-size: 14px;
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  flex-shrink: 0;
`, Pn = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Fn = I.span`
  text-align: center;
`, In = I.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ln = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, Rn = [
	100,
	50,
	10,
	1
], zn = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, Bn = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), Vn = (e, t) => {
	let n = [];
	for (let e of Rn) t > e * 10 && n.push(String(e));
	let r = Bn(e);
	for (let e = 1; e <= r; e++) n.push(zn(e));
	return n;
}, Hn = (e, t) => {
	j(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, Un = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = F(!1), o = P(null);
	return Hn(o, () => a(!1)), /* @__PURE__ */ V(Sn, {
		ref: o,
		children: [/* @__PURE__ */ V(Cn, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ B(wn, { children: t.map((e) => /* @__PURE__ */ B(Tn, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, Wn = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ V("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ B("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "6",
			stroke: t
		}),
		/* @__PURE__ */ B("rect", {
			x: "0.5",
			y: "8.5",
			width: "6",
			height: "6",
			stroke: e
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: n
		})
	]
}), Gn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ B("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), Kn = ({ askColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ B("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ B("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), qn = (e) => e, Jn = [
	"0.1",
	"0.5",
	"1",
	"5",
	"10",
	"50",
	"100"
], Yn = I.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0;
  font-size: 12px;
  height: 100%;
  width: 100%;
  background: ${({ theme: e }) => e.colors.card};
`, Xn = I.div`
  color: ${({ theme: e }) => e.colors.textSubtle};
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 11px;
  margin-bottom: 8px;
  strong {
    color: ${({ theme: e }) => e.colors.text};
    font-weight: 400;
  }
`, Zn = I.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
  padding-bottom: 4px;
  margin-bottom: 4px;
`, Qn = I.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`, $n = I.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1.5;
  z-index: 1;
  font-variant-numeric: tabular-nums;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, er = I.span`
  position: absolute;
  inset: 0 0 0 auto;
  z-index: -1;
  pointer-events: none;
`, tr = I.div`
  text-align: center;
  padding: 8px 0;
`, nr = I.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, rr = I.div`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ir = I.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 4px;
  /* Sit directly below the last bid row in normal flow. Earlier we used
     margin-top: auto to glue this to the column bottom, but when the
     adjacent OrderForm column is taller than the order book the grid row
     stretches MWrap and the footer ends up below the iPhone viewport. */
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, ar = I.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: pointer;
  padding: 0;
`, or = I.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 12px;
  font-family: inherit;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  font-variant-numeric: tabular-nums;
`, sr = I.div`
  position: absolute;
  bottom: calc(100% + 4px);
  right: 0;
  min-width: 80px;
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 50;
`, cr = I.button`
  display: block;
  width: 100%;
  text-align: right;
  padding: 8px 12px;
  border: 0;
  background: ${({ $active: e, theme: t }) => e ? t.colors.input : "transparent"};
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
`, lr = I.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 250;
`, ur = I.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 260;
  background: ${({ theme: e }) => e.colors.card};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 8px 0 16px;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.45);
`, dr = I.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0.4;
  margin: 4px auto 12px;
`, fr = I.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 0;
  background: ${({ $active: e, theme: t }) => e ? t.colors.input : "transparent"};
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 15px;
  cursor: pointer;
  text-align: left;
`, pr = I.span`
  color: ${({ theme: e }) => e.colors.text};
  font-size: 16px;
`, mr = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, view: o, onViewChange: c, priceStep: l, onPriceStepChange: u, hidden: d, t: f = qn, fundingRateText: p, fundingCountdownText: m, midPriceText: h, midSubText: g, priceStepOptions: _ = Jn }) => {
	let v = R(), [y, b] = F(!1), [x, S] = F(!1), C = P(null);
	Hn(C, () => b(!1));
	let w = N(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = Ln(e, "ask", i, r, a), s = Ln(t, "bid", i, r, a), c = [...o].sort(([e], [t]) => Number(e) - Number(t)), u = [...s].sort(([e], [t]) => Number(t) - Number(e));
		return {
			asks: c.slice(0, _n).reverse(),
			bids: u.slice(0, _n)
		};
	}, [
		e,
		t,
		l,
		i,
		a
	]), T = N(() => {
		let e = 0;
		for (let [, t] of w.asks) e = Math.max(e, Number(t) || 0);
		for (let [, t] of w.bids) e = Math.max(e, Number(t) || 0);
		return e || 1;
	}, [w]), E = `color-mix(in srgb, ${v.colors.failure} 18%, transparent)`, D = (e, t, n) => /* @__PURE__ */ V($n, {
		$side: n,
		children: [
			/* @__PURE__ */ B(er, { style: {
				width: `${Math.max(6, Math.min(100, Number(t) / T * 100))}%`,
				background: n === "ask" ? E : "color-mix(in srgb, #129E7D 18%, transparent)"
			} }),
			/* @__PURE__ */ B("span", { children: e }),
			/* @__PURE__ */ B("span", { children: Number(t).toFixed(3) })
		]
	}, `${n}-${e}`), O = [
		{
			key: "both",
			label: f("Both")
		},
		{
			key: "asks",
			label: f("Asks only")
		},
		{
			key: "bids",
			label: f("Bids only")
		}
	], k = v.colors.failure, A = "#129E7D", j = v.colors.textSubtle;
	return /* @__PURE__ */ V(Yn, {
		style: d ? { display: "none" } : void 0,
		children: [
			(p || m) && /* @__PURE__ */ V(Xn, { children: [f("Funding (8h) / Countdown"), /* @__PURE__ */ V("strong", { children: [
				p ?? "—",
				" / ",
				m ?? "—"
			] })] }),
			/* @__PURE__ */ V(Zn, { children: [/* @__PURE__ */ V("span", { children: [
				f("Price"),
				/* @__PURE__ */ B("br", {}),
				"(",
				r,
				")"
			] }), /* @__PURE__ */ V(Qn, { children: [
				f("Size"),
				/* @__PURE__ */ B("br", {}),
				"(",
				n,
				") ",
				/* @__PURE__ */ B(s, {
					width: "14px",
					"aria-hidden": "true"
				})
			] })] }),
			o !== "bids" && w.asks.map(([e, t]) => D(e, t, "ask")),
			o === "both" && /* @__PURE__ */ V(tr, { children: [/* @__PURE__ */ B(nr, { children: h ?? w.bids[0]?.[0] ?? "—" }), g && /* @__PURE__ */ B(rr, { children: g })] }),
			o !== "asks" && w.bids.map(([e, t]) => D(e, t, "bid")),
			/* @__PURE__ */ V(ir, { children: [/* @__PURE__ */ V(ar, {
				type: "button",
				"aria-label": f("Choose view"),
				"aria-haspopup": "dialog",
				onClick: () => S(!0),
				children: [
					o === "both" && /* @__PURE__ */ B(Wn, {
						bidColor: A,
						askColor: k,
						listColor: j
					}),
					o === "asks" && /* @__PURE__ */ B(Kn, {
						askColor: k,
						listColor: j
					}),
					o === "bids" && /* @__PURE__ */ B(Gn, {
						bidColor: A,
						listColor: j
					})
				]
			}), /* @__PURE__ */ V("div", {
				ref: C,
				style: { position: "relative" },
				children: [/* @__PURE__ */ V(or, {
					type: "button",
					"aria-haspopup": "listbox",
					"aria-expanded": y,
					onClick: () => b((e) => !e),
					children: [
						l,
						" ",
						/* @__PURE__ */ B(s, {
							width: "14px",
							"aria-hidden": "true"
						})
					]
				}), y && /* @__PURE__ */ B(sr, {
					role: "listbox",
					children: _.map((e) => /* @__PURE__ */ B(cr, {
						type: "button",
						role: "option",
						"aria-selected": e === l,
						$active: e === l,
						onClick: () => {
							u(e), b(!1);
						},
						children: e
					}, e))
				})]
			})] }),
			x && typeof document < "u" && te(/* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(lr, { onClick: () => S(!1) }), /* @__PURE__ */ V(ur, {
				role: "dialog",
				"aria-label": f("Choose view"),
				children: [/* @__PURE__ */ B(dr, {}), O.map((e) => /* @__PURE__ */ V(fr, {
					type: "button",
					$active: o === e.key,
					onClick: () => {
						c(e.key), S(!1);
					},
					children: [/* @__PURE__ */ B("span", { children: e.label }), o === e.key && /* @__PURE__ */ B(pr, { children: "✓" })]
				}, e.key))]
			})] }), document.body)
		]
	});
}, hr = (e) => {
	let { isMobile: t } = h();
	return B(t ? mr : gr, { ...e });
}, gr = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = qn }) => {
	let g = R(), _ = d === "QUOTE" ? r : n, v = N(() => Vn(i, o), [i, o]);
	j(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = N(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = Ln(e, "ask", i, r, a), s = Ln(t, "bid", i, r, a), c = _n * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
		return {
			asks: u,
			bids: d,
			spread: f && p ? f - p : void 0,
			spreadPct: f && p ? (f - p) / f * 100 : void 0
		};
	}, [
		e,
		t,
		l,
		i,
		a
	]), b = (e) => {
		let t = 0;
		return e.map(([e, n]) => {
			let r = Number(n), i = Number(e), a = d === "QUOTE" ? r * i : r;
			return t += a, {
				price: e,
				qty: String(a),
				total: t
			};
		});
	}, x = N(() => b([...y.asks].reverse()).reverse(), [y.asks, d]), S = N(() => b(y.bids), [y.bids, d]), C = N(() => {
		let e = x[0]?.total ?? 0, t = S[S.length - 1]?.total ?? 0;
		return Math.max(e, t, 1);
	}, [x, S]), w = (e, t) => {
		let n = e === "bid" ? g.colors.success : g.colors.failure, r = Math.max(0, Math.min(100, t * 100)).toFixed(2);
		return { background: `linear-gradient(to right, ${`color-mix(in srgb, ${n} 30%, transparent)`} 0%, ${`color-mix(in srgb, ${n} 10%, transparent)`} ${r}%, transparent ${r}%, transparent 100%)` };
	}, T = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), E = /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ V(yn, { children: [/* @__PURE__ */ V(bn, { children: [
			/* @__PURE__ */ B(xn, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ B(Wn, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B(xn, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ B(Gn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B(xn, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ B(Kn, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ V(En, { children: [/* @__PURE__ */ B(Un, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ B(Un, {
			label: _,
			items: [{
				value: "BASE",
				label: n
			}, {
				value: "QUOTE",
				label: r
			}],
			activeValue: d,
			onSelect: (e) => f(e)
		})] })] }),
		/* @__PURE__ */ V(Dn, { children: [
			/* @__PURE__ */ V("span", { children: [
				h("Price"),
				" (",
				r,
				")"
			] }),
			/* @__PURE__ */ V("span", {
				style: { textAlign: "center" },
				children: [
					h("Amount"),
					" (",
					_,
					")"
				]
			}),
			/* @__PURE__ */ V("span", {
				style: { textAlign: "right" },
				children: [
					h("SUM"),
					" (",
					_,
					")"
				]
			})
		] }),
		/* @__PURE__ */ V(On, { children: [
			s !== "bids" && /* @__PURE__ */ B(kn, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - _n)).map((e) => /* @__PURE__ */ V(An, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ B(jn, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ B(Mn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(Mn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ V(Nn, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ B(Pn, { children: h("Spread") }),
					/* @__PURE__ */ B(Fn, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ B(In, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ B(kn, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? _n * 2 : _n).map((e) => /* @__PURE__ */ V(An, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ B(jn, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ B(Mn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(Mn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `b-${e.price}`))
			})
		] })
	] });
	return m ? /* @__PURE__ */ B("div", {
		style: p ? { display: "none" } : { display: "contents" },
		children: E
	}) : /* @__PURE__ */ B(H, {
		style: p ? { display: "none" } : void 0,
		children: E
	});
}, _r = I(H)`
  flex: 1;
  min-height: 200px;
`, vr = I.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, yr = I(T)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, br = I.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 1fr)) auto;
  /* Cells sit flush horizontally so the row-hover background reads as
   * one continuous strip. Per-cell horizontal padding (applied below)
   * keeps content from touching. */
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, xr = I.div`
  display: contents;
  /* Padding lives on the cells (RowGroup is display:contents so any
   * padding set here would be dropped) — gives the hover strip visible
   * breathing room around the content, matching the MarketsDropdown row. */
  & > * {
    padding: 16px 12px;
    transition: background 0.12s;
  }
  &:hover > * {
    background: ${({ theme: e }) => e.colors.cardSecondary};
  }
  /* Round the outer ends of the strip so it reads as a pill. */
  &:hover > *:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:hover > *:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`, Sr = I(T)`
  gap: 6px;
  align-items: center;
`, Cr = I.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, wr = I.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  font-size: 11px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0;
  flex-shrink: 0;
`, Tr = I.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, Er = I.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(min-content, 1fr)) auto;
  /* Match the Positions table spacing: zero column-gap so row hover
   * reads as one strip, and 16px cell padding for breathing room. */
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, Dr = L`
  max-height: 360px;
  overflow-y: auto;
`, Or = I.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Dr}
`, kr = I.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Dr}
`, Ar = I.div`
  display: grid;
  grid-template-columns: 148px 156px minmax(min-content, 0.6fr) repeat(5, minmax(min-content, 1fr));
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Dr}
`, jr = I.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Mr = I.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, Nr = I.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, Y = I(r).attrs({
	fontSize: "10px",
	color: "textSubtle"
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
  /* Anchor the header row when the history tables overflow + scroll.
     position: sticky is a no-op when the parent doesn't scroll, so
     this is also safe on the Positions / Open Orders tables (which
     don't use the scroll mixin today). */
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme: e }) => e.colors.card};
`, X = I(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
`, Pr = (e) => e, Fr = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: a, closingSymbol: o, t: s }) => {
	let c = R(), l = t?.(e.symbol), u = e.positionAmt >= 0 ? "BUY" : "SELL", d = Number.isFinite(l) && Number.isFinite(e.entryPrice) ? (l - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), f = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: u,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, p = o === e.symbol;
	return /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ B(X, {
			as: "div",
			bold: !0,
			children: /* @__PURE__ */ V(T, {
				alignItems: "center",
				style: { gap: 6 },
				children: [/* @__PURE__ */ B("span", { children: e.symbol }), /* @__PURE__ */ V(wr, { children: [e.leverage, "x"] })]
			})
		}),
		/* @__PURE__ */ B(X, {
			style: { color: u === "BUY" ? c.colors.success : c.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ B(X, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ B(X, { children: l !== void 0 && Number.isFinite(l) ? l.toFixed(2) : "—" }),
		/* @__PURE__ */ V(X, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ B(X, { children: f ? f.toFixed(2) : "—" }),
		/* @__PURE__ */ B(X, {
			style: { color: d >= 0 ? c.colors.success : c.colors.failure },
			children: Number.isFinite(d) ? d.toFixed(4) : "—"
		}),
		/* @__PURE__ */ V(Cr, { children: [/* @__PURE__ */ V(Tr, {
			$kind: "tp",
			children: [
				s("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ V(Tr, {
			$kind: "sl",
			children: [
				s("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ V(Sr, { children: [/* @__PURE__ */ B(i, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => a(e, l ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: s("TP/SL")
		}), /* @__PURE__ */ B(i, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: p || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: p,
			children: s("Close")
		})] })
	] });
}, Ir = (e) => {
	let { isMobile: t } = h();
	return e.isMobile ?? t ? /* @__PURE__ */ B(li, { ...e }) : /* @__PURE__ */ B(Lr, { ...e });
}, Lr = ({ tab: e, onTabChange: t, positions: n, openOrders: a, orderHistory: o = [], tradeHistory: s = [], transactionHistory: c = [], onShareTrade: l, useMarkPriceForSymbol: u, computeLiqPrice: d, onClosePosition: f, onEditTpSl: p, onCancelOrder: m, closingSymbol: h = null, cancellingOrderId: g = null, t: _ = Pr }) => {
	let v = R(), y = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ V(_r, { children: [/* @__PURE__ */ V(W, {
		activeIndex: y.indexOf(e),
		onItemClick: (e) => t(y[e]),
		children: [
			/* @__PURE__ */ V(U, { children: [
				_("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				_("Open Orders"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				_("Order History"),
				" (",
				o.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				_("Trade History"),
				" (",
				s.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				_("Transaction History"),
				" (",
				c.length,
				")"
			] })
		]
	}), /* @__PURE__ */ V(vr, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ B(yr, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open positions")
		}) }) : /* @__PURE__ */ V(br, { children: [
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			/* @__PURE__ */ B(Y, { children: _("Size") }),
			/* @__PURE__ */ B(Y, { children: _("Entry") }),
			/* @__PURE__ */ B(Y, { children: _("Mark") }),
			/* @__PURE__ */ B(Y, { children: _("Lev") }),
			/* @__PURE__ */ B(Y, { children: _("Liq") }),
			/* @__PURE__ */ B(Y, { children: _("uPnL") }),
			/* @__PURE__ */ B(Y, { children: _("TP/SL") }),
			/* @__PURE__ */ B(Y, {}),
			n.map((e) => /* @__PURE__ */ B(xr, { children: /* @__PURE__ */ B(Fr, {
				p: e,
				useMarkPriceForSymbol: u,
				computeLiqPrice: d,
				onClose: f,
				onEditTpSl: p,
				closingSymbol: h,
				t: _
			}) }, e.id))
		] })),
		e === "orders" && (a.length === 0 ? /* @__PURE__ */ B(yr, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open orders")
		}) }) : /* @__PURE__ */ V(Er, { children: [
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			/* @__PURE__ */ B(Y, { children: _("Side") }),
			/* @__PURE__ */ B(Y, { children: _("Type") }),
			/* @__PURE__ */ B(Y, { children: _("Price") }),
			/* @__PURE__ */ B(Y, { children: _("Size") }),
			/* @__PURE__ */ B(Y, { children: _("Filled") }),
			/* @__PURE__ */ B(Y, { children: _("Status") }),
			/* @__PURE__ */ B(Y, {}),
			a.map((e) => {
				let t = g === e.id;
				return /* @__PURE__ */ V(xr, { children: [
					/* @__PURE__ */ B(X, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ B(X, {
						style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ B(X, { children: e.type }),
					/* @__PURE__ */ B(X, { children: e.price }),
					/* @__PURE__ */ B(X, { children: e.origQty }),
					/* @__PURE__ */ B(X, { children: e.executedQty }),
					/* @__PURE__ */ B(X, { children: e.status }),
					/* @__PURE__ */ B(Sr, { children: /* @__PURE__ */ B(i, {
						scale: "xs",
						variant: "secondary",
						disabled: t,
						isLoading: t,
						onClick: () => m(e),
						children: _("Cancel")
					}) })
				] }, e.id);
			})
		] })),
		e === "history" && (o.length === 0 ? /* @__PURE__ */ B(yr, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No order history")
		}) }) : /* @__PURE__ */ V(Ar, { children: [
			/* @__PURE__ */ B(Y, { children: _("Time") }),
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			/* @__PURE__ */ B(Y, { children: _("Side") }),
			/* @__PURE__ */ B(Y, { children: _("Type") }),
			/* @__PURE__ */ B(Y, { children: _("Price") }),
			/* @__PURE__ */ B(Y, { children: _("Size") }),
			/* @__PURE__ */ B(Y, { children: _("Filled") }),
			/* @__PURE__ */ B(Y, { children: _("Status") }),
			o.map((e) => /* @__PURE__ */ V(xr, { children: [
				/* @__PURE__ */ B(X, {
					as: "div",
					children: /* @__PURE__ */ V(jr, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
				}),
				/* @__PURE__ */ B(X, {
					bold: !0,
					children: e.symbol
				}),
				/* @__PURE__ */ B(X, {
					style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
					children: e.side
				}),
				/* @__PURE__ */ B(X, { children: e.type }),
				/* @__PURE__ */ B(X, { children: e.price }),
				/* @__PURE__ */ B(X, { children: e.origQty }),
				/* @__PURE__ */ B(X, { children: e.executedQty }),
				/* @__PURE__ */ B(X, { children: e.status })
			] }, e.id))
		] })),
		e === "trades" && (s.length === 0 ? /* @__PURE__ */ B(yr, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No trades yet")
		}) }) : /* @__PURE__ */ V(Or, { children: [
			/* @__PURE__ */ B(Y, { children: _("Time") }),
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			/* @__PURE__ */ B(Y, { children: _("Price") }),
			/* @__PURE__ */ B(Y, { children: _("Quantity") }),
			/* @__PURE__ */ B(Y, { children: _("Fee") }),
			/* @__PURE__ */ B(Y, { children: _("Realized profit") }),
			s.map((e) => {
				let t = e.side === "BUY" ? v.colors.success : v.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ V(xr, { children: [
					/* @__PURE__ */ B(X, {
						as: "div",
						children: /* @__PURE__ */ V(jr, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
					}),
					/* @__PURE__ */ B(X, {
						as: "div",
						children: /* @__PURE__ */ V(Mr, { children: [/* @__PURE__ */ B("span", { children: e.symbol }), /* @__PURE__ */ B("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? _("Buy") : _("Sell")
						})] })
					}),
					/* @__PURE__ */ B(X, { children: e.price }),
					/* @__PURE__ */ B(X, { children: e.quantity }),
					/* @__PURE__ */ B(X, { children: e.fee }),
					/* @__PURE__ */ B(X, {
						as: "div",
						children: /* @__PURE__ */ V(T, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ B("span", {
								style: { color: n ? v.colors.success : v.colors.failure },
								children: e.realizedProfit
							}), l && /* @__PURE__ */ B(Nr, {
								type: "button",
								onClick: () => l(e),
								"aria-label": _("Share trade"),
								children: /* @__PURE__ */ B("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ B("path", {
										d: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							})]
						})
					})
				] }, e.id);
			})
		] })),
		e === "transactions" && (c.length === 0 ? /* @__PURE__ */ B(yr, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No transactions yet")
		}) }) : /* @__PURE__ */ V(kr, { children: [
			/* @__PURE__ */ B(Y, { children: _("Time") }),
			/* @__PURE__ */ B(Y, { children: _("Type") }),
			/* @__PURE__ */ B(Y, { children: _("Amount") }),
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			c.map((e) => /* @__PURE__ */ V(xr, { children: [
				/* @__PURE__ */ B(X, {
					as: "div",
					children: /* @__PURE__ */ V(jr, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
				}),
				/* @__PURE__ */ B(X, { children: e.type }),
				/* @__PURE__ */ B(X, { children: e.amount }),
				/* @__PURE__ */ B(X, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, Rr = I.nav`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
`, zr = I.button`
  border: 0;
  background: transparent;
  padding: 12px 8px;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  &::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: -1px;
    height: 2px;
    background: ${({ theme: e }) => e.colors.primary};
    opacity: ${({ $active: e }) => e ? 1 : 0};
  }
`, Br = I.span`
  flex: 1;
`, Vr = I.button`
  border: 0;
  background: transparent;
  padding: 8px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme: e }) => e.colors.text};
  }
`, Hr = I.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ur = I.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Wr = I.button`
  background: transparent;
  border: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`, Gr = I.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`, Kr = I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, qr = I.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme: e }) => e.colors.card};
`, Jr = I.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  display: flex;
  flex-direction: column;
`, Yr = I.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  flex-shrink: 0;
`, Xr = I.span`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, Zr = I.button`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    color: ${({ theme: e }) => e.colors.text};
  }
`, Qr = I.nav`
  display: flex;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
  flex-shrink: 0;
`, $r = I.button`
  flex: 1;
  padding: 12px 8px;
  border: 0;
  background: transparent;
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: -1px;
    height: 2px;
    background: ${({ theme: e }) => e.colors.primary};
    opacity: ${({ $active: e }) => e ? 1 : 0};
  }
`, ei = I.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0;
`, ti = I.div`
  text-align: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
  padding: 48px 0;
`, ni = I.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  font-size: 13px;
  gap: 12px;
`, ri = I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, ii = I.span`
  color: ${({ theme: e }) => e.colors.text};
  font-weight: 600;
`, ai = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 12px;
`, oi = I.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
`, si = [
	{
		key: "orders",
		label: "Order History",
		emptyKey: "No order history yet"
	},
	{
		key: "trades",
		label: "Trade History",
		emptyKey: "No trade history yet"
	},
	{
		key: "tx",
		label: "Transactions",
		emptyKey: "No transactions yet"
	}
], ci = ({ open: e, onClose: t, tab: n, onTabChange: r, orderHistory: i, tradeHistory: a, transactionHistory: o, t: s }) => {
	let c = R();
	return !e || typeof document > "u" ? null : te(/* @__PURE__ */ V(Jr, {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": s("History"),
		children: [
			/* @__PURE__ */ V(Yr, { children: [/* @__PURE__ */ B(Xr, { children: s("History") }), /* @__PURE__ */ B(Zr, {
				type: "button",
				"aria-label": s("Close"),
				onClick: t,
				children: /* @__PURE__ */ B(y, {
					width: "20px",
					"aria-hidden": "true"
				})
			})] }),
			/* @__PURE__ */ B(Qr, {
				role: "tablist",
				children: si.map((e) => /* @__PURE__ */ B($r, {
					type: "button",
					role: "tab",
					"aria-selected": n === e.key,
					$active: n === e.key,
					onClick: () => r(e.key),
					children: s(e.label)
				}, e.key))
			}),
			/* @__PURE__ */ V(ei, { children: [
				n === "orders" && (i.length === 0 ? /* @__PURE__ */ B(ti, { children: s("No order history yet") }) : i.map((e) => /* @__PURE__ */ V(ni, { children: [/* @__PURE__ */ V(ri, { children: [
					/* @__PURE__ */ V(ii, { children: [
						e.symbol,
						" ",
						/* @__PURE__ */ B("span", {
							style: {
								color: e.side === "BUY" ? c.colors.success : c.colors.failure,
								fontWeight: 400
							},
							children: e.side === "BUY" ? s("Buy") : s("Sell")
						})
					] }),
					/* @__PURE__ */ V(ai, { children: [
						e.date,
						" ",
						e.time
					] }),
					/* @__PURE__ */ V(ai, { children: [
						e.type,
						" · ",
						e.price,
						" · ",
						e.executedQty,
						"/",
						e.origQty
					] })
				] }), /* @__PURE__ */ B(oi, { children: /* @__PURE__ */ B("span", {
					style: {
						color: c.colors.textSubtle,
						fontSize: 12
					},
					children: e.status
				}) })] }, e.id))),
				n === "trades" && (a.length === 0 ? /* @__PURE__ */ B(ti, { children: s("No trade history yet") }) : a.map((e) => {
					let t = e.realizedProfit.startsWith("+");
					return /* @__PURE__ */ V(ni, { children: [/* @__PURE__ */ V(ri, { children: [
						/* @__PURE__ */ V(ii, { children: [
							e.symbol,
							" ",
							/* @__PURE__ */ B("span", {
								style: {
									color: e.side === "BUY" ? c.colors.success : c.colors.failure,
									fontWeight: 400
								},
								children: e.side === "BUY" ? s("Buy") : s("Sell")
							})
						] }),
						/* @__PURE__ */ V(ai, { children: [
							e.date,
							" ",
							e.time
						] }),
						/* @__PURE__ */ V(ai, { children: [
							e.price,
							" · ",
							e.quantity,
							" · ",
							s("fee"),
							" ",
							e.fee
						] })
					] }), /* @__PURE__ */ B(oi, { children: /* @__PURE__ */ B("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.realizedProfit
					}) })] }, e.id);
				})),
				n === "tx" && (o.length === 0 ? /* @__PURE__ */ B(ti, { children: s("No transactions yet") }) : o.map((e) => {
					let t = e.amount.startsWith("+");
					return /* @__PURE__ */ V(ni, { children: [/* @__PURE__ */ V(ri, { children: [/* @__PURE__ */ B(ii, { children: e.type }), /* @__PURE__ */ V(ai, { children: [
						e.date,
						" ",
						e.time
					] })] }), /* @__PURE__ */ V(oi, { children: [/* @__PURE__ */ B("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.amount
					}), /* @__PURE__ */ B(ai, { children: e.symbol })] })] }, e.id);
				}))
			] })
		]
	}), document.body);
}, li = ({ tab: e, onTabChange: t, positions: n, openOrders: r, orderHistory: i = [], tradeHistory: a = [], transactionHistory: c = [], positionsCount: l, hideOtherSymbols: u = !1, onHideOtherSymbolsChange: d, instrumentFilterLabel: f, onInstrumentFilterClick: p, historyOpen: m = !1, onHistoryToggle: h, historyTab: g = "orders", onHistoryTabChange: _, t: v = Pr }) => {
	let y = [
		{
			key: "orders",
			label: v("Open Orders"),
			count: r.length,
			emptyText: v("No open order found")
		},
		{
			key: "positions",
			label: v("Positions"),
			count: l ?? n.length,
			emptyText: v("No open positions")
		},
		{
			key: "assets",
			label: v("Assets"),
			emptyText: v("No assets to display")
		},
		{
			key: "twap",
			label: v("TWAP"),
			emptyText: v("No TWAP orders")
		}
	], b = y.find((t) => t.key === e) ?? y[0], x = (n) => {
		n !== e && t(n);
	};
	return /* @__PURE__ */ V(qr, { children: [
		/* @__PURE__ */ V(Rr, {
			role: "tablist",
			children: [
				y.map((t) => /* @__PURE__ */ V(zr, {
					type: "button",
					role: "tab",
					"aria-selected": t.key === e,
					$active: t.key === e,
					onClick: () => x(t.key),
					children: [t.label, typeof t.count == "number" && t.count > 0 ? ` (${t.count})` : ""]
				}, t.key)),
				/* @__PURE__ */ B(Br, {}),
				/* @__PURE__ */ B(Vr, {
					type: "button",
					"aria-label": v("History"),
					onClick: () => h?.(!0),
					children: /* @__PURE__ */ B(o, {
						width: "20px",
						"aria-hidden": "true"
					})
				})
			]
		}),
		/* @__PURE__ */ V(Hr, { children: [
			/* @__PURE__ */ V(Wr, {
				type: "button",
				onClick: p,
				children: [
					f ?? v("All instruments"),
					" ",
					/* @__PURE__ */ B(s, {
						width: "14px",
						"aria-hidden": "true"
					})
				]
			}),
			/* @__PURE__ */ B(Ur, {}),
			/* @__PURE__ */ V(Gr, { children: [/* @__PURE__ */ B("input", {
				type: "checkbox",
				checked: u,
				onChange: (e) => d?.(e.target.checked)
			}), /* @__PURE__ */ B("span", { children: v("Hide other symbols") })] })
		] }),
		/* @__PURE__ */ B(Kr, { children: b.emptyText }),
		/* @__PURE__ */ B(ci, {
			open: m,
			onClose: () => h?.(!1),
			tab: g,
			onTabChange: (e) => _?.(e),
			orderHistory: i,
			tradeHistory: a,
			transactionHistory: c,
			t: v
		})
	] });
}, ui = I(T)`
  flex-direction: column;
  gap: 8px;
`, di = I(T)`
  gap: 8px;
`, fi = I.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, pi = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, mi = I(v)`
  height: 37px;
  padding: 8px 12px;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-radius: 12px;
  color: ${({ theme: e }) => e.colors.text};
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    border-color: ${({ theme: e }) => e.colors.secondary};
  }
`, hi = I(T)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, gi = (e) => e, _i = ({ isOpen: e, symbol: t, positionSide: n, qty: a, entryPrice: o, markPrice: s, onConfirm: c, onClose: l, t: u = gi }) => {
	let d = R(), p = n === "LONG" ? 1 : -1, [m, h] = F(""), [_, v] = F(""), [y, b] = F(""), [S, C] = F(""), [w, E] = F(!1);
	j(() => {
		e || (h(""), v(""), b(""), C(""));
	}, [e]);
	let D = (e) => a > 0 ? o + p * e / a : NaN, O = (e) => a > 0 ? p * (e - o) * a : NaN, k = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", A = (e) => {
		h(e);
		let t = Number(e);
		v(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, ee = (e) => {
		v(e);
		let t = Number(e);
		h(Number.isFinite(t) && e !== "" ? k(D(t), 2) : "");
	}, M = (e) => {
		b(e);
		let t = Number(e);
		C(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, P = (e) => {
		C(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? b(k(D(t), 2)) : C("");
	}, I = N(() => {
		let e = Number(m), t = Number(y), r = m !== "" && Number.isFinite(e), i = y !== "" && Number.isFinite(t);
		if (n === "LONG") {
			if (r && e <= o) return u("Take Profit price must be above entry for a LONG position.");
			if (i && t >= o) return u("Stop Loss price must be below entry for a LONG position.");
		} else {
			if (r && e >= o) return u("Take Profit price must be below entry for a SHORT position.");
			if (i && t <= o) return u("Stop Loss price must be above entry for a SHORT position.");
		}
	}, [
		m,
		y,
		n,
		o,
		u
	]), L = !w && (m !== "" || y !== "") && !I;
	return /* @__PURE__ */ B(x, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(g, {
			title: u("Set TP / SL"),
			onDismiss: l,
			children: /* @__PURE__ */ V(T, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(hi, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Symbol")
					}), /* @__PURE__ */ V(r, {
						fontSize: "14px",
						bold: !0,
						style: { color: n === "LONG" ? d.colors.success : d.colors.failure },
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ V(hi, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Entry")
					}), /* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? o.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ V(hi, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Mark")
					}), /* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(s) ? s.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ B(fi, {}),
					/* @__PURE__ */ V(ui, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.success,
						children: u("Take Profit")
					}), /* @__PURE__ */ V(di, { children: [/* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(pi, { children: u("Trigger Price") }), /* @__PURE__ */ B(mi, {
							value: m,
							onChange: (e) => A(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(pi, { children: u("PnL (USDT)") }), /* @__PURE__ */ B(mi, {
							value: _,
							onChange: (e) => ee(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ V(ui, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.failure,
						children: u("Stop Loss")
					}), /* @__PURE__ */ V(di, { children: [/* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(pi, { children: u("Trigger Price") }), /* @__PURE__ */ B(mi, {
							value: y,
							onChange: (e) => M(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(pi, { children: u("PnL (USDT)") }), /* @__PURE__ */ B(mi, {
							value: S,
							onChange: (e) => P(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					I && /* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "failure",
						children: I
					}),
					/* @__PURE__ */ B(i, {
						onClick: async () => {
							if (L) {
								E(!0);
								try {
									await c({
										symbol: t,
										closeSide: n === "LONG" ? "SELL" : "BUY",
										tpPrice: m,
										slPrice: y,
										qty: String(a),
										closePosition: !0
									}), l();
								} finally {
									E(!1);
								}
							}
						},
						disabled: !L,
						isLoading: w,
						scale: "md",
						children: u("Confirm")
					})
				]
			})
		})
	});
}, vi = [
	"1m",
	"5m",
	"15m",
	"1h",
	"4h",
	"1d"
], yi = I(H)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, bi = (e) => typeof e == "number" ? `${e}px` : e, xi = I.div`
  border-bottom: 1px solid var(--pcs-colors-card-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, Si = I.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`, Ci = I.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: 13px;
  cursor: pointer;
  color: var(--pcs-colors-text-subtle);
  ${({ $active: e }) => e && L`
      color: var(--pcs-colors-primary);
      font-weight: 700;
    `}
`, wi = I.div`
  position: relative;
  height: ${({ $minHeight: e }) => e}px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent) 0%,
    transparent 100%
  );
`, Ti = I.span`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(140px 60px at 18% 70%, color-mix(in srgb, var(--pcs-colors-primary) 18%, transparent), transparent 70%),
    radial-gradient(120px 50px at 42% 38%, color-mix(in srgb, var(--pcs-colors-success) 14%, transparent), transparent 70%),
    radial-gradient(160px 70px at 72% 55%, color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent), transparent 70%);
  border-bottom: 2px solid color-mix(in srgb, var(--pcs-colors-primary) 50%, transparent);
`, Ei = I.span`
  position: absolute;
  right: 8px;
  top: 32%;
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--pcs-colors-primary);
  color: var(--pcs-colors-inverted-contrast, #fff);
  font-size: 12px;
`, Di = ({ children: e, timeframes: t = vi, activeTimeframe: n, onTimeframeChange: r, priceLabel: i, mobileMinHeight: a = 220 }) => {
	let o = D.Children.count(e) > 0;
	return /* @__PURE__ */ V(xi, {
		"aria-label": "Price chart",
		children: [/* @__PURE__ */ B(Si, {
			role: "tablist",
			children: t.map((e) => {
				let t = e === n;
				return /* @__PURE__ */ B(Ci, {
					type: "button",
					role: "tab",
					"aria-selected": t,
					$active: t,
					onClick: () => r?.(e),
					children: e
				}, e);
			})
		}), /* @__PURE__ */ V(wi, {
			$minHeight: a,
			children: [o ? e : /* @__PURE__ */ B(Ti, {}), i !== void 0 && /* @__PURE__ */ B(Ei, { children: i })]
		})]
	});
}, Oi = (e) => {
	let { isMobile: t } = h();
	if (t) return /* @__PURE__ */ B(Di, { ...e });
	let { children: n, minHeight: r = "420px" } = e;
	return /* @__PURE__ */ B(yi, {
		$minHeight: bi(r),
		children: n
	});
}, ki = I(H)`
  height: 100%;
`, Ai = I.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, ji = I.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, Mi = (e) => e, Ni = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = Mi }) => /* @__PURE__ */ V(ki, { children: [/* @__PURE__ */ V(W, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ B(U, { children: i("Order Book") }), /* @__PURE__ */ B(U, { children: i("Trades") })]
}), /* @__PURE__ */ V(Ai, { children: [/* @__PURE__ */ B(ji, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ B(ji, {
	$hidden: e !== "trades",
	children: r
})] })] }), Pi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='32'%20fill='none'%20viewBox='0%200%2015%2032'%3e%3cpath%20fill='%230098A1'%20d='M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z'/%3e%3cpath%20fill='%2353DEE9'%20d='M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z'/%3e%3c/svg%3e", Fi = "data:image/svg+xml,%3csvg%20width='24'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='19'%20width='17'%20height='11'%20fill='%231FC7D4'/%3e%3cpath%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'%20fill='%231FC7D4'/%3e%3cpath%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'%20fill='%231FC7D4'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20fill='url(%23paint0_linear_bunnyhead_main)'/%3e%3c/g%3e%3cg%20transform='translate(2)'%3e%3cpath%20d='M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z'%20fill='%23452A7A'/%3e%3cpath%20d='M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z'%20fill='%23452A7A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_main'%20x1='14'%20y1='1'%20x2='14'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Ii = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='32'%20fill='none'%20viewBox='0%200%2028%2032'%3e%3crect%20width='17'%20height='11'%20x='1'%20y='19'%20fill='%231FC7D4'/%3e%3cpath%20fill='%231FC7D4'%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill='url(%23paint0_linear_bunnyhead_max)'%20fill-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787'/%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20width='28'%20height='28'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_max'%20x1='14'%20x2='14'%20y1='1'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/widgets/BunnySlider.tsx
function Li({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = P(null), [u, d] = F(0);
	M(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999, _ = g ? Ii : Fi;
	return /* @__PURE__ */ V(Ri, {
		ref: l,
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ B(zi, { className: "bs-track" }),
			/* @__PURE__ */ B(Vi, {
				className: "bs-back",
				style: { backgroundImage: `url("${Pi}")` }
			}),
			/* @__PURE__ */ B(Bi, {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ B(Hi, {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: {
					left: m,
					backgroundImage: `url("${_}")`
				}
			}),
			/* @__PURE__ */ B(Ui, {
				className: "bs-input",
				name: e,
				type: "range",
				min: t,
				max: n,
				step: r,
				value: i,
				disabled: o,
				onChange: (e) => a(parseFloat(e.target.value)),
				"aria-label": e
			}),
			s && /* @__PURE__ */ B(Wi, {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
var Ri = I.div`
  position: relative;
  width: 100%;
  height: 32px;
  user-select: none;
  -webkit-user-select: none;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
  &[aria-disabled='true'] .bs-back,
  &[aria-disabled='true'] .bs-fill,
  &[aria-disabled='true'] .bs-front {
    filter: grayscale(100%);
  }
  &[aria-disabled='true'] .bs-input {
    cursor: not-allowed;
  }
  &:not([aria-disabled='true']):hover .bs-front {
    transform: scale(1.06);
  }
`, zi = I.span`
  position: absolute;
  left: 14px;
  right: 0;
  top: 18px;
  height: 2px;
  background: ${({ theme: e }) => e?.colors?.inputSecondary ?? "var(--pcs-colors-input-secondary, #D7CAEC)"};
  pointer-events: none;
`, Bi = I.span`
  position: absolute;
  left: 14px;
  top: 18px;
  height: 10px;
  background: ${({ theme: e }) => e?.colors?.primary ?? "var(--pcs-colors-primary, #1FC7D4)"};
  pointer-events: none;
  transition: width 60ms linear;
`, Vi = I.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 32px;
  pointer-events: none;
  background-size: 15px 32px;
  background-repeat: no-repeat;
`, Hi = I.span`
  position: absolute;
  top: 0;
  width: 24px;
  height: 32px;
  pointer-events: none;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  transition: left 60ms linear, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
`, Ui = I.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  opacity: 0;

  &::-webkit-slider-runnable-track {
    height: 100%;
    background: transparent;
  }
  &::-moz-range-track {
    height: 100%;
    background: transparent;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 32px;
    background: transparent;
    border: 0;
    cursor: grab;
  }
  &::-moz-range-thumb {
    width: 24px;
    height: 32px;
    background: transparent;
    border: 0;
    cursor: grab;
  }
  &:active::-webkit-slider-thumb {
    cursor: grabbing;
  }
  &:active::-moz-range-thumb {
    cursor: grabbing;
  }
`, Wi = I.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme: e }) => e?.colors?.textSubtle ?? "var(--pcs-colors-text-subtle)"};
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
`, Gi = I(H)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, Ki = I(T)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, qi = I.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 12px 0;
  margin-right: 16px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.12s, border-color 0.12s;
  &:hover {
    color: ${({ theme: e }) => e.colors.text};
  }
`, Ji = I(T)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, Yi = I.button`
  flex: 1;
  border: 0;
  background: ${({ $active: e, $side: t, theme: n }) => e ? t === "BUY" ? n.colors.success : n.colors.failure : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.invertedContrast : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  font-size: 16px;
  padding: 6px 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
`, Xi = I.button`
  flex: 1;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: ${({ theme: e }) => e.colors.primary};
  font-size: 16px;
  font-weight: 600;
  padding: 4px 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(1.08);
  }
`, Zi = I(T)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, Qi = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, $i = I(T)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, ea = I.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  gap: 8px;
`, ta = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, na = I.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, ra = I(i).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, ia = I.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  gap: 8px;
`, aa = I.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, oa = I.button`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  padding: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  &:hover {
    opacity: 0.8;
  }
`, sa = I.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 160px;
  background: ${({ theme: e }) => e.colors.input};
  border-top: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-right: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-left: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-radius: 12px;
  box-shadow:
    0 0 0 1px ${({ theme: e }) => e.colors.secondary},
    0 0 0 4px rgba(118, 69, 217, 0.2);
  overflow: hidden;
`, ca = I.button`
  background: ${({ $active: e, theme: t }) => e ? t.colors.tertiary : "transparent"};
  border: 0;
  padding: 10px 14px;
  text-align: left;
  font-family: Kanit, sans-serif;
  font-size: 14px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ theme: e }) => e.colors.text};
  cursor: pointer;
  &:hover {
    background: ${({ theme: e }) => e.colors.tertiary};
  }
`, la = I.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, ua = I(v)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, da = I.div`
  padding: 4px 0;
`, fa = I(T)`
  gap: 8px;
`, pa = I.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, ma = I.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, ha = ({ value: e, onChange: t }) => /* @__PURE__ */ V(pa, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ B(ma, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ B(ma, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), ga = I(i)`
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  &:hover:not(:disabled) {
    filter: brightness(1.07);
  }
`, _a = I.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, va = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, ya = I(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, ba = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, xa = I(T)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, Sa = I(T)`
  gap: 6px;
`, Ca = I.button`
  flex: 1;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  height: 38px;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`, wa = I.button`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
`, Ta = I.span`
  text-align: center;
`, Ea = I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
`, Da = I.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: left;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Oa = I.button`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  background: transparent;
  border: 0;
  padding: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`, ka = I(T)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  & > strong {
    flex: 1;
    color: ${({ theme: e }) => e.colors.text};
    font-weight: 400;
    font-variant-numeric: tabular-nums;
  }
`, Aa = I(T)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.text};
`, ja = I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 0;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  & .v {
    color: ${({ theme: e, $tone: t }) => t === "up" ? e.colors.success : e.colors.failure};
    font-variant-numeric: tabular-nums;
  }
`, Ma = I(T)`
  justify-content: space-between;
  align-items: center;
`, Na = I.button`
  width: 100%;
  height: 44px;
  border: 0;
  border-radius: 999px;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  &:hover:not(:disabled) {
    filter: brightness(1.07);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`, Pa = I.div`
  position: fixed;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`, Fa = I.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: 0;
  background: ${({ $active: e, theme: t }) => e ? t.colors.input : "transparent"};
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background: ${({ theme: e }) => e.colors.input};
  }
`, Ia = [
	{
		key: "market",
		label: "Market"
	},
	{
		key: "limit",
		label: "Limit"
	},
	{
		key: "stop-limit",
		label: "Stop Limit"
	},
	{
		key: "stop-market",
		label: "Stop Market"
	}
], La = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: i, typeKey: a, onTypeKeyChange: o, availableBalanceText: c, preview: d, feeText: m, sizePercent: h, onSizePercentChange: g, cta: _, canSubmit: v, isSubmitting: y = !1, marginSubmitting: x = !1, authReady: S = !0, hasAddress: C = !0, errorSlot: w, onSubmit: T, onLeverageClick: E, onMarginModeToggle: D, onDepositClick: O, t: k = ba }) => {
	let A = n.sizeUnit === "QUOTE" ? t : e, ee = a === "stop-limit" || a === "stop-market", M = a === "limit" || a === "stop-limit", N = ee, I = () => i({
		...n,
		sizeUnit: n.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), L = P(null), R = P(null), [z, H] = F(!1), [ne, re] = F(null);
	j(() => {
		if (!z || !L.current) return;
		let e = L.current.getBoundingClientRect();
		re({
			top: e.bottom + 4,
			left: e.left,
			width: e.width
		});
	}, [z]), j(() => {
		if (!z) return;
		let e = (e) => {
			let t = e.target;
			L.current && !L.current.contains(t) && R.current && !R.current.contains(t) && H(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [z]);
	let U = Ia.find((e) => e.key === a)?.label ?? "Market", W = d.liq, G = d.cost;
	return /* @__PURE__ */ V(xa, { children: [
		/* @__PURE__ */ V(Sa, { children: [/* @__PURE__ */ B(Ca, {
			disabled: x,
			onClick: D,
			children: n.marginMode === "CROSS" ? k("Cross") : k("Isolated")
		}), /* @__PURE__ */ B(Ca, {
			onClick: E,
			children: `${n.leverage}x`
		})] }),
		/* @__PURE__ */ V(wa, {
			ref: L,
			type: "button",
			"aria-haspopup": "listbox",
			"aria-expanded": z,
			onClick: () => H((e) => !e),
			children: [
				/* @__PURE__ */ B(b, {
					width: "14px",
					color: "textSubtle"
				}),
				/* @__PURE__ */ B(Ta, { children: k(U) }),
				/* @__PURE__ */ B(s, {
					width: "14px",
					color: "textSubtle"
				})
			]
		}),
		z && ne && typeof document < "u" && te(/* @__PURE__ */ B(Pa, {
			ref: R,
			role: "listbox",
			style: {
				top: ne.top,
				left: ne.left,
				width: ne.width
			},
			children: Ia.map((e) => /* @__PURE__ */ B(Fa, {
				role: "option",
				"aria-selected": e.key === a,
				$active: e.key === a,
				onClick: () => {
					o(e.key), H(!1);
				},
				children: k(e.label)
			}, e.key))
		}), document.body),
		N && /* @__PURE__ */ V(Ea, { children: [
			/* @__PURE__ */ B(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: k("Stop")
			}),
			/* @__PURE__ */ B(Da, {
				value: n.stopPrice,
				onChange: (e) => i({
					...n,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": k("Stop price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ V(Oa, {
				type: "button",
				onClick: () => i({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				children: [n.stopPriceSource === "MARK" ? k("Mark") : k("Last"), /* @__PURE__ */ B(s, { width: "12px" })]
			})
		] }),
		M && /* @__PURE__ */ V(Ea, { children: [
			/* @__PURE__ */ B(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: k("Price")
			}),
			/* @__PURE__ */ B(Da, {
				value: n.price,
				onChange: (e) => i({
					...n,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": k("Limit price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ B(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: t
			})
		] }),
		/* @__PURE__ */ V(Ea, { children: [/* @__PURE__ */ B(Da, {
			value: n.quantity,
			onChange: (e) => i({
				...n,
				quantity: e.target.value
			}),
			placeholder: k("Size"),
			inputMode: "decimal"
		}), /* @__PURE__ */ V(Oa, {
			type: "button",
			onClick: I,
			children: [A, /* @__PURE__ */ B(s, { width: "12px" })]
		})] }),
		/* @__PURE__ */ B(f, { children: /* @__PURE__ */ B(Li, {
			min: 0,
			max: 100,
			step: 1,
			value: h,
			onValueChanged: g
		}) }),
		/* @__PURE__ */ V(ka, { children: [
			/* @__PURE__ */ B("span", { children: k("Avbl") }),
			/* @__PURE__ */ B("strong", { children: `${c} ${t}` }),
			/* @__PURE__ */ B(p, {
				variant: "text",
				scale: "xs",
				onClick: O,
				"aria-label": k("Deposit"),
				style: {
					width: 18,
					height: 18,
					minWidth: 18,
					borderRadius: 999
				},
				children: /* @__PURE__ */ B(u, {
					color: "primary",
					width: "10px"
				})
			})
		] }),
		/* @__PURE__ */ V(Aa, { children: [/* @__PURE__ */ B(l, {
			scale: "sm",
			checked: n.tpSlEnabled,
			onChange: (e) => i({
				...n,
				tpSlEnabled: e.target.checked
			})
		}), /* @__PURE__ */ B("span", { children: k("TP/SL") })] }),
		/* @__PURE__ */ V(Aa, { children: [/* @__PURE__ */ B(l, {
			scale: "sm",
			checked: n.reduceOnly,
			onChange: (e) => i({
				...n,
				reduceOnly: e.target.checked
			})
		}), /* @__PURE__ */ B("span", { children: k("Reduce-Only") })] }),
		w,
		/* @__PURE__ */ V(ja, {
			$tone: "up",
			children: [
				/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B("span", { children: k("Est. liq. price") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: W
				})] }),
				/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B("span", { children: k("Margin") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: G
				})] }),
				/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B("span", { children: k("Max") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ B(Na, {
			type: "button",
			$side: "BUY",
			disabled: !v || y,
			onClick: () => T({ sideOverride: "BUY" }),
			children: k("Buy/Long")
		}),
		/* @__PURE__ */ V(ja, {
			$tone: "down",
			children: [
				/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B("span", { children: k("Est. liq. price") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: W
				})] }),
				/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B("span", { children: k("Margin") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: G
				})] }),
				/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B("span", { children: k("Max") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ B(Na, {
			type: "button",
			$side: "SELL",
			disabled: !v || y,
			onClick: () => T({ sideOverride: "SELL" }),
			children: k("Sell/Short")
		}),
		/* @__PURE__ */ V(r, {
			fontSize: "11px",
			color: "textSubtle",
			textAlign: "right",
			children: [
				k("Fees"),
				": ",
				m
			]
		})
	] });
}, Ra = (e) => {
	let { isMobile: t } = h();
	if (t) return /* @__PURE__ */ B(La, { ...e });
	let { baseAsset: n, quoteAsset: i, draft: a, onDraftChange: o, typeKey: s, onTypeKeyChange: c, availableBalanceText: m, preview: g, feeText: _, sizePercent: v, onSizePercentChange: y, cta: b, canSubmit: x, isSubmitting: S = !1, marginSubmitting: C = !1, authReady: w = !0, hasAddress: E = !0, errorSlot: D, onSubmit: O, onLeverageClick: k, onMarginModeToggle: A, onDepositClick: ee, t: M = ba } = e, N = a.sizeUnit === "QUOTE" ? i : n, I = (e) => o({
		...a,
		side: e
	}), L = () => o({
		...a,
		sizeUnit: a.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), R = () => o({
		...a,
		tpSlEnabled: !a.tpSlEnabled
	}), H = s === "stop-limit" || s === "stop-market", ne = s === "limit" || s === "stop-limit", re = H, U = P(null), W = P(null), [G, ie] = F(!1), [ae, oe] = F({
		top: 0,
		left: 0
	});
	j(() => {
		if (!G || !U.current || !W.current) return;
		let e = U.current.getBoundingClientRect(), t = W.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		oe({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [G]), j(() => {
		if (!G) return;
		let e = (e) => {
			let t = e.target;
			U.current && !U.current.contains(t) && W.current && !W.current.contains(t) && ie(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [G]);
	let se = H, ce = s === "stop-market" ? `${M("Stop Market")} ▾` : `${M("Stop Limit")} ▾`, le = () => {
		ie((e) => !e);
	}, ue = (e) => {
		c(e), ie(!1);
	};
	return /* @__PURE__ */ V(Gi, { children: [
		/* @__PURE__ */ V(Ki, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ B(qi, {
				$active: s === e,
				onClick: () => c(e),
				children: M(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ B(qi, {
				ref: U,
				$active: se,
				onClick: le,
				"aria-haspopup": "menu",
				"aria-expanded": G,
				children: ce
			}),
			G && typeof document < "u" && te(/* @__PURE__ */ V(sa, {
				ref: W,
				style: {
					top: ae.top,
					left: ae.left
				},
				role: "menu",
				children: [/* @__PURE__ */ B(ca, {
					$active: s === "stop-limit",
					role: "menuitem",
					onClick: () => ue("stop-limit"),
					children: M("Stop Limit")
				}), /* @__PURE__ */ B(ca, {
					$active: s === "stop-market",
					role: "menuitem",
					onClick: () => ue("stop-market"),
					children: M("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ V(Ji, { children: [/* @__PURE__ */ B(Yi, {
			$active: a.side === "BUY",
			$side: "BUY",
			onClick: () => I("BUY"),
			children: M("Buy")
		}), /* @__PURE__ */ B(Yi, {
			$active: a.side === "SELL",
			$side: "SELL",
			onClick: () => I("SELL"),
			children: M("Sell")
		})] }),
		/* @__PURE__ */ V(T, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(Xi, {
				disabled: C,
				onClick: A,
				title: M("Margin mode"),
				children: a.marginMode === "CROSS" ? M("Cross") : M("Isolated")
			}), /* @__PURE__ */ V(Xi, {
				onClick: k,
				title: M("Leverage"),
				children: [a.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ V(Zi, { children: [/* @__PURE__ */ B(Qi, { children: M("Avbl") }), /* @__PURE__ */ V($i, { children: [/* @__PURE__ */ V(r, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				m,
				" ",
				i
			]
		}), /* @__PURE__ */ B(p, {
			variant: "text",
			scale: "xs",
			onClick: ee,
			title: M("Deposit"),
			"aria-label": M("Deposit"),
			style: {
				width: 18,
				height: 18,
				minWidth: 18,
				borderRadius: 999
			},
			children: /* @__PURE__ */ B(u, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		re && /* @__PURE__ */ V(ia, { children: [
			/* @__PURE__ */ B(ta, { children: M("Stop") }),
			/* @__PURE__ */ B(aa, {
				value: a.stopPrice,
				onChange: (e) => o({
					...a,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": M("Stop price")
			}),
			/* @__PURE__ */ V(oa, {
				type: "button",
				onClick: () => o({
					...a,
					stopPriceSource: a.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: M("Trigger source"),
				children: [a.stopPriceSource === "MARK" ? M("Mark") : M("Last"), " ▾"]
			})
		] }),
		ne && /* @__PURE__ */ V(ia, { children: [
			/* @__PURE__ */ B(ta, { children: M("Price") }),
			/* @__PURE__ */ B(aa, {
				value: a.price,
				onChange: (e) => o({
					...a,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": M("Limit price")
			}),
			/* @__PURE__ */ B(ra, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: i
			})
		] }),
		s === "stop-limit" && /* @__PURE__ */ V(ia, { children: [
			/* @__PURE__ */ B(ta, { children: M("TIF") }),
			/* @__PURE__ */ B(T, { flex: 1 }),
			/* @__PURE__ */ V(la, {
				value: a.timeInForce === "GTX" ? "GTC" : a.timeInForce,
				onChange: (e) => o({
					...a,
					timeInForce: e.target.value
				}),
				"aria-label": M("Time in force"),
				children: [
					/* @__PURE__ */ B("option", {
						value: "GTC",
						children: "GTC"
					}),
					/* @__PURE__ */ B("option", {
						value: "IOC",
						children: "IOC"
					}),
					/* @__PURE__ */ B("option", {
						value: "FOK",
						children: "FOK"
					})
				]
			})
		] }),
		/* @__PURE__ */ V(ea, { children: [
			/* @__PURE__ */ B(ta, { children: M("Size") }),
			/* @__PURE__ */ B(na, {
				value: a.quantity,
				onChange: (e) => o({
					...a,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ V(ra, {
				onClick: L,
				title: M("Toggle unit"),
				children: [N, " ▾"]
			})
		] }),
		/* @__PURE__ */ B(da, { children: /* @__PURE__ */ B(d, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: v,
			onValueChanged: y,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ V(T, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(l, {
				scale: "sm",
				checked: a.reduceOnly,
				onChange: (e) => o({
					...a,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ B(r, {
				fontSize: "14px",
				children: M("Reduce Only")
			})]
		}),
		/* @__PURE__ */ V(T, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(l, {
				scale: "sm",
				checked: a.tpSlEnabled,
				onChange: R
			}), /* @__PURE__ */ B(r, {
				fontSize: "14px",
				children: M("Take Profit / Stop Loss")
			})]
		}),
		a.tpSlEnabled && /* @__PURE__ */ V(T, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ V(f, { children: [/* @__PURE__ */ V(T, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(r, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: M("Take Profit")
				}), /* @__PURE__ */ B(ha, {
					value: a.takeProfitSource ?? "LAST",
					onChange: (e) => o({
						...a,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ V(fa, { children: [/* @__PURE__ */ V(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: M("Trigger Price")
				}), /* @__PURE__ */ B(ua, {
					value: a.takeProfitPrice,
					onChange: (e) => o({
						...a,
						takeProfitPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ V(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: M("PnL (USDT)")
				}), /* @__PURE__ */ B(ua, {
					value: a.takeProfitPnl ?? "",
					onChange: (e) => o({
						...a,
						takeProfitPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] }), /* @__PURE__ */ V(f, { children: [/* @__PURE__ */ V(T, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(r, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: M("Stop Loss")
				}), /* @__PURE__ */ B(ha, {
					value: a.stopLossSource ?? "LAST",
					onChange: (e) => o({
						...a,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ V(fa, { children: [/* @__PURE__ */ V(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: M("Trigger Price")
				}), /* @__PURE__ */ B(ua, {
					value: a.stopLossPrice,
					onChange: (e) => o({
						...a,
						stopLossPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ V(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: M("PnL (USDT)")
				}), /* @__PURE__ */ B(ua, {
					value: a.stopLossPnl ?? "",
					onChange: (e) => o({
						...a,
						stopLossPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] })]
		}),
		D,
		w ? /* @__PURE__ */ B(ga, {
			onClick: () => O(),
			disabled: !x,
			isLoading: S,
			scale: "md",
			$side: a.side,
			children: b
		}) : /* @__PURE__ */ B(ga, {
			$side: a.side,
			onClick: () => O(),
			scale: "md",
			disabled: !E,
			children: b
		}),
		/* @__PURE__ */ V(_a, { children: [
			/* @__PURE__ */ B(va, { children: M("Cost") }),
			/* @__PURE__ */ B(ya, { children: g.cost }),
			!H && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(va, { children: M("Est. Liq. Price") }), /* @__PURE__ */ B(ya, { children: g.liq })] }),
			/* @__PURE__ */ B(va, { children: M("Fees") }),
			/* @__PURE__ */ B(ya, { children: _ })
		] })
	] });
}, za = I(T)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Ba = I.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, Va = I(T)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, Ha = I(r).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Ua = I(T)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, Wa = I(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ga = I(T)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Ka = I.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 12px;
  border: 0;
  background: ${({ $selected: e, theme: t }) => e ? t.colors.tertiary : "transparent"};
  cursor: pointer;
  width: 100%;
  text-align: left;
  &:hover {
    background: ${({ theme: e }) => e.colors.input};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`, qa = I(T)`
  flex-direction: column;
`, Ja = I(T)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, Ya = I.input`
  background: transparent;
  border: 0;
  outline: 0;
  width: 100%;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Xa = I(T)`
  gap: 6px;
  margin-top: 4px;
`, Za = I.button`
  background: transparent;
  border: 1px solid ${({ theme: e }) => e.colors.primary};
  color: ${({ theme: e }) => e.colors.primary};
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  cursor: pointer;
  &:hover {
    background: ${({ theme: e }) => e.colors.tertiary};
  }
`, Qa = I.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Z = I(T)`
  justify-content: space-between;
  align-items: center;
`, $a = I(T)`
  flex-direction: column;
  gap: 8px;
`, eo = I(T)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, to = I.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, no = I(r).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, ro = I.div`
  width: ${({ $size: e = 24 }) => e}px;
  height: ${({ $size: e = 24 }) => e}px;
  border-radius: 50%;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.text};
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
`, io = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, ao = [
	25,
	50,
	75
], oo = ({ isOpen: e, onClose: t, step: n, evmAddress: a, solanaAddress: o, isLoadingAssets: s = !1, assets: c, selectedAssetId: l, onSelectAsset: u, otherSupportedSymbols: d = [], selectedAsset: f, amount: p, onAmountChange: m, sourceAddress: h, errorSlot: v, onPercentClick: y, submitState: b, canContinue: S, onContinue: C, onBack: w, receipt: E, checkingElapsedMs: D = 0, onDepositAgain: O, onRetry: k, t: A = io, renderTokenIcon: j, renderSpinner: ee }) => {
	let M = A(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund your Account"), N = (() => {
		switch (b) {
			case "switching-chain": return A("Switching chain...");
			case "approving": return A("Approve in wallet...");
			case "approve-confirming": return A("Confirming approval...");
			case "depositing": return A("Confirm in wallet...");
			case "deposit-confirming": return A("Confirming deposit...");
			case "done": return A("Done");
			case "failed": return A("Retry");
			default: return A("Continue");
		}
	})(), P = (e, t = 24) => j ? j(e, t) : /* @__PURE__ */ B(ro, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), F = (e) => ee ? ee(e) : /* @__PURE__ */ B("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ B("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), I = b === "switching-chain" || b === "approving" || b === "approve-confirming" || b === "depositing" || b === "deposit-confirming";
	return /* @__PURE__ */ B(x, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(g, {
			title: M,
			onDismiss: t,
			children: /* @__PURE__ */ V(za, { children: [
				n === "amount" && /* @__PURE__ */ B(T, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ B(i, {
						scale: "sm",
						variant: "text",
						onClick: w,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ B(_, { width: "18px" }),
						children: A("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(Ba, { children: [
						a && /* @__PURE__ */ V(Va, { children: [
							/* @__PURE__ */ B("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ B(Ha, { children: a }),
							/* @__PURE__ */ B(r, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						o && /* @__PURE__ */ V(Va, {
							style: { borderTop: a ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ B("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ B(Ha, { children: o }),
								/* @__PURE__ */ B(r, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ V(Ua, { children: [/* @__PURE__ */ V("div", { children: [/* @__PURE__ */ B(Wa, {
							color: "textSubtle",
							children: A("Balance")
						}), /* @__PURE__ */ B(r, {
							fontSize: "12px",
							color: "textSubtle",
							children: A("In your wallet")
						})] }), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							bold: !0,
							children: c.some((e) => e.hasBalance) ? A("Ready") : "—"
						})] })
					] }),
					s && /* @__PURE__ */ B(r, {
						fontSize: "12px",
						children: A("Loading tokens...")
					}),
					!s && c.length === 0 && /* @__PURE__ */ V(T, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: A("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ B(r, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							d.length > 0 && /* @__PURE__ */ B(r, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Supported: %tokens%", { tokens: d.slice(0, 8).join(" · ") })
							})
						]
					}),
					c.length > 0 && /* @__PURE__ */ B(Ga, { children: c.map((e) => /* @__PURE__ */ B(Ka, {
						$selected: l === e.id,
						onClick: () => u(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ V(T, {
							alignItems: "center",
							style: { gap: 12 },
							children: [P(e, 32), /* @__PURE__ */ V(qa, { children: [/* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ V(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: [
									e.balanceText,
									" ",
									e.symbol
								]
							})] })]
						})
					}, e.id)) }),
					c.length > 0 && d.length > 0 && /* @__PURE__ */ B(r, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: A("Also supported: %tokens%", { tokens: d.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && f && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(Ja, { children: [/* @__PURE__ */ V(T, {
						alignItems: "center",
						style: { gap: 12 },
						children: [P(f, 40), /* @__PURE__ */ V(T, {
							flexDirection: "column",
							children: [/* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: f.displayName || f.symbol
							}), /* @__PURE__ */ B(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: f.balanceText
							})]
						})]
					}), /* @__PURE__ */ V(T, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ B(Ya, {
							value: p,
							onChange: (e) => m(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ V(Xa, { children: [ao.map((e) => /* @__PURE__ */ V(Za, {
							onClick: () => y(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ B(Za, {
							onClick: () => y(100),
							children: A("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ V(Qa, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Wa, {
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							children: h ?? "—"
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Wa, {
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Wa, {
							color: "textSubtle",
							children: A("Token")
						}), /* @__PURE__ */ V(T, {
							alignItems: "center",
							style: { gap: 6 },
							children: [P(f, 16), /* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: f.symbol
							})]
						})] })
					] }),
					v,
					/* @__PURE__ */ B(i, {
						onClick: C,
						disabled: !S || I,
						isLoading: I,
						scale: "md",
						children: N
					})
				] }),
				n === "checking" && E && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(T, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [F(72), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ V($a, { children: [
						/* @__PURE__ */ V(eo, {
							$state: "done",
							children: [/* @__PURE__ */ B(to, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(r, {
								fontSize: "13px",
								children: A("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ V(eo, {
							$state: "done",
							children: [/* @__PURE__ */ B(to, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(r, {
								fontSize: "13px",
								children: A("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ V(eo, {
							$state: "active",
							children: [/* @__PURE__ */ B(to, {
								$state: "active",
								children: F(16)
							}), /* @__PURE__ */ B(r, {
								fontSize: "13px",
								children: A("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ V(Qa, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Wa, {
							color: "textSubtle",
							children: A("Amount")
						}), /* @__PURE__ */ V(r, {
							fontSize: "14px",
							bold: !0,
							children: [
								E.amount,
								" ",
								E.assetSymbol
							]
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Wa, {
							color: "textSubtle",
							children: A("Tx hash")
						}), /* @__PURE__ */ V(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								E.hash.slice(0, 10),
								"…",
								E.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Wa, {
							color: "textSubtle",
							children: A("Elapsed")
						}), /* @__PURE__ */ V(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(D / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ B(i, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: A("Close")
					})
				] }),
				n === "success" && E && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(no, { children: [
						E.amount,
						" ",
						E.assetSymbol
					] }),
					/* @__PURE__ */ V(Qa, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							bold: !0,
							children: E.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							bold: !0,
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Processing time")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							bold: !0,
							children: A("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ B(Qa, { children: /* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: A("Tx hash")
					}), /* @__PURE__ */ V(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							E.hash.slice(0, 10),
							"…",
							E.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ V(T, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(i, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: A("View Balance")
						}), /* @__PURE__ */ B(i, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: O,
							children: A("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(T, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(r, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("The transaction did not go through. Your funds did not move.")
						})]
					}),
					v,
					/* @__PURE__ */ V(T, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(i, {
							style: { flex: 1 },
							scale: "md",
							onClick: k,
							children: A("Try Again")
						}), /* @__PURE__ */ B(i, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: t,
							children: A("Close")
						})]
					})
				] })
			] })
		})
	});
}, so = (e) => e, co = ({ isOpen: e, onClose: a, phase: o, eoaAddress: s, agentAddress: c, isProvisioning: l = !1, linkButtonLabel: u, isLinkDisabled: d = !1, isLinkPending: p = !1, onLinkWallet: m, approveButtonLabel: h, isApproveDisabled: _ = !1, isApprovePending: v = !1, onApprove: y, errorSlot: b, t: S = so }) => {
	let C = c ?? S(l ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ B(x, {
		isOpen: e,
		onDismiss: a,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(g, {
			title: S("Enable Perps Trading"),
			onDismiss: a,
			children: /* @__PURE__ */ V(T, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: S("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ V(f, { children: [/* @__PURE__ */ B(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: S("Your wallet")
					}), /* @__PURE__ */ B(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: s ?? "—"
					})] }),
					/* @__PURE__ */ V(f, { children: [/* @__PURE__ */ B(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: S("Agent (trading signer)")
					}), /* @__PURE__ */ B(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: C
					})] }),
					b,
					o === "link-wallet" && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(i, {
						onClick: m,
						disabled: d || p,
						isLoading: p,
						scale: "md",
						children: u
					}), /* @__PURE__ */ B(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: S("You'll sign one message in your wallet. No funds move.")
					})] }),
					(o === "authorize-agent" || o === "checking-status") && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(i, {
						onClick: y,
						disabled: _ || v || o === "checking-status",
						isLoading: v || o === "checking-status",
						scale: "md",
						children: h
					}), /* @__PURE__ */ B(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: S("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					o === "done" && /* @__PURE__ */ B(n, {
						variant: "success",
						children: /* @__PURE__ */ B(t, { children: S("Trading enabled.") })
					})
				]
			})
		})
	});
}, lo = [
	50,
	250,
	500,
	1001
], uo = 1001, fo = 50 / 1001, po = 250 / 1001, mo = (e, t) => e <= t * fo ? "safe" : e <= t * po ? "warn" : "danger", ho = 500 / 1001, go = (e, t) => e > t * ho, _o = (e, t) => e > t * po, vo = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "High leverage" : "Danger zone", yo = (e) => e === "safe" ? "🌿" : e === "warn" ? "⚡️" : "🔥", bo = (e) => e === "safe" ? "A good place to start. You'll feel the market without getting rekt." : e === "warn" ? "Liquidation triggers around a 1% move." : "1% move against you liquidates. Only risk what you can afford to lose.", xo = () => /* @__PURE__ */ B("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M10.9629 8.57864L6.79069 12.7509C6.58302 12.9586 6.33844 13.0634 6.05694 13.0654C5.77544 13.0674 5.5251 12.9628 5.30594 12.7516C5.1026 12.5403 5.00194 12.2939 5.00394 12.0124C5.00594 11.7309 5.1111 11.4861 5.31944 11.2781L11.2714 5.33339C11.3736 5.23139 11.4873 5.15456 11.6124 5.10289C11.7376 5.05122 11.8683 5.02539 12.0044 5.02539C12.1406 5.02539 12.2713 5.05122 12.3964 5.10289C12.5216 5.15456 12.6319 5.22797 12.7272 5.32314L18.6829 11.2791C18.8983 11.4945 19.0059 11.7367 19.0059 12.0059C19.0059 12.2751 18.9023 12.5153 18.6949 12.7266C18.4758 12.9378 18.225 13.0434 17.9427 13.0434C17.6604 13.0434 17.4164 12.9378 17.2107 12.7266L13.0379 8.57864V18.3664C13.0379 18.6571 12.9383 18.9025 12.7389 19.1026C12.5394 19.303 12.295 19.4031 12.0057 19.4031C11.7164 19.4031 11.4702 19.303 11.2672 19.1026C11.0644 18.9025 10.9629 18.6571 10.9629 18.3664V8.57864Z",
		fill: "currentColor"
	})
}), So = () => /* @__PURE__ */ B("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M10.9997 5V16.17L6.11973 11.29C5.72973 10.9 5.08973 10.9 4.69973 11.29C4.30973 11.68 4.30973 12.31 4.69973 12.7L11.2897 19.29C11.6797 19.68 12.3097 19.68 12.6997 19.29L19.2897 12.7C19.6797 12.31 19.6797 11.68 19.2897 11.29C18.8997 10.9 18.2697 10.9 17.8797 11.29L12.9997 16.17V5C12.9997 4.45 12.5497 4 11.9997 4C11.4497 4 10.9997 4.45 10.9997 5Z",
		fill: "currentColor"
	})
}), Co = () => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ B("path", {
		d: "M7.99636 11.2598C8.18224 11.2598 8.3393 11.1966 8.46752 11.0702C8.59563 10.9436 8.65969 10.7869 8.65969 10.6V7.85984C8.65969 7.67284 8.5968 7.51612 8.47102 7.38967C8.34524 7.26323 8.18936 7.20001 8.00336 7.20001C7.81747 7.20001 7.66041 7.26323 7.53219 7.38967C7.40408 7.51612 7.34002 7.67284 7.34002 7.85984V10.6C7.34002 10.7869 7.40291 10.9436 7.52869 11.0702C7.65447 11.1966 7.81036 11.2598 7.99636 11.2598ZM7.99636 6.07968C8.18791 6.07968 8.34969 6.0149 8.48169 5.88534C8.61358 5.75567 8.67952 5.59506 8.67952 5.40351C8.67952 5.21195 8.61474 5.05018 8.48519 4.91818C8.35552 4.78629 8.19491 4.72034 8.00336 4.72034C7.8118 4.72034 7.65002 4.78512 7.51802 4.91467C7.38613 5.04434 7.32019 5.20495 7.32019 5.39651C7.32019 5.58806 7.38497 5.74984 7.51452 5.88184C7.64419 6.01373 7.8048 6.07968 7.99636 6.07968ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), wo = () => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), To = () => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ B("path", {
		d: "M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Eo = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Do = I(H)`
  display: flex;
  width: 506px;
  flex-shrink: 0;
  flex-direction: column;
  align-self: stretch;
  border-radius: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.card};
  overflow: hidden;
  font-variant-numeric: tabular-nums;
  & > div {
    display: flex;
    padding: 0;
    border-radius: 0;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    background: ${({ theme: e }) => e.colors.card};
  }
`, Oo = I.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
  padding: 24px;
`, ko = I.div`
  display: flex;
  width: 458px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
`, Ao = I.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0;
`, jo = I.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
I(T)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, I.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, I.span`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #f7931a;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
`, I.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, I.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, I.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, I.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var Mo = I.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, No = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Po = I(T)`
  align-items: center;
  justify-content: space-between;
`, Fo = I(r).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, Io = I.button`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.98);
  }
`, Lo = I.span`
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`, Ro = I.label`
  display: flex;
  min-width: 296px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  cursor: text;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645D9,
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`, zo = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, Bo = I.span`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.failure};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  font-feature-settings: 'liga' off;
`, Vo = I.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, Ho = I.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, Uo = I.input`
  width: 90px;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
  outline: none;
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
    opacity: 1;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`, Wo = I.button`
  display: flex;
  align-items: flex-end;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  & > :last-child {
    margin-left: -11px;
  }
  color: ${({ theme: e }) => e.colors.text};
`, Go = I.span`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: #26a17b;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
  overflow: hidden;
  /* When the chip wraps a consumer-supplied logo image, fit it inside
     the circle. Without this the raster either overflows or stretches. */
  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    background: #fff;
  }
`, Ko = I.span`
  display: flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 6px;
  border-top: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-right: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-left: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.card};
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, qo = I.span`
  position: relative;
  display: inline-flex;
`, Jo = I.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 6px;
  border-radius: 12px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.card};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
`, Yo = I.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: 0;
  border-radius: 8px;
  background: ${({ $selected: e, theme: t }) => e ? t.colors.input : "transparent"};
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  &:hover {
    background: ${({ theme: e }) => e.colors.input};
  }
`, Xo = I.span`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${({ $color: e }) => e ?? "#26a17b"};
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex: 0 0 24px;
  overflow: hidden;
  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
I.span`
  font-size: 14px;
  font-weight: 600;
`;
var Zo = I(T)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, Qo = I.button`
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: ${({ theme: e }) => e.colors.primary60};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.12px;
  &:hover {
    filter: brightness(1.1);
  }
`, $o = I.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, es = I(T)`
  justify-content: space-between;
  align-items: center;
`, ts = I.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, ns = {
	safe: "#129E7D",
	warn: "#FFB237",
	danger: "#ED4B9E"
}, rs = {
	safe: "#EAFBF7",
	warn: "#FBF2E7",
	danger: "#FFF0F9"
}, is = I.span`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border-top: 1px solid ${({ $zone: e }) => ns[e]};
  border-right: 1px solid ${({ $zone: e }) => ns[e]};
  border-bottom: 2px solid ${({ $zone: e }) => ns[e]};
  border-left: 1px solid ${({ $zone: e }) => ns[e]};
  background: ${({ $zone: e }) => rs[e]};
`, as = I.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #280D5F;
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, os = I.span`
  display: inline-flex;
  align-items: center;
  color: #280D5F;
  cursor: help;
`, ss = I.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, cs = I.div`
  position: relative;
  height: 21px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;

  html.dark & {
    background: ${({ theme: e }) => e.colors.backgroundBubblegum};
  }
`, ls = I.span`
  position: absolute;
  top: ${({ $variant: e }) => e === "triple" ? "-15px" : "-10px"};
  left: ${({ $fillPct: e, $variant: t }) => t === "triple" ? `calc(${e}% - 22px)` : t === "double" ? `calc(${e}% - 20.7px)` : `calc(${e}% - 19px)`};
  width: ${({ $variant: e }) => e === "triple" ? "44px" : e === "double" ? "41.455px" : "38.004px"};
  height: ${({ $variant: e }) => e === "triple" ? "48px" : e === "double" ? "42.549px" : "38.186px"};
  /* Sits above LevRangeInput so dragging the thumb is captured by our
     pointer handler instead of falling through to the native input
     (which maps click X→value and would snap to 1 at low leverage). */
  z-index: 2;
  pointer-events: auto;
  touch-action: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`, us = () => /* @__PURE__ */ V("svg", {
	width: "38",
	height: "39",
	viewBox: "0 0 38 39",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ B("ellipse", {
			cx: "19.0019",
			cy: "19.6397",
			rx: "19.0019",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "19.0013",
			cy: "17.455",
			rx: "17.8841",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ B("rect", {
			x: "23.3804",
			y: "9",
			width: "11.1776",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), ds = () => /* @__PURE__ */ V("svg", {
	width: "42",
	height: "43",
	viewBox: "0 0 42 43",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ B("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "18.5459",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "22.9092",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ B("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), fs = () => /* @__PURE__ */ V("svg", {
	width: "44",
	height: "48",
	viewBox: "0 0 44 48",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ B("ellipse", {
			cx: "25.0904",
			cy: "29.4522",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "25.0913",
			cy: "27.2753",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "18.5464",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ B("ellipse", {
			cx: "22.9087",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ B("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), ps = I.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, ms = I(T)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, hs = I.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border: 0;
  border-radius: 16px;
  background: ${({ $active: e, theme: t }) => e ? t.colors.textSubtle : t.colors.input};
  color: ${({ $active: e, theme: t }) => e ? t.colors.invertedContrast : t.colors.textSubtle};
  font-family: inherit;
  font-size: 13px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  cursor: pointer;
  &:hover {
    color: ${({ $active: e, theme: t }) => e ? t.colors.invertedContrast : t.colors.text};
  }
`, gs = I.div`
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  &:focus-within {
    box-shadow:
      0 0 0 1px ${({ theme: e }) => e.colors.secondary},
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`, _s = I.input`
  flex: 1;
  width: 100%;
  border: 0;
  background: transparent;
  text-align: center;
  font-family: inherit;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.text};
  outline: none;
  font-variant-numeric: tabular-nums;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`, vs = I.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`;
I.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var ys = I.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, bs = I(T)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, xs = I.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Ss = I.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, Cs = I.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  font-family: Kanit;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.24px;
  font-feature-settings: 'liga' off;
  color: #FFF;
  cursor: pointer;
  transition: filter 0.12s, transform 0.06s;
  background: ${({ theme: e, $variant: t }) => t === "up" ? e.colors.success : e.colors.failure};
  &:hover:not(:disabled) {
    filter: brightness(1.08);
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
    border-bottom-width: 2px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`, ws = I.span`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`, Ts = I(T)`
  align-self: stretch;
  gap: 8px;
`, Es = I(i)`
  display: flex;
  padding: 11px 12px 13px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  background: ${({ theme: e, $variant: t }) => t === "primary" ? e.colors.primary : e.colors.tertiary};
  color: ${({ theme: e, $variant: t }) => t === "primary" ? e.colors.invertedContrast : e.colors.primary};
  border-bottom: 2px solid
    ${({ $variant: e }) => e === "primary" ? "rgba(0, 0, 0, 0.20)" : "rgba(0, 0, 0, 0.10)"};
  &:hover {
    filter: brightness(1.08);
  }
`, Ds = I.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Os = I(T)`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: ${({ theme: e }) => e.colors.cardSecondary};
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 24px;
`, ks = I.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: center;
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, As = I.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.32px;
  font-variant-numeric: tabular-nums;
`, js = ({ selected: e, options: t, onSelect: n, onClickFallback: r }) => {
	let [i, a] = F(!1), o = P(null);
	j(() => {
		if (!i) return;
		let e = (e) => {
			o.current && (o.current.contains(e.target) || a(!1));
		}, t = (e) => {
			e.key === "Escape" && a(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [i]);
	let s = !!t && t.length > 1, c = t?.find((t) => t.code === e);
	return /* @__PURE__ */ V(qo, {
		ref: o,
		children: [/* @__PURE__ */ V(Wo, {
			type: "button",
			onClick: () => {
				s ? a((e) => !e) : r?.();
			},
			"aria-label": "Choose bet denomination",
			children: [/* @__PURE__ */ B(Go, { children: c?.logoUrl ? /* @__PURE__ */ B("img", {
				src: c.logoUrl,
				alt: e,
				loading: "lazy",
				decoding: "async"
			}) : e }), /* @__PURE__ */ B(Ko, { children: /* @__PURE__ */ B(wo, {}) })]
		}), s && i ? /* @__PURE__ */ B(Jo, {
			role: "menu",
			children: t.map((t) => /* @__PURE__ */ V(Yo, {
				type: "button",
				role: "menuitemradio",
				"aria-checked": t.code === e,
				$selected: t.code === e,
				onClick: () => {
					n?.(t.code), a(!1);
				},
				children: [/* @__PURE__ */ B(Xo, {
					$color: t.color,
					children: t.logoUrl ? /* @__PURE__ */ B("img", {
						src: t.logoUrl,
						alt: t.code,
						loading: "lazy",
						decoding: "async"
					}) : t.code.slice(0, 1)
				}), t.code]
			}, t.code))
		}) : null]
	});
}, Ms = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, betError: c, leverage: l, onLeverageChange: u, maxLeverage: d = uo, presets: f = lo, quoteAsset: p, onQuoteAssetClick: m, assetOptions: h, onAssetChange: g, fundBalanceText: _, onTopUpFund: v, onPercentClick: y, estimatedEntry: b, liqIfLong: x, marginRequired: S, openingFee: T, canSubmit: E, isSubmittingUp: O = !1, isSubmittingDown: k = !1, onUp: A, onDown: j, onDeposit: ee, onWithdraw: M, unrealizedPnl: N }) => {
	let P = Math.min(100, Math.max(0, l / d * 100)), F = mo(l, d), I = go(l, d), L = _o(l, d), R = O || k, z = !E || R, te = !E || R, { targetRef: H, tooltip: ne } = w(bo(F), { placement: "top" }), re = D.useRef(null), U = D.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.currentTarget, n = re.current;
		if (!n) return;
		t.setPointerCapture(e.pointerId);
		let r = n.getBoundingClientRect(), i = (e) => {
			let t = Math.max(0, Math.min(1, (e - r.left) / r.width)), n = Math.round(1 + t * (d - 1));
			return Math.max(1, Math.min(d, n));
		}, a = (e) => u(i(e.clientX)), o = () => {
			t.removeEventListener("pointermove", a), t.removeEventListener("pointerup", o), t.removeEventListener("pointercancel", o);
		};
		t.addEventListener("pointermove", a), t.addEventListener("pointerup", o), t.addEventListener("pointercancel", o);
	}, [d, u]);
	return /* @__PURE__ */ V(Do, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ B(Oo, { children: /* @__PURE__ */ V(jo, { children: [/* @__PURE__ */ V(Mo, { children: [/* @__PURE__ */ V(No, { children: [
			/* @__PURE__ */ V(Po, { children: [/* @__PURE__ */ B(Fo, { children: "My Perp Fund" }), /* @__PURE__ */ V(Io, {
				type: "button",
				onClick: v,
				"aria-label": "Top up fund",
				children: [
					/* @__PURE__ */ B("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ B(Eo, {})
					}),
					/* @__PURE__ */ B(Lo, { children: _ }),
					/* @__PURE__ */ B("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text, #280D5F)"
						},
						children: /* @__PURE__ */ B(To, {})
					})
				]
			})] }),
			/* @__PURE__ */ V(Ro, { children: [/* @__PURE__ */ V(zo, { children: [/* @__PURE__ */ B(Vo, { children: "My Bet" }), /* @__PURE__ */ V(Ho, { children: [/* @__PURE__ */ B(Uo, {
				type: "number",
				inputMode: "decimal",
				value: o,
				onChange: (e) => s(e.target.value),
				"aria-label": "Bet amount",
				placeholder: "0"
			}), /* @__PURE__ */ B(js, {
				selected: p,
				options: h,
				onSelect: g,
				onClickFallback: m
			})] })] }), c ? /* @__PURE__ */ B(Bo, {
				role: "alert",
				children: c
			}) : null] }),
			/* @__PURE__ */ V(Zo, { children: [
				/* @__PURE__ */ B(Qo, {
					type: "button",
					onClick: () => y?.(.25),
					children: "25%"
				}),
				/* @__PURE__ */ B($o, {}),
				/* @__PURE__ */ B(Qo, {
					type: "button",
					onClick: () => y?.(.5),
					children: "50%"
				}),
				/* @__PURE__ */ B($o, {}),
				/* @__PURE__ */ B(Qo, {
					type: "button",
					onClick: () => y?.(1),
					children: "MAX"
				})
			] })
		] }), /* @__PURE__ */ V(No, { children: [
			/* @__PURE__ */ B(Fo, { children: "Leverage" }),
			/* @__PURE__ */ V(es, { children: [/* @__PURE__ */ V(ts, { children: [l, "x"] }), /* @__PURE__ */ V(is, {
				$zone: F,
				children: [
					yo(F) ? /* @__PURE__ */ B(as, {
						as: "span",
						"aria-hidden": !0,
						children: yo(F)
					}) : null,
					/* @__PURE__ */ B(as, { children: vo(F) }),
					/* @__PURE__ */ B(os, {
						ref: H,
						"aria-label": `${vo(F)} explanation`,
						children: /* @__PURE__ */ B(Co, {})
					}),
					ne
				]
			})] }),
			/* @__PURE__ */ V(ss, { children: [/* @__PURE__ */ V(cs, {
				ref: re,
				$fillPct: P,
				$zone: F,
				"aria-hidden": !0,
				children: [/* @__PURE__ */ B(ps, {
					type: "range",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Number(e.target.value)),
					"aria-label": "Leverage"
				}), /* @__PURE__ */ B(ls, {
					$fillPct: P,
					$variant: I ? "triple" : L ? "double" : "single",
					onPointerDown: U,
					children: B(I ? fs : L ? ds : us, {})
				})]
			}), /* @__PURE__ */ V(ms, {
				role: "tablist",
				children: [/* @__PURE__ */ V(gs, { children: [/* @__PURE__ */ B(_s, {
					type: "number",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Math.max(1, Math.min(d, Number(e.target.value) || 1))),
					"aria-label": "Custom leverage"
				}), /* @__PURE__ */ B(vs, { children: "%" })] }), f.map((e) => /* @__PURE__ */ V(hs, {
					type: "button",
					role: "tab",
					"aria-selected": l === e,
					$active: l === e,
					onClick: () => u(e),
					children: [e, "x"]
				}, e))]
			})] })
		] })] }), /* @__PURE__ */ V(ko, { children: [o && o !== "0" ? /* @__PURE__ */ V(ys, { children: [
			/* @__PURE__ */ V(bs, { children: [/* @__PURE__ */ B(xs, { children: "Estimated Entry" }), /* @__PURE__ */ B(Ss, { children: b })] }),
			/* @__PURE__ */ V(bs, { children: [/* @__PURE__ */ B(xs, { children: "Liquidation if long" }), /* @__PURE__ */ B(Ss, {
				$danger: !0,
				children: x
			})] }),
			/* @__PURE__ */ V(bs, { children: [/* @__PURE__ */ B(xs, { children: "Margin required" }), /* @__PURE__ */ B(Ss, { children: S })] }),
			/* @__PURE__ */ V(bs, { children: [/* @__PURE__ */ B(xs, { children: "Opening fee" }), /* @__PURE__ */ B(Ss, { children: T })] })
		] }) : null, /* @__PURE__ */ V(Ao, { children: [/* @__PURE__ */ B(Cs, {
			type: "button",
			$variant: "up",
			disabled: z,
			onClick: A,
			"aria-busy": O,
			children: /* @__PURE__ */ V(ws, { children: [/* @__PURE__ */ B(xo, {}), O ? "..." : "UP"] })
		}), /* @__PURE__ */ B(Cs, {
			type: "button",
			$variant: "down",
			disabled: te,
			onClick: j,
			"aria-busy": k,
			children: /* @__PURE__ */ V(ws, { children: [/* @__PURE__ */ B(So, {}), k ? "..." : "DOWN"] })
		})] })] })] }) }), /* @__PURE__ */ V(Ds, { children: [/* @__PURE__ */ V(Ts, { children: [/* @__PURE__ */ B(Es, {
			$variant: "primary",
			onClick: ee,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ B(Es, {
			$variant: "secondary",
			onClick: M,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ V(Os, { children: [/* @__PURE__ */ V(ks, { children: ["Unrealized PnL ", /* @__PURE__ */ B(C, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ B(As, { children: N })] })] })]
	});
}, Ns = I.div`
  display: flex;
  /* Fluid — the consumer's column owns the width. Original 1058px was
     hardcoded for the storybook canvas and made the card overflow / look
     stranded inside narrower production layouts. */
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.card};
  font-variant-numeric: tabular-nums;
`, Ps = I.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
  text-align: left;
  flex-shrink: 0;
`, Fs = I.span`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: #f7931a;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
`, Is = I.span`
  display: inline-flex;
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  overflow: hidden;
  & > img,
  & > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
I.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`;
var Ls = I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Rs = I.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, zs = I.span`
  display: flex;
  height: 24px;
  padding: 2px 2px 2px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-right: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-left: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
`, Bs = I.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, Vs = I.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Hs = I.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Us = I.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, Ws = I.span`
  display: flex;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  background: ${({ $positive: e }) => e ? "#EAFBF7" : "#FFF0F9"};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, Gs = I.span`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive: e }) => e ? "#129E7D" : "#ED4B9E"};
`, Ks = I.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
`, qs = I(T)`
  align-items: center;
  gap: 24px;
  height: 56px;
  flex-shrink: 0;
`, Js = I.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  width: 36px;
  height: 56px;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme: e }) => e.colors.textSubtle};
  background: linear-gradient(90deg, transparent 0%, ${({ theme: e }) => e.colors.card} 40%);
  padding-right: 4px;
  pointer-events: none;
  opacity: ${({ $visible: e }) => e ? 1 : 0};
  transition: opacity 0.15s;
`, Ys = I.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`, Xs = I.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Zs = I.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Qs = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M1.90301 9.83956C1.65374 9.83956 1.47213 9.73331 1.35818 9.52081C1.24423 9.30831 1.25374 9.0988 1.3867 8.89228L5.49051 2.73574C5.61516 2.5553 5.78491 2.46509 5.99977 2.46509C6.21462 2.46509 6.38437 2.5553 6.50901 2.73574L10.6128 8.89228C10.7458 9.0988 10.7553 9.30831 10.6414 9.52081C10.5274 9.73331 10.3458 9.83956 10.0965 9.83956H1.90301Z",
		fill: "currentColor"
	})
}), $s = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M1.90301 2.16044C1.65374 2.16044 1.47213 2.26669 1.35818 2.47919C1.24423 2.69169 1.25374 2.9012 1.3867 3.10772L5.49051 9.26426C5.61516 9.4447 5.78491 9.53491 5.99977 9.53491C6.21462 9.53491 6.38437 9.4447 6.50901 9.26426L10.6128 3.10772C10.7458 2.9012 10.7553 2.69169 10.6414 2.47919C10.5274 2.26669 10.3458 2.16044 10.0965 2.16044H1.90301Z",
		fill: "currentColor"
	})
}), ec = () => /* @__PURE__ */ B("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M7.25878 9.75835L9.41712 11.9167C9.74212 12.2417 10.2671 12.2417 10.5921 11.9167L12.7504 9.75835C13.2754 9.23335 12.9004 8.33335 12.1588 8.33335H7.84212C7.10045 8.33335 6.73378 9.23335 7.25878 9.75835Z",
		fill: "currentColor"
	})
}), tc = I.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`, nc = I.div`
  display: flex;
  width: 697px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.card};
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
  padding: 16px;
  gap: 16px;
`, rc = I.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`, ic = I.button`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: Kanit;
  font-size: 16px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, ac = I.label`
  display: flex;
  padding: 7px 8px 9px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-right: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-left: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  color: ${({ theme: e }) => e.colors.textSubtle};
`, oc = I.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: Kanit;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  &::placeholder { color: ${({ theme: e }) => e.colors.textSubtle}; }
`, sc = I.div`
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr 1fr;
  align-items: center;
  align-self: stretch;
  row-gap: 4px;
`, cc = I.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  &:nth-child(1) { padding-left: 8px; padding-right: 0; }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) { justify-content: flex-end; }
`, lc = I.button`
  display: contents;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
`, uc = I.div`
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  ${lc}:hover & { background: ${({ theme: e }) => e.colors.cardSecondary}; }
`, dc = I(uc)`
  padding-left: 8px;
  padding-right: 0;
  color: #F0B90B;
`, fc = I(uc)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`, pc = I.span`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${({ $color: e }) => e};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
`, mc = I(uc)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`, hc = I.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e, $up: t }) => t ? e.colors.success : e.colors.failure};
  font-weight: 600;
`, gc = [
	{
		symbol: "BTC",
		lastPrice: "$590.75",
		change: -1.2,
		volume: "0.542 BNB",
		color: "#F0B90B",
		starred: !0
	},
	{
		symbol: "CAKE",
		lastPrice: "$1.46",
		change: .8,
		volume: "144.11 CAKE",
		color: "#23CAD5",
		starred: !0
	},
	{
		symbol: "ETH",
		lastPrice: "$2,181.25",
		change: -.6,
		volume: "0.206 ETH",
		color: "#627EEA",
		starred: !0
	}
], _c = ({ isOpen: e, onClose: t }) => e ? /* @__PURE__ */ B(tc, {
	onClick: t,
	children: /* @__PURE__ */ V(nc, {
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ V(rc, { children: [/* @__PURE__ */ B(ic, {
				type: "button",
				$active: !0,
				children: "Favorites"
			}), /* @__PURE__ */ B(ic, {
				type: "button",
				children: "All markets"
			})] }),
			/* @__PURE__ */ V(ac, { children: [/* @__PURE__ */ B("svg", {
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": !0,
				children: /* @__PURE__ */ B("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
			}), /* @__PURE__ */ B(oc, {
				type: "text",
				placeholder: "All tokens"
			})] }),
			/* @__PURE__ */ V(sc, {
				role: "table",
				children: [
					/* @__PURE__ */ B(cc, { children: "SYMBOLS" }),
					/* @__PURE__ */ B(cc, {}),
					/* @__PURE__ */ B(cc, { children: "LAST PRICE" }),
					/* @__PURE__ */ B(cc, { children: "1D CHANGE" }),
					/* @__PURE__ */ B(cc, { children: "1D VOLUME (USDT)" }),
					gc.map((e) => /* @__PURE__ */ V(lc, {
						type: "button",
						children: [
							/* @__PURE__ */ B(dc, { children: "★" }),
							/* @__PURE__ */ V(fc, { children: [/* @__PURE__ */ B(pc, {
								$color: e.color,
								children: e.symbol.slice(0, 1)
							}), /* @__PURE__ */ B("span", { children: e.symbol })] }),
							/* @__PURE__ */ B(mc, { children: e.lastPrice }),
							/* @__PURE__ */ B(mc, { children: /* @__PURE__ */ V(hc, {
								$up: e.change >= 0,
								children: [
									e.change >= 0 ? "▲" : "▼",
									" ",
									Math.abs(e.change).toFixed(1),
									"%"
								]
							}) }),
							/* @__PURE__ */ B(mc, { children: e.volume })
						]
					}, e.symbol))
				]
			})
		]
	})
}) : null, vc = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c, renderTokenIcon: l }) => {
	let u = r >= 0, d = l?.(), f = P(null), p = P(null), [m, h] = F(!1), [g, _] = F(!1);
	return j(() => {
		let e = f.current, t = p.current;
		if (!e || !t) return;
		let n = () => h(t.scrollWidth > e.clientWidth + 1);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), r.observe(t), () => r.disconnect();
	}, []), /* @__PURE__ */ V(Ns, { children: [
		/* @__PURE__ */ V(Ps, {
			type: "button",
			onClick: () => {
				c?.(), _(!0);
			},
			"aria-label": `Change market · ${t}`,
			children: [d == null ? /* @__PURE__ */ B(Fs, { children: e }) : /* @__PURE__ */ B(Is, { children: d }), /* @__PURE__ */ V(Ls, { children: [/* @__PURE__ */ B(Rs, { children: /* @__PURE__ */ V(zs, { children: [/* @__PURE__ */ B(Bs, { children: t }), /* @__PURE__ */ B(Vs, {
				"aria-hidden": !0,
				children: /* @__PURE__ */ B(ec, {})
			})] }) }), /* @__PURE__ */ V(Hs, { children: [/* @__PURE__ */ B(Us, { children: n }), /* @__PURE__ */ V(Ws, {
				$positive: u,
				children: [
					/* @__PURE__ */ B(Gs, {
						$positive: u,
						children: B(u ? Qs : $s, {})
					}),
					r.toFixed(2),
					"%"
				]
			})] })] })]
		}),
		/* @__PURE__ */ V(Ks, {
			ref: f,
			children: [/* @__PURE__ */ V(qs, {
				ref: p,
				children: [
					/* @__PURE__ */ V(Ys, { children: [/* @__PURE__ */ B(Xs, { children: "24h Volume" }), /* @__PURE__ */ B(Zs, { children: i })] }),
					/* @__PURE__ */ V(Ys, { children: [/* @__PURE__ */ B(Xs, { children: "Open Interest" }), /* @__PURE__ */ B(Zs, { children: a })] }),
					/* @__PURE__ */ V(Ys, { children: [/* @__PURE__ */ B(Xs, { children: "Funding Rate" }), /* @__PURE__ */ B(Zs, { children: o })] }),
					/* @__PURE__ */ V(Ys, { children: [/* @__PURE__ */ B(Xs, { children: "Next Funding" }), /* @__PURE__ */ B(Zs, { children: s })] })
				]
			}), /* @__PURE__ */ B(Js, {
				$visible: m,
				"aria-hidden": !0,
				children: /* @__PURE__ */ B("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					children: /* @__PURE__ */ B("path", { d: "M7.05 14.95 12 10 7.05 5.05 8.46 3.64 14.83 10l-6.37 6.36z" })
				})
			})]
		}),
		/* @__PURE__ */ B(_c, {
			isOpen: g,
			onClose: () => _(!1)
		})
	] });
}, yc = I(H)`
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  padding: 16px 24px 24px;
  height: 480px;
  align-self: stretch;
  position: relative;
  overflow: hidden;

  /* PerpsPanel injects an inner <div>; flatten its background + padding so
     the chart fills edge-to-edge while keeping our outer card framing. */
  & > div {
    background: transparent;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`, bc = I.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, xc = I.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Sc = I.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Cc = I.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, wc = I.div`
  position: relative;
  overflow: visible;
`, Tc = I.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, Ec = I.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, Dc = I.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  background: ${({ theme: e }) => e.colors.primary};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  font-size: 16px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  pointer-events: none;
`, Oc = 1e3, kc = 360, Ac = 20, jc = 70;
function Mc(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * Oc), i = e.map((e) => Ac + (1 - (e.price - t) / n) * (kc - Ac - jc)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${Oc} ${kc} L 0 ${kc} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var Nc = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", Pc = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", Fc = 200, Ic = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = R(), c = `simple-chart-fill-${ee().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = N(() => Mc(r), [r]), d = u?.line ?? Nc, f = u?.area ?? Pc, p = u?.endY ?? Fc;
	return /* @__PURE__ */ V(yc, { children: [/* @__PURE__ */ B(bc, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ B(xc, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ V(Sc, { children: [/* @__PURE__ */ V(Cc, { children: [/* @__PURE__ */ V(wc, { children: [/* @__PURE__ */ V("svg", {
		viewBox: `0 0 ${Oc} ${kc}`,
		preserveAspectRatio: "none",
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		},
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ B("defs", { children: /* @__PURE__ */ V("linearGradient", {
				id: c,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ B("stop", {
					offset: "0%",
					stopColor: l,
					stopOpacity: "0.30"
				}), /* @__PURE__ */ B("stop", {
					offset: "100%",
					stopColor: l,
					stopOpacity: "0.02"
				})]
			}) }),
			/* @__PURE__ */ B("path", {
				d: f,
				fill: `url(#${c})`
			}),
			/* @__PURE__ */ B("path", {
				d,
				fill: "none",
				stroke: l,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ B("line", {
				x1: "0",
				y1: p,
				x2: Oc - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ B(Dc, {
		style: {
			right: -8,
			top: `calc(${p}/${kc} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ B(Tc, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ B(Ec, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] })] });
}, Lc = I(H)`
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  align-self: stretch;
  overflow: hidden;

  /* PerpsPanel injects an inner <div> — flatten so the table sits flush. */
  & > div {
    background: transparent;
    padding: 0;
  }
`, Rc = I.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, zc = I.button`
  display: flex;
  padding: ${({ $active: e }) => e ? "12px 12px 12px 16px" : "12px 12px"};
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 16px;
  background: transparent;
  cursor: pointer;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  line-height: 150%;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, Bc = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`, Vc = I.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Q = I.div`
  padding: 16px 10px;
  color: ${({ theme: e }) => e.colors.secondary};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  white-space: nowrap;
`, $ = I.div`
  padding: 16px 10px;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: right;
  font-variant-numeric: tabular-nums;
`, Hc = I($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  /* Pin the icon slot at 40×40 with flex-shrink 0 so the default
     TokenIcon chip OR a consumer-supplied image element via
     renderTokenIcon can't stretch when the cell gets narrow. Without
     this, a raw image from renderTokenIcon grows with flex 1 1 auto
     and distorts the artwork. */
  & > :first-child {
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
  }
  /* Constrain raster icons specifically so they keep aspect ratio
     regardless of source dimensions. */
  & > :first-child img,
  & > :first-child svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`, Uc = I.span`
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ $color: e }) => e};
  color: #fff;
  font-weight: 700;
  font-size: 14px;
`, Wc = I.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`, Gc = I.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Kc = I.span`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, qc = I($)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid
    ${({ $direction: e, theme: t }) => e === "up" ? t.colors.success : t.colors.failure};
  color: ${({ $direction: e, theme: t }) => e === "up" ? t.colors.success : t.colors.failure};
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
  margin: 16px 10px;
  /* "Up/Long" / "Down/Short" must stay on one line — without this the
     glyph and label wrap into two lines on narrow grids and the pill
     visually breaks. */
  white-space: nowrap;
`, Jc = I($)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "var(--pcs-colors-positive60, #129E7D)" : e === "negative" ? t.colors.failure : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, Yc = I($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Xc = I.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, Zc = I.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, Qc = I.button`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  aspect-ratio: 1 / 1;
  margin: 16px 10px;
  border-radius: 8px;
  border-top: 1px solid #ED4B9E;
  border-right: 1px solid #ED4B9E;
  border-bottom: 2px solid #ED4B9E;
  border-left: 1px solid #ED4B9E;
  background: #FFF0F9;
  color: #ED4B9E;
  cursor: pointer;
  &:hover { filter: brightness(0.97); }
`, $c = I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, el = I.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, tl = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, nl = (e) => tl[e.toUpperCase()] ?? "#7A6EAA", rl = (e) => e === "up" ? "↑" : "↓", il = (e) => e === "up" ? "Up/Long" : "Down/Short", al = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ B("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), ol = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ V(Lc, { children: [
	/* @__PURE__ */ V(Rc, {
		role: "tablist",
		children: [
			/* @__PURE__ */ B(zc, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ B(zc, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ B(zc, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ B($c, { children: "No open positions" }) : /* @__PURE__ */ V(Bc, {
		role: "table",
		children: [
			/* @__PURE__ */ B(Q, { children: "Token" }),
			/* @__PURE__ */ B(Q, { children: "Direction" }),
			/* @__PURE__ */ B(Q, { children: "Unrealized PnL" }),
			/* @__PURE__ */ B(Q, { children: "Entry Price" }),
			/* @__PURE__ */ B(Q, { children: "Liq. Price" }),
			/* @__PURE__ */ B(Q, { children: "Distance to Liq" }),
			/* @__PURE__ */ B(Q, {}),
			n.map((e) => /* @__PURE__ */ V(D.Fragment, { children: [
				/* @__PURE__ */ V(Hc, { children: [o?.(e) ?? /* @__PURE__ */ B(Uc, {
					$color: e.iconColor ?? nl(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ V(Wc, { children: [/* @__PURE__ */ B(Gc, { children: e.symbol }), /* @__PURE__ */ B(Kc, { children: e.chainLabel })] })] }),
				/* @__PURE__ */ V(qc, {
					$direction: e.direction,
					children: [
						rl(e.direction),
						" ",
						il(e.direction)
					]
				}),
				/* @__PURE__ */ B(Jc, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ B($, { children: e.entryPrice }),
				/* @__PURE__ */ B($, { children: e.liqPrice }),
				/* @__PURE__ */ V(Yc, { children: [/* @__PURE__ */ B(Xc, { children: /* @__PURE__ */ B(Zc, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ B("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ B(Qc, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ B(al, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ B($c, { children: "No open orders" }) : /* @__PURE__ */ V(Vc, {
		role: "table",
		children: [
			/* @__PURE__ */ B(Q, { children: "Symbol" }),
			/* @__PURE__ */ B(Q, { children: "Side" }),
			/* @__PURE__ */ B(Q, { children: "Type" }),
			/* @__PURE__ */ B(Q, { children: "Price" }),
			/* @__PURE__ */ B(Q, { children: "Size" }),
			/* @__PURE__ */ B(Q, { children: "Filled" }),
			/* @__PURE__ */ B(Q, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ V(D.Fragment, { children: [
				/* @__PURE__ */ B($, { children: e.symbol }),
				/* @__PURE__ */ B($, { children: /* @__PURE__ */ B(el, {
					$side: e.side,
					children: e.side
				}) }),
				/* @__PURE__ */ B($, { children: e.type }),
				/* @__PURE__ */ B($, { children: e.price }),
				/* @__PURE__ */ B($, { children: e.origQty }),
				/* @__PURE__ */ B($, { children: e.executedQty }),
				/* @__PURE__ */ B($, { children: e.status })
			] }, e.id))
		]
	})),
	e === "history" && /* @__PURE__ */ B($c, { children: "No transaction history" })
] });
//#endregion
export { _e as AccountPanel, Ni as BookTradesPanel, Oi as ChartPanel, oo as DepositModal, co as EnableTradingModal, Se as LeverageModal, Nt as MarketsDropdown, hr as OrderBook, ut as OrderConfirmModal, Ra as OrderForm, Fe as PerpsErrorMessage, H as PerpsPanel, Ir as PositionsPanel, je as RecentTrades, Ms as SimpleBetPanel, Ic as SimpleChartCard, ol as SimplePositionsCard, vc as SimpleTickerCard, rn as SymbolHeader, _i as TpSlModal, U as UnderlineTab, W as UnderlineTabs, nt as WithdrawModal };

//# sourceMappingURL=widgets.js.map