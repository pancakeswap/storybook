import { B as e, D as t, E as n, F as r, H as i, Ht as a, Jn as o, Jt as s, Ki as c, M as l, Q as u, S as d, T as f, V as p, Vt as m, b as h, i as g, it as _, j as v, lt as y, nn as b, nr as x, o as S, ot as C, qi as w, t as T, w as E, wi as D } from "./chunks/useTooltip-BrwfEjL8.js";
import O, { Children as k, cloneElement as A, useCallback as j, useEffect as M, useId as N, useLayoutEffect as P, useMemo as F, useRef as I, useState as L } from "react";
import { css as R, keyframes as z, styled as B, useTheme as V } from "styled-components";
import { Fragment as H, jsx as U, jsxs as W } from "react/jsx-runtime";
import { createPortal as ee } from "react-dom";
//#region src/widgets/primitives.tsx
var G = B(e)`
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
`, K = B.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e, $noBorder: t }) => t || e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, te = B.button`
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
`, q = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ U(te, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), ne = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1, noBorder: i = !1, className: a }) => /* @__PURE__ */ U(K, {
	$fullWidth: r,
	$noBorder: i,
	className: a,
	children: k.map(n, (n, i) => !n || typeof n != "object" ? n : A(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), re = B(G)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, ie = B(r).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, J = B(E)`
  justify-content: space-between;
  align-items: center;
`, ae = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, oe = B(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, se = B.button`
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
`, ce = B(E)`
  flex-direction: column;
  gap: 8px;
`, le = B(oe)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, ue = (e) => e, de = B(E)`
  align-items: center;
  gap: 12px;
  padding: 12px;
`, fe = B(r).attrs({ fontSize: "14px" })`
  flex: 1;
  color: ${({ theme: e }) => e.colors.text};
`, pe = B.strong`
  margin-left: 8px;
  font-weight: 600;
`, me = B.button`
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
`, he = ({ state: e, canDeposit: t = !0, onDeposit: n, t: r = ue, mobileLabel: i }) => {
	let a = e.kind === "ready" && e.equity ? e.equity : "$0.00";
	return /* @__PURE__ */ W(de, { children: [/* @__PURE__ */ W(fe, { children: [
		i ?? r("Perpetual Account"),
		" ",
		/* @__PURE__ */ U(pe, { children: a })
	] }), /* @__PURE__ */ U(me, {
		type: "button",
		onClick: n,
		disabled: !t,
		children: r("Deposit")
	})] });
}, ge = (e) => {
	let { isMobile: a } = h();
	if (a) return /* @__PURE__ */ U(he, { ...e });
	let { walletDisplay: o, state: s, canDeposit: c = !0, canWithdraw: l = !0, onDeposit: u, onWithdraw: d, onEnableTrading: f, t: p = ue } = e;
	return /* @__PURE__ */ W(re, { children: [
		/* @__PURE__ */ W(E, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ U(se, {
				$variant: "primary",
				onClick: u,
				disabled: !c,
				children: p("Deposit")
			}), /* @__PURE__ */ U(se, {
				$variant: "secondary",
				onClick: d,
				disabled: !l,
				children: p("Withdraw")
			})]
		}),
		s.kind === "needs-deposit" && /* @__PURE__ */ U(n, {
			variant: "warning",
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: { gap: 4 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "14px",
					bold: !0,
					children: p("Deposit to get started")
				}), /* @__PURE__ */ U(t, {
					fontSize: "12px",
					children: p("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
				})]
			})
		}),
		s.kind === "needs-trading" && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(n, {
			variant: "warning",
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: { gap: 4 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "14px",
					bold: !0,
					children: p("Enable Trading to view your Aster balance")
				}), /* @__PURE__ */ U(t, {
					fontSize: "12px",
					children: p("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
				})]
			})
		}), /* @__PURE__ */ U(i, {
			onClick: f,
			scale: "sm",
			variant: "primary",
			children: p("Enable Trading")
		})] }),
		s.kind === "ready" && /* @__PURE__ */ W(ce, { children: [
			/* @__PURE__ */ U(ie, { children: p("Account Equity") }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(ae, { children: p("Wallet") }), /* @__PURE__ */ U(oe, { children: o ?? "—" })] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(ae, { children: p("Equity") }), /* @__PURE__ */ U(oe, { children: s.equity || "—" })] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(ae, { children: p("Available") }), /* @__PURE__ */ U(oe, { children: s.available || "—" })] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(ae, { children: p("Unrealized PnL") }), /* @__PURE__ */ U(le, {
				$sign: s.pnlSign,
				children: s.unrealizedPnl || "—"
			})] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(ae, { children: p("Margin mode") }), /* @__PURE__ */ U(oe, { children: s.marginMode ?? p("Cross") })] })
		] })
	] });
}, _e = B(E)`
  gap: 10px;
  align-items: stretch;
`, ve = B(i).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, ye = B(E)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, be = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, xe = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: a = 1, maxLeverage: o = 100, availableBalance: s, onConfirm: c, onClose: l, isSubmitting: u = !1, errorSlot: p, t: m = be }) => {
	let [h, _] = L(n);
	M(() => {
		e && _(n);
	}, [e, n]);
	let v = (e) => Math.max(a, Math.min(o, Math.round(e))), y = s * h;
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: m("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: l,
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ W(_e, { children: [
						/* @__PURE__ */ U(ve, {
							onClick: () => _((e) => v(e - 1)),
							disabled: h <= a,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ W(ye, { children: [h, "X"] }),
						/* @__PURE__ */ U(ve, {
							onClick: () => _((e) => v(e + 1)),
							disabled: h >= o,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ U(d, {
						variant: "dotted",
						name: "perp-leverage",
						min: 0,
						max: o,
						value: h,
						onValueChanged: (e) => _(v(e)),
						width: "100%"
					}),
					/* @__PURE__ */ W(f, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: m("Maximum position at current leverage:")
					}), /* @__PURE__ */ U(r, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(y) && y > 0 ? `${y.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ U(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: m("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					p,
					/* @__PURE__ */ U(i, {
						scale: "md",
						disabled: u,
						onClick: () => c(h),
						children: m(u ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, Se = B.button`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 14px 16px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid
    ${({ theme: e, $active: t }) => t ? e.colors.secondary : e.colors.cardBorder};
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: border-color 0.12s ease, background 0.12s ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    border-color: ${({ theme: e }) => e.colors.secondary};
  }
`, Ce = B.div`
  flex: 0 0 auto;
  margin-top: 2px;
`, we = B(E)`
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
`, Te = (e) => e, Ee = ({ isOpen: e, currentMode: t, onConfirm: n, onClose: a, isSubmitting: o = !1, disabled: s = !1, errorSlot: c, t: u = Te }) => {
	let d = V(), [p, m] = O.useState(t);
	O.useEffect(() => {
		e && m(t);
	}, [e, t]);
	let h = !s && !o && p !== t;
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: a,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: u("Asset Mode"),
			onDismiss: a,
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: {
					gap: 14,
					minWidth: 360,
					maxWidth: 460
				},
				children: [
					/* @__PURE__ */ W(Se, {
						type: "button",
						$active: p === "SINGLE",
						onClick: () => !s && m("SINGLE"),
						disabled: s,
						"aria-pressed": p === "SINGLE",
						children: [/* @__PURE__ */ U(Ce, {
							onClick: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ U(l, {
								scale: "md",
								checked: p === "SINGLE",
								disabled: s,
								onChange: () => !s && m("SINGLE"),
								"aria-label": u("Single-Asset Mode")
							})
						}), /* @__PURE__ */ W(f, {
							style: { flex: 1 },
							children: [/* @__PURE__ */ U(r, {
								fontSize: "16px",
								bold: !0,
								children: u("Single-Asset Mode")
							}), /* @__PURE__ */ W(we, { children: [
								/* @__PURE__ */ U(r, {
									fontSize: "13px",
									color: "textSubtle",
									children: u("Use pair's settlement currency as margin.")
								}),
								/* @__PURE__ */ U(r, {
									fontSize: "13px",
									color: "textSubtle",
									children: u("PnL offsets across Cross positions of the same currency.")
								}),
								/* @__PURE__ */ U(r, {
									fontSize: "13px",
									color: "textSubtle",
									children: u("Supports Cross and Isolated margin.")
								})
							] })]
						})]
					}),
					/* @__PURE__ */ W(Se, {
						type: "button",
						$active: p === "MULTI",
						onClick: () => !s && m("MULTI"),
						disabled: s,
						"aria-pressed": p === "MULTI",
						children: [/* @__PURE__ */ U(Ce, {
							onClick: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ U(l, {
								scale: "md",
								checked: p === "MULTI",
								disabled: s,
								onChange: () => !s && m("MULTI"),
								"aria-label": u("Multi-Asset Mode")
							})
						}), /* @__PURE__ */ W(f, {
							style: { flex: 1 },
							children: [/* @__PURE__ */ U(r, {
								fontSize: "16px",
								bold: !0,
								children: u("Multi-Asset Mode")
							}), /* @__PURE__ */ W(we, { children: [
								/* @__PURE__ */ U(r, {
									fontSize: "13px",
									color: "textSubtle",
									children: u("Contracts can be traded across margin assets.")
								}),
								/* @__PURE__ */ U(r, {
									fontSize: "13px",
									color: "textSubtle",
									children: u("The profits and losses of positions with different margin assets can offset one another.")
								}),
								/* @__PURE__ */ U(r, {
									fontSize: "13px",
									color: "textSubtle",
									children: u("Supports cross margin only.")
								})
							] })]
						})]
					}),
					/* @__PURE__ */ W(r, {
						fontSize: "13px",
						color: "textSubtle",
						children: [
							u("Read about "),
							/* @__PURE__ */ U(r, {
								as: "a",
								href: "https://docs.asterdex.com/trading/perpetuals/single-asset-mode-and-multi-asset-mode",
								target: "_blank",
								rel: "noopener noreferrer",
								fontSize: "13px",
								bold: !0,
								style: {
									color: d.colors.secondary,
									textDecoration: "none"
								},
								children: u("Multi-Asset Mode")
							}),
							u(" to better manage risk.")
						]
					}),
					c,
					/* @__PURE__ */ U(i, {
						onClick: () => h && n(p),
						disabled: !h,
						isLoading: o,
						scale: "md",
						children: u("Confirm")
					})
				]
			})
		})
	});
}, De = B.button`
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
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    filter: brightness(1.08);
  }
`, Oe = (e) => e, ke = ({ mode: e, onClick: t, disabled: n, t: r = Oe }) => /* @__PURE__ */ U(De, {
	type: "button",
	onClick: t,
	disabled: n,
	title: r("Asset mode"),
	children: r(e === "MULTI" ? "Multi" : "Single")
}), Ae = B.button`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  flex: 1 1 0;
  padding: 14px 16px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e, $active: t }) => t ? e.colors.secondary : e.colors.cardBorder};
  border-radius: 16px;
  cursor: pointer;
  text-align: center;
  font-family: inherit;
  transition: border-color 0.12s ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:not(:disabled):hover {
    border-color: ${({ theme: e }) => e.colors.secondary};
  }
`, je = B(r).attrs({
	fontSize: "15px",
	bold: !0
})`
  font-weight: 600;
`, Me = (e) => e, Ne = ({ isOpen: e, symbol: t, currentMode: n, onConfirm: a, onClose: o, isSubmitting: s = !1, disabled: c = !1, isolatedDisabledReason: l, errorSlot: u, t: d = Me }) => {
	let [p, m] = O.useState(n);
	O.useEffect(() => {
		e && m(n);
	}, [e, n]);
	let h = !!l, _ = h && p === "ISOLATED" ? "CROSS" : p, v = !c && !s && _ !== n;
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: o,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: d("%symbol% Margin mode", { symbol: t }),
			onDismiss: o,
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 360,
					maxWidth: 460
				},
				children: [
					/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: d("Switching of margin mode only applies to the selected contract")
					}),
					/* @__PURE__ */ W(E, {
						style: { gap: 10 },
						children: [/* @__PURE__ */ U(Ae, {
							type: "button",
							$active: _ === "CROSS",
							onClick: () => !c && m("CROSS"),
							disabled: c,
							"aria-pressed": _ === "CROSS",
							children: /* @__PURE__ */ U(je, { children: d("Cross") })
						}), /* @__PURE__ */ U(Ae, {
							type: "button",
							$active: _ === "ISOLATED",
							onClick: () => !c && !h && m("ISOLATED"),
							disabled: c || h,
							"aria-pressed": _ === "ISOLATED",
							title: l,
							children: /* @__PURE__ */ U(je, { children: d("Isolated") })
						})]
					}),
					h && /* @__PURE__ */ U(r, {
						fontSize: "13px",
						color: "warning",
						children: l
					}),
					/* @__PURE__ */ W(f, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						mb: "4px",
						children: d("What are cross and isolated modes?")
					}), /* @__PURE__ */ U(r, {
						fontSize: "13px",
						color: "textSubtle",
						children: d("The Margin assigned to a position is restricted to a certain amount. If the Margin falls below the Maintenance Margin level, the position is liquidated. However, you can add and remove Margin at will under this mode.")
					})] }),
					u,
					/* @__PURE__ */ U(i, {
						onClick: () => v && a(_),
						disabled: !v,
						isLoading: s,
						scale: "md",
						children: d("Confirm")
					})
				]
			})
		})
	});
}, Pe = B.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, Fe = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ie = B.div`
  overflow-y: auto;
  min-height: 0;
`, Le = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, Re = B.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, ze = B.span`
  text-align: right;
`, Be = B(ze)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ve = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, He = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = F(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ W(H, { children: [
		t && /* @__PURE__ */ U(Pe, { children: t }),
		/* @__PURE__ */ W(Fe, { children: [
			/* @__PURE__ */ U("span", { children: o }),
			/* @__PURE__ */ U("span", {
				style: { textAlign: "right" },
				children: s
			}),
			/* @__PURE__ */ U("span", {
				style: { textAlign: "right" },
				children: c
			})
		] }),
		/* @__PURE__ */ U(Ie, { children: a.map((e) => /* @__PURE__ */ W(Le, { children: [
			/* @__PURE__ */ U(Re, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ U(ze, { children: e.size }),
			/* @__PURE__ */ U(Be, { children: Ve(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ U("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ U(G, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, Ue = B(f)`
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
`, We = B(i).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Ge = (e) => e, Ke = ({ variant: e, title: i, message: a, details: o, t: s = Ge }) => {
	let [c, l] = L(!1);
	return i ? /* @__PURE__ */ U(n, {
		variant: e,
		children: /* @__PURE__ */ W(E, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ U(t, { children: /* @__PURE__ */ U(r, {
					fontSize: "13px",
					bold: !0,
					children: i
				}) }),
				/* @__PURE__ */ U(t, { children: /* @__PURE__ */ U(r, {
					fontSize: "12px",
					children: a
				}) }),
				o && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(We, {
					onClick: () => l((e) => !e),
					children: s(c ? "Hide details" : "Show details")
				}), c && /* @__PURE__ */ U(Ue, { children: o })] })
			]
		})
	}) : /* @__PURE__ */ U(n, {
		variant: e,
		children: /* @__PURE__ */ U(t, { children: a })
	});
}, qe = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Je = B(E)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Ye = B(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Xe = B(E)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Ze = B.button`
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
`, Qe = B(E)`
  flex-direction: column;
`, $e = B.div`
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
`, et = B.button`
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
`, tt = B(E)`
  flex-direction: column;
  gap: 8px;
`, nt = B(E)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
`, rt = B(E)`
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
`, it = B.button`
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
`, at = B.input`
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
`, ot = B(E)`
  align-items: center;
  gap: 8px;
`, st = B.button`
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
`, ct = B.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, lt = B.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, ut = B(E)`
  justify-content: space-between;
  align-items: center;
`, dt = B(E)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, ft = [
	25,
	50,
	75
], pt = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: a, selectedAssetId: o, onSelectAsset: s, selectedAsset: c, destinationAddress: l, destinationChainName: u = "BSC", feeText: d, amount: p, onAmountChange: m, onPercentClick: h, onBack: v, onWithdraw: y, onClose: b, isSubmitting: x = !1, canSubmit: C = !0, errorSlot: w, t: T = qe, renderTokenIcon: D }) => {
	let k = (e, t = 24) => D ? D(e, t) : /* @__PURE__ */ U($e, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: b,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: t === "select" ? T("Withdraw from Aster") : T("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: b,
			children: /* @__PURE__ */ W(Je, { children: [
				t === "amount" && /* @__PURE__ */ U(E, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ W(et, {
						type: "button",
						onClick: v,
						"aria-label": "back",
						children: [/* @__PURE__ */ U(_, {
							width: "14px",
							color: "primary"
						}), /* @__PURE__ */ U("span", { children: T("Back") })]
					})
				}),
				t === "select" && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W(f, { children: [/* @__PURE__ */ U(Ye, {
						color: "textSubtle",
						children: T("Select asset")
					}), /* @__PURE__ */ U(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: T("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ U(r, {
						fontSize: "12px",
						children: T("Loading assets...")
					}),
					!n && a.length === 0 && /* @__PURE__ */ W(dt, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						children: T("Nothing to withdraw yet")
					}), /* @__PURE__ */ U(r, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: T("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					a.length > 0 && /* @__PURE__ */ U(Xe, { children: a.map((e) => /* @__PURE__ */ W(Ze, {
						$selected: o === e.id,
						onClick: () => s(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 12 },
							children: [k(e, 32), /* @__PURE__ */ W(Qe, { children: [/* @__PURE__ */ U(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ U(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: T("Withdrawable")
							})] })]
						}), /* @__PURE__ */ W(E, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ U(r, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ U(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && c && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W(tt, { children: [/* @__PURE__ */ W(nt, { children: [/* @__PURE__ */ U(r, {
						fontSize: "12px",
						bold: !0,
						color: "textSubtle",
						children: T("Withdrawable: %amt% %sym%", {
							amt: c.withdrawableText,
							sym: c.symbol
						})
					}), h && /* @__PURE__ */ W(ot, { children: [
						ft.map((e, t) => /* @__PURE__ */ W(O.Fragment, { children: [t > 0 && /* @__PURE__ */ U(ct, {}), /* @__PURE__ */ W(st, {
							onClick: () => h(e),
							children: [e, "%"]
						})] }, e)),
						/* @__PURE__ */ U(ct, {}),
						/* @__PURE__ */ U(st, {
							onClick: () => h(100),
							children: T("MAX")
						})
					] })] }), /* @__PURE__ */ W(rt, { children: [/* @__PURE__ */ W(it, {
						type: "button",
						children: [k(c, 40), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: c.displayName || c.symbol
						})]
					}), /* @__PURE__ */ U(at, {
						value: p,
						onChange: (e) => m(e.target.value),
						placeholder: "0.0",
						inputMode: "decimal"
					})] })] }),
					/* @__PURE__ */ W(lt, { children: [
						/* @__PURE__ */ W(ut, { children: [/* @__PURE__ */ U(Ye, {
							color: "textSubtle",
							children: T("Destination")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ W(ut, { children: [/* @__PURE__ */ U(Ye, {
							color: "textSubtle",
							children: T("Network")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							children: u
						})] }),
						/* @__PURE__ */ W(ut, { children: [/* @__PURE__ */ U(Ye, {
							color: "textSubtle",
							children: T("Token")
						}), /* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 6 },
							children: [k(c, 16), /* @__PURE__ */ U(r, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ W(ut, { children: [/* @__PURE__ */ U(Ye, {
							color: "textSubtle",
							children: T("Fee")
						}), /* @__PURE__ */ W(r, {
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
					/* @__PURE__ */ U(i, {
						onClick: y,
						disabled: !C || !p || x,
						isLoading: x,
						scale: "md",
						children: T(x ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ U(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: T("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, mt = B(E)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, ht = B(r).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, gt = B(r).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, _t = B(E)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, vt = B.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, yt = B(gt)`
  color: ${({ theme: e }) => e.colors.failure};
`, bt = B(i)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, xt = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, St = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", Ct = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, wt = ({ isOpen: e, details: t, onConfirm: n, onClose: i, onSkipFutureChange: a, t: o = xt }) => {
	let [s, c] = L(!1);
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: i,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: o("Confirm Order"),
			onDismiss: i,
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Symbol") }), /* @__PURE__ */ U(gt, { children: t.symbol })] }),
					/* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Side / Type") }), /* @__PURE__ */ W(gt, { children: [
						/* @__PURE__ */ U(vt, {
							$side: t.side,
							children: t.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						Ct(t.type, o)
					] })] }),
					/* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Size") }), /* @__PURE__ */ W(gt, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Price") }), /* @__PURE__ */ W(gt, { children: [
						St(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Trigger Price") }), /* @__PURE__ */ W(gt, { children: [
						St(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Leverage") }), /* @__PURE__ */ W(gt, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Cost") }), /* @__PURE__ */ U(gt, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Est. Liq. Price") }), /* @__PURE__ */ U(yt, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ W(mt, { children: [/* @__PURE__ */ U(ht, { children: o("Reduce Only") }), /* @__PURE__ */ U(gt, { children: o("Yes") })] }),
					/* @__PURE__ */ W(_t, { children: [/* @__PURE__ */ U(l, {
						scale: "sm",
						checked: s,
						onChange: (e) => c(e.target.checked)
					}), /* @__PURE__ */ U(r, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ U(f, {
						mt: "8px",
						children: /* @__PURE__ */ U(bt, {
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
}, Tt = B.div`
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
`, Et = B(E)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Dt = B.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, Ot = B.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, kt = B.input`
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
`, At = B.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, jt = B.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, Mt = B.button`
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
`, Nt = B.button`
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
`, Pt = B(E)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, Ft = B.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, It = B.span`
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
`, Lt = B.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Rt = B(r)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, zt = B(E)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Bt = ({ filled: e }) => /* @__PURE__ */ U("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: e ? "currentColor" : "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinejoin: "round",
	strokeLinecap: "round",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Vt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, Ht = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, Ut = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, Wt = (e) => e.toUpperCase().replace(/USD1$/, "").replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), Gt = (e) => Wt(e).slice(0, 1) || e.slice(0, 1), Kt = (e) => e, qt = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: i, logoForSymbol: a, isLoading: o = !1, t: s = Kt }) => {
	let [c, l] = L("all"), [u, d] = L(""), f = F(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ W(Tt, { children: [
		/* @__PURE__ */ W(Et, { children: [/* @__PURE__ */ U(Dt, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ U(Dt, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ W(Ot, { children: [/* @__PURE__ */ U(D, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ U(kt, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ W(At, { children: [
			/* @__PURE__ */ U("span", {}),
			/* @__PURE__ */ U("span", { children: s("Symbols") }),
			/* @__PURE__ */ U(Rt, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ U(Rt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ U(Rt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ U(jt, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ U(zt, { children: /* @__PURE__ */ U(r, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let r = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(Wt(e.symbol));
				return /* @__PURE__ */ W(Mt, {
					onClick: () => i(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ U(Nt, {
							$filled: r,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(r ? "Unfavorite" : "Favorite"),
							"aria-pressed": r,
							children: /* @__PURE__ */ U(Bt, { filled: r })
						}),
						/* @__PURE__ */ W(Pt, { children: [
							/* @__PURE__ */ U(It, { children: c ? /* @__PURE__ */ U(Lt, {
								src: c,
								alt: Wt(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = Gt(e.symbol));
								}
							}) : Gt(e.symbol) }),
							/* @__PURE__ */ U("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ W(Ft, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ U(Rt, { children: Vt(e.lastPrice) }),
						/* @__PURE__ */ U(Rt, {
							$tone: o >= 0 ? "up" : "down",
							children: Ht(e.priceChangePercent)
						}),
						/* @__PURE__ */ U(Rt, { children: Ut(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, Jt = B(E)`
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
`, Yt = B(E)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, Xt = B.button`
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
`, Zt = B.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, Qt = B.button`
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
`, $t = B.span`
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
`, en = B.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, tn = B(r)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`;
B.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`;
var nn = B.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, rn = B(E)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, an = B(E)`
  flex-direction: column;
  flex-shrink: 0;
`, on = B(r)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, sn = B(r)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, cn = B(E)`
  align-items: baseline;
  white-space: nowrap;
`, ln = B.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, un = B.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, dn = B.span`
  position: relative;
  display: inline-flex;
`, fn = B.div`
  position: fixed;
  transform: translateX(-50%);
  display: flex;
  width: 254px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
  border-radius: 16px;
  background: #08060B;
  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
  pointer-events: none;
  z-index: 100;
  white-space: normal;

  html.dark & {
    background: #FFF;
    color: #000;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.16),
      0 4px 8px 0 rgba(0, 0, 0, 0.32);
  }
`, pn = B.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  align-self: stretch;
  gap: 8px;
`, mn = B.span`
  color: ${({ $color: e }) => e === "long" ? "#31D0AA" : e === "short" ? "#ED4B9E" : "inherit"};
`, hn = B.p`
  margin: 0;
  align-self: stretch;
`, gn = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, _n = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, vn = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, yn = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, bn = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", xn = () => /* @__PURE__ */ U("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Sn = (e) => e, Cn = (e) => {
	let { isMobile: t } = h();
	return U(t ? Fn : wn, { ...e });
}, wn = ({ symbol: e, pairLabel: t, logoUrl: n, leverage: r, lastPrice: i, markPrice: a, indexPrice: o, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, marketsOpen: h, onMarketsOpenChange: g, t: _ = Sn }) => {
	let v = V(), y = h !== void 0, [b, x] = L(!1), S = y ? h : b, C = j((e) => {
		let t = typeof e == "function" ? e(S) : e;
		y || x(t), g?.(t);
	}, [
		y,
		S,
		g
	]), [w, E] = L(null), D = I(null), O = I(null);
	P(() => {
		if (!S || !D.current) return;
		let e = () => {
			let e = D.current.getBoundingClientRect();
			E({
				top: e.bottom + 8,
				left: e.left
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [S]), M(() => {
		if (!S) return;
		let e = (e) => {
			let t = e.target;
			D.current?.contains(t) || O.current?.contains(t) || C(!1);
		}, t = (e) => {
			e.key === "Escape" && C(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [S]);
	let k = j(() => C(!1), []), A = Number(c) < 0, N = Number(u) < 0, { targetRef: F, tooltip: R } = T(_("The Mark Price is a calculated value from multiple sources, mainly used for liquidations to prevent price spikes."), { placement: "bottom" }), [z, B] = L(!1), [H, G] = L(null), K = I(null), te = (() => {
		let e = Number(c);
		return Number.isFinite(e) ? e * 100 : null;
	})(), q = te == null ? "—" : `${(te * 3 * 365).toFixed(4)}%`, ne = () => {
		let e = K.current;
		if (!e) return;
		let t = e.getBoundingClientRect();
		G({
			top: t.bottom + 8,
			left: t.left + t.width / 2
		}), B(!0);
	};
	return /* @__PURE__ */ W(Jt, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ W(Yt, { children: [p && /* @__PURE__ */ U(Qt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": _(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ U(xn, {})
			}), /* @__PURE__ */ W(Xt, {
				ref: D,
				"aria-haspopup": "listbox",
				"aria-expanded": S,
				disabled: !m,
				onClick: () => m && C((e) => !e),
				children: [
					/* @__PURE__ */ U($t, {
						$bg: n ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: n ? /* @__PURE__ */ U(en, {
							src: n,
							alt: t
						}) : bn(t)
					}),
					/* @__PURE__ */ U(tn, { children: t }),
					/* @__PURE__ */ U(s, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			S && w && typeof document < "u" && m ? ee(/* @__PURE__ */ U(Zt, {
				ref: O,
				style: {
					top: w.top,
					left: w.left
				},
				children: m(k)
			}), document.body) : null,
			/* @__PURE__ */ U(nn, {
				"aria-label": `Last price: ${i ?? ""}`,
				children: i ?? "—"
			}),
			/* @__PURE__ */ W(rn, {
				role: "list",
				children: [
					/* @__PURE__ */ W(an, {
						role: "listitem",
						children: [
							/* @__PURE__ */ U(on, {
								ref: F,
								$dashed: !0,
								children: _("Mark")
							}),
							/* @__PURE__ */ U(sn, { children: a ?? "—" }),
							R
						]
					}),
					/* @__PURE__ */ W(an, {
						role: "listitem",
						children: [/* @__PURE__ */ U(on, { children: _("Index") }), /* @__PURE__ */ U(sn, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ W(an, {
						role: "listitem",
						children: [
							/* @__PURE__ */ U(dn, {
								ref: K,
								onMouseEnter: ne,
								onMouseLeave: () => B(!1),
								children: /* @__PURE__ */ U(on, {
									$dashed: !0,
									children: _("Funding / Countdown")
								})
							}),
							z && H && typeof document < "u" ? ee(/* @__PURE__ */ W(fn, {
								role: "tooltip",
								style: {
									top: H.top,
									left: H.left
								},
								children: [
									/* @__PURE__ */ W(pn, { children: [/* @__PURE__ */ U("span", { children: _("Interval") }), /* @__PURE__ */ U("span", { children: "8h" })] }),
									/* @__PURE__ */ W(pn, { children: [/* @__PURE__ */ U("span", { children: _("Direction") }), /* @__PURE__ */ W("span", { children: [
										/* @__PURE__ */ U(mn, {
											$color: "long",
											children: _("Long")
										}),
										" ",
										/* @__PURE__ */ U(mn, {
											$color: "plain",
											children: _("Pays")
										}),
										" ",
										/* @__PURE__ */ U(mn, {
											$color: "short",
											children: _("Short")
										})
									] })] }),
									/* @__PURE__ */ W(pn, { children: [/* @__PURE__ */ U("span", { children: _("Funding rate") }), /* @__PURE__ */ U("span", { children: gn(c) })] }),
									/* @__PURE__ */ W(pn, { children: [/* @__PURE__ */ U("span", { children: _("Annualized") }), /* @__PURE__ */ U("span", { children: q })] }),
									/* @__PURE__ */ U(hn, { children: _("Funding rate for the next period. If positive, longs pay shorts. If negative, shorts pay longs.") })
								]
							}), document.body) : null,
							/* @__PURE__ */ W(cn, { children: [
								/* @__PURE__ */ U(ln, {
									$negative: A,
									children: gn(c)
								}),
								/* @__PURE__ */ U(un, { children: "/" }),
								/* @__PURE__ */ U(sn, {
									as: "span",
									children: vn(l)
								})
							] })
						]
					}),
					/* @__PURE__ */ W(an, {
						role: "listitem",
						children: [/* @__PURE__ */ U(on, { children: _("24h Change") }), /* @__PURE__ */ U(sn, {
							style: { color: u ? N ? v.colors.failure : v.colors.success : void 0 },
							children: _n(u)
						})]
					}),
					/* @__PURE__ */ W(an, {
						role: "listitem",
						children: [/* @__PURE__ */ U(on, { children: _("24h Volume (USDT)") }), /* @__PURE__ */ U(sn, { children: yn(d) })]
					})
				]
			})
		]
	});
}, Tn = B(E)`
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  font-variant-numeric: tabular-nums;
`, En = B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  &[aria-disabled='true'] {
    cursor: default;
  }
`, Dn = B.span`
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
`, On = B.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, kn = B.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 4px;
  background: ${({ theme: e }) => e.colors.input};
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
`, An = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  display: inline-flex;
  align-items: center;
`, jn = B.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Mn = B.span`
  flex: 1;
`, Nn = B.button`
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
`, Pn = B.div`
  position: fixed;
  z-index: 1000;
`, Fn = ({ symbol: e, pairLabel: t, logoUrl: n, change24h: r, favorited: i = !1, onToggleFavorite: o, chartOpen: l = !1, onChartToggle: u, renderMarketsDropdown: d, marketsOpen: f, onMarketsOpenChange: p, t: h = Sn }) => {
	let g = f !== void 0, [_, v] = L(!1), y = g ? f : _, b = j((e) => {
		let t = typeof e == "function" ? e(y) : e;
		g || v(t), p?.(t);
	}, [
		g,
		y,
		p
	]), x = I(null), S = I(null), [C, T] = L(null);
	P(() => {
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
	}, [y]), M(() => {
		if (!y) return;
		let e = (e) => {
			let t = e.target;
			x.current?.contains(t) || S.current?.contains(t) || b(!1);
		}, t = (e) => {
			e.key === "Escape" && b(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [y]);
	let E = j(() => b(!1), [b]), D = Number(r) < 0, O = t.split(/[- ]/)[0] ?? t, k = !!d;
	return /* @__PURE__ */ W(Tn, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ W(En, {
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
					/* @__PURE__ */ U(Dn, {
						$bg: n ? "transparent" : void 0,
						children: n ? /* @__PURE__ */ U(en, {
							src: n,
							alt: t
						}) : O
					}),
					/* @__PURE__ */ U(On, { children: e }),
					/* @__PURE__ */ U(kn, { children: h("Perp") }),
					/* @__PURE__ */ U(An, { children: /* @__PURE__ */ U(s, {
						width: "16px",
						color: "textSubtle"
					}) })
				]
			}),
			r !== void 0 && /* @__PURE__ */ U(jn, {
				$negative: D,
				children: _n(r)
			}),
			/* @__PURE__ */ U(Mn, {}),
			o && /* @__PURE__ */ U(Nn, {
				type: "button",
				$starred: i,
				"aria-label": h(i ? "Unfavorite" : "Favorite"),
				"aria-pressed": i,
				onClick: o,
				children: U(i ? c : w, {
					width: "20px",
					"aria-hidden": "true"
				})
			}),
			u && /* @__PURE__ */ U(Nn, {
				type: "button",
				$active: l,
				"aria-label": h(l ? "Hide chart" : "Show chart"),
				"aria-pressed": l,
				onClick: u,
				children: U(l ? m : a, { width: "20px" })
			}),
			y && C && typeof document < "u" && d ? ee(/* @__PURE__ */ U(Pn, {
				ref: S,
				style: {
					top: C.top,
					left: C.left,
					width: C.width
				},
				children: d(E)
			}), document.body) : null
		]
	});
}, In = 10, Ln = 27, Rn = B(E)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, zn = B(E)`
  gap: 5px;
`, Bn = B.button`
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
`, Vn = B.div`
  position: relative;
`, Hn = B.button`
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
`, Un = B.div`
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
`, Wn = B.button`
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
`, Gn = B(E)`
  align-items: center;
  gap: 2px;
`, Kn = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, qn = B.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, Jn = B.div`
  height: ${({ $size: e }) => e === "full" ? In * 2 * Ln : In * Ln}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, Yn = B.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${Ln}px;
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
`, Xn = B.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, Zn = B.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, Qn = B.div`
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
`, $n = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, er = B.span`
  text-align: center;
`, tr = B.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, nr = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, rr = [
	100,
	50,
	10,
	1
], ir = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, ar = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), or = (e, t) => {
	let n = [];
	for (let e of rr) t > e * 10 && n.push(String(e));
	let r = ar(e);
	for (let e = 1; e <= r; e++) n.push(ir(e));
	return n;
}, sr = (e, t) => {
	M(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, cr = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = L(!1), o = I(null);
	return sr(o, () => a(!1)), /* @__PURE__ */ W(Vn, {
		ref: o,
		children: [/* @__PURE__ */ W(Hn, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ U(Un, { children: t.map((e) => /* @__PURE__ */ U(Wn, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, lr = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ W("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ U("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "6",
			stroke: t
		}),
		/* @__PURE__ */ U("rect", {
			x: "0.5",
			y: "8.5",
			width: "6",
			height: "6",
			stroke: e
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: n
		})
	]
}), ur = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ W("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ U("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), dr = ({ askColor: e, listColor: t }) => /* @__PURE__ */ W("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ U("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ U("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), fr = (e) => e, pr = [
	"0.1",
	"0.5",
	"1",
	"5",
	"10",
	"50",
	"100"
], mr = B.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0;
  font-size: 12px;
  height: 100%;
  width: 100%;
  background: ${({ theme: e }) => e.colors.card};
`, hr = B.div`
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
`, gr = B.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
  padding-bottom: 4px;
  margin-bottom: 4px;
`, _r = B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`, vr = B.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1.5;
  z-index: 1;
  font-variant-numeric: tabular-nums;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, yr = B.span`
  position: absolute;
  inset: 0 0 0 auto;
  z-index: -1;
  pointer-events: none;
`, br = B.div`
  text-align: center;
  padding: 8px 0;
`, xr = B.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Sr = B.div`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Cr = B.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 4px;
  /* Sit directly below the last bid row in normal flow. Earlier we used
     margin-top: auto to glue this to the column bottom, but when the
     adjacent OrderForm column is taller than the order book the grid row
     stretches MWrap and the footer ends up below the iPhone viewport. */
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, wr = B.button`
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
`, Tr = B.button`
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
`, Er = B.div`
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
`, Dr = B.button`
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
`, Or = B.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 250;
`, kr = B.div`
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
`, Ar = B.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0.4;
  margin: 4px auto 12px;
`, jr = B.button`
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
`, Mr = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-size: 16px;
`, Nr = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, view: o, onViewChange: c, priceStep: l, onPriceStepChange: u, hidden: d, t: f = fr, fundingRateText: p, fundingCountdownText: m, midPriceText: h, midSubText: g, priceStepOptions: _ = pr }) => {
	let v = V(), [y, b] = L(!1), [x, S] = L(!1), C = I(null);
	sr(C, () => b(!1));
	let w = F(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = nr(e, "ask", i, r, a), s = nr(t, "bid", i, r, a), c = [...o].sort(([e], [t]) => Number(e) - Number(t)), u = [...s].sort(([e], [t]) => Number(t) - Number(e));
		return {
			asks: c.slice(0, In).reverse(),
			bids: u.slice(0, In)
		};
	}, [
		e,
		t,
		l,
		i,
		a
	]), T = F(() => {
		let e = 0;
		for (let [, t] of w.asks) e = Math.max(e, Number(t) || 0);
		for (let [, t] of w.bids) e = Math.max(e, Number(t) || 0);
		return e || 1;
	}, [w]), E = `color-mix(in srgb, ${v.colors.failure} 18%, transparent)`, D = (e, t, n) => /* @__PURE__ */ W(vr, {
		$side: n,
		children: [
			/* @__PURE__ */ U(yr, { style: {
				width: `${Math.max(6, Math.min(100, Number(t) / T * 100))}%`,
				background: n === "ask" ? E : "color-mix(in srgb, #129E7D 18%, transparent)"
			} }),
			/* @__PURE__ */ U("span", { children: e }),
			/* @__PURE__ */ U("span", { children: Number(t).toFixed(3) })
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
	return /* @__PURE__ */ W(mr, {
		style: d ? { display: "none" } : void 0,
		children: [
			(p || m) && /* @__PURE__ */ W(hr, { children: [f("Funding (8h) / Countdown"), /* @__PURE__ */ W("strong", { children: [
				p ?? "—",
				" / ",
				m ?? "—"
			] })] }),
			/* @__PURE__ */ W(gr, { children: [/* @__PURE__ */ W("span", { children: [
				f("Price"),
				/* @__PURE__ */ U("br", {}),
				"(",
				r,
				")"
			] }), /* @__PURE__ */ W(_r, { children: [
				f("Size"),
				/* @__PURE__ */ U("br", {}),
				"(",
				n,
				") ",
				/* @__PURE__ */ U(s, {
					width: "14px",
					"aria-hidden": "true"
				})
			] })] }),
			o !== "bids" && w.asks.map(([e, t]) => D(e, t, "ask")),
			o === "both" && /* @__PURE__ */ W(br, { children: [/* @__PURE__ */ U(xr, { children: h ?? w.bids[0]?.[0] ?? "—" }), g && /* @__PURE__ */ U(Sr, { children: g })] }),
			o !== "asks" && w.bids.map(([e, t]) => D(e, t, "bid")),
			/* @__PURE__ */ W(Cr, { children: [/* @__PURE__ */ W(wr, {
				type: "button",
				"aria-label": f("Choose view"),
				"aria-haspopup": "dialog",
				onClick: () => S(!0),
				children: [
					o === "both" && /* @__PURE__ */ U(lr, {
						bidColor: A,
						askColor: k,
						listColor: j
					}),
					o === "asks" && /* @__PURE__ */ U(dr, {
						askColor: k,
						listColor: j
					}),
					o === "bids" && /* @__PURE__ */ U(ur, {
						bidColor: A,
						listColor: j
					})
				]
			}), /* @__PURE__ */ W("div", {
				ref: C,
				style: { position: "relative" },
				children: [/* @__PURE__ */ W(Tr, {
					type: "button",
					"aria-haspopup": "listbox",
					"aria-expanded": y,
					onClick: () => b((e) => !e),
					children: [
						l,
						" ",
						/* @__PURE__ */ U(s, {
							width: "14px",
							"aria-hidden": "true"
						})
					]
				}), y && /* @__PURE__ */ U(Er, {
					role: "listbox",
					children: _.map((e) => /* @__PURE__ */ U(Dr, {
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
			x && typeof document < "u" && ee(/* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(Or, { onClick: () => S(!1) }), /* @__PURE__ */ W(kr, {
				role: "dialog",
				"aria-label": f("Choose view"),
				children: [/* @__PURE__ */ U(Ar, {}), O.map((e) => /* @__PURE__ */ W(jr, {
					type: "button",
					$active: o === e.key,
					onClick: () => {
						c(e.key), S(!1);
					},
					children: [/* @__PURE__ */ U("span", { children: e.label }), o === e.key && /* @__PURE__ */ U(Mr, { children: "✓" })]
				}, e.key))]
			})] }), document.body)
		]
	});
}, Pr = (e) => {
	let { isMobile: t } = h();
	return U(t ? Nr : Fr, { ...e });
}, Fr = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = fr }) => {
	let g = V(), _ = d === "QUOTE" ? r : n, v = F(() => or(i, o), [i, o]);
	M(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = F(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = nr(e, "ask", i, r, a), s = nr(t, "bid", i, r, a), c = In * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
	}, x = F(() => b([...y.asks].reverse()).reverse(), [y.asks, d]), S = F(() => b(y.bids), [y.bids, d]), C = F(() => {
		let e = x[0]?.total ?? 0, t = S[S.length - 1]?.total ?? 0;
		return Math.max(e, t, 1);
	}, [x, S]), w = (e, t) => {
		let n = e === "bid" ? g.colors.success : g.colors.failure, r = Math.max(0, Math.min(100, t * 100)).toFixed(2);
		return { background: `linear-gradient(to right, ${`color-mix(in srgb, ${n} 30%, transparent)`} 0%, ${`color-mix(in srgb, ${n} 10%, transparent)`} ${r}%, transparent ${r}%, transparent 100%)` };
	}, T = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), E = /* @__PURE__ */ W(H, { children: [
		/* @__PURE__ */ W(Rn, { children: [/* @__PURE__ */ W(zn, { children: [
			/* @__PURE__ */ U(Bn, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ U(lr, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ U(Bn, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ U(ur, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ U(Bn, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ U(dr, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ W(Gn, { children: [/* @__PURE__ */ U(cr, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ U(cr, {
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
		/* @__PURE__ */ W(Kn, { children: [
			/* @__PURE__ */ W("span", { children: [
				h("Price"),
				" (",
				r,
				")"
			] }),
			/* @__PURE__ */ W("span", {
				style: { textAlign: "center" },
				children: [
					h("Amount"),
					" (",
					_,
					")"
				]
			}),
			/* @__PURE__ */ W("span", {
				style: { textAlign: "right" },
				children: [
					h("SUM"),
					" (",
					_,
					")"
				]
			})
		] }),
		/* @__PURE__ */ W(qn, { children: [
			s !== "bids" && /* @__PURE__ */ U(Jn, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - In)).map((e) => /* @__PURE__ */ W(Yn, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ U(Xn, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ U(Zn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ U(Zn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ W(Qn, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ U($n, { children: h("Spread") }),
					/* @__PURE__ */ U(er, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ U(tr, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ U(Jn, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? In * 2 : In).map((e) => /* @__PURE__ */ W(Yn, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ U(Xn, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ U(Zn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ U(Zn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `b-${e.price}`))
			})
		] })
	] });
	return m ? /* @__PURE__ */ U("div", {
		style: p ? { display: "none" } : { display: "contents" },
		children: E
	}) : /* @__PURE__ */ U(G, {
		style: p ? { display: "none" } : void 0,
		children: E
	});
}, Ir = B(G)`
  flex: 1;
  min-height: 200px;
`, Lr = B.div`
  padding: 8px 12px 12px;
  /* Horizontal scroll appears once the table body is wider than the
   * panel — at that point the trailing TP/SL + Close action group is
   * pushed off-screen and the user can scroll right to reach it. The
   * scrollbar styling matches Figma 76:12504: a 4px thin pill, sized
   * down from the browser default (12–17px) so it sits unobtrusively
   * at the bottom of the panel. */
  overflow-x: auto;
  flex: 1;
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: ${({ theme: e }) => e.colors.textSubtle} transparent;

  &::-webkit-scrollbar {
    height: 4px;
    /* appearance:none opts out of macOS overlay scrollbars (which
     * auto-hide unless the cursor is moving over them). With our
     * styled track and thumb the scrollbar paints inset, so users
     * always see a clear "more content to the right" affordance when
     * the table overflows. */
    -webkit-appearance: none;
    appearance: none;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme: e }) => e.colors.textSubtle};
    border-radius: 999px;
  }
`, Rr = B(E)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, zr = B.div`
  display: grid;
  grid-template-columns: 108px 96px 96px 96px 96px 96px 152px 152px auto;
  column-gap: 0;
  /* Row gap is 0 so the active/hover bg of one row sits flush against
   * the next row — matches the responsive Figma 75:12034 where the
   * card-secondary bg of the active row directly touches the next
   * row, with no visible breathing strip between them. */
  row-gap: 0;
  font-variant-numeric: tabular-nums;
`, Br = B.div`
  display: contents;
  /* Padding lives on the cells (RowGroup is display:contents so any
   * padding set here would be dropped). 8px each side combines with the
   * neighbour's 8px to produce the 16px content gap from Figma, while
   * keeping the cells flush so the hover strip is unbroken. */
  & > * {
    padding: 8px;
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
`, Vr = B.div`
  display: grid;
  grid-template-columns: 108px 96px 96px 96px 96px 96px 152px 152px auto;
  column-gap: 0;
  align-items: center;
  padding: 8px 0;

  & > * {
    padding-left: 8px;
    padding-right: 8px;
  }
`, Hr = B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-right: 12px;
  gap: 12px;
  container-type: inline-size;
  container-name: positions-tabs-header;
`, Ur = B.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  min-width: 0;
  overflow: hidden;
  position: relative;

  & > *:not([data-overlay]) {
    flex-shrink: 0;
  }
`, Wr = B.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    ${({ theme: e }) => e.colors.backgroundAlt} 60%,
    ${({ theme: e }) => e.colors.backgroundAlt} 100%
  );
  color: ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0;
  transition: opacity 0.12s;

  @container positions-tabs-header (max-width: 1024px) {
    opacity: 1;
  }
`, Gr = B.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`, Kr = B.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #02919D;
  font-feature-settings: 'liga' off;

  html.dark & {
    color: #48D0DB;
  }
`, qr = B.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #02919D;
  font-feature-settings: 'liga' off;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  html.dark & {
    color: #48D0DB;
  }
`, Jr = B(E)`
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`, Yr = B.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  white-space: nowrap;
`, Xr = B.span`
  font-size: ${({ $size: e }) => e ?? "12px"};
  letter-spacing: 0.12px;
  color: ${({ $color: e, theme: t }) => e ?? t.colors.textSubtle};
  display: inline-flex;
  align-items: center;
  gap: 4px;
`, Zr = B.span`
  color: ${({ $up: e }) => e ? "#129E7D" : "#D8376C"};
  font-family: Kanit;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  font-feature-settings: 'liga' off;
  white-space: nowrap;

  html.dark & {
    color: ${({ $up: e }) => e ? "#3DDBB5" : "#FFA3D0"};
  }
`, Qr = B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding-top: 2px;
`, $r = B.span`
  width: 2px;
  height: 8px;
  background: ${({ $variant: e, theme: t }) => e === "destructive" ? t.colors.failure : t.colors.text};
`, ei = B.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
`;
B.span`
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
`;
var ti = B.span`
  display: inline-flex;
  align-items: center;
  cursor: help;
  color: inherit;
  margin-left: 4px;
`;
B.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`;
var ni = B.div`
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
`, ri = R`
  max-height: 360px;
  overflow-y: auto;
`, ii = B.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${ri}
`, ai = B.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${ri}
`, oi = B.div`
  display: grid;
  grid-template-columns: 148px 156px minmax(min-content, 0.6fr) repeat(5, minmax(min-content, 1fr));
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${ri}
`, si = B.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, ci = B.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, li = B.button`
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  color: ${({ theme: e }) => e.colors.text};
  transition: opacity 0.12s;
  &:hover:not(:disabled) {
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`, Y = B(r).attrs({
	fontSize: "12px",
	color: "textSubtle"
})`
  font-family: Kanit;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  opacity: 0.6;
  display: inline-flex;
  align-items: center;
  /* Anchor the header row when the history tables overflow + scroll.
     position: sticky is a no-op when the parent doesn't scroll, so
     this is also safe on the Positions / Open Orders tables (which
     don't use the scroll mixin today). */
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme: e }) => e.colors.card};
`, X = B(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  font-family: Kanit;
  line-height: 1.5;
  white-space: nowrap;
`, ui = (e) => e, di = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: i, onShare: a, closingSymbol: o, t: s }) => {
	let c = V(), l = t?.(e.symbol), u = e.positionAmt >= 0 ? "BUY" : "SELL", d = Number.isFinite(l) && Number.isFinite(e.entryPrice) ? (l - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), f = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: u,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, p = o === e.symbol, m = Math.abs(e.positionAmt), h = Number.isFinite(e.entryPrice) ? m * e.entryPrice : NaN, g = Number.isFinite(h) && e.leverage > 0 ? h / e.leverage : NaN, _ = Number.isFinite(d) && Number.isFinite(g) && g > 0 ? d / g * 100 : NaN, v = !Number.isFinite(d) || d >= 0 ? c.colors.success : c.colors.failure, y = (e) => e.toLocaleString(void 0, {
		maximumFractionDigits: 2,
		minimumFractionDigits: 1
	});
	return /* @__PURE__ */ W(H, { children: [
		/* @__PURE__ */ W(Yr, { children: [/* @__PURE__ */ U("span", { children: e.symbol }), /* @__PURE__ */ W(Xr, { children: [/* @__PURE__ */ W(Zr, {
			$up: u === "BUY",
			children: [
				s(u === "BUY" ? "Buy" : "Sell"),
				" ",
				e.leverage,
				"x"
			]
		}), /* @__PURE__ */ U(Qr, {
			"aria-hidden": !0,
			children: [
				0,
				1,
				2,
				3
			].map((e) => /* @__PURE__ */ U($r, { $variant: e === 0 ? "destructive" : "fill" }, e))
		})] })] }),
		/* @__PURE__ */ W(Yr, { children: [/* @__PURE__ */ U("span", { children: Number.isFinite(m) ? m : "—" }), /* @__PURE__ */ U(Xr, { children: "USDT" })] }),
		/* @__PURE__ */ U(X, {
			as: "div",
			children: Number.isFinite(e.entryPrice) ? y(e.entryPrice) : "—"
		}),
		/* @__PURE__ */ U(X, {
			as: "div",
			children: l !== void 0 && Number.isFinite(l) ? y(l) : "—"
		}),
		/* @__PURE__ */ U(X, {
			as: "div",
			children: Number.isFinite(g) ? `${g.toFixed(2)} USDT` : "—"
		}),
		/* @__PURE__ */ U(X, {
			as: "div",
			children: Number.isFinite(f) ? y(f) : "—"
		}),
		/* @__PURE__ */ W(Yr, { children: [/* @__PURE__ */ W(E, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ U("span", {
				style: { color: v },
				children: Number.isFinite(d) ? `${d >= 0 ? "+" : ""}${d.toFixed(2)} USDT` : "—"
			}), /* @__PURE__ */ U(li, {
				type: "button",
				"aria-label": s("Share position"),
				onClick: () => a?.(e),
				disabled: !a,
				children: /* @__PURE__ */ U(fi, {})
			})]
		}), /* @__PURE__ */ U("span", {
			style: {
				color: v,
				fontSize: 14,
				lineHeight: 1.5
			},
			children: Number.isFinite(_) ? `${_ >= 0 ? "+" : ""}${_.toFixed(2)}%` : "—"
		})] }),
		/* @__PURE__ */ W(ei, { children: [/* @__PURE__ */ U("span", { children: e.tpStopPrice ? y(Number(e.tpStopPrice)) : "--" }), /* @__PURE__ */ U("span", { children: e.slStopPrice ? y(Number(e.slStopPrice)) : "--" })] }),
		/* @__PURE__ */ W(Jr, { children: [/* @__PURE__ */ U(hi, {
			type: "button",
			onClick: () => i(e, l ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: s("TP / SL")
		}), /* @__PURE__ */ U(gi, {
			type: "button",
			onClick: () => r(e),
			disabled: p || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: p ? "…" : s("Close")
		})] })
	] });
}, fi = () => /* @__PURE__ */ U("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "21",
	height: "21",
	viewBox: "0 0 21 21",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M14.5833 13.3927C14.0661 13.3927 13.6033 13.6035 13.2494 13.9338L8.39708 11.0172C8.43111 10.8555 8.45833 10.6939 8.45833 10.5252C8.45833 10.3565 8.43111 10.1949 8.39708 10.0332L13.195 7.14466C13.5625 7.49607 14.0457 7.71394 14.5833 7.71394C15.7131 7.71394 16.625 6.77217 16.625 5.6055C16.625 4.43884 15.7131 3.49707 14.5833 3.49707C13.4536 3.49707 12.5417 4.43884 12.5417 5.6055C12.5417 5.77418 12.5689 5.93583 12.6029 6.09747L7.805 8.98603C7.4375 8.63462 6.95431 8.41675 6.41667 8.41675C5.28694 8.41675 4.375 9.35852 4.375 10.5252C4.375 11.6918 5.28694 12.6336 6.41667 12.6336C6.95431 12.6336 7.4375 12.4157 7.805 12.0643L12.6506 14.988C12.6165 15.1356 12.5961 15.2902 12.5961 15.4449C12.5961 16.5764 13.4876 17.4971 14.5833 17.4971C15.679 17.4971 16.5706 16.5764 16.5706 15.4449C16.5706 14.3133 15.679 13.3927 14.5833 13.3927Z",
		fill: "currentColor"
	})
}), pi = () => /* @__PURE__ */ U("svg", {
	width: "21",
	height: "21",
	viewBox: "0 0 21 21",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M7.875 4.375L13.7813 10.5L7.875 16.625",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), mi = () => /* @__PURE__ */ W("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ U("circle", {
			cx: "12",
			cy: "12",
			r: "9.25",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}),
		/* @__PURE__ */ U("path", {
			d: "M9.5 9.5a2.5 2.5 0 015 0c0 1.4-1 1.9-1.7 2.4-.5.4-.8.7-.8 1.3v.4",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ U("circle", {
			cx: "12",
			cy: "17",
			r: "0.9",
			fill: "currentColor"
		})
	]
}), hi = B.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  padding: 3px 8px 5px;
  border-radius: 8px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  background: ${({ theme: e }) => e.colors.tertiary};
  color: #02919D;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.12px;
  cursor: pointer;
  transition: opacity 0.12s, transform 0.04s;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
    border-bottom-width: 1px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  html.dark & {
    color: #48D0DB;
  }
`, gi = B.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme: e }) => e.colors.primary};
  background: transparent;
  color: #02919D;
  font-family: Kanit;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.12px;
  cursor: pointer;
  transition: opacity 0.12s, background 0.12s;

  &:hover:not(:disabled) {
    background: ${({ theme: e }) => e.colors.primary}1A;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  html.dark & {
    color: #48D0DB;
  }
`, _i = (e) => {
	let { isMobile: t } = h();
	return e.isMobile ?? t ? /* @__PURE__ */ U(na, { ...e }) : /* @__PURE__ */ U(vi, { ...e });
}, vi = ({ tab: e, onTabChange: t, positions: n, openOrders: a, orderHistory: o = [], tradeHistory: s = [], transactionHistory: c = [], onShareTrade: u, useMarkPriceForSymbol: d, computeLiqPrice: f, onClosePosition: p, onEditTpSl: m, onCancelOrder: h, closingSymbol: g = null, cancellingOrderId: _ = null, hideOtherSymbols: v = !1, onHideOtherSymbolsChange: y, onCloseAll: b, onSharePnl: x, t: S = ui }) => {
	let C = V(), w = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	], D = w.indexOf(e), { targetRef: O, tooltip: k } = T(S("Return on equity — uPnL ÷ initial margin."), {
		placement: "top",
		oneLine: !0
	});
	return /* @__PURE__ */ W(Ir, { children: [/* @__PURE__ */ W(Hr, { children: [/* @__PURE__ */ W(Ur, { children: [/* @__PURE__ */ W(ne, {
		activeIndex: D,
		onItemClick: (e) => t(w[e]),
		noBorder: !0,
		children: [
			/* @__PURE__ */ W(q, { children: [
				S("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				S("Open Orders"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				S("Order History"),
				" (",
				o.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				S("Trade History"),
				" (",
				s.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				S("Transaction History"),
				" (",
				c.length,
				")"
			] })
		]
	}), /* @__PURE__ */ U(Wr, {
		"data-overlay": !0,
		"aria-hidden": !0,
		children: /* @__PURE__ */ U(pi, {})
	})] }), e === "positions" && /* @__PURE__ */ W(Gr, { children: [/* @__PURE__ */ W(Kr, { children: [/* @__PURE__ */ U(l, {
		scale: "sm",
		checked: v,
		onChange: (e) => y?.(e.target.checked)
	}), /* @__PURE__ */ U("span", { children: S("Hide Other Symbols") })] }), b && /* @__PURE__ */ U(qr, {
		type: "button",
		onClick: b,
		disabled: n.length === 0,
		children: S("Close All")
	})] })] }), /* @__PURE__ */ W(Lr, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ U(Rr, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: S("No open positions")
		}) }) : /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(Vr, { children: [
			/* @__PURE__ */ U(Y, { children: S("Symbol") }),
			/* @__PURE__ */ U(Y, { children: S("Size") }),
			/* @__PURE__ */ U(Y, { children: S("Entry Price") }),
			/* @__PURE__ */ U(Y, { children: S("Mark Price") }),
			/* @__PURE__ */ U(Y, { children: S("Margin") }),
			/* @__PURE__ */ U(Y, { children: S("Liq Price") }),
			/* @__PURE__ */ W(Y, { children: [
				S("PNL (ROE%)"),
				/* @__PURE__ */ U(ti, {
					ref: O,
					"aria-label": S("PNL ROE% explanation"),
					children: /* @__PURE__ */ U(mi, {})
				}),
				k
			] }),
			/* @__PURE__ */ U(Y, { children: S("TP/SL") }),
			/* @__PURE__ */ U(Y, {})
		] }), /* @__PURE__ */ U(zr, { children: n.map((e) => /* @__PURE__ */ U(Br, { children: /* @__PURE__ */ U(di, {
			p: e,
			useMarkPriceForSymbol: d,
			computeLiqPrice: f,
			onClose: p,
			onEditTpSl: m,
			onShare: x,
			closingSymbol: g,
			t: S
		}) }, e.id)) })] })),
		e === "orders" && (a.length === 0 ? /* @__PURE__ */ U(Rr, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: S("No open orders")
		}) }) : /* @__PURE__ */ W(ni, { children: [
			/* @__PURE__ */ U(Y, { children: S("Symbol") }),
			/* @__PURE__ */ U(Y, { children: S("Side") }),
			/* @__PURE__ */ U(Y, { children: S("Type") }),
			/* @__PURE__ */ U(Y, { children: S("Price") }),
			/* @__PURE__ */ U(Y, { children: S("Size") }),
			/* @__PURE__ */ U(Y, { children: S("Filled") }),
			/* @__PURE__ */ U(Y, { children: S("Status") }),
			/* @__PURE__ */ U(Y, {}),
			a.map((e) => {
				let t = _ === e.id;
				return /* @__PURE__ */ W(Br, { children: [
					/* @__PURE__ */ U(X, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ U(X, {
						style: { color: e.side === "BUY" ? C.colors.success : C.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ U(X, { children: e.type }),
					/* @__PURE__ */ U(X, { children: e.price }),
					/* @__PURE__ */ U(X, { children: e.origQty }),
					/* @__PURE__ */ U(X, { children: e.executedQty }),
					/* @__PURE__ */ U(X, { children: e.status }),
					/* @__PURE__ */ U(Jr, { children: /* @__PURE__ */ U(i, {
						scale: "xs",
						variant: "secondary",
						disabled: t,
						isLoading: t,
						onClick: () => h(e),
						children: S("Cancel")
					}) })
				] }, e.id);
			})
		] })),
		e === "history" && (o.length === 0 ? /* @__PURE__ */ U(Rr, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: S("No order history")
		}) }) : /* @__PURE__ */ W(oi, { children: [
			/* @__PURE__ */ U(Y, { children: S("Time") }),
			/* @__PURE__ */ U(Y, { children: S("Symbol") }),
			/* @__PURE__ */ U(Y, { children: S("Side") }),
			/* @__PURE__ */ U(Y, { children: S("Type") }),
			/* @__PURE__ */ U(Y, { children: S("Price") }),
			/* @__PURE__ */ U(Y, { children: S("Size") }),
			/* @__PURE__ */ U(Y, { children: S("Filled") }),
			/* @__PURE__ */ U(Y, { children: S("Status") }),
			o.map((e) => /* @__PURE__ */ W(Br, { children: [
				/* @__PURE__ */ U(X, {
					as: "div",
					children: /* @__PURE__ */ W(si, { children: [/* @__PURE__ */ U("span", { children: e.date }), /* @__PURE__ */ U("span", { children: e.time })] })
				}),
				/* @__PURE__ */ U(X, {
					bold: !0,
					children: e.symbol
				}),
				/* @__PURE__ */ U(X, {
					style: { color: e.side === "BUY" ? C.colors.success : C.colors.failure },
					children: e.side
				}),
				/* @__PURE__ */ U(X, { children: e.type }),
				/* @__PURE__ */ U(X, { children: e.price }),
				/* @__PURE__ */ U(X, { children: e.origQty }),
				/* @__PURE__ */ U(X, { children: e.executedQty }),
				/* @__PURE__ */ U(X, { children: e.status })
			] }, e.id))
		] })),
		e === "trades" && (s.length === 0 ? /* @__PURE__ */ U(Rr, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: S("No trades yet")
		}) }) : /* @__PURE__ */ W(ii, { children: [
			/* @__PURE__ */ U(Y, { children: S("Time") }),
			/* @__PURE__ */ U(Y, { children: S("Symbol") }),
			/* @__PURE__ */ U(Y, { children: S("Price") }),
			/* @__PURE__ */ U(Y, { children: S("Quantity") }),
			/* @__PURE__ */ U(Y, { children: S("Fee") }),
			/* @__PURE__ */ U(Y, { children: S("Realized profit") }),
			s.map((e) => {
				let t = e.side === "BUY" ? C.colors.success : C.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ W(Br, { children: [
					/* @__PURE__ */ U(X, {
						as: "div",
						children: /* @__PURE__ */ W(si, { children: [/* @__PURE__ */ U("span", { children: e.date }), /* @__PURE__ */ U("span", { children: e.time })] })
					}),
					/* @__PURE__ */ U(X, {
						as: "div",
						children: /* @__PURE__ */ W(ci, { children: [/* @__PURE__ */ U("span", { children: e.symbol }), /* @__PURE__ */ U("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? S("Buy") : S("Sell")
						})] })
					}),
					/* @__PURE__ */ U(X, { children: e.price }),
					/* @__PURE__ */ U(X, { children: e.quantity }),
					/* @__PURE__ */ U(X, { children: e.fee }),
					/* @__PURE__ */ U(X, {
						as: "div",
						children: /* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ U("span", {
								style: { color: n ? C.colors.success : C.colors.failure },
								children: e.realizedProfit
							}), u && /* @__PURE__ */ U(li, {
								type: "button",
								onClick: () => u(e),
								"aria-label": S("Share trade"),
								children: /* @__PURE__ */ U("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ U("path", {
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
		e === "transactions" && (c.length === 0 ? /* @__PURE__ */ U(Rr, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: S("No transactions yet")
		}) }) : /* @__PURE__ */ W(ai, { children: [
			/* @__PURE__ */ U(Y, { children: S("Time") }),
			/* @__PURE__ */ U(Y, { children: S("Type") }),
			/* @__PURE__ */ U(Y, { children: S("Amount") }),
			/* @__PURE__ */ U(Y, { children: S("Symbol") }),
			c.map((e) => /* @__PURE__ */ W(Br, { children: [
				/* @__PURE__ */ U(X, {
					as: "div",
					children: /* @__PURE__ */ W(si, { children: [/* @__PURE__ */ U("span", { children: e.date }), /* @__PURE__ */ U("span", { children: e.time })] })
				}),
				/* @__PURE__ */ U(X, { children: e.type }),
				/* @__PURE__ */ U(X, { children: e.amount }),
				/* @__PURE__ */ U(X, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, yi = B.nav`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
`, bi = B.button`
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
`, xi = B.span`
  flex: 1;
`, Si = B.button`
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
`, Ci = B.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, wi = B.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Ti = B.button`
  background: transparent;
  border: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`, Ei = B.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`, Di = B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, Oi = B.div`
  display: flex;
  flex-direction: column;
`, ki = B.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
`, Ai = B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, ji = B.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Mi = B.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
`, Ni = B.span`
  flex: 1;
`, Pi = B.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ $up: e, theme: t }) => e ? t.colors.success : t.colors.failure};
`, Fi = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 12px;
`, Ii = B.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: e }) => e.colors.textSubtle};
  & > strong {
    color: ${({ theme: e }) => e.colors.text};
    font-weight: 500;
  }
`, Li = B.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`, Ri = B.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme: e }) => e.colors.card};
`, zi = B.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  display: flex;
  flex-direction: column;
`, Bi = B.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  flex-shrink: 0;
`, Vi = B.span`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, Hi = B.button`
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
`, Ui = B.nav`
  display: flex;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
  flex-shrink: 0;
`, Wi = B.button`
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
`, Gi = B.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0;
`, Ki = B.div`
  text-align: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
  padding: 48px 0;
`, qi = B.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  font-size: 13px;
  gap: 12px;
`, Ji = B.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, Yi = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-weight: 600;
`, Xi = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 12px;
`, Zi = B.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
`, Qi = [
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
], $i = ({ open: e, onClose: t, tab: n, onTabChange: r, orderHistory: i, tradeHistory: a, transactionHistory: o, t: s }) => {
	let c = V();
	return !e || typeof document > "u" ? null : ee(/* @__PURE__ */ W(zi, {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": s("History"),
		children: [
			/* @__PURE__ */ W(Bi, { children: [/* @__PURE__ */ U(Vi, { children: s("History") }), /* @__PURE__ */ U(Hi, {
				type: "button",
				"aria-label": s("Close"),
				onClick: t,
				children: /* @__PURE__ */ U(b, {
					width: "20px",
					"aria-hidden": "true"
				})
			})] }),
			/* @__PURE__ */ U(Ui, {
				role: "tablist",
				children: Qi.map((e) => /* @__PURE__ */ U(Wi, {
					type: "button",
					role: "tab",
					"aria-selected": n === e.key,
					$active: n === e.key,
					onClick: () => r(e.key),
					children: s(e.label)
				}, e.key))
			}),
			/* @__PURE__ */ W(Gi, { children: [
				n === "orders" && (i.length === 0 ? /* @__PURE__ */ U(Ki, { children: s("No order history yet") }) : i.map((e) => /* @__PURE__ */ W(qi, { children: [/* @__PURE__ */ W(Ji, { children: [
					/* @__PURE__ */ W(Yi, { children: [
						e.symbol,
						" ",
						/* @__PURE__ */ U("span", {
							style: {
								color: e.side === "BUY" ? c.colors.success : c.colors.failure,
								fontWeight: 400
							},
							children: e.side === "BUY" ? s("Buy") : s("Sell")
						})
					] }),
					/* @__PURE__ */ W(Xi, { children: [
						e.date,
						" ",
						e.time
					] }),
					/* @__PURE__ */ W(Xi, { children: [
						e.type,
						" · ",
						e.price,
						" · ",
						e.executedQty,
						"/",
						e.origQty
					] })
				] }), /* @__PURE__ */ U(Zi, { children: /* @__PURE__ */ U("span", {
					style: {
						color: c.colors.textSubtle,
						fontSize: 12
					},
					children: e.status
				}) })] }, e.id))),
				n === "trades" && (a.length === 0 ? /* @__PURE__ */ U(Ki, { children: s("No trade history yet") }) : a.map((e) => {
					let t = e.realizedProfit.startsWith("+");
					return /* @__PURE__ */ W(qi, { children: [/* @__PURE__ */ W(Ji, { children: [
						/* @__PURE__ */ W(Yi, { children: [
							e.symbol,
							" ",
							/* @__PURE__ */ U("span", {
								style: {
									color: e.side === "BUY" ? c.colors.success : c.colors.failure,
									fontWeight: 400
								},
								children: e.side === "BUY" ? s("Buy") : s("Sell")
							})
						] }),
						/* @__PURE__ */ W(Xi, { children: [
							e.date,
							" ",
							e.time
						] }),
						/* @__PURE__ */ W(Xi, { children: [
							e.price,
							" · ",
							e.quantity,
							" · ",
							s("fee"),
							" ",
							e.fee
						] })
					] }), /* @__PURE__ */ U(Zi, { children: /* @__PURE__ */ U("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.realizedProfit
					}) })] }, e.id);
				})),
				n === "tx" && (o.length === 0 ? /* @__PURE__ */ U(Ki, { children: s("No transactions yet") }) : o.map((e) => {
					let t = e.amount.startsWith("+");
					return /* @__PURE__ */ W(qi, { children: [/* @__PURE__ */ W(Ji, { children: [/* @__PURE__ */ U(Yi, { children: e.type }), /* @__PURE__ */ W(Xi, { children: [
						e.date,
						" ",
						e.time
					] })] }), /* @__PURE__ */ W(Zi, { children: [/* @__PURE__ */ U("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.amount
					}), /* @__PURE__ */ U(Xi, { children: e.symbol })] })] }, e.id);
				}))
			] })
		]
	}), document.body);
}, ea = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: a, closingSymbol: o, t: s }) => {
	let c = t?.(e.symbol), l = e.positionAmt >= 0 ? "BUY" : "SELL", u = Number.isFinite(c) && Number.isFinite(e.entryPrice) ? (c - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), d = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: l,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, f = o === e.symbol, p = Math.abs(e.positionAmt);
	return /* @__PURE__ */ W(ki, { children: [
		/* @__PURE__ */ W(Ai, { children: [
			/* @__PURE__ */ U(ji, { children: e.symbol }),
			/* @__PURE__ */ W(Mi, {
				$side: l,
				children: [
					s(l === "BUY" ? "Long" : "Short"),
					" · ",
					e.leverage,
					"x"
				]
			}),
			/* @__PURE__ */ U(Ni, {}),
			/* @__PURE__ */ U(Pi, {
				$up: u >= 0,
				children: Number.isFinite(u) ? `${u >= 0 ? "+" : ""}${u.toFixed(4)}` : "—"
			})
		] }),
		/* @__PURE__ */ W(Fi, { children: [
			/* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: s("Size") }), /* @__PURE__ */ U("strong", { children: p })] }),
			/* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: s("Entry") }), /* @__PURE__ */ U("strong", { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: s("Mark") }), /* @__PURE__ */ U("strong", { children: c !== void 0 && Number.isFinite(c) ? c.toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: s("Liq") }), /* @__PURE__ */ U("strong", { children: d ? d.toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: s("TP") }), /* @__PURE__ */ U("strong", { children: e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: s("SL") }), /* @__PURE__ */ U("strong", { children: e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—" })] })
		] }),
		/* @__PURE__ */ W(Li, { children: [/* @__PURE__ */ U(i, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => a(e, c ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: s("TP/SL")
		}), /* @__PURE__ */ U(i, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: f || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: f,
			children: s("Close")
		})] })
	] });
}, ta = ({ o: e, onCancel: t, cancellingOrderId: n, t: r }) => {
	let a = n === e.id;
	return /* @__PURE__ */ W(ki, { children: [
		/* @__PURE__ */ W(Ai, { children: [
			/* @__PURE__ */ U(ji, { children: e.symbol }),
			/* @__PURE__ */ W(Mi, {
				$side: e.side,
				children: [
					e.side === "BUY" ? r("Buy") : r("Sell"),
					" · ",
					e.type
				]
			}),
			/* @__PURE__ */ U(Ni, {}),
			/* @__PURE__ */ U("span", {
				style: {
					fontSize: 12,
					color: "inherit"
				},
				children: e.status
			})
		] }),
		/* @__PURE__ */ W(Fi, { children: [/* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: r("Price") }), /* @__PURE__ */ U("strong", { children: e.price })] }), /* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ U("span", { children: r("Filled") }), /* @__PURE__ */ W("strong", { children: [
			e.executedQty,
			"/",
			e.origQty
		] })] })] }),
		/* @__PURE__ */ U(Li, { children: /* @__PURE__ */ U(i, {
			scale: "xs",
			variant: "secondary",
			disabled: a,
			isLoading: a,
			onClick: () => t(e),
			children: r("Cancel")
		}) })
	] });
}, na = ({ tab: e, onTabChange: t, positions: n, openOrders: r, orderHistory: i = [], tradeHistory: a = [], transactionHistory: c = [], onClosePosition: l, onEditTpSl: u, onCancelOrder: d, useMarkPriceForSymbol: f, computeLiqPrice: p, closingSymbol: m, cancellingOrderId: h, positionsCount: g, hideOtherSymbols: _ = !1, onHideOtherSymbolsChange: v, instrumentFilterLabel: y, onInstrumentFilterClick: b, historyOpen: x = !1, onHistoryToggle: S, historyTab: C = "orders", onHistoryTabChange: w, t: T = ui }) => {
	let E = [
		{
			key: "orders",
			label: T("Open Orders"),
			count: r.length,
			emptyText: T("No open order found")
		},
		{
			key: "positions",
			label: T("Positions"),
			count: g ?? n.length,
			emptyText: T("No open positions")
		},
		{
			key: "assets",
			label: T("Assets"),
			emptyText: T("No assets to display")
		},
		{
			key: "twap",
			label: T("TWAP"),
			emptyText: T("No TWAP orders")
		}
	], D = E.find((t) => t.key === e) ?? E[0], O = (n) => {
		n !== e && t(n);
	};
	return /* @__PURE__ */ W(Ri, { children: [
		/* @__PURE__ */ W(yi, {
			role: "tablist",
			children: [
				E.map((t) => /* @__PURE__ */ W(bi, {
					type: "button",
					role: "tab",
					"aria-selected": t.key === e,
					$active: t.key === e,
					onClick: () => O(t.key),
					children: [t.label, typeof t.count == "number" && t.count > 0 ? ` (${t.count})` : ""]
				}, t.key)),
				/* @__PURE__ */ U(xi, {}),
				/* @__PURE__ */ U(Si, {
					type: "button",
					"aria-label": T("History"),
					onClick: () => S?.(!0),
					children: /* @__PURE__ */ U(o, {
						width: "20px",
						"aria-hidden": "true"
					})
				})
			]
		}),
		/* @__PURE__ */ W(Ci, { children: [
			/* @__PURE__ */ W(Ti, {
				type: "button",
				onClick: b,
				children: [
					y ?? T("All instruments"),
					" ",
					/* @__PURE__ */ U(s, {
						width: "14px",
						"aria-hidden": "true"
					})
				]
			}),
			/* @__PURE__ */ U(wi, {}),
			/* @__PURE__ */ W(Ei, { children: [/* @__PURE__ */ U("input", {
				type: "checkbox",
				checked: _,
				onChange: (e) => v?.(e.target.checked)
			}), /* @__PURE__ */ U("span", { children: T("Hide other symbols") })] })
		] }),
		e === "positions" && n.length > 0 ? /* @__PURE__ */ U(Oi, { children: n.map((e) => /* @__PURE__ */ U(ea, {
			p: e,
			useMarkPriceForSymbol: f,
			computeLiqPrice: p,
			onClose: l,
			onEditTpSl: u,
			closingSymbol: m,
			t: T
		}, e.id)) }) : e === "orders" && r.length > 0 ? /* @__PURE__ */ U(Oi, { children: r.map((e) => /* @__PURE__ */ U(ta, {
			o: e,
			onCancel: d,
			cancellingOrderId: h,
			t: T
		}, e.id)) }) : /* @__PURE__ */ U(Di, { children: D.emptyText }),
		/* @__PURE__ */ U($i, {
			open: x,
			onClose: () => S?.(!1),
			tab: C,
			onTabChange: (e) => w?.(e),
			orderHistory: i,
			tradeHistory: a,
			transactionHistory: c,
			t: T
		})
	] });
}, ra = (e) => {
	if (!e) return "";
	let t = e.startsWith("-"), [n = "", r] = (t ? e.slice(1) : e).split("."), i = n.replace(/\B(?=(\d{3})+(?!\d))/g, ","), a = r === void 0 ? i : `${i}.${r}`;
	return t ? `-${a}` : a;
}, ia = (e) => e === "" || e === "-" ? "" : e.startsWith("-") ? e.slice(1) : e, aa = (e) => {
	if (e === "" || e === "-") return e;
	let t = Number(e);
	return !Number.isFinite(t) || t === 0 ? e.startsWith("-") ? e.slice(1) : e : e.startsWith("-") ? e : `-${e}`;
};
function oa(e, t) {
	let n = I(null);
	return {
		ref: n,
		value: ra(e),
		onChange: (e) => {
			let r = e.target, i = r.value, a = r.selectionStart ?? i.length, o = i.slice(0, a).replace(/[,-]/g, "").length, s = i.replace(/,/g, "");
			s !== "" && !/^-?\d*\.?\d*$/.test(s) || (t(s), requestAnimationFrame(() => {
				let e = n.current;
				if (!e) return;
				let t = e.value, r = 0, i = 0;
				for (; r < t.length && i < o;) t[r] !== "," && t[r] !== "-" && (i += 1), r += 1;
				r === 0 && t.startsWith("-") && (r = 1), e.setSelectionRange(r, r);
			}));
		}
	};
}
//#endregion
//#region src/widgets/TpSlModal.tsx
var sa = B(E)`
  flex-direction: column;
  gap: 8px;
`, ca = B(E)`
  gap: 8px;
`, la = B.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, ua = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, da = B(v)`
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
`, fa = B(E)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, pa = (e) => e, ma = ({ isOpen: e, symbol: t, positionSide: n, qty: a, entryPrice: o, markPrice: s, onConfirm: c, onClose: l, t: u = pa }) => {
	let d = V(), p = n === "LONG" ? 1 : -1, [m, h] = L(""), [_, v] = L(""), [y, b] = L(""), [x, C] = L(""), [w, T] = L(!1);
	M(() => {
		e || (h(""), v(""), b(""), C(""));
	}, [e]);
	let D = (e) => a > 0 ? o + p * e / a : NaN, O = (e) => a > 0 ? p * (e - o) * a : NaN, k = (e, t) => Number.isFinite(e) ? e.toFixed(t) : "", A = (e) => {
		if (h(e), e === "") return v("");
		let t = Number(e);
		v(Number.isFinite(t) ? k(O(t), 4) : "");
	}, j = (e) => {
		let t = ia(e);
		if (v(t), t === "" || t === "-") return h("");
		let n = Number(t);
		h(Number.isFinite(n) ? k(D(n), 2) : "");
	}, N = (e) => {
		if (b(e), e === "") return C("");
		let t = Number(e);
		C(Number.isFinite(t) ? k(O(t), 4) : "");
	}, P = (e) => {
		let t = aa(e);
		if (C(t), t === "" || t === "-") return b("");
		let n = Number(t);
		b(Number.isFinite(n) ? k(D(n), 2) : "");
	}, I = F(() => {
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
	]), R = !w && (m !== "" || y !== "") && !I, z = async () => {
		if (R) {
			T(!0);
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
				T(!1);
			}
		}
	};
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: u("Set TP / SL"),
			onDismiss: l,
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ W(fa, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Symbol")
					}), /* @__PURE__ */ W(r, {
						fontSize: "14px",
						bold: !0,
						style: { color: n === "LONG" ? d.colors.success : d.colors.failure },
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ W(fa, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Entry")
					}), /* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? ra(o.toFixed(2)) : "—"
					})] }),
					/* @__PURE__ */ W(fa, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Mark")
					}), /* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(s) ? ra(s.toFixed(2)) : "—"
					})] }),
					/* @__PURE__ */ U(la, {}),
					/* @__PURE__ */ W(sa, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.success,
						children: u("Take Profit")
					}), /* @__PURE__ */ W(ca, { children: [/* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(ua, { children: u("Trigger Price") }), /* @__PURE__ */ U(da, {
							...oa(m, A),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(ua, { children: u("PnL (USDT)") }), /* @__PURE__ */ U(da, {
							...oa(_, j),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ W(sa, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.failure,
						children: u("Stop Loss")
					}), /* @__PURE__ */ W(ca, { children: [/* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(ua, { children: u("Trigger Price") }), /* @__PURE__ */ U(da, {
							...oa(y, N),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(ua, { children: u("PnL (USDT)") }), /* @__PURE__ */ U(da, {
							...oa(x, P),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					I && /* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "failure",
						children: I
					}),
					/* @__PURE__ */ U(i, {
						onClick: z,
						disabled: !R,
						isLoading: w,
						scale: "md",
						children: u("Confirm")
					})
				]
			})
		})
	});
}, ha = [
	"1m",
	"5m",
	"15m",
	"1h",
	"4h",
	"1d"
], ga = B(G)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, _a = (e) => typeof e == "number" ? `${e}px` : e, va = B.div`
  border-bottom: 1px solid var(--pcs-colors-card-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, ya = B.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`, ba = B.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: 13px;
  cursor: pointer;
  color: var(--pcs-colors-text-subtle);
  ${({ $active: e }) => e && R`
      color: var(--pcs-colors-primary);
      font-weight: 700;
    `}
`, xa = B.div`
  position: relative;
  height: ${({ $minHeight: e }) => e}px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent) 0%,
    transparent 100%
  );
`, Sa = B.span`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(140px 60px at 18% 70%, color-mix(in srgb, var(--pcs-colors-primary) 18%, transparent), transparent 70%),
    radial-gradient(120px 50px at 42% 38%, color-mix(in srgb, var(--pcs-colors-success) 14%, transparent), transparent 70%),
    radial-gradient(160px 70px at 72% 55%, color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent), transparent 70%);
  border-bottom: 2px solid color-mix(in srgb, var(--pcs-colors-primary) 50%, transparent);
`, Ca = B.span`
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
`, wa = ({ children: e, timeframes: t = ha, activeTimeframe: n, onTimeframeChange: r, priceLabel: i, mobileMinHeight: a = 220 }) => {
	let o = O.Children.count(e) > 0;
	return /* @__PURE__ */ W(va, {
		"aria-label": "Price chart",
		children: [/* @__PURE__ */ U(ya, {
			role: "tablist",
			children: t.map((e) => {
				let t = e === n;
				return /* @__PURE__ */ U(ba, {
					type: "button",
					role: "tab",
					"aria-selected": t,
					$active: t,
					onClick: () => r?.(e),
					children: e
				}, e);
			})
		}), /* @__PURE__ */ W(xa, {
			$minHeight: a,
			children: [o ? e : /* @__PURE__ */ U(Sa, {}), i !== void 0 && /* @__PURE__ */ U(Ca, { children: i })]
		})]
	});
}, Ta = (e) => {
	let { isMobile: t } = h();
	if (t) return /* @__PURE__ */ U(wa, { ...e });
	let { children: n, minHeight: r = "420px" } = e;
	return /* @__PURE__ */ U(ga, {
		$minHeight: _a(r),
		children: n
	});
}, Ea = B(G)`
  height: 100%;
`, Da = B.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, Oa = B.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, ka = (e) => e, Aa = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = ka }) => /* @__PURE__ */ W(Ea, { children: [/* @__PURE__ */ W(ne, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ U(q, { children: i("Order Book") }), /* @__PURE__ */ U(q, { children: i("Trades") })]
}), /* @__PURE__ */ W(Da, { children: [/* @__PURE__ */ U(Oa, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ U(Oa, {
	$hidden: e !== "trades",
	children: r
})] })] }), ja = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='32'%20fill='none'%20viewBox='0%200%2015%2032'%3e%3cpath%20fill='%230098A1'%20d='M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z'/%3e%3cpath%20fill='%2353DEE9'%20d='M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z'/%3e%3c/svg%3e", Ma = "data:image/svg+xml,%3csvg%20width='24'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='19'%20width='17'%20height='11'%20fill='%231FC7D4'/%3e%3cpath%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'%20fill='%231FC7D4'/%3e%3cpath%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'%20fill='%231FC7D4'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20fill='url(%23paint0_linear_bunnyhead_main)'/%3e%3c/g%3e%3cg%20transform='translate(2)'%3e%3cpath%20d='M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z'%20fill='%23452A7A'/%3e%3cpath%20d='M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z'%20fill='%23452A7A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_main'%20x1='14'%20y1='1'%20x2='14'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Na = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='32'%20fill='none'%20viewBox='0%200%2028%2032'%3e%3crect%20width='17'%20height='11'%20x='1'%20y='19'%20fill='%231FC7D4'/%3e%3cpath%20fill='%231FC7D4'%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill='url(%23paint0_linear_bunnyhead_max)'%20fill-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787'/%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20width='28'%20height='28'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_max'%20x1='14'%20x2='14'%20y1='1'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/widgets/BunnySlider.tsx
function Pa({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = I(null), [u, d] = L(0);
	P(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999, _ = g ? Na : Ma;
	return /* @__PURE__ */ W(Fa, {
		ref: l,
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ U(Ia, { className: "bs-track" }),
			/* @__PURE__ */ U(Ra, {
				className: "bs-back",
				style: { backgroundImage: `url("${ja}")` }
			}),
			/* @__PURE__ */ U(La, {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ U(za, {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: {
					left: m,
					backgroundImage: `url("${_}")`
				}
			}),
			/* @__PURE__ */ U(Ba, {
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
			s && /* @__PURE__ */ U(Va, {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
var Fa = B.div`
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
`, Ia = B.span`
  position: absolute;
  left: 14px;
  right: 0;
  top: 18px;
  height: 2px;
  background: ${({ theme: e }) => e?.colors?.inputSecondary ?? "var(--pcs-colors-input-secondary, #D7CAEC)"};
  pointer-events: none;
`, La = B.span`
  position: absolute;
  left: 14px;
  top: 18px;
  height: 10px;
  background: ${({ theme: e }) => e?.colors?.primary ?? "var(--pcs-colors-primary, #1FC7D4)"};
  pointer-events: none;
  transition: width 60ms linear;
`, Ra = B.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 32px;
  pointer-events: none;
  background-size: 15px 32px;
  background-repeat: no-repeat;
`, za = B.span`
  position: absolute;
  top: 0;
  width: 24px;
  height: 32px;
  pointer-events: none;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  transition: left 60ms linear, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
`, Ba = B.input`
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
`, Va = B.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme: e }) => e?.colors?.textSubtle ?? "var(--pcs-colors-text-subtle)"};
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
`, Ha = B(G)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, Ua = B(E)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Wa = B.button`
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
`, Ga = B(E)`
  position: relative;
  display: flex;
  align-items: stretch;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.input};
  padding: 0;
  gap: 0;
  overflow: hidden;
`, Ka = B.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  border-radius: 12px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.10);
  background: ${({ $side: e }) => e === "BUY" ? "#31D0AA" : "#ED4B9E"};
  transform: translateX(${({ $side: e }) => e === "BUY" ? "0%" : "100%"});
  transition:
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.25s ease;
  pointer-events: none;
  z-index: 0;
`, qa = B(Ga)`
  &:has(button:active) ${Ka} {
    border-bottom-width: 0;
    bottom: -2px;
  }
`, Ja = B.button`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${({ $active: e, theme: t }) => e ? "#FFF" : t.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  line-height: 150%;
  cursor: pointer;
  transition: color 0.25s ease;

  html.dark & {
    color: ${({ $active: e, theme: t }) => e ? "#000" : t.colors.textSubtle};
  }
`, Ya = B.button`
  display: flex;
  flex: 1 0 0;
  padding: 3px 4px 5px 4px;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.10);
  border-radius: 12px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: #02919D;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.97);
  }
  &:active:not(:disabled) {
    border-bottom-width: 0;
    padding-bottom: 7px;
  }
`, Xa = B.span`
  display: flex;
  padding: 0 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`, Za = B(E)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, Qa = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, $a = B(E)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, eo = B.div`
  position: relative;
  display: flex;
  height: 48px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  gap: 8px;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645D9,
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`, to = B.span`
  pointer-events: none;
  flex-shrink: 0;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`, no = B.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, ro = B(i).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  gap: 4px;
  height: auto;
`, io = B.span`
  position: relative;
  display: inline-flex;
`, ao = B.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed #5B4776;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  cursor: help;
`, oo = B.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 200px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 8px;
  border-radius: 16px;
  background: #08060B;
  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.16),
    0 4px 8px 0 rgba(0, 0, 0, 0.32);
  pointer-events: none;
  z-index: 100;
  white-space: normal;
  text-align: center;

  /* Down-pointing notch — bottom edge of the bubble. Inherits the
     bubble's bg via currentColor so the color flip cascades. */
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid currentColor;
    color: #08060B;
  }

  html.dark & {
    background: #FFF;
    color: #000;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.08),
      0 4px 8px 0 rgba(0, 0, 0, 0.16);
    &::after {
      color: #FFF;
    }
  }
`, so = B.span`
  display: inline-flex;
  flex-shrink: 0;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, co = () => /* @__PURE__ */ U(so, { children: /* @__PURE__ */ U("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": !0,
	style: {
		flexShrink: 0,
		aspectRatio: "1 / 1"
	},
	children: /* @__PURE__ */ U("path", {
		d: "M2.72261 3.10042C2.52319 3.10042 2.3779 3.18542 2.28674 3.35542C2.19558 3.52542 2.20318 3.69303 2.30956 3.85825L5.59261 8.78348C5.69232 8.92783 5.82812 9 6.00001 9C6.17189 9 6.30769 8.92783 6.40741 8.78348L9.69046 3.85825C9.79683 3.69303 9.80444 3.52542 9.71328 3.35542C9.62212 3.18542 9.47683 3.10042 9.27741 3.10042H2.72261Z",
		fill: "currentColor"
	})
}) }), lo = B.div`
  position: relative;
  display: flex;
  height: 48px;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  gap: 8px;
  transition: box-shadow 0.12s;
  &:focus-within {
    box-shadow:
      0 0 0 1px #7645D9,
      0 0 0 4px rgba(118, 69, 217, 0.20);
  }
`, uo = B.input`
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-variant-numeric: tabular-nums;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, fo = B.button`
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
`, po = B.div`
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
`, mo = B.button`
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
`, ho = B.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, go = B(v)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, _o = ({ rawValue: e, onRawChange: t }) => /* @__PURE__ */ U(go, {
	...oa(e, t),
	placeholder: "0.00",
	inputMode: "decimal"
}), vo = B.div`
  padding: 4px 0;
`, yo = B(E)`
  gap: 8px;
`, bo = B.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, xo = B.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, So = ({ value: e, onChange: t }) => /* @__PURE__ */ W(bo, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ U(xo, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ U(xo, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), Co = B(i)`
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
`, wo = B.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, To = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  display: inline-flex;
  width: fit-content;
  justify-self: start;
  border-bottom: 1px dashed #5B4776;
  cursor: help;
`, Eo = B(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, Do = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Oo = B(E)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, ko = B(E)`
  gap: 6px;
`, Ao = B.button`
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
`, jo = B.button`
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
`, Mo = B.span`
  text-align: center;
`, No = B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
`, Po = B.input`
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
`, Fo = B.button`
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
`, Io = B(E)`
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
`, Lo = B(E)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.text};
`, Ro = B.div`
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
`, zo = B(E)`
  justify-content: space-between;
  align-items: center;
`, Bo = B.button`
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
`, Vo = B.div`
  position: fixed;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`, Ho = B.button`
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
`, Uo = [
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
], Wo = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: i, typeKey: a, onTypeKeyChange: o, availableBalanceText: c, preview: d, feeText: m, sizePercent: h, onSizePercentChange: g, cta: _, canSubmit: v, isSubmitting: y = !1, marginSubmitting: b = !1, authReady: S = !0, hasAddress: C = !0, errorSlot: w, onSubmit: T, onLeverageClick: E, onMarginModeToggle: D, onDepositClick: O, extraControls: k, t: A = Do }) => {
	let j = n.sizeUnit === "QUOTE" ? t : e, N = a === "stop-limit" || a === "stop-market", P = a === "limit" || a === "stop-limit", F = N, R = () => i({
		...n,
		sizeUnit: n.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), z = I(null), B = I(null), [V, H] = L(!1), [G, K] = L(null);
	M(() => {
		if (!V || !z.current) return;
		let e = z.current.getBoundingClientRect();
		K({
			top: e.bottom + 4,
			left: e.left,
			width: e.width
		});
	}, [V]), M(() => {
		if (!V) return;
		let e = (e) => {
			let t = e.target;
			z.current && !z.current.contains(t) && B.current && !B.current.contains(t) && H(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [V]);
	let te = Uo.find((e) => e.key === a)?.label ?? "Market", q = d.liq, ne = d.cost;
	return /* @__PURE__ */ W(Oo, { children: [
		/* @__PURE__ */ W(ko, { children: [
			/* @__PURE__ */ U(Ao, {
				disabled: b,
				onClick: D,
				children: n.marginMode === "CROSS" ? A("Cross") : A("Isolated")
			}),
			/* @__PURE__ */ U(Ao, {
				onClick: E,
				children: `${n.leverage}x`
			}),
			k
		] }),
		/* @__PURE__ */ W(jo, {
			ref: z,
			type: "button",
			"aria-haspopup": "listbox",
			"aria-expanded": V,
			onClick: () => H((e) => !e),
			children: [
				/* @__PURE__ */ U(x, {
					width: "14px",
					color: "textSubtle"
				}),
				/* @__PURE__ */ U(Mo, { children: A(te) }),
				/* @__PURE__ */ U(s, {
					width: "14px",
					color: "textSubtle"
				})
			]
		}),
		V && G && typeof document < "u" && ee(/* @__PURE__ */ U(Vo, {
			ref: B,
			role: "listbox",
			style: {
				top: G.top,
				left: G.left,
				width: G.width
			},
			children: Uo.map((e) => /* @__PURE__ */ U(Ho, {
				role: "option",
				"aria-selected": e.key === a,
				$active: e.key === a,
				onClick: () => {
					o(e.key), H(!1);
				},
				children: A(e.label)
			}, e.key))
		}), document.body),
		F && /* @__PURE__ */ W(No, { children: [
			/* @__PURE__ */ U(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: A("Stop")
			}),
			/* @__PURE__ */ U(Po, {
				value: n.stopPrice,
				onChange: (e) => i({
					...n,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": A("Stop price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ W(Fo, {
				type: "button",
				onClick: () => i({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				children: [n.stopPriceSource === "MARK" ? A("Mark") : A("Last"), /* @__PURE__ */ U(s, { width: "12px" })]
			})
		] }),
		P && /* @__PURE__ */ W(No, { children: [
			/* @__PURE__ */ U(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: A("Price")
			}),
			/* @__PURE__ */ U(Po, {
				value: n.price,
				onChange: (e) => i({
					...n,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": A("Limit price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ U(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: t
			})
		] }),
		/* @__PURE__ */ W(No, { children: [/* @__PURE__ */ U(Po, {
			value: n.quantity,
			onChange: (e) => i({
				...n,
				quantity: e.target.value
			}),
			placeholder: A("Size"),
			inputMode: "decimal"
		}), /* @__PURE__ */ W(Fo, {
			type: "button",
			onClick: R,
			children: [j, /* @__PURE__ */ U(s, { width: "12px" })]
		})] }),
		/* @__PURE__ */ U(f, { children: /* @__PURE__ */ U(Pa, {
			min: 0,
			max: 100,
			step: 1,
			value: h,
			onValueChanged: g
		}) }),
		/* @__PURE__ */ W(Io, { children: [
			/* @__PURE__ */ U("span", { children: A("Avbl") }),
			/* @__PURE__ */ U("strong", { children: `${c} ${t}` }),
			/* @__PURE__ */ U(p, {
				variant: "text",
				scale: "xs",
				onClick: O,
				"aria-label": A("Deposit"),
				style: {
					width: 18,
					height: 18,
					minWidth: 18,
					borderRadius: 999
				},
				children: /* @__PURE__ */ U(u, {
					color: "primary",
					width: "10px"
				})
			})
		] }),
		/* @__PURE__ */ W(Lo, { children: [/* @__PURE__ */ U(l, {
			scale: "sm",
			checked: n.tpSlEnabled,
			onChange: (e) => i({
				...n,
				tpSlEnabled: e.target.checked
			})
		}), /* @__PURE__ */ U("span", { children: A("TP/SL") })] }),
		/* @__PURE__ */ W(Lo, { children: [/* @__PURE__ */ U(l, {
			scale: "sm",
			checked: n.reduceOnly,
			onChange: (e) => i({
				...n,
				reduceOnly: e.target.checked
			})
		}), /* @__PURE__ */ U("span", { children: A("Reduce-Only") })] }),
		w,
		/* @__PURE__ */ W(Ro, {
			$tone: "up",
			children: [
				/* @__PURE__ */ W(zo, { children: [/* @__PURE__ */ U("span", { children: A("Est. liq. price") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: q
				})] }),
				/* @__PURE__ */ W(zo, { children: [/* @__PURE__ */ U("span", { children: A("Margin") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: ne
				})] }),
				/* @__PURE__ */ W(zo, { children: [/* @__PURE__ */ U("span", { children: A("Max") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ U(Bo, {
			type: "button",
			$side: "BUY",
			disabled: !v || y,
			onClick: () => T({ sideOverride: "BUY" }),
			children: A("Buy/Long")
		}),
		/* @__PURE__ */ W(Ro, {
			$tone: "down",
			children: [
				/* @__PURE__ */ W(zo, { children: [/* @__PURE__ */ U("span", { children: A("Est. liq. price") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: q
				})] }),
				/* @__PURE__ */ W(zo, { children: [/* @__PURE__ */ U("span", { children: A("Margin") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: ne
				})] }),
				/* @__PURE__ */ W(zo, { children: [/* @__PURE__ */ U("span", { children: A("Max") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ U(Bo, {
			type: "button",
			$side: "SELL",
			disabled: !v || y,
			onClick: () => T({ sideOverride: "SELL" }),
			children: A("Sell/Short")
		}),
		/* @__PURE__ */ W(r, {
			fontSize: "11px",
			color: "textSubtle",
			textAlign: "right",
			children: [
				A("Fees"),
				": ",
				m
			]
		})
	] });
}, Go = (e) => {
	let { isMobile: t } = h();
	if (t) return /* @__PURE__ */ U(Wo, { ...e });
	let { baseAsset: n, quoteAsset: i, draft: a, onDraftChange: o, typeKey: s, onTypeKeyChange: c, availableBalanceText: m, preview: g, feeText: _, sizePercent: v, onSizePercentChange: y, cta: b, canSubmit: x, isSubmitting: S = !1, marginSubmitting: C = !1, authReady: w = !0, hasAddress: T = !0, errorSlot: D, onSubmit: O, onLeverageClick: k, onMarginModeToggle: A, onDepositClick: j, extraControls: N, markPrice: P, priceDecimals: F = 2, t: R = Do } = e, z = a.sizeUnit === "QUOTE" ? i : n, B = (e) => o({
		...a,
		side: e
	}), V = () => o({
		...a,
		sizeUnit: a.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), G = () => o({
		...a,
		tpSlEnabled: !a.tpSlEnabled
	}), K = Number(a.price) || (typeof P == "number" ? P : 0), te = (() => {
		let e = Number(a.quantity);
		return !Number.isFinite(e) || e <= 0 ? 0 : a.sizeUnit === "BASE" ? e : K > 0 ? e / K : 0;
	})(), q = a.side === "BUY" ? 1 : -1, ne = K > 0 && te > 0, re = (e) => Number.isFinite(e) ? e.toFixed(2) : "", ie = (e) => Number.isFinite(e) ? e.toFixed(F) : "", J = (e) => e.replace(/,/g, ""), ae = (e) => {
		let t = Number(J(e));
		return !Number.isFinite(t) || !ne ? "" : re((t - K) * te * q);
	}, oe = (e) => {
		let t = Number(J(e));
		return !Number.isFinite(t) || !ne ? "" : ie(K + t * q / te);
	}, se = (e) => {
		let t = J(e);
		if (t === "") return o({
			...a,
			takeProfitPrice: "",
			takeProfitPnl: ""
		});
		o({
			...a,
			takeProfitPrice: t,
			takeProfitPnl: ae(t)
		});
	}, ce = (e) => {
		let t = ia(J(e));
		if (t === "" || t === "-") return o({
			...a,
			takeProfitPnl: "",
			takeProfitPrice: ""
		});
		o({
			...a,
			takeProfitPnl: t,
			takeProfitPrice: oe(t)
		});
	}, le = (e) => {
		let t = J(e);
		if (t === "") return o({
			...a,
			stopLossPrice: "",
			stopLossPnl: ""
		});
		o({
			...a,
			stopLossPrice: t,
			stopLossPnl: ae(t)
		});
	}, ue = (e) => {
		let t = aa(J(e));
		if (t === "" || t === "-") return o({
			...a,
			stopLossPnl: "",
			stopLossPrice: ""
		});
		o({
			...a,
			stopLossPnl: t,
			stopLossPrice: oe(t)
		});
	}, de = s === "stop-limit" || s === "stop-market", fe = s === "limit" || s === "stop-limit", pe = de, me = I(null), he = I(null), [ge, _e] = L(!1), [ve, ye] = L({
		top: 0,
		left: 0
	}), [be, xe] = L(!1), [Se, Ce] = L(!1), [we, Te] = L(null);
	M(() => {
		if (!ge || !me.current || !he.current) return;
		let e = me.current.getBoundingClientRect(), t = he.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		ye({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [ge]), M(() => {
		if (!ge) return;
		let e = (e) => {
			let t = e.target;
			me.current && !me.current.contains(t) && he.current && !he.current.contains(t) && _e(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [ge]);
	let Ee = de, De = s === "stop-market" ? `${R("Stop Market")} ▾` : `${R("Stop Limit")} ▾`, Oe = () => {
		_e((e) => !e);
	}, ke = (e) => {
		c(e), _e(!1);
	};
	return /* @__PURE__ */ W(Ha, { children: [
		/* @__PURE__ */ W(Ua, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ U(Wa, {
				$active: s === e,
				onClick: () => c(e),
				children: R(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ U(Wa, {
				ref: me,
				$active: Ee,
				onClick: Oe,
				"aria-haspopup": "menu",
				"aria-expanded": ge,
				children: De
			}),
			ge && typeof document < "u" && ee(/* @__PURE__ */ W(po, {
				ref: he,
				style: {
					top: ve.top,
					left: ve.left
				},
				role: "menu",
				children: [/* @__PURE__ */ U(mo, {
					$active: s === "stop-limit",
					role: "menuitem",
					onClick: () => ke("stop-limit"),
					children: R("Stop Limit")
				}), /* @__PURE__ */ U(mo, {
					$active: s === "stop-market",
					role: "menuitem",
					onClick: () => ke("stop-market"),
					children: R("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ W(qa, { children: [
			/* @__PURE__ */ U(Ka, {
				$side: a.side,
				"aria-hidden": !0
			}),
			/* @__PURE__ */ U(Ja, {
				$active: a.side === "BUY",
				$side: "BUY",
				onClick: () => B("BUY"),
				children: R("Buy / Long")
			}),
			/* @__PURE__ */ U(Ja, {
				$active: a.side === "SELL",
				$side: "SELL",
				onClick: () => B("SELL"),
				children: R("Sell / Short")
			})
		] }),
		/* @__PURE__ */ W(E, {
			style: { gap: 8 },
			children: [
				/* @__PURE__ */ U(Ya, {
					disabled: C,
					onClick: A,
					title: R("Margin mode"),
					children: /* @__PURE__ */ U(Xa, { children: a.marginMode === "CROSS" ? R("Cross") : R("Isolated") })
				}),
				/* @__PURE__ */ U(Ya, {
					onClick: k,
					title: R("Leverage"),
					children: /* @__PURE__ */ W(Xa, { children: [a.leverage, "x"] })
				}),
				N
			]
		}),
		/* @__PURE__ */ W(Za, { children: [/* @__PURE__ */ U(Qa, { children: R("Avbl") }), /* @__PURE__ */ W($a, { children: [/* @__PURE__ */ W(r, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				m,
				" ",
				i
			]
		}), /* @__PURE__ */ U(p, {
			variant: "text",
			scale: "xs",
			onClick: j,
			title: R("Deposit"),
			"aria-label": R("Deposit"),
			style: {
				width: 22,
				height: 22,
				minWidth: 22,
				borderRadius: 999
			},
			children: /* @__PURE__ */ U(u, {
				color: "primary",
				width: "14px"
			})
		})] })] }),
		pe && /* @__PURE__ */ W(lo, { children: [
			/* @__PURE__ */ U(to, { children: R("Stop") }),
			/* @__PURE__ */ U(uo, {
				value: a.stopPrice,
				onChange: (e) => o({
					...a,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": R("Stop price")
			}),
			/* @__PURE__ */ W(fo, {
				type: "button",
				onClick: () => o({
					...a,
					stopPriceSource: a.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: R("Trigger source"),
				children: [a.stopPriceSource === "MARK" ? R("Mark") : R("Last"), " ▾"]
			})
		] }),
		fe && /* @__PURE__ */ W(lo, { children: [
			/* @__PURE__ */ U(to, { children: R("Price") }),
			/* @__PURE__ */ U(uo, {
				value: a.price,
				onChange: (e) => o({
					...a,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": R("Limit price")
			}),
			/* @__PURE__ */ U(ro, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: i
			})
		] }),
		s === "stop-limit" && /* @__PURE__ */ W(lo, { children: [
			/* @__PURE__ */ U(to, { children: R("TIF") }),
			/* @__PURE__ */ U(E, { flex: 1 }),
			/* @__PURE__ */ W(ho, {
				value: a.timeInForce === "GTX" ? "GTC" : a.timeInForce,
				onChange: (e) => o({
					...a,
					timeInForce: e.target.value
				}),
				"aria-label": R("Time in force"),
				children: [
					/* @__PURE__ */ U("option", {
						value: "GTC",
						children: "GTC"
					}),
					/* @__PURE__ */ U("option", {
						value: "IOC",
						children: "IOC"
					}),
					/* @__PURE__ */ U("option", {
						value: "FOK",
						children: "FOK"
					})
				]
			})
		] }),
		/* @__PURE__ */ W(eo, { children: [
			/* @__PURE__ */ U(to, { children: R("Size") }),
			/* @__PURE__ */ U(no, {
				value: a.quantity,
				onChange: (e) => o({
					...a,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ W(ro, {
				onClick: V,
				title: R("Toggle unit"),
				children: [z, /* @__PURE__ */ U(co, {})]
			})
		] }),
		/* @__PURE__ */ U(vo, { children: /* @__PURE__ */ U(d, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: v,
			onValueChanged: y,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ W(E, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ U(l, {
				scale: "sm",
				checked: a.reduceOnly,
				onChange: (e) => o({
					...a,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ W(io, {
				onMouseEnter: () => xe(!0),
				onMouseLeave: () => xe(!1),
				children: [/* @__PURE__ */ U(ao, { children: R("Reduce Only") }), be && /* @__PURE__ */ U(oo, {
					role: "tooltip",
					children: R("Reduce-Only order will only reduce your position, not increase it.")
				})]
			})]
		}),
		/* @__PURE__ */ W(E, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ U(l, {
				scale: "sm",
				checked: a.tpSlEnabled,
				onChange: G
			}), /* @__PURE__ */ W(io, {
				onMouseEnter: () => Ce(!0),
				onMouseLeave: () => Ce(!1),
				children: [/* @__PURE__ */ U(ao, { children: R("Take Profit / Stop Loss") }), Se && /* @__PURE__ */ U(oo, {
					role: "tooltip",
					children: R("Set Take Profit or Stop Loss before opening. It activates after entry. Choose Last or Mark price as the trigger.")
				})]
			})]
		}),
		a.tpSlEnabled && /* @__PURE__ */ W(E, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ W(f, { children: [/* @__PURE__ */ W(E, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ U(r, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: R("Take Profit")
				}), /* @__PURE__ */ U(So, {
					value: a.takeProfitSource ?? "LAST",
					onChange: (e) => o({
						...a,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ W(yo, { children: [/* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("Trigger Price")
				}), /* @__PURE__ */ U(_o, {
					rawValue: a.takeProfitPrice,
					onRawChange: se
				})]
			}), /* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("PnL (USDT)")
				}), /* @__PURE__ */ U(_o, {
					rawValue: a.takeProfitPnl ?? "",
					onRawChange: ce
				})]
			})] })] }), /* @__PURE__ */ W(f, { children: [/* @__PURE__ */ W(E, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ U(r, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: R("Stop Loss")
				}), /* @__PURE__ */ U(So, {
					value: a.stopLossSource ?? "LAST",
					onChange: (e) => o({
						...a,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ W(yo, { children: [/* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("Trigger Price")
				}), /* @__PURE__ */ U(_o, {
					rawValue: a.stopLossPrice,
					onRawChange: le
				})]
			}), /* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("PnL (USDT)")
				}), /* @__PURE__ */ U(_o, {
					rawValue: a.stopLossPnl ?? "",
					onRawChange: ue
				})]
			})] })] })]
		}),
		D,
		w ? /* @__PURE__ */ U(Co, {
			onClick: () => O(),
			disabled: !x,
			isLoading: S,
			scale: "md",
			$side: a.side,
			children: b
		}) : /* @__PURE__ */ U(Co, {
			$side: a.side,
			onClick: () => O(),
			scale: "md",
			disabled: !T,
			children: b
		}),
		/* @__PURE__ */ W(wo, { children: [
			/* @__PURE__ */ W(io, {
				onMouseEnter: () => Te("cost"),
				onMouseLeave: () => Te(null),
				children: [/* @__PURE__ */ U(To, { children: R("Cost") }), we === "cost" && /* @__PURE__ */ U(oo, {
					role: "tooltip",
					children: R("Total margin required to open this position.")
				})]
			}),
			/* @__PURE__ */ U(Eo, { children: g.cost }),
			!de && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(io, {
				onMouseEnter: () => Te("liq"),
				onMouseLeave: () => Te(null),
				children: [/* @__PURE__ */ U(To, { children: R("Est. Liq. Price") }), we === "liq" && /* @__PURE__ */ U(oo, {
					role: "tooltip",
					children: R("Total margin required to open this position.")
				})]
			}), /* @__PURE__ */ U(Eo, { children: g.liq })] }),
			/* @__PURE__ */ W(io, {
				onMouseEnter: () => Te("fees"),
				onMouseLeave: () => Te(null),
				children: [/* @__PURE__ */ U(To, { children: R("Fees") }), we === "fees" && /* @__PURE__ */ U(oo, {
					role: "tooltip",
					children: R("Trading and funding fees applied to this position.")
				})]
			}),
			/* @__PURE__ */ U(Eo, { children: _ })
		] })
	] });
}, Ko = B(E)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, qo = B.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
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
`, Jo = B(E)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 16px;
  gap: 10px;
  background: ${({ theme: e }) => e.colors.cardSecondary};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
`, Yo = B(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Xo = B(E)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Zo = B.button`
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
`, Qo = B(E)`
  flex-direction: column;
`, $o = B(E)`
  flex-direction: column;
  gap: 8px;
`, es = B(E)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
`, ts = B(E)`
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
`, ns = B.button`
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
`, rs = B.input`
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
`, is = B(E)`
  align-items: center;
  gap: 8px;
`, as = B.button`
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
`, os = B.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, ss = B.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, cs = B(E)`
  justify-content: space-between;
  align-items: center;
`, ls = B(E)`
  flex-direction: column;
  gap: 8px;
`, us = B(E)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, ds = B.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, fs = B(r).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, ps = B.div`
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
`, ms = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, hs = [
	25,
	50,
	75
], gs = ({ isOpen: e, onClose: t, step: n, evmAddress: a, solanaAddress: o, perpBalanceText: s, isLoadingAssets: c = !1, assets: l, selectedAssetId: u, onSelectAsset: d, otherSupportedSymbols: f = [], selectedAsset: p, amount: m, onAmountChange: h, sourceAddress: v, errorSlot: y, onPercentClick: b, submitState: x, canContinue: C, onContinue: w, onBack: T, receipt: D, checkingElapsedMs: k = 0, onDepositAgain: A, onRetry: j, t: M = ms, renderTokenIcon: N, renderSpinner: P }) => {
	let F = M(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund Your Perps Account"), I = (() => {
		switch (x) {
			case "switching-chain": return M("Switching chain...");
			case "approving": return M("Approve in wallet...");
			case "approve-confirming": return M("Confirming approval...");
			case "depositing": return M("Confirm in wallet...");
			case "deposit-confirming": return M("Confirming deposit...");
			case "done": return M("Done");
			case "failed": return M("Retry");
			default: return M("Continue");
		}
	})(), L = (e, t = 24) => N ? N(e, t) : /* @__PURE__ */ U(ps, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), R = (e) => P ? P(e) : /* @__PURE__ */ U("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ U("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), z = x === "switching-chain" || x === "approving" || x === "approve-confirming" || x === "depositing" || x === "deposit-confirming";
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: F,
			onDismiss: t,
			children: /* @__PURE__ */ W(Ko, { children: [
				n === "amount" && /* @__PURE__ */ W(qo, {
					type: "button",
					onClick: T,
					"aria-label": "back",
					children: [/* @__PURE__ */ U(_, {
						width: "14px",
						color: "primary"
					}), /* @__PURE__ */ U("span", { children: M("Back") })]
				}),
				n === "select" && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W(Jo, { children: [/* @__PURE__ */ W(E, {
						flexDirection: "column",
						style: { gap: 2 },
						children: [/* @__PURE__ */ U(Yo, { children: M("Perps Balance") }), /* @__PURE__ */ U(r, {
							fontSize: "12px",
							color: "textSubtle",
							children: M("In Aster Contract")
						})]
					}), /* @__PURE__ */ U(r, {
						fontSize: "20px",
						bold: !0,
						style: { letterSpacing: "-0.2px" },
						children: s ?? "$0"
					})] }),
					(a || o) && /* @__PURE__ */ U(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: M("Top up from your connected EOA wallet (%addr%)", { addr: a ?? o ?? "" })
					}),
					c && /* @__PURE__ */ U(r, {
						fontSize: "12px",
						children: M("Loading tokens...")
					}),
					!c && l.length === 0 && /* @__PURE__ */ W(E, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ U(r, {
								fontSize: "14px",
								bold: !0,
								children: M("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ U(r, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: M("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							f.length > 0 && /* @__PURE__ */ U(r, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: M("Supported: %tokens%", { tokens: f.slice(0, 8).join(" · ") })
							})
						]
					}),
					l.length > 0 && /* @__PURE__ */ U(Xo, { children: l.map((e) => /* @__PURE__ */ W(Zo, {
						$selected: u === e.id,
						onClick: () => d(e.id),
						title: e.displayName,
						children: [/* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 12 },
							children: [L(e, 40), /* @__PURE__ */ W(Qo, { children: [/* @__PURE__ */ U(r, {
								fontSize: "14px",
								bold: !0,
								children: e.symbol
							}), /* @__PURE__ */ W(E, {
								alignItems: "center",
								style: {
									gap: 4,
									fontSize: 12
								},
								children: [/* @__PURE__ */ U(r, {
									fontSize: "12px",
									color: "textSubtle",
									children: e.balanceText
								}), /* @__PURE__ */ U(r, {
									fontSize: "12px",
									bold: !0,
									color: "textSubtle",
									children: e.symbol
								})]
							})] })]
						}), e.usdValueText && /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: e.usdValueText
						})]
					}, e.id)) }),
					l.length > 0 && f.length > 0 && /* @__PURE__ */ U(r, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: M("Also supported: %tokens%", { tokens: f.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && p && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W($o, { children: [/* @__PURE__ */ W(es, { children: [/* @__PURE__ */ U(r, {
						fontSize: "12px",
						bold: !0,
						color: "textSubtle",
						children: M("Available: %amt% %sym%", {
							amt: p.balanceText,
							sym: p.symbol
						})
					}), /* @__PURE__ */ W(is, { children: [
						hs.map((e, t) => /* @__PURE__ */ W(O.Fragment, { children: [t > 0 && /* @__PURE__ */ U(os, {}), /* @__PURE__ */ W(as, {
							onClick: () => b(e),
							children: [e, "%"]
						})] }, e)),
						/* @__PURE__ */ U(os, {}),
						/* @__PURE__ */ U(as, {
							onClick: () => b(100),
							children: M("MAX")
						})
					] })] }), /* @__PURE__ */ W(ts, { children: [/* @__PURE__ */ W(ns, {
						type: "button",
						children: [L(p, 40), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: p.displayName || p.symbol
						})]
					}), /* @__PURE__ */ U(rs, {
						value: m,
						onChange: (e) => h(e.target.value),
						placeholder: "0.0",
						inputMode: "decimal"
					})] })] }),
					/* @__PURE__ */ W(ss, { children: [
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(Yo, {
							color: "textSubtle",
							children: M("Source")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							children: v ?? "—"
						})] }),
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(Yo, {
							color: "textSubtle",
							children: M("Destination")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							children: M("Aster perp account")
						})] }),
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(Yo, {
							color: "textSubtle",
							children: M("Token")
						}), /* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 6 },
							children: [L(p, 16), /* @__PURE__ */ U(r, {
								fontSize: "14px",
								bold: !0,
								children: p.symbol
							})]
						})] })
					] }),
					y,
					/* @__PURE__ */ U(i, {
						onClick: w,
						disabled: !C || z,
						isLoading: z,
						scale: "md",
						children: I
					})
				] }),
				n === "checking" && D && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W(E, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [R(72), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: M("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ W(ls, { children: [
						/* @__PURE__ */ W(us, {
							$state: "done",
							children: [/* @__PURE__ */ U(ds, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ U(r, {
								fontSize: "13px",
								children: M("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ W(us, {
							$state: "done",
							children: [/* @__PURE__ */ U(ds, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ U(r, {
								fontSize: "13px",
								children: M("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ W(us, {
							$state: "active",
							children: [/* @__PURE__ */ U(ds, {
								$state: "active",
								children: R(16)
							}), /* @__PURE__ */ U(r, {
								fontSize: "13px",
								children: M("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ W(ss, { children: [
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(Yo, {
							color: "textSubtle",
							children: M("Amount")
						}), /* @__PURE__ */ W(r, {
							fontSize: "14px",
							bold: !0,
							children: [
								D.amount,
								" ",
								D.assetSymbol
							]
						})] }),
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(Yo, {
							color: "textSubtle",
							children: M("Tx hash")
						}), D.explorerUrl ? /* @__PURE__ */ U("a", {
							href: D.explorerUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							style: { textDecoration: "underline" },
							children: /* @__PURE__ */ W(r, {
								fontSize: "14px",
								bold: !0,
								color: "primary",
								style: { fontVariantNumeric: "tabular-nums" },
								children: [
									D.hash.slice(0, 10),
									"…",
									D.hash.slice(-8)
								]
							})
						}) : /* @__PURE__ */ W(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								D.hash.slice(0, 10),
								"…",
								D.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(Yo, {
							color: "textSubtle",
							children: M("Elapsed")
						}), /* @__PURE__ */ W(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(k / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ U(i, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: M("Close")
					})
				] }),
				n === "success" && D && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W(fs, { children: [
						D.amount,
						" ",
						D.assetSymbol
					] }),
					/* @__PURE__ */ W(ss, { children: [
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: M("Source")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: D.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: M("Destination")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: M("Aster perp account")
						})] }),
						/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: M("Processing time")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: M("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ U(ss, { children: /* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: M("Tx hash")
					}), D.explorerUrl ? /* @__PURE__ */ U("a", {
						href: D.explorerUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						style: { textDecoration: "underline" },
						children: /* @__PURE__ */ W(r, {
							fontSize: "14px",
							bold: !0,
							color: "primary",
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								D.hash.slice(0, 10),
								"…",
								D.hash.slice(-8)
							]
						})
					}) : /* @__PURE__ */ W(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							D.hash.slice(0, 10),
							"…",
							D.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ W(E, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ U(i, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: M("View Balance")
						}), /* @__PURE__ */ U(i, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: A,
							children: M("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W(E, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ U(r, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: M("The transaction did not go through. Your funds did not move.")
						})]
					}),
					y,
					/* @__PURE__ */ W(E, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ U(i, {
							style: { flex: 1 },
							scale: "md",
							onClick: j,
							children: M("Try Again")
						}), /* @__PURE__ */ U(i, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: t,
							children: M("Close")
						})]
					})
				] })
			] })
		})
	});
}, _s = (e) => e, vs = ({ isOpen: e, onClose: a, phase: o, eoaAddress: s, agentAddress: c, isProvisioning: l = !1, linkButtonLabel: u, isLinkDisabled: d = !1, isLinkPending: p = !1, onLinkWallet: m, approveButtonLabel: h, isApproveDisabled: _ = !1, isApprovePending: v = !1, onApprove: y, errorSlot: b, t: x = _s }) => {
	let C = c ?? x(l ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ U(S, {
		isOpen: e,
		onDismiss: a,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ U(g, {
			title: x("Enable Perps Trading"),
			onDismiss: a,
			children: /* @__PURE__ */ W(E, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: x("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ W(f, { children: [/* @__PURE__ */ U(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: x("Your wallet")
					}), /* @__PURE__ */ U(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: s ?? "—"
					})] }),
					/* @__PURE__ */ W(f, { children: [/* @__PURE__ */ U(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: x("Agent (trading signer)")
					}), /* @__PURE__ */ U(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: C
					})] }),
					b,
					o === "link-wallet" && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(i, {
						onClick: m,
						disabled: d || p,
						isLoading: p,
						scale: "md",
						children: u
					}), /* @__PURE__ */ U(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: x("You'll sign one message in your wallet. No funds move.")
					})] }),
					(o === "authorize-agent" || o === "checking-status") && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(i, {
						onClick: y,
						disabled: _ || v || o === "checking-status",
						isLoading: v || o === "checking-status",
						scale: "md",
						children: h
					}), /* @__PURE__ */ U(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: x("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					o === "done" && /* @__PURE__ */ U(n, {
						variant: "success",
						children: /* @__PURE__ */ U(t, { children: x("Trading enabled.") })
					})
				]
			})
		})
	});
}, ys = [
	50,
	250,
	500,
	1001
], bs = 1001, xs = (e) => e <= 24 ? "safe" : e <= 99 ? "caution" : e <= 499 ? "warn" : "danger", Ss = (e) => e >= 500, Cs = (e) => e >= 100, ws = (e) => e === "safe" ? "Gentle leverage" : e === "caution" ? "Amplified risk" : e === "warn" ? "High leverage" : "High-intensity leverage", Ts = (e) => e === "safe" ? "🌿" : e === "caution" ? "❗" : "🔥", Es = (e) => e === "safe" ? "A good place to start. You'll feel the market without getting rekt." : e === "caution" ? "Moves against you are magnified. Keep an eye on liquidation price." : e === "warn" ? "Liquidation triggers around a 1% move. Set a stop loss." : "1% move against you liquidates. Only risk what you can afford to lose.", Ds = () => /* @__PURE__ */ U("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M10.9629 8.57864L6.79069 12.7509C6.58302 12.9586 6.33844 13.0634 6.05694 13.0654C5.77544 13.0674 5.5251 12.9628 5.30594 12.7516C5.1026 12.5403 5.00194 12.2939 5.00394 12.0124C5.00594 11.7309 5.1111 11.4861 5.31944 11.2781L11.2714 5.33339C11.3736 5.23139 11.4873 5.15456 11.6124 5.10289C11.7376 5.05122 11.8683 5.02539 12.0044 5.02539C12.1406 5.02539 12.2713 5.05122 12.3964 5.10289C12.5216 5.15456 12.6319 5.22797 12.7272 5.32314L18.6829 11.2791C18.8983 11.4945 19.0059 11.7367 19.0059 12.0059C19.0059 12.2751 18.9023 12.5153 18.6949 12.7266C18.4758 12.9378 18.225 13.0434 17.9427 13.0434C17.6604 13.0434 17.4164 12.9378 17.2107 12.7266L13.0379 8.57864V18.3664C13.0379 18.6571 12.9383 18.9025 12.7389 19.1026C12.5394 19.303 12.295 19.4031 12.0057 19.4031C11.7164 19.4031 11.4702 19.303 11.2672 19.1026C11.0644 18.9025 10.9629 18.6571 10.9629 18.3664V8.57864Z",
		fill: "currentColor"
	})
}), Os = () => /* @__PURE__ */ U("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M10.9997 5V16.17L6.11973 11.29C5.72973 10.9 5.08973 10.9 4.69973 11.29C4.30973 11.68 4.30973 12.31 4.69973 12.7L11.2897 19.29C11.6797 19.68 12.3097 19.68 12.6997 19.29L19.2897 12.7C19.6797 12.31 19.6797 11.68 19.2897 11.29C18.8997 10.9 18.2697 10.9 17.8797 11.29L12.9997 16.17V5C12.9997 4.45 12.5497 4 11.9997 4C11.4497 4 10.9997 4.45 10.9997 5Z",
		fill: "currentColor"
	})
}), ks = () => /* @__PURE__ */ U("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ U("path", {
		d: "M7.99636 11.2602C8.18224 11.2602 8.3393 11.197 8.46752 11.0705C8.59563 10.944 8.65969 10.7872 8.65969 10.6003V7.86018C8.65969 7.67318 8.5968 7.51645 8.47102 7.39001C8.34524 7.26357 8.18936 7.20034 8.00336 7.20034C7.81747 7.20034 7.66041 7.26357 7.53219 7.39001C7.40408 7.51645 7.34002 7.67318 7.34002 7.86018V10.6003C7.34002 10.7872 7.40291 10.944 7.52869 11.0705C7.65447 11.197 7.81036 11.2602 7.99636 11.2602ZM7.99636 6.08001C8.18791 6.08001 8.34969 6.01523 8.48169 5.88568C8.61358 5.75601 8.67952 5.5954 8.67952 5.40384C8.67952 5.21229 8.61474 5.05051 8.48519 4.91851C8.35552 4.78662 8.19491 4.72068 8.00336 4.72068C7.8118 4.72068 7.65002 4.78546 7.51802 4.91501C7.38613 5.04468 7.32019 5.20529 7.32019 5.39684C7.32019 5.5884 7.38497 5.75018 7.51452 5.88218C7.64419 6.01407 7.8048 6.08001 7.99636 6.08001ZM8.00452 14.5358C7.10241 14.5358 6.25452 14.3657 5.46086 14.0255C4.66708 13.6853 3.97263 13.2177 3.37752 12.6227C2.78252 12.0276 2.31491 11.3334 1.97469 10.5402C1.63447 9.74696 1.46436 8.89779 1.46436 7.99268C1.46436 7.08768 1.63447 6.24112 1.97469 5.45301C2.31491 4.66479 2.78252 3.97312 3.37752 3.37801C3.97263 2.78301 4.6668 2.3154 5.46002 1.97518C6.25324 1.63495 7.10241 1.46484 8.00752 1.46484C8.91252 1.46484 9.75908 1.63495 10.5472 1.97518C11.3354 2.3154 12.0271 2.78301 12.6222 3.37801C13.2172 3.97312 13.6848 4.66601 14.025 5.45668C14.3652 6.24734 14.5354 7.09368 14.5354 7.99568C14.5354 8.89779 14.3652 9.74568 14.025 10.5393C13.6848 11.3331 13.2172 12.0276 12.6222 12.6227C12.0271 13.2177 11.3342 13.6853 10.5435 14.0255C9.75286 14.3657 8.90652 14.5358 8.00452 14.5358ZM7.99986 13.1525C9.43363 13.1525 10.6508 12.6523 11.6514 11.6518C12.6518 10.6513 13.152 9.43412 13.152 8.00034C13.152 6.56657 12.6518 5.3494 11.6514 4.34884C10.6508 3.3484 9.43363 2.84818 7.99986 2.84818C6.56608 2.84818 5.34891 3.3484 4.34836 4.34884C3.34791 5.3494 2.84769 6.56657 2.84769 8.00034C2.84769 9.43412 3.34791 10.6513 4.34836 11.6518C5.34891 12.6523 6.56608 13.1525 7.99986 13.1525Z",
		fill: "currentColor"
	})
}), As = () => /* @__PURE__ */ U("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), js = () => /* @__PURE__ */ U("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ U("path", {
		d: "M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Ms = () => /* @__PURE__ */ U("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Ns = B(G)`
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
`, Ps = B.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-self: stretch;
  padding: 24px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    padding: 24px 16px;
  }

  @media (max-width: 575.98px) {
    padding: 16px;
  }
`, Fs = B.div`
  display: inline-flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  gap: 16px;
  border: 0;
  background: transparent;
  border-radius: 0;
`, Is = B.div`
  display: flex;
  width: 458px;
  height: 77px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  padding: 0;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    width: auto;
    height: 56px;
  }

  @media (max-width: 967.98px) {
    width: auto;
  }
`, Ls = B.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 0 0 auto;
  gap: 64px;
`;
B(E)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, B.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, B.span`
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
`, B.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, B.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, B.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var Rs = B.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, zs = B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Bs = B(E)`
  align-items: center;
  justify-content: space-between;
`, Vs = B(r).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, Hs = B.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.textSubtle};
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.98);
  }
`, Us = B.span`
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.textSubtle};
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
`, Ws = B.label`
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
`, Gs = B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, Ks = B.span`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.failure};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  font-feature-settings: 'liga' off;
`, qs = B.span`
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
`, Js = B.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, Ys = B.input`
  /* field-sizing: content lets the input auto-grow to fit the typed
     value (Chrome/Edge 123+, Safari 17.4+). Without it, the previous
     fixed 90px width clipped after ~4 digits at 40px. min-width keeps
     room for the placeholder "0" before any input; max-width clamps
     it from overflowing the bet field on extreme inputs. */
  field-sizing: content;
  min-width: 22px;
  max-width: 240px;
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
`, Xs = B.button`
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
`, Zs = B.span`
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
`, Qs = B.span`
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
`, $s = B.span`
  position: relative;
  display: inline-flex;
`, ec = B.div`
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
`, tc = B.button`
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
`, nc = B.span`
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
B.span`
  font-size: 14px;
  font-weight: 600;
`;
var rc = B(E)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, ic = B.button`
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
`, ac = B.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, oc = B(E)`
  justify-content: space-between;
  align-items: center;
`, sc = B.span`
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
`, cc = {
	safe: "#31D0AA",
	caution: "#1FC7D4",
	warn: "#FFB237",
	danger: "#ED4B9E"
}, lc = B.span`
  display: flex;
  padding: 2px 5px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  background: ${({ $zone: e }) => cc[e]};
`, uc = B.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #FFF;
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  html.dark & {
    color: #000;
  }
`, dc = B.span`
  display: inline-flex;
  align-items: center;
  color: #FFF;
  cursor: help;

  html.dark & {
    color: #000;
  }
`, fc = B.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 8px;
`, pc = B.div`
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
`, mc = B.span`
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
`, hc = () => /* @__PURE__ */ W("svg", {
	width: "38",
	height: "39",
	viewBox: "0 0 38 39",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ U("ellipse", {
			cx: "19.0019",
			cy: "19.6397",
			rx: "19.0019",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "19.0013",
			cy: "17.455",
			rx: "17.8841",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ U("rect", {
			x: "23.3804",
			y: "9",
			width: "11.1776",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), gc = () => /* @__PURE__ */ W("svg", {
	width: "42",
	height: "43",
	viewBox: "0 0 42 43",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ U("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "18.5459",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "22.9092",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ U("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), _c = () => /* @__PURE__ */ W("svg", {
	width: "44",
	height: "48",
	viewBox: "0 0 44 48",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ U("ellipse", {
			cx: "25.0904",
			cy: "29.4522",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "25.0913",
			cy: "27.2753",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "18.5464",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ U("ellipse", {
			cx: "22.9087",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ U("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), vc = B.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, yc = B(E)`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 4px;
  padding: 0;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, bc = B.button`
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
`, xc = B.div`
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
`, Sc = B.input`
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
`, Cc = B.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`;
B.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var wc = z`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`, Tc = B.div`
  display: flex;
  width: 458px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
  animation: ${wc} 0.24s ease-out;

  @media (max-width: 1199.98px) {
    width: auto;
  }
`, Ec = B(E)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, Dc = B.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Oc = B.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, kc = B.button`
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

  html.dark & {
    color: #000;
  }
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
`, Ac = B.span`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`, jc = B(E)`
  align-self: stretch;
  gap: 8px;
`, Mc = B(i)`
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
`, Nc = B.div`
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
`, Pc = B(E)`
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
`, Fc = B.span`
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
`, Ic = B.span`
  color: ${({ $zero: e, theme: t }) => e ? t.colors.textSubtle : t.colors.text};
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
`, Lc = ({ selected: e, options: t, onSelect: n, onClickFallback: r }) => {
	let [i, a] = L(!1), o = I(null);
	M(() => {
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
	return /* @__PURE__ */ W($s, {
		ref: o,
		children: [/* @__PURE__ */ W(Xs, {
			type: "button",
			onClick: () => {
				s ? a((e) => !e) : r?.();
			},
			"aria-label": "Choose bet denomination",
			children: [/* @__PURE__ */ U(Zs, { children: c?.logoUrl ? /* @__PURE__ */ U("img", {
				src: c.logoUrl,
				alt: e,
				loading: "lazy",
				decoding: "async"
			}) : e }), /* @__PURE__ */ U(Qs, { children: /* @__PURE__ */ U(As, {}) })]
		}), s && i ? /* @__PURE__ */ U(ec, {
			role: "menu",
			children: t.map((t) => /* @__PURE__ */ W(tc, {
				type: "button",
				role: "menuitemradio",
				"aria-checked": t.code === e,
				$selected: t.code === e,
				onClick: () => {
					n?.(t.code), a(!1);
				},
				children: [/* @__PURE__ */ U(nc, {
					$color: t.color,
					children: t.logoUrl ? /* @__PURE__ */ U("img", {
						src: t.logoUrl,
						alt: t.code,
						loading: "lazy",
						decoding: "async"
					}) : t.code.slice(0, 1)
				}), t.code]
			}, t.code))
		}) : null]
	});
}, Rc = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, betError: c, leverage: l, onLeverageChange: u, maxLeverage: d = bs, presets: f = ys, quoteAsset: p, onQuoteAssetClick: m, assetOptions: h, onAssetChange: g, fundBalanceText: _, onTopUpFund: v, onPercentClick: y, estimatedEntry: b, liqIfLong: x, marginRequired: S, openingFee: C, canSubmit: w, isSubmittingUp: E = !1, isSubmittingDown: D = !1, onUp: k, onDown: A, onDeposit: j, onWithdraw: M, unrealizedPnl: N }) => {
	let P = Math.min(100, Math.max(0, l / d * 100)), F = xs(l), I = Ss(l), L = Cs(l), R = E || D, z = !w || R, B = !w || R, { targetRef: V, tooltip: H } = T(Es(F), { placement: "top" }), ee = O.useRef(null), G = O.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.currentTarget, n = ee.current;
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
	return /* @__PURE__ */ W(Ns, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ U(Ps, { children: /* @__PURE__ */ W(Ls, { children: [/* @__PURE__ */ W(Rs, { children: [/* @__PURE__ */ W(zs, { children: [
			/* @__PURE__ */ W(Bs, { children: [/* @__PURE__ */ U(Vs, { children: "My Perp Fund" }), /* @__PURE__ */ W(Hs, {
				type: "button",
				onClick: v,
				"aria-label": "Top up fund",
				children: [
					/* @__PURE__ */ U("span", {
						style: { display: "inline-flex" },
						children: /* @__PURE__ */ U(Ms, {})
					}),
					/* @__PURE__ */ U(Us, { children: _ }),
					/* @__PURE__ */ U("span", {
						style: { display: "inline-flex" },
						children: /* @__PURE__ */ U(js, {})
					})
				]
			})] }),
			/* @__PURE__ */ W(Ws, { children: [/* @__PURE__ */ W(Gs, { children: [/* @__PURE__ */ U(qs, { children: "My Bet" }), /* @__PURE__ */ W(Js, { children: [/* @__PURE__ */ U(Ys, {
				type: "number",
				inputMode: "decimal",
				value: o,
				onChange: (e) => s(e.target.value),
				"aria-label": "Bet amount",
				placeholder: "0"
			}), /* @__PURE__ */ U(Lc, {
				selected: p,
				options: h,
				onSelect: g,
				onClickFallback: m
			})] })] }), c ? /* @__PURE__ */ U(Ks, {
				role: "alert",
				children: c
			}) : null] }),
			/* @__PURE__ */ W(rc, { children: [
				/* @__PURE__ */ U(ic, {
					type: "button",
					onClick: () => y?.(.25),
					children: "25%"
				}),
				/* @__PURE__ */ U(ac, {}),
				/* @__PURE__ */ U(ic, {
					type: "button",
					onClick: () => y?.(.5),
					children: "50%"
				}),
				/* @__PURE__ */ U(ac, {}),
				/* @__PURE__ */ U(ic, {
					type: "button",
					onClick: () => y?.(1),
					children: "MAX"
				})
			] })
		] }), /* @__PURE__ */ W(zs, { children: [
			/* @__PURE__ */ U(Vs, { children: "Leverage" }),
			/* @__PURE__ */ W(oc, { children: [/* @__PURE__ */ W(sc, { children: [l, "x"] }), /* @__PURE__ */ W(lc, {
				$zone: F,
				children: [
					Ts(F) ? /* @__PURE__ */ U(uc, {
						as: "span",
						"aria-hidden": !0,
						children: Ts(F)
					}) : null,
					/* @__PURE__ */ U(uc, { children: ws(F) }),
					/* @__PURE__ */ U(dc, {
						ref: V,
						"aria-label": `${ws(F)} explanation`,
						children: /* @__PURE__ */ U(ks, {})
					}),
					H
				]
			})] }),
			/* @__PURE__ */ W(fc, { children: [/* @__PURE__ */ W(pc, {
				ref: ee,
				$fillPct: P,
				$zone: F,
				"aria-hidden": !0,
				children: [/* @__PURE__ */ U(vc, {
					type: "range",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Number(e.target.value)),
					"aria-label": "Leverage"
				}), /* @__PURE__ */ U(mc, {
					$fillPct: P,
					$variant: I ? "triple" : L ? "double" : "single",
					onPointerDown: G,
					children: U(I ? _c : L ? gc : hc, {})
				})]
			}), /* @__PURE__ */ W(yc, {
				role: "tablist",
				children: [/* @__PURE__ */ W(xc, { children: [/* @__PURE__ */ U(Sc, {
					type: "number",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Math.max(1, Math.min(d, Number(e.target.value) || 1))),
					"aria-label": "Custom leverage"
				}), /* @__PURE__ */ U(Cc, { children: "x" })] }), f.map((e) => /* @__PURE__ */ W(bc, {
					type: "button",
					role: "tab",
					"aria-selected": l === e,
					$active: l === e,
					onClick: () => u(e),
					children: [e, "x"]
				}, e))]
			})] })
		] })] }), /* @__PURE__ */ W(Fs, { children: [o && o !== "0" ? /* @__PURE__ */ W(Tc, { children: [
			/* @__PURE__ */ W(Ec, { children: [/* @__PURE__ */ U(Dc, { children: "Estimated Entry" }), /* @__PURE__ */ U(Oc, { children: b })] }),
			/* @__PURE__ */ W(Ec, { children: [/* @__PURE__ */ U(Dc, { children: "Liquidation if long" }), /* @__PURE__ */ U(Oc, {
				$danger: !0,
				children: x
			})] }),
			/* @__PURE__ */ W(Ec, { children: [/* @__PURE__ */ U(Dc, { children: "Margin required" }), /* @__PURE__ */ U(Oc, { children: S })] }),
			/* @__PURE__ */ W(Ec, { children: [/* @__PURE__ */ U(Dc, { children: "Opening fee" }), /* @__PURE__ */ U(Oc, { children: C })] })
		] }) : null, /* @__PURE__ */ W(Is, { children: [/* @__PURE__ */ U(kc, {
			type: "button",
			$variant: "up",
			disabled: z,
			onClick: k,
			"aria-busy": E,
			children: /* @__PURE__ */ W(Ac, { children: [/* @__PURE__ */ U(Ds, {}), E ? "..." : "UP"] })
		}), /* @__PURE__ */ U(kc, {
			type: "button",
			$variant: "down",
			disabled: B,
			onClick: A,
			"aria-busy": D,
			children: /* @__PURE__ */ W(Ac, { children: [/* @__PURE__ */ U(Os, {}), D ? "..." : "DOWN"] })
		})] })] })] }) }), /* @__PURE__ */ W(Nc, { children: [/* @__PURE__ */ W(jc, { children: [/* @__PURE__ */ U(Mc, {
			$variant: "primary",
			onClick: j,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ U(Mc, {
			$variant: "secondary",
			onClick: M,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ W(Pc, { children: [/* @__PURE__ */ U(Fc, { children: "Unrealized PnL" }), /* @__PURE__ */ U(Ic, {
			$zero: Number(String(N).replace(/[^\d.-]/g, "")) === 0,
			children: N
		})] })] })]
	});
}, zc = B.div`
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
`, Bc = B.button`
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
`, Vc = B.span`
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
`, Hc = B.span`
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
B.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`;
var Uc = B.div`
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
`, Wc = B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Gc = B.span`
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
`, Kc = B.span`
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
`, qc = B.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};

  @media (max-width: 575.98px) {
    display: none;
  }
`, Jc = B.span`
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
`, Yc = B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Xc = B.span`
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
`, Zc = B.span`
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
`, Qc = B.span`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive: e }) => e ? "#129E7D" : "#ED4B9E"};
`, $c = B.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
`, el = B(E)`
  align-items: center;
  gap: 24px;
  height: 56px;
  flex-shrink: 0;
`, tl = B.span`
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
`, nl = B.div`
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
`, rl = B.span`
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
`, il = B.span`
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
`, al = () => /* @__PURE__ */ U("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M1.90301 9.83956C1.65374 9.83956 1.47213 9.73331 1.35818 9.52081C1.24423 9.30831 1.25374 9.0988 1.3867 8.89228L5.49051 2.73574C5.61516 2.5553 5.78491 2.46509 5.99977 2.46509C6.21462 2.46509 6.38437 2.5553 6.50901 2.73574L10.6128 8.89228C10.7458 9.0988 10.7553 9.30831 10.6414 9.52081C10.5274 9.73331 10.3458 9.83956 10.0965 9.83956H1.90301Z",
		fill: "currentColor"
	})
}), ol = () => /* @__PURE__ */ U("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M1.90301 2.16044C1.65374 2.16044 1.47213 2.26669 1.35818 2.47919C1.24423 2.69169 1.25374 2.9012 1.3867 3.10772L5.49051 9.26426C5.61516 9.4447 5.78491 9.53491 5.99977 9.53491C6.21462 9.53491 6.38437 9.4447 6.50901 9.26426L10.6128 3.10772C10.7458 2.9012 10.7553 2.69169 10.6414 2.47919C10.5274 2.26669 10.3458 2.16044 10.0965 2.16044H1.90301Z",
		fill: "currentColor"
	})
}), sl = () => /* @__PURE__ */ U("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M7.25878 9.75835L9.41712 11.9167C9.74212 12.2417 10.2671 12.2417 10.5921 11.9167L12.7504 9.75835C13.2754 9.23335 12.9004 8.33335 12.1588 8.33335H7.84212C7.10045 8.33335 6.73378 9.23335 7.25878 9.75835Z",
		fill: "currentColor"
	})
}), cl = B.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`, ll = B.div`
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
`, ul = B.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`, dl = B.button`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: Kanit;
  font-size: 16px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, fl = B.label`
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
`, pl = B.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: Kanit;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  &::placeholder { color: ${({ theme: e }) => e.colors.textSubtle}; }
`, ml = B.div`
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr 1fr;
  align-items: center;
  align-self: stretch;
  row-gap: 4px;
`, hl = B.div`
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
`, gl = B.button`
  display: contents;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
`, _l = B.div`
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  ${gl}:hover & { background: ${({ theme: e }) => e.colors.cardSecondary}; }
`, vl = B(_l)`
  padding-left: 8px;
  padding-right: 0;
  color: #F0B90B;
`, yl = B(_l)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`, bl = B.span`
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
`, xl = B(_l)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`, Sl = B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e, $up: t }) => t ? e.colors.success : e.colors.failure};
  font-weight: 600;
`, Cl = [
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
], wl = ({ isOpen: e, onClose: t }) => e ? /* @__PURE__ */ U(cl, {
	onClick: t,
	children: /* @__PURE__ */ W(ll, {
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ W(ul, { children: [/* @__PURE__ */ U(dl, {
				type: "button",
				$active: !0,
				children: "Favorites"
			}), /* @__PURE__ */ U(dl, {
				type: "button",
				children: "All markets"
			})] }),
			/* @__PURE__ */ W(fl, { children: [/* @__PURE__ */ U("svg", {
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": !0,
				children: /* @__PURE__ */ U("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
			}), /* @__PURE__ */ U(pl, {
				type: "text",
				placeholder: "All tokens"
			})] }),
			/* @__PURE__ */ W(ml, {
				role: "table",
				children: [
					/* @__PURE__ */ U(hl, { children: "SYMBOLS" }),
					/* @__PURE__ */ U(hl, {}),
					/* @__PURE__ */ U(hl, { children: "LAST PRICE" }),
					/* @__PURE__ */ U(hl, { children: "1D CHANGE" }),
					/* @__PURE__ */ U(hl, { children: "1D VOLUME (USDT)" }),
					Cl.map((e) => /* @__PURE__ */ W(gl, {
						type: "button",
						children: [
							/* @__PURE__ */ U(vl, { children: "★" }),
							/* @__PURE__ */ W(yl, { children: [/* @__PURE__ */ U(bl, {
								$color: e.color,
								children: e.symbol.slice(0, 1)
							}), /* @__PURE__ */ U("span", { children: e.symbol })] }),
							/* @__PURE__ */ U(xl, { children: e.lastPrice }),
							/* @__PURE__ */ U(xl, { children: /* @__PURE__ */ W(Sl, {
								$up: e.change >= 0,
								children: [
									e.change >= 0 ? "▲" : "▼",
									" ",
									Math.abs(e.change).toFixed(1),
									"%"
								]
							}) }),
							/* @__PURE__ */ U(xl, { children: e.volume })
						]
					}, e.symbol))
				]
			})
		]
	})
}) : null, Tl = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c, renderTokenIcon: l }) => {
	let u = r >= 0, d = l?.(), f = I(null), p = I(null), [m, h] = L(!1), [g, _] = L(!1);
	return M(() => {
		let e = f.current, t = p.current;
		if (!e || !t) return;
		let n = () => h(t.scrollWidth > e.clientWidth + 1);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), r.observe(t), () => r.disconnect();
	}, []), /* @__PURE__ */ W(zc, { children: [
		/* @__PURE__ */ W(Bc, {
			type: "button",
			onClick: () => {
				c?.(), _(!0);
			},
			"aria-label": `Change market · ${t}`,
			children: [d == null ? /* @__PURE__ */ U(Vc, { children: e }) : /* @__PURE__ */ U(Hc, { children: d }), /* @__PURE__ */ W(Uc, { children: [
				/* @__PURE__ */ U(Wc, { children: /* @__PURE__ */ W(Gc, { children: [/* @__PURE__ */ U(Kc, { children: t }), /* @__PURE__ */ U(qc, {
					"aria-hidden": !0,
					children: /* @__PURE__ */ U(sl, {})
				})] }) }),
				/* @__PURE__ */ W(Yc, { children: [/* @__PURE__ */ U(Xc, { children: n }), /* @__PURE__ */ W(Zc, {
					$positive: u,
					children: [
						/* @__PURE__ */ U(Qc, {
							$positive: u,
							children: U(u ? al : ol, {})
						}),
						r.toFixed(2),
						"%"
					]
				})] }),
				/* @__PURE__ */ U(Jc, {
					"aria-hidden": !0,
					children: /* @__PURE__ */ U(sl, {})
				})
			] })]
		}),
		/* @__PURE__ */ W($c, {
			ref: f,
			children: [/* @__PURE__ */ W(el, {
				ref: p,
				children: [
					/* @__PURE__ */ W(nl, { children: [/* @__PURE__ */ U(rl, { children: "24h Volume" }), /* @__PURE__ */ U(il, { children: i })] }),
					/* @__PURE__ */ W(nl, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ U(rl, { children: "Open Interest" }), /* @__PURE__ */ U(il, { children: a })]
					}),
					/* @__PURE__ */ W(nl, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ U(rl, { children: "Funding Rate" }), /* @__PURE__ */ U(il, { children: o })]
					}),
					/* @__PURE__ */ W(nl, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ U(rl, { children: "Next Funding" }), /* @__PURE__ */ U(il, { children: s })]
					})
				]
			}), /* @__PURE__ */ U(tl, {
				$visible: m,
				"aria-hidden": !0,
				children: /* @__PURE__ */ U("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					children: /* @__PURE__ */ U("path", { d: "M7.05 14.95 12 10 7.05 5.05 8.46 3.64 14.83 10l-6.37 6.36z" })
				})
			})]
		}),
		/* @__PURE__ */ U(wl, {
			isOpen: g,
			onClose: () => _(!1)
		})
	] });
}, El = B(G)`
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
`, Dl = B.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Ol = B.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, kl = B.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Al = B.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, jl = B.div`
  position: relative;
  overflow: visible;
`, Ml = B.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, Nl = B.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, Pl = B.span`
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
`, Fl = 1e3, Il = 360, Ll = 20, Rl = 70;
function zl(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * Fl), i = e.map((e) => Ll + (1 - (e.price - t) / n) * (Il - Ll - Rl)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${Fl} ${Il} L 0 ${Il} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var Bl = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", Vl = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", Hl = 200, Ul = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = V(), c = `simple-chart-fill-${N().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = F(() => zl(r), [r]), d = u?.line ?? Bl, f = u?.area ?? Vl, p = u?.endY ?? Hl;
	return /* @__PURE__ */ W(El, { children: [/* @__PURE__ */ U(Dl, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ U(Ol, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ W(kl, { children: [/* @__PURE__ */ W(Al, { children: [/* @__PURE__ */ W(jl, { children: [/* @__PURE__ */ W("svg", {
		viewBox: `0 0 ${Fl} ${Il}`,
		preserveAspectRatio: "none",
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		},
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ U("defs", { children: /* @__PURE__ */ W("linearGradient", {
				id: c,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ U("stop", {
					offset: "0%",
					stopColor: l,
					stopOpacity: "0.30"
				}), /* @__PURE__ */ U("stop", {
					offset: "100%",
					stopColor: l,
					stopOpacity: "0.02"
				})]
			}) }),
			/* @__PURE__ */ U("path", {
				d: f,
				fill: `url(#${c})`
			}),
			/* @__PURE__ */ U("path", {
				d,
				fill: "none",
				stroke: l,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ U("line", {
				x1: "0",
				y1: p,
				x2: Fl - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ U(Pl, {
		style: {
			right: -8,
			top: `calc(${p}/${Il} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ U(Ml, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ U("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ U(Nl, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ U("span", { children: e }, `${e}-${t}`))
	})] })] });
}, Wl = B(G)`
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
`, Gl = B.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 48px;
  padding: 0;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, Kl = B.button`
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
`, ql = B.div`
  width: 100%;
  overflow-x: auto;

  /* Force a non-overlay, layout-reserved scrollbar so the track is always
     visible at the bottom — matches the Figma design that draws a
     persistent purple scrollbar. The 8px horizontal track margin keeps
     the scrollbar visually inset from the card edges without padding the
     table itself, so row hover backgrounds can extend edge-to-edge. */
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme: e }) => e.colors.input};
    border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
    border-radius: 16px;
    margin: 0 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme: e }) => e.colors.textSubtle};
    border-radius: 8px;
  }

  @media (max-width: 967.98px) {
    display: none;
  }
`, Jl = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 64px;
  min-width: 794px;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 162px 64px;
  }
`, Yl = B.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
  align-items: center;

  ${({ $isHeader: e, theme: t }) => !e && R`
      &:hover {
        background: ${t.colors.cardSecondary};
      }
    `}
`, Xl = B.div`
  display: none;

  @media (max-width: 967.98px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
`, Zl = B.div`
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
`, Ql = B.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`, $l = B.span`
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
`, eu = B.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`, tu = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, nu = B.span`
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

  html.dark & {
    color: ${({ $direction: e }) => e === "up" ? "#3DDBB5" : "#ED4B9E"};
  }
`, ru = B.span`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "#129E7D" : e === "negative" ? "#ED4B9E" : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;

  html.dark & {
    color: ${({ $sign: e, theme: t }) => e === "positive" ? "#3DDBB5" : e === "negative" ? "#ED4B9E" : t.colors.text};
  }
`, iu = B.span`
  display: block;
  height: 1px;
  align-self: stretch;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, au = B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`, ou = B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, su = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`, cu = B.span`
  color: ${({ $danger: e, $safe: t, theme: n }) => t ? "#129E7D" : e ? "#ED4B9E" : n.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`, lu = B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`, uu = B.div`
  height: 12px;
  align-self: stretch;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
`, du = B.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
`, fu = B.button`
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
`, pu = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 64px;
  min-width: 794px;

  @media (max-width: 967.98px) {
    display: none;
  }
`, mu = B.div`
  display: none;

  @media (max-width: 967.98px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
`, hu = B(Ql)``, gu = B.span`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`, _u = B(fu)``, vu = B.div`
  display: grid;
  grid-template-columns: 190px 1fr 1fr 1fr 1fr 1fr;
  min-width: 794px;

  @media (max-width: 967.98px) {
    display: none;
  }
`, yu = B(mu)``, bu = B.span`
  font-weight: 600;
`, Z = B.div`
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
`, xu = B.span`
  display: inline-flex;
  color: ${({ theme: e }) => e.colors.textDisabled};
`, Q = () => /* @__PURE__ */ U(xu, { children: /* @__PURE__ */ W("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "none",
	"aria-hidden": "true",
	children: [/* @__PURE__ */ U("path", {
		d: "M8.76686 12.7917C8.66711 12.7917 8.56945 12.7727 8.47388 12.7347C8.3784 12.6965 8.29324 12.6401 8.21838 12.5653L6.12669 10.4653C5.97706 10.3102 5.90327 10.1287 5.90531 9.92095C5.90745 9.71319 5.98611 9.53449 6.14127 9.38487C6.2909 9.23943 6.47095 9.16568 6.68144 9.16364C6.89193 9.1615 7.07198 9.23524 7.22161 9.38487L7.99394 10.1572V7.17331C7.99394 6.95854 8.06909 6.77606 8.2194 6.62585C8.36961 6.47554 8.55209 6.40039 8.76686 6.40039C8.98162 6.40039 9.16411 6.47554 9.31431 6.62585C9.46462 6.77606 9.53977 6.95854 9.53977 7.17331V10.1572L10.3121 9.38487C10.4575 9.23943 10.6351 9.1667 10.845 9.1667C11.0549 9.1667 11.2374 9.23943 11.3924 9.38487C11.5476 9.53449 11.6252 9.71562 11.6252 9.92824C11.6252 10.1409 11.5504 10.3248 11.4008 10.4799L9.31534 12.5653C9.24047 12.6401 9.15531 12.6965 9.05984 12.7347C8.96427 12.7727 8.86661 12.7917 8.76686 12.7917Z",
		fill: "currentColor"
	}), /* @__PURE__ */ U("path", {
		d: "M5.23333 7.59979C5.01857 7.59979 4.83608 7.52464 4.68588 7.37433C4.53557 7.22412 4.46042 7.04163 4.46042 6.82687V3.84298L3.68808 4.61531C3.54274 4.76075 3.36511 4.83348 3.15521 4.83348C2.94531 4.83348 2.76282 4.76075 2.60775 4.61531C2.45258 4.46568 2.375 4.28456 2.375 4.07193C2.375 3.85931 2.44981 3.67541 2.59944 3.52025L4.68485 1.43483C4.75972 1.36007 4.84488 1.30363 4.94035 1.26552C5.03592 1.2275 5.13358 1.2085 5.23333 1.2085C5.33308 1.2085 5.43074 1.2275 5.52631 1.26552C5.62178 1.30363 5.70695 1.36007 5.78181 1.43483L7.8735 3.53483C8.02312 3.69 8.09692 3.87146 8.09488 4.07922C8.09274 4.28699 8.01408 4.46568 7.85892 4.61531C7.70929 4.76075 7.52924 4.8345 7.31875 4.83654C7.10826 4.83868 6.92821 4.76493 6.77858 4.61531L6.00625 3.84298V6.82687C6.00625 7.04163 5.9311 7.22412 5.78079 7.37433C5.63058 7.52464 5.4481 7.59979 5.23333 7.59979Z",
		fill: "currentColor"
	})]
}) }), $ = B.button`
  display: flex;
  padding: 1px 2px 3px 2px;
  align-items: flex-start;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.20);
  border-radius: 6px;
  background: ${({ theme: e }) => e.colors.tertiary};
  cursor: pointer;
  &:hover { filter: brightness(0.97); }
`, Su = B.div`
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
`, Cu = B(Su)`
  color: #ED4B9E;
`, wu = B(Su)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "#129E7D" : e === "negative" ? "#ED4B9E" : t.colors.text};

  html.dark & {
    color: ${({ $sign: e, theme: t }) => e === "positive" ? "#3DDBB5" : e === "negative" ? "#ED4B9E" : t.colors.text};
  }
`, Tu = B.div`
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
`, Eu = B.span`
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
`, Du = B.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`, Ou = B.span`
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
`, ku = B.span`
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

  html.dark & {
    color: ${({ $direction: e }) => e === "up" ? "#3DDBB5" : "#ED4B9E"};
  }
`, Au = B.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding: 16px;
`, ju = B.span`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "#129E7D" : e === "negative" ? "#ED4B9E" : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;

  html.dark & {
    color: ${({ $sign: e, theme: t }) => e === "positive" ? "#3DDBB5" : e === "negative" ? "#ED4B9E" : t.colors.text};
  }
`, Mu = B.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: pointer;
  border-radius: 4px;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, Nu = B(Su)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`, Pu = B.div`
  position: relative;
  width: 100px;
  height: 6px;
  border-radius: 999px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  box-shadow: inset 0 2px 0 -1px rgba(0, 0, 0, 0.06);
`, Fu = B.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? "linear-gradient(to right, #34C49E, #6FBF81)" : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, Iu = B.button`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  aspect-ratio: 1 / 1;
  margin: 16px;
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
`, Lu = B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, Ru = B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding: 48px 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`, zu = B.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, Bu = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, Vu = (e) => Bu[e.toUpperCase()] ?? "#7A6EAA", Hu = (e) => e === "up" ? "Up" : "Down", Uu = () => /* @__PURE__ */ U("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ U("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), Wu = () => /* @__PURE__ */ U("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M18 16.1162C17.24 16.1162 16.56 16.4162 16.04 16.8862L8.91 12.7362C8.96 12.5062 9 12.2762 9 12.0362C9 11.7962 8.96 11.5662 8.91 11.3362L15.96 7.22619C16.5 7.72619 17.21 8.03619 18 8.03619C19.66 8.03619 21 6.69619 21 5.03619C21 3.37619 19.66 2.03619 18 2.03619C16.34 2.03619 15 3.37619 15 5.03619C15 5.27619 15.04 5.50619 15.09 5.73619L8.04 9.84619C7.5 9.34619 6.79 9.03619 6 9.03619C4.34 9.03619 3 10.3762 3 12.0362C3 13.6962 4.34 15.0362 6 15.0362C6.79 15.0362 7.5 14.7262 8.04 14.2262L15.16 18.3862C15.11 18.5962 15.08 18.8162 15.08 19.0362C15.08 20.6462 16.39 21.9562 18 21.9562C19.61 21.9562 20.92 20.6462 20.92 19.0362C20.92 17.4262 19.61 16.1162 18 16.1162Z" })
}), Gu = ({ tab: e, onTabChange: t, positions: n, openOrders: r, history: i, disconnectedMessage: a, onClosePosition: o, onCancelOrder: s, onSharePnl: c, renderTokenIcon: l }) => /* @__PURE__ */ W(Wl, { children: [/* @__PURE__ */ W(Gl, {
	role: "tablist",
	children: [
		/* @__PURE__ */ U(Kl, {
			type: "button",
			role: "tab",
			"aria-selected": e === "positions",
			$active: e === "positions",
			onClick: () => t("positions"),
			children: "Positions"
		}),
		/* @__PURE__ */ U(Kl, {
			type: "button",
			role: "tab",
			"aria-selected": e === "orders",
			$active: e === "orders",
			onClick: () => t("orders"),
			children: "Open Orders"
		}),
		/* @__PURE__ */ U(Kl, {
			type: "button",
			role: "tab",
			"aria-selected": e === "history",
			$active: e === "history",
			onClick: () => t("history"),
			children: "Transaction history"
		})
	]
}), a ? /* @__PURE__ */ U(Ru, { children: a }) : /* @__PURE__ */ W(H, { children: [
	e === "positions" && n.length > 0 && /* @__PURE__ */ U(Xl, { children: n.map((e) => /* @__PURE__ */ W(Zl, { children: [
		/* @__PURE__ */ W(Ql, { children: [
			l?.(e) ?? /* @__PURE__ */ U($l, {
				$color: e.iconColor ?? Vu(e.symbol),
				children: e.symbol.slice(0, 1)
			}),
			/* @__PURE__ */ W(eu, { children: [/* @__PURE__ */ U(tu, { children: e.symbol }), /* @__PURE__ */ W(nu, {
				$direction: e.direction,
				children: [Hu(e.direction), e.leverageText ? ` · ${e.leverageText}` : ""]
			})] }),
			/* @__PURE__ */ U(ru, {
				$sign: e.pnlSign,
				children: e.unrealizedPnl
			})
		] }),
		/* @__PURE__ */ U(iu, {}),
		/* @__PURE__ */ W(au, { children: [
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Entry Price" }), /* @__PURE__ */ U(cu, { children: e.entryPrice })] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Liq Price" }), /* @__PURE__ */ U(cu, { children: e.liqPrice })] }),
			/* @__PURE__ */ W(lu, { children: [/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Distance to Liq" }), /* @__PURE__ */ U(cu, {
				$safe: e.liqStatus === "safe",
				$danger: e.liqStatus === "danger",
				children: e.liqStatusLabel
			})] }), /* @__PURE__ */ U(uu, { children: /* @__PURE__ */ U(du, {
				$pct: e.liqDistancePct,
				$status: e.liqStatus
			}) })] })
		] }),
		/* @__PURE__ */ U(fu, {
			type: "button",
			onClick: () => o(e.id),
			children: "Close"
		})
	] }, `tablet-${e.id}`)) }),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ U(Lu, { children: "No open positions" }) : /* @__PURE__ */ U(ql, { children: /* @__PURE__ */ W(Jl, {
		role: "table",
		children: [/* @__PURE__ */ W(Yl, {
			$isHeader: !0,
			role: "row",
			children: [
				/* @__PURE__ */ U(Z, { children: "Token" }),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Unrealized PnL", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by unrealized PnL",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Entry Price", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by entry price",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Liq. Price", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by liq. price",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Distance to Liq", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by distance to liq",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ U(Z, {})
			]
		}), n.map((e) => /* @__PURE__ */ W(Yl, {
			role: "row",
			children: [
				/* @__PURE__ */ W(Tu, { children: [l?.(e) ?? /* @__PURE__ */ U(Eu, {
					$color: e.iconColor ?? Vu(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ W(Du, { children: [/* @__PURE__ */ U(Ou, { children: e.symbol }), /* @__PURE__ */ W(ku, {
					$direction: e.direction,
					children: [Hu(e.direction), e.leverageText ? ` | ${e.leverageText}` : ""]
				})] })] }),
				/* @__PURE__ */ W(Au, { children: [/* @__PURE__ */ U(ju, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}), c && /* @__PURE__ */ U(Mu, {
					type: "button",
					"aria-label": "Share PnL",
					onClick: () => c(e.id),
					children: /* @__PURE__ */ U(Wu, {})
				})] }),
				/* @__PURE__ */ U(Su, { children: e.entryPrice }),
				/* @__PURE__ */ U(Su, { children: e.liqPrice }),
				/* @__PURE__ */ W(Nu, { children: [/* @__PURE__ */ U(Pu, { children: /* @__PURE__ */ U(Fu, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ U("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ U(Iu, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => o(e.id),
					children: /* @__PURE__ */ U(Uu, {})
				})
			]
		}, e.id))]
	}) })),
	e === "orders" && r.length > 0 && /* @__PURE__ */ U(mu, { children: r.map((e) => /* @__PURE__ */ W(Zl, { children: [
		/* @__PURE__ */ W(hu, { children: [
			/* @__PURE__ */ U($l, {
				$color: e.iconColor ?? Vu(e.symbol),
				children: e.symbol.slice(0, 1)
			}),
			/* @__PURE__ */ U(eu, { children: /* @__PURE__ */ U(tu, { children: e.symbol }) }),
			/* @__PURE__ */ U(gu, {
				$side: e.side,
				children: e.side === "BUY" ? "Buy" : "Sell"
			})
		] }),
		/* @__PURE__ */ U(iu, {}),
		/* @__PURE__ */ W(au, { children: [
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Type" }), /* @__PURE__ */ U(cu, { children: e.type })] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Price" }), /* @__PURE__ */ U(cu, { children: e.price })] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Size" }), /* @__PURE__ */ U(cu, { children: e.origQty })] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Filled" }), /* @__PURE__ */ U(cu, { children: `${e.executedQty}/${e.origQty}` })] })
		] }),
		/* @__PURE__ */ U(_u, {
			type: "button",
			onClick: () => s(e.id),
			children: "Cancel"
		})
	] }, `tablet-${e.id}`)) }),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ U(Lu, { children: "No open orders" }) : /* @__PURE__ */ U(ql, { children: /* @__PURE__ */ W(pu, {
		role: "table",
		children: [/* @__PURE__ */ W(Yl, {
			$isHeader: !0,
			role: "row",
			children: [
				/* @__PURE__ */ U(Z, { children: "Token" }),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Side", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by side",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Type", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by type",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Price", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by price",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Size", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by size",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Filled", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by filled",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ U(Z, {})
			]
		}), r.map((e) => /* @__PURE__ */ W(Yl, {
			role: "row",
			children: [
				/* @__PURE__ */ W(Tu, { children: [/* @__PURE__ */ U(Eu, {
					$color: e.iconColor ?? Vu(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ U(Du, { children: /* @__PURE__ */ U(Ou, { children: e.symbol }) })] }),
				/* @__PURE__ */ U(Su, { children: /* @__PURE__ */ U(zu, {
					$side: e.side,
					children: e.side === "BUY" ? "Buy" : "Sell"
				}) }),
				/* @__PURE__ */ U(Su, { children: e.type }),
				/* @__PURE__ */ U(Su, { children: e.price }),
				/* @__PURE__ */ U(Su, { children: e.origQty }),
				/* @__PURE__ */ U(Su, { children: `${e.executedQty}/${e.origQty}` }),
				/* @__PURE__ */ U(Iu, {
					type: "button",
					"aria-label": "Cancel order",
					onClick: () => s(e.id),
					children: /* @__PURE__ */ U(Uu, {})
				})
			]
		}, e.id))]
	}) })),
	e === "history" && i.length > 0 && /* @__PURE__ */ U(yu, { children: i.map((e) => /* @__PURE__ */ W(Zl, { children: [
		/* @__PURE__ */ W(Ql, { children: [/* @__PURE__ */ U($l, {
			$color: e.iconColor ?? Vu(e.symbol),
			children: e.symbol.slice(0, 1)
		}), /* @__PURE__ */ W(eu, { children: [/* @__PURE__ */ U(tu, { children: e.symbol }), /* @__PURE__ */ W(nu, {
			$direction: e.direction,
			children: [Hu(e.direction), e.leverageText ? ` · ${e.leverageText}` : ""]
		})] })] }),
		/* @__PURE__ */ U(iu, {}),
		/* @__PURE__ */ W(au, { children: [
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Price" }), /* @__PURE__ */ U(cu, { children: e.price })] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Quantity" }), /* @__PURE__ */ U(cu, { children: e.quantity })] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Fee" }), /* @__PURE__ */ W(cu, {
				$danger: !0,
				children: [e.fee, e.feeCurrency && /* @__PURE__ */ W(H, { children: [" ", /* @__PURE__ */ U(bu, { children: e.feeCurrency })] })]
			})] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Realized Profit" }), /* @__PURE__ */ W(cu, {
				$safe: e.realizedProfitSign === "positive",
				$danger: e.realizedProfitSign === "negative",
				children: [e.realizedProfit, e.realizedProfitCurrency && /* @__PURE__ */ W(H, { children: [" ", /* @__PURE__ */ U(bu, { children: e.realizedProfitCurrency })] })]
			})] }),
			/* @__PURE__ */ W(ou, { children: [/* @__PURE__ */ U(su, { children: "Time" }), /* @__PURE__ */ U(cu, { children: e.time })] })
		] })
	] }, `tablet-${e.id}`)) }),
	e === "history" && (i.length === 0 ? /* @__PURE__ */ U(Lu, { children: "No transaction history" }) : /* @__PURE__ */ U(ql, { children: /* @__PURE__ */ W(vu, {
		role: "table",
		children: [/* @__PURE__ */ W(Yl, {
			$isHeader: !0,
			role: "row",
			children: [
				/* @__PURE__ */ U(Z, { children: "Token" }),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Price", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by price",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Quantity", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by quantity",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Fee", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by fee",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Realized Profit", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by realized profit",
						children: /* @__PURE__ */ U(Q, {})
					})]
				}),
				/* @__PURE__ */ W(Z, {
					$align: "right",
					children: ["Time", /* @__PURE__ */ U($, {
						type: "button",
						"aria-label": "Sort by time",
						children: /* @__PURE__ */ U(Q, {})
					})]
				})
			]
		}), i.map((e) => /* @__PURE__ */ W(Yl, {
			role: "row",
			children: [
				/* @__PURE__ */ W(Tu, { children: [/* @__PURE__ */ U(Eu, {
					$color: e.iconColor ?? Vu(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ W(Du, { children: [/* @__PURE__ */ U(Ou, { children: e.symbol }), /* @__PURE__ */ W(ku, {
					$direction: e.direction,
					children: [Hu(e.direction), e.leverageText ? ` | ${e.leverageText}` : ""]
				})] })] }),
				/* @__PURE__ */ U(Su, { children: e.price }),
				/* @__PURE__ */ U(Su, { children: e.quantity }),
				/* @__PURE__ */ W(Cu, { children: [e.fee, e.feeCurrency && /* @__PURE__ */ W(H, { children: [" ", /* @__PURE__ */ U(bu, { children: e.feeCurrency })] })] }),
				/* @__PURE__ */ W(wu, {
					$sign: e.realizedProfitSign,
					children: [e.realizedProfit, e.realizedProfitCurrency && /* @__PURE__ */ W(H, { children: [" ", /* @__PURE__ */ U(bu, { children: e.realizedProfitCurrency })] })]
				}),
				/* @__PURE__ */ U(Su, { children: e.time })
			]
		}, e.id))]
	}) }))
] })] }), Ku = { buckets: {
	spot: {
		key: "spot",
		label: "Spot Balance",
		sublabel: "In your wallet",
		amount: 5515.63,
		pnl: {
			"24h": 1.72,
			"7d": 4.31,
			all: 12.84
		},
		description: "Tokens held in your connected wallet (e.g. MetaMask). Available to swap, send, or deposit.",
		tokens: [
			{
				symbol: "ETH",
				name: "Ethereum",
				amount: "1.09 ETH",
				value: 1716.02,
				pnl: .5,
				network: "BNB",
				color: "#627EEA"
			},
			{
				symbol: "BNB",
				name: "Binance",
				amount: "1 BNB",
				value: 651.13,
				pnl: .5,
				network: "BNB",
				color: "#F0B90B"
			},
			{
				symbol: "CAKE",
				name: "PancakeSwap",
				amount: "358.214 CAKE",
				value: 500,
				pnl: .5,
				network: "BNB",
				color: "#23CAD5"
			},
			{
				symbol: "USDC",
				name: "Circle USD",
				amount: "2,000.13 USDC",
				value: 2e3,
				pnl: .5,
				network: "BNB",
				color: "#2775CA"
			},
			{
				symbol: "USDT",
				name: "Tether",
				amount: "1,717 USDT",
				value: 1716.02,
				pnl: .5,
				network: "BNB",
				color: "#26A17B"
			}
		]
	},
	perp: {
		key: "perp",
		label: "Perps Balance",
		sublabel: "Aster contract",
		amount: 973.35,
		pnl: {
			"24h": -.22,
			"7d": 8.12,
			all: 23.18
		},
		description: "Total value of your assets and active positions, including unrealized PnL. Updates in real time.",
		perpStats: {
			balance: 567.79,
			balancePnlPct: 1.72,
			unrealizedPnl: 405.56,
			unrealizedPnlPct: -.22
		},
		positions: [
			{
				symbol: "ETH",
				side: "Long",
				leverage: "500X",
				pnlUsd: 209.87,
				pnlPct: .5,
				color: "#627EEA"
			},
			{
				symbol: "BTC",
				side: "Short",
				leverage: "250X",
				pnlUsd: 425.26,
				pnlPct: .5,
				color: "#F7931A"
			},
			{
				symbol: "BNB",
				side: "Long",
				leverage: "500X",
				pnlUsd: 338.11,
				pnlPct: .5,
				color: "#F0B90B"
			}
		],
		balanceTokens: [
			{
				symbol: "USDC",
				name: "Circle USD",
				amount: "256.29 USDC",
				value: 257.35,
				pnl: .01,
				network: "BNB",
				color: "#2775CA"
			},
			{
				symbol: "ETH",
				name: "Ethereum",
				amount: "0.11 ETH",
				value: 254.09,
				pnl: .5,
				network: "BNB",
				color: "#627EEA"
			},
			{
				symbol: "BNB",
				name: "Binance",
				amount: "0.09 BNB",
				value: 56.44,
				pnl: .5,
				network: "BNB",
				color: "#F0B90B"
			}
		]
	}
} }, qu = {
	overview: "Overview",
	spotLabel: "Spot",
	perpLabel: "Perp",
	hideSmallBalances: "Hide small balances",
	bridgeCrypto: "Bridge Crypto",
	emptyMessage: "No assets yet",
	loadingMessage: "Loading...",
	tabs: {
		assets: "Assets",
		transactions: "Transactions",
		gift: "Gift"
	},
	pnlSuffix: {
		"24h": "over the past 24 hours",
		"7d": "over the past 7 days",
		all: "over your lifetime"
	},
	bucketEmptyMessage: (e) => `No assets in ${e.label}`
}, Ju = (e) => `${e < 0 ? "-" : ""}$${Math.abs(e).toLocaleString("en-US", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
})}`, Yu = (e) => {
	let t = e < 0 ? "-" : "", n = Math.abs(e), r = n % 1 != 0;
	return `${t}$${n.toLocaleString("en-US", {
		minimumFractionDigits: r ? 2 : 0,
		maximumFractionDigits: 2
	})}`;
}, Xu = (e) => {
	let [t, n = "00"] = Math.abs(e).toFixed(2).split(".");
	return {
		whole: `${e < 0 ? "-" : ""}$${Number(t).toLocaleString("en-US")}`,
		dec: `.${n}`
	};
};
function Zu(e, t, n) {
	let [r, i] = L(n);
	return [e === void 0 ? r : e, (n) => {
		e === void 0 && i(n), t?.(n);
	}];
}
var Qu = ({ size: e = 12 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M6 3l4.5 6h-9z" })
}), $u = ({ size: e = 12 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M6 9L1.5 3h9z" })
}), ed = ({ size: e = 20 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M9.75832 12.7417L11.9167 10.5833C12.2417 10.2583 12.2417 9.73332 11.9167 9.40832L9.75832 7.24999C9.23332 6.72499 8.33332 7.09999 8.33332 7.84165V12.1583C8.33332 12.9 9.23332 13.2667 9.75832 12.7417Z",
		fill: "currentColor"
	})
}), td = ({ size: e = 16 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
}), nd = ({ size: e = 16 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 24 24",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		fill: "#F0B90B",
		d: "M12 2 7.4 6.6 9 8.2 12 5.2 15 8.2l1.6-1.6L12 2zm-7 7L3.4 10.6 5 12.2 6.6 10.6 5 9zm14 0-1.6 1.6L19 12.2l1.6-1.6L19 9zM7.4 13.4 5.8 15 12 21.2 18.2 15l-1.6-1.6L12 18l-4.6-4.6zm4.6-2L10.4 13 12 14.6 13.6 13 12 11.4z"
	})
}), rd = B.span`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid
    ${({ $variant: e }) => e === "spot" ? "#D7CAEC" : "#C2D8DB"};
  background: ${({ $variant: e }) => e === "spot" ? "#EEEAF4" : "#F4FAFB"};
  color: #000;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  html.dark & {
    border-color: ${({ $variant: e }) => e === "spot" ? "#55496E" : "#575775"};
    background: ${({ $variant: e }) => e === "spot" ? "#27252B" : "#223537"};
  }
`, id = () => /* @__PURE__ */ U(rd, {
	$variant: "spot",
	"aria-hidden": !0,
	children: "💸"
}), ad = () => /* @__PURE__ */ U(rd, {
	$variant: "perp",
	"aria-hidden": !0,
	children: "🔮"
}), od = z`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`, sd = B.span`
  display: inline-block;
  width: ${({ $w: e }) => e ?? "64px"};
  height: ${({ $h: e }) => e ?? "14px"};
  border-radius: ${({ $br: e }) => e ?? "6px"};
  background: linear-gradient(
    90deg,
    ${({ theme: e }) => e.colors.input} 0%,
    ${({ theme: e }) => e.colors.inputSecondary} 50%,
    ${({ theme: e }) => e.colors.input} 100%
  );
  background-size: 400px 100%;
  animation: ${od} 1.4s ease-in-out infinite;
  vertical-align: middle;
`, cd = B.div`
  width: ${({ $w: e }) => e ?? "100%"};
  height: ${({ $h: e }) => e ?? "14px"};
  border-radius: ${({ $br: e }) => e ?? "6px"};
  background: linear-gradient(
    90deg,
    ${({ theme: e }) => e.colors.input} 0%,
    ${({ theme: e }) => e.colors.inputSecondary} 50%,
    ${({ theme: e }) => e.colors.input} 100%
  );
  background-size: 400px 100%;
  animation: ${od} 1.4s ease-in-out infinite;
`, ld = B(E)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 32px 16px;
  gap: 8px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: center;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`, ud = B.section`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  ${({ $embedded: e, theme: t }) => e ? R`
          border: 0;
          border-radius: 0;
          background: transparent;
          padding: 0;
        ` : R`
          padding: 16px 16px 24px 16px;
          border-radius: 24px;
          border-top: 1px solid ${t.colors.cardBorder};
          border-right: 1px solid ${t.colors.cardBorder};
          border-bottom: 2px solid ${t.colors.cardBorder};
          border-left: 1px solid ${t.colors.cardBorder};
          background: ${t.colors.card};
        `}
`, dd = B(E)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`, fd = B.button`
  display: inline-flex;
  align-items: center;
  padding: 8px;
  background: ${({ theme: e }) => e.colors.cardSecondary};
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  cursor: pointer;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.textSubtle};
  transition: filter 0.12s;
  &:hover {
    filter: brightness(0.98);
  }
`, pd = B.span`
  display: inline-flex;
  align-items: center;
  margin-right: -13px;
  padding-right: 13px;
`, md = B.span`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${({ $variant: e, theme: t }) => e === "light" ? `
    background: ${t.colors.cardSecondary};
    border: 1px solid ${t.colors.cardBorder};
    z-index: 2;
    margin-right: -13px;
  ` : "\n    background: #121212;\n    z-index: 1;\n    color: #F0B90B;\n  "}
`, hd = B.span`
  display: grid;
  grid-template-columns: 9px 9px;
  grid-template-rows: 9px 9px;
  gap: 1px;
`, gd = B.span`
  width: 9px;
  height: 9px;
  border-radius: 3px;
  display: block;
  background: ${({ $color: e }) => e};
`, _d = B(E)`
  align-items: center;
  gap: 16px;
  width: 100%;
`, vd = B.button`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, $muted: t, theme: n }) => t ? n.colors.textDisabled : e ? n.colors.secondary : n.colors.textSubtle};
  cursor: ${({ $muted: e }) => e ? "default" : "pointer"};
  line-height: 1.5;
  transition: color 0.15s;
  &:hover {
    color: ${({ $active: e, $muted: t, theme: n }) => t ? n.colors.textDisabled : e ? n.colors.secondary : n.colors.text};
  }
`, yd = B(E)`
  flex-direction: column;
  gap: 8px;
  width: 100%;
`, bd = B(E)`
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`, xd = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, Sd = B.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
  opacity: ${({ $muted: e }) => e ? .6 : 1};

  html.dark & {
    border-color: #55496E;
    background: #372F47;
    box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.16) inset;
  }
`, Cd = B.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: ${({ $active: e, theme: t }) => e ? t.colors.textSubtle : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? "#fff" : t.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  line-height: 150%;
  padding: 4px 8px;
  border-radius: 16px;
  cursor: pointer;
  min-width: 40px;
  transition: background 0.16s, color 0.16s;

  html.dark & {
    ${({ $active: e }) => e ? R`
            width: 47px;
            padding: 4px;
            background: #B8ADD2;
            color: #000;
            min-width: 0;
          ` : ""}
  }
`, wd = B(E)`
  align-items: center;
  gap: 4px;
  width: 100%;
`, Td = B.span`
  font-family: 'Kanit', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.32px;
  display: inline-flex;
  align-items: baseline;
`, Ed = B.span`
  color: ${({ theme: e }) => e.colors.text};
`, Dd = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Od = B(E)`
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 1.4;
`, kd = B.span`
  color: ${({ $up: e }) => e ? "var(--pcs-colors-positive60)" : "var(--pcs-colors-failure)"};
  font-weight: 600;
`, Ad = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, jd = B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  font-size: ${({ $size: e }) => e === "lg" ? "16px" : e === "md" ? "14px" : "12px"};
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  background: ${({ $up: e }) => e ? "var(--pcs-colors-positive10)" : "color-mix(in srgb, var(--pcs-colors-failure) 14%, transparent)"};
  color: ${({ theme: e }) => e.colors.text};
  & svg {
    color: ${({ $up: e }) => e ? "var(--pcs-colors-positive60)" : "var(--pcs-colors-failure)"};
  }
`, Md = B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.textSubtle};
  letter-spacing: 0.12px;
  & svg {
    color: ${({ $up: e }) => e ? "var(--pcs-colors-positive60)" : "var(--pcs-colors-failure)"};
  }
`, Nd = B.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  overflow: hidden;
  border-radius: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  }
`, Pd = B.div`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, Fd = B.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
  padding: 16px;
  overflow: hidden;
  background: transparent;
`, Id = B.div`
  position: relative;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: transparent;
`, Ld = B(E)`
  align-items: center;
  gap: 8px;
  align-self: stretch;
`, Rd = B.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, zd = B(E)`
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  line-height: 1.5;
`, Bd = B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`, Vd = B.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
`, Hd = B.button`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-right: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-left: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  cursor: pointer;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
  &:hover {
    filter: brightness(0.98);
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`, Ud = B(E)`
  align-items: center;
  gap: 8px;
  align-self: stretch;
`, Wd = B.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.text};
  cursor: pointer;
  &:hover {
    color: ${({ theme: e }) => e.colors.secondary};
  }
`, Gd = B.span`
  flex: 1 0 0;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, Kd = B.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
`, qd = B.span`
  display: block;
  height: 12px;
  flex: 1 0 0;
  min-width: 1px;
  border-radius: 99px 0 0 99px;
  background: linear-gradient(180deg, #53DEE9 0%, #1FC7D4 100%);
`, Jd = B.span`
  display: block;
  height: 12px;
  width: 83px;
  background: linear-gradient(180deg, #8051D6 0%, #492286 100%);
`, Yd = B(E)`
  align-items: center;
  gap: 16px;
`, Xd = B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 1.5;
`, Zd = B.span`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ $kind: e, theme: t }) => e === "spot" ? t.colors.primary : t.colors.secondary};
`, Qd = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-weight: 600;
  letter-spacing: 0.12px;
  margin-right: -4px;
`, $d = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-weight: 600;
  letter-spacing: 0.12px;
