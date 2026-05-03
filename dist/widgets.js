import { B as e, D as t, E as n, F as r, H as i, Ht as a, Jn as o, Jt as s, Ki as c, M as l, Q as u, S as d, T as f, V as p, Vt as m, b as h, i as g, it as _, j as v, lt as y, nn as b, nr as x, o as S, ot as C, qi as w, t as T, w as E, wi as D } from "./chunks/useTooltip-C1nAa6Ub.js";
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
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
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
}), ne = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ U(K, {
	$fullWidth: r,
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
`, Y = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, ae = B(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, oe = B.button`
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
`, se = B(E)`
  flex-direction: column;
  gap: 8px;
`, ce = B(ae)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, le = (e) => e, ue = B(E)`
  align-items: center;
  gap: 12px;
  padding: 12px;
`, de = B(r).attrs({ fontSize: "14px" })`
  flex: 1;
  color: ${({ theme: e }) => e.colors.text};
`, fe = B.strong`
  margin-left: 8px;
  font-weight: 600;
`, pe = B.button`
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
`, me = ({ state: e, canDeposit: t = !0, onDeposit: n, t: r = le, mobileLabel: i }) => {
	let a = e.kind === "ready" && e.equity ? e.equity : "$0.00";
	return /* @__PURE__ */ W(ue, { children: [/* @__PURE__ */ W(de, { children: [
		i ?? r("Perpetual Account"),
		" ",
		/* @__PURE__ */ U(fe, { children: a })
	] }), /* @__PURE__ */ U(pe, {
		type: "button",
		onClick: n,
		disabled: !t,
		children: r("Deposit")
	})] });
}, he = (e) => {
	let { isMobile: a } = h();
	if (a) return /* @__PURE__ */ U(me, { ...e });
	let { walletDisplay: o, state: s, canDeposit: c = !0, canWithdraw: l = !0, onDeposit: u, onWithdraw: d, onEnableTrading: f, t: p = le } = e;
	return /* @__PURE__ */ W(re, { children: [
		/* @__PURE__ */ W(E, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ U(oe, {
				$variant: "primary",
				onClick: u,
				disabled: !c,
				children: p("Deposit")
			}), /* @__PURE__ */ U(oe, {
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
		s.kind === "ready" && /* @__PURE__ */ W(se, { children: [
			/* @__PURE__ */ U(ie, { children: p("Account Equity") }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(Y, { children: p("Wallet") }), /* @__PURE__ */ U(ae, { children: o ?? "—" })] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(Y, { children: p("Equity") }), /* @__PURE__ */ U(ae, { children: s.equity || "—" })] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(Y, { children: p("Available") }), /* @__PURE__ */ U(ae, { children: s.available || "—" })] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(Y, { children: p("Unrealized PnL") }), /* @__PURE__ */ U(ce, {
				$sign: s.pnlSign,
				children: s.unrealizedPnl || "—"
			})] }),
			/* @__PURE__ */ W(J, { children: [/* @__PURE__ */ U(Y, { children: p("Margin mode") }), /* @__PURE__ */ U(ae, { children: s.marginMode ?? p("Cross") })] })
		] })
	] });
}, ge = B(E)`
  gap: 10px;
  align-items: stretch;
`, _e = B(i).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, ve = B(E)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, ye = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, be = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: a = 1, maxLeverage: o = 100, availableBalance: s, onConfirm: c, onClose: l, isSubmitting: u = !1, errorSlot: p, t: m = ye }) => {
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
					/* @__PURE__ */ W(ge, { children: [
						/* @__PURE__ */ U(_e, {
							onClick: () => _((e) => v(e - 1)),
							disabled: h <= a,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ W(ve, { children: [h, "X"] }),
						/* @__PURE__ */ U(_e, {
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
}, xe = B.button`
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
`, Se = B.div`
  flex: 0 0 auto;
  margin-top: 2px;
`, Ce = B(E)`
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
`, we = (e) => e, Te = ({ isOpen: e, currentMode: t, onConfirm: n, onClose: a, isSubmitting: o = !1, disabled: s = !1, errorSlot: c, t: u = we }) => {
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
					/* @__PURE__ */ W(xe, {
						type: "button",
						$active: p === "SINGLE",
						onClick: () => !s && m("SINGLE"),
						disabled: s,
						"aria-pressed": p === "SINGLE",
						children: [/* @__PURE__ */ U(Se, {
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
							}), /* @__PURE__ */ W(Ce, { children: [
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
					/* @__PURE__ */ W(xe, {
						type: "button",
						$active: p === "MULTI",
						onClick: () => !s && m("MULTI"),
						disabled: s,
						"aria-pressed": p === "MULTI",
						children: [/* @__PURE__ */ U(Se, {
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
							}), /* @__PURE__ */ W(Ce, { children: [
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
}, Ee = B.button`
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
`, De = (e) => e, Oe = ({ mode: e, onClick: t, disabled: n, t: r = De }) => /* @__PURE__ */ U(Ee, {
	type: "button",
	onClick: t,
	disabled: n,
	title: r("Asset mode"),
	children: r(e === "MULTI" ? "Multi" : "Single")
}), ke = B.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, Ae = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, je = B.div`
  overflow-y: auto;
  min-height: 0;
`, Me = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, Ne = B.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Pe = B.span`
  text-align: right;
`, Fe = B(Pe)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ie = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, Le = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = F(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ W(H, { children: [
		t && /* @__PURE__ */ U(ke, { children: t }),
		/* @__PURE__ */ W(Ae, { children: [
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
		/* @__PURE__ */ U(je, { children: a.map((e) => /* @__PURE__ */ W(Me, { children: [
			/* @__PURE__ */ U(Ne, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ U(Pe, { children: e.size }),
			/* @__PURE__ */ U(Fe, { children: Ie(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ U("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ U(G, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, Re = B(f)`
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
`, ze = B(i).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Be = (e) => e, Ve = ({ variant: e, title: i, message: a, details: o, t: s = Be }) => {
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
				o && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(ze, {
					onClick: () => l((e) => !e),
					children: s(c ? "Hide details" : "Show details")
				}), c && /* @__PURE__ */ U(Re, { children: o })] })
			]
		})
	}) : /* @__PURE__ */ U(n, {
		variant: e,
		children: /* @__PURE__ */ U(t, { children: a })
	});
}, He = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ue = B(E)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, We = B(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ge = B(E)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Ke = B.button`
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
`, qe = B(E)`
  flex-direction: column;
`, Je = B.div`
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
`, Ye = B.button`
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
`, Xe = B(E)`
  flex-direction: column;
  gap: 8px;
`, Ze = B(E)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
`, Qe = B(E)`
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
`, $e = B.button`
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
`, et = B.input`
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
`, tt = B(E)`
  align-items: center;
  gap: 8px;
`, nt = B.button`
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
`, rt = B.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, it = B.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, at = B(E)`
  justify-content: space-between;
  align-items: center;
`, ot = B(E)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, st = [
	25,
	50,
	75
], ct = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: a, selectedAssetId: o, onSelectAsset: s, selectedAsset: c, destinationAddress: l, destinationChainName: u = "BSC", feeText: d, amount: p, onAmountChange: m, onPercentClick: h, onBack: v, onWithdraw: y, onClose: b, isSubmitting: x = !1, canSubmit: C = !0, errorSlot: w, t: T = He, renderTokenIcon: D }) => {
	let k = (e, t = 24) => D ? D(e, t) : /* @__PURE__ */ U(Je, {
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
			children: /* @__PURE__ */ W(Ue, { children: [
				t === "amount" && /* @__PURE__ */ U(E, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ W(Ye, {
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
					/* @__PURE__ */ W(f, { children: [/* @__PURE__ */ U(We, {
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
					!n && a.length === 0 && /* @__PURE__ */ W(ot, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						children: T("Nothing to withdraw yet")
					}), /* @__PURE__ */ U(r, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: T("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					a.length > 0 && /* @__PURE__ */ U(Ge, { children: a.map((e) => /* @__PURE__ */ W(Ke, {
						$selected: o === e.id,
						onClick: () => s(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 12 },
							children: [k(e, 32), /* @__PURE__ */ W(qe, { children: [/* @__PURE__ */ U(r, {
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
					/* @__PURE__ */ W(Xe, { children: [/* @__PURE__ */ W(Ze, { children: [/* @__PURE__ */ U(r, {
						fontSize: "12px",
						bold: !0,
						color: "textSubtle",
						children: T("Withdrawable: %amt% %sym%", {
							amt: c.withdrawableText,
							sym: c.symbol
						})
					}), h && /* @__PURE__ */ W(tt, { children: [
						st.map((e, t) => /* @__PURE__ */ W(O.Fragment, { children: [t > 0 && /* @__PURE__ */ U(rt, {}), /* @__PURE__ */ W(nt, {
							onClick: () => h(e),
							children: [e, "%"]
						})] }, e)),
						/* @__PURE__ */ U(rt, {}),
						/* @__PURE__ */ U(nt, {
							onClick: () => h(100),
							children: T("MAX")
						})
					] })] }), /* @__PURE__ */ W(Qe, { children: [/* @__PURE__ */ W($e, {
						type: "button",
						children: [k(c, 40), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: c.displayName || c.symbol
						})]
					}), /* @__PURE__ */ U(et, {
						value: p,
						onChange: (e) => m(e.target.value),
						placeholder: "0.0",
						inputMode: "decimal"
					})] })] }),
					/* @__PURE__ */ W(it, { children: [
						/* @__PURE__ */ W(at, { children: [/* @__PURE__ */ U(We, {
							color: "textSubtle",
							children: T("Destination")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ W(at, { children: [/* @__PURE__ */ U(We, {
							color: "textSubtle",
							children: T("Network")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							children: u
						})] }),
						/* @__PURE__ */ W(at, { children: [/* @__PURE__ */ U(We, {
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
						/* @__PURE__ */ W(at, { children: [/* @__PURE__ */ U(We, {
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
}, lt = B(E)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, ut = B(r).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, dt = B(r).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, ft = B(E)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, pt = B.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, mt = B(dt)`
  color: ${({ theme: e }) => e.colors.failure};
`, ht = B(i)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, gt = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, _t = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", vt = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, yt = ({ isOpen: e, details: t, onConfirm: n, onClose: i, onSkipFutureChange: a, t: o = gt }) => {
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
					/* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Symbol") }), /* @__PURE__ */ U(dt, { children: t.symbol })] }),
					/* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Side / Type") }), /* @__PURE__ */ W(dt, { children: [
						/* @__PURE__ */ U(pt, {
							$side: t.side,
							children: t.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						vt(t.type, o)
					] })] }),
					/* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Size") }), /* @__PURE__ */ W(dt, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Price") }), /* @__PURE__ */ W(dt, { children: [
						_t(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Trigger Price") }), /* @__PURE__ */ W(dt, { children: [
						_t(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Leverage") }), /* @__PURE__ */ W(dt, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Cost") }), /* @__PURE__ */ U(dt, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Est. Liq. Price") }), /* @__PURE__ */ U(mt, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ W(lt, { children: [/* @__PURE__ */ U(ut, { children: o("Reduce Only") }), /* @__PURE__ */ U(dt, { children: o("Yes") })] }),
					/* @__PURE__ */ W(ft, { children: [/* @__PURE__ */ U(l, {
						scale: "sm",
						checked: s,
						onChange: (e) => c(e.target.checked)
					}), /* @__PURE__ */ U(r, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ U(f, {
						mt: "8px",
						children: /* @__PURE__ */ U(ht, {
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
}, bt = B.div`
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
`, xt = B(E)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, St = B.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, Ct = B.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, wt = B.input`
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
`, Tt = B.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Et = B.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, Dt = B.button`
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
`, Ot = B.button`
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
`, kt = B(E)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, At = B.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, jt = B.span`
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
`, Mt = B.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Nt = B(r)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, Pt = B(E)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ft = ({ filled: e }) => /* @__PURE__ */ U("svg", {
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
}), It = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, Lt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, Rt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, zt = (e) => e.toUpperCase().replace(/USD1$/, "").replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), Bt = (e) => zt(e).slice(0, 1) || e.slice(0, 1), Vt = (e) => e, Ht = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: i, logoForSymbol: a, isLoading: o = !1, t: s = Vt }) => {
	let [c, l] = L("all"), [u, d] = L(""), f = F(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ W(bt, { children: [
		/* @__PURE__ */ W(xt, { children: [/* @__PURE__ */ U(St, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ U(St, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ W(Ct, { children: [/* @__PURE__ */ U(D, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ U(wt, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ W(Tt, { children: [
			/* @__PURE__ */ U("span", {}),
			/* @__PURE__ */ U("span", { children: s("Symbols") }),
			/* @__PURE__ */ U(Nt, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ U(Nt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ U(Nt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ U(Et, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ U(Pt, { children: /* @__PURE__ */ U(r, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let r = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(zt(e.symbol));
				return /* @__PURE__ */ W(Dt, {
					onClick: () => i(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ U(Ot, {
							$filled: r,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(r ? "Unfavorite" : "Favorite"),
							"aria-pressed": r,
							children: /* @__PURE__ */ U(Ft, { filled: r })
						}),
						/* @__PURE__ */ W(kt, { children: [
							/* @__PURE__ */ U(jt, { children: c ? /* @__PURE__ */ U(Mt, {
								src: c,
								alt: zt(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = Bt(e.symbol));
								}
							}) : Bt(e.symbol) }),
							/* @__PURE__ */ U("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ W(At, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ U(Nt, { children: It(e.lastPrice) }),
						/* @__PURE__ */ U(Nt, {
							$tone: o >= 0 ? "up" : "down",
							children: Lt(e.priceChangePercent)
						}),
						/* @__PURE__ */ U(Nt, { children: Rt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, Ut = B(E)`
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
`, Wt = B(E)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, Gt = B.button`
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
`, Kt = B.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, qt = B.button`
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
`, Jt = B.span`
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
`, Yt = B.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Xt = B(r)`
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
var Zt = B.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Qt = B(E)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, $t = B(E)`
  flex-direction: column;
  flex-shrink: 0;
`, en = B(r)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, tn = B(r)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, nn = B(E)`
  align-items: baseline;
  white-space: nowrap;
`, rn = B.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, an = B.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, on = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, sn = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, cn = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, ln = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, un = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", dn = () => /* @__PURE__ */ U("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), fn = (e) => e, pn = (e) => {
	let { isMobile: t } = h();
	return U(t ? Tn : mn, { ...e });
}, mn = ({ symbol: e, pairLabel: t, logoUrl: n, leverage: r, lastPrice: i, markPrice: a, indexPrice: o, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, marketsOpen: h, onMarketsOpenChange: g, t: _ = fn }) => {
	let v = V(), y = h !== void 0, [b, x] = L(!1), S = y ? h : b, C = j((e) => {
		let t = typeof e == "function" ? e(S) : e;
		y || x(t), g?.(t);
	}, [
		y,
		S,
		g
	]), [w, T] = L(null), E = I(null), D = I(null);
	P(() => {
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
	}, [S]), M(() => {
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
	let O = j(() => C(!1), []), k = Number(c) < 0, A = Number(u) < 0;
	return /* @__PURE__ */ W(Ut, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ W(Wt, { children: [p && /* @__PURE__ */ U(qt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": _(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ U(dn, {})
			}), /* @__PURE__ */ W(Gt, {
				ref: E,
				"aria-haspopup": "listbox",
				"aria-expanded": S,
				disabled: !m,
				onClick: () => m && C((e) => !e),
				children: [
					/* @__PURE__ */ U(Jt, {
						$bg: n ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: n ? /* @__PURE__ */ U(Yt, {
							src: n,
							alt: t
						}) : un(t)
					}),
					/* @__PURE__ */ U(Xt, { children: t }),
					/* @__PURE__ */ U(s, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			S && w && typeof document < "u" && m ? ee(/* @__PURE__ */ U(Kt, {
				ref: D,
				style: {
					top: w.top,
					left: w.left
				},
				children: m(O)
			}), document.body) : null,
			/* @__PURE__ */ U(Zt, {
				"aria-label": `Last price: ${i ?? ""}`,
				children: i ?? "—"
			}),
			/* @__PURE__ */ W(Qt, {
				role: "list",
				children: [
					/* @__PURE__ */ W($t, {
						role: "listitem",
						children: [/* @__PURE__ */ U(en, {
							$dashed: !0,
							children: _("Mark")
						}), /* @__PURE__ */ U(tn, { children: a ?? "—" })]
					}),
					/* @__PURE__ */ W($t, {
						role: "listitem",
						children: [/* @__PURE__ */ U(en, {
							$dashed: !0,
							children: _("Index")
						}), /* @__PURE__ */ U(tn, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ W($t, {
						role: "listitem",
						children: [/* @__PURE__ */ U(en, {
							$dashed: !0,
							children: _("Funding / Countdown")
						}), /* @__PURE__ */ W(nn, { children: [
							/* @__PURE__ */ U(rn, {
								$negative: k,
								children: on(c)
							}),
							/* @__PURE__ */ U(an, { children: "/" }),
							/* @__PURE__ */ U(tn, {
								as: "span",
								children: cn(l)
							})
						] })]
					}),
					/* @__PURE__ */ W($t, {
						role: "listitem",
						children: [/* @__PURE__ */ U(en, { children: _("24h Change") }), /* @__PURE__ */ U(tn, {
							style: { color: u ? A ? v.colors.failure : v.colors.success : void 0 },
							children: sn(u)
						})]
					}),
					/* @__PURE__ */ W($t, {
						role: "listitem",
						children: [/* @__PURE__ */ U(en, { children: _("24h Volume (USDT)") }), /* @__PURE__ */ U(tn, { children: ln(d) })]
					})
				]
			})
		]
	});
}, hn = B(E)`
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  font-variant-numeric: tabular-nums;
`, gn = B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  &[aria-disabled='true'] {
    cursor: default;
  }
`, _n = B.span`
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
`, vn = B.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, yn = B.span`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 4px;
  background: ${({ theme: e }) => e.colors.input};
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
`, bn = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  display: inline-flex;
  align-items: center;
`, xn = B.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Sn = B.span`
  flex: 1;
`, Cn = B.button`
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
`, wn = B.div`
  position: fixed;
  z-index: 1000;
`, Tn = ({ symbol: e, pairLabel: t, logoUrl: n, change24h: r, favorited: i = !1, onToggleFavorite: o, chartOpen: l = !1, onChartToggle: u, renderMarketsDropdown: d, marketsOpen: f, onMarketsOpenChange: p, t: h = fn }) => {
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
	return /* @__PURE__ */ W(hn, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ W(gn, {
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
					/* @__PURE__ */ U(_n, {
						$bg: n ? "transparent" : void 0,
						children: n ? /* @__PURE__ */ U(Yt, {
							src: n,
							alt: t
						}) : O
					}),
					/* @__PURE__ */ U(vn, { children: e }),
					/* @__PURE__ */ U(yn, { children: h("Perp") }),
					/* @__PURE__ */ U(bn, { children: /* @__PURE__ */ U(s, {
						width: "16px",
						color: "textSubtle"
					}) })
				]
			}),
			r !== void 0 && /* @__PURE__ */ U(xn, {
				$negative: D,
				children: sn(r)
			}),
			/* @__PURE__ */ U(Sn, {}),
			o && /* @__PURE__ */ U(Cn, {
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
			u && /* @__PURE__ */ U(Cn, {
				type: "button",
				$active: l,
				"aria-label": h(l ? "Hide chart" : "Show chart"),
				"aria-pressed": l,
				onClick: u,
				children: U(l ? m : a, { width: "20px" })
			}),
			y && C && typeof document < "u" && d ? ee(/* @__PURE__ */ U(wn, {
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
}, En = 10, Dn = 27, On = B(E)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, kn = B(E)`
  gap: 5px;
`, An = B.button`
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
`, jn = B.div`
  position: relative;
`, Mn = B.button`
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
`, Nn = B.div`
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
`, Pn = B.button`
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
`, Fn = B(E)`
  align-items: center;
  gap: 2px;
`, In = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, Ln = B.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, Rn = B.div`
  height: ${({ $size: e }) => e === "full" ? En * 2 * Dn : En * Dn}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, zn = B.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${Dn}px;
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
`, Bn = B.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, Vn = B.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, Hn = B.div`
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
`, Un = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Wn = B.span`
  text-align: center;
`, Gn = B.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Kn = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, qn = [
	100,
	50,
	10,
	1
], Jn = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, Yn = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), Xn = (e, t) => {
	let n = [];
	for (let e of qn) t > e * 10 && n.push(String(e));
	let r = Yn(e);
	for (let e = 1; e <= r; e++) n.push(Jn(e));
	return n;
}, Zn = (e, t) => {
	M(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, Qn = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = L(!1), o = I(null);
	return Zn(o, () => a(!1)), /* @__PURE__ */ W(jn, {
		ref: o,
		children: [/* @__PURE__ */ W(Mn, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ U(Nn, { children: t.map((e) => /* @__PURE__ */ U(Pn, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, $n = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ W("svg", {
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
}), er = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ W("svg", {
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
}), tr = ({ askColor: e, listColor: t }) => /* @__PURE__ */ W("svg", {
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
}), nr = (e) => e, rr = [
	"0.1",
	"0.5",
	"1",
	"5",
	"10",
	"50",
	"100"
], ir = B.div`
  display: flex;
  flex-direction: column;
  padding: 8px 8px 0;
  font-size: 12px;
  height: 100%;
  width: 100%;
  background: ${({ theme: e }) => e.colors.card};
`, ar = B.div`
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
`, or = B.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 11px;
  padding-bottom: 4px;
  margin-bottom: 4px;
`, sr = B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`, cr = B.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2px 4px;
  font-size: 12px;
  line-height: 1.5;
  z-index: 1;
  font-variant-numeric: tabular-nums;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, lr = B.span`
  position: absolute;
  inset: 0 0 0 auto;
  z-index: -1;
  pointer-events: none;
`, ur = B.div`
  text-align: center;
  padding: 8px 0;
`, dr = B.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, fr = B.div`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, pr = B.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 4px;
  /* Sit directly below the last bid row in normal flow. Earlier we used
     margin-top: auto to glue this to the column bottom, but when the
     adjacent OrderForm column is taller than the order book the grid row
     stretches MWrap and the footer ends up below the iPhone viewport. */
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, mr = B.button`
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
`, hr = B.button`
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
`, gr = B.div`
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
`, _r = B.button`
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
`, vr = B.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 250;
`, yr = B.div`
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
`, br = B.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0.4;
  margin: 4px auto 12px;
`, xr = B.button`
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
`, Sr = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-size: 16px;
`, Cr = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, view: o, onViewChange: c, priceStep: l, onPriceStepChange: u, hidden: d, t: f = nr, fundingRateText: p, fundingCountdownText: m, midPriceText: h, midSubText: g, priceStepOptions: _ = rr }) => {
	let v = V(), [y, b] = L(!1), [x, S] = L(!1), C = I(null);
	Zn(C, () => b(!1));
	let w = F(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = Kn(e, "ask", i, r, a), s = Kn(t, "bid", i, r, a), c = [...o].sort(([e], [t]) => Number(e) - Number(t)), u = [...s].sort(([e], [t]) => Number(t) - Number(e));
		return {
			asks: c.slice(0, En).reverse(),
			bids: u.slice(0, En)
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
	}, [w]), E = `color-mix(in srgb, ${v.colors.failure} 18%, transparent)`, D = (e, t, n) => /* @__PURE__ */ W(cr, {
		$side: n,
		children: [
			/* @__PURE__ */ U(lr, { style: {
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
	return /* @__PURE__ */ W(ir, {
		style: d ? { display: "none" } : void 0,
		children: [
			(p || m) && /* @__PURE__ */ W(ar, { children: [f("Funding (8h) / Countdown"), /* @__PURE__ */ W("strong", { children: [
				p ?? "—",
				" / ",
				m ?? "—"
			] })] }),
			/* @__PURE__ */ W(or, { children: [/* @__PURE__ */ W("span", { children: [
				f("Price"),
				/* @__PURE__ */ U("br", {}),
				"(",
				r,
				")"
			] }), /* @__PURE__ */ W(sr, { children: [
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
			o === "both" && /* @__PURE__ */ W(ur, { children: [/* @__PURE__ */ U(dr, { children: h ?? w.bids[0]?.[0] ?? "—" }), g && /* @__PURE__ */ U(fr, { children: g })] }),
			o !== "asks" && w.bids.map(([e, t]) => D(e, t, "bid")),
			/* @__PURE__ */ W(pr, { children: [/* @__PURE__ */ W(mr, {
				type: "button",
				"aria-label": f("Choose view"),
				"aria-haspopup": "dialog",
				onClick: () => S(!0),
				children: [
					o === "both" && /* @__PURE__ */ U($n, {
						bidColor: A,
						askColor: k,
						listColor: j
					}),
					o === "asks" && /* @__PURE__ */ U(tr, {
						askColor: k,
						listColor: j
					}),
					o === "bids" && /* @__PURE__ */ U(er, {
						bidColor: A,
						listColor: j
					})
				]
			}), /* @__PURE__ */ W("div", {
				ref: C,
				style: { position: "relative" },
				children: [/* @__PURE__ */ W(hr, {
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
				}), y && /* @__PURE__ */ U(gr, {
					role: "listbox",
					children: _.map((e) => /* @__PURE__ */ U(_r, {
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
			x && typeof document < "u" && ee(/* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(vr, { onClick: () => S(!1) }), /* @__PURE__ */ W(yr, {
				role: "dialog",
				"aria-label": f("Choose view"),
				children: [/* @__PURE__ */ U(br, {}), O.map((e) => /* @__PURE__ */ W(xr, {
					type: "button",
					$active: o === e.key,
					onClick: () => {
						c(e.key), S(!1);
					},
					children: [/* @__PURE__ */ U("span", { children: e.label }), o === e.key && /* @__PURE__ */ U(Sr, { children: "✓" })]
				}, e.key))]
			})] }), document.body)
		]
	});
}, wr = (e) => {
	let { isMobile: t } = h();
	return U(t ? Cr : Tr, { ...e });
}, Tr = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = nr }) => {
	let g = V(), _ = d === "QUOTE" ? r : n, v = F(() => Xn(i, o), [i, o]);
	M(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = F(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = Kn(e, "ask", i, r, a), s = Kn(t, "bid", i, r, a), c = En * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
		/* @__PURE__ */ W(On, { children: [/* @__PURE__ */ W(kn, { children: [
			/* @__PURE__ */ U(An, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ U($n, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ U(An, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ U(er, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ U(An, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ U(tr, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ W(Fn, { children: [/* @__PURE__ */ U(Qn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ U(Qn, {
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
		/* @__PURE__ */ W(In, { children: [
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
		/* @__PURE__ */ W(Ln, { children: [
			s !== "bids" && /* @__PURE__ */ U(Rn, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - En)).map((e) => /* @__PURE__ */ W(zn, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ U(Bn, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ U(Vn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ U(Vn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ W(Hn, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ U(Un, { children: h("Spread") }),
					/* @__PURE__ */ U(Wn, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ U(Gn, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ U(Rn, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? En * 2 : En).map((e) => /* @__PURE__ */ W(zn, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ U(Bn, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ U(Vn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ U(Vn, {
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
}, Er = B(G)`
  flex: 1;
  min-height: 200px;
`, Dr = B.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, Or = B(E)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, kr = B.div`
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
`, Ar = B.div`
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
`, jr = B(E)`
  gap: 6px;
  align-items: center;
`, Mr = B.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, Nr = B.span`
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
`, Pr = B.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, Fr = B.div`
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
`, Ir = R`
  max-height: 360px;
  overflow-y: auto;
`, Lr = B.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Ir}
`, Rr = B.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Ir}
`, zr = B.div`
  display: grid;
  grid-template-columns: 148px 156px minmax(min-content, 0.6fr) repeat(5, minmax(min-content, 1fr));
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${Ir}
`, Br = B.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Vr = B.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, Hr = B.button`
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
`, X = B(r).attrs({
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
`, Z = B(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
`, Ur = (e) => e, Wr = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: a, closingSymbol: o, t: s }) => {
	let c = V(), l = t?.(e.symbol), u = e.positionAmt >= 0 ? "BUY" : "SELL", d = Number.isFinite(l) && Number.isFinite(e.entryPrice) ? (l - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), f = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: u,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, p = o === e.symbol;
	return /* @__PURE__ */ W(H, { children: [
		/* @__PURE__ */ U(Z, {
			as: "div",
			bold: !0,
			children: /* @__PURE__ */ W(E, {
				alignItems: "center",
				style: { gap: 6 },
				children: [/* @__PURE__ */ U("span", { children: e.symbol }), /* @__PURE__ */ W(Nr, { children: [e.leverage, "x"] })]
			})
		}),
		/* @__PURE__ */ U(Z, {
			style: { color: u === "BUY" ? c.colors.success : c.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ U(Z, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ U(Z, { children: l !== void 0 && Number.isFinite(l) ? l.toFixed(2) : "—" }),
		/* @__PURE__ */ W(Z, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ U(Z, { children: f ? f.toFixed(2) : "—" }),
		/* @__PURE__ */ U(Z, {
			style: { color: d >= 0 ? c.colors.success : c.colors.failure },
			children: Number.isFinite(d) ? d.toFixed(4) : "—"
		}),
		/* @__PURE__ */ W(Mr, { children: [/* @__PURE__ */ W(Pr, {
			$kind: "tp",
			children: [
				s("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ W(Pr, {
			$kind: "sl",
			children: [
				s("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ W(jr, { children: [/* @__PURE__ */ U(i, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => a(e, l ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: s("TP/SL")
		}), /* @__PURE__ */ U(i, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: p || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: p,
			children: s("Close")
		})] })
	] });
}, Gr = (e) => {
	let { isMobile: t } = h();
	return e.isMobile ?? t ? /* @__PURE__ */ U(Ai, { ...e }) : /* @__PURE__ */ U(Kr, { ...e });
}, Kr = ({ tab: e, onTabChange: t, positions: n, openOrders: a, orderHistory: o = [], tradeHistory: s = [], transactionHistory: c = [], onShareTrade: l, useMarkPriceForSymbol: u, computeLiqPrice: d, onClosePosition: f, onEditTpSl: p, onCancelOrder: m, closingSymbol: h = null, cancellingOrderId: g = null, t: _ = Ur }) => {
	let v = V(), y = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ W(Er, { children: [/* @__PURE__ */ W(ne, {
		activeIndex: y.indexOf(e),
		onItemClick: (e) => t(y[e]),
		children: [
			/* @__PURE__ */ W(q, { children: [
				_("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				_("Open Orders"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				_("Order History"),
				" (",
				o.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				_("Trade History"),
				" (",
				s.length,
				")"
			] }),
			/* @__PURE__ */ W(q, { children: [
				_("Transaction History"),
				" (",
				c.length,
				")"
			] })
		]
	}), /* @__PURE__ */ W(Dr, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ U(Or, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open positions")
		}) }) : /* @__PURE__ */ W(kr, { children: [
			/* @__PURE__ */ U(X, { children: _("Symbol") }),
			/* @__PURE__ */ U(X, { children: _("Size") }),
			/* @__PURE__ */ U(X, { children: _("Entry") }),
			/* @__PURE__ */ U(X, { children: _("Mark") }),
			/* @__PURE__ */ U(X, { children: _("Lev") }),
			/* @__PURE__ */ U(X, { children: _("Liq") }),
			/* @__PURE__ */ U(X, { children: _("uPnL") }),
			/* @__PURE__ */ U(X, { children: _("TP/SL") }),
			/* @__PURE__ */ U(X, {}),
			n.map((e) => /* @__PURE__ */ U(Ar, { children: /* @__PURE__ */ U(Wr, {
				p: e,
				useMarkPriceForSymbol: u,
				computeLiqPrice: d,
				onClose: f,
				onEditTpSl: p,
				closingSymbol: h,
				t: _
			}) }, e.id))
		] })),
		e === "orders" && (a.length === 0 ? /* @__PURE__ */ U(Or, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open orders")
		}) }) : /* @__PURE__ */ W(Fr, { children: [
			/* @__PURE__ */ U(X, { children: _("Symbol") }),
			/* @__PURE__ */ U(X, { children: _("Side") }),
			/* @__PURE__ */ U(X, { children: _("Type") }),
			/* @__PURE__ */ U(X, { children: _("Price") }),
			/* @__PURE__ */ U(X, { children: _("Size") }),
			/* @__PURE__ */ U(X, { children: _("Filled") }),
			/* @__PURE__ */ U(X, { children: _("Status") }),
			/* @__PURE__ */ U(X, {}),
			a.map((e) => {
				let t = g === e.id;
				return /* @__PURE__ */ W(Ar, { children: [
					/* @__PURE__ */ U(Z, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ U(Z, {
						style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ U(Z, { children: e.type }),
					/* @__PURE__ */ U(Z, { children: e.price }),
					/* @__PURE__ */ U(Z, { children: e.origQty }),
					/* @__PURE__ */ U(Z, { children: e.executedQty }),
					/* @__PURE__ */ U(Z, { children: e.status }),
					/* @__PURE__ */ U(jr, { children: /* @__PURE__ */ U(i, {
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
		e === "history" && (o.length === 0 ? /* @__PURE__ */ U(Or, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No order history")
		}) }) : /* @__PURE__ */ W(zr, { children: [
			/* @__PURE__ */ U(X, { children: _("Time") }),
			/* @__PURE__ */ U(X, { children: _("Symbol") }),
			/* @__PURE__ */ U(X, { children: _("Side") }),
			/* @__PURE__ */ U(X, { children: _("Type") }),
			/* @__PURE__ */ U(X, { children: _("Price") }),
			/* @__PURE__ */ U(X, { children: _("Size") }),
			/* @__PURE__ */ U(X, { children: _("Filled") }),
			/* @__PURE__ */ U(X, { children: _("Status") }),
			o.map((e) => /* @__PURE__ */ W(Ar, { children: [
				/* @__PURE__ */ U(Z, {
					as: "div",
					children: /* @__PURE__ */ W(Br, { children: [/* @__PURE__ */ U("span", { children: e.date }), /* @__PURE__ */ U("span", { children: e.time })] })
				}),
				/* @__PURE__ */ U(Z, {
					bold: !0,
					children: e.symbol
				}),
				/* @__PURE__ */ U(Z, {
					style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
					children: e.side
				}),
				/* @__PURE__ */ U(Z, { children: e.type }),
				/* @__PURE__ */ U(Z, { children: e.price }),
				/* @__PURE__ */ U(Z, { children: e.origQty }),
				/* @__PURE__ */ U(Z, { children: e.executedQty }),
				/* @__PURE__ */ U(Z, { children: e.status })
			] }, e.id))
		] })),
		e === "trades" && (s.length === 0 ? /* @__PURE__ */ U(Or, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No trades yet")
		}) }) : /* @__PURE__ */ W(Lr, { children: [
			/* @__PURE__ */ U(X, { children: _("Time") }),
			/* @__PURE__ */ U(X, { children: _("Symbol") }),
			/* @__PURE__ */ U(X, { children: _("Price") }),
			/* @__PURE__ */ U(X, { children: _("Quantity") }),
			/* @__PURE__ */ U(X, { children: _("Fee") }),
			/* @__PURE__ */ U(X, { children: _("Realized profit") }),
			s.map((e) => {
				let t = e.side === "BUY" ? v.colors.success : v.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ W(Ar, { children: [
					/* @__PURE__ */ U(Z, {
						as: "div",
						children: /* @__PURE__ */ W(Br, { children: [/* @__PURE__ */ U("span", { children: e.date }), /* @__PURE__ */ U("span", { children: e.time })] })
					}),
					/* @__PURE__ */ U(Z, {
						as: "div",
						children: /* @__PURE__ */ W(Vr, { children: [/* @__PURE__ */ U("span", { children: e.symbol }), /* @__PURE__ */ U("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? _("Buy") : _("Sell")
						})] })
					}),
					/* @__PURE__ */ U(Z, { children: e.price }),
					/* @__PURE__ */ U(Z, { children: e.quantity }),
					/* @__PURE__ */ U(Z, { children: e.fee }),
					/* @__PURE__ */ U(Z, {
						as: "div",
						children: /* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ U("span", {
								style: { color: n ? v.colors.success : v.colors.failure },
								children: e.realizedProfit
							}), l && /* @__PURE__ */ U(Hr, {
								type: "button",
								onClick: () => l(e),
								"aria-label": _("Share trade"),
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
		e === "transactions" && (c.length === 0 ? /* @__PURE__ */ U(Or, { children: /* @__PURE__ */ U(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No transactions yet")
		}) }) : /* @__PURE__ */ W(Rr, { children: [
			/* @__PURE__ */ U(X, { children: _("Time") }),
			/* @__PURE__ */ U(X, { children: _("Type") }),
			/* @__PURE__ */ U(X, { children: _("Amount") }),
			/* @__PURE__ */ U(X, { children: _("Symbol") }),
			c.map((e) => /* @__PURE__ */ W(Ar, { children: [
				/* @__PURE__ */ U(Z, {
					as: "div",
					children: /* @__PURE__ */ W(Br, { children: [/* @__PURE__ */ U("span", { children: e.date }), /* @__PURE__ */ U("span", { children: e.time })] })
				}),
				/* @__PURE__ */ U(Z, { children: e.type }),
				/* @__PURE__ */ U(Z, { children: e.amount }),
				/* @__PURE__ */ U(Z, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, qr = B.nav`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
`, Jr = B.button`
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
`, Yr = B.span`
  flex: 1;
`, Xr = B.button`
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
`, Zr = B.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Qr = B.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, $r = B.button`
  background: transparent;
  border: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-family: inherit;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`, ei = B.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`, ti = B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, ni = B.div`
  display: flex;
  flex-direction: column;
`, ri = B.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
`, ii = B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, ai = B.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, oi = B.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
`, si = B.span`
  flex: 1;
`, ci = B.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ $up: e, theme: t }) => e ? t.colors.success : t.colors.failure};
`, li = B.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 12px;
`, ui = B.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: e }) => e.colors.textSubtle};
  & > strong {
    color: ${({ theme: e }) => e.colors.text};
    font-weight: 500;
  }
`, di = B.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`, fi = B.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme: e }) => e.colors.card};
`, pi = B.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  display: flex;
  flex-direction: column;
`, mi = B.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  flex-shrink: 0;
`, hi = B.span`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, gi = B.button`
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
`, _i = B.nav`
  display: flex;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 12px;
  flex-shrink: 0;
`, vi = B.button`
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
`, yi = B.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0;
`, bi = B.div`
  text-align: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
  padding: 48px 0;
`, xi = B.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 14px 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  font-size: 13px;
  gap: 12px;
`, Si = B.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, Ci = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-weight: 600;
`, wi = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 12px;
`, Ti = B.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
`, Ei = [
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
], Di = ({ open: e, onClose: t, tab: n, onTabChange: r, orderHistory: i, tradeHistory: a, transactionHistory: o, t: s }) => {
	let c = V();
	return !e || typeof document > "u" ? null : ee(/* @__PURE__ */ W(pi, {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": s("History"),
		children: [
			/* @__PURE__ */ W(mi, { children: [/* @__PURE__ */ U(hi, { children: s("History") }), /* @__PURE__ */ U(gi, {
				type: "button",
				"aria-label": s("Close"),
				onClick: t,
				children: /* @__PURE__ */ U(b, {
					width: "20px",
					"aria-hidden": "true"
				})
			})] }),
			/* @__PURE__ */ U(_i, {
				role: "tablist",
				children: Ei.map((e) => /* @__PURE__ */ U(vi, {
					type: "button",
					role: "tab",
					"aria-selected": n === e.key,
					$active: n === e.key,
					onClick: () => r(e.key),
					children: s(e.label)
				}, e.key))
			}),
			/* @__PURE__ */ W(yi, { children: [
				n === "orders" && (i.length === 0 ? /* @__PURE__ */ U(bi, { children: s("No order history yet") }) : i.map((e) => /* @__PURE__ */ W(xi, { children: [/* @__PURE__ */ W(Si, { children: [
					/* @__PURE__ */ W(Ci, { children: [
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
					/* @__PURE__ */ W(wi, { children: [
						e.date,
						" ",
						e.time
					] }),
					/* @__PURE__ */ W(wi, { children: [
						e.type,
						" · ",
						e.price,
						" · ",
						e.executedQty,
						"/",
						e.origQty
					] })
				] }), /* @__PURE__ */ U(Ti, { children: /* @__PURE__ */ U("span", {
					style: {
						color: c.colors.textSubtle,
						fontSize: 12
					},
					children: e.status
				}) })] }, e.id))),
				n === "trades" && (a.length === 0 ? /* @__PURE__ */ U(bi, { children: s("No trade history yet") }) : a.map((e) => {
					let t = e.realizedProfit.startsWith("+");
					return /* @__PURE__ */ W(xi, { children: [/* @__PURE__ */ W(Si, { children: [
						/* @__PURE__ */ W(Ci, { children: [
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
						/* @__PURE__ */ W(wi, { children: [
							e.date,
							" ",
							e.time
						] }),
						/* @__PURE__ */ W(wi, { children: [
							e.price,
							" · ",
							e.quantity,
							" · ",
							s("fee"),
							" ",
							e.fee
						] })
					] }), /* @__PURE__ */ U(Ti, { children: /* @__PURE__ */ U("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.realizedProfit
					}) })] }, e.id);
				})),
				n === "tx" && (o.length === 0 ? /* @__PURE__ */ U(bi, { children: s("No transactions yet") }) : o.map((e) => {
					let t = e.amount.startsWith("+");
					return /* @__PURE__ */ W(xi, { children: [/* @__PURE__ */ W(Si, { children: [/* @__PURE__ */ U(Ci, { children: e.type }), /* @__PURE__ */ W(wi, { children: [
						e.date,
						" ",
						e.time
					] })] }), /* @__PURE__ */ W(Ti, { children: [/* @__PURE__ */ U("span", {
						style: {
							color: t ? c.colors.success : c.colors.failure,
							fontWeight: 600
						},
						children: e.amount
					}), /* @__PURE__ */ U(wi, { children: e.symbol })] })] }, e.id);
				}))
			] })
		]
	}), document.body);
}, Oi = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: a, closingSymbol: o, t: s }) => {
	let c = t?.(e.symbol), l = e.positionAmt >= 0 ? "BUY" : "SELL", u = Number.isFinite(c) && Number.isFinite(e.entryPrice) ? (c - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), d = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: l,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, f = o === e.symbol, p = Math.abs(e.positionAmt);
	return /* @__PURE__ */ W(ri, { children: [
		/* @__PURE__ */ W(ii, { children: [
			/* @__PURE__ */ U(ai, { children: e.symbol }),
			/* @__PURE__ */ W(oi, {
				$side: l,
				children: [
					s(l === "BUY" ? "Long" : "Short"),
					" · ",
					e.leverage,
					"x"
				]
			}),
			/* @__PURE__ */ U(si, {}),
			/* @__PURE__ */ U(ci, {
				$up: u >= 0,
				children: Number.isFinite(u) ? `${u >= 0 ? "+" : ""}${u.toFixed(4)}` : "—"
			})
		] }),
		/* @__PURE__ */ W(li, { children: [
			/* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: s("Size") }), /* @__PURE__ */ U("strong", { children: p })] }),
			/* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: s("Entry") }), /* @__PURE__ */ U("strong", { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: s("Mark") }), /* @__PURE__ */ U("strong", { children: c !== void 0 && Number.isFinite(c) ? c.toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: s("Liq") }), /* @__PURE__ */ U("strong", { children: d ? d.toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: s("TP") }), /* @__PURE__ */ U("strong", { children: e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—" })] }),
			/* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: s("SL") }), /* @__PURE__ */ U("strong", { children: e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—" })] })
		] }),
		/* @__PURE__ */ W(di, { children: [/* @__PURE__ */ U(i, {
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
}, ki = ({ o: e, onCancel: t, cancellingOrderId: n, t: r }) => {
	let a = n === e.id;
	return /* @__PURE__ */ W(ri, { children: [
		/* @__PURE__ */ W(ii, { children: [
			/* @__PURE__ */ U(ai, { children: e.symbol }),
			/* @__PURE__ */ W(oi, {
				$side: e.side,
				children: [
					e.side === "BUY" ? r("Buy") : r("Sell"),
					" · ",
					e.type
				]
			}),
			/* @__PURE__ */ U(si, {}),
			/* @__PURE__ */ U("span", {
				style: {
					fontSize: 12,
					color: "inherit"
				},
				children: e.status
			})
		] }),
		/* @__PURE__ */ W(li, { children: [/* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: r("Price") }), /* @__PURE__ */ U("strong", { children: e.price })] }), /* @__PURE__ */ W(ui, { children: [/* @__PURE__ */ U("span", { children: r("Filled") }), /* @__PURE__ */ W("strong", { children: [
			e.executedQty,
			"/",
			e.origQty
		] })] })] }),
		/* @__PURE__ */ U(di, { children: /* @__PURE__ */ U(i, {
			scale: "xs",
			variant: "secondary",
			disabled: a,
			isLoading: a,
			onClick: () => t(e),
			children: r("Cancel")
		}) })
	] });
}, Ai = ({ tab: e, onTabChange: t, positions: n, openOrders: r, orderHistory: i = [], tradeHistory: a = [], transactionHistory: c = [], onClosePosition: l, onEditTpSl: u, onCancelOrder: d, useMarkPriceForSymbol: f, computeLiqPrice: p, closingSymbol: m, cancellingOrderId: h, positionsCount: g, hideOtherSymbols: _ = !1, onHideOtherSymbolsChange: v, instrumentFilterLabel: y, onInstrumentFilterClick: b, historyOpen: x = !1, onHistoryToggle: S, historyTab: C = "orders", onHistoryTabChange: w, t: T = Ur }) => {
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
	return /* @__PURE__ */ W(fi, { children: [
		/* @__PURE__ */ W(qr, {
			role: "tablist",
			children: [
				E.map((t) => /* @__PURE__ */ W(Jr, {
					type: "button",
					role: "tab",
					"aria-selected": t.key === e,
					$active: t.key === e,
					onClick: () => O(t.key),
					children: [t.label, typeof t.count == "number" && t.count > 0 ? ` (${t.count})` : ""]
				}, t.key)),
				/* @__PURE__ */ U(Yr, {}),
				/* @__PURE__ */ U(Xr, {
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
		/* @__PURE__ */ W(Zr, { children: [
			/* @__PURE__ */ W($r, {
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
			/* @__PURE__ */ U(Qr, {}),
			/* @__PURE__ */ W(ei, { children: [/* @__PURE__ */ U("input", {
				type: "checkbox",
				checked: _,
				onChange: (e) => v?.(e.target.checked)
			}), /* @__PURE__ */ U("span", { children: T("Hide other symbols") })] })
		] }),
		e === "positions" && n.length > 0 ? /* @__PURE__ */ U(ni, { children: n.map((e) => /* @__PURE__ */ U(Oi, {
			p: e,
			useMarkPriceForSymbol: f,
			computeLiqPrice: p,
			onClose: l,
			onEditTpSl: u,
			closingSymbol: m,
			t: T
		}, e.id)) }) : e === "orders" && r.length > 0 ? /* @__PURE__ */ U(ni, { children: r.map((e) => /* @__PURE__ */ U(ki, {
			o: e,
			onCancel: d,
			cancellingOrderId: h,
			t: T
		}, e.id)) }) : /* @__PURE__ */ U(ti, { children: D.emptyText }),
		/* @__PURE__ */ U(Di, {
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
}, ji = (e) => {
	if (!e) return "";
	let t = e.startsWith("-"), [n = "", r] = (t ? e.slice(1) : e).split("."), i = n.replace(/\B(?=(\d{3})+(?!\d))/g, ","), a = r === void 0 ? i : `${i}.${r}`;
	return t ? `-${a}` : a;
}, Mi = (e) => e === "" || e === "-" ? "" : e.startsWith("-") ? e.slice(1) : e, Ni = (e) => {
	if (e === "" || e === "-") return e;
	let t = Number(e);
	return !Number.isFinite(t) || t === 0 ? e.startsWith("-") ? e.slice(1) : e : e.startsWith("-") ? e : `-${e}`;
};
function Pi(e, t) {
	let n = I(null);
	return {
		ref: n,
		value: ji(e),
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
var Fi = B(E)`
  flex-direction: column;
  gap: 8px;
`, Ii = B(E)`
  gap: 8px;
`, Li = B.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, Ri = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, zi = B(v)`
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
`, Bi = B(E)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, Vi = (e) => e, Hi = ({ isOpen: e, symbol: t, positionSide: n, qty: a, entryPrice: o, markPrice: s, onConfirm: c, onClose: l, t: u = Vi }) => {
	let d = V(), p = n === "LONG" ? 1 : -1, [m, h] = L(""), [_, v] = L(""), [y, b] = L(""), [x, C] = L(""), [w, T] = L(!1);
	M(() => {
		e || (h(""), v(""), b(""), C(""));
	}, [e]);
	let D = (e) => a > 0 ? o + p * e / a : NaN, O = (e) => a > 0 ? p * (e - o) * a : NaN, k = (e, t) => Number.isFinite(e) ? e.toFixed(t) : "", A = (e) => {
		if (h(e), e === "") return v("");
		let t = Number(e);
		v(Number.isFinite(t) ? k(O(t), 4) : "");
	}, j = (e) => {
		let t = Mi(e);
		if (v(t), t === "" || t === "-") return h("");
		let n = Number(t);
		h(Number.isFinite(n) ? k(D(n), 2) : "");
	}, N = (e) => {
		if (b(e), e === "") return C("");
		let t = Number(e);
		C(Number.isFinite(t) ? k(O(t), 4) : "");
	}, P = (e) => {
		let t = Ni(e);
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
					/* @__PURE__ */ W(Bi, { children: [/* @__PURE__ */ U(r, {
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
					/* @__PURE__ */ W(Bi, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Entry")
					}), /* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? ji(o.toFixed(2)) : "—"
					})] }),
					/* @__PURE__ */ W(Bi, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Mark")
					}), /* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(s) ? ji(s.toFixed(2)) : "—"
					})] }),
					/* @__PURE__ */ U(Li, {}),
					/* @__PURE__ */ W(Fi, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.success,
						children: u("Take Profit")
					}), /* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(Ri, { children: u("Trigger Price") }), /* @__PURE__ */ U(zi, {
							...Pi(m, A),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(Ri, { children: u("PnL (USDT)") }), /* @__PURE__ */ U(zi, {
							...Pi(_, j),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ W(Fi, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.failure,
						children: u("Stop Loss")
					}), /* @__PURE__ */ W(Ii, { children: [/* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(Ri, { children: u("Trigger Price") }), /* @__PURE__ */ U(zi, {
							...Pi(y, N),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ W(f, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ U(Ri, { children: u("PnL (USDT)") }), /* @__PURE__ */ U(zi, {
							...Pi(x, P),
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
}, Ui = [
	"1m",
	"5m",
	"15m",
	"1h",
	"4h",
	"1d"
], Wi = B(G)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, Gi = (e) => typeof e == "number" ? `${e}px` : e, Ki = B.div`
  border-bottom: 1px solid var(--pcs-colors-card-border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, qi = B.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`, Ji = B.button`
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
`, Yi = B.div`
  position: relative;
  height: ${({ $minHeight: e }) => e}px;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent) 0%,
    transparent 100%
  );
`, Xi = B.span`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(140px 60px at 18% 70%, color-mix(in srgb, var(--pcs-colors-primary) 18%, transparent), transparent 70%),
    radial-gradient(120px 50px at 42% 38%, color-mix(in srgb, var(--pcs-colors-success) 14%, transparent), transparent 70%),
    radial-gradient(160px 70px at 72% 55%, color-mix(in srgb, var(--pcs-colors-primary) 12%, transparent), transparent 70%);
  border-bottom: 2px solid color-mix(in srgb, var(--pcs-colors-primary) 50%, transparent);
`, Zi = B.span`
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
`, Qi = ({ children: e, timeframes: t = Ui, activeTimeframe: n, onTimeframeChange: r, priceLabel: i, mobileMinHeight: a = 220 }) => {
	let o = O.Children.count(e) > 0;
	return /* @__PURE__ */ W(Ki, {
		"aria-label": "Price chart",
		children: [/* @__PURE__ */ U(qi, {
			role: "tablist",
			children: t.map((e) => {
				let t = e === n;
				return /* @__PURE__ */ U(Ji, {
					type: "button",
					role: "tab",
					"aria-selected": t,
					$active: t,
					onClick: () => r?.(e),
					children: e
				}, e);
			})
		}), /* @__PURE__ */ W(Yi, {
			$minHeight: a,
			children: [o ? e : /* @__PURE__ */ U(Xi, {}), i !== void 0 && /* @__PURE__ */ U(Zi, { children: i })]
		})]
	});
}, $i = (e) => {
	let { isMobile: t } = h();
	if (t) return /* @__PURE__ */ U(Qi, { ...e });
	let { children: n, minHeight: r = "420px" } = e;
	return /* @__PURE__ */ U(Wi, {
		$minHeight: Gi(r),
		children: n
	});
}, ea = B(G)`
  height: 100%;
`, ta = B.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, na = B.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, ra = (e) => e, ia = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = ra }) => /* @__PURE__ */ W(ea, { children: [/* @__PURE__ */ W(ne, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ U(q, { children: i("Order Book") }), /* @__PURE__ */ U(q, { children: i("Trades") })]
}), /* @__PURE__ */ W(ta, { children: [/* @__PURE__ */ U(na, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ U(na, {
	$hidden: e !== "trades",
	children: r
})] })] }), aa = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='32'%20fill='none'%20viewBox='0%200%2015%2032'%3e%3cpath%20fill='%230098A1'%20d='M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z'/%3e%3cpath%20fill='%2353DEE9'%20d='M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z'/%3e%3c/svg%3e", oa = "data:image/svg+xml,%3csvg%20width='24'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='19'%20width='17'%20height='11'%20fill='%231FC7D4'/%3e%3cpath%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'%20fill='%231FC7D4'/%3e%3cpath%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'%20fill='%231FC7D4'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20fill='url(%23paint0_linear_bunnyhead_main)'/%3e%3c/g%3e%3cg%20transform='translate(2)'%3e%3cpath%20d='M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z'%20fill='%23452A7A'/%3e%3cpath%20d='M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z'%20fill='%23452A7A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_main'%20x1='14'%20y1='1'%20x2='14'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", sa = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='32'%20fill='none'%20viewBox='0%200%2028%2032'%3e%3crect%20width='17'%20height='11'%20x='1'%20y='19'%20fill='%231FC7D4'/%3e%3cpath%20fill='%231FC7D4'%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill='url(%23paint0_linear_bunnyhead_max)'%20fill-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787'/%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20width='28'%20height='28'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_max'%20x1='14'%20x2='14'%20y1='1'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/widgets/BunnySlider.tsx
function ca({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = I(null), [u, d] = L(0);
	P(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999, _ = g ? sa : oa;
	return /* @__PURE__ */ W(la, {
		ref: l,
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ U(ua, { className: "bs-track" }),
			/* @__PURE__ */ U(fa, {
				className: "bs-back",
				style: { backgroundImage: `url("${aa}")` }
			}),
			/* @__PURE__ */ U(da, {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ U(pa, {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: {
					left: m,
					backgroundImage: `url("${_}")`
				}
			}),
			/* @__PURE__ */ U(ma, {
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
			s && /* @__PURE__ */ U(ha, {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
var la = B.div`
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
`, ua = B.span`
  position: absolute;
  left: 14px;
  right: 0;
  top: 18px;
  height: 2px;
  background: ${({ theme: e }) => e?.colors?.inputSecondary ?? "var(--pcs-colors-input-secondary, #D7CAEC)"};
  pointer-events: none;
`, da = B.span`
  position: absolute;
  left: 14px;
  top: 18px;
  height: 10px;
  background: ${({ theme: e }) => e?.colors?.primary ?? "var(--pcs-colors-primary, #1FC7D4)"};
  pointer-events: none;
  transition: width 60ms linear;
`, fa = B.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 32px;
  pointer-events: none;
  background-size: 15px 32px;
  background-repeat: no-repeat;
`, pa = B.span`
  position: absolute;
  top: 0;
  width: 24px;
  height: 32px;
  pointer-events: none;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  transition: left 60ms linear, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
`, ma = B.input`
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
`, ha = B.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme: e }) => e?.colors?.textSubtle ?? "var(--pcs-colors-text-subtle)"};
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
`, ga = B(G)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, _a = B(E)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, va = B.button`
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
`, ya = B(E)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, ba = B.button`
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
`, xa = B.button`
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
`, Sa = B(E)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, Ca = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, wa = B(E)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, Ta = B.div`
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
`, Ea = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, Da = B.input`
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
`, Oa = B(i).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, ka = B.div`
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
`, Aa = B.input`
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
`, ja = B.button`
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
`, Ma = B.div`
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
`, Na = B.button`
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
`, Pa = B.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, Fa = B(v)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, Ia = B.div`
  padding: 4px 0;
`, La = B(E)`
  gap: 8px;
`, Ra = B.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, za = B.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, Ba = ({ value: e, onChange: t }) => /* @__PURE__ */ W(Ra, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ U(za, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ U(za, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), Va = B(i)`
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
`, Ha = B.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ua = B(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Wa = B(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, Ga = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ka = B(E)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, qa = B(E)`
  gap: 6px;
`, Ja = B.button`
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
`, Ya = B.button`
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
`, Xa = B.span`
  text-align: center;
`, Za = B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
`, Qa = B.input`
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
`, $a = B.button`
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
`, eo = B(E)`
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
`, to = B(E)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.text};
`, no = B.div`
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
`, ro = B(E)`
  justify-content: space-between;
  align-items: center;
`, io = B.button`
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
`, ao = B.div`
  position: fixed;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`, oo = B.button`
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
`, so = [
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
], co = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: i, typeKey: a, onTypeKeyChange: o, availableBalanceText: c, preview: d, feeText: m, sizePercent: h, onSizePercentChange: g, cta: _, canSubmit: v, isSubmitting: y = !1, marginSubmitting: b = !1, authReady: S = !0, hasAddress: C = !0, errorSlot: w, onSubmit: T, onLeverageClick: E, onMarginModeToggle: D, onDepositClick: O, extraControls: k, t: A = Ga }) => {
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
	let te = so.find((e) => e.key === a)?.label ?? "Market", q = d.liq, ne = d.cost;
	return /* @__PURE__ */ W(Ka, { children: [
		/* @__PURE__ */ W(qa, { children: [
			/* @__PURE__ */ U(Ja, {
				disabled: b,
				onClick: D,
				children: n.marginMode === "CROSS" ? A("Cross") : A("Isolated")
			}),
			/* @__PURE__ */ U(Ja, {
				onClick: E,
				children: `${n.leverage}x`
			}),
			k
		] }),
		/* @__PURE__ */ W(Ya, {
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
				/* @__PURE__ */ U(Xa, { children: A(te) }),
				/* @__PURE__ */ U(s, {
					width: "14px",
					color: "textSubtle"
				})
			]
		}),
		V && G && typeof document < "u" && ee(/* @__PURE__ */ U(ao, {
			ref: B,
			role: "listbox",
			style: {
				top: G.top,
				left: G.left,
				width: G.width
			},
			children: so.map((e) => /* @__PURE__ */ U(oo, {
				role: "option",
				"aria-selected": e.key === a,
				$active: e.key === a,
				onClick: () => {
					o(e.key), H(!1);
				},
				children: A(e.label)
			}, e.key))
		}), document.body),
		F && /* @__PURE__ */ W(Za, { children: [
			/* @__PURE__ */ U(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: A("Stop")
			}),
			/* @__PURE__ */ U(Qa, {
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
			/* @__PURE__ */ W($a, {
				type: "button",
				onClick: () => i({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				children: [n.stopPriceSource === "MARK" ? A("Mark") : A("Last"), /* @__PURE__ */ U(s, { width: "12px" })]
			})
		] }),
		P && /* @__PURE__ */ W(Za, { children: [
			/* @__PURE__ */ U(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: A("Price")
			}),
			/* @__PURE__ */ U(Qa, {
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
		/* @__PURE__ */ W(Za, { children: [/* @__PURE__ */ U(Qa, {
			value: n.quantity,
			onChange: (e) => i({
				...n,
				quantity: e.target.value
			}),
			placeholder: A("Size"),
			inputMode: "decimal"
		}), /* @__PURE__ */ W($a, {
			type: "button",
			onClick: R,
			children: [j, /* @__PURE__ */ U(s, { width: "12px" })]
		})] }),
		/* @__PURE__ */ U(f, { children: /* @__PURE__ */ U(ca, {
			min: 0,
			max: 100,
			step: 1,
			value: h,
			onValueChanged: g
		}) }),
		/* @__PURE__ */ W(eo, { children: [
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
		/* @__PURE__ */ W(to, { children: [/* @__PURE__ */ U(l, {
			scale: "sm",
			checked: n.tpSlEnabled,
			onChange: (e) => i({
				...n,
				tpSlEnabled: e.target.checked
			})
		}), /* @__PURE__ */ U("span", { children: A("TP/SL") })] }),
		/* @__PURE__ */ W(to, { children: [/* @__PURE__ */ U(l, {
			scale: "sm",
			checked: n.reduceOnly,
			onChange: (e) => i({
				...n,
				reduceOnly: e.target.checked
			})
		}), /* @__PURE__ */ U("span", { children: A("Reduce-Only") })] }),
		w,
		/* @__PURE__ */ W(no, {
			$tone: "up",
			children: [
				/* @__PURE__ */ W(ro, { children: [/* @__PURE__ */ U("span", { children: A("Est. liq. price") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: q
				})] }),
				/* @__PURE__ */ W(ro, { children: [/* @__PURE__ */ U("span", { children: A("Margin") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: ne
				})] }),
				/* @__PURE__ */ W(ro, { children: [/* @__PURE__ */ U("span", { children: A("Max") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ U(io, {
			type: "button",
			$side: "BUY",
			disabled: !v || y,
			onClick: () => T({ sideOverride: "BUY" }),
			children: A("Buy/Long")
		}),
		/* @__PURE__ */ W(no, {
			$tone: "down",
			children: [
				/* @__PURE__ */ W(ro, { children: [/* @__PURE__ */ U("span", { children: A("Est. liq. price") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: q
				})] }),
				/* @__PURE__ */ W(ro, { children: [/* @__PURE__ */ U("span", { children: A("Margin") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: ne
				})] }),
				/* @__PURE__ */ W(ro, { children: [/* @__PURE__ */ U("span", { children: A("Max") }), /* @__PURE__ */ U("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ U(io, {
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
}, lo = (e) => {
	let { isMobile: t } = h();
	if (t) return /* @__PURE__ */ U(co, { ...e });
	let { baseAsset: n, quoteAsset: i, draft: a, onDraftChange: o, typeKey: s, onTypeKeyChange: c, availableBalanceText: m, preview: g, feeText: _, sizePercent: v, onSizePercentChange: y, cta: b, canSubmit: x, isSubmitting: S = !1, marginSubmitting: C = !1, authReady: w = !0, hasAddress: T = !0, errorSlot: D, onSubmit: O, onLeverageClick: k, onMarginModeToggle: A, onDepositClick: j, extraControls: N, markPrice: P, priceDecimals: F = 2, t: R = Ga } = e, z = a.sizeUnit === "QUOTE" ? i : n, B = (e) => o({
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
	})(), q = a.side === "BUY" ? 1 : -1, ne = K > 0 && te > 0, re = (e) => Number.isFinite(e) ? e.toFixed(2) : "", ie = (e) => Number.isFinite(e) ? e.toFixed(F) : "", J = (e) => e.replace(/,/g, ""), Y = (e) => {
		let t = Number(J(e));
		return !Number.isFinite(t) || !ne ? "" : re((t - K) * te * q);
	}, ae = (e) => {
		let t = Number(J(e));
		return !Number.isFinite(t) || !ne ? "" : ie(K + t * q / te);
	}, oe = (e) => {
		let t = J(e);
		if (t === "") return o({
			...a,
			takeProfitPrice: "",
			takeProfitPnl: ""
		});
		o({
			...a,
			takeProfitPrice: t,
			takeProfitPnl: Y(t)
		});
	}, se = (e) => {
		let t = Mi(J(e));
		if (t === "" || t === "-") return o({
			...a,
			takeProfitPnl: "",
			takeProfitPrice: ""
		});
		o({
			...a,
			takeProfitPnl: t,
			takeProfitPrice: ae(t)
		});
	}, ce = (e) => {
		let t = J(e);
		if (t === "") return o({
			...a,
			stopLossPrice: "",
			stopLossPnl: ""
		});
		o({
			...a,
			stopLossPrice: t,
			stopLossPnl: Y(t)
		});
	}, le = (e) => {
		let t = Ni(J(e));
		if (t === "" || t === "-") return o({
			...a,
			stopLossPnl: "",
			stopLossPrice: ""
		});
		o({
			...a,
			stopLossPnl: t,
			stopLossPrice: ae(t)
		});
	}, ue = s === "stop-limit" || s === "stop-market", de = s === "limit" || s === "stop-limit", fe = ue, pe = I(null), me = I(null), [he, ge] = L(!1), [_e, ve] = L({
		top: 0,
		left: 0
	});
	M(() => {
		if (!he || !pe.current || !me.current) return;
		let e = pe.current.getBoundingClientRect(), t = me.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		ve({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [he]), M(() => {
		if (!he) return;
		let e = (e) => {
			let t = e.target;
			pe.current && !pe.current.contains(t) && me.current && !me.current.contains(t) && ge(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [he]);
	let ye = ue, be = s === "stop-market" ? `${R("Stop Market")} ▾` : `${R("Stop Limit")} ▾`, xe = () => {
		ge((e) => !e);
	}, Se = (e) => {
		c(e), ge(!1);
	};
	return /* @__PURE__ */ W(ga, { children: [
		/* @__PURE__ */ W(_a, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ U(va, {
				$active: s === e,
				onClick: () => c(e),
				children: R(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ U(va, {
				ref: pe,
				$active: ye,
				onClick: xe,
				"aria-haspopup": "menu",
				"aria-expanded": he,
				children: be
			}),
			he && typeof document < "u" && ee(/* @__PURE__ */ W(Ma, {
				ref: me,
				style: {
					top: _e.top,
					left: _e.left
				},
				role: "menu",
				children: [/* @__PURE__ */ U(Na, {
					$active: s === "stop-limit",
					role: "menuitem",
					onClick: () => Se("stop-limit"),
					children: R("Stop Limit")
				}), /* @__PURE__ */ U(Na, {
					$active: s === "stop-market",
					role: "menuitem",
					onClick: () => Se("stop-market"),
					children: R("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ W(ya, { children: [/* @__PURE__ */ U(ba, {
			$active: a.side === "BUY",
			$side: "BUY",
			onClick: () => B("BUY"),
			children: R("Buy")
		}), /* @__PURE__ */ U(ba, {
			$active: a.side === "SELL",
			$side: "SELL",
			onClick: () => B("SELL"),
			children: R("Sell")
		})] }),
		/* @__PURE__ */ W(E, {
			style: { gap: 8 },
			children: [
				/* @__PURE__ */ U(xa, {
					disabled: C,
					onClick: A,
					title: R("Margin mode"),
					children: a.marginMode === "CROSS" ? R("Cross") : R("Isolated")
				}),
				/* @__PURE__ */ W(xa, {
					onClick: k,
					title: R("Leverage"),
					children: [a.leverage, "x"]
				}),
				N
			]
		}),
		/* @__PURE__ */ W(Sa, { children: [/* @__PURE__ */ U(Ca, { children: R("Avbl") }), /* @__PURE__ */ W(wa, { children: [/* @__PURE__ */ W(r, {
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
		fe && /* @__PURE__ */ W(ka, { children: [
			/* @__PURE__ */ U(Ea, { children: R("Stop") }),
			/* @__PURE__ */ U(Aa, {
				value: a.stopPrice,
				onChange: (e) => o({
					...a,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": R("Stop price")
			}),
			/* @__PURE__ */ W(ja, {
				type: "button",
				onClick: () => o({
					...a,
					stopPriceSource: a.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: R("Trigger source"),
				children: [a.stopPriceSource === "MARK" ? R("Mark") : R("Last"), " ▾"]
			})
		] }),
		de && /* @__PURE__ */ W(ka, { children: [
			/* @__PURE__ */ U(Ea, { children: R("Price") }),
			/* @__PURE__ */ U(Aa, {
				value: a.price,
				onChange: (e) => o({
					...a,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": R("Limit price")
			}),
			/* @__PURE__ */ U(Oa, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: i
			})
		] }),
		s === "stop-limit" && /* @__PURE__ */ W(ka, { children: [
			/* @__PURE__ */ U(Ea, { children: R("TIF") }),
			/* @__PURE__ */ U(E, { flex: 1 }),
			/* @__PURE__ */ W(Pa, {
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
		/* @__PURE__ */ W(Ta, { children: [
			/* @__PURE__ */ U(Ea, { children: R("Size") }),
			/* @__PURE__ */ U(Da, {
				value: a.quantity,
				onChange: (e) => o({
					...a,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ W(Oa, {
				onClick: V,
				title: R("Toggle unit"),
				children: [z, " ▾"]
			})
		] }),
		/* @__PURE__ */ U(Ia, { children: /* @__PURE__ */ U(d, {
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
			}), /* @__PURE__ */ U(r, {
				fontSize: "14px",
				children: R("Reduce Only")
			})]
		}),
		/* @__PURE__ */ W(E, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ U(l, {
				scale: "sm",
				checked: a.tpSlEnabled,
				onChange: G
			}), /* @__PURE__ */ U(r, {
				fontSize: "14px",
				children: R("Take Profit / Stop Loss")
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
				}), /* @__PURE__ */ U(Ba, {
					value: a.takeProfitSource ?? "LAST",
					onChange: (e) => o({
						...a,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ W(La, { children: [/* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("Trigger Price")
				}), /* @__PURE__ */ U(Fa, {
					...Pi(a.takeProfitPrice, oe),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("PnL (USDT)")
				}), /* @__PURE__ */ U(Fa, {
					...Pi(a.takeProfitPnl ?? "", se),
					placeholder: "0.00",
					inputMode: "decimal"
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
				}), /* @__PURE__ */ U(Ba, {
					value: a.stopLossSource ?? "LAST",
					onChange: (e) => o({
						...a,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ W(La, { children: [/* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("Trigger Price")
				}), /* @__PURE__ */ U(Fa, {
					...Pi(a.stopLossPrice, ce),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ W(f, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ U(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("PnL (USDT)")
				}), /* @__PURE__ */ U(Fa, {
					...Pi(a.stopLossPnl ?? "", le),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] })]
		}),
		D,
		w ? /* @__PURE__ */ U(Va, {
			onClick: () => O(),
			disabled: !x,
			isLoading: S,
			scale: "md",
			$side: a.side,
			children: b
		}) : /* @__PURE__ */ U(Va, {
			$side: a.side,
			onClick: () => O(),
			scale: "md",
			disabled: !T,
			children: b
		}),
		/* @__PURE__ */ W(Ha, { children: [
			/* @__PURE__ */ U(Ua, { children: R("Cost") }),
			/* @__PURE__ */ U(Wa, { children: g.cost }),
			!ue && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(Ua, { children: R("Est. Liq. Price") }), /* @__PURE__ */ U(Wa, { children: g.liq })] }),
			/* @__PURE__ */ U(Ua, { children: R("Fees") }),
			/* @__PURE__ */ U(Wa, { children: _ })
		] })
	] });
}, uo = B(E)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, fo = B.button`
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
`, po = B(E)`
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
`, mo = B(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, ho = B(E)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, go = B.button`
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
`, _o = B(E)`
  flex-direction: column;
`, vo = B(E)`
  flex-direction: column;
  gap: 8px;
`, yo = B(E)`
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
`, bo = B(E)`
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
`, xo = B.button`
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
`, So = B.input`
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
`, Co = B(E)`
  align-items: center;
  gap: 8px;
`, wo = B.button`
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
`, To = B.span`
  display: inline-block;
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Eo = B.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Do = B(E)`
  justify-content: space-between;
  align-items: center;
`, Oo = B(E)`
  flex-direction: column;
  gap: 8px;
`, ko = B(E)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, Ao = B.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, jo = B(r).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, Mo = B.div`
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
`, No = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Po = [
	25,
	50,
	75
], Fo = ({ isOpen: e, onClose: t, step: n, evmAddress: a, solanaAddress: o, perpBalanceText: s, isLoadingAssets: c = !1, assets: l, selectedAssetId: u, onSelectAsset: d, otherSupportedSymbols: f = [], selectedAsset: p, amount: m, onAmountChange: h, sourceAddress: v, errorSlot: y, onPercentClick: b, submitState: x, canContinue: C, onContinue: w, onBack: T, receipt: D, checkingElapsedMs: k = 0, onDepositAgain: A, onRetry: j, t: M = No, renderTokenIcon: N, renderSpinner: P }) => {
	let F = M(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund Your Perp Account"), I = (() => {
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
	})(), L = (e, t = 24) => N ? N(e, t) : /* @__PURE__ */ U(Mo, {
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
			children: /* @__PURE__ */ W(uo, { children: [
				n === "amount" && /* @__PURE__ */ W(fo, {
					type: "button",
					onClick: T,
					"aria-label": "back",
					children: [/* @__PURE__ */ U(_, {
						width: "14px",
						color: "primary"
					}), /* @__PURE__ */ U("span", { children: M("Back") })]
				}),
				n === "select" && /* @__PURE__ */ W(H, { children: [
					/* @__PURE__ */ W(po, { children: [/* @__PURE__ */ W(E, {
						flexDirection: "column",
						style: { gap: 2 },
						children: [/* @__PURE__ */ U(mo, { children: M("Perp Balance") }), /* @__PURE__ */ U(r, {
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
					l.length > 0 && /* @__PURE__ */ U(ho, { children: l.map((e) => /* @__PURE__ */ W(go, {
						$selected: u === e.id,
						onClick: () => d(e.id),
						title: e.displayName,
						children: [/* @__PURE__ */ W(E, {
							alignItems: "center",
							style: { gap: 12 },
							children: [L(e, 40), /* @__PURE__ */ W(_o, { children: [/* @__PURE__ */ U(r, {
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
					/* @__PURE__ */ W(vo, { children: [/* @__PURE__ */ W(yo, { children: [/* @__PURE__ */ U(r, {
						fontSize: "12px",
						bold: !0,
						color: "textSubtle",
						children: M("Available: %amt% %sym%", {
							amt: p.balanceText,
							sym: p.symbol
						})
					}), /* @__PURE__ */ W(Co, { children: [
						Po.map((e, t) => /* @__PURE__ */ W(O.Fragment, { children: [t > 0 && /* @__PURE__ */ U(To, {}), /* @__PURE__ */ W(wo, {
							onClick: () => b(e),
							children: [e, "%"]
						})] }, e)),
						/* @__PURE__ */ U(To, {}),
						/* @__PURE__ */ U(wo, {
							onClick: () => b(100),
							children: M("MAX")
						})
					] })] }), /* @__PURE__ */ W(bo, { children: [/* @__PURE__ */ W(xo, {
						type: "button",
						children: [L(p, 40), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: p.displayName || p.symbol
						})]
					}), /* @__PURE__ */ U(So, {
						value: m,
						onChange: (e) => h(e.target.value),
						placeholder: "0.0",
						inputMode: "decimal"
					})] })] }),
					/* @__PURE__ */ W(Eo, { children: [
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(mo, {
							color: "textSubtle",
							children: M("Source")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							children: v ?? "—"
						})] }),
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(mo, {
							color: "textSubtle",
							children: M("Destination")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							children: M("Aster perp account")
						})] }),
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(mo, {
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
					/* @__PURE__ */ W(Oo, { children: [
						/* @__PURE__ */ W(ko, {
							$state: "done",
							children: [/* @__PURE__ */ U(Ao, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ U(r, {
								fontSize: "13px",
								children: M("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ W(ko, {
							$state: "done",
							children: [/* @__PURE__ */ U(Ao, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ U(r, {
								fontSize: "13px",
								children: M("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ W(ko, {
							$state: "active",
							children: [/* @__PURE__ */ U(Ao, {
								$state: "active",
								children: R(16)
							}), /* @__PURE__ */ U(r, {
								fontSize: "13px",
								children: M("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ W(Eo, { children: [
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(mo, {
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
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(mo, {
							color: "textSubtle",
							children: M("Tx hash")
						}), /* @__PURE__ */ W(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								D.hash.slice(0, 10),
								"…",
								D.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(mo, {
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
					/* @__PURE__ */ W(jo, { children: [
						D.amount,
						" ",
						D.assetSymbol
					] }),
					/* @__PURE__ */ W(Eo, { children: [
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: M("Source")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: D.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: M("Destination")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: M("Aster perp account")
						})] }),
						/* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: M("Processing time")
						}), /* @__PURE__ */ U(r, {
							fontSize: "14px",
							bold: !0,
							children: M("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ U(Eo, { children: /* @__PURE__ */ W(Do, { children: [/* @__PURE__ */ U(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: M("Tx hash")
					}), /* @__PURE__ */ W(r, {
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
}, Io = (e) => e, Lo = ({ isOpen: e, onClose: a, phase: o, eoaAddress: s, agentAddress: c, isProvisioning: l = !1, linkButtonLabel: u, isLinkDisabled: d = !1, isLinkPending: p = !1, onLinkWallet: m, approveButtonLabel: h, isApproveDisabled: _ = !1, isApprovePending: v = !1, onApprove: y, errorSlot: b, t: x = Io }) => {
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
}, Ro = [
	50,
	250,
	500,
	1001
], zo = 1001, Bo = 50 / 1001, Vo = 250 / 1001, Ho = (e, t) => e <= t * Bo ? "safe" : e <= t * Vo ? "warn" : "danger", Uo = 500 / 1001, Wo = (e, t) => e > t * Uo, Go = (e, t) => e > t * Vo, Ko = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "High leverage" : "Danger zone", qo = (e) => e === "safe" ? "🌿" : e === "warn" ? "⚡️" : "🔥", Jo = (e) => e === "safe" ? "A good place to start. You'll feel the market without getting rekt." : e === "warn" ? "Liquidation triggers around a 1% move." : "1% move against you liquidates. Only risk what you can afford to lose.", Yo = () => /* @__PURE__ */ U("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M10.9629 8.57864L6.79069 12.7509C6.58302 12.9586 6.33844 13.0634 6.05694 13.0654C5.77544 13.0674 5.5251 12.9628 5.30594 12.7516C5.1026 12.5403 5.00194 12.2939 5.00394 12.0124C5.00594 11.7309 5.1111 11.4861 5.31944 11.2781L11.2714 5.33339C11.3736 5.23139 11.4873 5.15456 11.6124 5.10289C11.7376 5.05122 11.8683 5.02539 12.0044 5.02539C12.1406 5.02539 12.2713 5.05122 12.3964 5.10289C12.5216 5.15456 12.6319 5.22797 12.7272 5.32314L18.6829 11.2791C18.8983 11.4945 19.0059 11.7367 19.0059 12.0059C19.0059 12.2751 18.9023 12.5153 18.6949 12.7266C18.4758 12.9378 18.225 13.0434 17.9427 13.0434C17.6604 13.0434 17.4164 12.9378 17.2107 12.7266L13.0379 8.57864V18.3664C13.0379 18.6571 12.9383 18.9025 12.7389 19.1026C12.5394 19.303 12.295 19.4031 12.0057 19.4031C11.7164 19.4031 11.4702 19.303 11.2672 19.1026C11.0644 18.9025 10.9629 18.6571 10.9629 18.3664V8.57864Z",
		fill: "currentColor"
	})
}), Xo = () => /* @__PURE__ */ U("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M10.9997 5V16.17L6.11973 11.29C5.72973 10.9 5.08973 10.9 4.69973 11.29C4.30973 11.68 4.30973 12.31 4.69973 12.7L11.2897 19.29C11.6797 19.68 12.3097 19.68 12.6997 19.29L19.2897 12.7C19.6797 12.31 19.6797 11.68 19.2897 11.29C18.8997 10.9 18.2697 10.9 17.8797 11.29L12.9997 16.17V5C12.9997 4.45 12.5497 4 11.9997 4C11.4497 4 10.9997 4.45 10.9997 5Z",
		fill: "currentColor"
	})
}), Zo = () => /* @__PURE__ */ U("svg", {
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
}), Qo = () => /* @__PURE__ */ U("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), $o = () => /* @__PURE__ */ U("svg", {
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
}), es = () => /* @__PURE__ */ U("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), ts = B(G)`
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
`, ns = B.div`
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
`, rs = B.div`
  display: inline-flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  gap: 16px;
  border: 0;
  background: transparent;
  border-radius: 0;
`, is = B.div`
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
`, as = B.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
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
var os = B.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ss = B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, cs = B(E)`
  align-items: center;
  justify-content: space-between;
`, ls = B(r).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, us = B.button`
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
`, ds = B.span`
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
`, fs = B.label`
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
`, ps = B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, ms = B.span`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.failure};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  font-feature-settings: 'liga' off;
`, hs = B.span`
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
`, gs = B.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, _s = B.input`
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
`, vs = B.button`
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
`, ys = B.span`
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
`, bs = B.span`
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
`, xs = B.span`
  position: relative;
  display: inline-flex;
`, Ss = B.div`
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
`, Cs = B.button`
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
`, ws = B.span`
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
var Ts = B(E)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, Es = B.button`
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
`, Ds = B.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Os = B(E)`
  justify-content: space-between;
  align-items: center;
`, ks = B.span`
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
`, As = {
	safe: "#31D0AA",
	warn: "#FFB237",
	danger: "#ED4B9E"
}, js = B.span`
  display: flex;
  padding: 2px 5px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 999px;
  background: ${({ $zone: e }) => As[e]};
`, Ms = B.span`
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
`, Ns = B.span`
  display: inline-flex;
  align-items: center;
  color: #FFF;
  cursor: help;

  html.dark & {
    color: #000;
  }
`, Ps = B.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, Fs = B.div`
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
`, Is = B.span`
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
`, Ls = () => /* @__PURE__ */ W("svg", {
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
}), Rs = () => /* @__PURE__ */ W("svg", {
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
}), zs = () => /* @__PURE__ */ W("svg", {
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
}), Bs = B.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, Vs = B(E)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, Hs = B.button`
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
`, Us = B.div`
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
`, Ws = B.input`
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
`, Gs = B.span`
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
var Ks = B.div`
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

  @media (max-width: 1199.98px) {
    width: auto;
  }
`, qs = B(E)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, Js = B.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Ys = B.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, Xs = B.button`
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
`, Zs = B.span`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`, Qs = B(E)`
  align-self: stretch;
  gap: 8px;
`, $s = B(i)`
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
`, ec = B.div`
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
`, tc = B(E)`
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
`, nc = B.span`
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
`, rc = B.span`
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
`, ic = ({ selected: e, options: t, onSelect: n, onClickFallback: r }) => {
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
	return /* @__PURE__ */ W(xs, {
		ref: o,
		children: [/* @__PURE__ */ W(vs, {
			type: "button",
			onClick: () => {
				s ? a((e) => !e) : r?.();
			},
			"aria-label": "Choose bet denomination",
			children: [/* @__PURE__ */ U(ys, { children: c?.logoUrl ? /* @__PURE__ */ U("img", {
				src: c.logoUrl,
				alt: e,
				loading: "lazy",
				decoding: "async"
			}) : e }), /* @__PURE__ */ U(bs, { children: /* @__PURE__ */ U(Qo, {}) })]
		}), s && i ? /* @__PURE__ */ U(Ss, {
			role: "menu",
			children: t.map((t) => /* @__PURE__ */ W(Cs, {
				type: "button",
				role: "menuitemradio",
				"aria-checked": t.code === e,
				$selected: t.code === e,
				onClick: () => {
					n?.(t.code), a(!1);
				},
				children: [/* @__PURE__ */ U(ws, {
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
}, ac = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, betError: c, leverage: l, onLeverageChange: u, maxLeverage: d = zo, presets: f = Ro, quoteAsset: p, onQuoteAssetClick: m, assetOptions: h, onAssetChange: g, fundBalanceText: _, onTopUpFund: v, onPercentClick: y, estimatedEntry: b, liqIfLong: x, marginRequired: S, openingFee: C, canSubmit: w, isSubmittingUp: E = !1, isSubmittingDown: D = !1, onUp: k, onDown: A, onDeposit: j, onWithdraw: M, unrealizedPnl: N }) => {
	let P = Math.min(100, Math.max(0, l / d * 100)), F = Ho(l, d), I = Wo(l, d), L = Go(l, d), R = E || D, z = !w || R, B = !w || R, { targetRef: V, tooltip: H } = T(Jo(F), { placement: "top" }), ee = O.useRef(null), G = O.useCallback((e) => {
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
	return /* @__PURE__ */ W(ts, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ U(ns, { children: /* @__PURE__ */ W(as, { children: [/* @__PURE__ */ W(os, { children: [/* @__PURE__ */ W(ss, { children: [
			/* @__PURE__ */ W(cs, { children: [/* @__PURE__ */ U(ls, { children: "My Perp Fund" }), /* @__PURE__ */ W(us, {
				type: "button",
				onClick: v,
				"aria-label": "Top up fund",
				children: [
					/* @__PURE__ */ U("span", {
						style: { display: "inline-flex" },
						children: /* @__PURE__ */ U(es, {})
					}),
					/* @__PURE__ */ U(ds, { children: _ }),
					/* @__PURE__ */ U("span", {
						style: { display: "inline-flex" },
						children: /* @__PURE__ */ U($o, {})
					})
				]
			})] }),
			/* @__PURE__ */ W(fs, { children: [/* @__PURE__ */ W(ps, { children: [/* @__PURE__ */ U(hs, { children: "My Bet" }), /* @__PURE__ */ W(gs, { children: [/* @__PURE__ */ U(_s, {
				type: "number",
				inputMode: "decimal",
				value: o,
				onChange: (e) => s(e.target.value),
				"aria-label": "Bet amount",
				placeholder: "0"
			}), /* @__PURE__ */ U(ic, {
				selected: p,
				options: h,
				onSelect: g,
				onClickFallback: m
			})] })] }), c ? /* @__PURE__ */ U(ms, {
				role: "alert",
				children: c
			}) : null] }),
			/* @__PURE__ */ W(Ts, { children: [
				/* @__PURE__ */ U(Es, {
					type: "button",
					onClick: () => y?.(.25),
					children: "25%"
				}),
				/* @__PURE__ */ U(Ds, {}),
				/* @__PURE__ */ U(Es, {
					type: "button",
					onClick: () => y?.(.5),
					children: "50%"
				}),
				/* @__PURE__ */ U(Ds, {}),
				/* @__PURE__ */ U(Es, {
					type: "button",
					onClick: () => y?.(1),
					children: "MAX"
				})
			] })
		] }), /* @__PURE__ */ W(ss, { children: [
			/* @__PURE__ */ U(ls, { children: "Leverage" }),
			/* @__PURE__ */ W(Os, { children: [/* @__PURE__ */ W(ks, { children: [l, "x"] }), /* @__PURE__ */ W(js, {
				$zone: F,
				children: [
					qo(F) ? /* @__PURE__ */ U(Ms, {
						as: "span",
						"aria-hidden": !0,
						children: qo(F)
					}) : null,
					/* @__PURE__ */ U(Ms, { children: Ko(F) }),
					/* @__PURE__ */ U(Ns, {
						ref: V,
						"aria-label": `${Ko(F)} explanation`,
						children: /* @__PURE__ */ U(Zo, {})
					}),
					H
				]
			})] }),
			/* @__PURE__ */ W(Ps, { children: [/* @__PURE__ */ W(Fs, {
				ref: ee,
				$fillPct: P,
				$zone: F,
				"aria-hidden": !0,
				children: [/* @__PURE__ */ U(Bs, {
					type: "range",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Number(e.target.value)),
					"aria-label": "Leverage"
				}), /* @__PURE__ */ U(Is, {
					$fillPct: P,
					$variant: I ? "triple" : L ? "double" : "single",
					onPointerDown: G,
					children: U(I ? zs : L ? Rs : Ls, {})
				})]
			}), /* @__PURE__ */ W(Vs, {
				role: "tablist",
				children: [/* @__PURE__ */ W(Us, { children: [/* @__PURE__ */ U(Ws, {
					type: "number",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Math.max(1, Math.min(d, Number(e.target.value) || 1))),
					"aria-label": "Custom leverage"
				}), /* @__PURE__ */ U(Gs, { children: "x" })] }), f.map((e) => /* @__PURE__ */ W(Hs, {
					type: "button",
					role: "tab",
					"aria-selected": l === e,
					$active: l === e,
					onClick: () => u(e),
					children: [e, "x"]
				}, e))]
			})] })
		] })] }), /* @__PURE__ */ W(rs, { children: [o && o !== "0" ? /* @__PURE__ */ W(Ks, { children: [
			/* @__PURE__ */ W(qs, { children: [/* @__PURE__ */ U(Js, { children: "Estimated Entry" }), /* @__PURE__ */ U(Ys, { children: b })] }),
			/* @__PURE__ */ W(qs, { children: [/* @__PURE__ */ U(Js, { children: "Liquidation if long" }), /* @__PURE__ */ U(Ys, {
				$danger: !0,
				children: x
			})] }),
			/* @__PURE__ */ W(qs, { children: [/* @__PURE__ */ U(Js, { children: "Margin required" }), /* @__PURE__ */ U(Ys, { children: S })] }),
			/* @__PURE__ */ W(qs, { children: [/* @__PURE__ */ U(Js, { children: "Opening fee" }), /* @__PURE__ */ U(Ys, { children: C })] })
		] }) : null, /* @__PURE__ */ W(is, { children: [/* @__PURE__ */ U(Xs, {
			type: "button",
			$variant: "up",
			disabled: z,
			onClick: k,
			"aria-busy": E,
			children: /* @__PURE__ */ W(Zs, { children: [/* @__PURE__ */ U(Yo, {}), E ? "..." : "UP"] })
		}), /* @__PURE__ */ U(Xs, {
			type: "button",
			$variant: "down",
			disabled: B,
			onClick: A,
			"aria-busy": D,
			children: /* @__PURE__ */ W(Zs, { children: [/* @__PURE__ */ U(Xo, {}), D ? "..." : "DOWN"] })
		})] })] })] }) }), /* @__PURE__ */ W(ec, { children: [/* @__PURE__ */ W(Qs, { children: [/* @__PURE__ */ U($s, {
			$variant: "primary",
			onClick: j,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ U($s, {
			$variant: "secondary",
			onClick: M,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ W(tc, { children: [/* @__PURE__ */ U(nc, { children: "Unrealized PnL" }), /* @__PURE__ */ U(rc, { children: N })] })] })]
	});
}, oc = B.div`
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
`, sc = B.button`
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
`, cc = B.span`
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
`, lc = B.span`
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
var uc = B.div`
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
`, dc = B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, fc = B.span`
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
`, pc = B.span`
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
`, mc = B.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};

  @media (max-width: 575.98px) {
    display: none;
  }
`, hc = B.span`
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
`, gc = B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, _c = B.span`
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
`, vc = B.span`
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
`, yc = B.span`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive: e }) => e ? "#129E7D" : "#ED4B9E"};
`, bc = B.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
`, xc = B(E)`
  align-items: center;
  gap: 24px;
  height: 56px;
  flex-shrink: 0;
`, Sc = B.span`
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
`, Cc = B.div`
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
`, wc = B.span`
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
`, Tc = B.span`
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
`, Ec = () => /* @__PURE__ */ U("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M1.90301 9.83956C1.65374 9.83956 1.47213 9.73331 1.35818 9.52081C1.24423 9.30831 1.25374 9.0988 1.3867 8.89228L5.49051 2.73574C5.61516 2.5553 5.78491 2.46509 5.99977 2.46509C6.21462 2.46509 6.38437 2.5553 6.50901 2.73574L10.6128 8.89228C10.7458 9.0988 10.7553 9.30831 10.6414 9.52081C10.5274 9.73331 10.3458 9.83956 10.0965 9.83956H1.90301Z",
		fill: "currentColor"
	})
}), Dc = () => /* @__PURE__ */ U("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M1.90301 2.16044C1.65374 2.16044 1.47213 2.26669 1.35818 2.47919C1.24423 2.69169 1.25374 2.9012 1.3867 3.10772L5.49051 9.26426C5.61516 9.4447 5.78491 9.53491 5.99977 9.53491C6.21462 9.53491 6.38437 9.4447 6.50901 9.26426L10.6128 3.10772C10.7458 2.9012 10.7553 2.69169 10.6414 2.47919C10.5274 2.26669 10.3458 2.16044 10.0965 2.16044H1.90301Z",
		fill: "currentColor"
	})
}), Oc = () => /* @__PURE__ */ U("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M7.25878 9.75835L9.41712 11.9167C9.74212 12.2417 10.2671 12.2417 10.5921 11.9167L12.7504 9.75835C13.2754 9.23335 12.9004 8.33335 12.1588 8.33335H7.84212C7.10045 8.33335 6.73378 9.23335 7.25878 9.75835Z",
		fill: "currentColor"
	})
}), kc = B.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`, Ac = B.div`
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
`, jc = B.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`, Mc = B.button`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: Kanit;
  font-size: 16px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, Nc = B.label`
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
`, Pc = B.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: Kanit;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  &::placeholder { color: ${({ theme: e }) => e.colors.textSubtle}; }
`, Fc = B.div`
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr 1fr;
  align-items: center;
  align-self: stretch;
  row-gap: 4px;
`, Ic = B.div`
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
`, Lc = B.button`
  display: contents;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
`, Rc = B.div`
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  ${Lc}:hover & { background: ${({ theme: e }) => e.colors.cardSecondary}; }
`, zc = B(Rc)`
  padding-left: 8px;
  padding-right: 0;
  color: #F0B90B;
`, Bc = B(Rc)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`, Vc = B.span`
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
`, Hc = B(Rc)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`, Uc = B.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e, $up: t }) => t ? e.colors.success : e.colors.failure};
  font-weight: 600;
`, Wc = [
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
], Gc = ({ isOpen: e, onClose: t }) => e ? /* @__PURE__ */ U(kc, {
	onClick: t,
	children: /* @__PURE__ */ W(Ac, {
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ W(jc, { children: [/* @__PURE__ */ U(Mc, {
				type: "button",
				$active: !0,
				children: "Favorites"
			}), /* @__PURE__ */ U(Mc, {
				type: "button",
				children: "All markets"
			})] }),
			/* @__PURE__ */ W(Nc, { children: [/* @__PURE__ */ U("svg", {
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": !0,
				children: /* @__PURE__ */ U("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
			}), /* @__PURE__ */ U(Pc, {
				type: "text",
				placeholder: "All tokens"
			})] }),
			/* @__PURE__ */ W(Fc, {
				role: "table",
				children: [
					/* @__PURE__ */ U(Ic, { children: "SYMBOLS" }),
					/* @__PURE__ */ U(Ic, {}),
					/* @__PURE__ */ U(Ic, { children: "LAST PRICE" }),
					/* @__PURE__ */ U(Ic, { children: "1D CHANGE" }),
					/* @__PURE__ */ U(Ic, { children: "1D VOLUME (USDT)" }),
					Wc.map((e) => /* @__PURE__ */ W(Lc, {
						type: "button",
						children: [
							/* @__PURE__ */ U(zc, { children: "★" }),
							/* @__PURE__ */ W(Bc, { children: [/* @__PURE__ */ U(Vc, {
								$color: e.color,
								children: e.symbol.slice(0, 1)
							}), /* @__PURE__ */ U("span", { children: e.symbol })] }),
							/* @__PURE__ */ U(Hc, { children: e.lastPrice }),
							/* @__PURE__ */ U(Hc, { children: /* @__PURE__ */ W(Uc, {
								$up: e.change >= 0,
								children: [
									e.change >= 0 ? "▲" : "▼",
									" ",
									Math.abs(e.change).toFixed(1),
									"%"
								]
							}) }),
							/* @__PURE__ */ U(Hc, { children: e.volume })
						]
					}, e.symbol))
				]
			})
		]
	})
}) : null, Kc = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c, renderTokenIcon: l }) => {
	let u = r >= 0, d = l?.(), f = I(null), p = I(null), [m, h] = L(!1), [g, _] = L(!1);
	return M(() => {
		let e = f.current, t = p.current;
		if (!e || !t) return;
		let n = () => h(t.scrollWidth > e.clientWidth + 1);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), r.observe(t), () => r.disconnect();
	}, []), /* @__PURE__ */ W(oc, { children: [
		/* @__PURE__ */ W(sc, {
			type: "button",
			onClick: () => {
				c?.(), _(!0);
			},
			"aria-label": `Change market · ${t}`,
			children: [d == null ? /* @__PURE__ */ U(cc, { children: e }) : /* @__PURE__ */ U(lc, { children: d }), /* @__PURE__ */ W(uc, { children: [
				/* @__PURE__ */ U(dc, { children: /* @__PURE__ */ W(fc, { children: [/* @__PURE__ */ U(pc, { children: t }), /* @__PURE__ */ U(mc, {
					"aria-hidden": !0,
					children: /* @__PURE__ */ U(Oc, {})
				})] }) }),
				/* @__PURE__ */ W(gc, { children: [/* @__PURE__ */ U(_c, { children: n }), /* @__PURE__ */ W(vc, {
					$positive: u,
					children: [
						/* @__PURE__ */ U(yc, {
							$positive: u,
							children: U(u ? Ec : Dc, {})
						}),
						r.toFixed(2),
						"%"
					]
				})] }),
				/* @__PURE__ */ U(hc, {
					"aria-hidden": !0,
					children: /* @__PURE__ */ U(Oc, {})
				})
			] })]
		}),
		/* @__PURE__ */ W(bc, {
			ref: f,
			children: [/* @__PURE__ */ W(xc, {
				ref: p,
				children: [
					/* @__PURE__ */ W(Cc, { children: [/* @__PURE__ */ U(wc, { children: "24h Volume" }), /* @__PURE__ */ U(Tc, { children: i })] }),
					/* @__PURE__ */ W(Cc, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ U(wc, { children: "Open Interest" }), /* @__PURE__ */ U(Tc, { children: a })]
					}),
					/* @__PURE__ */ W(Cc, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ U(wc, { children: "Funding Rate" }), /* @__PURE__ */ U(Tc, { children: o })]
					}),
					/* @__PURE__ */ W(Cc, {
						$hideOnLaptop: !0,
						children: [/* @__PURE__ */ U(wc, { children: "Next Funding" }), /* @__PURE__ */ U(Tc, { children: s })]
					})
				]
			}), /* @__PURE__ */ U(Sc, {
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
		/* @__PURE__ */ U(Gc, {
			isOpen: g,
			onClose: () => _(!1)
		})
	] });
}, qc = B(G)`
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
`, Jc = B.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Yc = B.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Xc = B.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Zc = B.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, Qc = B.div`
  position: relative;
  overflow: visible;
`, $c = B.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, el = B.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, tl = B.span`
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
`, nl = 1e3, rl = 360, il = 20, al = 70;
function ol(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * nl), i = e.map((e) => il + (1 - (e.price - t) / n) * (rl - il - al)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${nl} ${rl} L 0 ${rl} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var sl = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", cl = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", ll = 200, ul = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = V(), c = `simple-chart-fill-${N().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = F(() => ol(r), [r]), d = u?.line ?? sl, f = u?.area ?? cl, p = u?.endY ?? ll;
	return /* @__PURE__ */ W(qc, { children: [/* @__PURE__ */ U(Jc, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ U(Yc, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ W(Xc, { children: [/* @__PURE__ */ W(Zc, { children: [/* @__PURE__ */ W(Qc, { children: [/* @__PURE__ */ W("svg", {
		viewBox: `0 0 ${nl} ${rl}`,
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
				x2: nl - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ U(tl, {
		style: {
			right: -8,
			top: `calc(${p}/${rl} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ U($c, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ U("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ U(el, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ U("span", { children: e }, `${e}-${t}`))
	})] })] });
}, dl = B(G)`
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
`, fl = B.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 48px;
  padding: 0;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, pl = B.button`
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
`, ml = B.div`
  display: grid;
  grid-template-columns: 180px 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    grid-template-columns: 180px 1fr 1fr 1fr 56px;
  }

  @media (max-width: 967.98px) {
    display: none;
  }
`, hl = B.div`
  display: none;

  @media (max-width: 967.98px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
`, gl = B.div`
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
`, _l = B.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`, vl = B.span`
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
`, yl = B.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`, bl = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, xl = B.span`
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
`, Sl = B.span`
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
`, Cl = B.span`
  display: block;
  height: 1px;
  align-self: stretch;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, wl = B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`, Tl = B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, El = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`, Dl = B.span`
  color: ${({ $danger: e, $safe: t, theme: n }) => t ? "#129E7D" : e ? "#ED4B9E" : n.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`, Ol = B.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: stretch;
`, kl = B.div`
  height: 12px;
  align-self: stretch;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
`, Al = B.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
`, jl = B.button`
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
`, Ml = B.div`
  display: contents;

  @media (min-width: 968px) and (max-width: 1199.98px) {
    display: none;
  }
`, Nl = B.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Q = B.div`
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
`, Pl = () => /* @__PURE__ */ W("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "none",
	"aria-hidden": "true",
	children: [/* @__PURE__ */ U("path", {
		d: "M8.76686 12.7917C8.66711 12.7917 8.56945 12.7727 8.47388 12.7347C8.3784 12.6965 8.29324 12.6401 8.21838 12.5653L6.12669 10.4653C5.97706 10.3102 5.90327 10.1287 5.90531 9.92095C5.90745 9.71319 5.98611 9.53449 6.14127 9.38487C6.2909 9.23943 6.47095 9.16568 6.68144 9.16364C6.89193 9.1615 7.07198 9.23524 7.22161 9.38487L7.99394 10.1572V7.17331C7.99394 6.95854 8.06909 6.77606 8.2194 6.62585C8.36961 6.47554 8.55209 6.40039 8.76686 6.40039C8.98162 6.40039 9.16411 6.47554 9.31431 6.62585C9.46462 6.77606 9.53977 6.95854 9.53977 7.17331V10.1572L10.3121 9.38487C10.4575 9.23943 10.6351 9.1667 10.845 9.1667C11.0549 9.1667 11.2374 9.23943 11.3924 9.38487C11.5476 9.53449 11.6252 9.71562 11.6252 9.92824C11.6252 10.1409 11.5504 10.3248 11.4008 10.4799L9.31534 12.5653C9.24047 12.6401 9.15531 12.6965 9.05984 12.7347C8.96427 12.7727 8.86661 12.7917 8.76686 12.7917Z",
		fill: "#BDC2C4"
	}), /* @__PURE__ */ U("path", {
		d: "M5.23333 7.59979C5.01857 7.59979 4.83608 7.52464 4.68588 7.37433C4.53557 7.22412 4.46042 7.04163 4.46042 6.82687V3.84298L3.68808 4.61531C3.54274 4.76075 3.36511 4.83348 3.15521 4.83348C2.94531 4.83348 2.76282 4.76075 2.60775 4.61531C2.45258 4.46568 2.375 4.28456 2.375 4.07193C2.375 3.85931 2.44981 3.67541 2.59944 3.52025L4.68485 1.43483C4.75972 1.36007 4.84488 1.30363 4.94035 1.26552C5.03592 1.2275 5.13358 1.2085 5.23333 1.2085C5.33308 1.2085 5.43074 1.2275 5.52631 1.26552C5.62178 1.30363 5.70695 1.36007 5.78181 1.43483L7.8735 3.53483C8.02312 3.69 8.09692 3.87146 8.09488 4.07922C8.09274 4.28699 8.01408 4.46568 7.85892 4.61531C7.70929 4.76075 7.52924 4.8345 7.31875 4.83654C7.10826 4.83868 6.92821 4.76493 6.77858 4.61531L6.00625 3.84298V6.82687C6.00625 7.04163 5.9311 7.22412 5.78079 7.37433C5.63058 7.52464 5.4481 7.59979 5.23333 7.59979Z",
		fill: "#BDC2C4"
	})]
}), Fl = B.button`
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
`, $ = B.div`
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
`, Il = B.div`
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
`, Ll = B.span`
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
`, Rl = B.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`, zl = B.span`
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
`, Bl = B.span`
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
`, Vl = B($)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "#129E7D" : e === "negative" ? "#ED4B9E" : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;

  html.dark & {
    color: ${({ $sign: e, theme: t }) => e === "positive" ? "#3DDBB5" : e === "negative" ? "#ED4B9E" : t.colors.text};
  }
`, Hl = B($)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`, Ul = B.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, Wl = B.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, Gl = B.button`
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
`, Kl = B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, ql = B.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, Jl = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, Yl = (e) => Jl[e.toUpperCase()] ?? "#7A6EAA", Xl = (e) => e === "up" ? "Up" : "Down", Zl = () => /* @__PURE__ */ U("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ U("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), Ql = () => /* @__PURE__ */ U("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M7.368 8.632V10.6c0 .179.06.329.18.45.121.121.27.182.448.182.179 0 .329-.061.452-.182.123-.121.184-.271.184-.45V8.632h1.968c.179 0 .329-.06.45-.18.121-.121.182-.27.182-.448 0-.178-.061-.329-.182-.452-.121-.123-.271-.184-.45-.184H8.632V5.4c0-.179-.06-.329-.18-.45-.121-.121-.27-.182-.448-.182-.178 0-.329.061-.452.182-.123.121-.184.271-.184.45v1.968H5.4c-.179 0-.329.06-.45.18-.121.12-.182.27-.182.448 0 .178.061.329.182.452.121.123.271.184.45.184h1.968ZM8.005 14.535c-.902 0-1.75-.17-2.544-.51a6.553 6.553 0 0 1-2.083-1.402 6.563 6.563 0 0 1-1.398-2.084 6.535 6.535 0 0 1-.51-2.547c0-.905.17-1.751.51-2.539a6.55 6.55 0 0 1 1.398-2.078 6.544 6.544 0 0 1 2.083-1.398 6.535 6.535 0 0 1 2.547-.51c.905 0 1.752.17 2.54.51a6.55 6.55 0 0 1 2.075 1.398 6.582 6.582 0 0 1 1.4 2.082c.34.79.51 1.637.51 2.539 0 .902-.17 1.75-.51 2.543a6.582 6.582 0 0 1-1.4 2.083 6.55 6.55 0 0 1-2.079 1.402 6.535 6.535 0 0 1-2.539.51Zm-.005-1.383c1.434 0 2.651-.5 3.652-1.5 1-1.001 1.5-2.218 1.5-3.652 0-1.434-.5-2.651-1.5-3.652-1.001-1-2.218-1.5-3.652-1.5-1.434 0-2.651.5-3.652 1.5-1 1.001-1.5 2.218-1.5 3.652 0 1.434.5 2.651 1.5 3.652 1.001 1 2.218 1.5 3.652 1.5Z",
		fill: "currentColor"
	})
}), $l = B($)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
`, eu = B.button`
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
`, tu = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ W(dl, { children: [
	/* @__PURE__ */ W(fl, {
		role: "tablist",
		children: [
			/* @__PURE__ */ U(pl, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ U(pl, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ U(pl, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && n.length > 0 && /* @__PURE__ */ U(hl, { children: n.map((e) => /* @__PURE__ */ W(gl, { children: [
		/* @__PURE__ */ W(_l, { children: [
			o?.(e) ?? /* @__PURE__ */ U(vl, {
				$color: e.iconColor ?? Yl(e.symbol),
				children: e.symbol.slice(0, 1)
			}),
			/* @__PURE__ */ W(yl, { children: [/* @__PURE__ */ U(bl, { children: e.symbol }), /* @__PURE__ */ W(xl, {
				$direction: e.direction,
				children: [Xl(e.direction), e.leverageText ? ` · ${e.leverageText}` : ""]
			})] }),
			/* @__PURE__ */ U(Sl, {
				$sign: e.pnlSign,
				children: e.unrealizedPnl
			})
		] }),
		/* @__PURE__ */ U(Cl, {}),
		/* @__PURE__ */ W(wl, { children: [
			/* @__PURE__ */ W(Tl, { children: [/* @__PURE__ */ U(El, { children: "Entry Price" }), /* @__PURE__ */ U(Dl, { children: e.entryPrice })] }),
			/* @__PURE__ */ W(Tl, { children: [/* @__PURE__ */ U(El, { children: "Liq Price" }), /* @__PURE__ */ U(Dl, { children: e.liqPrice })] }),
			/* @__PURE__ */ W(Ol, { children: [/* @__PURE__ */ W(Tl, { children: [/* @__PURE__ */ U(El, { children: "Distance to Liq" }), /* @__PURE__ */ U(Dl, {
				$safe: e.liqStatus === "safe",
				$danger: e.liqStatus === "danger",
				children: e.liqStatusLabel
			})] }), /* @__PURE__ */ U(kl, { children: /* @__PURE__ */ U(Al, {
				$pct: e.liqDistancePct,
				$status: e.liqStatus
			}) })] })
		] }),
		/* @__PURE__ */ U(jl, {
			type: "button",
			onClick: () => a(e.id),
			children: "Close"
		})
	] }, `tablet-${e.id}`)) }),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ U(Kl, { children: "No open positions" }) : /* @__PURE__ */ W(ml, {
		role: "table",
		children: [
			/* @__PURE__ */ U(Q, { children: "Token" }),
			/* @__PURE__ */ W(Q, {
				$align: "right",
				children: ["Unrealized PnL", /* @__PURE__ */ U(Fl, {
					type: "button",
					"aria-label": "Sort by unrealized PnL",
					children: /* @__PURE__ */ U(Pl, {})
				})]
			}),
			/* @__PURE__ */ W(Ml, { children: [/* @__PURE__ */ W(Q, {
				$align: "right",
				children: ["Initial Margin", /* @__PURE__ */ U(Fl, {
					type: "button",
					"aria-label": "Sort by initial margin",
					children: /* @__PURE__ */ U(Pl, {})
				})]
			}), /* @__PURE__ */ W(Q, {
				$align: "right",
				children: ["Size (USD)", /* @__PURE__ */ U(Fl, {
					type: "button",
					"aria-label": "Sort by size",
					children: /* @__PURE__ */ U(Pl, {})
				})]
			})] }),
			/* @__PURE__ */ W(Q, {
				$align: "right",
				children: ["Entry Price", /* @__PURE__ */ U(Fl, {
					type: "button",
					"aria-label": "Sort by entry price",
					children: /* @__PURE__ */ U(Pl, {})
				})]
			}),
			/* @__PURE__ */ W(Q, {
				$align: "right",
				children: ["Liq. Price", /* @__PURE__ */ U(Fl, {
					type: "button",
					"aria-label": "Sort by liq. price",
					children: /* @__PURE__ */ U(Pl, {})
				})]
			}),
			/* @__PURE__ */ U(Ml, { children: /* @__PURE__ */ W(Q, {
				$align: "right",
				children: ["Distance to Liq", /* @__PURE__ */ U(Fl, {
					type: "button",
					"aria-label": "Sort by distance to liq",
					children: /* @__PURE__ */ U(Pl, {})
				})]
			}) }),
			/* @__PURE__ */ U(Q, {}),
			n.map((e) => /* @__PURE__ */ W(O.Fragment, { children: [
				/* @__PURE__ */ W(Il, { children: [o?.(e) ?? /* @__PURE__ */ U(Ll, {
					$color: e.iconColor ?? Yl(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ W(Rl, { children: [/* @__PURE__ */ U(zl, { children: e.symbol }), /* @__PURE__ */ W(Bl, {
					$direction: e.direction,
					children: [Xl(e.direction), e.leverageText ? ` | ${e.leverageText}` : ""]
				})] })] }),
				/* @__PURE__ */ U(Vl, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ W(Ml, { children: [/* @__PURE__ */ W($l, { children: [e.initialMargin, /* @__PURE__ */ U(eu, {
					type: "button",
					"aria-label": "Add margin",
					children: /* @__PURE__ */ U(Ql, {})
				})] }), /* @__PURE__ */ U($, { children: e.sizeUsd })] }),
				/* @__PURE__ */ U($, { children: e.entryPrice }),
				/* @__PURE__ */ U($, { children: e.liqPrice }),
				/* @__PURE__ */ U(Ml, { children: /* @__PURE__ */ W(Hl, { children: [/* @__PURE__ */ U(Ul, { children: /* @__PURE__ */ U(Wl, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ U("span", { children: e.liqStatusLabel })] }) }),
				/* @__PURE__ */ U(Gl, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ U(Zl, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ U(Kl, { children: "No open orders" }) : /* @__PURE__ */ W(Nl, {
		role: "table",
		children: [
			/* @__PURE__ */ U(Q, { children: "Symbol" }),
			/* @__PURE__ */ U(Q, { children: "Side" }),
			/* @__PURE__ */ U(Q, { children: "Type" }),
			/* @__PURE__ */ U(Q, { children: "Price" }),
			/* @__PURE__ */ U(Q, { children: "Size" }),
			/* @__PURE__ */ U(Q, { children: "Filled" }),
			/* @__PURE__ */ U(Q, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ W(O.Fragment, { children: [
				/* @__PURE__ */ U($, { children: e.symbol }),
				/* @__PURE__ */ U($, { children: /* @__PURE__ */ U(ql, {
					$side: e.side,
					children: e.side
				}) }),
				/* @__PURE__ */ U($, { children: e.type }),
				/* @__PURE__ */ U($, { children: e.price }),
				/* @__PURE__ */ U($, { children: e.origQty }),
				/* @__PURE__ */ U($, { children: e.executedQty }),
				/* @__PURE__ */ U($, { children: e.status })
			] }, e.id))
		]
	})),
	e === "history" && /* @__PURE__ */ U(Kl, { children: "No transaction history" })
] }), nu = { buckets: {
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
} }, ru = {
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
}, iu = (e) => `${e < 0 ? "-" : ""}$${Math.abs(e).toLocaleString("en-US", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
})}`, au = (e) => {
	let t = e < 0 ? "-" : "", n = Math.abs(e), r = n % 1 != 0;
	return `${t}$${n.toLocaleString("en-US", {
		minimumFractionDigits: r ? 2 : 0,
		maximumFractionDigits: 2
	})}`;
}, ou = (e) => {
	let [t, n = "00"] = Math.abs(e).toFixed(2).split(".");
	return {
		whole: `${e < 0 ? "-" : ""}$${Number(t).toLocaleString("en-US")}`,
		dec: `.${n}`
	};
};
function su(e, t, n) {
	let [r, i] = L(n);
	return [e === void 0 ? r : e, (n) => {
		e === void 0 && i(n), t?.(n);
	}];
}
var cu = ({ size: e = 12 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M6 3l4.5 6h-9z" })
}), lu = ({ size: e = 12 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M6 9L1.5 3h9z" })
}), uu = ({ size: e = 20 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		d: "M9.75832 12.7417L11.9167 10.5833C12.2417 10.2583 12.2417 9.73332 11.9167 9.40832L9.75832 7.24999C9.23332 6.72499 8.33332 7.09999 8.33332 7.84165V12.1583C8.33332 12.9 9.23332 13.2667 9.75832 12.7417Z",
		fill: "currentColor"
	})
}), du = ({ size: e = 16 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", { d: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
}), fu = ({ size: e = 16 }) => /* @__PURE__ */ U("svg", {
	width: e,
	height: e,
	viewBox: "0 0 24 24",
	"aria-hidden": "true",
	children: /* @__PURE__ */ U("path", {
		fill: "#F0B90B",
		d: "M12 2 7.4 6.6 9 8.2 12 5.2 15 8.2l1.6-1.6L12 2zm-7 7L3.4 10.6 5 12.2 6.6 10.6 5 9zm14 0-1.6 1.6L19 12.2l1.6-1.6L19 9zM7.4 13.4 5.8 15 12 21.2 18.2 15l-1.6-1.6L12 18l-4.6-4.6zm4.6-2L10.4 13 12 14.6 13.6 13 12 11.4z"
	})
}), pu = B.span`
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
`, mu = () => /* @__PURE__ */ U(pu, {
	$variant: "spot",
	"aria-hidden": !0,
	children: "💸"
}), hu = () => /* @__PURE__ */ U(pu, {
	$variant: "perp",
	"aria-hidden": !0,
	children: "🔮"
}), gu = z`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`, _u = B.span`
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
  animation: ${gu} 1.4s ease-in-out infinite;
  vertical-align: middle;
`, vu = B.div`
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
  animation: ${gu} 1.4s ease-in-out infinite;
`, yu = B(E)`
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
`, bu = B.section`
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
`, xu = B(E)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`, Su = B.button`
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
`, Cu = B.span`
  display: inline-flex;
  align-items: center;
  margin-right: -13px;
  padding-right: 13px;
`, wu = B.span`
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
`, Tu = B.span`
  display: grid;
  grid-template-columns: 9px 9px;
  grid-template-rows: 9px 9px;
  gap: 1px;
`, Eu = B.span`
  width: 9px;
  height: 9px;
  border-radius: 3px;
  display: block;
  background: ${({ $color: e }) => e};
`, Du = B(E)`
  align-items: center;
  gap: 16px;
  width: 100%;
`, Ou = B.button`
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
`, ku = B(E)`
  flex-direction: column;
  gap: 8px;
  width: 100%;
`, Au = B(E)`
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`, ju = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, Mu = B.div`
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
`, Nu = B.button`
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
`, Pu = B(E)`
  align-items: center;
  gap: 4px;
  width: 100%;
`, Fu = B.span`
  font-family: 'Kanit', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.32px;
  display: inline-flex;
  align-items: baseline;
`, Iu = B.span`
  color: ${({ theme: e }) => e.colors.text};
`, Lu = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ru = B(E)`
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 1.4;
`, zu = B.span`
  color: ${({ $up: e }) => e ? "var(--pcs-colors-positive60)" : "var(--pcs-colors-failure)"};
  font-weight: 600;
`, Bu = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Vu = B.span`
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
`, Hu = B.span`
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
`, Uu = B.div`
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
`, Wu = B.div`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, Gu = B.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 8px;
  padding: 16px;
  overflow: hidden;
  background: transparent;
`, Ku = B.div`
  position: relative;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  background: transparent;
`, qu = B(E)`
  align-items: center;
  gap: 8px;
  align-self: stretch;
`, Ju = B.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`, Yu = B(E)`
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
  line-height: 1.5;
`, Xu = B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`, Zu = B.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
`, Qu = B.button`
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
`, $u = B(E)`
  align-items: center;
  gap: 8px;
  align-self: stretch;
`, ed = B.button`
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
`, td = B.span`
  flex: 1 0 0;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, nd = B.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
`, rd = B.span`
  display: block;
  height: 12px;
  flex: 1 0 0;
  min-width: 1px;
  border-radius: 99px 0 0 99px;
  background: linear-gradient(180deg, #53DEE9 0%, #1FC7D4 100%);
`, id = B.span`
  display: block;
  height: 12px;
  width: 83px;
  background: linear-gradient(180deg, #8051D6 0%, #492286 100%);
`, ad = B(E)`
  align-items: center;
  gap: 16px;
`, od = B.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 1.5;
`, sd = B.span`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ $kind: e, theme: t }) => e === "spot" ? t.colors.primary : t.colors.secondary};
`, cd = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-weight: 600;
  letter-spacing: 0.12px;
  margin-right: -4px;
`, ld = B.span`
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
var ud = B.div`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`, dd = B.div`
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
var fd = B.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  line-height: 1.5;
  white-space: nowrap;
`, pd = B.button`
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
`, md = B.span`
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${({ $expanded: e }) => e ? "rotate(180deg)" : "none"};
`, hd = B(E)`
  align-items: center;
  gap: 8px;
  width: 100%;
`, gd = B.div`
  flex: 1;
  height: 12px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  overflow: hidden;
`, _d = B.div`
  height: 100%;
  border-radius: 99px;
  width: ${({ $pct: e }) => e}%;
  background: ${({ $kind: e, theme: t }) => e === "spot" ? "linear-gradient(180deg, #53DEE9 0%, #1FC7D4 100%)" : t.colors.secondary};
`, vd = B.span`
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
var yd = B.p`
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
`, bd = B.label`
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
`, xd = B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, Sd = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`, Cd = B.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, wd = B(E)`
  flex-direction: column;
  align-self: stretch;
`, Td = B(E)`
  gap: 8px;
  align-items: center;
  padding: 10px 8px;
  border-radius: 16px;
`, Ed = B.span`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
`, Dd = B.span`
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
`, Od = B.span`
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
`, kd = B(E)`
  flex: 1 0 0;
  min-width: 0;
  flex-direction: column;
`, Ad = B(E)`
  gap: 4px;
  align-items: baseline;
`, jd = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`, Md = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`, Nd = B.div`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`, Pd = B(E)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`, Fd = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`, Id = B.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`, Ld = B.span`
  color: ${({ $side: e }) => e === "long" ? "var(--pcs-colors-positive60)" : "var(--pcs-colors-failure)"};
`, Rd = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, zd = B.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Bd = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`, Vd = B(E)`
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
`, Hd = B.div`
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
`, Ud = B(E)`
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  align-self: stretch;
`, Wd = B.div`
  height: 1px;
  background: ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, Gd = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`, Kd = B.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, qd = B.span`
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  font-variant-numeric: tabular-nums;
`, Jd = B(E)`
  flex-direction: column;
  align-self: stretch;
  gap: 12px;
  padding: 0 16px 16px;
  ${bd} {
    margin-top: 4px;
  }
`, Yd = B(E)`
  align-self: stretch;
  align-items: center;
  gap: 8px;
`, Xd = B.button`
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
`, Zd = B.button`
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
function Qd({ value: e, lg: t }) {
	let n = e >= 0;
	return /* @__PURE__ */ W(Vu, {
		$up: n,
		$size: t ? "lg" : "sm",
		children: [U(n ? cu : lu, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(e).toFixed(2), "%"] })]
	});
}
function $d({ value: e, onChange: t, options: n, muted: r }) {
	return /* @__PURE__ */ U(Mu, {
		role: "tablist",
		$muted: r,
		children: n.map((n) => /* @__PURE__ */ U(Nu, {
			type: "button",
			role: "tab",
			"aria-selected": e === n.value,
			$active: e === n.value,
			onClick: () => t(n.value),
			children: n.label
		}, n.value))
	});
}
function ef({ symbol: e, color: t }) {
	return /* @__PURE__ */ U(Dd, {
		$color: t,
		children: e.slice(0, 1)
	});
}
function tf({ p: e, renderTokenIcon: t }) {
	let n = e.pnlPct >= 0;
	return /* @__PURE__ */ W(Td, { children: [
		/* @__PURE__ */ U(Ed, { children: t ? t({
			symbol: e.symbol,
			color: e.color
		}) : /* @__PURE__ */ U(ef, {
			symbol: e.symbol,
			color: e.color
		}) }),
		/* @__PURE__ */ W(kd, { children: [/* @__PURE__ */ U(jd, { children: e.symbol }), /* @__PURE__ */ W(Id, { children: [
			/* @__PURE__ */ U(Ld, {
				$side: e.side.toLowerCase(),
				children: e.side
			}),
			/* @__PURE__ */ U(Rd, { children: "•" }),
			/* @__PURE__ */ U(zd, { children: e.leverage })
		] })] }),
		/* @__PURE__ */ W(Pd, { children: [/* @__PURE__ */ W(Bd, { children: [e.pnlUsd >= 0 ? "+" : "-", iu(Math.abs(e.pnlUsd))] }), /* @__PURE__ */ W(Vu, {
			$up: n,
			$size: "md",
			children: [U(n ? cu : lu, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(e.pnlPct).toFixed(1), "%"] })]
		})] })
	] });
}
function nf({ tk: e, renderTokenIcon: t, showPnl: n = !0 }) {
	let r = e.pnl >= 0;
	return /* @__PURE__ */ W(Td, { children: [
		/* @__PURE__ */ U(Ed, { children: t ? t({
			symbol: e.symbol,
			color: e.color,
			network: e.network
		}) : /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ U(ef, {
			symbol: e.symbol,
			color: e.color
		}), /* @__PURE__ */ U(Od, { children: /* @__PURE__ */ U(fu, { size: 11 }) })] }) }),
		/* @__PURE__ */ W(kd, { children: [/* @__PURE__ */ W(Ad, { children: [/* @__PURE__ */ U(jd, { children: e.symbol }), /* @__PURE__ */ U(Md, { children: e.name })] }), /* @__PURE__ */ U(Nd, { children: e.amount })] }),
		/* @__PURE__ */ W(Pd, { children: [/* @__PURE__ */ U(Fd, { children: au(e.value) }), n && /* @__PURE__ */ W(Vu, {
			$up: r,
			$size: "md",
			children: [U(r ? cu : lu, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(e.pnl).toFixed(1), "%"] })]
		})] })
	] });
}
var rf = (e) => [
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
], af = (e) => [{
	key: "deposit",
	label: "Deposit",
	primary: !0,
	onClick: () => e?.("deposit")
}, {
	key: "withdraw",
	label: "Withdraw",
	onClick: () => e?.("withdraw")
}];
function of({ actions: e }) {
	return /* @__PURE__ */ U(Yd, { children: e.map((e) => /* @__PURE__ */ U(Xd, {
		type: "button",
		$primary: e.primary,
		disabled: e.disabled,
		onClick: e.onClick,
		children: e.label
	}, e.key)) });
}
function sf({ bucket: e, timeframe: t, onOpen: n, showPnl: r }) {
	let i = e.state ?? "data", a = e.pnl?.[t] ?? 0;
	if (i === "loading") return /* @__PURE__ */ U(Ku, { children: /* @__PURE__ */ W(qu, { children: [
		/* @__PURE__ */ U(Ju, {
			"aria-hidden": !0,
			children: e.key === "spot" ? /* @__PURE__ */ U(mu, {}) : /* @__PURE__ */ U(hu, {})
		}),
		/* @__PURE__ */ W(Yu, { children: [/* @__PURE__ */ U(ud, { children: e.label }), /* @__PURE__ */ U(dd, { children: e.sublabel })] }),
		/* @__PURE__ */ W(Xu, { children: [/* @__PURE__ */ U(Zu, { children: /* @__PURE__ */ U(_u, {
			$w: "72px",
			$h: "14px"
		}) }), /* @__PURE__ */ U(Qu, {
			type: "button",
			disabled: !0,
			"aria-label": `Loading ${e.label}`,
			children: /* @__PURE__ */ U(md, { children: /* @__PURE__ */ U(uu, {}) })
		})] })
	] }) });
	let o = i === "data" ? e.amount ?? 0 : 0;
	return /* @__PURE__ */ U(Ku, { children: /* @__PURE__ */ W(qu, { children: [
		/* @__PURE__ */ U(Ju, {
			"aria-hidden": !0,
			children: e.key === "spot" ? /* @__PURE__ */ U(mu, {}) : /* @__PURE__ */ U(hu, {})
		}),
		/* @__PURE__ */ W(Yu, { children: [/* @__PURE__ */ U(ud, { children: e.label }), /* @__PURE__ */ U(dd, { children: e.sublabel })] }),
		/* @__PURE__ */ W(Xu, { children: [/* @__PURE__ */ W(Zu, { children: [/* @__PURE__ */ U(fd, { children: iu(o) }), i === "data" && r && e.pnl && /* @__PURE__ */ W(Hu, {
			$up: a >= 0,
			children: [U(a >= 0 ? cu : lu, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(a).toFixed(2), "%"] })]
		})] }), /* @__PURE__ */ U(Qu, {
			type: "button",
			"aria-label": `Open ${e.label}`,
			onClick: n,
			children: /* @__PURE__ */ U(md, { children: /* @__PURE__ */ U(uu, {}) })
		})] })
	] }) });
}
function cf({ bucket: e, pct: t, timeframe: n, onTfChange: r, tfOptions: i, onBack: a, hideSmall: o, setHideSmall: s, hideSmallThreshold: c, onSpotAction: u, onPerpAction: d, onBridge: f, showPnl: p, showTimeframe: m, showBridge: h, labels: g, renderTokenIcon: v }) {
	let [b, x] = L(null), S = e.state ?? "data", w = e.pnl?.[n] ?? 0, T = S === "data" ? e.amount ?? 0 : 0, D = w / 100 * T, O = g.pnlSuffix[n], k = e.tokens && o ? e.tokens.filter((e) => e.value >= c) : e.tokens, A = e.balanceTokens && o ? e.balanceTokens.filter((e) => e.value >= c) : e.balanceTokens, j = e.positions && o ? e.positions.filter((e) => Math.abs(e.pnlUsd) >= c) : e.positions, M = e.key === "spot", N = F(() => e.actions ? e.actions : M ? rf(u) : af(d), [
		e.actions,
		M,
		u,
		d
	]), P = e.perpStats ?? {
		balance: 0,
		balancePnlPct: 0,
		unrealizedPnl: 0,
		unrealizedPnlPct: 0
	}, I = S === "loading", R = S === "empty";
	return /* @__PURE__ */ W(H, { children: [
		/* @__PURE__ */ W($u, { children: [
			/* @__PURE__ */ U(ed, {
				type: "button",
				onClick: a,
				"aria-label": "Back",
				children: /* @__PURE__ */ U(_, {
					width: 20,
					height: 20
				})
			}),
			/* @__PURE__ */ U(td, { children: e.label }),
			m && /* @__PURE__ */ U($d, {
				value: n,
				onChange: r,
				options: i,
				muted: I || R
			})
		] }),
		/* @__PURE__ */ W(Vd, { children: [
			/* @__PURE__ */ W(ku, { children: [/* @__PURE__ */ U(Pu, { children: I ? /* @__PURE__ */ U(vu, {
				$w: "160px",
				$h: "32px",
				$br: "8px"
			}) : /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(Fu, { children: [/* @__PURE__ */ U(Iu, { children: iu(T).split(".")[0] }), /* @__PURE__ */ W(Lu, { children: [".", iu(T).split(".")[1] ?? "00"] })] }), p && S === "data" && e.pnl && /* @__PURE__ */ U(Qd, {
				value: w,
				lg: !0
			})] }) }), !I && p && S === "data" && e.pnl && /* @__PURE__ */ U(Ru, { children: M ? /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(zu, {
				$up: w >= 0,
				children: [w >= 0 ? "+" : "-", iu(Math.abs(D)).replace("-", "")]
			}), /* @__PURE__ */ U(Bu, { children: ` ${O}` })] }) : /* @__PURE__ */ U(Bu, { children: e.sublabel }) })] }),
			/* @__PURE__ */ W(hd, { children: [/* @__PURE__ */ U(gd, { children: /* @__PURE__ */ U(_d, {
				$pct: S === "data" ? t : 0,
				$kind: e.key
			}) }), /* @__PURE__ */ W(vd, { children: [(S === "data" ? t : 0).toFixed(0), "%"] })] }),
			e.description && /* @__PURE__ */ U(yd, { children: e.description })
		] }),
		I && /* @__PURE__ */ W(E, {
			flexDirection: "column",
			alignSelf: "stretch",
			gap: "12px",
			children: [
				/* @__PURE__ */ U(vu, {
					$h: "48px",
					$br: "16px"
				}),
				/* @__PURE__ */ U(vu, {
					$h: "48px",
					$br: "16px"
				}),
				/* @__PURE__ */ U(vu, {
					$h: "48px",
					$br: "12px"
				})
			]
		}),
		R && /* @__PURE__ */ U(yu, { children: e.emptyContent ?? g.bucketEmptyMessage({ label: e.label }) }),
		S === "data" && M && /* @__PURE__ */ W(H, { children: [
			/* @__PURE__ */ U(bd, { children: /* @__PURE__ */ W(xd, { children: [
				/* @__PURE__ */ U(Sd, { children: g.hideSmallBalances }),
				/* @__PURE__ */ U(Cd, {
					"aria-hidden": !0,
					children: /* @__PURE__ */ U(du, { size: 16 })
				}),
				/* @__PURE__ */ U(l, {
					scale: "sm",
					checked: o,
					onChange: (e) => s(e.target.checked)
				})
			] }) }),
			/* @__PURE__ */ U(wd, { children: k?.map((e, t) => /* @__PURE__ */ U(nf, {
				tk: e,
				renderTokenIcon: v,
				showPnl: p
			}, e.symbol + t)) }),
			/* @__PURE__ */ U(of, { actions: N })
		] }),
		S === "data" && !M && /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(Hd, { children: [
			/* @__PURE__ */ W(Ud, { children: [/* @__PURE__ */ U(Gd, { children: "Balance" }), /* @__PURE__ */ W(Kd, { children: [
				/* @__PURE__ */ U(qd, { children: iu(P.balance) }),
				p && /* @__PURE__ */ W(Hu, {
					$up: P.balancePnlPct >= 0,
					children: [P.balancePnlPct >= 0 ? /* @__PURE__ */ U(cu, { size: 12 }) : /* @__PURE__ */ U(lu, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(P.balancePnlPct).toFixed(2), "%"] })]
				}),
				/* @__PURE__ */ U(pd, {
					type: "button",
					"aria-label": b === "balance" ? "Collapse Balance" : "Expand Balance",
					"aria-expanded": b === "balance",
					onClick: () => x((e) => e === "balance" ? null : "balance"),
					children: /* @__PURE__ */ U(md, {
						$expanded: b === "balance",
						children: /* @__PURE__ */ U(C, {
							width: 20,
							height: 20
						})
					})
				})
			] })] }),
			b === "balance" && /* @__PURE__ */ W(Jd, { children: [/* @__PURE__ */ U(Wd, {}), /* @__PURE__ */ U(wd, { children: (A || []).map((e, t) => /* @__PURE__ */ U(nf, {
				tk: e,
				renderTokenIcon: v,
				showPnl: p
			}, e.symbol + t)) })] }),
			/* @__PURE__ */ U(Wd, {}),
			/* @__PURE__ */ W(Ud, { children: [/* @__PURE__ */ U(Gd, { children: "Unrealized PnL" }), /* @__PURE__ */ W(Kd, { children: [
				/* @__PURE__ */ U(qd, { children: P.unrealizedPnl.toFixed(2) }),
				p && /* @__PURE__ */ W(Hu, {
					$up: P.unrealizedPnlPct >= 0,
					children: [P.unrealizedPnlPct >= 0 ? /* @__PURE__ */ U(cu, { size: 12 }) : /* @__PURE__ */ U(lu, { size: 12 }), /* @__PURE__ */ W("span", { children: [Math.abs(P.unrealizedPnlPct).toFixed(2), "%"] })]
				}),
				/* @__PURE__ */ U(pd, {
					type: "button",
					"aria-label": b === "pnl" ? "Collapse Unrealized PnL" : "Expand Unrealized PnL",
					"aria-expanded": b === "pnl",
					onClick: () => x((e) => e === "pnl" ? null : "pnl"),
					children: /* @__PURE__ */ U(md, {
						$expanded: b === "pnl",
						children: /* @__PURE__ */ U(C, {
							width: 20,
							height: 20
						})
					})
				})
			] })] }),
			b === "pnl" && /* @__PURE__ */ W(Jd, { children: [/* @__PURE__ */ U(Wd, {}), /* @__PURE__ */ U(wd, { children: (j || []).map((e, t) => /* @__PURE__ */ U(tf, {
				p: e,
				renderTokenIcon: v
			}, e.symbol + t)) })] })
		] }), /* @__PURE__ */ U(of, { actions: N })] }),
		h && /* @__PURE__ */ W(Zd, {
			type: "button",
			onClick: f,
			children: [g.bridgeCrypto, /* @__PURE__ */ U(y, {
				width: 24,
				height: 24
			})]
		})
	] });
}
function lf() {
	return /* @__PURE__ */ W(Su, {
		type: "button",
		"aria-label": "Wallet — all chains",
		children: [/* @__PURE__ */ W(Cu, { children: [/* @__PURE__ */ U(wu, {
			$variant: "light",
			children: /* @__PURE__ */ W(Tu, { children: [
				/* @__PURE__ */ U(Eu, { $color: "#F0B90B" }),
				/* @__PURE__ */ U(Eu, { $color: "#627EEA" }),
				/* @__PURE__ */ U(Eu, { $color: "#46557A" }),
				/* @__PURE__ */ U(Eu, { $color: "#0052FF" })
			] })
		}), /* @__PURE__ */ U(wu, {
			$variant: "dark",
			children: /* @__PURE__ */ U(fu, {})
		})] }), /* @__PURE__ */ U(s, {
			width: 20,
			height: 20
		})]
	});
}
function uf() {
	return /* @__PURE__ */ W(Su, {
		type: "button",
		"aria-label": "Select chain",
		children: [/* @__PURE__ */ U(wu, {
			$variant: "dark",
			children: /* @__PURE__ */ U(fu, {})
		}), /* @__PURE__ */ U(s, {
			width: 20,
			height: 20
		})]
	});
}
function df({ data: e = nu, variant: t = "data", emptyContent: n, initialTab: r = "assets", initialTimeframe: i = "24h", initialExpanded: a = null, tab: o, onTabChange: s, timeframe: c, onTimeframeChange: l, expanded: u, onExpandedChange: d, hideSmall: f, onHideSmallChange: p, hideSmallThreshold: m = 1, walletChip: h, chainChip: g, hideHeader: _ = !1, embedded: v = !1, visibleTabs: b = [
	"assets",
	"tx",
	"gift"
], tabContent: x, heroTitle: S, showTimeframe: C = !0, showPnl: w = !0, showBridge: T = !1, renderTokenIcon: D, labels: O, onBridge: k, onSpotAction: A, onPerpAction: j }) {
	let [M, N] = su(o, s, r), [P, I] = su(c, l, i), [L, R] = su(u, d, a), [z, B] = su(f, p, !1), V = F(() => ({
		...ru,
		...O,
		tabs: {
			...ru.tabs,
			...O?.tabs
		},
		pnlSuffix: {
			...ru.pnlSuffix,
			...O?.pnlSuffix
		},
		bucketEmptyMessage: O?.bucketEmptyMessage ?? ru.bucketEmptyMessage
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
	]), te = G.total * (K / 100), q = V.pnlSuffix[P], ne = ou(G.total), re = [
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
		return /* @__PURE__ */ U(bu, {
			"aria-label": "Wallet",
			$embedded: v,
			children: /* @__PURE__ */ U(cf, {
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
	let J = () => _ ? null : /* @__PURE__ */ W(xu, { children: [h ?? /* @__PURE__ */ U(lf, {}), g ?? /* @__PURE__ */ U(uf, {})] }), Y = () => ie.length === 0 ? null : /* @__PURE__ */ U(Du, {
		role: "tablist",
		children: ie.map((e) => /* @__PURE__ */ U(Ou, {
			type: "button",
			role: "tab",
			"aria-selected": M === e.value,
			$active: M === e.value,
			$muted: t === "loading",
			onClick: () => N(e.value),
			children: e.label
		}, e.value))
	}), ae = (e, n) => /* @__PURE__ */ W(ku, { children: [
		/* @__PURE__ */ W(Au, { children: [/* @__PURE__ */ U(ju, { children: ee }), C && /* @__PURE__ */ U($d, {
			value: P,
			onChange: I,
			options: re,
			muted: n
		})] }),
		/* @__PURE__ */ U(Pu, { children: n ? /* @__PURE__ */ U(vu, {
			$w: "180px",
			$h: "32px",
			$br: "8px"
		}) : /* @__PURE__ */ W(H, { children: [/* @__PURE__ */ W(Fu, { children: [/* @__PURE__ */ U(Iu, { children: e.whole }), /* @__PURE__ */ U(Lu, { children: e.dec })] }), w && t === "data" && /* @__PURE__ */ U(Qd, {
			value: K,
			lg: !0
		})] }) }),
		!n && w && t === "data" && /* @__PURE__ */ W(Ru, { children: [/* @__PURE__ */ W(zu, {
			$up: K >= 0,
			children: [K >= 0 ? "+" : "-", iu(Math.abs(te)).replace("-", "")]
		}), /* @__PURE__ */ U(Bu, { children: ` ${q}` })] })
	] });
	if (t === "loading") {
		let t = ou(0);
		return /* @__PURE__ */ W(bu, {
			"aria-label": "Wallet",
			"aria-busy": "true",
			$embedded: v,
			children: [
				J(),
				Y(),
				ae(t, !0),
				/* @__PURE__ */ W(Uu, { children: [
					/* @__PURE__ */ W(Gu, { children: [
						/* @__PURE__ */ U(Wu, { children: V.overview }),
						/* @__PURE__ */ U(vu, {
							$h: "12px",
							$br: "999px"
						}),
						/* @__PURE__ */ W(E, {
							gap: "16px",
							children: [/* @__PURE__ */ U(_u, {
								$w: "60px",
								$h: "14px"
							}), /* @__PURE__ */ U(_u, {
								$w: "60px",
								$h: "14px"
							})]
						})
					] }),
					/* @__PURE__ */ U(Ku, { children: /* @__PURE__ */ W(qu, { children: [
						/* @__PURE__ */ U(Ju, {
							"aria-hidden": !0,
							children: /* @__PURE__ */ U(mu, {})
						}),
						/* @__PURE__ */ W(Yu, { children: [/* @__PURE__ */ U(ud, { children: e.buckets.spot.label }), /* @__PURE__ */ U(dd, { children: e.buckets.spot.sublabel })] }),
						/* @__PURE__ */ U(Xu, { children: /* @__PURE__ */ U(_u, {
							$w: "72px",
							$h: "14px"
						}) })
					] }) }),
					/* @__PURE__ */ U(Ku, { children: /* @__PURE__ */ W(qu, { children: [
						/* @__PURE__ */ U(Ju, {
							"aria-hidden": !0,
							children: /* @__PURE__ */ U(hu, {})
						}),
						/* @__PURE__ */ W(Yu, { children: [/* @__PURE__ */ U(ud, { children: e.buckets.perp.label }), /* @__PURE__ */ U(dd, { children: e.buckets.perp.sublabel })] }),
						/* @__PURE__ */ U(Xu, { children: /* @__PURE__ */ U(_u, {
							$w: "72px",
							$h: "14px"
						}) })
					] }) })
				] }),
				/* @__PURE__ */ W(Yd, { children: [
					/* @__PURE__ */ U(vu, {
						$h: "44px",
						$br: "12px"
					}),
					/* @__PURE__ */ U(vu, {
						$h: "44px",
						$br: "12px"
					}),
					/* @__PURE__ */ U(vu, {
						$h: "44px",
						$br: "12px"
					})
				] }),
				T && /* @__PURE__ */ W(Zd, {
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
		let e = ou(0);
		return /* @__PURE__ */ W(bu, {
			"aria-label": "Wallet",
			$embedded: v,
			children: [
				J(),
				Y(),
				ae(e, !1),
				/* @__PURE__ */ U(yu, { children: n ?? V.emptyMessage }),
				T && /* @__PURE__ */ W(Zd, {
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
	let oe = M === "assets" ? x?.assets : x?.[M === "tx" ? "transactions" : "gift"];
	return /* @__PURE__ */ W(bu, {
		"aria-label": "Wallet",
		$embedded: v,
		children: [
			J(),
			Y(),
			ae(ne, !1),
			oe || /* @__PURE__ */ W(Uu, { children: [
				/* @__PURE__ */ W(Gu, { children: [
					/* @__PURE__ */ U(Wu, { children: V.overview }),
					/* @__PURE__ */ W(nd, { children: [/* @__PURE__ */ U(rd, {}), /* @__PURE__ */ U(id, {})] }),
					/* @__PURE__ */ W(ad, { children: [/* @__PURE__ */ W(od, { children: [
						/* @__PURE__ */ U(sd, { $kind: "spot" }),
						/* @__PURE__ */ U(cd, { children: V.spotLabel }),
						/* @__PURE__ */ W(ld, { children: [G.spotPct.toFixed(0), "%"] })
					] }), /* @__PURE__ */ W(od, { children: [
						/* @__PURE__ */ U(sd, { $kind: "perp" }),
						/* @__PURE__ */ U(cd, { children: V.perpLabel }),
						/* @__PURE__ */ W(ld, { children: [G.perpPct.toFixed(0), "%"] })
					] })] })
				] }),
				/* @__PURE__ */ U(sf, {
					bucket: e.buckets.spot,
					timeframe: P,
					onOpen: () => R("spot"),
					showPnl: w
				}),
				/* @__PURE__ */ U(sf, {
					bucket: e.buckets.perp,
					timeframe: P,
					onOpen: () => R("perp"),
					showPnl: w
				})
			] }),
			T && /* @__PURE__ */ W(Zd, {
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
export { he as AccountPanel, Oe as AssetModeButton, Te as AssetModeModal, ia as BookTradesPanel, $i as ChartPanel, Fo as DepositModal, Lo as EnableTradingModal, be as LeverageModal, Ht as MarketsDropdown, wr as OrderBook, yt as OrderConfirmModal, lo as OrderForm, Ve as PerpsErrorMessage, G as PerpsPanel, Gr as PositionsPanel, Le as RecentTrades, ac as SimpleBetPanel, ul as SimpleChartCard, tu as SimplePositionsCard, Kc as SimpleTickerCard, pn as SymbolHeader, Hi as TpSlModal, q as UnderlineTab, ne as UnderlineTabs, df as WalletPanel, ct as WithdrawModal };

//# sourceMappingURL=widgets.js.map