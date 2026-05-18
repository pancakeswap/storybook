import { C as e, Gt as t, Jt as n, L as r, M as i, O as a, R as o, S as s, Sn as c, T as l, Ui as u, Wi as d, Wn as f, Xi as p, Y as m, dt as h, k as g, ka as _, r as v, t as y, tt as b, w as x, x as S, xi as C, y as w, z as T } from "./chunks/Modal-Vr0QDvCZ.js";
import E, { Children as D, cloneElement as O, useCallback as k, useEffect as A, useId as j, useLayoutEffect as M, useMemo as N, useRef as P, useState as F } from "react";
import I, { css as L, useTheme as R } from "styled-components";
import { Fragment as z, jsx as B, jsxs as V } from "react/jsx-runtime";
import { createPortal as ee } from "react-dom";
//#region src/widgets/primitives.tsx
var H = I(r)`
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
`, ne = I.button`
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
`, U = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(ne, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), re = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(te, {
	$fullWidth: r,
	children: D.map(n, (n, i) => !n || typeof n != "object" ? n : O(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), ie = I(H)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, ae = I(i).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, oe = I(S)`
  justify-content: space-between;
  align-items: center;
`, W = I(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, se = I(i).attrs({ fontSize: "14px" })`
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
`, le = I(S)`
  flex-direction: column;
  gap: 8px;
`, ue = I(se)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, de = (e) => e, fe = ({ walletDisplay: t, state: n, canDeposit: r = !0, canWithdraw: a = !0, onDeposit: o, onWithdraw: s, onEnableTrading: c, t: l = de }) => /* @__PURE__ */ V(ie, { children: [
	/* @__PURE__ */ V(S, {
		style: { gap: 8 },
		children: [/* @__PURE__ */ B(ce, {
			$variant: "primary",
			onClick: o,
			disabled: !r,
			children: l("Deposit")
		}), /* @__PURE__ */ B(ce, {
			$variant: "secondary",
			onClick: s,
			disabled: !a,
			children: l("Withdraw")
		})]
	}),
	n.kind === "needs-deposit" && /* @__PURE__ */ B(e, {
		variant: "warning",
		children: /* @__PURE__ */ V(S, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ B(i, {
				fontSize: "14px",
				bold: !0,
				children: l("Deposit to get started")
			}), /* @__PURE__ */ B(x, {
				fontSize: "12px",
				children: l("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
			})]
		})
	}),
	n.kind === "needs-trading" && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(e, {
		variant: "warning",
		children: /* @__PURE__ */ V(S, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ B(i, {
				fontSize: "14px",
				bold: !0,
				children: l("Enable Trading to view your Aster balance")
			}), /* @__PURE__ */ B(x, {
				fontSize: "12px",
				children: l("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
			})]
		})
	}), /* @__PURE__ */ B(T, {
		onClick: c,
		scale: "sm",
		variant: "primary",
		children: l("Enable Trading")
	})] }),
	n.kind === "ready" && /* @__PURE__ */ V(le, { children: [
		/* @__PURE__ */ B(ae, { children: l("Account Equity") }),
		/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(W, { children: l("Wallet") }), /* @__PURE__ */ B(se, { children: t ?? "—" })] }),
		/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(W, { children: l("Equity") }), /* @__PURE__ */ B(se, { children: n.equity || "—" })] }),
		/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(W, { children: l("Available") }), /* @__PURE__ */ B(se, { children: n.available || "—" })] }),
		/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(W, { children: l("Unrealized PnL") }), /* @__PURE__ */ B(ue, {
			$sign: n.pnlSign,
			children: n.unrealizedPnl || "—"
		})] }),
		/* @__PURE__ */ V(oe, { children: [/* @__PURE__ */ B(W, { children: l("Margin mode") }), /* @__PURE__ */ B(se, { children: n.marginMode ?? l("Cross") })] })
	] })
] });
//#endregion
//#region src/widgets/BunnySlider.tsx
function pe({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = P(null), [u, d] = F(0);
	M(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999;
	return /* @__PURE__ */ V("div", {
		ref: l,
		className: "bs-root",
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ B("span", { className: "bs-track" }),
			/* @__PURE__ */ B("span", { className: "bs-back" }),
			/* @__PURE__ */ B("span", {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ B("span", {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: { left: m }
			}),
			/* @__PURE__ */ B("input", {
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
			s && /* @__PURE__ */ B("span", {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
//#endregion
//#region src/widgets/LeverageModal.tsx
var me = I(S)`
  gap: 10px;
  align-items: stretch;
`, he = I(T).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, ge = I(S)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, _e = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, ve = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: r = 1, maxLeverage: a = 100, availableBalance: o, onConfirm: c, onClose: l, isSubmitting: u = !1, errorSlot: d, t: f = _e }) => {
	let [p, m] = F(n);
	A(() => {
		e && m(n);
	}, [e, n]);
	let h = (e) => Math.max(r, Math.min(a, Math.round(e))), g = o * p;
	return /* @__PURE__ */ B(v, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(y, {
			title: f("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: l,
			children: /* @__PURE__ */ V(S, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(me, { children: [
						/* @__PURE__ */ B(he, {
							onClick: () => m((e) => h(e - 1)),
							disabled: p <= r,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ V(ge, { children: [p, "X"] }),
						/* @__PURE__ */ B(he, {
							onClick: () => m((e) => h(e + 1)),
							disabled: p >= a,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ B(pe, {
						name: "perp-leverage",
						min: r,
						max: a,
						value: p,
						onValueChanged: (e) => m(h(e)),
						width: "100%"
					}),
					/* @__PURE__ */ V(s, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: f("Maximum position at current leverage:")
					}), /* @__PURE__ */ B(i, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(g) && g > 0 ? `${g.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ B(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					d,
					/* @__PURE__ */ B(T, {
						scale: "md",
						disabled: u,
						onClick: () => c(p),
						children: f(u ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, ye = I.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, be = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, xe = I.div`
  overflow-y: auto;
  min-height: 0;
`, Se = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, Ce = I.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, we = I.span`
  text-align: right;
`, Te = I(we)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ee = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, De = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = N(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ V(z, { children: [
		t && /* @__PURE__ */ B(ye, { children: t }),
		/* @__PURE__ */ V(be, { children: [
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
		/* @__PURE__ */ B(xe, { children: a.map((e) => /* @__PURE__ */ V(Se, { children: [
			/* @__PURE__ */ B(Ce, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ B(we, { children: e.size }),
			/* @__PURE__ */ B(Te, { children: Ee(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ B("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ B(H, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, Oe = I(s)`
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
`, ke = I(T).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Ae = (e) => e, je = ({ variant: t, title: n, message: r, details: a, t: o = Ae }) => {
	let [s, c] = F(!1);
	return n ? /* @__PURE__ */ B(e, {
		variant: t,
		children: /* @__PURE__ */ V(S, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ B(x, { children: /* @__PURE__ */ B(i, {
					fontSize: "13px",
					bold: !0,
					children: n
				}) }),
				/* @__PURE__ */ B(x, { children: /* @__PURE__ */ B(i, {
					fontSize: "12px",
					children: r
				}) }),
				a && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(ke, {
					onClick: () => c((e) => !e),
					children: o(s ? "Hide details" : "Show details")
				}), s && /* @__PURE__ */ B(Oe, { children: a })] })
			]
		})
	}) : /* @__PURE__ */ B(e, {
		variant: t,
		children: /* @__PURE__ */ B(x, { children: r })
	});
}, Me = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ne = I(S)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Pe = I(i).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Fe = I(S)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Ie = I.button`
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
`, Le = I(S)`
  flex-direction: column;
`, Re = I.div`
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
`, ze = I(S)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: ${({ theme: e }) => `inset 0px 2px 0px -1px ${e.colors.cardBorder}`};
  transition: border-color 0.12s, box-shadow 0.12s;
  &:focus-within {
    border-color: ${({ theme: e }) => e.colors.secondary};
    box-shadow:
      inset 0px 2px 0px -1px ${({ theme: e }) => e.colors.cardBorder},
      0 0 0 4px ${({ theme: e }) => `color-mix(in srgb, ${e.colors.secondary} 20%, transparent)`};
  }
`, Be = I.input`
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
`, Ve = I(S)`
  gap: 6px;
  margin-top: 4px;
`, He = I.button`
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
`, Ue = I.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, We = I(S)`
  justify-content: space-between;
  align-items: center;
`, Ge = I(S)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, Ke = [
	25,
	50,
	75
], qe = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: r, selectedAssetId: a, onSelectAsset: o, selectedAsset: c, destinationAddress: l, destinationChainName: u = "BSC", feeText: d, amount: f, onAmountChange: p, onPercentClick: m, onBack: h, onWithdraw: g, onClose: _, isSubmitting: x = !1, canSubmit: C = !0, errorSlot: w, t: E = Me, renderTokenIcon: D }) => {
	let O = (e, t = 24) => D ? D(e, t) : /* @__PURE__ */ B(Re, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ B(v, {
		isOpen: e,
		onDismiss: _,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(y, {
			title: t === "select" ? E("Withdraw from Aster") : E("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: _,
			children: /* @__PURE__ */ V(Ne, { children: [
				t === "amount" && /* @__PURE__ */ B(S, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ B(T, {
						scale: "sm",
						variant: "text",
						onClick: h,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ B(b, { width: "18px" }),
						children: E("Back")
					})
				}),
				t === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(s, { children: [/* @__PURE__ */ B(Pe, {
						color: "textSubtle",
						children: E("Select asset")
					}), /* @__PURE__ */ B(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: E("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ B(i, {
						fontSize: "12px",
						children: E("Loading assets...")
					}),
					!n && r.length === 0 && /* @__PURE__ */ V(Ge, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						bold: !0,
						children: E("Nothing to withdraw yet")
					}), /* @__PURE__ */ B(i, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: E("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					r.length > 0 && /* @__PURE__ */ B(Fe, { children: r.map((e) => /* @__PURE__ */ V(Ie, {
						$selected: a === e.id,
						onClick: () => o(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ V(S, {
							alignItems: "center",
							style: { gap: 12 },
							children: [O(e, 32), /* @__PURE__ */ V(Le, { children: [/* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ B(i, {
								fontSize: "11px",
								color: "textSubtle",
								children: E("Withdrawable")
							})] })]
						}), /* @__PURE__ */ V(S, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ B(i, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && c && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(ze, { children: [/* @__PURE__ */ V(S, {
						alignItems: "center",
						style: { gap: 12 },
						children: [O(c, 40), /* @__PURE__ */ V(S, {
							flexDirection: "column",
							children: [/* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								children: c.displayName || c.symbol
							}), /* @__PURE__ */ B(i, {
								fontSize: "12px",
								color: "textSubtle",
								children: E("Withdrawable: %amt% %sym%", {
									amt: c.withdrawableText,
									sym: c.symbol
								})
							})]
						})]
					}), /* @__PURE__ */ V(S, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ B(Be, {
							value: f,
							onChange: (e) => p(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), m && /* @__PURE__ */ V(Ve, { children: [Ke.map((e) => /* @__PURE__ */ V(He, {
							onClick: () => m(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ B(He, {
							onClick: () => m(100),
							children: E("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ V(Ue, { children: [
						/* @__PURE__ */ V(We, { children: [/* @__PURE__ */ B(Pe, {
							color: "textSubtle",
							children: E("Destination")
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ V(We, { children: [/* @__PURE__ */ B(Pe, {
							color: "textSubtle",
							children: E("Network")
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							children: u
						})] }),
						/* @__PURE__ */ V(We, { children: [/* @__PURE__ */ B(Pe, {
							color: "textSubtle",
							children: E("Token")
						}), /* @__PURE__ */ V(S, {
							alignItems: "center",
							style: { gap: 6 },
							children: [O(c, 16), /* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ V(We, { children: [/* @__PURE__ */ B(Pe, {
							color: "textSubtle",
							children: E("Fee")
						}), /* @__PURE__ */ V(i, {
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
					/* @__PURE__ */ B(T, {
						onClick: g,
						disabled: !C || !f || x,
						isLoading: x,
						scale: "md",
						children: E(x ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ B(i, {
						fontSize: "11px",
						color: "textSubtle",
						children: E("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, G = I(S)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, K = I(i).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, q = I(i).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Je = I(S)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, Ye = I.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, Xe = I(q)`
  color: ${({ theme: e }) => e.colors.failure};
`, Ze = I(T)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, Qe = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, $e = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", et = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, tt = ({ isOpen: e, details: t, onConfirm: n, onClose: r, onSkipFutureChange: a, t: o = Qe }) => {
	let [c, l] = F(!1);
	return /* @__PURE__ */ B(v, {
		isOpen: e,
		onDismiss: r,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(y, {
			title: o("Confirm Order"),
			onDismiss: r,
			children: /* @__PURE__ */ V(S, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Symbol") }), /* @__PURE__ */ B(q, { children: t.symbol })] }),
					/* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Side / Type") }), /* @__PURE__ */ V(q, { children: [
						/* @__PURE__ */ B(Ye, {
							$side: t.side,
							children: t.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						et(t.type, o)
					] })] }),
					/* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Size") }), /* @__PURE__ */ V(q, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Price") }), /* @__PURE__ */ V(q, { children: [
						$e(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Trigger Price") }), /* @__PURE__ */ V(q, { children: [
						$e(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Leverage") }), /* @__PURE__ */ V(q, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Cost") }), /* @__PURE__ */ B(q, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Est. Liq. Price") }), /* @__PURE__ */ B(Xe, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ V(G, { children: [/* @__PURE__ */ B(K, { children: o("Reduce Only") }), /* @__PURE__ */ B(q, { children: o("Yes") })] }),
					/* @__PURE__ */ V(Je, { children: [/* @__PURE__ */ B(g, {
						scale: "sm",
						checked: c,
						onChange: (e) => l(e.target.checked)
					}), /* @__PURE__ */ B(i, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ B(s, {
						mt: "8px",
						children: /* @__PURE__ */ B(Ze, {
							$side: t.side,
							onClick: () => {
								c && a?.(!0), n(), r();
							},
							scale: "md",
							children: t.side === "BUY" ? o("Confirm Buy / Long") : o("Confirm Sell / Short")
						})
					})
				]
			})
		})
	});
}, nt = I.div`
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
`, rt = I(S)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, it = I.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, at = I.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, ot = I.input`
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
`, st = I.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, ct = I.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, lt = I.button`
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
`, ut = I.button`
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
`, dt = I(S)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, ft = I.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, pt = I.span`
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
`, mt = I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, ht = I(i)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, gt = I(S)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, _t = ({ filled: e }) => /* @__PURE__ */ B("svg", {
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
}), vt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, yt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, bt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, xt = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), St = (e) => xt(e).slice(0, 1) || e.slice(0, 1), Ct = (e) => e, wt = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: r, logoForSymbol: a, isLoading: o = !1, t: s = Ct }) => {
	let [c, l] = F("all"), [u, d] = F(""), f = N(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ V(nt, { children: [
		/* @__PURE__ */ V(rt, { children: [/* @__PURE__ */ B(it, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ B(it, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ V(at, { children: [/* @__PURE__ */ B(C, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ B(ot, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ V(st, { children: [
			/* @__PURE__ */ B("span", {}),
			/* @__PURE__ */ B("span", { children: s("Symbols") }),
			/* @__PURE__ */ B(ht, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ B(ht, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ B(ht, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ B(ct, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ B(gt, { children: /* @__PURE__ */ B(i, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let i = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(xt(e.symbol));
				return /* @__PURE__ */ V(lt, {
					onClick: () => r(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ B(ut, {
							$filled: i,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(i ? "Unfavorite" : "Favorite"),
							"aria-pressed": i,
							children: /* @__PURE__ */ B(_t, { filled: i })
						}),
						/* @__PURE__ */ V(dt, { children: [
							/* @__PURE__ */ B(pt, { children: c ? /* @__PURE__ */ B(mt, {
								src: c,
								alt: xt(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = St(e.symbol));
								}
							}) : St(e.symbol) }),
							/* @__PURE__ */ B("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ V(ft, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ B(ht, { children: vt(e.lastPrice) }),
						/* @__PURE__ */ B(ht, {
							$tone: o >= 0 ? "up" : "down",
							children: yt(e.priceChangePercent)
						}),
						/* @__PURE__ */ B(ht, { children: bt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, Tt = I(S)`
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
`, Et = I(S)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, Dt = I.button`
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
`, Ot = I.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, kt = I.button`
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
`, At = I.span`
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
`, jt = I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Mt = I(i)`
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
var Nt = I.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Pt = I(S)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Ft = I(S)`
  flex-direction: column;
  flex-shrink: 0;
`, It = I(i)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, Lt = I(i)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Rt = I(S)`
  align-items: baseline;
  white-space: nowrap;
`, zt = I.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Bt = I.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, Vt = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Ht = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Ut = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, Wt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, Gt = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", Kt = () => /* @__PURE__ */ B("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), qt = (e) => e, Jt = ({ symbol: e, pairLabel: n, logoUrl: r, leverage: i, lastPrice: a, markPrice: o, indexPrice: s, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, t: h = qt }) => {
	let g = R(), [_, v] = F(!1), [y, b] = F(null), x = P(null), S = P(null);
	M(() => {
		if (!_ || !x.current) return;
		let e = () => {
			let e = x.current.getBoundingClientRect();
			b({
				top: e.bottom + 8,
				left: e.left
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [_]), A(() => {
		if (!_) return;
		let e = (e) => {
			let t = e.target;
			x.current?.contains(t) || S.current?.contains(t) || v(!1);
		}, t = (e) => {
			e.key === "Escape" && v(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [_]);
	let C = k(() => v(!1), []), w = Number(c) < 0, T = Number(u) < 0;
	return /* @__PURE__ */ V(Tt, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ V(Et, { children: [p && /* @__PURE__ */ B(kt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": h(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ B(Kt, {})
			}), /* @__PURE__ */ V(Dt, {
				ref: x,
				"aria-haspopup": "listbox",
				"aria-expanded": _,
				disabled: !m,
				onClick: () => m && v((e) => !e),
				children: [
					/* @__PURE__ */ B(At, {
						$bg: r ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: r ? /* @__PURE__ */ B(jt, {
							src: r,
							alt: n
						}) : Gt(n)
					}),
					/* @__PURE__ */ B(Mt, { children: n }),
					/* @__PURE__ */ B(t, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			_ && y && typeof document < "u" && m ? ee(/* @__PURE__ */ B(Ot, {
				ref: S,
				style: {
					top: y.top,
					left: y.left
				},
				children: m(C)
			}), document.body) : null,
			/* @__PURE__ */ B(Nt, {
				"aria-label": `Last price: ${a ?? ""}`,
				children: a ?? "—"
			}),
			/* @__PURE__ */ V(Pt, {
				role: "list",
				children: [
					/* @__PURE__ */ V(Ft, {
						role: "listitem",
						children: [/* @__PURE__ */ B(It, {
							$dashed: !0,
							children: h("Mark")
						}), /* @__PURE__ */ B(Lt, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ V(Ft, {
						role: "listitem",
						children: [/* @__PURE__ */ B(It, {
							$dashed: !0,
							children: h("Index")
						}), /* @__PURE__ */ B(Lt, { children: s ?? "—" })]
					}),
					/* @__PURE__ */ V(Ft, {
						role: "listitem",
						children: [/* @__PURE__ */ B(It, {
							$dashed: !0,
							children: h("Funding / Countdown")
						}), /* @__PURE__ */ V(Rt, { children: [
							/* @__PURE__ */ B(zt, {
								$negative: w,
								children: Vt(c)
							}),
							/* @__PURE__ */ B(Bt, { children: "/" }),
							/* @__PURE__ */ B(Lt, {
								as: "span",
								children: Ut(l)
							})
						] })]
					}),
					/* @__PURE__ */ V(Ft, {
						role: "listitem",
						children: [/* @__PURE__ */ B(It, { children: h("24h Change") }), /* @__PURE__ */ B(Lt, {
							style: { color: u ? T ? g.colors.failure : g.colors.success : void 0 },
							children: Ht(u)
						})]
					}),
					/* @__PURE__ */ V(Ft, {
						role: "listitem",
						children: [/* @__PURE__ */ B(It, { children: h("24h Volume (USDT)") }), /* @__PURE__ */ B(Lt, { children: Wt(d) })]
					})
				]
			})
		]
	});
}, Yt = 10, Xt = 27, Zt = I(S)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, Qt = I(S)`
  gap: 5px;
`, $t = I.button`
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
`, en = I.div`
  position: relative;
`, tn = I.button`
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
`, nn = I.div`
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
`, rn = I.button`
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
`, an = I(S)`
  align-items: center;
  gap: 2px;
`, on = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, sn = I.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, cn = I.div`
  height: ${({ $size: e }) => e === "full" ? Yt * 2 * Xt : Yt * Xt}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, ln = I.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${Xt}px;
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
`, un = I.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, dn = I.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, fn = I.div`
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
`, pn = I.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, mn = I.span`
  text-align: center;
`, hn = I.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, gn = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, _n = [
	100,
	50,
	10,
	1
], vn = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, yn = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), bn = (e, t) => {
	let n = [];
	for (let e of _n) t > e * 10 && n.push(String(e));
	let r = yn(e);
	for (let e = 1; e <= r; e++) n.push(vn(e));
	return n;
}, xn = (e, t) => {
	A(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, Sn = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = F(!1), o = P(null);
	return xn(o, () => a(!1)), /* @__PURE__ */ V(en, {
		ref: o,
		children: [/* @__PURE__ */ V(tn, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ B(nn, { children: t.map((e) => /* @__PURE__ */ B(rn, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, Cn = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ V("svg", {
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
}), wn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
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
}), Tn = ({ askColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
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
}), En = (e) => e, Dn = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = En }) => {
	let g = R(), _ = d === "QUOTE" ? r : n, v = N(() => bn(i, o), [i, o]);
	A(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = N(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = gn(e, "ask", i, r, a), s = gn(t, "bid", i, r, a), c = Yt * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
		/* @__PURE__ */ V(Zt, { children: [/* @__PURE__ */ V(Qt, { children: [
			/* @__PURE__ */ B($t, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ B(Cn, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B($t, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ B(wn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B($t, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ B(Tn, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ V(an, { children: [/* @__PURE__ */ B(Sn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ B(Sn, {
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
		/* @__PURE__ */ V(on, { children: [
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
		/* @__PURE__ */ V(sn, { children: [
			s !== "bids" && /* @__PURE__ */ B(cn, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - Yt)).map((e) => /* @__PURE__ */ V(ln, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ B(un, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ B(dn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(dn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ V(fn, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ B(pn, { children: h("Spread") }),
					/* @__PURE__ */ B(mn, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ B(hn, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ B(cn, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? Yt * 2 : Yt).map((e) => /* @__PURE__ */ V(ln, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ B(un, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ B(dn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(dn, {
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
}, On = I(H)`
  flex: 1;
  min-height: 200px;
`, kn = I.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, An = I(S)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, jn = I.div`
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
`, Mn = I.div`
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
`, Nn = I(S)`
  gap: 6px;
  align-items: center;
`, Pn = I.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, Fn = I.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, In = I.div`
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
`, Ln = I.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, Rn = I.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, zn = I.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Bn = I.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, Vn = I.button`
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
`, J = I(i).attrs({
	fontSize: "10px",
	color: "textSubtle"
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Y = I(i).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
`, Hn = (e) => e, Un = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: i, closingSymbol: a, t: o }) => {
	let s = R(), c = t?.(e.symbol), l = e.positionAmt >= 0 ? "BUY" : "SELL", u = Number.isFinite(c) && Number.isFinite(e.entryPrice) ? (c - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), d = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: l,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, f = a === e.symbol;
	return /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ B(Y, {
			bold: !0,
			children: e.symbol
		}),
		/* @__PURE__ */ B(Y, {
			style: { color: l === "BUY" ? s.colors.success : s.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ B(Y, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ B(Y, { children: c !== void 0 && Number.isFinite(c) ? c.toFixed(2) : "—" }),
		/* @__PURE__ */ V(Y, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ B(Y, { children: d ? d.toFixed(2) : "—" }),
		/* @__PURE__ */ B(Y, {
			style: { color: u >= 0 ? s.colors.success : s.colors.failure },
			children: Number.isFinite(u) ? u.toFixed(4) : "—"
		}),
		/* @__PURE__ */ V(Pn, { children: [/* @__PURE__ */ V(Fn, {
			$kind: "tp",
			children: [
				o("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ V(Fn, {
			$kind: "sl",
			children: [
				o("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ V(Nn, { children: [/* @__PURE__ */ B(T, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => i(e, c ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: o("TP/SL")
		}), /* @__PURE__ */ B(T, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: f || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: f,
			children: o("Close")
		})] })
	] });
}, Wn = ({ tab: e, onTabChange: t, positions: n, openOrders: r, tradeHistory: a = [], transactionHistory: o = [], onShareTrade: s, useMarkPriceForSymbol: c, computeLiqPrice: l, onClosePosition: u, onEditTpSl: d, onCancelOrder: f, closingSymbol: p = null, cancellingOrderId: m = null, t: h = Hn }) => {
	let g = R(), _ = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ V(On, { children: [/* @__PURE__ */ V(re, {
		activeIndex: _.indexOf(e),
		onItemClick: (e) => t(_[e]),
		children: [
			/* @__PURE__ */ V(U, { children: [
				h("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				h("Open Orders"),
				" (",
				r.length,
				")"
			] }),
			/* @__PURE__ */ B(U, { children: h("Order History") }),
			/* @__PURE__ */ V(U, { children: [
				h("Trade History"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				h("Transaction History"),
				" (",
				o.length,
				")"
			] })
		]
	}), /* @__PURE__ */ V(kn, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ B(An, { children: /* @__PURE__ */ B(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No open positions")
		}) }) : /* @__PURE__ */ V(jn, { children: [
			/* @__PURE__ */ B(J, { children: h("Symbol") }),
			/* @__PURE__ */ B(J, { children: h("Size") }),
			/* @__PURE__ */ B(J, { children: h("Entry") }),
			/* @__PURE__ */ B(J, { children: h("Mark") }),
			/* @__PURE__ */ B(J, { children: h("Lev") }),
			/* @__PURE__ */ B(J, { children: h("Liq") }),
			/* @__PURE__ */ B(J, { children: h("uPnL") }),
			/* @__PURE__ */ B(J, { children: h("TP/SL") }),
			/* @__PURE__ */ B(J, {}),
			n.map((e) => /* @__PURE__ */ B(Mn, { children: /* @__PURE__ */ B(Un, {
				p: e,
				useMarkPriceForSymbol: c,
				computeLiqPrice: l,
				onClose: u,
				onEditTpSl: d,
				closingSymbol: p,
				t: h
			}) }, e.id))
		] })),
		e === "orders" && (r.length === 0 ? /* @__PURE__ */ B(An, { children: /* @__PURE__ */ B(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No open orders")
		}) }) : /* @__PURE__ */ V(In, { children: [
			/* @__PURE__ */ B(J, { children: h("Symbol") }),
			/* @__PURE__ */ B(J, { children: h("Side") }),
			/* @__PURE__ */ B(J, { children: h("Type") }),
			/* @__PURE__ */ B(J, { children: h("Price") }),
			/* @__PURE__ */ B(J, { children: h("Size") }),
			/* @__PURE__ */ B(J, { children: h("Filled") }),
			/* @__PURE__ */ B(J, { children: h("Status") }),
			/* @__PURE__ */ B(J, {}),
			r.map((e) => {
				let t = m === e.id;
				return /* @__PURE__ */ V(Mn, { children: [
					/* @__PURE__ */ B(Y, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ B(Y, {
						style: { color: e.side === "BUY" ? g.colors.success : g.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ B(Y, { children: e.type }),
					/* @__PURE__ */ B(Y, { children: e.price }),
					/* @__PURE__ */ B(Y, { children: e.origQty }),
					/* @__PURE__ */ B(Y, { children: e.executedQty }),
					/* @__PURE__ */ B(Y, { children: e.status }),
					/* @__PURE__ */ B(Nn, { children: /* @__PURE__ */ B(T, {
						scale: "xs",
						variant: "secondary",
						disabled: t,
						isLoading: t,
						onClick: () => f(e),
						children: h("Cancel")
					}) })
				] }, e.id);
			})
		] })),
		e === "history" && /* @__PURE__ */ B(An, { children: /* @__PURE__ */ B(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("Order history coming soon")
		}) }),
		e === "trades" && (a.length === 0 ? /* @__PURE__ */ B(An, { children: /* @__PURE__ */ B(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No trades yet")
		}) }) : /* @__PURE__ */ V(Ln, { children: [
			/* @__PURE__ */ B(J, { children: h("Time") }),
			/* @__PURE__ */ B(J, { children: h("Symbol") }),
			/* @__PURE__ */ B(J, { children: h("Price") }),
			/* @__PURE__ */ B(J, { children: h("Quantity") }),
			/* @__PURE__ */ B(J, { children: h("Fee") }),
			/* @__PURE__ */ B(J, { children: h("Realized profit") }),
			a.map((e) => {
				let t = e.side === "BUY" ? g.colors.success : g.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ V(Mn, { children: [
					/* @__PURE__ */ B(Y, {
						as: "div",
						children: /* @__PURE__ */ V(zn, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
					}),
					/* @__PURE__ */ B(Y, {
						as: "div",
						children: /* @__PURE__ */ V(Bn, { children: [/* @__PURE__ */ B("span", { children: e.symbol }), /* @__PURE__ */ B("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? h("Buy") : h("Sell")
						})] })
					}),
					/* @__PURE__ */ B(Y, { children: e.price }),
					/* @__PURE__ */ B(Y, { children: e.quantity }),
					/* @__PURE__ */ B(Y, { children: e.fee }),
					/* @__PURE__ */ B(Y, {
						as: "div",
						children: /* @__PURE__ */ V(S, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ B("span", {
								style: { color: n ? g.colors.success : g.colors.failure },
								children: e.realizedProfit
							}), s && /* @__PURE__ */ B(Vn, {
								type: "button",
								onClick: () => s(e),
								"aria-label": h("Share trade"),
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
		e === "transactions" && (o.length === 0 ? /* @__PURE__ */ B(An, { children: /* @__PURE__ */ B(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No transactions yet")
		}) }) : /* @__PURE__ */ V(Rn, { children: [
			/* @__PURE__ */ B(J, { children: h("Time") }),
			/* @__PURE__ */ B(J, { children: h("Type") }),
			/* @__PURE__ */ B(J, { children: h("Amount") }),
			/* @__PURE__ */ B(J, { children: h("Symbol") }),
			o.map((e) => /* @__PURE__ */ V(Mn, { children: [
				/* @__PURE__ */ B(Y, {
					as: "div",
					children: /* @__PURE__ */ V(zn, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
				}),
				/* @__PURE__ */ B(Y, { children: e.type }),
				/* @__PURE__ */ B(Y, { children: e.amount }),
				/* @__PURE__ */ B(Y, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, Gn = I(S)`
  flex-direction: column;
  gap: 8px;
`, Kn = I(S)`
  gap: 8px;
`, qn = I.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, Jn = I(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Yn = I(a)`
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
`, Xn = I(S)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, Zn = (e) => e, Qn = ({ isOpen: e, symbol: t, positionSide: n, qty: r, entryPrice: a, markPrice: o, onConfirm: c, onClose: l, t: u = Zn }) => {
	let d = R(), f = n === "LONG" ? 1 : -1, [p, m] = F(""), [h, g] = F(""), [_, b] = F(""), [x, C] = F(""), [w, E] = F(!1);
	A(() => {
		e || (m(""), g(""), b(""), C(""));
	}, [e]);
	let D = (e) => r > 0 ? a + f * e / r : NaN, O = (e) => r > 0 ? f * (e - a) * r : NaN, k = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", j = (e) => {
		m(e);
		let t = Number(e);
		g(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, M = (e) => {
		g(e);
		let t = Number(e);
		m(Number.isFinite(t) && e !== "" ? k(D(t), 2) : "");
	}, P = (e) => {
		b(e);
		let t = Number(e);
		C(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, I = (e) => {
		C(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? b(k(D(t), 2)) : C("");
	}, L = N(() => {
		let e = Number(p), t = Number(_), r = p !== "" && Number.isFinite(e), i = _ !== "" && Number.isFinite(t);
		if (n === "LONG") {
			if (r && e <= a) return u("Take Profit price must be above entry for a LONG position.");
			if (i && t >= a) return u("Stop Loss price must be below entry for a LONG position.");
		} else {
			if (r && e >= a) return u("Take Profit price must be below entry for a SHORT position.");
			if (i && t <= a) return u("Stop Loss price must be above entry for a SHORT position.");
		}
	}, [
		p,
		_,
		n,
		a,
		u
	]), z = !w && (p !== "" || _ !== "") && !L;
	return /* @__PURE__ */ B(v, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(y, {
			title: u("Set TP / SL"),
			onDismiss: l,
			children: /* @__PURE__ */ V(S, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(Xn, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Symbol")
					}), /* @__PURE__ */ V(i, {
						fontSize: "14px",
						bold: !0,
						style: { color: n === "LONG" ? d.colors.success : d.colors.failure },
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ V(Xn, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Entry")
					}), /* @__PURE__ */ B(i, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(a) ? a.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ V(Xn, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Mark")
					}), /* @__PURE__ */ B(i, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? o.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ B(qn, {}),
					/* @__PURE__ */ V(Gn, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.success,
						children: u("Take Profit")
					}), /* @__PURE__ */ V(Kn, { children: [/* @__PURE__ */ V(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(Jn, { children: u("Trigger Price") }), /* @__PURE__ */ B(Yn, {
							value: p,
							onChange: (e) => j(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(Jn, { children: u("PnL (USDT)") }), /* @__PURE__ */ B(Yn, {
							value: h,
							onChange: (e) => M(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ V(Gn, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.failure,
						children: u("Stop Loss")
					}), /* @__PURE__ */ V(Kn, { children: [/* @__PURE__ */ V(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(Jn, { children: u("Trigger Price") }), /* @__PURE__ */ B(Yn, {
							value: _,
							onChange: (e) => P(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B(Jn, { children: u("PnL (USDT)") }), /* @__PURE__ */ B(Yn, {
							value: x,
							onChange: (e) => I(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					L && /* @__PURE__ */ B(i, {
						fontSize: "14px",
						color: "failure",
						children: L
					}),
					/* @__PURE__ */ B(T, {
						onClick: async () => {
							if (z) {
								E(!0);
								try {
									await c({
										symbol: t,
										closeSide: n === "LONG" ? "SELL" : "BUY",
										tpPrice: p,
										slPrice: _,
										qty: String(r),
										closePosition: !0
									}), l();
								} finally {
									E(!1);
								}
							}
						},
						disabled: !z,
						isLoading: w,
						scale: "md",
						children: u("Confirm")
					})
				]
			})
		})
	});
}, $n = I(H)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, er = (e) => typeof e == "number" ? `${e}px` : e, tr = ({ children: e, minHeight: t = "420px" }) => /* @__PURE__ */ B($n, {
	$minHeight: er(t),
	children: e
}), nr = I(H)`
  height: 100%;
`, rr = I.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, ir = I.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, ar = (e) => e, or = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = ar }) => /* @__PURE__ */ V(nr, { children: [/* @__PURE__ */ V(re, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ B(U, { children: i("Order Book") }), /* @__PURE__ */ B(U, { children: i("Trades") })]
}), /* @__PURE__ */ V(rr, { children: [/* @__PURE__ */ B(ir, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ B(ir, {
	$hidden: e !== "trades",
	children: r
})] })] }), sr = I(H)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, cr = I(S)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, lr = I.button`
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
`, ur = I(S)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, dr = I.button`
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
`, fr = I.button`
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
`, pr = I(S)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, mr = I(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, hr = I(S)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, gr = I.div`
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
`, _r = I(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, vr = I.input`
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
`, yr = I(T).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, br = I.div`
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
`, xr = I.input`
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
`, Sr = I.button`
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
`, Cr = I.div`
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
`, wr = I.button`
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
`, Tr = I.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, Er = I(a)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, Dr = I.div`
  padding: 4px 0;
`, Or = I(S)`
  gap: 8px;
`, kr = I.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, Ar = I.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, jr = ({ value: e, onChange: t }) => /* @__PURE__ */ V(kr, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ B(Ar, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ B(Ar, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), Mr = I(T)`
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
`, Nr = I.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Pr = I(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Fr = I(i).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, Ir = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Lr = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: r, typeKey: a, onTypeKeyChange: c, availableBalanceText: l, preview: u, feeText: d, sizePercent: f, onSizePercentChange: p, cta: h, canSubmit: _, isSubmitting: v = !1, marginSubmitting: y = !1, authReady: b = !0, hasAddress: x = !0, errorSlot: C, onSubmit: T, onLeverageClick: E, onMarginModeToggle: D, onDepositClick: O, t: k = Ir }) => {
	let j = n.sizeUnit === "QUOTE" ? t : e, M = (e) => r({
		...n,
		side: e
	}), N = () => r({
		...n,
		sizeUnit: n.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), I = () => r({
		...n,
		tpSlEnabled: !n.tpSlEnabled
	}), L = a === "stop-limit" || a === "stop-market", R = a === "limit" || a === "stop-limit", H = L, te = P(null), ne = P(null), [U, re] = F(!1), [ie, ae] = F({
		top: 0,
		left: 0
	});
	A(() => {
		if (!U || !te.current || !ne.current) return;
		let e = te.current.getBoundingClientRect(), t = ne.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		ae({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [U]), A(() => {
		if (!U) return;
		let e = (e) => {
			let t = e.target;
			te.current && !te.current.contains(t) && ne.current && !ne.current.contains(t) && re(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [U]);
	let oe = L, W = a === "stop-market" ? `${k("Stop Market")} ▾` : `${k("Stop Limit")} ▾`, se = () => {
		re((e) => !e);
	}, ce = (e) => {
		c(e), re(!1);
	};
	return /* @__PURE__ */ V(sr, { children: [
		/* @__PURE__ */ V(cr, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ B(lr, {
				$active: a === e,
				onClick: () => c(e),
				children: k(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ B(lr, {
				ref: te,
				$active: oe,
				onClick: se,
				"aria-haspopup": "menu",
				"aria-expanded": U,
				children: W
			}),
			U && typeof document < "u" && ee(/* @__PURE__ */ V(Cr, {
				ref: ne,
				style: {
					top: ie.top,
					left: ie.left
				},
				role: "menu",
				children: [/* @__PURE__ */ B(wr, {
					$active: a === "stop-limit",
					role: "menuitem",
					onClick: () => ce("stop-limit"),
					children: k("Stop Limit")
				}), /* @__PURE__ */ B(wr, {
					$active: a === "stop-market",
					role: "menuitem",
					onClick: () => ce("stop-market"),
					children: k("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ V(ur, { children: [/* @__PURE__ */ B(dr, {
			$active: n.side === "BUY",
			$side: "BUY",
			onClick: () => M("BUY"),
			children: k("Buy")
		}), /* @__PURE__ */ B(dr, {
			$active: n.side === "SELL",
			$side: "SELL",
			onClick: () => M("SELL"),
			children: k("Sell")
		})] }),
		/* @__PURE__ */ V(S, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(fr, {
				disabled: y,
				onClick: D,
				title: k("Margin mode"),
				children: n.marginMode === "CROSS" ? k("Cross") : k("Isolated")
			}), /* @__PURE__ */ V(fr, {
				onClick: E,
				title: k("Leverage"),
				children: [n.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ V(pr, { children: [/* @__PURE__ */ B(mr, { children: k("Avbl") }), /* @__PURE__ */ V(hr, { children: [/* @__PURE__ */ V(i, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				l,
				" ",
				t
			]
		}), /* @__PURE__ */ B(o, {
			variant: "text",
			scale: "xs",
			onClick: O,
			title: k("Deposit"),
			"aria-label": k("Deposit"),
			style: {
				width: 18,
				height: 18,
				minWidth: 18,
				borderRadius: 999
			},
			children: /* @__PURE__ */ B(m, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		H && /* @__PURE__ */ V(br, { children: [
			/* @__PURE__ */ B(_r, { children: k("Stop") }),
			/* @__PURE__ */ B(xr, {
				value: n.stopPrice,
				onChange: (e) => r({
					...n,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": k("Stop price")
			}),
			/* @__PURE__ */ V(Sr, {
				type: "button",
				onClick: () => r({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: k("Trigger source"),
				children: [n.stopPriceSource === "MARK" ? k("Mark") : k("Last"), " ▾"]
			})
		] }),
		R && /* @__PURE__ */ V(br, { children: [
			/* @__PURE__ */ B(_r, { children: k("Price") }),
			/* @__PURE__ */ B(xr, {
				value: n.price,
				onChange: (e) => r({
					...n,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": k("Limit price")
			}),
			/* @__PURE__ */ B(yr, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: t
			})
		] }),
		a === "stop-limit" && /* @__PURE__ */ V(br, { children: [
			/* @__PURE__ */ B(_r, { children: k("TIF") }),
			/* @__PURE__ */ B(S, { flex: 1 }),
			/* @__PURE__ */ V(Tr, {
				value: n.timeInForce === "GTX" ? "GTC" : n.timeInForce,
				onChange: (e) => r({
					...n,
					timeInForce: e.target.value
				}),
				"aria-label": k("Time in force"),
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
		/* @__PURE__ */ V(gr, { children: [
			/* @__PURE__ */ B(_r, { children: k("Size") }),
			/* @__PURE__ */ B(vr, {
				value: n.quantity,
				onChange: (e) => r({
					...n,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ V(yr, {
				onClick: N,
				title: k("Toggle unit"),
				children: [j, " ▾"]
			})
		] }),
		/* @__PURE__ */ B(Dr, { children: /* @__PURE__ */ B(w, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: f,
			onValueChanged: p,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ V(S, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(g, {
				scale: "sm",
				checked: n.reduceOnly,
				onChange: (e) => r({
					...n,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ B(i, {
				fontSize: "14px",
				children: k("Reduce Only")
			})]
		}),
		/* @__PURE__ */ V(S, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(g, {
				scale: "sm",
				checked: n.tpSlEnabled,
				onChange: I
			}), /* @__PURE__ */ B(i, {
				fontSize: "14px",
				children: k("Take Profit / Stop Loss")
			})]
		}),
		n.tpSlEnabled && /* @__PURE__ */ V(S, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ V(s, { children: [/* @__PURE__ */ V(S, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(i, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: k("Take Profit")
				}), /* @__PURE__ */ B(jr, {
					value: n.takeProfitSource ?? "LAST",
					onChange: (e) => r({
						...n,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ V(Or, { children: [/* @__PURE__ */ V(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("Trigger Price")
				}), /* @__PURE__ */ B(Er, {
					value: n.takeProfitPrice,
					onChange: (e) => r({
						...n,
						takeProfitPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ V(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("PnL (USDT)")
				}), /* @__PURE__ */ B(Er, {
					value: n.takeProfitPnl ?? "",
					onChange: (e) => r({
						...n,
						takeProfitPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] }), /* @__PURE__ */ V(s, { children: [/* @__PURE__ */ V(S, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(i, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: k("Stop Loss")
				}), /* @__PURE__ */ B(jr, {
					value: n.stopLossSource ?? "LAST",
					onChange: (e) => r({
						...n,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ V(Or, { children: [/* @__PURE__ */ V(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("Trigger Price")
				}), /* @__PURE__ */ B(Er, {
					value: n.stopLossPrice,
					onChange: (e) => r({
						...n,
						stopLossPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ V(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("PnL (USDT)")
				}), /* @__PURE__ */ B(Er, {
					value: n.stopLossPnl ?? "",
					onChange: (e) => r({
						...n,
						stopLossPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] })]
		}),
		C,
		b ? /* @__PURE__ */ B(Mr, {
			onClick: T,
			disabled: !_,
			isLoading: v,
			scale: "md",
			$side: n.side,
			children: h
		}) : /* @__PURE__ */ B(Mr, {
			$side: n.side,
			onClick: T,
			scale: "md",
			disabled: !x,
			children: h
		}),
		/* @__PURE__ */ V(Nr, { children: [
			/* @__PURE__ */ B(Pr, { children: k("Cost") }),
			/* @__PURE__ */ B(Fr, { children: u.cost }),
			!L && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(Pr, { children: k("Est. Liq. Price") }), /* @__PURE__ */ B(Fr, { children: u.liq })] }),
			/* @__PURE__ */ B(Pr, { children: k("Fees") }),
			/* @__PURE__ */ B(Fr, { children: d })
		] })
	] });
}, Rr = I(S)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, zr = I.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, Br = I(S)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, Vr = I(i).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Hr = I(S)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, X = I(i).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ur = I(S)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Wr = I.button`
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
`, Gr = I(S)`
  flex-direction: column;
`, Kr = I(S)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, qr = I.input`
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
`, Jr = I(S)`
  gap: 6px;
  margin-top: 4px;
`, Yr = I.button`
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
`, Xr = I.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Z = I(S)`
  justify-content: space-between;
  align-items: center;
`, Zr = I(S)`
  flex-direction: column;
  gap: 8px;
`, Qr = I(S)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, $r = I.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, ei = I(i).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, ti = I.div`
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
`, ni = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, ri = [
	25,
	50,
	75
], ii = ({ isOpen: e, onClose: t, step: n, evmAddress: r, solanaAddress: a, isLoadingAssets: o = !1, assets: s, selectedAssetId: c, onSelectAsset: l, otherSupportedSymbols: u = [], selectedAsset: d, amount: f, onAmountChange: p, sourceAddress: m, errorSlot: h, onPercentClick: g, submitState: _, canContinue: x, onContinue: C, onBack: w, receipt: E, checkingElapsedMs: D = 0, onDepositAgain: O, onRetry: k, t: A = ni, renderTokenIcon: j, renderSpinner: M }) => {
	let N = A(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund your Account"), P = (() => {
		switch (_) {
			case "switching-chain": return A("Switching chain...");
			case "approving": return A("Approve in wallet...");
			case "approve-confirming": return A("Confirming approval...");
			case "depositing": return A("Confirm in wallet...");
			case "deposit-confirming": return A("Confirming deposit...");
			case "done": return A("Done");
			case "failed": return A("Retry");
			default: return A("Continue");
		}
	})(), F = (e, t = 24) => j ? j(e, t) : /* @__PURE__ */ B(ti, {
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
	}), L = _ === "switching-chain" || _ === "approving" || _ === "approve-confirming" || _ === "depositing" || _ === "deposit-confirming";
	return /* @__PURE__ */ B(v, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(y, {
			title: N,
			onDismiss: t,
			children: /* @__PURE__ */ V(Rr, { children: [
				n === "amount" && /* @__PURE__ */ B(S, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ B(T, {
						scale: "sm",
						variant: "text",
						onClick: w,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ B(b, { width: "18px" }),
						children: A("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(zr, { children: [
						r && /* @__PURE__ */ V(Br, { children: [
							/* @__PURE__ */ B("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ B(Vr, { children: r }),
							/* @__PURE__ */ B(i, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						a && /* @__PURE__ */ V(Br, {
							style: { borderTop: r ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ B("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ B(Vr, { children: a }),
								/* @__PURE__ */ B(i, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ V(Hr, { children: [/* @__PURE__ */ V("div", { children: [/* @__PURE__ */ B(X, {
							color: "textSubtle",
							children: A("Balance")
						}), /* @__PURE__ */ B(i, {
							fontSize: "12px",
							color: "textSubtle",
							children: A("In your wallet")
						})] }), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							bold: !0,
							children: s.some((e) => e.hasBalance) ? A("Ready") : "—"
						})] })
					] }),
					o && /* @__PURE__ */ B(i, {
						fontSize: "12px",
						children: A("Loading tokens...")
					}),
					!o && s.length === 0 && /* @__PURE__ */ V(S, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								children: A("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ B(i, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							u.length > 0 && /* @__PURE__ */ B(i, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
							})
						]
					}),
					s.length > 0 && /* @__PURE__ */ B(Ur, { children: s.map((e) => /* @__PURE__ */ B(Wr, {
						$selected: c === e.id,
						onClick: () => l(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ V(S, {
							alignItems: "center",
							style: { gap: 12 },
							children: [F(e, 32), /* @__PURE__ */ V(Gr, { children: [/* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ V(i, {
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
					s.length > 0 && u.length > 0 && /* @__PURE__ */ B(i, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: A("Also supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && d && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(Kr, { children: [/* @__PURE__ */ V(S, {
						alignItems: "center",
						style: { gap: 12 },
						children: [F(d, 40), /* @__PURE__ */ V(S, {
							flexDirection: "column",
							children: [/* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								children: d.displayName || d.symbol
							}), /* @__PURE__ */ B(i, {
								fontSize: "12px",
								color: "textSubtle",
								children: d.balanceText
							})]
						})]
					}), /* @__PURE__ */ V(S, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ B(qr, {
							value: f,
							onChange: (e) => p(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ V(Jr, { children: [ri.map((e) => /* @__PURE__ */ V(Yr, {
							onClick: () => g(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ B(Yr, {
							onClick: () => g(100),
							children: A("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ V(Xr, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(X, {
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							children: m ?? "—"
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(X, {
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(X, {
							color: "textSubtle",
							children: A("Token")
						}), /* @__PURE__ */ V(S, {
							alignItems: "center",
							style: { gap: 6 },
							children: [F(d, 16), /* @__PURE__ */ B(i, {
								fontSize: "14px",
								bold: !0,
								children: d.symbol
							})]
						})] })
					] }),
					h,
					/* @__PURE__ */ B(T, {
						onClick: C,
						disabled: !x || L,
						isLoading: L,
						scale: "md",
						children: P
					})
				] }),
				n === "checking" && E && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(S, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [I(72), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ V(Zr, { children: [
						/* @__PURE__ */ V(Qr, {
							$state: "done",
							children: [/* @__PURE__ */ B($r, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(i, {
								fontSize: "13px",
								children: A("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ V(Qr, {
							$state: "done",
							children: [/* @__PURE__ */ B($r, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(i, {
								fontSize: "13px",
								children: A("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ V(Qr, {
							$state: "active",
							children: [/* @__PURE__ */ B($r, {
								$state: "active",
								children: I(16)
							}), /* @__PURE__ */ B(i, {
								fontSize: "13px",
								children: A("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ V(Xr, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(X, {
							color: "textSubtle",
							children: A("Amount")
						}), /* @__PURE__ */ V(i, {
							fontSize: "14px",
							bold: !0,
							children: [
								E.amount,
								" ",
								E.assetSymbol
							]
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(X, {
							color: "textSubtle",
							children: A("Tx hash")
						}), /* @__PURE__ */ V(i, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								E.hash.slice(0, 10),
								"…",
								E.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(X, {
							color: "textSubtle",
							children: A("Elapsed")
						}), /* @__PURE__ */ V(i, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(D / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ B(T, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: A("Close")
					})
				] }),
				n === "success" && E && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(ei, { children: [
						E.amount,
						" ",
						E.assetSymbol
					] }),
					/* @__PURE__ */ V(Xr, { children: [
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(i, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							bold: !0,
							children: E.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(i, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							bold: !0,
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(i, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Processing time")
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							bold: !0,
							children: A("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ B(Xr, { children: /* @__PURE__ */ V(Z, { children: [/* @__PURE__ */ B(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: A("Tx hash")
					}), /* @__PURE__ */ V(i, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							E.hash.slice(0, 10),
							"…",
							E.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ V(S, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(T, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: A("View Balance")
						}), /* @__PURE__ */ B(T, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: O,
							children: A("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(S, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(i, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ B(i, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("The transaction did not go through. Your funds did not move.")
						})]
					}),
					h,
					/* @__PURE__ */ V(S, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(T, {
							style: { flex: 1 },
							scale: "md",
							onClick: k,
							children: A("Try Again")
						}), /* @__PURE__ */ B(T, {
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
}, ai = (e) => e, oi = ({ isOpen: t, onClose: n, phase: r, eoaAddress: a, agentAddress: o, isProvisioning: c = !1, linkButtonLabel: l, isLinkDisabled: u = !1, isLinkPending: d = !1, onLinkWallet: f, approveButtonLabel: p, isApproveDisabled: m = !1, isApprovePending: h = !1, onApprove: g, errorSlot: _, t: b = ai }) => {
	let C = o ?? b(c ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ B(v, {
		isOpen: t,
		onDismiss: n,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(y, {
			title: b("Enable Perps Trading"),
			onDismiss: n,
			children: /* @__PURE__ */ V(S, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ B(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: b("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ V(s, { children: [/* @__PURE__ */ B(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: b("Your wallet")
					}), /* @__PURE__ */ B(i, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: a ?? "—"
					})] }),
					/* @__PURE__ */ V(s, { children: [/* @__PURE__ */ B(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: b("Agent (trading signer)")
					}), /* @__PURE__ */ B(i, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: C
					})] }),
					_,
					r === "link-wallet" && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(T, {
						onClick: f,
						disabled: u || d,
						isLoading: d,
						scale: "md",
						children: l
					}), /* @__PURE__ */ B(i, {
						fontSize: "11px",
						color: "textSubtle",
						children: b("You'll sign one message in your wallet. No funds move.")
					})] }),
					(r === "authorize-agent" || r === "checking-status") && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(T, {
						onClick: g,
						disabled: m || h || r === "checking-status",
						isLoading: h || r === "checking-status",
						scale: "md",
						children: p
					}), /* @__PURE__ */ B(i, {
						fontSize: "11px",
						color: "textSubtle",
						children: b("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					r === "done" && /* @__PURE__ */ B(e, {
						variant: "success",
						children: /* @__PURE__ */ B(x, { children: b("Trading enabled.") })
					})
				]
			})
		})
	});
}, si = [
	50,
	250,
	500,
	1001
], ci = 1001, li = (e) => e <= 50 ? "safe" : e <= 250 ? "warn" : "danger", ui = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "Caution" : "Danger zone", di = () => /* @__PURE__ */ B("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 4l-7 7h4v9h6v-9h4z" })
}), fi = () => /* @__PURE__ */ B("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 20l7-7h-4V4h-6v9H5z" })
}), pi = () => /* @__PURE__ */ B("svg", {
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
}), mi = () => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), hi = () => /* @__PURE__ */ B("svg", {
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
}), gi = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), _i = I(H)`
  display: flex;
  width: 506px;
  flex-shrink: 0;
  flex-direction: column;
  align-self: stretch;
  background: ${({ theme: e }) => e.colors.card};
  font-variant-numeric: tabular-nums;
  & > div {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
    align-self: stretch;
    background: ${({ theme: e }) => e.colors.card};
  }
`, vi = I.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
`, yi = I.div`
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
`, bi = I.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0 16px 16px 16px;
`, xi = I.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
I(S)`
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
var Si = I.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, Ci = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, wi = I(S)`
  align-items: center;
  justify-content: space-between;
`, Ti = I(i).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, Ei = I.button`
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
`, Di = I.span`
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
`, Oi = I.div`
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
`, ki = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, Ai = I.span`
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
`, ji = I.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, Mi = I.input`
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
`, Ni = I.button`
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
`, Pi = I.span`
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
`, Fi = I.span`
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
`;
I.span`
  font-size: 14px;
  font-weight: 600;
`;
var Ii = I(S)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, Li = I.button`
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
`, Ri = I.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, zi = I(S)`
  justify-content: space-between;
  align-items: center;
`, Bi = I.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, Vi = I.span`
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border-top: 1px solid
    ${({ $zone: e }) => e === "safe" ? "#BCEFE2" : e === "warn" ? "#F9D9B8" : "#F5BCD7"};
  border-right: 1px solid
    ${({ $zone: e }) => e === "safe" ? "#BCEFE2" : e === "warn" ? "#F9D9B8" : "#F5BCD7"};
  border-bottom: 2px solid
    ${({ $zone: e }) => e === "safe" ? "#BCEFE2" : e === "warn" ? "#F9D9B8" : "#F5BCD7"};
  border-left: 1px solid
    ${({ $zone: e }) => e === "safe" ? "#BCEFE2" : e === "warn" ? "#F9D9B8" : "#F5BCD7"};
  background: ${({ $zone: e }) => e === "safe" ? "#EAFBF7" : e === "warn" ? "#FBF2E7" : "#FCE7F1"};
  overflow: hidden;
  color: ${({ theme: e }) => e.colors.text};
  font-feature-settings: 'liga' off;
  text-overflow: ellipsis;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`, Hi = I.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, Ui = I.div`
  position: relative;
  height: 21px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;
`, Wi = I.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $fillPct: e }) => `${e}%`};
  border-radius: 24px 0 0 24px;
  background: ${({ theme: e, $zone: t, $degen: n }) => n ? "linear-gradient(90deg, #FAD658 0%, #ED4B9E 100%)" : t === "safe" ? e.colors.success : t === "warn" ? e.colors.warning : e.colors.failure};
  box-shadow: ${({ $degen: e }) => e ? "0 2px 0 0 rgba(0, 0, 0, 0.06) inset" : "none"};
`, Gi = I.span`
  position: absolute;
  top: ${({ $variant: e }) => e === "triple" ? "-15px" : "-10px"};
  left: ${({ $fillPct: e, $variant: t }) => t === "triple" ? `calc(${e}% - 22px)` : t === "double" ? `calc(${e}% - 20.7px)` : `calc(${e}% - 19px)`};
  width: ${({ $variant: e }) => e === "triple" ? "44px" : e === "double" ? "41.455px" : "38.004px"};
  height: ${({ $variant: e }) => e === "triple" ? "48px" : e === "double" ? "42.549px" : "38.186px"};
  pointer-events: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`, Ki = () => /* @__PURE__ */ V("svg", {
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
}), qi = () => /* @__PURE__ */ V("svg", {
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
}), Ji = () => /* @__PURE__ */ V("svg", {
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
}), Yi = I.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, Xi = I(S)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, Zi = I.button`
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
`, Qi = I.div`
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
`, $i = I.input`
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
`, ea = I.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`, ta = I(S)`
  align-items: center;
  justify-content: space-between;
`;
I.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var na = I.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, ra = I(S)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, ia = I.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, aa = I.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, oa = I(S)`
  align-self: stretch;
  gap: 8px;
`, sa = I.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 56px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-bottom-width: 4px;
  border-radius: 16px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.18px;
  color: ${({ theme: e }) => e.colors.invertedContrast};
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
`, ca = I(S)`
  align-self: stretch;
  gap: 8px;
`, la = I(T)`
  flex: 1;
  height: 40px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.12s;
  background: ${({ theme: e, $variant: t }) => t === "primary" ? e.colors.primary : e.colors.input};
  color: ${({ theme: e, $variant: t }) => t === "primary" ? e.colors.invertedContrast : e.colors.primary};
  border-bottom-color: ${({ $variant: e }) => e === "primary" ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.1)"};
  &:hover {
    filter: brightness(1.08);
  }
`, ua = I.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, da = I(S)`
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
`, fa = I.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, pa = I.span`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, ma = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, leverage: c, onLeverageChange: l, quoteAsset: u, onQuoteAssetClick: d, fundBalanceText: p, onTopUpFund: m, onPercentClick: h, estimatedEntry: g, liqIfLong: _, marginRequired: v, openingFee: y, canSubmit: b, isSubmittingUp: x = !1, isSubmittingDown: S = !1, onUp: C, onDown: w, onDeposit: T, onWithdraw: E, unrealizedPnl: D }) => {
	let O = Math.min(100, Math.max(0, c / ci * 100)), k = li(c), A = x || S, j = !b || A, M = !b || A;
	return /* @__PURE__ */ V(_i, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ B(vi, { children: /* @__PURE__ */ V(xi, { children: [/* @__PURE__ */ V(Si, { children: [
			/* @__PURE__ */ V(Ci, { children: [
				/* @__PURE__ */ V(wi, { children: [/* @__PURE__ */ B(Ti, { children: "My Perp Fund" }), /* @__PURE__ */ V(Ei, {
					type: "button",
					onClick: m,
					"aria-label": "Top up fund",
					children: [
						/* @__PURE__ */ B("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text-subtle, #7A6EAA)"
							},
							children: /* @__PURE__ */ B(gi, {})
						}),
						/* @__PURE__ */ B(Di, { children: p }),
						/* @__PURE__ */ B("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text, #280D5F)"
							},
							children: /* @__PURE__ */ B(hi, {})
						})
					]
				})] }),
				/* @__PURE__ */ B(Oi, { children: /* @__PURE__ */ V(ki, { children: [/* @__PURE__ */ B(Ai, { children: "My Bet" }), /* @__PURE__ */ V(ji, { children: [/* @__PURE__ */ B(Mi, {
					type: "number",
					inputMode: "decimal",
					value: o,
					onChange: (e) => s(e.target.value),
					"aria-label": "Bet amount",
					placeholder: "0"
				}), /* @__PURE__ */ V(Ni, {
					type: "button",
					onClick: d,
					"aria-label": "Choose quote asset",
					children: [/* @__PURE__ */ B(Pi, { children: u }), /* @__PURE__ */ B(Fi, { children: /* @__PURE__ */ B(mi, {}) })]
				})] })] }) }),
				/* @__PURE__ */ V(Ii, { children: [
					/* @__PURE__ */ B(Li, {
						type: "button",
						onClick: () => h?.(.25),
						children: "25%"
					}),
					/* @__PURE__ */ B(Ri, {}),
					/* @__PURE__ */ B(Li, {
						type: "button",
						onClick: () => h?.(.5),
						children: "50%"
					}),
					/* @__PURE__ */ B(Ri, {}),
					/* @__PURE__ */ B(Li, {
						type: "button",
						onClick: () => h?.(1),
						children: "MAX"
					})
				] })
			] }),
			/* @__PURE__ */ V(Ci, { children: [
				/* @__PURE__ */ B(Ti, { children: "Leverage" }),
				/* @__PURE__ */ V(zi, { children: [/* @__PURE__ */ V(Bi, { children: [c, "x"] }), /* @__PURE__ */ V(Vi, {
					$zone: k,
					children: [ui(k), /* @__PURE__ */ B("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ B(pi, {})
					})]
				})] }),
				/* @__PURE__ */ V(Hi, { children: [/* @__PURE__ */ V(Ui, {
					$fillPct: O,
					$zone: k,
					"aria-hidden": !0,
					children: [
						/* @__PURE__ */ B(Wi, {
							$fillPct: O,
							$zone: k,
							$degen: c > 500
						}),
						/* @__PURE__ */ B(Gi, {
							$fillPct: O,
							$variant: c > 500 ? "triple" : c > 250 ? "double" : "single",
							children: B(c > 500 ? Ji : c > 250 ? qi : Ki, {})
						}),
						/* @__PURE__ */ B(Yi, {
							type: "range",
							min: 1,
							max: ci,
							value: c,
							onChange: (e) => l(Number(e.target.value)),
							"aria-label": "Leverage"
						})
					]
				}), /* @__PURE__ */ V(Xi, {
					role: "tablist",
					children: [/* @__PURE__ */ V(Qi, { children: [/* @__PURE__ */ B($i, {
						type: "number",
						min: 1,
						max: ci,
						value: c,
						onChange: (e) => l(Math.max(1, Math.min(ci, Number(e.target.value) || 1))),
						"aria-label": "Custom leverage"
					}), /* @__PURE__ */ B(ea, { children: "x" })] }), si.map((e) => /* @__PURE__ */ V(Zi, {
						type: "button",
						role: "tab",
						"aria-selected": c === e,
						$active: c === e,
						onClick: () => l(e),
						children: [e, "x"]
					}, e))]
				})] })
			] }),
			/* @__PURE__ */ V(ta, { children: [/* @__PURE__ */ B(Ti, { children: "Duration" }), /* @__PURE__ */ V(Ei, {
				type: "button",
				disabled: !0,
				children: [/* @__PURE__ */ B(Di, {
					style: { fontSize: 14 },
					children: "Perpetual"
				}), /* @__PURE__ */ B("span", {
					"aria-hidden": !0,
					children: "▾"
				})]
			})] })
		] }), o && o !== "0" ? /* @__PURE__ */ V(yi, { children: [/* @__PURE__ */ V(na, { children: [
			/* @__PURE__ */ V(ra, { children: [/* @__PURE__ */ B(ia, { children: "Estimated Entry" }), /* @__PURE__ */ B(aa, { children: g })] }),
			/* @__PURE__ */ V(ra, { children: [/* @__PURE__ */ B(ia, { children: "Liquidation if long" }), /* @__PURE__ */ B(aa, {
				$danger: !0,
				children: _
			})] }),
			/* @__PURE__ */ V(ra, { children: [/* @__PURE__ */ B(ia, { children: "Margin required" }), /* @__PURE__ */ B(aa, { children: v })] }),
			/* @__PURE__ */ V(ra, { children: [/* @__PURE__ */ B(ia, { children: "Opening fee" }), /* @__PURE__ */ B(aa, { children: y })] })
		] }), /* @__PURE__ */ V(bi, { children: [/* @__PURE__ */ V(sa, {
			type: "button",
			$variant: "up",
			disabled: j,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ B(di, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ V(sa, {
			type: "button",
			$variant: "down",
			disabled: M,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ B(fi, {}), S ? "..." : "DOWN"]
		})] })] }) : /* @__PURE__ */ V(oa, { children: [/* @__PURE__ */ V(sa, {
			type: "button",
			$variant: "up",
			disabled: j,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ B(di, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ V(sa, {
			type: "button",
			$variant: "down",
			disabled: M,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ B(fi, {}), S ? "..." : "DOWN"]
		})] })] }) }), /* @__PURE__ */ V(ua, { children: [/* @__PURE__ */ V(ca, { children: [/* @__PURE__ */ B(la, {
			$variant: "primary",
			onClick: T,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ B(la, {
			$variant: "secondary",
			onClick: E,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ V(da, { children: [/* @__PURE__ */ V(fa, { children: ["Unrealized PnL ", /* @__PURE__ */ B(f, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ B(pa, { children: D })] })] })]
	});
}, ha = I.div`
  display: flex;
  width: 1058px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-right: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom: 2px solid ${({ theme: e }) => e.colors.cardBorder};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.card};
  font-variant-numeric: tabular-nums;
`, ga = I.button`
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
`, _a = I.span`
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
`, va = I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, ya = I.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, ba = I.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, xa = I.span`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  font-size: 12px;
  letter-spacing: 0.12px;
`, Sa = I.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Ca = I.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, wa = I.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme: e, $positive: t }) => t ? `color-mix(in srgb, ${e.colors.success} 18%, transparent)` : `color-mix(in srgb, ${e.colors.failure} 18%, transparent)`};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, Ta = I(S)`
  align-items: center;
  gap: 24px;
  height: 56px;
`, Ea = I.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, Da = I.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Oa = I.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, ka = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M6 2l5 8H1z" })
}), Aa = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M6 10L1 2h10z" })
}), ja = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c }) => {
	let l = r >= 0;
	return /* @__PURE__ */ V(ha, { children: [/* @__PURE__ */ V(ga, {
		type: "button",
		onClick: c,
		disabled: !c,
		"aria-label": `Change market · ${t}`,
		children: [/* @__PURE__ */ B(_a, { children: e }), /* @__PURE__ */ V(va, { children: [/* @__PURE__ */ V(ya, { children: [/* @__PURE__ */ B(ba, { children: t }), /* @__PURE__ */ B(xa, { children: "Perp" })] }), /* @__PURE__ */ V(Sa, { children: [/* @__PURE__ */ B(Ca, { children: n }), /* @__PURE__ */ V(wa, {
			$positive: l,
			children: [
				B(l ? ka : Aa, {}),
				r.toFixed(2),
				"%"
			]
		})] })] })]
	}), /* @__PURE__ */ V(Ta, { children: [
		/* @__PURE__ */ V(Ea, { children: [/* @__PURE__ */ B(Da, { children: "24h Volume" }), /* @__PURE__ */ B(Oa, { children: i })] }),
		/* @__PURE__ */ V(Ea, { children: [/* @__PURE__ */ B(Da, { children: "Open Interest" }), /* @__PURE__ */ B(Oa, { children: a })] }),
		/* @__PURE__ */ V(Ea, { children: [/* @__PURE__ */ B(Da, { children: "Funding Rate" }), /* @__PURE__ */ B(Oa, { children: o })] }),
		/* @__PURE__ */ V(Ea, { children: [/* @__PURE__ */ B(Da, { children: "Next Funding" }), /* @__PURE__ */ B(Oa, { children: s })] })
	] })] });
}, Ma = I(H)`
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
`, Na = I.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Pa = I.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Fa = I.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Ia = I.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, La = I.div`
  position: relative;
  overflow: visible;
`, Ra = I.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, za = I.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, Ba = I.span`
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
`, Va = 1e3, Ha = 360, Ua = 20, Wa = 70;
function Ga(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * Va), i = e.map((e) => Ua + (1 - (e.price - t) / n) * (Ha - Ua - Wa)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${Va} ${Ha} L 0 ${Ha} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var Ka = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", qa = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", Ja = 200, Ya = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = R(), c = `simple-chart-fill-${j().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = N(() => Ga(r), [r]), d = u?.line ?? Ka, f = u?.area ?? qa, p = u?.endY ?? Ja;
	return /* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B(Na, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ B(Pa, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ V(Fa, { children: [/* @__PURE__ */ V(Ia, { children: [/* @__PURE__ */ V(La, { children: [/* @__PURE__ */ V("svg", {
		viewBox: `0 0 ${Va} ${Ha}`,
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
				x2: Va - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ B(Ba, {
		style: {
			right: -8,
			top: `calc(${p}/${Ha} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ B(Ra, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ B(za, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] })] });
}, Xa = I(H)`
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
`, Za = I.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Qa = I.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  cursor: pointer;
  padding: 16px 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.text : "transparent"};
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, $a = I.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`, eo = I.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Q = I.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, $ = I.div`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, to = I($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, no = I.span`
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
`, ro = I.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`, io = I.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, ao = I.span`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, oo = I($)`
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
  margin: 16px;
`, so = I($)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
  font-weight: 600;
  font-size: 16px;
`, co = I($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, lo = I.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, uo = I.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, fo = I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 16px 12px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: ${({ theme: e }) => e.colors.input};
  color: ${({ theme: e }) => e.colors.failure};
  cursor: pointer;
  &:hover { filter: brightness(0.95); }
`, po = I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, mo = I.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, ho = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, go = (e) => ho[e.toUpperCase()] ?? "#7A6EAA", _o = (e) => e === "up" ? "↑" : "↓", vo = (e) => e === "up" ? "Up/Long" : "Down/Short", yo = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ B("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), bo = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ V(Xa, { children: [
	/* @__PURE__ */ V(Za, {
		role: "tablist",
		children: [
			/* @__PURE__ */ B(Qa, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ B(Qa, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ B(Qa, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ B(po, { children: "No open positions" }) : /* @__PURE__ */ V($a, {
		role: "table",
		children: [
			/* @__PURE__ */ B(Q, { children: "Token" }),
			/* @__PURE__ */ B(Q, { children: "Direction" }),
			/* @__PURE__ */ B(Q, { children: "Unrealized PnL" }),
			/* @__PURE__ */ B(Q, { children: "Entry Price" }),
			/* @__PURE__ */ B(Q, { children: "Liq. Price" }),
			/* @__PURE__ */ B(Q, { children: "Distance to Liq" }),
			/* @__PURE__ */ B(Q, {}),
			n.map((e) => /* @__PURE__ */ V(E.Fragment, { children: [
				/* @__PURE__ */ V(to, { children: [o ? o(e) : /* @__PURE__ */ B(no, {
					$color: e.iconColor ?? go(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ V(ro, { children: [/* @__PURE__ */ B(io, { children: e.symbol }), /* @__PURE__ */ B(ao, { children: e.chainLabel })] })] }),
				/* @__PURE__ */ V(oo, {
					$direction: e.direction,
					children: [
						_o(e.direction),
						" ",
						vo(e.direction)
					]
				}),
				/* @__PURE__ */ B(so, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ B($, { children: e.entryPrice }),
				/* @__PURE__ */ B($, { children: e.liqPrice }),
				/* @__PURE__ */ V(co, { children: [/* @__PURE__ */ B(lo, { children: /* @__PURE__ */ B(uo, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ B("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ B(fo, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ B(yo, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ B(po, { children: "No open orders" }) : /* @__PURE__ */ V(eo, {
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
				/* @__PURE__ */ B($, { children: /* @__PURE__ */ B(mo, {
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
	e === "history" && /* @__PURE__ */ B(po, { children: "No transaction history" })
] }), xo = I(r)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 0;
  }
`, So = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 8px;
`, Co = I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`, wo = I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 9px;
  border-radius: 999px;
  border: 2px solid
    ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.tertiary};
  background: ${({ $active: e, theme: t }) => t.colors.tertiary};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  line-height: 1.5;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.12s, border-color 0.12s, background 0.12s;
  &:hover:not(:disabled) {
    color: ${({ theme: e }) => e.colors.text};
  }
`, To = I.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  scrollbar-width: thin;
`, Eo = I.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 0;
  height: 75px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${({ theme: e }) => e.colors.card} 100%
  );
`, Do = I.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 61px;
  padding: 6px 12px;
  border: 0;
  border-radius: 16px;
  background: ${({ $selected: e, theme: t }) => e ? t.colors.input : "transparent"};
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background 0.12s;
  &:hover:not(:disabled) {
    background: ${({ theme: e }) => e.colors.tertiary};
  }
`, Oo = I.button`
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
  color: ${({ $on: e, theme: t }) => e ? t.colors.warning : t.colors.textSubtle};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  &:hover {
    color: ${({ theme: e }) => e.colors.warning};
  }
`, ko = I.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.disabled};
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ao = I.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, jo = I.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Mo = I.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme: e }) => e.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`, No = I.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  overflow: hidden;
`, Po = I.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  min-width: 0;
`, Fo = I.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`, Io = I.span`
  display: inline-flex;
  align-items: center;
  padding: 0 6px;
  height: 16px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1px;
  text-transform: none;
  background: ${({ $tone: e, theme: t }) => e === "ondo" ? "rgba(118, 69, 217, 0.10)" : e === "xstocks" ? "rgba(2, 145, 157, 0.10)" : t.colors.tertiary};
  color: ${({ $tone: e, theme: t }) => e === "ondo" ? t.colors.secondary : e === "xstocks" ? t.colors.primary60 ?? t.colors.primary : t.colors.textSubtle};
`;
function Lo(e) {
	let t = (e ?? "").toLowerCase();
	return t.includes("ondo") ? "ondo" : t.includes("xstock") ? "xstocks" : "default";
}
var Ro = I.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`, zo = I.div`
  position: relative;
  display: flex;
  align-items: center;

  & > svg {
    position: absolute;
    left: 12px;
    color: ${({ theme: e }) => e.colors.textSubtle};
    pointer-events: none;
  }

  & > input {
    padding-left: 44px;
  }
`;
function Bo(e) {
	return e > 0 ? "success" : e < 0 ? "failure" : "textSubtle";
}
function Vo(e) {
	return `${e > 0 ? "+" : ""}${e.toFixed(2)}%`;
}
var Ho = ({ searchQuery: e, onSearchChange: t, searchPlaceholder: n = "Search Tokens / Pools", filters: r, filterCounts: o, activeFilter: s, onFilterChange: c, assets: f, selectedAssetId: p, onAssetClick: m, onFavoriteToggle: h }) => /* @__PURE__ */ V(xo, { children: [
	/* @__PURE__ */ V(So, { children: [/* @__PURE__ */ V(zo, { children: [/* @__PURE__ */ B(C, {
		width: "24px",
		height: "24px"
	}), /* @__PURE__ */ B(a, {
		value: e,
		placeholder: n,
		onChange: (e) => t(e.target.value),
		"aria-label": "Search tokenized assets"
	})] }), /* @__PURE__ */ B(Co, {
		role: "tablist",
		"aria-label": "Asset categories",
		children: r.map((e) => {
			let t = e === s, n = o?.[e];
			return /* @__PURE__ */ V(wo, {
				$active: t,
				type: "button",
				role: "tab",
				"aria-selected": t,
				onClick: () => c(e),
				children: [e, t && n !== void 0 && /* @__PURE__ */ B("span", {
					style: {
						marginLeft: 6,
						opacity: .7
					},
					children: n
				})]
			}, e);
		})
	})] }),
	/* @__PURE__ */ B(To, { children: f.map((e) => {
		let t = e.id === p, n = e.symbol.slice(0, 2).toUpperCase(), r = e.logoUrls?.find(Boolean);
		return /* @__PURE__ */ V(Do, {
			type: "button",
			$selected: t,
			onClick: () => m?.(e.id),
			"aria-label": `${e.name} ${e.symbol}, ${e.price}, ${Vo(e.changePct)}`,
			children: [
				/* @__PURE__ */ B(Oo, {
					$on: !!e.favorite,
					type: "button",
					"aria-label": e.favorite ? `Unfavorite ${e.symbol}` : `Favorite ${e.symbol}`,
					onClick: (t) => {
						t.stopPropagation(), h?.(e.id);
					},
					children: e.favorite ? /* @__PURE__ */ B(u, {
						width: "16px",
						height: "16px"
					}) : /* @__PURE__ */ B(d, {
						width: "16px",
						height: "16px"
					})
				}),
				/* @__PURE__ */ V(ko, { children: [r ? /* @__PURE__ */ B(Ao, {
					src: r,
					alt: ""
				}) : /* @__PURE__ */ B(jo, { children: n }), /* @__PURE__ */ B(Mo, {})] }),
				/* @__PURE__ */ V(No, { children: [/* @__PURE__ */ B(Po, { children: /* @__PURE__ */ B(l, {
					as: "h4",
					scale: "md",
					ellipsis: !0,
					children: e.name
				}) }), /* @__PURE__ */ V(Fo, { children: [/* @__PURE__ */ B(i, {
					bold: !0,
					fontSize: "12px",
					color: "textSubtle",
					textTransform: "uppercase",
					style: { letterSpacing: "0.24px" },
					ellipsis: !0,
					children: e.symbol
				}), e.source && /* @__PURE__ */ B(Io, {
					$tone: Lo(e.source),
					children: e.source
				})] })] }),
				/* @__PURE__ */ V(Ro, { children: [/* @__PURE__ */ B(i, {
					bold: !0,
					fontSize: "20px",
					children: e.price
				}), /* @__PURE__ */ B(i, {
					fontSize: "14px",
					color: Bo(e.changePct),
					children: Vo(e.changePct)
				})] })
			]
		}, e.id);
	}) }),
	/* @__PURE__ */ B(Eo, { "aria-hidden": !0 })
] }), Uo = I(r)`
  & > div {
    padding: 0;
    overflow: hidden;
  }
`, Wo = I.div`
  position: relative;
  display: flex;
  flex-direction: column;
`, Go = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  ${({ $bordered: e, theme: t }) => e && L`
      border-bottom: 1px solid ${t.colors.cardBorder};
    `}
`, Ko = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, qo = I.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
`, Jo = I.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Yo = I.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
`, Xo = I.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 80px;
  padding: 0 16px;
  border-radius: 24px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  box-shadow: ${({ theme: e }) => e.shadows.inset};
`, Zo = I.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px 4px 4px;
  border: 0;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  font-family: inherit;
  flex-shrink: 0;
  color: ${({ theme: e }) => e.colors.text};
  &:hover {
    background: ${({ theme: e }) => e.colors.backgroundAlt};
  }
`, Qo = I.div`
  position: relative;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`, $o = I.div`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: ${({ $bg: e, theme: t }) => e ?? t.colors.disabled};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, es = I.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme: e }) => e.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`, ts = I.div`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 14px;
  height: 14px;
  border-radius: 35%;
  background: ${({ theme: e }) => e.colors.card};
  border: 2px solid ${({ theme: e }) => e.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`, ns = I.img`
  width: 100%;
  height: 100%;
  border-radius: 35%;
`, rs = I.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, is = I.input`
  width: 100%;
  border: 0;
  background: transparent;
  outline: none;
  text-align: right;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-variant-numeric: tabular-nums;
  padding: 0;
  &:focus {
    color: ${({ theme: e }) => e.colors.text};
  }
  &::placeholder {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, as = I.div`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: right;
  font-variant-numeric: tabular-nums;
`, os = I.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.card};
  color: ${({ theme: e }) => e.colors.primary60 ?? e.colors.primary};
  cursor: pointer;
  z-index: 1;
  transition: transform 0.12s;
  &:hover:not(:disabled) {
    transform: translate(-50%, -50%) scale(1.05);
  }
`, ss = I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`, cs = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
`, ls = I.span`
  display: inline-flex;
  flex-direction: column;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme: e }) => e.colors.textSubtle};
  cursor: help;
`, us = I.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 3px 8px 5px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.primary60 ?? e.colors.primary};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  &:hover:not(:disabled) {
    filter: brightness(1.02);
  }
`, ds = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  font-family: 'Kanit', sans-serif;
`, fs = I.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, ps = I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.primary60 ?? e.colors.primary};
  cursor: pointer;
  &:hover:not(:disabled) { opacity: 0.65; }
`, ms = ({ side: e }) => {
	let t = e.logoUrls?.find(Boolean);
	return /* @__PURE__ */ V(Qo, { children: [
		t ? /* @__PURE__ */ B($o, { style: { backgroundImage: `url(${t})` } }) : /* @__PURE__ */ B($o, { children: e.symbol.slice(0, 2).toUpperCase() }),
		/* @__PURE__ */ B(es, {}),
		e.chainLogoUrl && /* @__PURE__ */ B(ts, { children: /* @__PURE__ */ B(ns, {
			src: e.chainLogoUrl,
			alt: ""
		}) })
	] });
}, hs = ({ labelPrefix: e, side: n, onAmountChange: r, onTokenSelect: a, amountId: o }) => {
	let s = !n.symbol;
	return /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ V(Ko, { children: [/* @__PURE__ */ V(qo, { children: [/* @__PURE__ */ B(i, {
		bold: !0,
		fontSize: "12px",
		color: "textSubtle",
		style: { letterSpacing: "0.12px" },
		children: e
	}), !s && n.address && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(Jo, {
		"aria-hidden": !0,
		children: n.symbol.slice(0, 1)
	}), /* @__PURE__ */ B(i, {
		bold: !0,
		fontSize: "12px",
		color: "textSubtle",
		style: { letterSpacing: "0.12px" },
		children: n.address
	})] })] }), !s && n.balance && /* @__PURE__ */ V(Yo, { children: [/* @__PURE__ */ B(_, {
		width: "18px",
		height: "18px"
	}), n.balance] })] }), /* @__PURE__ */ V(Xo, { children: [/* @__PURE__ */ V(Zo, {
		type: "button",
		onClick: a,
		"aria-label": s ? "Select token" : `Choose token (${n.symbol})`,
		children: [
			!s && /* @__PURE__ */ B(ms, { side: n }),
			/* @__PURE__ */ B(i, {
				bold: !0,
				fontSize: "20px",
				color: s ? "textSubtle" : "text",
				style: { letterSpacing: "-0.2px" },
				children: s ? "Select token" : n.symbol
			}),
			/* @__PURE__ */ B(t, {
				width: "24px",
				height: "24px"
			})
		]
	}), /* @__PURE__ */ V(rs, { children: [/* @__PURE__ */ B(is, {
		id: o,
		inputMode: "decimal",
		autoComplete: "off",
		spellCheck: !1,
		value: n.amount,
		placeholder: "0.0",
		disabled: s,
		onChange: (e) => r?.(e.target.value),
		"aria-label": `${e} ${n.symbol || "unselected"} amount`
	}), n.amountUsd && /* @__PURE__ */ B(as, { children: n.amountUsd })] })] })] });
}, gs = ({ toSide: e, fromSide: r, onToAmountChange: i, onFromAmountChange: a, onToTokenSelect: o, onFromTokenSelect: s, onSwapDirection: l, slippage: u, onSlippageEdit: d, rateFromLabel: f, rateToLabel: m, expanded: g = !0, onToggleExpanded: _, onRefreshRate: v, canSubmit: y, submitLabel: b = "Swap", onSubmit: x }) => /* @__PURE__ */ V("div", {
	style: {
		display: "flex",
		flexDirection: "column",
		gap: 16
	},
	children: [/* @__PURE__ */ B(Uo, { children: /* @__PURE__ */ V(Wo, { children: [
		/* @__PURE__ */ B(Go, {
			$bordered: !0,
			children: /* @__PURE__ */ B(hs, {
				labelPrefix: "From:",
				side: r,
				onAmountChange: a,
				onTokenSelect: s,
				amountId: "tokenized-swap-from"
			})
		}),
		/* @__PURE__ */ B(Go, { children: /* @__PURE__ */ B(hs, {
			labelPrefix: "To:",
			side: e,
			onAmountChange: i,
			onTokenSelect: o,
			amountId: "tokenized-swap-to"
		}) }),
		/* @__PURE__ */ B(os, {
			type: "button",
			onClick: l,
			"aria-label": "Swap direction",
			children: /* @__PURE__ */ B(p, {
				width: "24px",
				height: "24px"
			})
		})
	] }) }), /* @__PURE__ */ B(Uo, { children: /* @__PURE__ */ V(ss, { children: [
		/* @__PURE__ */ V(cs, { children: [/* @__PURE__ */ B(ls, { children: "Slippage Tolerance" }), /* @__PURE__ */ V(us, {
			type: "button",
			onClick: d,
			"aria-label": `Slippage tolerance ${u}, edit`,
			children: [u, /* @__PURE__ */ B(c, {
				width: "20px",
				height: "20px"
			})]
		})] }),
		/* @__PURE__ */ B(T, {
			variant: "primary",
			disabled: !y,
			onClick: x,
			width: "100%",
			style: { height: 48 },
			children: b
		}),
		/* @__PURE__ */ V(ds, { children: [/* @__PURE__ */ V(fs, { children: [
			/* @__PURE__ */ B(ps, {
				type: "button",
				onClick: v,
				"aria-label": "Refresh rate",
				children: /* @__PURE__ */ B(h, {
					width: "18px",
					height: "18px"
				})
			}),
			/* @__PURE__ */ B("span", { children: f }),
			/* @__PURE__ */ B(p, {
				width: "18px",
				height: "18px",
				style: { transform: "rotate(90deg)" },
				"aria-hidden": !0
			}),
			/* @__PURE__ */ B("span", { children: m })
		] }), /* @__PURE__ */ B(ps, {
			type: "button",
			onClick: _,
			"aria-label": g ? "Collapse details" : "Expand details",
			children: B(g ? n : t, {
				width: "24px",
				height: "24px"
			})
		})] })
	] }) })]
});
//#endregion
export { fe as AccountPanel, or as BookTradesPanel, tr as ChartPanel, ii as DepositModal, oi as EnableTradingModal, ve as LeverageModal, wt as MarketsDropdown, Dn as OrderBook, tt as OrderConfirmModal, Lr as OrderForm, je as PerpsErrorMessage, H as PerpsPanel, Wn as PositionsPanel, De as RecentTrades, ma as SimpleBetPanel, Ya as SimpleChartCard, bo as SimplePositionsCard, ja as SimpleTickerCard, Jt as SymbolHeader, Ho as TokenizedAssetsList, gs as TokenizedSwapForm, Qn as TpSlModal, U as UnderlineTab, re as UnderlineTabs, qe as WithdrawModal };

//# sourceMappingURL=widgets.js.map