`;
B.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
`, B(E)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`, B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`, B.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #F3EEFF;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  flex-shrink: 0;
`, B(E)`
  flex-direction: column;
  line-height: 1.5;
  min-width: 0;
`;
var ef = B.div`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, tf = B.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  letter-spacing: 0.12px;
`;
B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`, B.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
`;
var nf = B.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  line-height: 1.5;
  white-space: nowrap;
`, rf = B.button`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  border-top: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-right: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-left: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  cursor: pointer;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
  &:hover {
    filter: brightness(0.98);
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`, af = B.span`
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${({ $expanded: e }) => e ? "rotate(180deg)" : "none"};
`, of = B(E)`
  align-items: center;
  gap: 8px;
  width: 100%;
`, sf = B.div`
  flex: 1;
  height: 12px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  overflow: hidden;
`, cf = B.div`
  height: 100%;
  border-radius: 99px;
  width: ${({ $pct: e }) => e}%;
  background: ${({ $kind: e, theme: t }) => e === "spot" ? "linear-gradient(180deg, #53DEE9 0%, #1FC7D4 100%)" : t.colors.secondary};
`, lf = B.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  letter-spacing: 0.12px;
  line-height: 1.5;
  min-width: 30px;
  text-align: right;
`;
B.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
`;
var uf = B.p`
  margin: 0;
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.12px;
`, df = B.label`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  gap: 10px;
  width: fit-content;
  border-radius: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
  cursor: pointer;
`, ff = B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, pf = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`, mf = B.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: help;
`, hf = B(E)`
  flex-direction: column;
  align-self: stretch;
`, gf = B(E)`
  gap: 8px;
  align-items: center;
  padding: 10px 8px;
  border-radius: 16px;
`, _f = B.span`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
`, vf = B.span`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid rgba(8, 6, 11, 0.1);
  box-sizing: border-box;
  background: ${({ $color: e }) => e};
`, yf = B.span`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 16px;
  height: 16px;
  border-radius: 5.333px;
  background: #1E1E1E;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`, bf = B(E)`
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
`, xf = B(E)`
  gap: 4px;
  align-items: baseline;
`, Sf = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`, Cf = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`, wf = B.div`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`, Tf = B(E)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`, Ef = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`, Df = B.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`, Of = B.span`
  color: ${({ $side: e }) => e === "long" ? "var(--pcs-colors-positive60)" : "var(--pcs-colors-failure)"};
