import { B as e, D as t, E as n, F as r, H as i, Ht as a, Jn as o, Jt as s, Ki as c, M as l, Q as u, S as d, T as f, V as p, Vt as m, i as h, it as g, j as _, nn as v, nr as y, o as b, qi as x, qn as S, t as C, w, wi as T } from "./chunks/useTooltip-BHDD4AgF.js";
import E, { Children as D, cloneElement as O, useCallback as k, useEffect as A, useId as j, useLayoutEffect as M, useMemo as N, useRef as P, useState as F } from "react";
import I, { css as L, useTheme as R } from "styled-components";
import { Fragment as z, jsx as B, jsxs as V } from "react/jsx-runtime";
import { createPortal as ee } from "react-dom";
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
`, te = I.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, U = I.button`
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
`, W = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(U, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), G = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(te, {
	$fullWidth: r,
	children: D.map(n, (n, i) => !n || typeof n != "object" ? n : O(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), ne = "(max-width: 575px)", re = () => {
	let [e, t] = F(() => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(ne).matches);
	return A(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(ne), n = (e) => t(e.matches);
		return t(e.matches), e.addEventListener?.("change", n), () => e.removeEventListener?.("change", n);
	}, []), e;
}, ie = I(H)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, ae = I(r).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, oe = I(w)`
  justify-content: space-between;
  align-items: center;
`, se = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, ce = I(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, le = I.button`
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
`, ue = I(w)`
  flex-direction: column;
  gap: 8px;
`, de = I(ce)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, fe = (e) => e, pe = I(w)`
  align-items: center;
  gap: 12px;
  padding: 12px;
`, me = I(r).attrs({ fontSize: "14px" })`
  flex: 1;
  color: ${({ theme: e }) => e.colors.text};
`, he = I.strong`
  margin-left: 8px;
  font-weight: 600;
`, ge = I.button`
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
`, _e = ({ state: e, canDeposit: t = !0, onDeposit: n, t: r = fe, mobileLabel: i }) => {
	let a = e.kind === "ready" && e.equity ? e.equity : "$0.00";
	return /* @__PURE__ */ V(pe, { children: [/* @__PURE__ */ V(me, { children: [
		i ?? r("Perpetual Account"),
		" ",
		/* @__PURE__ */ B(he, { children: a })
	] }), /* @__PURE__ */ B(ge, {
		type: "button",
		onClick: n,
		disabled: !t,
		children: r("Deposit")
	})] });
}, ve = (e) => {
	if (re()) return /* @__PURE__ */ B(_e, { ...e });
	let { walletDisplay: a, state: o, canDeposit: s = !0, canWithdraw: c = !0, onDeposit: l, onWithdraw: u, onEnableTrading: d, t: f = fe } = e;
	return /* @__PURE__ */ V(ie, { children: [
		/* @__PURE__ */ V(w, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(le, {
				$variant: "primary",
				onClick: l,
				disabled: !s,
				children: f("Deposit")
			}), /* @__PURE__ */ B(le, {
				$variant: "secondary",
				onClick: u,
				disabled: !c,
				children: f("Withdraw")
			})]
		}),
		o.kind === "needs-deposit" && /* @__PURE__ */ B(n, {
			variant: "warning",
			children: /* @__PURE__ */ V(w, {
				flexDirection: "column",
				style: { gap: 4 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "14px",
					bold: !0,
					children: f("Deposit to get started")
				}), /* @__PURE__ */ B(t, {
					fontSize: "12px",
					children: f("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
				})]
			})
		}),
		o.kind === "needs-trading" && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(n, {
			variant: "warning",
			children: /* @__PURE__ */ V(w, {
				flexDirection: "column",
				style: { gap: 4 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "14px",
					bold: !0,
					children: f("Enable Trading to view your Aster balance")
				}), /* @__PURE__ */ B(t, {
					fontSize: "12px",
					children: f("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
				})]
			})
		}), /* @__PURE__ */ B(i, {
			onClick: d,
			scale: "sm",
			variant: "primary",
			children: f("Enable Trading")
		})] }),
		o.kind === "ready" && /* @__PURE__ */ V(ue, { children: [
			/* @__PURE__ */ B(ae, { children: f("Account Equity") }),
			/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(se, { children: f("Wallet") }), /* @__PURE__ */ B(ce, { children: a ?? "—" })] }),
			/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(se, { children: f("Equity") }), /* @__PURE__ */ B(ce, { children: o.equity || "—" })] }),
			/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(se, { children: f("Available") }), /* @__PURE__ */ B(ce, { children: o.available || "—" })] }),
			/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(se, { children: f("Unrealized PnL") }), /* @__PURE__ */ B(de, {
				$sign: o.pnlSign,
				children: o.unrealizedPnl || "—"
			})] }),
			/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(se, { children: f("Margin mode") }), /* @__PURE__ */ B(ce, { children: o.marginMode ?? f("Cross") })] })
		] })
	] });
}, ye = I(w)`
  gap: 10px;
  align-items: stretch;
`, be = I(i).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, xe = I(w)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, Se = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ce = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: a = 1, maxLeverage: o = 100, availableBalance: s, onConfirm: c, onClose: l, isSubmitting: u = !1, errorSlot: p, t: m = Se }) => {
	let [g, _] = F(n);
	A(() => {
		e && _(n);
	}, [e, n]);
	let v = (e) => Math.max(a, Math.min(o, Math.round(e))), y = s * g;
	return /* @__PURE__ */ B(b, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(h, {
			title: m("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: l,
			children: /* @__PURE__ */ V(w, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(ye, { children: [
						/* @__PURE__ */ B(be, {
							onClick: () => _((e) => v(e - 1)),
							disabled: g <= a,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ V(xe, { children: [g, "X"] }),
						/* @__PURE__ */ B(be, {
							onClick: () => _((e) => v(e + 1)),
							disabled: g >= o,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ B(d, {
						variant: "dotted",
						name: "perp-leverage",
						min: 0,
						max: o,
						value: g,
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
						onClick: () => c(g),
						children: m(u ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, we = I.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, Te = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ee = I.div`
  overflow-y: auto;
  min-height: 0;
`, De = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, Oe = I.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, ke = I.span`
  text-align: right;
`, Ae = I(ke)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, je = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, Me = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = N(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ V(z, { children: [
		t && /* @__PURE__ */ B(we, { children: t }),
		/* @__PURE__ */ V(Te, { children: [
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
		/* @__PURE__ */ B(Ee, { children: a.map((e) => /* @__PURE__ */ V(De, { children: [
			/* @__PURE__ */ B(Oe, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ B(ke, { children: e.size }),
			/* @__PURE__ */ B(Ae, { children: je(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ B("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ B(H, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, Ne = I(f)`
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
`, Pe = I(i).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Fe = (e) => e, Ie = ({ variant: e, title: i, message: a, details: o, t: s = Fe }) => {
	let [c, l] = F(!1);
	return i ? /* @__PURE__ */ B(n, {
		variant: e,
		children: /* @__PURE__ */ V(w, {
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
				o && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(Pe, {
					onClick: () => l((e) => !e),
					children: s(c ? "Hide details" : "Show details")
				}), c && /* @__PURE__ */ B(Ne, { children: o })] })
			]
		})
	}) : /* @__PURE__ */ B(n, {
		variant: e,
		children: /* @__PURE__ */ B(t, { children: a })
	});
}, Le = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Re = I(w)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, ze = I(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Be = I(w)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Ve = I.button`
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
`, He = I(w)`
  flex-direction: column;
`, Ue = I.div`
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
`, We = I.button`
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
`, Ge = I(w)`
  flex-direction: column;
  gap: 8px;