`, kf = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Af = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, jf = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`, Mf = B(E)`
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
`, Nf = B.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  border-radius: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.cardSecondary};
  overflow: hidden;
`, Pf = B(E)`
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  align-self: stretch;
`, Ff = B.div`
  height: 1px;
  background: ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, If = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`, Lf = B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Rf = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`, zf = B(E)`
  flex-direction: column;
  align-self: stretch;
  gap: 12px;
  padding: 0 16px 16px;
  ${df} {
    margin-top: 4px;
  }
`, Bf = B(E)`
  align-self: stretch;
  align-items: center;
  gap: 8px;
`, Vf = B.button`
  display: flex;
  padding: 11px 12px 13px 12px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border: 0;
  border-bottom: 2px solid ${({ $primary: e }) => e ? "rgba(0, 0, 0, 0.20)" : "rgba(0, 0, 0, 0.10)"};
  border-radius: 16px;
  background: ${({ $primary: e, theme: t }) => e ? t.colors.primary : t.colors.input};
  color: ${({ $primary: e, theme: t }) => e ? t.colors.invertedContrast : t.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    filter: brightness(0.98);
  }
  &:active {
    transform: translateY(1px);
    border-bottom-width: 0;
    padding-bottom: 15px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`, Hf = B.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: ${({ theme: e }) => e.colors.primary60};
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  align-self: center;
  &:hover {
    filter: brightness(1.15);
  }
`;
function Uf({ value: e, lg: t }) {
	let n = e >= 0;
	return /* @__PURE__ */ W(jd, {
		$up: n,
		$size: t ? "lg" : "sm",
		children: [U(n ? Qu : $u, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(e).toFixed(2), "%"] })]
	});
}
function Wf({ value: e, onChange: t, options: n, muted: r }) {
	return /* @__PURE__ */ U(Sd, {
		role: "tablist",
		$muted: r,
		children: n.map((n) => /* @__PURE__ */ U(Cd, {
			type: "button",
			role: "tab",
			"aria-selected": e === n.value,
			$active: e === n.value,
			onClick: () => t(n.value),
			children: n.label
		}, n.value))
	});
}
function Gf({ symbol: e, color: t }) {
	return /* @__PURE__ */ U(vf, {
		$color: t,
		children: e.slice(0, 1)
	});
}
function Kf({ p: e, renderTokenIcon: t }) {
	let n = e.pnlPct >= 0;
	return /* @__PURE__ */ W(gf, { children: [
		/* @__PURE__ */ U(_f, { children: t ? t({
			symbol: e.symbol,
			color: e.color
		}) : /* @__PURE__ */ U(Gf, {
			symbol: e.symbol,
			color: e.color
		}) }),
		/* @__PURE__ */ W(bf, { children: [/* @__PURE__ */ U(Sf, { children: e.symbol }), /* @__PURE__ */ W(Df, { children: [
			/* @__PURE__ */ U(Of, {
				$side: e.side.toLowerCase(),
				children: e.side
			}),
			/* @__PURE__ */ U(kf, { children: "•" }),
			/* @__PURE__ */ U(Af, { children: e.leverage })
		] })] }),
		/* @__PURE__ */ W(Tf, { children: [/* @__PURE__ */ W(jf, { children: [e.pnlUsd >= 0 ? "+" : "-", Ju(Math.abs(e.pnlUsd))] }), /* @__PURE__ */ W(jd, {
			$up: n,
			$size: "md",
			children: [U(n ? Qu : $u, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(e.pnlPct).toFixed(1), "%"] })]
		})] })
	] });
}
function qf({ tk: e, renderTokenIcon: t, showPnl: n = !0 }) {
	let r = e.pnl >= 0;
	return /* @__PURE__ */ W(gf, { children: [
		/* @__PURE__ */ U(_f, { children: t ? t({
			symbol: e.symbol,
			color: e.color,
			network: e.network
		}) : /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(Gf, {
			symbol: e.symbol,
			color: e.color
		}), /* @__PURE__ */ U(yf, { children: /* @__PURE__ */ U(nd, { size: 11 }) })] }) }),
		/* @__PURE__ */ W(bf, { children: [/* @__PURE__ */ W(xf, { children: [/* @__PURE__ */ U(Sf, { children: e.symbol }), /* @__PURE__ */ U(Cf, { children: e.name })] }), /* @__PURE__ */ U(wf, { children: e.amount })] }),
		/* @__PURE__ */ W(Tf, { children: [/* @__PURE__ */ U(Ef, { children: Yu(e.value) }), n && /* @__PURE__ */ W(jd, {
			$up: r,
			$size: "md",
			children: [U(r ? Qu : $u, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(e.pnl).toFixed(1), "%"] })]
		})] })
	] });
}
var Jf = (e) => [
	{
		key: "send",
		label: "Send",
		onClick: () => e?.("send")
	},
	{
		key: "receive",
		label: "Receive",
		onClick: () => e?.("receive")
	},
	{
		key: "swap",
		label: "Swap",
		primary: !0,
		onClick: () => e?.("swap")
	}
], Yf = (e) => [{
	key: "deposit",
	label: "Deposit",
	primary: !0,
	onClick: () => e?.("deposit")
}, {
	key: "withdraw",
	label: "Withdraw",
	onClick: () => e?.("withdraw")
}];
function Xf({ actions: e }) {
	return /* @__PURE__ */ U(Bf, { children: e.map((e) => /* @__PURE__ */ U(Vf, {
		type: "button",
		$primary: e.primary,
		disabled: e.disabled,
		onClick: e.onClick,
		children: e.label
	}, e.key)) });
}
function Zf({ bucket: e, timeframe: t, onOpen: n, showPnl: r }) {
	let i = e.state ?? "data", a = e.pnl?.[t] ?? 0;
	if (i === "loading") return /* @__PURE__ */ U(Id, { children: /* @__PURE__ */ W(Ld, { children: [
		/* @__PURE__ */ U(Rd, {
			"aria-hidden": !0,
			children: e.key === "spot" ? /* @__PURE__ */ U(id, {}) : /* @__PURE__ */ U(ad, {})
		}),
		/* @__PURE__ */ W(zd, { children: [/* @__PURE__ */ U(ef, { children: e.label }), /* @__PURE__ */ U(tf, { children: e.sublabel })] }),
		/* @__PURE__ */ W(Bd, { children: [/* @__PURE__ */ U(Vd, { children: /* @__PURE__ */ U(sd, {
			$w: "72px",
			$h: "14px"
		}) }), /* @__PURE__ */ U(Hd, {
			type: "button",
			disabled: !0,
			"aria-label": `Loading ${e.label}`,
			children: /* @__PURE__ */ U(af, { children: /* @__PURE__ */ U(ed, {}) })
		})] })
	] }) });
	let o = i === "data" ? e.amount ?? 0 : 0;
	return /* @__PURE__ */ U(Id, { children: /* @__PURE__ */ W(Ld, { children: [
		/* @__PURE__ */ U(Rd, {
			"aria-hidden": !0,
			children: e.key === "spot" ? /* @__PURE__ */ U(id, {}) : /* @__PURE__ */ U(ad, {})
		}),
		/* @__PURE__ */ W(zd, { children: [/* @__PURE__ */ U(ef, { children: e.label }), /* @__PURE__ */ U(tf, { children: e.sublabel })] }),
		/* @__PURE__ */ W(Bd, { children: [/* @__PURE__ */ W(Vd, { children: [/* @__PURE__ */ U(nf, { children: Ju(o) }), i === "data" && r && e.pnl && /* @__PURE__ */ W(Md, {
			$up: a >= 0,
			children: [U(a >= 0 ? Qu : $u, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(a).toFixed(2), "%"] })]
		})] }), /* @__PURE__ */ U(Hd, {
			type: "button",
			"aria-label": `Open ${e.label}`,
			onClick: n,
			children: /* @__PURE__ */ U(af, { children: /* @__PURE__ */ U(ed, {}) })
		})] })
	] }) });
}
function Qf({ bucket: e, pct: t, timeframe: n, onTfChange: r, tfOptions: i, onBack: a, hideSmall: o, setHideSmall: s, hideSmallThreshold: c, onSpotAction: u, onPerpAction: d, onBridge: f, showPnl: p, showTimeframe: m, showBridge: h, labels: g, renderTokenIcon: v }) {
	let [b, x] = L(null), S = e.state ?? "data", w = e.pnl?.[n] ?? 0, D = S === "data" ? e.amount ?? 0 : 0, O = w / 100 * D, k = g.pnlSuffix[n], A = e.tokens && o ? e.tokens.filter((e) => e.value >= c) : e.tokens, j = e.balanceTokens && o ? e.balanceTokens.filter((e) => e.value >= c) : e.balanceTokens, M = e.positions && o ? e.positions.filter((e) => Math.abs(e.pnlUsd) >= c) : e.positions, N = e.key === "spot", P = F(() => e.actions ? e.actions : N ? Jf(u) : Yf(d), [
		e.actions,
		N,
		u,
		d
	]), I = e.perpStats ?? {
		balance: 0,
		balancePnlPct: 0,
		unrealizedPnl: 0,
		unrealizedPnlPct: 0
	}, R = S === "loading", z = S === "empty", { targetRef: B, tooltip: V } = T("Hides tokens worth less than $0.01", {
		placement: "top",
		oneLine: !0
	});
	return /* @__PURE__ */ W(H, { children: [
		/* @__PURE__ */ W(Ud, { children: [
			/* @__PURE__ */ U(Wd, {
				type: "button",
				onClick: a,
				"aria-label": "Back",
				children: /* @__PURE__ */ U(_, {
					width: 20,
					height: 20
				})
			}),
			/* @__PURE__ */ U(Gd, { children: e.label }),
			m && /* @__PURE__ */ U(Wf, {
				value: n,
				onChange: r,
				options: i,
				muted: R || z
			})
		] }),
		/* @__PURE__ */ W(Mf, { children: [
			/* @__PURE__ */ W(yd, { children: [/* @__PURE__ */ U(wd, { children: R ? /* @__PURE__ */ U(cd, {
				$w: "160px",
				$h: "32px",
				$br: "8px"
			}) : /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(Td, { children: [/* @__PURE__ */ U(Ed, { children: Ju(D).split(".")[0] }), /* @__PURE__ */ W(Dd, { children: [".", Ju(D).split(".")[1] ?? "00"] })] }), p && S === "data" && e.pnl && /* @__PURE__ */ U(Uf, {
				value: w,
				lg: !0
			})] }) }), !R && p && S === "data" && e.pnl && /* @__PURE__ */ U(Od, { children: N ? /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(kd, {
				$up: w >= 0,
				children: [w >= 0 ? "+" : "-", Ju(Math.abs(O)).replace("-", "")]
			}), /* @__PURE__ */ U(Ad, { children: ` ${k}` })] }) : /* @__PURE__ */ U(Ad, { children: e.sublabel }) })] }),
			/* @__PURE__ */ W(of, { children: [/* @__PURE__ */ U(sf, { children: /* @__PURE__ */ U(cf, {
				$pct: S === "data" ? t : 0,
				$kind: e.key
			}) }), /* @__PURE__ */ W(lf, { children: [(S === "data" ? t : 0).toFixed(0), "%"] })] }),
			e.description && /* @__PURE__ */ U(uf, { children: e.description })
		] }),
		R && /* @__PURE__ */ W(E, {
			flexDirection: "column",
			alignSelf: "stretch",
			gap: "12px",
			children: [
				/* @__PURE__ */ U(cd, {
					$h: "48px",
					$br: "16px"
				}),
				/* @__PURE__ */ U(cd, {
					$h: "48px",
					$br: "16px"
				}),
				/* @__PURE__ */ U(cd, {
					$h: "48px",
					$br: "12px"
				})
			]
		}),
		z && /* @__PURE__ */ U(ld, { children: e.emptyContent ?? g.bucketEmptyMessage({ label: e.label }) }),
		S === "data" && N && /* @__PURE__ */ W(H, { children: [
			/* @__PURE__ */ U(df, { children: /* @__PURE__ */ W(ff, { children: [
				/* @__PURE__ */ U(pf, { children: g.hideSmallBalances }),
				/* @__PURE__ */ U(mf, {
					ref: B,
					role: "img",
					"aria-label": "Hide small balances explanation",
					onClick: (e) => e.preventDefault(),
					children: /* @__PURE__ */ U(td, { size: 16 })
				}),
				V,
				/* @__PURE__ */ U(l, {
					scale: "sm",
					checked: o,
					onChange: (e) => s(e.target.checked)
				})
			] }) }),
			/* @__PURE__ */ U(hf, { children: A?.map((e, t) => /* @__PURE__ */ U(qf, {
				tk: e,
				renderTokenIcon: v,
				showPnl: p
			}, e.symbol + t)) }),
			/* @__PURE__ */ U(Xf, { actions: P })
		] }),
		S === "data" && !N && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(Nf, { children: [
			/* @__PURE__ */ W(Pf, { children: [/* @__PURE__ */ U(If, { children: "Balance" }), /* @__PURE__ */ W(Lf, { children: [
				/* @__PURE__ */ U(Rf, { children: Ju(I.balance) }),
				p && /* @__PURE__ */ W(Md, {
					$up: I.balancePnlPct >= 0,
					children: [I.balancePnlPct >= 0 ? /* @__PURE__ */ U(Qu, { size: 12 }) : /* @__PURE__ */ U($u, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(I.balancePnlPct).toFixed(2), "%"] })]
				}),
				/* @__PURE__ */ U(rf, {
					type: "button",
					"aria-label": b === "balance" ? "Collapse Balance" : "Expand Balance",
					"aria-expanded": b === "balance",
					onClick: () => x((e) => e === "balance" ? null : "balance"),
					children: /* @__PURE__ */ U(af, {
						$expanded: b === "balance",
						children: /* @__PURE__ */ U(C, {
							width: 20,
							height: 20
						})
					})
				})
			] })] }),
			b === "balance" && /* @__PURE__ */ W(zf, { children: [/* @__PURE__ */ U(Ff, {}), /* @__PURE__ */ U(hf, { children: (j || []).map((e, t) => /* @__PURE__ */ U(qf, {
				tk: e,
				renderTokenIcon: v,
				showPnl: p
			}, e.symbol + t)) })] }),
			/* @__PURE__ */ U(Ff, {}),
			/* @__PURE__ */ W(Pf, { children: [/* @__PURE__ */ U(If, { children: "Unrealized PnL" }), /* @__PURE__ */ W(Lf, { children: [
				/* @__PURE__ */ U(Rf, { children: I.unrealizedPnl.toFixed(2) }),
				p && /* @__PURE__ */ W(Md, {
					$up: I.unrealizedPnlPct >= 0,
					children: [I.unrealizedPnlPct >= 0 ? /* @__PURE__ */ U(Qu, { size: 12 }) : /* @__PURE__ */ U($u, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(I.unrealizedPnlPct).toFixed(2), "%"] })]
				}),
				/* @__PURE__ */ U(rf, {
					type: "button",
					"aria-label": b === "pnl" ? "Collapse Unrealized PnL" : "Expand Unrealized PnL",
					"aria-expanded": b === "pnl",
					onClick: () => x((e) => e === "pnl" ? null : "pnl"),
					children: /* @__PURE__ */ U(af, {
						$expanded: b === "pnl",
						children: /* @__PURE__ */ U(C, {
							width: 20,
							height: 20
						})
					})
				})
			] })] }),
			b === "pnl" && /* @__PURE__ */ W(zf, { children: [/* @__PURE__ */ U(Ff, {}), /* @__PURE__ */ U(hf, { children: (M || []).map((e, t) => /* @__PURE__ */ U(Kf, {
				p: e,
				renderTokenIcon: v
			}, e.symbol + t)) })] })
		] }), /* @__PURE__ */ U(Xf, { actions: P })] }),
		h && /* @__PURE__ */ W(Hf, {
			type: "button",
			onClick: f,
			children: [g.bridgeCrypto, /* @__PURE__ */ U(y, {
				width: 24,
				height: 24
			})]
		})
	] });
}
function $f() {
	return /* @__PURE__ */ W(fd, {
		type: "button",
		"aria-label": "Wallet — all chains",
		children: [/* @__PURE__ */ W(pd, { children: [/* @__PURE__ */ U(md, {
			$variant: "light",
			children: /* @__PURE__ */ W(hd, { children: [
				/* @__PURE__ */ U(gd, { $color: "#F0B90B" }),
				/* @__PURE__ */ U(gd, { $color: "#627EEA" }),
				/* @__PURE__ */ U(gd, { $color: "#46557A" }),
				/* @__PURE__ */ U(gd, { $color: "#0052FF" })
			] })
		}), /* @__PURE__ */ U(md, {
			$variant: "dark",
			children: /* @__PURE__ */ U(nd, {})
		})] }), /* @__PURE__ */ U(s, {
			width: 20,
			height: 20
		})]
	});
}
function ep() {
	return /* @__PURE__ */ W(fd, {
		type: "button",
		"aria-label": "Select chain",
		children: [/* @__PURE__ */ U(md, {
			$variant: "dark",
			children: /* @__PURE__ */ U(nd, {})
		}), /* @__PURE__ */ U(s, {
			width: 20,
			height: 20
		})]
	});
}
function tp({ data: e = Ku, variant: t = "data", emptyContent: n, initialTab: r = "assets", initialTimeframe: i = "24h", initialExpanded: a = null, tab: o, onTabChange: s, timeframe: c, onTimeframeChange: l, expanded: u, onExpandedChange: d, hideSmall: f, onHideSmallChange: p, hideSmallThreshold: m = 1, walletChip: h, chainChip: g, hideHeader: _ = !1, embedded: v = !1, visibleTabs: b = [
	"assets",
	"tx",
	"gift"
], tabContent: x, heroTitle: S, showTimeframe: C = !0, showPnl: w = !0, showBridge: T = !1, renderTokenIcon: D, labels: O, onBridge: k, onSpotAction: A, onPerpAction: j }) {
	let [M, N] = Zu(o, s, r), [P, I] = Zu(c, l, i), [L, R] = Zu(u, d, a), [z, B] = Zu(f, p, !1), V = F(() => ({
		...qu,
		...O,
		tabs: {
			...qu.tabs,
			...O?.tabs
		},
		pnlSuffix: {
			...qu.pnlSuffix,
			...O?.pnlSuffix
		},
		bucketEmptyMessage: O?.bucketEmptyMessage ?? qu.bucketEmptyMessage
	}), [O]), ee = S ?? O?.heroTitle ?? "My Wallet", G = F(() => {
		let t = e.buckets.spot.state ?? "data", n = e.buckets.perp.state ?? "data", r = t === "data" ? e.buckets.spot.amount ?? 0 : 0, i = n === "data" ? e.buckets.perp.amount ?? 0 : 0, a = r + i, o = a === 0 ? 1 : a;
		return {
			spot: r,
			perp: i,
			total: a,
			spotPct: r / o * 100,
			perpPct: i / o * 100
		};
	}, [e]), K = F(() => {
		if (G.total === 0) return 0;
		let t = e.buckets.spot.pnl?.[P] ?? 0, n = e.buckets.perp.pnl?.[P] ?? 0;
		return (t * G.spot + n * G.perp) / G.total;
	}, [
		e,
		P,
		G
	]), te = G.total * (K / 100), q = V.pnlSuffix[P], ne = Xu(G.total), re = [
		{
			value: "24h",
			label: "24H"
		},
		{
			value: "7d",
			label: "7D"
		},
		{
			value: "all",
			label: "All"
		}
	], ie = [
		{
			value: "assets",
			label: V.tabs.assets
		},
		{
			value: "tx",
			label: V.tabs.transactions
		},
		{
			value: "gift",
			label: V.tabs.gift
		}
	].filter((e) => b.includes(e.value));
	if (t === "data" && L !== null && M === "assets" && !x?.assets) {
		let t = L === "spot" ? e.buckets.spot : e.buckets.perp, n = L === "spot" ? G.spotPct : G.perpPct;
		return /* @__PURE__ */ U(ud, {
			"aria-label": "Wallet",
			$embedded: v,
			children: /* @__PURE__ */ U(Qf, {
				bucket: t,
				pct: n,
				timeframe: P,
				onTfChange: I,
				tfOptions: re,
				onBack: () => R(null),
				hideSmall: z,
				setHideSmall: B,
				hideSmallThreshold: m,
				onSpotAction: A,
				onPerpAction: j,
				onBridge: k,
				showPnl: w,
				showTimeframe: C,
				showBridge: T,
				labels: V,
				renderTokenIcon: D
			})
		});
	}
	let J = () => _ ? null : /* @__PURE__ */ W(dd, { children: [h ?? /* @__PURE__ */ U($f, {}), g ?? /* @__PURE__ */ U(ep, {})] }), ae = () => ie.length === 0 ? null : /* @__PURE__ */ U(_d, {
		role: "tablist",
		children: ie.map((e) => /* @__PURE__ */ U(vd, {
			type: "button",
			role: "tab",
			"aria-selected": M === e.value,
			$active: M === e.value,
			$muted: t === "loading",
			onClick: () => N(e.value),
			children: e.label
		}, e.value))
	}), oe = (e, n) => /* @__PURE__ */ W(yd, { children: [
		/* @__PURE__ */ W(bd, { children: [/* @__PURE__ */ U(xd, { children: ee }), C && /* @__PURE__ */ U(Wf, {
			value: P,
			onChange: I,
			options: re,
			muted: n
		})] }),
		/* @__PURE__ */ U(wd, { children: n ? /* @__PURE__ */ U(cd, {
			$w: "180px",
			$h: "32px",
			$br: "8px"
		}) : /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(Td, { children: [/* @__PURE__ */ U(Ed, { children: e.whole }), /* @__PURE__ */ U(Dd, { children: e.dec })] }), w && t === "data" && /* @__PURE__ */ U(Uf, {
			value: K,
			lg: !0
		})] }) }),
		!n && w && t === "data" && /* @__PURE__ */ W(Od, { children: [/* @__PURE__ */ W(kd, {
			$up: K >= 0,
			children: [K >= 0 ? "+" : "-", Ju(Math.abs(te)).replace("-", "")]
		}), /* @__PURE__ */ U(Ad, { children: ` ${q}` })] })
	] });
	if (t === "loading") {
		let t = Xu(0);
		return /* @__PURE__ */ W(ud, {
			"aria-label": "Wallet",
			"aria-busy": "true",
			$embedded: v,
			children: [
				J(),
				ae(),
				oe(t, !0),
				/* @__PURE__ */ W(Nd, { children: [
					/* @__PURE__ */ W(Fd, { children: [
						/* @__PURE__ */ U(Pd, { children: V.overview }),
						/* @__PURE__ */ U(cd, {
							$h: "12px",
							$br: "999px"
						}),
						/* @__PURE__ */ W(E, {
							gap: "16px",
							children: [/* @__PURE__ */ U(sd, {
								$w: "60px",
								$h: "14px"
							}), /* @__PURE__ */ U(sd, {
								$w: "60px",
								$h: "14px"
							})]
						})
					] }),
					/* @__PURE__ */ U(Id, { children: /* @__PURE__ */ W(Ld, { children: [
						/* @__PURE__ */ U(Rd, {
							"aria-hidden": !0,
							children: /* @__PURE__ */ U(id, {})
						}),
						/* @__PURE__ */ W(zd, { children: [/* @__PURE__ */ U(ef, { children: e.buckets.spot.label }), /* @__PURE__ */ U(tf, { children: e.buckets.spot.sublabel })] }),
						/* @__PURE__ */ U(Bd, { children: /* @__PURE__ */ U(sd, {
							$w: "72px",
							$h: "14px"
						}) })
					] }) }),
					/* @__PURE__ */ U(Id, { children: /* @__PURE__ */ W(Ld, { children: [
						/* @__PURE__ */ U(Rd, {
							"aria-hidden": !0,
							children: /* @__PURE__ */ U(ad, {})
						}),
						/* @__PURE__ */ W(zd, { children: [/* @__PURE__ */ U(ef, { children: e.buckets.perp.label }), /* @__PURE__ */ U(tf, { children: e.buckets.perp.sublabel })] }),
						/* @__PURE__ */ U(Bd, { children: /* @__PURE__ */ U(sd, {
							$w: "72px",
							$h: "14px"
						}) })
					] }) })
				] }),
				/* @__PURE__ */ W(Bf, { children: [
					/* @__PURE__ */ U(cd, {
						$h: "44px",
						$br: "12px"
					}),
					/* @__PURE__ */ U(cd, {
						$h: "44px",
						$br: "12px"
					}),
					/* @__PURE__ */ U(cd, {
						$h: "44px",
						$br: "12px"
					})
				] }),
				T && /* @__PURE__ */ W(Hf, {
					type: "button",
					disabled: !0,
					"aria-disabled": "true",
					children: [V.bridgeCrypto, /* @__PURE__ */ U(y, {
						width: 24,
						height: 24
					})]
				})
			]
		});
	}
	if (t === "empty") {
		let e = Xu(0);
		return /* @__PURE__ */ W(ud, {
			"aria-label": "Wallet",
			$embedded: v,
			children: [
				J(),
				ae(),
				oe(e, !1),
				/* @__PURE__ */ U(ld, { children: n ?? V.emptyMessage }),
				T && /* @__PURE__ */ W(Hf, {
					type: "button",
					onClick: k,
					children: [V.bridgeCrypto, /* @__PURE__ */ U(y, {
						width: 24,
						height: 24
					})]
				})
			]
		});
	}
	let se = M === "assets" ? x?.assets : x?.[M === "tx" ? "transactions" : "gift"];
	return /* @__PURE__ */ W(ud, {
		"aria-label": "Wallet",
		$embedded: v,
		children: [
			J(),
			ae(),
			oe(ne, !1),
			se || /* @__PURE__ */ W(Nd, { children: [
				/* @__PURE__ */ W(Fd, { children: [
					/* @__PURE__ */ U(Pd, { children: V.overview }),
					/* @__PURE__ */ W(Kd, { children: [/* @__PURE__ */ U(qd, {}), /* @__PURE__ */ U(Jd, {})] }),
					/* @__PURE__ */ W(Yd, { children: [/* @__PURE__ */ W(Xd, { children: [
						/* @__PURE__ */ U(Zd, { $kind: "spot" }),
						/* @__PURE__ */ U(Qd, { children: V.spotLabel }),
						/* @__PURE__ */ W($d, { children: [G.spotPct.toFixed(0), "%"] })
					] }), /* @__PURE__ */ W(Xd, { children: [
						/* @__PURE__ */ U(Zd, { $kind: "perp" }),
						/* @__PURE__ */ U(Qd, { children: V.perpLabel }),
						/* @__PURE__ */ W($d, { children: [G.perpPct.toFixed(0), "%"] })
					] })] })
				] }),
				/* @__PURE__ */ U(Zf, {
					bucket: e.buckets.spot,
					timeframe: P,
					onOpen: () => R("spot"),
					showPnl: w
				}),
				/* @__PURE__ */ U(Zf, {
					bucket: e.buckets.perp,
					timeframe: P,
					onOpen: () => R("perp"),
					showPnl: w
				})
			] }),
			T && /* @__PURE__ */ W(Hf, {
				type: "button",
				onClick: k,
				children: [V.bridgeCrypto, /* @__PURE__ */ U(y, {
					width: 24,
					height: 24
				})]
			})
		]
	});
}
//#endregion
export { ge as AccountPanel, ke as AssetModeButton, Ee as AssetModeModal, Aa as BookTradesPanel, Ta as ChartPanel, gs as DepositModal, vs as EnableTradingModal, xe as LeverageModal, Ne as MarginModeModal, qt as MarketsDropdown, Pr as OrderBook, wt as OrderConfirmModal, Go as OrderForm, Ke as PerpsErrorMessage, G as PerpsPanel, _i as PositionsPanel, He as RecentTrades, Rc as SimpleBetPanel, Ul as SimpleChartCard, Gu as SimplePositionsCard, Tl as SimpleTickerCard, Cn as SymbolHeader, ma as TpSlModal, q as UnderlineTab, ne as UnderlineTabs, tp as WalletPanel, pt as WithdrawModal };

//# sourceMappingURL=widgets.js.map