`, Ke = I(w)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
`, qe = I(w)`
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
`, Je = I.button`
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
`, Ye = I.input`
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
`, Xe = I(w)`
  align-items: center;
  gap: 8px;
`, Ze = I.button`
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
`, Qe = I.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, $e = I.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, et = I(w)`
  justify-content: space-between;
  align-items: center;
`, tt = I(w)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, nt = [
	25,
	50,
	75
], rt = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: a, selectedAssetId: o, onSelectAsset: s, selectedAsset: c, destinationAddress: l, destinationChainName: u = "BSC", feeText: d, amount: p, onAmountChange: m, onPercentClick: _, onBack: v, onWithdraw: y, onClose: x, isSubmitting: S = !1, canSubmit: C = !0, errorSlot: T, t: D = Le, renderTokenIcon: O }) => {
	let k = (e, t = 24) => O ? O(e, t) : /* @__PURE__ */ B(Ue, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ B(b, {
		isOpen: e,
		onDismiss: x,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(h, {
			title: t === "select" ? D("Withdraw from Aster") : D("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: x,
			children: /* @__PURE__ */ V(Re, { children: [
				t === "amount" && /* @__PURE__ */ B(w, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ V(We, {
						type: "button",
						onClick: v,
						"aria-label": "back",
						children: [/* @__PURE__ */ B(g, {
							width: "14px",
							color: "primary"
						}), /* @__PURE__ */ B("span", { children: D("Back") })]
					})
				}),
				t === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(f, { children: [/* @__PURE__ */ B(ze, {
						color: "textSubtle",
						children: D("Select asset")
					}), /* @__PURE__ */ B(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: D("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ B(r, {
						fontSize: "12px",
						children: D("Loading assets...")
					}),
					!n && a.length === 0 && /* @__PURE__ */ V(tt, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						children: D("Nothing to withdraw yet")
					}), /* @__PURE__ */ B(r, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: D("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					a.length > 0 && /* @__PURE__ */ B(Be, { children: a.map((e) => /* @__PURE__ */ V(Ve, {
						$selected: o === e.id,
						onClick: () => s(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ V(w, {
							alignItems: "center",
							style: { gap: 12 },
							children: [k(e, 32), /* @__PURE__ */ V(He, { children: [/* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ B(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: D("Withdrawable")
							})] })]
						}), /* @__PURE__ */ V(w, {
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
					/* @__PURE__ */ V(Ge, { children: [/* @__PURE__ */ V(Ke, { children: [/* @__PURE__ */ B(r, {
						fontSize: "12px",
						bold: !0,
						color: "textSubtle",
						children: D("Withdrawable: %amt% %sym%", {
							amt: c.withdrawableText,
							sym: c.symbol
						})
					}), _ && /* @__PURE__ */ V(Xe, { children: [
						nt.map((e, t) => /* @__PURE__ */ V(E.Fragment, { children: [t > 0 && /* @__PURE__ */ B(Qe, {}), /* @__PURE__ */ V(Ze, {
							onClick: () => _(e),
							children: [e, "%"]
						})] }, e)),
						/* @__PURE__ */ B(Qe, {}),
						/* @__PURE__ */ B(Ze, {
							onClick: () => _(100),
							children: D("MAX")
						})
					] })] }), /* @__PURE__ */ V(qe, { children: [/* @__PURE__ */ V(Je, {
						type: "button",
						children: [k(c, 40), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							bold: !0,
							children: c.displayName || c.symbol
						})]
					}), /* @__PURE__ */ B(Ye, {
						value: p,
						onChange: (e) => m(e.target.value),
						placeholder: "0.0",
						inputMode: "decimal"
					})] })] }),
					/* @__PURE__ */ V($e, { children: [
						/* @__PURE__ */ V(et, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: D("Destination")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ V(et, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: D("Network")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							children: u
						})] }),
						/* @__PURE__ */ V(et, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: D("Token")
						}), /* @__PURE__ */ V(w, {
							alignItems: "center",
							style: { gap: 6 },
							children: [k(c, 16), /* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ V(et, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: D("Fee")
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
					T,
					/* @__PURE__ */ B(i, {
						onClick: y,
						disabled: !C || !p || S,
						isLoading: S,
						scale: "md",
						children: D(S ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ B(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: D("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, K = I(w)`
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
`, it = I(w)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, at = I.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, ot = I(J)`
  color: ${({ theme: e }) => e.colors.failure};
`, st = I(i)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, ct = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, lt = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", ut = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, dt = ({ isOpen: e, details: t, onConfirm: n, onClose: i, onSkipFutureChange: a, t: o = ct }) => {
	let [s, c] = F(!1);
	return /* @__PURE__ */ B(b, {
		isOpen: e,
		onDismiss: i,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(h, {
			title: o("Confirm Order"),
			onDismiss: i,
			children: /* @__PURE__ */ V(w, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Symbol") }), /* @__PURE__ */ B(J, { children: t.symbol })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Side / Type") }), /* @__PURE__ */ V(J, { children: [
						/* @__PURE__ */ B(at, {
							$side: t.side,
							children: t.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						ut(t.type, o)
					] })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Size") }), /* @__PURE__ */ V(J, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Price") }), /* @__PURE__ */ V(J, { children: [
						lt(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Trigger Price") }), /* @__PURE__ */ V(J, { children: [
						lt(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Leverage") }), /* @__PURE__ */ V(J, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Cost") }), /* @__PURE__ */ B(J, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Est. Liq. Price") }), /* @__PURE__ */ B(ot, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ V(K, { children: [/* @__PURE__ */ B(q, { children: o("Reduce Only") }), /* @__PURE__ */ B(J, { children: o("Yes") })] }),
					/* @__PURE__ */ V(it, { children: [/* @__PURE__ */ B(l, {
						scale: "sm",
						checked: s,
						onChange: (e) => c(e.target.checked)
					}), /* @__PURE__ */ B(r, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ B(f, {
						mt: "8px",
						children: /* @__PURE__ */ B(st, {
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
}, ft = I.div`
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
`, pt = I(w)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, mt = I.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, ht = I.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, gt = I.input`
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
`, _t = I.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, vt = I.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, yt = I.button`
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
`, bt = I.button`
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
`, xt = I(w)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, St = I.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, Ct = I.span`
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
`, wt = I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Tt = I(r)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, Et = I(w)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Dt = ({ filled: e }) => /* @__PURE__ */ B("svg", {
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
}), Ot = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, kt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, At = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, jt = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), Mt = (e) => jt(e).slice(0, 1) || e.slice(0, 1), Nt = (e) => e, Pt = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: i, logoForSymbol: a, isLoading: o = !1, t: s = Nt }) => {
	let [c, l] = F("all"), [u, d] = F(""), f = N(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ V(ft, { children: [
		/* @__PURE__ */ V(pt, { children: [/* @__PURE__ */ B(mt, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ B(mt, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ V(ht, { children: [/* @__PURE__ */ B(T, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ B(gt, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ V(_t, { children: [
			/* @__PURE__ */ B("span", {}),
			/* @__PURE__ */ B("span", { children: s("Symbols") }),
			/* @__PURE__ */ B(Tt, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ B(Tt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ B(Tt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ B(vt, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ B(Et, { children: /* @__PURE__ */ B(r, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let r = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(jt(e.symbol));
				return /* @__PURE__ */ V(yt, {
					onClick: () => i(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ B(bt, {
							$filled: r,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(r ? "Unfavorite" : "Favorite"),
							"aria-pressed": r,
							children: /* @__PURE__ */ B(Dt, { filled: r })
						}),
						/* @__PURE__ */ V(xt, { children: [
							/* @__PURE__ */ B(Ct, { children: c ? /* @__PURE__ */ B(wt, {
								src: c,
								alt: jt(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = Mt(e.symbol));
								}
							}) : Mt(e.symbol) }),
							/* @__PURE__ */ B("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ V(St, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ B(Tt, { children: Ot(e.lastPrice) }),
						/* @__PURE__ */ B(Tt, {
							$tone: o >= 0 ? "up" : "down",
							children: kt(e.priceChangePercent)
						}),
						/* @__PURE__ */ B(Tt, { children: At(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, Ft = I(w)`
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
`, It = I(w)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, Lt = I.button`
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
`, Rt = I.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, zt = I.button`
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
`, Bt = I.span`
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
`, Vt = I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Ht = I(r)`
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
var Ut = I.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Wt = I(w)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Gt = I(w)`
  flex-direction: column;
  flex-shrink: 0;
`, Kt = I(r)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, qt = I(r)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Jt = I(w)`
  align-items: baseline;
  white-space: nowrap;
`, Yt = I.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Xt = I.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, Zt = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Qt = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, $t = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, en = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, tn = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", nn = () => /* @__PURE__ */ B("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), rn = (e) => e, an = (e) => re() ? /* @__PURE__ */ B(_n, { ...e }) : /* @__PURE__ */ B(on, { ...e }), on = ({ symbol: e, pairLabel: t, logoUrl: n, leverage: r, lastPrice: i, markPrice: a, indexPrice: o, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, marketsOpen: h, onMarketsOpenChange: g, t: _ = rn }) => {
	let v = R(), y = h !== void 0, [b, x] = F(!1), S = y ? h : b, C = k((e) => {
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
	}, [S]), A(() => {
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
	let O = k(() => C(!1), []), j = Number(c) < 0, N = Number(u) < 0;
	return /* @__PURE__ */ V(Ft, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ V(It, { children: [p && /* @__PURE__ */ B(zt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": _(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ B(nn, {})
			}), /* @__PURE__ */ V(Lt, {
				ref: E,
				"aria-haspopup": "listbox",
				"aria-expanded": S,
				disabled: !m,
				onClick: () => m && C((e) => !e),
				children: [
					/* @__PURE__ */ B(Bt, {
						$bg: n ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: n ? /* @__PURE__ */ B(Vt, {
							src: n,
							alt: t
						}) : tn(t)
					}),
					/* @__PURE__ */ B(Ht, { children: t }),
					/* @__PURE__ */ B(s, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			S && w && typeof document < "u" && m ? ee(/* @__PURE__ */ B(Rt, {
				ref: D,
				style: {
					top: w.top,
					left: w.left
				},
				children: m(O)
			}), document.body) : null,
			/* @__PURE__ */ B(Ut, {
				"aria-label": `Last price: ${i ?? ""}`,
				children: i ?? "—"
			}),
			/* @__PURE__ */ V(Wt, {
				role: "list",
				children: [
					/* @__PURE__ */ V(Gt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Kt, {
							$dashed: !0,
							children: _("Mark")
						}), /* @__PURE__ */ B(qt, { children: a ?? "—" })]
					}),
					/* @__PURE__ */ V(Gt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Kt, {
							$dashed: !0,
							children: _("Index")
						}), /* @__PURE__ */ B(qt, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ V(Gt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Kt, {
							$dashed: !0,
							children: _("Funding / Countdown")
						}), /* @__PURE__ */ V(Jt, { children: [
							/* @__PURE__ */ B(Yt, {
								$negative: j,
								children: Zt(c)
							}),
							/* @__PURE__ */ B(Xt, { children: "/" }),
							/* @__PURE__ */ B(qt, {
								as: "span",
								children: $t(l)
							})
						] })]
					}),
					/* @__PURE__ */ V(Gt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Kt, { children: _("24h Change") }), /* @__PURE__ */ B(qt, {
							style: { color: u ? N ? v.colors.failure : v.colors.success : void 0 },
							children: Qt(u)
						})]
					}),
					/* @__PURE__ */ V(Gt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Kt, { children: _("24h Volume (USDT)") }), /* @__PURE__ */ B(qt, { children: en(d) })]
					})
				]
			})
		]
	});
}, sn = I(w)`
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  font-variant-numeric: tabular-nums;
`, cn = I.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  &[aria-disabled='true'] {
    cursor: default;
  }
`, ln = I.span`
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
`, un = I.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, dn = I.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 4px;
  background: ${({ theme: e }) => e.colors.input};
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
`, fn = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  display: inline-flex;
  align-items: center;
`, pn = I.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, mn = I.span`
  flex: 1;
`, hn = I.button`
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
`, gn = I.div`
  position: fixed;
  z-index: 1000;
`, _n = ({ symbol: e, pairLabel: t, logoUrl: n, change24h: r, favorited: i = !1, onToggleFavorite: o, chartOpen: l = !1, onChartToggle: u, renderMarketsDropdown: d, marketsOpen: f, onMarketsOpenChange: p, t: h = rn }) => {
	let g = f !== void 0, [_, v] = F(!1), y = g ? f : _, b = k((e) => {
		let t = typeof e == "function" ? e(y) : e;
		g || v(t), p?.(t);
	}, [
		g,
		y,
		p
	]), S = P(null), C = P(null), [w, T] = F(null);
	M(() => {
		if (!y || !S.current) return;
		let e = () => {
			let e = S.current.getBoundingClientRect(), t = Math.max(12, e.left), n = Math.min(window.innerWidth - 24, 480);
			T({
				top: e.bottom + 4,
				left: t,
				width: n
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [y]), A(() => {
		if (!y) return;
		let e = (e) => {
			let t = e.target;
			S.current?.contains(t) || C.current?.contains(t) || b(!1);
		}, t = (e) => {
			e.key === "Escape" && b(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [y]);
	let E = k(() => b(!1), [b]), D = Number(r) < 0, O = t.split(/[- ]/)[0] ?? t, j = !!d;
	return /* @__PURE__ */ V(sn, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ V(cn, {
				ref: S,
				role: "button",
				"aria-haspopup": "listbox",
				"aria-expanded": y,
				"aria-disabled": !j,
				tabIndex: j ? 0 : -1,
				onClick: () => j && b((e) => !e),
				onKeyDown: (e) => {
					j && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), b((e) => !e));
				},
				children: [
					/* @__PURE__ */ B(ln, {
						$bg: n ? "transparent" : void 0,
						children: n ? /* @__PURE__ */ B(Vt, {
							src: n,
							alt: t
						}) : O
					}),
					/* @__PURE__ */ B(un, { children: e }),
					/* @__PURE__ */ B(dn, { children: h("Perp") }),
					/* @__PURE__ */ B(fn, { children: /* @__PURE__ */ B(s, {
						width: "16px",
						color: "textSubtle"
					}) })
				]
			}),
			r !== void 0 && /* @__PURE__ */ B(pn, {
				$negative: D,
				children: Qt(r)
			}),
			/* @__PURE__ */ B(mn, {}),
			o && /* @__PURE__ */ B(hn, {
				type: "button",
				$starred: i,
				"aria-label": h(i ? "Unfavorite" : "Favorite"),
				"aria-pressed": i,
				onClick: o,
				children: B(i ? c : x, {
					width: "20px",
					"aria-hidden": "true"
				})
			}),
			u && /* @__PURE__ */ B(hn, {
				type: "button",
				$active: l,
				"aria-label": h(l ? "Hide chart" : "Show chart"),
				"aria-pressed": l,
				onClick: u,
				children: B(l ? m : a, { width: "20px" })
			}),
			y && w && typeof document < "u" && d ? ee(/* @__PURE__ */ B(gn, {
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
}, vn = 10, yn = 27, bn = I(w)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, xn = I(w)`
  gap: 5px;
`, Sn = I.button`
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
`, Cn = I.div`
  position: relative;
`, wn = I.button`
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
`, Tn = I.div`
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
`, En = I.button`
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
`, Dn = I(w)`
  align-items: center;
  gap: 2px;
`, On = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, kn = I.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, An = I.div`
  height: ${({ $size: e }) => e === "full" ? vn * 2 * yn : vn * yn}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, jn = I.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${yn}px;
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
`, Mn = I.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, Nn = I.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, Pn = I.div`
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
`, Fn = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, In = I.span`
  text-align: center;
`, Ln = I.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Rn = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, zn = [
	100,
	50,
	10,
	1
], Bn = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, Vn = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), Hn = (e, t) => {
	let n = [];
	for (let e of zn) t > e * 10 && n.push(String(e));
	let r = Vn(e);
	for (let e = 1; e <= r; e++) n.push(Bn(e));
	return n;
}, Un = (e, t) => {
	A(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, Wn = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = F(!1), o = P(null);
	return Un(o, () => a(!1)), /* @__PURE__ */ V(Cn, {
		ref: o,
		children: [/* @__PURE__ */ V(wn, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ B(Tn, { children: t.map((e) => /* @__PURE__ */ B(En, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, Gn = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ V("svg", {
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
}), Kn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
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
}), qn = ({ askColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
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
}), Jn = (e) => e, Yn = [
	"0.1",
	"0.5",
	"1",
	"5",
	"10",
	"50",
	"100"
], Xn = I.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0;
  font-size: 12px;
  height: 100%;
  width: 100%;
  background: ${({ theme: e }) => e.colors.card};
`, Zn = I.div`
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
`, Qn = I.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
  padding-bottom: 4px;
  margin-bottom: 4px;
`, $n = I.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`, er = I.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1.5;
  z-index: 1;
  font-variant-numeric: tabular-nums;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, tr = I.span`
  position: absolute;
  inset: 0 0 0 auto;
  z-index: -1;
  pointer-events: none;
`, nr = I.div`
  text-align: center;
  padding: 8px 0;
`, rr = I.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, ir = I.div`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ar = I.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 4px;
  /* Sit directly below the last bid row in normal flow. Earlier we used
     margin-top: auto to glue this to the column bottom, but when the
     adjacent OrderForm column is taller than the order book the grid row
     stretches MWrap and the footer ends up below the iPhone viewport. */
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, or = I.button`
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
`, sr = I.button`
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
`, cr = I.div`
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
`, lr = I.button`
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
`, ur = I.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 250;
`, dr = I.div`
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
`, fr = I.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0.4;
  margin: 4px auto 12px;
`, pr = I.button`
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
`, mr = I.span`
  color: ${({ theme: e }) => e.colors.text};
  font-size: 16px;
`, hr = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, view: o, onViewChange: c, priceStep: l, onPriceStepChange: u, hidden: d, t: f = Jn, fundingRateText: p, fundingCountdownText: m, midPriceText: h, midSubText: g, priceStepOptions: _ = Yn }) => {
	let v = R(), [y, b] = F(!1), [x, S] = F(!1), C = P(null);
	Un(C, () => b(!1));
	let w = N(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = Rn(e, "ask", i, r, a), s = Rn(t, "bid", i, r, a), c = [...o].sort(([e], [t]) => Number(e) - Number(t)), u = [...s].sort(([e], [t]) => Number(t) - Number(e));
		return {
			asks: c.slice(0, vn).reverse(),
			bids: u.slice(0, vn)
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
	}, [w]), E = `color-mix(in srgb, ${v.colors.failure} 18%, transparent)`, D = (e, t, n) => /* @__PURE__ */ V(er, {
		$side: n,
		children: [
			/* @__PURE__ */ B(tr, { style: {
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
	return /* @__PURE__ */ V(Xn, {
		style: d ? { display: "none" } : void 0,
		children: [
			(p || m) && /* @__PURE__ */ V(Zn, { children: [f("Funding (8h) / Countdown"), /* @__PURE__ */ V("strong", { children: [
				p ?? "—",
				" / ",
				m ?? "—"
			] })] }),
			/* @__PURE__ */ V(Qn, { children: [/* @__PURE__ */ V("span", { children: [
				f("Price"),
				/* @__PURE__ */ B("br", {}),
				"(",
				r,
				")"
			] }), /* @__PURE__ */ V($n, { children: [
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
			o === "both" && /* @__PURE__ */ V(nr, { children: [/* @__PURE__ */ B(rr, { children: h ?? w.bids[0]?.[0] ?? "—" }), g && /* @__PURE__ */ B(ir, { children: g })] }),
			o !== "asks" && w.bids.map(([e, t]) => D(e, t, "bid")),
			/* @__PURE__ */ V(ar, { children: [/* @__PURE__ */ V(or, {
				type: "button",
				"aria-label": f("Choose view"),
				"aria-haspopup": "dialog",
				onClick: () => S(!0),
				children: [
					o === "both" && /* @__PURE__ */ B(Gn, {
						bidColor: A,
						askColor: k,
						listColor: j
					}),
					o === "asks" && /* @__PURE__ */ B(qn, {
						askColor: k,
						listColor: j
					}),
					o === "bids" && /* @__PURE__ */ B(Kn, {
						bidColor: A,
						listColor: j
					})
				]
			}), /* @__PURE__ */ V("div", {
				ref: C,
				style: { position: "relative" },
				children: [/* @__PURE__ */ V(sr, {
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
				}), y && /* @__PURE__ */ B(cr, {
					role: "listbox",
					children: _.map((e) => /* @__PURE__ */ B(lr, {
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
			x && typeof document < "u" && ee(/* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(ur, { onClick: () => S(!1) }), /* @__PURE__ */ V(dr, {
				role: "dialog",
				"aria-label": f("Choose view"),
				children: [/* @__PURE__ */ B(fr, {}), O.map((e) => /* @__PURE__ */ V(pr, {
					type: "button",
					$active: o === e.key,
					onClick: () => {
						c(e.key), S(!1);
					},
					children: [/* @__PURE__ */ B("span", { children: e.label }), o === e.key && /* @__PURE__ */ B(mr, { children: "✓" })]
				}, e.key))]
			})] }), document.body)
		]
	});
}, gr = (e) => re() ? /* @__PURE__ */ B(hr, { ...e }) : /* @__PURE__ */ B(_r, { ...e }), _r = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = Jn }) => {
	let g = R(), _ = d === "QUOTE" ? r : n, v = N(() => Hn(i, o), [i, o]);
	A(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = N(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = Rn(e, "ask", i, r, a), s = Rn(t, "bid", i, r, a), c = vn * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
		/* @__PURE__ */ V(bn, { children: [/* @__PURE__ */ V(xn, { children: [
			/* @__PURE__ */ B(Sn, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ B(Gn, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B(Sn, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ B(Kn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B(Sn, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ B(qn, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ V(Dn, { children: [/* @__PURE__ */ B(Wn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ B(Wn, {
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
		/* @__PURE__ */ V(On, { children: [
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
		/* @__PURE__ */ V(kn, { children: [
			s !== "bids" && /* @__PURE__ */ B(An, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - vn)).map((e) => /* @__PURE__ */ V(jn, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ B(Mn, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ B(Nn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(Nn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ V(Pn, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ B(Fn, { children: h("Spread") }),
					/* @__PURE__ */ B(In, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ B(Ln, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ B(An, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? vn * 2 : vn).map((e) => /* @__PURE__ */ V(jn, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ B(Mn, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ B(Nn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(Nn, {
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
}, vr = I(H)`
  flex: 1;
  min-height: 200px;
`, yr = I.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, br = I(w)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, xr = I.div`
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
`, Sr = I.div`
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
`, Cr = I(w)`
  gap: 6px;
  align-items: center;
`, wr = I.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, Tr = I.span`
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
`, Er = I.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, Dr = I.div`
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
`, Or = L`
  max-height: 360px;
  overflow-y: auto;
`, kr = I.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Or}
`, Ar = I.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Or}
`, jr = I.div`
  display: grid;
  grid-template-columns: 148px 156px minmax(min-content, 0.6fr) repeat(5, minmax(min-content, 1fr));
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Or}
`, Mr = I.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Nr = I.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, Pr = I.button`
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
`, Fr = (e) => e, Ir = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: a, closingSymbol: o, t: s }) => {
	let c = R(), l = t?.(e.symbol), u = e.positionAmt >= 0 ? "BUY" : "SELL", d = Number.isFinite(l) && Number.isFinite(e.entryPrice) ? (l - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), f = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: u,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, p = o === e.symbol;
	return /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ B(X, {
			as: "div",
			bold: !0,
			children: /* @__PURE__ */ V(w, {
				alignItems: "center",
				style: { gap: 6 },
				children: [/* @__PURE__ */ B("span", { children: e.symbol }), /* @__PURE__ */ V(Tr, { children: [e.leverage, "x"] })]
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
		/* @__PURE__ */ V(wr, { children: [/* @__PURE__ */ V(Er, {
			$kind: "tp",
			children: [
				s("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ V(Er, {
			$kind: "sl",
			children: [
				s("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ V(Cr, { children: [/* @__PURE__ */ B(i, {
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
}, Lr = (e) => {
	let t = re();
	return e.isMobile ?? t ? /* @__PURE__ */ B(ui, { ...e }) : /* @__PURE__ */ B(Rr, { ...e });
}, Rr = ({ tab: e, onTabChange: t, positions: n, openOrders: a, orderHistory: o = [], tradeHistory: s = [], transactionHistory: c = [], onShareTrade: l, useMarkPriceForSymbol: u, computeLiqPrice: d, onClosePosition: f, onEditTpSl: p, onCancelOrder: m, closingSymbol: h = null, cancellingOrderId: g = null, t: _ = Fr }) => {
	let v = R(), y = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ V(vr, { children: [/* @__PURE__ */ V(G, {
		activeIndex: y.indexOf(e),
		onItemClick: (e) => t(y[e]),
		children: [
			/* @__PURE__ */ V(W, { children: [
				_("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ V(W, { children: [
				_("Open Orders"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ V(W, { children: [
				_("Order History"),
				" (",
				o.length,
				")"
			] }),
			/* @__PURE__ */ V(W, { children: [
				_("Trade History"),
				" (",
				s.length,
				")"
			] }),
			/* @__PURE__ */ V(W, { children: [
				_("Transaction History"),
				" (",
				c.length,
				")"
			] })
		]
	}), /* @__PURE__ */ V(yr, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ B(br, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open positions")
		}) }) : /* @__PURE__ */ V(xr, { children: [
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			/* @__PURE__ */ B(Y, { children: _("Size") }),
			/* @__PURE__ */ B(Y, { children: _("Entry") }),
			/* @__PURE__ */ B(Y, { children: _("Mark") }),
			/* @__PURE__ */ B(Y, { children: _("Lev") }),
			/* @__PURE__ */ B(Y, { children: _("Liq") }),
			/* @__PURE__ */ B(Y, { children: _("uPnL") }),
			/* @__PURE__ */ B(Y, { children: _("TP/SL") }),
			/* @__PURE__ */ B(Y, {}),
			n.map((e) => /* @__PURE__ */ B(Sr, { children: /* @__PURE__ */ B(Ir, {
				p: e,
				useMarkPriceForSymbol: u,
				computeLiqPrice: d,
				onClose: f,
				onEditTpSl: p,
				closingSymbol: h,
				t: _
			}) }, e.id))
		] })),
		e === "orders" && (a.length === 0 ? /* @__PURE__ */ B(br, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open orders")
		}) }) : /* @__PURE__ */ V(Dr, { children: [
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
				return /* @__PURE__ */ V(Sr, { children: [
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
					/* @__PURE__ */ B(Cr, { children: /* @__PURE__ */ B(i, {
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
		e === "history" && (o.length === 0 ? /* @__PURE__ */ B(br, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No order history")
		}) }) : /* @__PURE__ */ V(jr, { children: [
			/* @__PURE__ */ B(Y, { children: _("Time") }),
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			/* @__PURE__ */ B(Y, { children: _("Side") }),
			/* @__PURE__ */ B(Y, { children: _("Type") }),
			/* @__PURE__ */ B(Y, { children: _("Price") }),
			/* @__PURE__ */ B(Y, { children: _("Size") }),
			/* @__PURE__ */ B(Y, { children: _("Filled") }),
			/* @__PURE__ */ B(Y, { children: _("Status") }),
			o.map((e) => /* @__PURE__ */ V(Sr, { children: [
				/* @__PURE__ */ B(X, {
					as: "div",
					children: /* @__PURE__ */ V(Mr, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
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
		e === "trades" && (s.length === 0 ? /* @__PURE__ */ B(br, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No trades yet")
		}) }) : /* @__PURE__ */ V(kr, { children: [
			/* @__PURE__ */ B(Y, { children: _("Time") }),
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			/* @__PURE__ */ B(Y, { children: _("Price") }),
			/* @__PURE__ */ B(Y, { children: _("Quantity") }),
			/* @__PURE__ */ B(Y, { children: _("Fee") }),
			/* @__PURE__ */ B(Y, { children: _("Realized profit") }),
			s.map((e) => {
				let t = e.side === "BUY" ? v.colors.success : v.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ V(Sr, { children: [
					/* @__PURE__ */ B(X, {
						as: "div",
						children: /* @__PURE__ */ V(Mr, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
					}),
					/* @__PURE__ */ B(X, {
						as: "div",
						children: /* @__PURE__ */ V(Nr, { children: [/* @__PURE__ */ B("span", { children: e.symbol }), /* @__PURE__ */ B("span", {
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
						children: /* @__PURE__ */ V(w, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ B("span", {
								style: { color: n ? v.colors.success : v.colors.failure },
								children: e.realizedProfit
							}), l && /* @__PURE__ */ B(Pr, {
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
		e === "transactions" && (c.length === 0 ? /* @__PURE__ */ B(br, { children: /* @__PURE__ */ B(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No transactions yet")
		}) }) : /* @__PURE__ */ V(Ar, { children: [
			/* @__PURE__ */ B(Y, { children: _("Time") }),
			/* @__PURE__ */ B(Y, { children: _("Type") }),
			/* @__PURE__ */ B(Y, { children: _("Amount") }),
			/* @__PURE__ */ B(Y, { children: _("Symbol") }),
			c.map((e) => /* @__PURE__ */ V(Sr, { children: [
				/* @__PURE__ */ B(X, {
					as: "div",
					children: /* @__PURE__ */ V(Mr, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
				}),
				/* @__PURE__ */ B(X, { children: e.type }),
				/* @__PURE__ */ B(X, { children: e.amount }),
				/* @__PURE__ */ B(X, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, zr = I.nav`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
`, Br = I.button`
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
`, Vr = I.span`
  flex: 1;
`, Hr = I.button`
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
`, Ur = I.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Wr = I.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Gr = I.button`
  background: transparent;
  border: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`, Kr = I.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`, qr = I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, Jr = I.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme: e }) => e.colors.card};
`, Yr = I.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  display: flex;
  flex-direction: column;
`, Xr = I.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  flex-shrink: 0;
`, Zr = I.span`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, Qr = I.button`
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
`, $r = I.nav`
  display: flex;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
  flex-shrink: 0;
`, ei = I.button`
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
`, ti = I.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0;
`, ni = I.div`
  text-align: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
  padding: 48px 0;
`, ri = I.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  font-size: 13px;
  gap: 12px;
`, ii = I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, ai = I.span`
  color: ${({ theme: e }) => e.colors.text};
  font-weight: 600;
`, oi = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 12px;
`, si = I.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
`, ci = [
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
], li = ({ open: e, onClose: t, tab: n, onTabChange: r, orderHistory: i, tradeHistory: a, transactionHistory: o, t: s }) => {
	let c = R();
	return !e || typeof document > "u" ? null : ee(/* @__PURE__ */ V(Yr, {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": s("History"),
		children: [
			/* @__PURE__ */ V(Xr, { children: [/* @__PURE__ */ B(Zr, { children: s("History") }), /* @__PURE__ */ B(Qr, {
				type: "button",
				"aria-label": s("Close"),
				onClick: t,
				children: /* @__PURE__ */ B(v, {
					width: "20px",
					"aria-hidden": "true"
				})
			})] }),
			/* @__PURE__ */ B($r, {
				role: "tablist",
				children: ci.map((e) => /* @__PURE__ */ B(ei, {
					type: "button",
					role: "tab",
					"aria-selected": n === e.key,
					$active: n === e.key,
					onClick: () => r(e.key),
					children: s(e.label)
				}, e.key))
			}),
			/* @__PURE__ */ V(ti, { children: [
				n === "orders" && (i.length === 0 ? /* @__PURE__ */ B(ni, { children: s("No order history yet") }) : i.map((e) => /* @__PURE__ */ V(ri, { children: [/* @__PURE__ */ V(ii, { children: [
					/* @__PURE__ */ V(ai, { children: [
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
					/* @__PURE__ */ V(oi, { children: [
						e.date,
						" ",
						e.time
					] }),
					/* @__PURE__ */ V(oi, { children: [
						e.type,
						" · ",
						e.price,
						" · ",
						e.executedQty,
						"/",
						e.origQty
					] })
				] }), /* @__PURE__ */ B(si, { children: /* @__PURE__ */ B("span", {
					style: {
						color: c.colors.textSubtle,
						fontSize: 12
					},
					children: e.status
				}) })] }, e.id))),
				n === "trades" && (a.length === 0 ? /* @__PURE__ */ B(ni, { children: s("No trade history yet") }) : a.map((e) => {
					let t = e.realizedProfit.startsWith("+");
					return /* @__PURE__ */ V(ri, { children: [/* @__PURE__ */ V(ii, { children: [
						/* @__PURE__ */ V(ai, { children: [
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
						/* @__PURE__ */ V(oi, { children: [
							e.date,
							" ",
							e.time
						] }),
						/* @__PURE__ */ V(oi, { children: [
							e.price,
							" · ",
							e.quantity,
							" · ",
							s("fee"),
							" ",
							e.fee
						] })
					] }), /* @__PURE__ */ B(si, { children: /* @__PURE__ */ B("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.realizedProfit
					}) })] }, e.id);
				})),
				n === "tx" && (o.length === 0 ? /* @__PURE__ */ B(ni, { children: s("No transactions yet") }) : o.map((e) => {
					let t = e.amount.startsWith("+");
					return /* @__PURE__ */ V(ri, { children: [/* @__PURE__ */ V(ii, { children: [/* @__PURE__ */ B(ai, { children: e.type }), /* @__PURE__ */ V(oi, { children: [
						e.date,
						" ",
						e.time
					] })] }), /* @__PURE__ */ V(si, { children: [/* @__PURE__ */ B("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.amount
					}), /* @__PURE__ */ B(oi, { children: e.symbol })] })] }, e.id);
				}))
			] })
		]
	}), document.body);
}, ui = ({ tab: e, onTabChange: t, positions: n, openOrders: r, orderHistory: i = [], tradeHistory: a = [], transactionHistory: c = [], positionsCount: l, hideOtherSymbols: u = !1, onHideOtherSymbolsChange: d, instrumentFilterLabel: f, onInstrumentFilterClick: p, historyOpen: m = !1, onHistoryToggle: h, historyTab: g = "orders", onHistoryTabChange: _, t: v = Fr }) => {
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
	return /* @__PURE__ */ V(Jr, { children: [
		/* @__PURE__ */ V(zr, {
			role: "tablist",
			children: [
				y.map((t) => /* @__PURE__ */ V(Br, {
					type: "button",
					role: "tab",
					"aria-selected": t.key === e,
					$active: t.key === e,
					onClick: () => x(t.key),
					children: [t.label, typeof t.count == "number" && t.count > 0 ? ` (${t.count})` : ""]
				}, t.key)),
				/* @__PURE__ */ B(Vr, {}),
				/* @__PURE__ */ B(Hr, {
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
		/* @__PURE__ */ V(Ur, { children: [
			/* @__PURE__ */ V(Gr, {
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
			/* @__PURE__ */ B(Wr, {}),
			/* @__PURE__ */ V(Kr, { children: [/* @__PURE__ */ B("input", {
				type: "checkbox",
				checked: u,
				onChange: (e) => d?.(e.target.checked)
			}), /* @__PURE__ */ B("span", { children: v("Hide other symbols") })] })
		] }),
		/* @__PURE__ */ B(qr, { children: b.emptyText }),
		/* @__PURE__ */ B(li, {
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
}, di = I(w)`
  flex-direction: column;
  gap: 8px;
`, fi = I(w)`
  gap: 8px;
`, pi = I.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, mi = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, hi = I(_)`
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
`, gi = I(w)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, _i = (e) => e, vi = ({ isOpen: e, symbol: t, positionSide: n, qty: a, entryPrice: o, markPrice: s, onConfirm: c, onClose: l, t: u = _i }) => {
	let d = R(), p = n === "LONG" ? 1 : -1, [m, g] = F(""), [_, v] = F(""), [y, x] = F(""), [S, C] = F(""), [T, E] = F(!1);
	A(() => {
		e || (g(""), v(""), x(""), C(""));
	}, [e]);
	let D = (e) => a > 0 ? o + p * e / a : NaN, O = (e) => a > 0 ? p * (e - o) * a : NaN, k = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", j = (e) => {
		g(e);
		let t = Number(e);
		v(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, M = (e) => {
		v(e);
		let t = Number(e);
		g(Number.isFinite(t) && e !== "" ? k(D(t), 2) : "");
	}, P = (e) => {
		x(e);
		let t = Number(e);
		C(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, I = (e) => {
		C(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? x(k(D(t), 2)) : C("");
	}, L = N(() => {
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
	]), z = !T && (m !== "" || y !== "") && !L;
	return /* @__PURE__ */ B(b, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(h, {
			title: u("Set TP / SL"),
			onDismiss: l,
			children: /* @__PURE__ */ V(w, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(gi, { children: [/* @__PURE__ */ B(r, {
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
					/* @__PURE__ */ V(gi, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Entry")
					}), /* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? o.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ V(gi, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Mark")
					}), /* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(s) ? s.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ B(pi, {}),
					/* @__PURE__ */ V(di, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.success,
						children: u("Take Profit")
					}), /* @__PURE__ */ V(fi, { children: [/* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(mi, { children: u("Trigger Price") }), /* @__PURE__ */ B(hi, {
							value: m,
							onChange: (e) => j(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(mi, { children: u("PnL (USDT)") }), /* @__PURE__ */ B(hi, {
							value: _,
							onChange: (e) => M(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ V(di, { children: [/* @__PURE__ */ B(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.failure,
						children: u("Stop Loss")
					}), /* @__PURE__ */ V(fi, { children: [/* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(mi, { children: u("Trigger Price") }), /* @__PURE__ */ B(hi, {
							value: y,
							onChange: (e) => P(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(mi, { children: u("PnL (USDT)") }), /* @__PURE__ */ B(hi, {
							value: S,
							onChange: (e) => I(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					L && /* @__PURE__ */ B(r, {
						fontSize: "14px",
						color: "failure",
						children: L
					}),
					/* @__PURE__ */ B(i, {
						onClick: async () => {
							if (z) {
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
						disabled: !z,
						isLoading: T,
						scale: "md",
						children: u("Confirm")
					})
				]
			})
		})
	});
}, yi = [
	"1m",
	"5m",
	"15m",
	"1h",
	"4h",
	"1d"
], bi = I(H)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, xi = (e) => typeof e == "number" ? `${e}px` : e, Si = I.div`
  border-bottom: 1px solid var(--pcs-colors-card-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, Ci = I.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`, wi = I.button`
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
`, Ti = I.div`
  position: relative;
  height: ${({ $minHeight: e }) => e}px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent) 0%,
    transparent 100%
  );
`, Ei = I.span`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(140px 60px at 18% 70%, color-mix(in srgb, var(--pcs-colors-primary) 18%, transparent), transparent 70%),
    radial-gradient(120px 50px at 42% 38%, color-mix(in srgb, var(--pcs-colors-success) 14%, transparent), transparent 70%),
    radial-gradient(160px 70px at 72% 55%, color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent), transparent 70%);
  border-bottom: 2px solid color-mix(in srgb, var(--pcs-colors-primary) 50%, transparent);
`, Di = I.span`
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
`, Oi = ({ children: e, timeframes: t = yi, activeTimeframe: n, onTimeframeChange: r, priceLabel: i, mobileMinHeight: a = 220 }) => {
	let o = E.Children.count(e) > 0;
	return /* @__PURE__ */ V(Si, {
		"aria-label": "Price chart",
		children: [/* @__PURE__ */ B(Ci, {
			role: "tablist",
			children: t.map((e) => {
				let t = e === n;
				return /* @__PURE__ */ B(wi, {
					type: "button",
					role: "tab",
					"aria-selected": t,
					$active: t,
					onClick: () => r?.(e),
					children: e
				}, e);
			})
		}), /* @__PURE__ */ V(Ti, {
			$minHeight: a,
			children: [o ? e : /* @__PURE__ */ B(Ei, {}), i !== void 0 && /* @__PURE__ */ B(Di, { children: i })]
		})]
	});
}, ki = (e) => {
	if (re()) return /* @__PURE__ */ B(Oi, { ...e });
	let { children: t, minHeight: n = "420px" } = e;
	return /* @__PURE__ */ B(bi, {
		$minHeight: xi(n),
		children: t
	});
}, Ai = I(H)`
  height: 100%;
`, ji = I.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, Mi = I.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, Ni = (e) => e, Pi = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = Ni }) => /* @__PURE__ */ V(Ai, { children: [/* @__PURE__ */ V(G, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ B(W, { children: i("Order Book") }), /* @__PURE__ */ B(W, { children: i("Trades") })]
}), /* @__PURE__ */ V(ji, { children: [/* @__PURE__ */ B(Mi, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ B(Mi, {
	$hidden: e !== "trades",
	children: r
})] })] }), Fi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='32'%20fill='none'%20viewBox='0%200%2015%2032'%3e%3cpath%20fill='%230098A1'%20d='M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z'/%3e%3cpath%20fill='%2353DEE9'%20d='M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z'/%3e%3c/svg%3e", Ii = "data:image/svg+xml,%3csvg%20width='24'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='19'%20width='17'%20height='11'%20fill='%231FC7D4'/%3e%3cpath%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'%20fill='%231FC7D4'/%3e%3cpath%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'%20fill='%231FC7D4'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20fill='url(%23paint0_linear_bunnyhead_main)'/%3e%3c/g%3e%3cg%20transform='translate(2)'%3e%3cpath%20d='M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z'%20fill='%23452A7A'/%3e%3cpath%20d='M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z'%20fill='%23452A7A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_main'%20x1='14'%20y1='1'%20x2='14'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Li = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='32'%20fill='none'%20viewBox='0%200%2028%2032'%3e%3crect%20width='17'%20height='11'%20x='1'%20y='19'%20fill='%231FC7D4'/%3e%3cpath%20fill='%231FC7D4'%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill='url(%23paint0_linear_bunnyhead_max)'%20fill-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787'/%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20width='28'%20height='28'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_max'%20x1='14'%20x2='14'%20y1='1'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/widgets/BunnySlider.tsx
function Ri({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = P(null), [u, d] = F(0);
	M(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999, _ = g ? Li : Ii;
	return /* @__PURE__ */ V(zi, {
		ref: l,
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ B(Bi, { className: "bs-track" }),
			/* @__PURE__ */ B(Hi, {
				className: "bs-back",
				style: { backgroundImage: `url("${Fi}")` }
			}),
			/* @__PURE__ */ B(Vi, {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ B(Ui, {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: {
					left: m,
					backgroundImage: `url("${_}")`
				}
			}),
			/* @__PURE__ */ B(Wi, {
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
			s && /* @__PURE__ */ B(Gi, {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
var zi = I.div`
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
`, Bi = I.span`
  position: absolute;
  left: 14px;
  right: 0;
  top: 18px;
  height: 2px;
  background: ${({ theme: e }) => e?.colors?.inputSecondary ?? "var(--pcs-colors-input-secondary, #D7CAEC)"};
  pointer-events: none;
`, Vi = I.span`
  position: absolute;
  left: 14px;
  top: 18px;
  height: 10px;
  background: ${({ theme: e }) => e?.colors?.primary ?? "var(--pcs-colors-primary, #1FC7D4)"};
  pointer-events: none;
  transition: width 60ms linear;
`, Hi = I.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 32px;
  pointer-events: none;
  background-size: 15px 32px;
  background-repeat: no-repeat;
`, Ui = I.span`
  position: absolute;
  top: 0;
  width: 24px;
  height: 32px;
  pointer-events: none;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  transition: left 60ms linear, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
`, Wi = I.input`
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
`, Gi = I.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme: e }) => e?.colors?.textSubtle ?? "var(--pcs-colors-text-subtle)"};
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
`, Ki = I(H)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, qi = I(w)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ji = I.button`
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
`, Yi = I(w)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, Xi = I.button`
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
`, Zi = I.button`
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
`, Qi = I(w)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, $i = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, ea = I(w)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, ta = I.div`
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
`, na = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, ra = I.input`
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
`, ia = I(i).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, aa = I.div`
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
`, oa = I.input`
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
`, sa = I.button`
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
`, ca = I.div`
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
`, la = I.button`
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
`, ua = I.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, da = I(_)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, fa = I.div`
  padding: 4px 0;
`, pa = I(w)`
  gap: 8px;
`, ma = I.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, ha = I.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, ga = ({ value: e, onChange: t }) => /* @__PURE__ */ V(ma, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ B(ha, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ B(ha, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), _a = I(i)`
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
`, va = I.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, ya = I(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, ba = I(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, xa = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Sa = I(w)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, Ca = I(w)`
  gap: 6px;
`, wa = I.button`
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
`, Ta = I.button`
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
`, Ea = I.span`
  text-align: center;
`, Da = I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
`, Oa = I.input`
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
`, ka = I.button`
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
`, Aa = I(w)`
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
`, ja = I(w)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.text};
`, Ma = I.div`
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
`, Na = I(w)`
  justify-content: space-between;
  align-items: center;
`, Pa = I.button`
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
`, Fa = I.div`
  position: fixed;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`, Ia = I.button`
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
`, La = [
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
], Ra = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: i, typeKey: a, onTypeKeyChange: o, availableBalanceText: c, preview: d, feeText: m, sizePercent: h, onSizePercentChange: g, cta: _, canSubmit: v, isSubmitting: b = !1, marginSubmitting: x = !1, authReady: S = !0, hasAddress: C = !0, errorSlot: w, onSubmit: T, onLeverageClick: E, onMarginModeToggle: D, onDepositClick: O, t: k = xa }) => {
	let j = n.sizeUnit === "QUOTE" ? t : e, M = a === "stop-limit" || a === "stop-market", N = a === "limit" || a === "stop-limit", I = M, L = () => i({
		...n,
		sizeUnit: n.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), R = P(null), z = P(null), [H, te] = F(!1), [U, W] = F(null);
	A(() => {
		if (!H || !R.current) return;
		let e = R.current.getBoundingClientRect();
		W({
			top: e.bottom + 4,
			left: e.left,
			width: e.width
		});
	}, [H]), A(() => {
		if (!H) return;
		let e = (e) => {
			let t = e.target;
			R.current && !R.current.contains(t) && z.current && !z.current.contains(t) && te(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [H]);
	let G = La.find((e) => e.key === a)?.label ?? "Market", ne = d.liq, re = d.cost;
	return /* @__PURE__ */ V(Sa, { children: [
		/* @__PURE__ */ V(Ca, { children: [/* @__PURE__ */ B(wa, {
			disabled: x,
			onClick: D,
			children: n.marginMode === "CROSS" ? k("Cross") : k("Isolated")
		}), /* @__PURE__ */ B(wa, {
			onClick: E,
			children: `${n.leverage}x`
		})] }),
		/* @__PURE__ */ V(Ta, {
			ref: R,
			type: "button",
			"aria-haspopup": "listbox",
			"aria-expanded": H,
			onClick: () => te((e) => !e),
			children: [
				/* @__PURE__ */ B(y, {
					width: "14px",
					color: "textSubtle"
				}),
				/* @__PURE__ */ B(Ea, { children: k(G) }),
				/* @__PURE__ */ B(s, {
					width: "14px",
					color: "textSubtle"
				})
			]
		}),
		H && U && typeof document < "u" && ee(/* @__PURE__ */ B(Fa, {
			ref: z,
			role: "listbox",
			style: {
				top: U.top,
				left: U.left,
				width: U.width
			},
			children: La.map((e) => /* @__PURE__ */ B(Ia, {
				role: "option",
				"aria-selected": e.key === a,
				$active: e.key === a,
				onClick: () => {
					o(e.key), te(!1);
				},
				children: k(e.label)
			}, e.key))
		}), document.body),
		I && /* @__PURE__ */ V(Da, { children: [
			/* @__PURE__ */ B(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: k("Stop")
			}),
			/* @__PURE__ */ B(Oa, {
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
			/* @__PURE__ */ V(ka, {
				type: "button",
				onClick: () => i({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				children: [n.stopPriceSource === "MARK" ? k("Mark") : k("Last"), /* @__PURE__ */ B(s, { width: "12px" })]
			})
		] }),
		N && /* @__PURE__ */ V(Da, { children: [
			/* @__PURE__ */ B(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: k("Price")
			}),
			/* @__PURE__ */ B(Oa, {
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
		/* @__PURE__ */ V(Da, { children: [/* @__PURE__ */ B(Oa, {
			value: n.quantity,
			onChange: (e) => i({
				...n,
				quantity: e.target.value
			}),
			placeholder: k("Size"),
			inputMode: "decimal"
		}), /* @__PURE__ */ V(ka, {
			type: "button",
			onClick: L,
			children: [j, /* @__PURE__ */ B(s, { width: "12px" })]
		})] }),
		/* @__PURE__ */ B(f, { children: /* @__PURE__ */ B(Ri, {
			min: 0,
			max: 100,
			step: 1,
			value: h,
			onValueChanged: g
		}) }),
		/* @__PURE__ */ V(Aa, { children: [
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
		/* @__PURE__ */ V(ja, { children: [/* @__PURE__ */ B(l, {
			scale: "sm",
			checked: n.tpSlEnabled,
			onChange: (e) => i({
				...n,
				tpSlEnabled: e.target.checked
			})
		}), /* @__PURE__ */ B("span", { children: k("TP/SL") })] }),
		/* @__PURE__ */ V(ja, { children: [/* @__PURE__ */ B(l, {
			scale: "sm",
			checked: n.reduceOnly,
			onChange: (e) => i({
				...n,
				reduceOnly: e.target.checked
			})
		}), /* @__PURE__ */ B("span", { children: k("Reduce-Only") })] }),
		w,
		/* @__PURE__ */ V(Ma, {
			$tone: "up",
			children: [
				/* @__PURE__ */ V(Na, { children: [/* @__PURE__ */ B("span", { children: k("Est. liq. price") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: ne
				})] }),
				/* @__PURE__ */ V(Na, { children: [/* @__PURE__ */ B("span", { children: k("Margin") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: re
				})] }),
				/* @__PURE__ */ V(Na, { children: [/* @__PURE__ */ B("span", { children: k("Max") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ B(Pa, {
			type: "button",
			$side: "BUY",
			disabled: !v || b,
			onClick: () => T({ sideOverride: "BUY" }),
			children: k("Buy/Long")
		}),
		/* @__PURE__ */ V(Ma, {
			$tone: "down",
			children: [
				/* @__PURE__ */ V(Na, { children: [/* @__PURE__ */ B("span", { children: k("Est. liq. price") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: ne
				})] }),
				/* @__PURE__ */ V(Na, { children: [/* @__PURE__ */ B("span", { children: k("Margin") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: re
				})] }),
				/* @__PURE__ */ V(Na, { children: [/* @__PURE__ */ B("span", { children: k("Max") }), /* @__PURE__ */ B("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ B(Pa, {
			type: "button",
			$side: "SELL",
			disabled: !v || b,
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
}, za = (e) => {
	if (re()) return /* @__PURE__ */ B(Ra, { ...e });
	let { baseAsset: t, quoteAsset: n, draft: i, onDraftChange: a, typeKey: o, onTypeKeyChange: s, availableBalanceText: c, preview: m, feeText: h, sizePercent: g, onSizePercentChange: _, cta: v, canSubmit: y, isSubmitting: b = !1, marginSubmitting: x = !1, authReady: S = !0, hasAddress: C = !0, errorSlot: T, onSubmit: E, onLeverageClick: D, onMarginModeToggle: O, onDepositClick: k, t: j = xa } = e, M = i.sizeUnit === "QUOTE" ? n : t, N = (e) => a({
		...i,
		side: e
	}), I = () => a({
		...i,
		sizeUnit: i.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), L = () => a({
		...i,
		tpSlEnabled: !i.tpSlEnabled
	}), R = o === "stop-limit" || o === "stop-market", H = o === "limit" || o === "stop-limit", te = R, U = P(null), W = P(null), [G, ne] = F(!1), [ie, ae] = F({
		top: 0,
		left: 0
	});
	A(() => {
		if (!G || !U.current || !W.current) return;
		let e = U.current.getBoundingClientRect(), t = W.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		ae({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [G]), A(() => {
		if (!G) return;
		let e = (e) => {
			let t = e.target;
			U.current && !U.current.contains(t) && W.current && !W.current.contains(t) && ne(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [G]);
	let oe = R, se = o === "stop-market" ? `${j("Stop Market")} ▾` : `${j("Stop Limit")} ▾`, ce = () => {
		ne((e) => !e);
	}, le = (e) => {
		s(e), ne(!1);
	};
	return /* @__PURE__ */ V(Ki, { children: [
		/* @__PURE__ */ V(qi, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ B(Ji, {
				$active: o === e,
				onClick: () => s(e),
				children: j(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ B(Ji, {
				ref: U,
				$active: oe,
				onClick: ce,
				"aria-haspopup": "menu",
				"aria-expanded": G,
				children: se
			}),
			G && typeof document < "u" && ee(/* @__PURE__ */ V(ca, {
				ref: W,
				style: {
					top: ie.top,
					left: ie.left
				},
				role: "menu",
				children: [/* @__PURE__ */ B(la, {
					$active: o === "stop-limit",
					role: "menuitem",
					onClick: () => le("stop-limit"),
					children: j("Stop Limit")
				}), /* @__PURE__ */ B(la, {
					$active: o === "stop-market",
					role: "menuitem",
					onClick: () => le("stop-market"),
					children: j("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ V(Yi, { children: [/* @__PURE__ */ B(Xi, {
			$active: i.side === "BUY",
			$side: "BUY",
			onClick: () => N("BUY"),
			children: j("Buy")
		}), /* @__PURE__ */ B(Xi, {
			$active: i.side === "SELL",
			$side: "SELL",
			onClick: () => N("SELL"),
			children: j("Sell")
		})] }),
		/* @__PURE__ */ V(w, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(Zi, {
				disabled: x,
				onClick: O,
				title: j("Margin mode"),
				children: i.marginMode === "CROSS" ? j("Cross") : j("Isolated")
			}), /* @__PURE__ */ V(Zi, {
				onClick: D,
				title: j("Leverage"),
				children: [i.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ V(Qi, { children: [/* @__PURE__ */ B($i, { children: j("Avbl") }), /* @__PURE__ */ V(ea, { children: [/* @__PURE__ */ V(r, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				c,
				" ",
				n
			]
		}), /* @__PURE__ */ B(p, {
			variant: "text",
			scale: "xs",
			onClick: k,
			title: j("Deposit"),
			"aria-label": j("Deposit"),
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
		te && /* @__PURE__ */ V(aa, { children: [
			/* @__PURE__ */ B(na, { children: j("Stop") }),
			/* @__PURE__ */ B(oa, {
				value: i.stopPrice,
				onChange: (e) => a({
					...i,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": j("Stop price")
			}),
			/* @__PURE__ */ V(sa, {
				type: "button",
				onClick: () => a({
					...i,
					stopPriceSource: i.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: j("Trigger source"),
				children: [i.stopPriceSource === "MARK" ? j("Mark") : j("Last"), " ▾"]
			})
		] }),
		H && /* @__PURE__ */ V(aa, { children: [
			/* @__PURE__ */ B(na, { children: j("Price") }),
			/* @__PURE__ */ B(oa, {
				value: i.price,
				onChange: (e) => a({
					...i,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": j("Limit price")
			}),
			/* @__PURE__ */ B(ia, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: n
			})
		] }),
		o === "stop-limit" && /* @__PURE__ */ V(aa, { children: [
			/* @__PURE__ */ B(na, { children: j("TIF") }),
			/* @__PURE__ */ B(w, { flex: 1 }),
			/* @__PURE__ */ V(ua, {
				value: i.timeInForce === "GTX" ? "GTC" : i.timeInForce,
				onChange: (e) => a({
					...i,
					timeInForce: e.target.value
				}),
				"aria-label": j("Time in force"),
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
		/* @__PURE__ */ V(ta, { children: [
			/* @__PURE__ */ B(na, { children: j("Size") }),
			/* @__PURE__ */ B(ra, {
				value: i.quantity,
				onChange: (e) => a({
					...i,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ V(ia, {
				onClick: I,
				title: j("Toggle unit"),
				children: [M, " ▾"]
			})
		] }),
		/* @__PURE__ */ B(fa, { children: /* @__PURE__ */ B(d, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: g,
			onValueChanged: _,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ V(w, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(l, {
				scale: "sm",
				checked: i.reduceOnly,
				onChange: (e) => a({
					...i,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ B(r, {
				fontSize: "14px",
				children: j("Reduce Only")
			})]
		}),
		/* @__PURE__ */ V(w, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(l, {
				scale: "sm",
				checked: i.tpSlEnabled,
				onChange: L
			}), /* @__PURE__ */ B(r, {
				fontSize: "14px",
				children: j("Take Profit / Stop Loss")
			})]
		}),
		i.tpSlEnabled && /* @__PURE__ */ V(w, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ V(f, { children: [/* @__PURE__ */ V(w, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(r, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: j("Take Profit")
				}), /* @__PURE__ */ B(ga, {
					value: i.takeProfitSource ?? "LAST",
					onChange: (e) => a({
						...i,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ V(pa, { children: [/* @__PURE__ */ V(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: j("Trigger Price")
				}), /* @__PURE__ */ B(da, {
					value: i.takeProfitPrice,
					onChange: (e) => a({
						...i,
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
					children: j("PnL (USDT)")
				}), /* @__PURE__ */ B(da, {
					value: i.takeProfitPnl ?? "",
					onChange: (e) => a({
						...i,
						takeProfitPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] }), /* @__PURE__ */ V(f, { children: [/* @__PURE__ */ V(w, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(r, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: j("Stop Loss")
				}), /* @__PURE__ */ B(ga, {
					value: i.stopLossSource ?? "LAST",
					onChange: (e) => a({
						...i,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ V(pa, { children: [/* @__PURE__ */ V(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: j("Trigger Price")
				}), /* @__PURE__ */ B(da, {
					value: i.stopLossPrice,
					onChange: (e) => a({
						...i,
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
					children: j("PnL (USDT)")
				}), /* @__PURE__ */ B(da, {
					value: i.stopLossPnl ?? "",
					onChange: (e) => a({
						...i,
						stopLossPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] })]
		}),
		T,
		S ? /* @__PURE__ */ B(_a, {
			onClick: () => E(),
			disabled: !y,
			isLoading: b,
			scale: "md",
			$side: i.side,
			children: v
		}) : /* @__PURE__ */ B(_a, {
			$side: i.side,
			onClick: () => E(),
			scale: "md",
			disabled: !C,
			children: v
		}),
		/* @__PURE__ */ V(va, { children: [
			/* @__PURE__ */ B(ya, { children: j("Cost") }),
			/* @__PURE__ */ B(ba, { children: m.cost }),
			!R && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(ya, { children: j("Est. Liq. Price") }), /* @__PURE__ */ B(ba, { children: m.liq })] }),
			/* @__PURE__ */ B(ya, { children: j("Fees") }),
			/* @__PURE__ */ B(ba, { children: h })
		] })
	] });
}, Ba = I(w)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Va = I.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, Ha = I(w)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, Ua = I(r).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Wa = I(w)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, Ga = I(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ka = I(w)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, qa = I.button`
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
`, Ja = I(w)`
  flex-direction: column;
`, Ya = I(w)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, Xa = I.input`
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
`, Za = I(w)`
  gap: 6px;
  margin-top: 4px;
`, Qa = I.button`
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
`, $a = I.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Z = I(w)`
  justify-content: space-between;
  align-items: center;
`, eo = I(w)`
  flex-direction: column;
  gap: 8px;
`, to = I(w)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, no = I.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, ro = I(r).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, io = I.div`
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
`, ao = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, oo = [
	25,
	50,
	75
], so = ({ isOpen: e, onClose: t, step: n, evmAddress: a, solanaAddress: o, isLoadingAssets: s = !1, assets: c, selectedAssetId: l, onSelectAsset: u, otherSupportedSymbols: d = [], selectedAsset: f, amount: p, onAmountChange: m, sourceAddress: _, errorSlot: v, onPercentClick: y, submitState: x, canContinue: S, onContinue: C, onBack: T, receipt: E, checkingElapsedMs: D = 0, onDepositAgain: O, onRetry: k, t: A = ao, renderTokenIcon: j, renderSpinner: M }) => {
	let N = A(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund your Account"), P = (() => {
		switch (x) {
			case "switching-chain": return A("Switching chain...");
			case "approving": return A("Approve in wallet...");
			case "approve-confirming": return A("Confirming approval...");
			case "depositing": return A("Confirm in wallet...");
			case "deposit-confirming": return A("Confirming deposit...");
			case "done": return A("Done");
			case "failed": return A("Retry");
			default: return A("Continue");
		}
	})(), F = (e, t = 24) => j ? j(e, t) : /* @__PURE__ */ B(io, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), I = (e) => M ? M(e) : /* @__PURE__ */ B("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ B("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), L = x === "switching-chain" || x === "approving" || x === "approve-confirming" || x === "depositing" || x === "deposit-confirming";
	return /* @__PURE__ */ B(b, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(h, {
			title: N,
			onDismiss: t,
			children: /* @__PURE__ */ V(Ba, { children: [
				n === "amount" && /* @__PURE__ */ B(w, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ B(i, {
						scale: "sm",
						variant: "text",
						onClick: T,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ B(g, { width: "18px" }),
						children: A("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(Va, { children: [
						a && /* @__PURE__ */ V(Ha, { children: [
							/* @__PURE__ */ B("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ B(Ua, { children: a }),
							/* @__PURE__ */ B(r, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						o && /* @__PURE__ */ V(Ha, {
							style: { borderTop: a ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ B("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ B(Ua, { children: o }),
								/* @__PURE__ */ B(r, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ V(Wa, { children: [/* @__PURE__ */ V("div", { children: [/* @__PURE__ */ B(Ga, {
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
					!s && c.length === 0 && /* @__PURE__ */ V(w, {
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
					c.length > 0 && /* @__PURE__ */ B(Ka, { children: c.map((e) => /* @__PURE__ */ B(qa, {
						$selected: l === e.id,
						onClick: () => u(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ V(w, {
							alignItems: "center",
							style: { gap: 12 },
							children: [F(e, 32), /* @__PURE__ */ V(Ja, { children: [/* @__PURE__ */ B(r, {
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
					/* @__PURE__ */ V(Ya, { children: [/* @__PURE__ */ V(w, {
						alignItems: "center",
						style: { gap: 12 },
						children: [F(f, 40), /* @__PURE__ */ V(w, {
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
					}), /* @__PURE__ */ V(w, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ B(Xa, {
							value: p,
							onChange: (e) => m(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ V(Za, { children: [oo.map((e) => /* @__PURE__ */ V(Qa, {
							onClick: () => y(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ B(Qa, {
							onClick: () => y(100),
							children: A("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ V($a, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Ga, {
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							children: _ ?? "—"
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Ga, {
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Ga, {
							color: "textSubtle",
							children: A("Token")
						}), /* @__PURE__ */ V(w, {
							alignItems: "center",
							style: { gap: 6 },
							children: [F(f, 16), /* @__PURE__ */ B(r, {
								fontSize: "14px",
								bold: !0,
								children: f.symbol
							})]
						})] })
					] }),
					v,
					/* @__PURE__ */ B(i, {
						onClick: C,
						disabled: !S || L,
						isLoading: L,
						scale: "md",
						children: P
					})
				] }),
				n === "checking" && E && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(w, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [I(72), /* @__PURE__ */ B(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ V(eo, { children: [
						/* @__PURE__ */ V(to, {
							$state: "done",
							children: [/* @__PURE__ */ B(no, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(r, {
								fontSize: "13px",
								children: A("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ V(to, {
							$state: "done",
							children: [/* @__PURE__ */ B(no, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(r, {
								fontSize: "13px",
								children: A("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ V(to, {
							$state: "active",
							children: [/* @__PURE__ */ B(no, {
								$state: "active",
								children: I(16)
							}), /* @__PURE__ */ B(r, {
								fontSize: "13px",
								children: A("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ V($a, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Ga, {
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
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Ga, {
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
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(Ga, {
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
					/* @__PURE__ */ V(ro, { children: [
						E.amount,
						" ",
						E.assetSymbol
					] }),
					/* @__PURE__ */ V($a, { children: [
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
					/* @__PURE__ */ B($a, { children: /* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(r, {
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
					/* @__PURE__ */ V(w, {
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
					/* @__PURE__ */ V(w, {
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
					/* @__PURE__ */ V(w, {
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
}, co = (e) => e, lo = ({ isOpen: e, onClose: a, phase: o, eoaAddress: s, agentAddress: c, isProvisioning: l = !1, linkButtonLabel: u, isLinkDisabled: d = !1, isLinkPending: p = !1, onLinkWallet: m, approveButtonLabel: g, isApproveDisabled: _ = !1, isApprovePending: v = !1, onApprove: y, errorSlot: x, t: S = co }) => {
	let C = c ?? S(l ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ B(b, {
		isOpen: e,
		onDismiss: a,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(h, {
			title: S("Enable Perps Trading"),
			onDismiss: a,
			children: /* @__PURE__ */ V(w, {
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
					x,
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
						children: g
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
}, uo = [
	50,
	250,
	500,
	1001
], fo = 1001, po = 50 / 1001, mo = 250 / 1001, ho = (e, t) => e <= t * po ? "safe" : e <= t * mo ? "warn" : "danger", go = 500 / 1001, _o = (e, t) => e > t * go, vo = (e, t) => e > t * mo, yo = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "High leverage" : "Danger zone", bo = (e) => e === "safe" ? "🌿" : e === "warn" ? "⚡️" : "🔥", xo = (e) => e === "safe" ? "A good place to start. You'll feel the market without getting rekt." : e === "warn" ? "Liquidation triggers around a 1% move." : "1% move against you liquidates. Only risk what you can afford to lose.", So = () => /* @__PURE__ */ B("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M10.9629 8.57864L6.79069 12.7509C6.58302 12.9586 6.33844 13.0634 6.05694 13.0654C5.77544 13.0674 5.5251 12.9628 5.30594 12.7516C5.1026 12.5403 5.00194 12.2939 5.00394 12.0124C5.00594 11.7309 5.1111 11.4861 5.31944 11.2781L11.2714 5.33339C11.3736 5.23139 11.4873 5.15456 11.6124 5.10289C11.7376 5.05122 11.8683 5.02539 12.0044 5.02539C12.1406 5.02539 12.2713 5.05122 12.3964 5.10289C12.5216 5.15456 12.6319 5.22797 12.7272 5.32314L18.6829 11.2791C18.8983 11.4945 19.0059 11.7367 19.0059 12.0059C19.0059 12.2751 18.9023 12.5153 18.6949 12.7266C18.4758 12.9378 18.225 13.0434 17.9427 13.0434C17.6604 13.0434 17.4164 12.9378 17.2107 12.7266L13.0379 8.57864V18.3664C13.0379 18.6571 12.9383 18.9025 12.7389 19.1026C12.5394 19.303 12.295 19.4031 12.0057 19.4031C11.7164 19.4031 11.4702 19.303 11.2672 19.1026C11.0644 18.9025 10.9629 18.6571 10.9629 18.3664V8.57864Z",
		fill: "currentColor"
	})
}), Co = () => /* @__PURE__ */ B("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M10.9997 5V16.17L6.11973 11.29C5.72973 10.9 5.08973 10.9 4.69973 11.29C4.30973 11.68 4.30973 12.31 4.69973 12.7L11.2897 19.29C11.6797 19.68 12.3097 19.68 12.6997 19.29L19.2897 12.7C19.6797 12.31 19.6797 11.68 19.2897 11.29C18.8997 10.9 18.2697 10.9 17.8797 11.29L12.9997 16.17V5C12.9997 4.45 12.5497 4 11.9997 4C11.4497 4 10.9997 4.45 10.9997 5Z",
		fill: "currentColor"
	})
}), wo = () => /* @__PURE__ */ B("svg", {
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
}), To = () => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), Eo = () => /* @__PURE__ */ B("svg", {
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
}), Do = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Oo = I(H)`
  display: flex;
  width: 506px;
  flex-shrink: 0;
  flex-direction: column;
  align-self: stretch;
  border-radius: 0;
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

  @media (min-width: 968px) and (max-width: 1199.98px) {
    width: 357px;
  }

  @media (max-width: 967.98px) {
    width: auto;
    align-self: stretch;
    border-radius: 24px;
    & > div {
      flex: 0 0 auto;
    }
  }
`, ko = I.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
  padding: 24px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    padding: 24px 16px;
  }

  @media (max-width: 575.98px) {
    padding: 16px;
  }
`, Ao = I.div`
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

  @media (min-width: 968px) and (max-width: 1199.98px) {
    width: auto;
    align-self: stretch;
    border-radius: 16px;
    border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
    border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
    border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
    border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
    background: ${({ theme: e }) => e.colors.cardSecondary};
  }

  @media (max-width: 967.98px) {
    width: auto;
    align-self: stretch;
  }
`, jo = I.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    height: 56px;
    align-items: center;
  }
`, Mo = I.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
I(w)`
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
var No = I.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, Po = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Fo = I(w)`
  align-items: center;
  justify-content: space-between;
`, Io = I(r).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, Lo = I.button`
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
`, Ro = I.span`
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
`, zo = I.label`
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
`, Bo = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, Vo = I.span`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.failure};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  font-feature-settings: 'liga' off;
`, Ho = I.span`
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
`, Uo = I.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, Wo = I.input`
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

  @media (min-width: 968px) and (max-width: 1199.98px) {
    color: ${({ theme: e }) => e.colors.textSubtle};
    font-size: 32px;
    letter-spacing: -0.32px;
  }
`, Go = I.button`
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
`, Ko = I.span`
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
`, qo = I.span`
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
`, Jo = I.span`
  position: relative;
  display: inline-flex;
`, Yo = I.div`
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
`, Xo = I.button`
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
`, Zo = I.span`
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
var Qo = I(w)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, $o = I.button`
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
`, es = I.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, ts = I(w)`
  justify-content: space-between;
  align-items: center;
`, ns = I.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    font-size: 32px;
    letter-spacing: -0.32px;
  }
`, rs = {
	safe: "#129E7D",
	warn: "#FFB237",
	danger: "#ED4B9E"
}, is = {
	safe: "#EAFBF7",
	warn: "#FBF2E7",
	danger: "#FFF0F9"
}, as = {
	safe: "#3DDBB5",
	warn: "#FFB237",
	danger: "#ED4B9E"
}, os = {
	safe: "#0C3A32",
	warn: "#452E14",
	danger: "#3E1C39"
}, ss = I.span`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border-top: 1px solid ${({ $zone: e }) => rs[e]};
  border-right: 1px solid ${({ $zone: e }) => rs[e]};
  border-bottom: 2px solid ${({ $zone: e }) => rs[e]};
  border-left: 1px solid ${({ $zone: e }) => rs[e]};
  background: ${({ $zone: e }) => is[e]};

  html.dark & {
    border-top-color: ${({ $zone: e }) => as[e]};
    border-right-color: ${({ $zone: e }) => as[e]};
    border-bottom-color: ${({ $zone: e }) => as[e]};
    border-left-color: ${({ $zone: e }) => as[e]};
    background: ${({ $zone: e }) => os[e]};
  }
`, cs = I.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, ls = I.span`
  display: inline-flex;
  align-items: center;
  color: #280D5F;
  cursor: help;
`, us = I.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, ds = I.div`
  position: relative;
  height: 21px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;

  html.dark & {
    background: ${({ theme: e }) => e.colors.backgroundBubblegum};
  }

  @media (min-width: 968px) and (max-width: 1199.98px) {
    height: 16px;
  }
`, fs = I.span`
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
`, ps = () => /* @__PURE__ */ V("svg", {
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
}), ms = () => /* @__PURE__ */ V("svg", {
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
}), hs = () => /* @__PURE__ */ V("svg", {
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
}), gs = I.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, _s = I(w)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, vs = I.button`
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
`, ys = I.div`
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
`, bs = I.input`
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
`, xs = I.span`
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
var Ss = I.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, Cs = I(w)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, ws = I.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Ts = I.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, Es = I.button`
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

  @media (min-width: 968px) and (max-width: 1199.98px) {
    border-radius: 16px;
  }
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
`, Ds = I.span`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`, Os = I(w)`
  align-self: stretch;
  gap: 8px;
`, ks = I(i)`
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
`, As = I.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};

  @media (min-width: 968px) and (max-width: 1199.98px) {
    padding: 24px 16px;
  }

  @media (max-width: 575.98px) {
    padding: 16px;
  }
`, js = I(w)`
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
`, Ms = I.span`
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
`, Ns = I.span`
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

  @media (min-width: 968px) and (max-width: 1199.98px) {
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -0.24px;
  }
`, Ps = ({ selected: e, options: t, onSelect: n, onClickFallback: r }) => {
	let [i, a] = F(!1), o = P(null);
	A(() => {
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
	return /* @__PURE__ */ V(Jo, {
		ref: o,
		children: [/* @__PURE__ */ V(Go, {
			type: "button",
			onClick: () => {
				s ? a((e) => !e) : r?.();
			},
			"aria-label": "Choose bet denomination",
			children: [/* @__PURE__ */ B(Ko, { children: c?.logoUrl ? /* @__PURE__ */ B("img", {
				src: c.logoUrl,
				alt: e,
				loading: "lazy",
				decoding: "async"
			}) : e }), /* @__PURE__ */ B(qo, { children: /* @__PURE__ */ B(To, {}) })]
		}), s && i ? /* @__PURE__ */ B(Yo, {
			role: "menu",
			children: t.map((t) => /* @__PURE__ */ V(Xo, {
				type: "button",
				role: "menuitemradio",
				"aria-checked": t.code === e,
				$selected: t.code === e,
				onClick: () => {
					n?.(t.code), a(!1);
				},
				children: [/* @__PURE__ */ B(Zo, {
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
}, Fs = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, betError: c, leverage: l, onLeverageChange: u, maxLeverage: d = fo, presets: f = uo, quoteAsset: p, onQuoteAssetClick: m, assetOptions: h, onAssetChange: g, fundBalanceText: _, onTopUpFund: v, onPercentClick: y, estimatedEntry: b, liqIfLong: x, marginRequired: w, openingFee: T, canSubmit: D, isSubmittingUp: O = !1, isSubmittingDown: k = !1, onUp: A, onDown: j, onDeposit: M, onWithdraw: N, unrealizedPnl: P }) => {
	let F = Math.min(100, Math.max(0, l / d * 100)), I = ho(l, d), L = _o(l, d), R = vo(l, d), z = O || k, ee = !D || z, H = !D || z, { targetRef: te, tooltip: U } = C(xo(I), { placement: "top" }), W = E.useRef(null), G = E.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.currentTarget, n = W.current;
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
	return /* @__PURE__ */ V(Oo, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ B(ko, { children: /* @__PURE__ */ V(Mo, { children: [/* @__PURE__ */ V(No, { children: [/* @__PURE__ */ V(Po, { children: [
			/* @__PURE__ */ V(Fo, { children: [/* @__PURE__ */ B(Io, { children: "My Perp Fund" }), /* @__PURE__ */ V(Lo, {
				type: "button",
				onClick: v,
				"aria-label": "Top up fund",
				children: [
					/* @__PURE__ */ B("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ B(Do, {})
					}),
					/* @__PURE__ */ B(Ro, { children: _ }),
					/* @__PURE__ */ B("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text, #280D5F)"
						},
						children: /* @__PURE__ */ B(Eo, {})
					})
				]
			})] }),
			/* @__PURE__ */ V(zo, { children: [/* @__PURE__ */ V(Bo, { children: [/* @__PURE__ */ B(Ho, { children: "My Bet" }), /* @__PURE__ */ V(Uo, { children: [/* @__PURE__ */ B(Wo, {
				type: "number",
				inputMode: "decimal",
				value: o,
				onChange: (e) => s(e.target.value),
				"aria-label": "Bet amount",
				placeholder: "0"
			}), /* @__PURE__ */ B(Ps, {
				selected: p,
				options: h,
				onSelect: g,
				onClickFallback: m
			})] })] }), c ? /* @__PURE__ */ B(Vo, {
				role: "alert",
				children: c
			}) : null] }),
			/* @__PURE__ */ V(Qo, { children: [
				/* @__PURE__ */ B($o, {
					type: "button",
					onClick: () => y?.(.25),
					children: "25%"
				}),
				/* @__PURE__ */ B(es, {}),
				/* @__PURE__ */ B($o, {
					type: "button",
					onClick: () => y?.(.5),
					children: "50%"
				}),
				/* @__PURE__ */ B(es, {}),
				/* @__PURE__ */ B($o, {
					type: "button",
					onClick: () => y?.(1),
					children: "MAX"
				})
			] })
		] }), /* @__PURE__ */ V(Po, { children: [
			/* @__PURE__ */ B(Io, { children: "Leverage" }),
			/* @__PURE__ */ V(ts, { children: [/* @__PURE__ */ V(ns, { children: [l, "x"] }), /* @__PURE__ */ V(ss, {
				$zone: I,
				children: [
					bo(I) ? /* @__PURE__ */ B(cs, {
						as: "span",
						"aria-hidden": !0,
						children: bo(I)
					}) : null,
					/* @__PURE__ */ B(cs, { children: yo(I) }),
					/* @__PURE__ */ B(ls, {
						ref: te,
						"aria-label": `${yo(I)} explanation`,
						children: /* @__PURE__ */ B(wo, {})
					}),
					U
				]
			})] }),
			/* @__PURE__ */ V(us, { children: [/* @__PURE__ */ V(ds, {
				ref: W,
				$fillPct: F,
				$zone: I,
				"aria-hidden": !0,
				children: [/* @__PURE__ */ B(gs, {
					type: "range",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Number(e.target.value)),
					"aria-label": "Leverage"
				}), /* @__PURE__ */ B(fs, {
					$fillPct: F,
					$variant: L ? "triple" : R ? "double" : "single",
					onPointerDown: G,
					children: B(L ? hs : R ? ms : ps, {})
				})]
			}), /* @__PURE__ */ V(_s, {
				role: "tablist",
				children: [/* @__PURE__ */ V(ys, { children: [/* @__PURE__ */ B(bs, {
					type: "number",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Math.max(1, Math.min(d, Number(e.target.value) || 1))),
					"aria-label": "Custom leverage"
				}), /* @__PURE__ */ B(xs, { children: "%" })] }), f.map((e) => /* @__PURE__ */ V(vs, {
					type: "button",
					role: "tab",
					"aria-selected": l === e,
					$active: l === e,
					onClick: () => u(e),
					children: [e, "x"]
				}, e))]
			})] })
		] })] }), /* @__PURE__ */ V(Ao, { children: [o && o !== "0" ? /* @__PURE__ */ V(Ss, { children: [
			/* @__PURE__ */ V(Cs, { children: [/* @__PURE__ */ B(ws, { children: "Estimated Entry" }), /* @__PURE__ */ B(Ts, { children: b })] }),
			/* @__PURE__ */ V(Cs, { children: [/* @__PURE__ */ B(ws, { children: "Liquidation if long" }), /* @__PURE__ */ B(Ts, {
				$danger: !0,
				children: x
			})] }),
			/* @__PURE__ */ V(Cs, { children: [/* @__PURE__ */ B(ws, { children: "Margin required" }), /* @__PURE__ */ B(Ts, { children: w })] }),
			/* @__PURE__ */ V(Cs, { children: [/* @__PURE__ */ B(ws, { children: "Opening fee" }), /* @__PURE__ */ B(Ts, { children: T })] })
		] }) : null, /* @__PURE__ */ V(jo, { children: [/* @__PURE__ */ B(Es, {
			type: "button",
			$variant: "up",
			disabled: ee,
			onClick: A,
			"aria-busy": O,
			children: /* @__PURE__ */ V(Ds, { children: [/* @__PURE__ */ B(So, {}), O ? "..." : "UP"] })
		}), /* @__PURE__ */ B(Es, {
			type: "button",
			$variant: "down",
			disabled: H,
			onClick: j,
			"aria-busy": k,
			children: /* @__PURE__ */ V(Ds, { children: [/* @__PURE__ */ B(Co, {}), k ? "..." : "DOWN"] })
		})] })] })] }) }), /* @__PURE__ */ V(As, { children: [/* @__PURE__ */ V(Os, { children: [/* @__PURE__ */ B(ks, {
			$variant: "primary",
			onClick: M,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ B(ks, {
			$variant: "secondary",
			onClick: N,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ V(js, { children: [/* @__PURE__ */ V(Ms, { children: ["Unrealized PnL ", /* @__PURE__ */ B(S, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ B(Ns, { children: P })] })] })]
	});
}, Is = I.div`
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

  @media (max-width: 575.98px) {
    padding: 16px;
    gap: 8px;
  }
`, Ls = I.button`
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

  @media (max-width: 575.98px) {
    flex: 1;
  }
`, Rs = I.span`
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

  @media (max-width: 575.98px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
`, zs = I.span`
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

  @media (max-width: 575.98px) {
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
  }
`;
I.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`;
var Bs = I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 575.98px) {
    flex: 1;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    & > :first-child {
      flex: 1;
    }
  }
`, Vs = I.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Hs = I.span`
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

  @media (max-width: 575.98px) {
    height: auto;
    padding: 0;
    border: 0;
    background: transparent;
  }
`, Us = I.span`
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

  @media (max-width: 575.98px) {
    font-size: 20px;
    letter-spacing: -0.2px;
  }
`, Ws = I.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};

  @media (max-width: 575.98px) {
    display: none;
  }
`, Gs = I.span`
  display: none;

  @media (max-width: 575.98px) {
    display: inline-flex;
    padding: 2px;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    border-top: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
    border-right: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
    border-bottom: 2px solid ${({ theme: e }) => e.colors.inputSecondary};
    border-left: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
    background: ${({ theme: e }) => e.colors.input};
    color: ${({ theme: e }) => e.colors.textSubtle};
    flex-shrink: 0;
  }
`, Ks = I.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, qs = I.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};

  @media (max-width: 575.98px) {
    font-family: Kanit;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
    color: ${({ theme: e }) => e.colors.text};
  }
`, Js = I.span`
  display: flex;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  background: ${({ $positive: e }) => e ? "#EAFBF7" : "#FFF0F9"};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};

  html.dark & {
    background: ${({ $positive: e }) => e ? "#0C3A32" : "#3E1C39"};
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`, Ys = I.span`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive: e }) => e ? "#129E7D" : "#ED4B9E"};
`, Xs = I.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
`, Zs = I(w)`
  align-items: center;
  gap: 24px;
  height: 56px;
  flex-shrink: 0;
`, Qs = I.span`
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
`, $s = I.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    display: ${({ $hideOnLaptop: e }) => e ? "none" : "flex"};
  }

  @media (min-width: 576px) and (max-width: 967.98px) {
    display: ${({ $hideOnLaptop: e }) => e ? "none" : "flex"};
  }

  @media (max-width: 575.98px) {
    display: none;
  }
`, ec = I.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};

  @media (min-width: 968px) and (max-width: 1199.98px) {
    color: ${({ theme: e }) => e.colors.textSubtle};
    font-feature-settings: 'liga' off;
    font-family: Kanit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`, tc = I.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};

  @media (min-width: 968px) and (max-width: 1199.98px) {
    color: ${({ theme: e }) => e.colors.text};
    font-feature-settings: 'liga' off;
    font-family: Kanit;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.2px;
  }
`, nc = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M1.90301 9.83956C1.65374 9.83956 1.47213 9.73331 1.35818 9.52081C1.24423 9.30831 1.25374 9.0988 1.3867 8.89228L5.49051 2.73574C5.61516 2.5553 5.78491 2.46509 5.99977 2.46509C6.21462 2.46509 6.38437 2.5553 6.50901 2.73574L10.6128 8.89228C10.7458 9.0988 10.7553 9.30831 10.6414 9.52081C10.5274 9.73331 10.3458 9.83956 10.0965 9.83956H1.90301Z",
		fill: "currentColor"
	})
}), rc = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M1.90301 2.16044C1.65374 2.16044 1.47213 2.26669 1.35818 2.47919C1.24423 2.69169 1.25374 2.9012 1.3867 3.10772L5.49051 9.26426C5.61516 9.4447 5.78491 9.53491 5.99977 9.53491C6.21462 9.53491 6.38437 9.4447 6.50901 9.26426L10.6128 3.10772C10.7458 2.9012 10.7553 2.69169 10.6414 2.47919C10.5274 2.26669 10.3458 2.16044 10.0965 2.16044H1.90301Z",
		fill: "currentColor"
	})
}), ic = () => /* @__PURE__ */ B("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M7.25878 9.75835L9.41712 11.9167C9.74212 12.2417 10.2671 12.2417 10.5921 11.9167L12.7504 9.75835C13.2754 9.23335 12.9004 8.33335 12.1588 8.33335H7.84212C7.10045 8.33335 6.73378 9.23335 7.25878 9.75835Z",
		fill: "currentColor"
	})
}), ac = I.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`, oc = I.div`
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
`, sc = I.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`, cc = I.button`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: Kanit;
  font-size: 16px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, lc = I.label`
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
`, uc = I.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: Kanit;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  &::placeholder { color: ${({ theme: e }) => e.colors.textSubtle}; }
`, dc = I.div`
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr 1fr;
  align-items: center;
  align-self: stretch;
  row-gap: 4px;
`, fc = I.div`
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
`, pc = I.button`
  display: contents;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
`, mc = I.div`
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  ${pc}:hover & { background: ${({ theme: e }) => e.colors.cardSecondary}; }
`, hc = I(mc)`
  padding-left: 8px;
  padding-right: 0;
  color: #F0B90B;
`, gc = I(mc)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`, _c = I.span`
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
`, vc = I(mc)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`, yc = I.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e, $up: t }) => t ? e.colors.success : e.colors.failure};
  font-weight: 600;
`, bc = [
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
], xc = ({ isOpen: e, onClose: t }) => e ? /* @__PURE__ */ B(ac, {
	onClick: t,
	children: /* @__PURE__ */ V(oc, {
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ V(sc, { children: [/* @__PURE__ */ B(cc, {
				type: "button",
				$active: !0,
				children: "Favorites"
			}), /* @__PURE__ */ B(cc, {
				type: "button",
				children: "All markets"
			})] }),
			/* @__PURE__ */ V(lc, { children: [/* @__PURE__ */ B("svg", {
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": !0,
				children: /* @__PURE__ */ B("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
			}), /* @__PURE__ */ B(uc, {
				type: "text",
				placeholder: "All tokens"
			})] }),
			/* @__PURE__ */ V(dc, {
				role: "table",
				children: [
					/* @__PURE__ */ B(fc, { children: "SYMBOLS" }),
					/* @__PURE__ */ B(fc, {}),
					/* @__PURE__ */ B(fc, { children: "LAST PRICE" }),
					/* @__PURE__ */ B(fc, { children: "1D CHANGE" }),
					/* @__PURE__ */ B(fc, { children: "1D VOLUME (USDT)" }),
					bc.map((e) => /* @__PURE__ */ V(pc, {
						type: "button",
						children: [
							/* @__PURE__ */ B(hc, { children: "★" }),
							/* @__PURE__ */ V(gc, { children: [/* @__PURE__ */ B(_c, {
								$color: e.color,
								children: e.symbol.slice(0, 1)
							}), /* @__PURE__ */ B("span", { children: e.symbol })] }),
							/* @__PURE__ */ B(vc, { children: e.lastPrice }),
							/* @__PURE__ */ B(vc, { children: /* @__PURE__ */ V(yc, {
								$up: e.change >= 0,
								children: [
									e.change >= 0 ? "▲" : "▼",
									" ",
									Math.abs(e.change).toFixed(1),
									"%"
								]
							}) }),
							/* @__PURE__ */ B(vc, { children: e.volume })
						]
					}, e.symbol))
				]
			})
		]
	})
}) : null, Sc = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c, renderTokenIcon: l }) => {
	let u = r >= 0, d = l?.(), f = P(null), p = P(null), [m, h] = F(!1), [g, _] = F(!1);
	return A(() => {
		let e = f.current, t = p.current;
		if (!e || !t) return;
		let n = () => h(t.scrollWidth > e.clientWidth + 1);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), r.observe(t), () => r.disconnect();
	}, []), /* @__PURE__ */ V(Is, { children: [
		/* @__PURE__ */ V(Ls, {
			type: "button",
			onClick: () => {
				c?.(), _(!0);
			},
			"aria-label": `Change market · ${t}`,
			children: [d == null ? /* @__PURE__ */ B(Rs, { children: e }) : /* @__PURE__ */ B(zs, { children: d }), /* @__PURE__ */ V(Bs, { children: [
				/* @__PURE__ */ B(Vs, { children: /* @__PURE__ */ V(Hs, { children: [/* @__PURE__ */ B(Us, { children: t }), /* @__PURE__ */ B(Ws, {
					"aria-hidden": !0,
					children: /* @__PURE__ */ B(ic, {})
				})] }) }),
				/* @__PURE__ */ V(Ks, { children: [/* @__PURE__ */ B(qs, { children: n }), /* @__PURE__ */ V(Js, {
					$positive: u,
					children: [
						/* @__PURE__ */ B(Ys, {
							$positive: u,
							children: B(u ? nc : rc, {})
						}),
						r.toFixed(2),
						"%"
					]
				})] }),
				/* @__PURE__ */ B(Gs, {
					"aria-hidden": !0,
					children: /* @__PURE__ */ B(ic, {})
				})
			] })]
		}),
		/* @__PURE__ */ V(Xs, {
			ref: f,
			children: [/* @__PURE__ */ V(Zs, {
				ref: p,
				children: [
					/* @__PURE__ */ V($s, { children: [/* @__PURE__ */ B(ec, { children: "24h Volume" }), /* @__PURE__ */ B(tc, { children: i })] }),
					/* @__PURE__ */ V($s, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ B(ec, { children: "Open Interest" }), /* @__PURE__ */ B(tc, { children: a })]
					}),
					/* @__PURE__ */ V($s, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ B(ec, { children: "Funding Rate" }), /* @__PURE__ */ B(tc, { children: o })]
					}),
					/* @__PURE__ */ V($s, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ B(ec, { children: "Next Funding" }), /* @__PURE__ */ B(tc, { children: s })]
					})
				]
			}), /* @__PURE__ */ B(Qs, {
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
		/* @__PURE__ */ B(xc, {
			isOpen: g,
			onClose: () => _(!1)
		})
	] });
}, Cc = I(H)`
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
`, wc = I.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Tc = I.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Ec = I.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Dc = I.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, Oc = I.div`
  position: relative;
  overflow: visible;
`, kc = I.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, Ac = I.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, jc = I.span`
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
`, Mc = 1e3, Nc = 360, Pc = 20, Fc = 70;
function Ic(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * Mc), i = e.map((e) => Pc + (1 - (e.price - t) / n) * (Nc - Pc - Fc)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${Mc} ${Nc} L 0 ${Nc} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var Lc = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", Rc = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", zc = 200, Bc = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = R(), c = `simple-chart-fill-${j().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = N(() => Ic(r), [r]), d = u?.line ?? Lc, f = u?.area ?? Rc, p = u?.endY ?? zc;
	return /* @__PURE__ */ V(Cc, { children: [/* @__PURE__ */ B(wc, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ B(Tc, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ V(Ec, { children: [/* @__PURE__ */ V(Dc, { children: [/* @__PURE__ */ V(Oc, { children: [/* @__PURE__ */ V("svg", {
		viewBox: `0 0 ${Mc} ${Nc}`,
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
				x2: Mc - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ B(jc, {
		style: {
			right: -8,
			top: `calc(${p}/${Nc} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ B(kc, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ B(Ac, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] })] });
}, Vc = I(H)`
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
`, Hc = I.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 48px;
  padding: 0;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, Uc = I.button`
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
`, Wc = I.div`
  display: grid;
  grid-template-columns: 180px 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    grid-template-columns: 180px 1fr 1fr 1fr 56px;
  }

  @media (max-width: 967.98px) {
    display: none;
  }
`, Gc = I.div`
  display: none;

  @media (max-width: 967.98px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
`, Kc = I.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding: 16px;
  border-radius: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
  gap: 16px;
`, qc = I.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`, Jc = I.span`
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
  flex-shrink: 0;
  margin-right: 12px;
`, Yc = I.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`, Xc = I.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, Zc = I.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ $direction: e }) => e === "up" ? "#129E7D" : "#ED4B9E"};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
`, Qc = I.span`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "#129E7D" : e === "negative" ? "#ED4B9E" : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`, $c = I.span`
  display: block;
  height: 1px;
  align-self: stretch;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, el = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`, tl = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, nl = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`, rl = I.span`
  color: ${({ $danger: e, $safe: t, theme: n }) => t ? "#129E7D" : e ? "#ED4B9E" : n.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`, il = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`, al = I.div`
  height: 12px;
  align-self: stretch;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
`, ol = I.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
`, sl = I.button`
  display: flex;
  height: 48px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid #ED4B9E;
  border-right: 1px solid #ED4B9E;
  border-bottom: 2px solid #ED4B9E;
  border-left: 1px solid #ED4B9E;
  background: transparent;
  color: #ED4B9E;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: #FFF0F9; }
`, cl = I.div`
  display: contents;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    display: none;
  }
`, ll = I.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Q = I.div`
  padding: 8px 16px;
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
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : "flex-start"};
`, ul = () => /* @__PURE__ */ V("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "none",
	"aria-hidden": "true",
	children: [/* @__PURE__ */ B("path", {
		d: "M8.76686 12.7917C8.66711 12.7917 8.56945 12.7727 8.47388 12.7347C8.3784 12.6965 8.29324 12.6401 8.21838 12.5653L6.12669 10.4653C5.97706 10.3102 5.90327 10.1287 5.90531 9.92095C5.90745 9.71319 5.98611 9.53449 6.14127 9.38487C6.2909 9.23943 6.47095 9.16568 6.68144 9.16364C6.89193 9.1615 7.07198 9.23524 7.22161 9.38487L7.99394 10.1572V7.17331C7.99394 6.95854 8.06909 6.77606 8.2194 6.62585C8.36961 6.47554 8.55209 6.40039 8.76686 6.40039C8.98162 6.40039 9.16411 6.47554 9.31431 6.62585C9.46462 6.77606 9.53977 6.95854 9.53977 7.17331V10.1572L10.3121 9.38487C10.4575 9.23943 10.6351 9.1667 10.845 9.1667C11.0549 9.1667 11.2374 9.23943 11.3924 9.38487C11.5476 9.53449 11.6252 9.71562 11.6252 9.92824C11.6252 10.1409 11.5504 10.3248 11.4008 10.4799L9.31534 12.5653C9.24047 12.6401 9.15531 12.6965 9.05984 12.7347C8.96427 12.7727 8.86661 12.7917 8.76686 12.7917Z",
		fill: "#BDC2C4"
	}), /* @__PURE__ */ B("path", {
		d: "M5.23333 7.59979C5.01857 7.59979 4.83608 7.52464 4.68588 7.37433C4.53557 7.22412 4.46042 7.04163 4.46042 6.82687V3.84298L3.68808 4.61531C3.54274 4.76075 3.36511 4.83348 3.15521 4.83348C2.94531 4.83348 2.76282 4.76075 2.60775 4.61531C2.45258 4.46568 2.375 4.28456 2.375 4.07193C2.375 3.85931 2.44981 3.67541 2.59944 3.52025L4.68485 1.43483C4.75972 1.36007 4.84488 1.30363 4.94035 1.26552C5.03592 1.2275 5.13358 1.2085 5.23333 1.2085C5.33308 1.2085 5.43074 1.2275 5.52631 1.26552C5.62178 1.30363 5.70695 1.36007 5.78181 1.43483L7.8735 3.53483C8.02312 3.69 8.09692 3.87146 8.09488 4.07922C8.09274 4.28699 8.01408 4.46568 7.85892 4.61531C7.70929 4.76075 7.52924 4.8345 7.31875 4.83654C7.10826 4.83868 6.92821 4.76493 6.77858 4.61531L6.00625 3.84298V6.82687C6.00625 7.04163 5.9311 7.22412 5.78079 7.37433C5.63058 7.52464 5.4481 7.59979 5.23333 7.59979Z",
		fill: "#BDC2C4"
	})]
}), dl = I.button`
  display: flex;
  padding: 1px 2px 3px 2px;
  align-items: flex-start;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.20);
  border-radius: 6px;
  background: #EFF4F5;
  cursor: pointer;
  &:hover { filter: brightness(0.97); }

  html.dark & {
    background: #353547;
  }
`, $ = I.div`
  padding: 16px;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: right;
  font-variant-numeric: tabular-nums;
`, fl = I.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 16px;
  & > :first-child {
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
  }
  & > :first-child img,
  & > :first-child svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`, pl = I.span`
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
`, ml = I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`, hl = I.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, gl = I.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${({ $direction: e }) => e === "up" ? "#129E7D" : "#ED4B9E"};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  white-space: nowrap;
`, _l = I($)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "#129E7D" : e === "negative" ? "#ED4B9E" : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, vl = I($)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`, yl = I.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, bl = I.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, xl = I.button`
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

  html.dark & {
    background: #3E1C39;
  }
`, Sl = I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, Cl = I.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, wl = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, Tl = (e) => wl[e.toUpperCase()] ?? "#7A6EAA", El = (e) => e === "up" ? "Up" : "Down", Dl = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ B("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), Ol = () => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M7.368 8.632V10.6c0 .179.06.329.18.45.121.121.27.182.448.182.179 0 .329-.061.452-.182.123-.121.184-.271.184-.45V8.632h1.968c.179 0 .329-.06.45-.18.121-.121.182-.27.182-.448 0-.178-.061-.329-.182-.452-.121-.123-.271-.184-.45-.184H8.632V5.4c0-.179-.06-.329-.18-.45-.121-.121-.27-.182-.448-.182-.178 0-.329.061-.452.182-.123.121-.184.271-.184.45v1.968H5.4c-.179 0-.329.06-.45.18-.121.12-.182.27-.182.448 0 .178.061.329.182.452.121.123.271.184.45.184h1.968ZM8.005 14.535c-.902 0-1.75-.17-2.544-.51a6.553 6.553 0 0 1-2.083-1.402 6.563 6.563 0 0 1-1.398-2.084 6.535 6.535 0 0 1-.51-2.547c0-.905.17-1.751.51-2.539a6.55 6.55 0 0 1 1.398-2.078 6.544 6.544 0 0 1 2.083-1.398 6.535 6.535 0 0 1 2.547-.51c.905 0 1.752.17 2.54.51a6.55 6.55 0 0 1 2.075 1.398 6.582 6.582 0 0 1 1.4 2.082c.34.79.51 1.637.51 2.539 0 .902-.17 1.75-.51 2.543a6.582 6.582 0 0 1-1.4 2.083 6.55 6.55 0 0 1-2.079 1.402 6.535 6.535 0 0 1-2.539.51Zm-.005-1.383c1.434 0 2.651-.5 3.652-1.5 1-1.001 1.5-2.218 1.5-3.652 0-1.434-.5-2.651-1.5-3.652-1.001-1-2.218-1.5-3.652-1.5-1.434 0-2.651.5-3.652 1.5-1 1.001-1.5 2.218-1.5 3.652 0 1.434.5 2.651 1.5 3.652 1.001 1 2.218 1.5 3.652 1.5Z",
		fill: "currentColor"
	})
}), kl = I($)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
`, Al = I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: pointer;
  border-radius: 6px;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, jl = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ V(Vc, { children: [
	/* @__PURE__ */ V(Hc, {
		role: "tablist",
		children: [
			/* @__PURE__ */ B(Uc, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ B(Uc, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ B(Uc, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && n.length > 0 && /* @__PURE__ */ B(Gc, { children: n.map((e) => /* @__PURE__ */ V(Kc, { children: [
		/* @__PURE__ */ V(qc, { children: [
			o?.(e) ?? /* @__PURE__ */ B(Jc, {
				$color: e.iconColor ?? Tl(e.symbol),
				children: e.symbol.slice(0, 1)
			}),
			/* @__PURE__ */ V(Yc, { children: [/* @__PURE__ */ B(Xc, { children: e.symbol }), /* @__PURE__ */ V(Zc, {
				$direction: e.direction,
				children: [El(e.direction), e.leverageText ? ` · ${e.leverageText}` : ""]
			})] }),
			/* @__PURE__ */ B(Qc, {
				$sign: e.pnlSign,
				children: e.unrealizedPnl
			})
		] }),
		/* @__PURE__ */ B($c, {}),
		/* @__PURE__ */ V(el, { children: [
			/* @__PURE__ */ V(tl, { children: [/* @__PURE__ */ B(nl, { children: "Entry Price" }), /* @__PURE__ */ B(rl, { children: e.entryPrice })] }),
			/* @__PURE__ */ V(tl, { children: [/* @__PURE__ */ B(nl, { children: "Liq Price" }), /* @__PURE__ */ B(rl, { children: e.liqPrice })] }),
			/* @__PURE__ */ V(il, { children: [/* @__PURE__ */ V(tl, { children: [/* @__PURE__ */ B(nl, { children: "Distance to Liq" }), /* @__PURE__ */ B(rl, {
				$safe: e.liqStatus === "safe",
				$danger: e.liqStatus === "danger",
				children: e.liqStatusLabel
			})] }), /* @__PURE__ */ B(al, { children: /* @__PURE__ */ B(ol, {
				$pct: e.liqDistancePct,
				$status: e.liqStatus
			}) })] })
		] }),
		/* @__PURE__ */ B(sl, {
			type: "button",
			onClick: () => a(e.id),
			children: "Close"
		})
	] }, `tablet-${e.id}`)) }),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ B(Sl, { children: "No open positions" }) : /* @__PURE__ */ V(Wc, {
		role: "table",
		children: [
			/* @__PURE__ */ B(Q, { children: "Token" }),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: ["Unrealized PnL", /* @__PURE__ */ B(dl, {
					type: "button",
					"aria-label": "Sort by unrealized PnL",
					children: /* @__PURE__ */ B(ul, {})
				})]
			}),
			/* @__PURE__ */ V(cl, { children: [/* @__PURE__ */ V(Q, {
				$align: "right",
				children: ["Initial Margin", /* @__PURE__ */ B(dl, {
					type: "button",
					"aria-label": "Sort by initial margin",
					children: /* @__PURE__ */ B(ul, {})
				})]
			}), /* @__PURE__ */ V(Q, {
				$align: "right",
				children: ["Size (USD)", /* @__PURE__ */ B(dl, {
					type: "button",
					"aria-label": "Sort by size",
					children: /* @__PURE__ */ B(ul, {})
				})]
			})] }),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: ["Entry Price", /* @__PURE__ */ B(dl, {
					type: "button",
					"aria-label": "Sort by entry price",
					children: /* @__PURE__ */ B(ul, {})
				})]
			}),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: ["Liq. Price", /* @__PURE__ */ B(dl, {
					type: "button",
					"aria-label": "Sort by liq. price",
					children: /* @__PURE__ */ B(ul, {})
				})]
			}),
			/* @__PURE__ */ B(cl, { children: /* @__PURE__ */ V(Q, {
				$align: "right",
				children: ["Distance to Liq", /* @__PURE__ */ B(dl, {
					type: "button",
					"aria-label": "Sort by distance to liq",
					children: /* @__PURE__ */ B(ul, {})
				})]
			}) }),
			/* @__PURE__ */ B(Q, {}),
			n.map((e) => /* @__PURE__ */ V(E.Fragment, { children: [
				/* @__PURE__ */ V(fl, { children: [o?.(e) ?? /* @__PURE__ */ B(pl, {
					$color: e.iconColor ?? Tl(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ V(ml, { children: [/* @__PURE__ */ B(hl, { children: e.symbol }), /* @__PURE__ */ V(gl, {
					$direction: e.direction,
					children: [El(e.direction), e.leverageText ? ` | ${e.leverageText}` : ""]
				})] })] }),
				/* @__PURE__ */ B(_l, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ V(cl, { children: [/* @__PURE__ */ V(kl, { children: [e.initialMargin, /* @__PURE__ */ B(Al, {
					type: "button",
					"aria-label": "Add margin",
					children: /* @__PURE__ */ B(Ol, {})
				})] }), /* @__PURE__ */ B($, { children: e.sizeUsd })] }),
				/* @__PURE__ */ B($, { children: e.entryPrice }),
				/* @__PURE__ */ B($, { children: e.liqPrice }),
				/* @__PURE__ */ B(cl, { children: /* @__PURE__ */ V(vl, { children: [/* @__PURE__ */ B(yl, { children: /* @__PURE__ */ B(bl, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ B("span", { children: e.liqStatusLabel })] }) }),
				/* @__PURE__ */ B(xl, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ B(Dl, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ B(Sl, { children: "No open orders" }) : /* @__PURE__ */ V(ll, {
		role: "table",
		children: [
			/* @__PURE__ */ B(Q, { children: "Symbol" }),
			/* @__PURE__ */ B(Q, { children: "Side" }),
			/* @__PURE__ */ B(Q, { children: "Type" }),
			/* @__PURE__ */ B(Q, { children: "Price" }),
			/* @__PURE__ */ B(Q, { children: "Size" }),
			/* @__PURE__ */ B(Q, { children: "Filled" }),
			/* @__PURE__ */ B(Q, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ V(E.Fragment, { children: [
				/* @__PURE__ */ B($, { children: e.symbol }),
				/* @__PURE__ */ B($, { children: /* @__PURE__ */ B(Cl, {
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
	e === "history" && /* @__PURE__ */ B(Sl, { children: "No transaction history" })
] });
//#endregion
export { ve as AccountPanel, Pi as BookTradesPanel, ki as ChartPanel, so as DepositModal, lo as EnableTradingModal, Ce as LeverageModal, Pt as MarketsDropdown, gr as OrderBook, dt as OrderConfirmModal, za as OrderForm, Ie as PerpsErrorMessage, H as PerpsPanel, Lr as PositionsPanel, Me as RecentTrades, Fs as SimpleBetPanel, Bc as SimpleChartCard, jl as SimplePositionsCard, Sc as SimpleTickerCard, an as SymbolHeader, vi as TpSlModal, W as UnderlineTab, G as UnderlineTabs, rt as WithdrawModal };

//# sourceMappingURL=widgets.js.map