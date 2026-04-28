import { C as e, Gt as t, L as n, M as r, O as i, R as a, S as o, Wn as s, Y as c, k as l, r as u, t as d, tt as f, w as p, x as m, xi as h, y as g, z as _ } from "./chunks/Modal-62NRAk7R.js";
import v, { Children as y, cloneElement as b, useCallback as x, useEffect as S, useLayoutEffect as C, useMemo as w, useRef as T, useState as E } from "react";
import D, { useTheme as O } from "styled-components";
import { Fragment as k, jsx as A, jsxs as j } from "react/jsx-runtime";
import { createPortal as M } from "react-dom";
//#region src/widgets/primitives.tsx
var N = D(n)`
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
`, P = D.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, F = D.button`
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
`, I = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ A(F, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), L = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ A(P, {
	$fullWidth: r,
	children: y.map(n, (n, i) => !n || typeof n != "object" ? n : b(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), R = D(N)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, ee = D(r).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, z = D(m)`
  justify-content: space-between;
  align-items: center;
`, B = D(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, V = D(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, te = D.button`
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
`, H = D(m)`
  flex-direction: column;
  gap: 8px;
`, U = D(V)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, W = (e) => e, ne = ({ walletDisplay: t, state: n, canDeposit: i = !0, canWithdraw: a = !0, onDeposit: o, onWithdraw: s, onEnableTrading: c, t: l = W }) => /* @__PURE__ */ j(R, { children: [
	/* @__PURE__ */ j(m, {
		style: { gap: 8 },
		children: [/* @__PURE__ */ A(te, {
			$variant: "primary",
			onClick: o,
			disabled: !i,
			children: l("Deposit")
		}), /* @__PURE__ */ A(te, {
			$variant: "secondary",
			onClick: s,
			disabled: !a,
			children: l("Withdraw")
		})]
	}),
	n.kind === "needs-deposit" && /* @__PURE__ */ A(e, {
		variant: "warning",
		children: /* @__PURE__ */ j(m, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ A(r, {
				fontSize: "14px",
				bold: !0,
				children: l("Deposit to get started")
			}), /* @__PURE__ */ A(p, {
				fontSize: "12px",
				children: l("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
			})]
		})
	}),
	n.kind === "needs-trading" && /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A(e, {
		variant: "warning",
		children: /* @__PURE__ */ j(m, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ A(r, {
				fontSize: "14px",
				bold: !0,
				children: l("Enable Trading to view your Aster balance")
			}), /* @__PURE__ */ A(p, {
				fontSize: "12px",
				children: l("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
			})]
		})
	}), /* @__PURE__ */ A(_, {
		onClick: c,
		scale: "sm",
		variant: "primary",
		children: l("Enable Trading")
	})] }),
	n.kind === "ready" && /* @__PURE__ */ j(H, { children: [
		/* @__PURE__ */ A(ee, { children: l("Account Equity") }),
		/* @__PURE__ */ j(z, { children: [/* @__PURE__ */ A(B, { children: l("Wallet") }), /* @__PURE__ */ A(V, { children: t ?? "—" })] }),
		/* @__PURE__ */ j(z, { children: [/* @__PURE__ */ A(B, { children: l("Equity") }), /* @__PURE__ */ A(V, { children: n.equity || "—" })] }),
		/* @__PURE__ */ j(z, { children: [/* @__PURE__ */ A(B, { children: l("Available") }), /* @__PURE__ */ A(V, { children: n.available || "—" })] }),
		/* @__PURE__ */ j(z, { children: [/* @__PURE__ */ A(B, { children: l("Unrealized PnL") }), /* @__PURE__ */ A(U, {
			$sign: n.pnlSign,
			children: n.unrealizedPnl || "—"
		})] }),
		/* @__PURE__ */ j(z, { children: [/* @__PURE__ */ A(B, { children: l("Margin mode") }), /* @__PURE__ */ A(V, { children: n.marginMode ?? l("Cross") })] })
	] })
] });
//#endregion
//#region src/widgets/BunnySlider.tsx
function re({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = T(null), [u, d] = E(0);
	C(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 0 + Math.max(0, u - 32) * p, h = m + 9, g = Math.max(0, h - 8), _ = p >= .999;
	return /* @__PURE__ */ j("div", {
		ref: l,
		className: "bs-root",
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ A("span", { className: "bs-track" }),
			/* @__PURE__ */ A("span", { className: "bs-back" }),
			/* @__PURE__ */ A("span", {
				className: "bs-fill",
				style: { width: g }
			}),
			/* @__PURE__ */ A("span", {
				className: `bs-front${_ ? " bs-front--max" : ""}`,
				style: { left: m }
			}),
			/* @__PURE__ */ A("input", {
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
			s && /* @__PURE__ */ A("span", {
				className: "bs-value-label",
				style: { left: m + 32 / 2 },
				children: _ ? "MAX" : s
			})
		]
	});
}
//#endregion
//#region src/widgets/LeverageModal.tsx
var ie = D(m)`
  gap: 10px;
  align-items: stretch;
`, ae = D(_).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, oe = D(m)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, se = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, ce = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: i = 1, maxLeverage: a = 100, availableBalance: s, onConfirm: c, onClose: l, isSubmitting: f = !1, errorSlot: p, t: h = se }) => {
	let [g, v] = E(n);
	S(() => {
		e && v(n);
	}, [e, n]);
	let y = (e) => Math.max(i, Math.min(a, Math.round(e))), b = s * g;
	return /* @__PURE__ */ A(u, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ A(d, {
			title: h("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: l,
			children: /* @__PURE__ */ j(m, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ j(ie, { children: [
						/* @__PURE__ */ A(ae, {
							onClick: () => v((e) => y(e - 1)),
							disabled: g <= i,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ j(oe, { children: [g, "X"] }),
						/* @__PURE__ */ A(ae, {
							onClick: () => v((e) => y(e + 1)),
							disabled: g >= a,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ A(re, {
						name: "perp-leverage",
						min: i,
						max: a,
						value: g,
						onValueChanged: (e) => v(y(e)),
						width: "100%"
					}),
					/* @__PURE__ */ j(o, { children: [/* @__PURE__ */ A(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: h("Maximum position at current leverage:")
					}), /* @__PURE__ */ A(r, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(b) && b > 0 ? `${b.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: h("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					p,
					/* @__PURE__ */ A(_, {
						scale: "md",
						disabled: f,
						onClick: () => c(g),
						children: h(f ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, le = D.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, ue = D.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, de = D.div`
  overflow-y: auto;
  min-height: 0;
`, fe = D.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, pe = D.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, me = D.span`
  text-align: right;
`, he = D(me)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ge = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, _e = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = w(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ j(k, { children: [
		t && /* @__PURE__ */ A(le, { children: t }),
		/* @__PURE__ */ j(ue, { children: [
			/* @__PURE__ */ A("span", { children: o }),
			/* @__PURE__ */ A("span", {
				style: { textAlign: "right" },
				children: s
			}),
			/* @__PURE__ */ A("span", {
				style: { textAlign: "right" },
				children: c
			})
		] }),
		/* @__PURE__ */ A(de, { children: a.map((e) => /* @__PURE__ */ j(fe, { children: [
			/* @__PURE__ */ A(pe, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ A(me, { children: e.size }),
			/* @__PURE__ */ A(he, { children: ge(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ A("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ A(N, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, ve = D(o)`
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
`, ye = D(_).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, be = (e) => e, xe = ({ variant: t, title: n, message: i, details: a, t: o = be }) => {
	let [s, c] = E(!1);
	return n ? /* @__PURE__ */ A(e, {
		variant: t,
		children: /* @__PURE__ */ j(m, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ A(p, { children: /* @__PURE__ */ A(r, {
					fontSize: "13px",
					bold: !0,
					children: n
				}) }),
				/* @__PURE__ */ A(p, { children: /* @__PURE__ */ A(r, {
					fontSize: "12px",
					children: i
				}) }),
				a && /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A(ye, {
					onClick: () => c((e) => !e),
					children: o(s ? "Hide details" : "Show details")
				}), s && /* @__PURE__ */ A(ve, { children: a })] })
			]
		})
	}) : /* @__PURE__ */ A(e, {
		variant: t,
		children: /* @__PURE__ */ A(p, { children: i })
	});
}, Se = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ce = D(m)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, we = D(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Te = D(m)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Ee = D.button`
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
`, De = D(m)`
  flex-direction: column;
`, Oe = D.div`
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
`, ke = D(m)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, Ae = D.input`
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
`, je = D(m)`
  gap: 6px;
  margin-top: 4px;
`, Me = D.button`
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
`, Ne = D.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Pe = D(m)`
  justify-content: space-between;
  align-items: center;
`, Fe = D(m)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, Ie = [
	25,
	50,
	75
], Le = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: i, selectedAssetId: a, onSelectAsset: s, selectedAsset: c, destinationAddress: l, destinationChainName: p = "BSC", feeText: h, amount: g, onAmountChange: v, onPercentClick: y, onBack: b, onWithdraw: x, onClose: S, isSubmitting: C = !1, canSubmit: w = !0, errorSlot: T, t: E = Se, renderTokenIcon: D }) => {
	let O = (e, t = 24) => D ? D(e, t) : /* @__PURE__ */ A(Oe, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ A(u, {
		isOpen: e,
		onDismiss: S,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ A(d, {
			title: t === "select" ? E("Withdraw from Aster") : E("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: S,
			children: /* @__PURE__ */ j(Ce, { children: [
				t === "amount" && /* @__PURE__ */ A(m, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ A(_, {
						scale: "sm",
						variant: "text",
						onClick: b,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ A(f, { width: "18px" }),
						children: E("Back")
					})
				}),
				t === "select" && /* @__PURE__ */ j(k, { children: [
					/* @__PURE__ */ j(o, { children: [/* @__PURE__ */ A(we, {
						color: "textSubtle",
						children: E("Select asset")
					}), /* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: E("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ A(r, {
						fontSize: "12px",
						children: E("Loading assets...")
					}),
					!n && i.length === 0 && /* @__PURE__ */ j(Fe, { children: [/* @__PURE__ */ A(r, {
						fontSize: "14px",
						bold: !0,
						children: E("Nothing to withdraw yet")
					}), /* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: E("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					i.length > 0 && /* @__PURE__ */ A(Te, { children: i.map((e) => /* @__PURE__ */ j(Ee, {
						$selected: a === e.id,
						onClick: () => s(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ j(m, {
							alignItems: "center",
							style: { gap: 12 },
							children: [O(e, 32), /* @__PURE__ */ j(De, { children: [/* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ A(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: E("Withdrawable")
							})] })]
						}), /* @__PURE__ */ j(m, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ A(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && c && /* @__PURE__ */ j(k, { children: [
					/* @__PURE__ */ j(ke, { children: [/* @__PURE__ */ j(m, {
						alignItems: "center",
						style: { gap: 12 },
						children: [O(c, 40), /* @__PURE__ */ j(m, {
							flexDirection: "column",
							children: [/* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								children: c.displayName || c.symbol
							}), /* @__PURE__ */ A(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: E("Withdrawable: %amt% %sym%", {
									amt: c.withdrawableText,
									sym: c.symbol
								})
							})]
						})]
					}), /* @__PURE__ */ j(m, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ A(Ae, {
							value: g,
							onChange: (e) => v(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), y && /* @__PURE__ */ j(je, { children: [Ie.map((e) => /* @__PURE__ */ j(Me, {
							onClick: () => y(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ A(Me, {
							onClick: () => y(100),
							children: E("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ j(Ne, { children: [
						/* @__PURE__ */ j(Pe, { children: [/* @__PURE__ */ A(we, {
							color: "textSubtle",
							children: E("Destination")
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ j(Pe, { children: [/* @__PURE__ */ A(we, {
							color: "textSubtle",
							children: E("Network")
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							children: p
						})] }),
						/* @__PURE__ */ j(Pe, { children: [/* @__PURE__ */ A(we, {
							color: "textSubtle",
							children: E("Token")
						}), /* @__PURE__ */ j(m, {
							alignItems: "center",
							style: { gap: 6 },
							children: [O(c, 16), /* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ j(Pe, { children: [/* @__PURE__ */ A(we, {
							color: "textSubtle",
							children: E("Fee")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								h ?? "—",
								" ",
								c.symbol
							]
						})] })
					] }),
					T,
					/* @__PURE__ */ A(_, {
						onClick: x,
						disabled: !w || !g || C,
						isLoading: C,
						scale: "md",
						children: E(C ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ A(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: E("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, G = D(m)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  &:last-of-type {
    border-bottom: 0;
  }
`, K = D(r).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, q = D(r).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Re = D(m)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, ze = D.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, Be = D(q)`
  color: ${({ theme: e }) => e.colors.failure};
`, Ve = D(_)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, He = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ue = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", We = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, Ge = ({ isOpen: e, details: t, onConfirm: n, onClose: i, onSkipFutureChange: a, t: s = He }) => {
	let [c, f] = E(!1);
	return /* @__PURE__ */ A(u, {
		isOpen: e,
		onDismiss: i,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ A(d, {
			title: s("Confirm Order"),
			onDismiss: i,
			children: /* @__PURE__ */ j(m, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Symbol") }), /* @__PURE__ */ A(q, { children: t.symbol })] }),
					/* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Side / Type") }), /* @__PURE__ */ j(q, { children: [
						/* @__PURE__ */ A(ze, {
							$side: t.side,
							children: t.side === "BUY" ? s("Buy / Long") : s("Sell / Short")
						}),
						" · ",
						We(t.type, s)
					] })] }),
					/* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Size") }), /* @__PURE__ */ j(q, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Price") }), /* @__PURE__ */ j(q, { children: [
						Ue(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Trigger Price") }), /* @__PURE__ */ j(q, { children: [
						Ue(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Leverage") }), /* @__PURE__ */ j(q, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Cost") }), /* @__PURE__ */ A(q, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Est. Liq. Price") }), /* @__PURE__ */ A(Be, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ j(G, { children: [/* @__PURE__ */ A(K, { children: s("Reduce Only") }), /* @__PURE__ */ A(q, { children: s("Yes") })] }),
					/* @__PURE__ */ j(Re, { children: [/* @__PURE__ */ A(l, {
						scale: "sm",
						checked: c,
						onChange: (e) => f(e.target.checked)
					}), /* @__PURE__ */ A(r, {
						fontSize: "12px",
						children: s("Don't show this again")
					})] }),
					/* @__PURE__ */ A(o, {
						mt: "8px",
						children: /* @__PURE__ */ A(Ve, {
							$side: t.side,
							onClick: () => {
								c && a?.(!0), n(), i();
							},
							scale: "md",
							children: t.side === "BUY" ? s("Confirm Buy / Long") : s("Confirm Sell / Short")
						})
					})
				]
			})
		})
	});
}, Ke = D.div`
  width: 100%;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  max-height: 420px;
  display: flex;
  flex-direction: column;
`, qe = D(m)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Je = D.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, Ye = D.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, Xe = D.input`
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
`, Ze = D.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Qe = D.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, $e = D.button`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  align-items: center;
  padding: 10px 8px;
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  &:hover {
    background: ${({ theme: e }) => e.colors.input};
  }
`, et = D.button`
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
`, tt = D(m)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
`, nt = D.span`
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
`, rt = D.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, J = D(r)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, it = D(m)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, at = ({ filled: e }) => /* @__PURE__ */ A("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: e ? "currentColor" : "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinejoin: "round",
	strokeLinecap: "round",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), ot = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, st = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, ct = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, lt = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), ut = (e) => lt(e).slice(0, 1) || e.slice(0, 1), dt = (e) => e, ft = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: i, logoForSymbol: a, isLoading: o = !1, t: s = dt }) => {
	let [c, l] = E("all"), [u, d] = E(""), f = w(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ j(Ke, { children: [
		/* @__PURE__ */ j(qe, { children: [/* @__PURE__ */ A(Je, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ A(Je, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ j(Ye, { children: [/* @__PURE__ */ A(h, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ A(Xe, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ j(Ze, { children: [
			/* @__PURE__ */ A("span", {}),
			/* @__PURE__ */ A("span", { children: s("Symbols") }),
			/* @__PURE__ */ A(J, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ A(J, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ A(J, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ A(Qe, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ A(it, { children: /* @__PURE__ */ A(r, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let r = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(lt(e.symbol));
				return /* @__PURE__ */ j($e, {
					onClick: () => i(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ A(et, {
							$filled: r,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(r ? "Unfavorite" : "Favorite"),
							"aria-pressed": r,
							children: /* @__PURE__ */ A(at, { filled: r })
						}),
						/* @__PURE__ */ j(tt, { children: [/* @__PURE__ */ A(nt, { children: c ? /* @__PURE__ */ A(rt, {
							src: c,
							alt: lt(e.symbol),
							loading: "lazy",
							onError: (t) => {
								let n = t.currentTarget;
								n.style.display = "none";
								let r = n.parentElement;
								r && !r.textContent && (r.textContent = ut(e.symbol));
							}
						}) : ut(e.symbol) }), /* @__PURE__ */ A("span", { children: e.symbol })] }),
						/* @__PURE__ */ A(J, { children: ot(e.lastPrice) }),
						/* @__PURE__ */ A(J, {
							$tone: o >= 0 ? "up" : "down",
							children: st(e.priceChangePercent)
						}),
						/* @__PURE__ */ A(J, { children: ct(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, pt = D(m)`
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
`, mt = D(m)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, ht = D.button`
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
`, gt = D.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, _t = D.button`
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
`, vt = D.span`
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
`, yt = D.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, bt = D(r)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`, xt = D.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`, St = D.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Ct = D(m)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, wt = D(m)`
  flex-direction: column;
  flex-shrink: 0;
`, Tt = D(r)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, Et = D(r)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Dt = D(m)`
  align-items: baseline;
  white-space: nowrap;
`, Ot = D.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, kt = D.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, At = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, jt = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Mt = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, Nt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, Pt = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", Ft = () => /* @__PURE__ */ A("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), It = (e) => e, Lt = ({ symbol: e, pairLabel: n, logoUrl: r, leverage: i, lastPrice: a, markPrice: o, indexPrice: s, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, t: h = It }) => {
	let g = O(), [_, v] = E(!1), [y, b] = E(null), w = T(null), D = T(null);
	C(() => {
		if (!_ || !w.current) return;
		let e = () => {
			let e = w.current.getBoundingClientRect();
			b({
				top: e.bottom + 8,
				left: e.left
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [_]), S(() => {
		if (!_) return;
		let e = (e) => {
			let t = e.target;
			w.current?.contains(t) || D.current?.contains(t) || v(!1);
		}, t = (e) => {
			e.key === "Escape" && v(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [_]);
	let k = x(() => v(!1), []), N = Number(c) < 0, P = Number(u) < 0;
	return /* @__PURE__ */ j(pt, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ j(mt, { children: [p && /* @__PURE__ */ A(_t, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": h(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ A(Ft, {})
			}), /* @__PURE__ */ j(ht, {
				ref: w,
				"aria-haspopup": "listbox",
				"aria-expanded": _,
				disabled: !m,
				onClick: () => m && v((e) => !e),
				children: [
					/* @__PURE__ */ A(vt, {
						$bg: r ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: r ? /* @__PURE__ */ A(yt, {
							src: r,
							alt: n
						}) : Pt(n)
					}),
					/* @__PURE__ */ A(bt, { children: n }),
					/* @__PURE__ */ A(t, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			_ && y && typeof document < "u" && m ? M(/* @__PURE__ */ A(gt, {
				ref: D,
				style: {
					top: y.top,
					left: y.left
				},
				children: m(k)
			}), document.body) : null,
			/* @__PURE__ */ j(xt, { children: [i, "x"] }),
			/* @__PURE__ */ A(St, {
				"aria-label": `Last price: ${a ?? ""}`,
				children: a ?? "—"
			}),
			/* @__PURE__ */ j(Ct, {
				role: "list",
				children: [
					/* @__PURE__ */ j(wt, {
						role: "listitem",
						children: [/* @__PURE__ */ A(Tt, {
							$dashed: !0,
							children: h("Mark")
						}), /* @__PURE__ */ A(Et, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ j(wt, {
						role: "listitem",
						children: [/* @__PURE__ */ A(Tt, {
							$dashed: !0,
							children: h("Index")
						}), /* @__PURE__ */ A(Et, { children: s ?? "—" })]
					}),
					/* @__PURE__ */ j(wt, {
						role: "listitem",
						children: [/* @__PURE__ */ A(Tt, {
							$dashed: !0,
							children: h("Funding / Countdown")
						}), /* @__PURE__ */ j(Dt, { children: [
							/* @__PURE__ */ A(Ot, {
								$negative: N,
								children: At(c)
							}),
							/* @__PURE__ */ A(kt, { children: "/" }),
							/* @__PURE__ */ A(Et, {
								as: "span",
								children: Mt(l)
							})
						] })]
					}),
					/* @__PURE__ */ j(wt, {
						role: "listitem",
						children: [/* @__PURE__ */ A(Tt, { children: h("24h Change") }), /* @__PURE__ */ A(Et, {
							style: { color: u ? P ? g.colors.failure : g.colors.success : void 0 },
							children: jt(u)
						})]
					}),
					/* @__PURE__ */ j(wt, {
						role: "listitem",
						children: [/* @__PURE__ */ A(Tt, { children: h("24h Volume (USDT)") }), /* @__PURE__ */ A(Et, { children: Nt(d) })]
					})
				]
			})
		]
	});
}, Y = 10, Rt = 27, zt = D(m)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, Bt = D(m)`
  gap: 5px;
`, Vt = D.button`
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
`, Ht = D.div`
  position: relative;
`, Ut = D.button`
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
`, Wt = D.div`
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
`, Gt = D.button`
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
`, Kt = D(m)`
  align-items: center;
  gap: 2px;
`, qt = D.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, Jt = D.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, Yt = D.div`
  height: ${({ $size: e }) => e === "full" ? Y * 2 * Rt : Y * Rt}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, Xt = D.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${Rt}px;
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
`, Zt = D.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? t.colors.success : t.colors.failure};
`, Qt = D.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, $t = D.div`
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
`, en = D.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, tn = D.span`
  text-align: center;
`, nn = D.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, rn = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, an = [
	100,
	50,
	10,
	1
], on = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, sn = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), cn = (e, t) => {
	let n = [];
	for (let e of an) t > e * 10 && n.push(String(e));
	let r = sn(e);
	for (let e = 1; e <= r; e++) n.push(on(e));
	return n;
}, ln = (e, t) => {
	S(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, un = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = E(!1), o = T(null);
	return ln(o, () => a(!1)), /* @__PURE__ */ j(Ht, {
		ref: o,
		children: [/* @__PURE__ */ j(Ut, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ A(Wt, { children: t.map((e) => /* @__PURE__ */ A(Gt, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, dn = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ j("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ A("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "6",
			stroke: t
		}),
		/* @__PURE__ */ A("rect", {
			x: "0.5",
			y: "8.5",
			width: "6",
			height: "6",
			stroke: e
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: n
		})
	]
}), fn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ j("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ A("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), pn = ({ askColor: e, listColor: t }) => /* @__PURE__ */ j("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ A("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ A("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), mn = (e) => e, hn = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = mn }) => {
	let g = O(), _ = d === "QUOTE" ? r : n, v = w(() => cn(i, o), [i, o]);
	S(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = w(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = rn(e, "ask", i, r, a), s = rn(t, "bid", i, r, a), c = Y * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
	}, x = w(() => b([...y.asks].reverse()).reverse(), [y.asks, d]), C = w(() => b(y.bids), [y.bids, d]), T = w(() => {
		let e = x[0]?.total ?? 0, t = C[C.length - 1]?.total ?? 0;
		return Math.max(e, t, 1);
	}, [x, C]), E = (e, t) => {
		let n = e === "bid" ? g.colors.success : g.colors.failure, r = Math.max(0, Math.min(100, t * 100)).toFixed(2);
		return { background: `linear-gradient(to right, ${`color-mix(in srgb, ${n} 60%, transparent)`} 0%, ${`color-mix(in srgb, ${n} 20%, transparent)`} ${r}%, transparent ${r}%, transparent 100%)` };
	}, D = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), M = /* @__PURE__ */ j(k, { children: [
		/* @__PURE__ */ j(zt, { children: [/* @__PURE__ */ j(Bt, { children: [
			/* @__PURE__ */ A(Vt, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ A(dn, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ A(Vt, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ A(fn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ A(Vt, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ A(pn, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ j(Kt, { children: [/* @__PURE__ */ A(un, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ A(un, {
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
		/* @__PURE__ */ j(qt, { children: [
			/* @__PURE__ */ j("span", { children: [
				h("Price"),
				" (",
				r,
				")"
			] }),
			/* @__PURE__ */ j("span", {
				style: { textAlign: "center" },
				children: [
					h("Amount"),
					" (",
					_,
					")"
				]
			}),
			/* @__PURE__ */ j("span", {
				style: { textAlign: "right" },
				children: [
					h("SUM"),
					" (",
					_,
					")"
				]
			})
		] }),
		/* @__PURE__ */ j(Jt, { children: [
			s !== "bids" && /* @__PURE__ */ A(Yt, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - Y)).map((e) => /* @__PURE__ */ j(Xt, {
					$side: "ask",
					style: E("ask", e.total / T),
					children: [
						/* @__PURE__ */ A(Zt, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ A(Qt, {
							$align: "center",
							children: D(Number(e.qty))
						}),
						/* @__PURE__ */ A(Qt, {
							$align: "right",
							children: D(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ j($t, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ A(en, { children: h("Spread") }),
					/* @__PURE__ */ A(tn, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ A(nn, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ A(Yt, {
				$size: s === "bids" ? "full" : "half",
				children: C.slice(0, s === "bids" ? Y * 2 : Y).map((e) => /* @__PURE__ */ j(Xt, {
					$side: "bid",
					style: E("bid", e.total / T),
					children: [
						/* @__PURE__ */ A(Zt, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ A(Qt, {
							$align: "center",
							children: D(Number(e.qty))
						}),
						/* @__PURE__ */ A(Qt, {
							$align: "right",
							children: D(e.total)
						})
					]
				}, `b-${e.price}`))
			})
		] })
	] });
	return m ? /* @__PURE__ */ A("div", {
		style: p ? { display: "none" } : { display: "contents" },
		children: M
	}) : /* @__PURE__ */ A(N, {
		style: p ? { display: "none" } : void 0,
		children: M
	});
}, gn = D(N)`
  flex: 1;
  min-height: 200px;
`, _n = D.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, vn = D(m)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, yn = D.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 1fr)) auto;
  gap: 6px 16px;
  font-variant-numeric: tabular-nums;
`, bn = D(m)`
  gap: 6px;
  align-items: center;
`, xn = D.div`
  font-size: 11px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 2px;
`, Sn = D.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, Cn = D.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(min-content, 1fr)) auto;
  gap: 6px 16px;
  font-variant-numeric: tabular-nums;
`, X = D(r).attrs({
	fontSize: "10px",
	color: "textSubtle"
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Z = D(r).attrs({ fontSize: "12px" })`
  font-variant-numeric: tabular-nums;
`, wn = (e) => e, Tn = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: i, closingSymbol: a, t: o }) => {
	let s = O(), c = t?.(e.symbol), l = e.positionAmt >= 0 ? "BUY" : "SELL", u = Number.isFinite(c) && Number.isFinite(e.entryPrice) ? (c - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), d = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: l,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, f = a === e.symbol;
	return /* @__PURE__ */ j(k, { children: [
		/* @__PURE__ */ A(Z, {
			bold: !0,
			children: e.symbol
		}),
		/* @__PURE__ */ A(Z, {
			style: { color: l === "BUY" ? s.colors.success : s.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ A(Z, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ A(Z, { children: c !== void 0 && Number.isFinite(c) ? c.toFixed(2) : "—" }),
		/* @__PURE__ */ j(Z, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ A(Z, { children: d ? d.toFixed(2) : "—" }),
		/* @__PURE__ */ A(Z, {
			style: { color: u >= 0 ? s.colors.success : s.colors.failure },
			children: Number.isFinite(u) ? u.toFixed(4) : "—"
		}),
		/* @__PURE__ */ j(xn, { children: [/* @__PURE__ */ j(Sn, {
			$kind: "tp",
			children: [
				o("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ j(Sn, {
			$kind: "sl",
			children: [
				o("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ j(bn, { children: [/* @__PURE__ */ A(_, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => i(e, c ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: o("TP/SL")
		}), /* @__PURE__ */ A(_, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: f || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: f,
			children: o("Close")
		})] })
	] });
}, En = ({ tab: e, onTabChange: t, positions: n, openOrders: i, useMarkPriceForSymbol: a, computeLiqPrice: o, onClosePosition: s, onEditTpSl: c, onCancelOrder: l, closingSymbol: u = null, t: d = wn }) => {
	let f = O(), p = [
		"positions",
		"orders",
		"history"
	];
	return /* @__PURE__ */ j(gn, { children: [/* @__PURE__ */ j(L, {
		activeIndex: p.indexOf(e),
		onItemClick: (e) => t(p[e]),
		children: [
			/* @__PURE__ */ j(I, { children: [
				d("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ j(I, { children: [
				d("Open Orders"),
				" (",
				i.length,
				")"
			] }),
			/* @__PURE__ */ A(I, { children: d("History") })
		]
	}), /* @__PURE__ */ j(_n, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ A(vn, { children: /* @__PURE__ */ A(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: d("No open positions")
		}) }) : /* @__PURE__ */ j(yn, { children: [
			/* @__PURE__ */ A(X, { children: d("Symbol") }),
			/* @__PURE__ */ A(X, { children: d("Size") }),
			/* @__PURE__ */ A(X, { children: d("Entry") }),
			/* @__PURE__ */ A(X, { children: d("Mark") }),
			/* @__PURE__ */ A(X, { children: d("Lev") }),
			/* @__PURE__ */ A(X, { children: d("Liq") }),
			/* @__PURE__ */ A(X, { children: d("uPnL") }),
			/* @__PURE__ */ A(X, { children: d("TP/SL") }),
			/* @__PURE__ */ A(X, {}),
			n.map((e) => /* @__PURE__ */ A(v.Fragment, { children: /* @__PURE__ */ A(Tn, {
				p: e,
				useMarkPriceForSymbol: a,
				computeLiqPrice: o,
				onClose: s,
				onEditTpSl: c,
				closingSymbol: u,
				t: d
			}) }, e.id))
		] })),
		e === "orders" && (i.length === 0 ? /* @__PURE__ */ A(vn, { children: /* @__PURE__ */ A(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: d("No open orders")
		}) }) : /* @__PURE__ */ j(Cn, { children: [
			/* @__PURE__ */ A(X, { children: d("Symbol") }),
			/* @__PURE__ */ A(X, { children: d("Side") }),
			/* @__PURE__ */ A(X, { children: d("Type") }),
			/* @__PURE__ */ A(X, { children: d("Price") }),
			/* @__PURE__ */ A(X, { children: d("Size") }),
			/* @__PURE__ */ A(X, { children: d("Filled") }),
			/* @__PURE__ */ A(X, { children: d("Status") }),
			/* @__PURE__ */ A(X, {}),
			i.map((e) => /* @__PURE__ */ j(v.Fragment, { children: [
				/* @__PURE__ */ A(Z, {
					bold: !0,
					children: e.symbol
				}),
				/* @__PURE__ */ A(Z, {
					style: { color: e.side === "BUY" ? f.colors.success : f.colors.failure },
					children: e.side
				}),
				/* @__PURE__ */ A(Z, { children: e.type }),
				/* @__PURE__ */ A(Z, { children: e.price }),
				/* @__PURE__ */ A(Z, { children: e.origQty }),
				/* @__PURE__ */ A(Z, { children: e.executedQty }),
				/* @__PURE__ */ A(Z, { children: e.status }),
				/* @__PURE__ */ A(_, {
					scale: "xs",
					variant: "secondary",
					onClick: () => l(e),
					children: d("Cancel")
				})
			] }, e.id))
		] })),
		e === "history" && /* @__PURE__ */ A(vn, { children: /* @__PURE__ */ A(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: d("History coming soon")
		}) })
	] })] });
}, Dn = D(m)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme: e }) => e.colors.input};
`, On = D(m)`
  gap: 8px;
`, kn = D(r).attrs({
	fontSize: "11px",
	color: "textSubtle"
})``, An = D(i)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, jn = D(m)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, Mn = (e) => e, Nn = ({ isOpen: e, symbol: t, positionSide: n, qty: i, entryPrice: a, markPrice: s, onConfirm: c, onClose: l, t: f = Mn }) => {
	let p = O(), h = n === "LONG" ? 1 : -1, [g, v] = E(""), [y, b] = E(""), [x, C] = E(""), [T, D] = E(""), [k, M] = E(!1);
	S(() => {
		e || (v(""), b(""), C(""), D(""));
	}, [e]);
	let N = (e) => i > 0 ? a + h * e / i : NaN, P = (e) => i > 0 ? h * (e - a) * i : NaN, F = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", I = (e) => {
		v(e);
		let t = Number(e);
		b(Number.isFinite(t) && e !== "" ? F(P(t), 4) : "");
	}, L = (e) => {
		b(e);
		let t = Number(e);
		v(Number.isFinite(t) && e !== "" ? F(N(t), 2) : "");
	}, R = (e) => {
		C(e);
		let t = Number(e);
		D(Number.isFinite(t) && e !== "" ? F(P(t), 4) : "");
	}, ee = (e) => {
		D(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? C(F(N(t), 2)) : D("");
	}, z = w(() => {
		let e = Number(g), t = Number(x), r = g !== "" && Number.isFinite(e), i = x !== "" && Number.isFinite(t);
		if (n === "LONG") {
			if (r && e <= a) return f("Take Profit price must be above entry for a LONG position.");
			if (i && t >= a) return f("Stop Loss price must be below entry for a LONG position.");
		} else {
			if (r && e >= a) return f("Take Profit price must be below entry for a SHORT position.");
			if (i && t <= a) return f("Stop Loss price must be above entry for a SHORT position.");
		}
	}, [
		g,
		x,
		n,
		a,
		f
	]), B = !k && (g !== "" || x !== "") && !z;
	return /* @__PURE__ */ A(u, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ A(d, {
			title: f("Set TP / SL"),
			onDismiss: l,
			children: /* @__PURE__ */ j(m, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ j(jn, { children: [/* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Symbol")
					}), /* @__PURE__ */ j(r, {
						fontSize: "12px",
						bold: !0,
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ j(jn, { children: [/* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Entry")
					}), /* @__PURE__ */ A(r, {
						fontSize: "12px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(a) ? a.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ j(jn, { children: [/* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Mark")
					}), /* @__PURE__ */ A(r, {
						fontSize: "12px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(s) ? s.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ j(Dn, { children: [/* @__PURE__ */ A(r, {
						fontSize: "13px",
						bold: !0,
						color: p.colors.success,
						children: f("Take Profit")
					}), /* @__PURE__ */ j(On, { children: [/* @__PURE__ */ j(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ A(kn, { children: f("Trigger Price") }), /* @__PURE__ */ A(An, {
							value: g,
							onChange: (e) => I(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ j(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ A(kn, { children: f("PnL (USDT)") }), /* @__PURE__ */ A(An, {
							value: y,
							onChange: (e) => L(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ j(Dn, { children: [/* @__PURE__ */ A(r, {
						fontSize: "13px",
						bold: !0,
						color: p.colors.failure,
						children: f("Stop Loss")
					}), /* @__PURE__ */ j(On, { children: [/* @__PURE__ */ j(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ A(kn, { children: f("Trigger Price") }), /* @__PURE__ */ A(An, {
							value: x,
							onChange: (e) => R(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ j(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ A(kn, { children: f("PnL (USDT)") }), /* @__PURE__ */ A(An, {
							value: T,
							onChange: (e) => ee(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					z && /* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "failure",
						children: z
					}),
					/* @__PURE__ */ A(_, {
						onClick: async () => {
							if (B) {
								M(!0);
								try {
									await c({
										symbol: t,
										closeSide: n === "LONG" ? "SELL" : "BUY",
										tpPrice: g,
										slPrice: x,
										qty: String(i),
										closePosition: !0
									}), l();
								} finally {
									M(!1);
								}
							}
						},
						disabled: !B,
						isLoading: k,
						scale: "md",
						children: f("Confirm")
					})
				]
			})
		})
	});
}, Pn = D(N)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, Fn = (e) => typeof e == "number" ? `${e}px` : e, In = ({ children: e, minHeight: t = "420px" }) => /* @__PURE__ */ A(Pn, {
	$minHeight: Fn(t),
	children: e
}), Ln = D(N)`
  height: 100%;
`, Rn = D.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, zn = D.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, Bn = (e) => e, Vn = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = Bn }) => /* @__PURE__ */ j(Ln, { children: [/* @__PURE__ */ j(L, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ A(I, { children: i("Order Book") }), /* @__PURE__ */ A(I, { children: i("Trades") })]
}), /* @__PURE__ */ j(Rn, { children: [/* @__PURE__ */ A(zn, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ A(zn, {
	$hidden: e !== "trades",
	children: r
})] })] }), Hn = D(N)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, Un = D(m)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Wn = D.button`
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
`, Gn = D(m)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, Kn = D.button`
  flex: 1;
  border: 0;
  background: ${({ $active: e, $side: t, theme: n }) => e ? t === "BUY" ? n.colors.success : n.colors.failure : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? "#fff" : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  font-size: 16px;
  padding: 6px 8px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
`, qn = D.button`
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
`, Jn = D(m)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, Yn = D(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Xn = D(m)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, Zn = D.div`
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
`, Qn = D(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, $n = D.input`
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
`, er = D(_).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, tr = D.div`
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
`, nr = D.input`
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
`, rr = D.button`
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
`, ir = D.div`
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
`, ar = D.button`
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
`, or = D.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, sr = D(i)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, cr = D.div`
  padding: 4px 0;
`, lr = D(m)`
  gap: 8px;
`, ur = D(_)`
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: #fff;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  height: 48px;
  &:hover:not(:disabled) {
    filter: brightness(1.07);
  }
`, dr = D.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, fr = D(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, pr = D(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, mr = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, hr = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: i, typeKey: s, onTypeKeyChange: u, availableBalanceText: d, preview: f, feeText: p, sizePercent: h, onSizePercentChange: _, cta: v, canSubmit: y, isSubmitting: b = !1, marginSubmitting: x = !1, authReady: C = !0, hasAddress: w = !0, errorSlot: D, onSubmit: O, onLeverageClick: N, onMarginModeToggle: P, onDepositClick: F, t: I = mr }) => {
	let L = n.sizeUnit === "QUOTE" ? t : e, R = (e) => i({
		...n,
		side: e
	}), ee = () => i({
		...n,
		sizeUnit: n.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), z = () => i({
		...n,
		tpSlEnabled: !n.tpSlEnabled
	}), B = s === "stop-limit" || s === "stop-market", V = s === "limit" || s === "stop-limit", te = B, H = T(null), U = T(null), [W, ne] = E(!1), [re, ie] = E({
		top: 0,
		left: 0
	});
	S(() => {
		if (!W || !H.current || !U.current) return;
		let e = H.current.getBoundingClientRect(), t = U.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		ie({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [W]), S(() => {
		if (!W) return;
		let e = (e) => {
			let t = e.target;
			H.current && !H.current.contains(t) && U.current && !U.current.contains(t) && ne(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [W]);
	let ae = B, oe = s === "stop-market" ? `${I("Stop Market")} ▾` : `${I("Stop Limit")} ▾`, se = () => {
		ne((e) => !e);
	}, ce = (e) => {
		u(e), ne(!1);
	};
	return /* @__PURE__ */ j(Hn, { children: [
		/* @__PURE__ */ j(Un, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ A(Wn, {
				$active: s === e,
				onClick: () => u(e),
				children: I(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ A(Wn, {
				ref: H,
				$active: ae,
				onClick: se,
				"aria-haspopup": "menu",
				"aria-expanded": W,
				children: oe
			}),
			W && typeof document < "u" && M(/* @__PURE__ */ j(ir, {
				ref: U,
				style: {
					top: re.top,
					left: re.left
				},
				role: "menu",
				children: [/* @__PURE__ */ A(ar, {
					$active: s === "stop-limit",
					role: "menuitem",
					onClick: () => ce("stop-limit"),
					children: I("Stop Limit")
				}), /* @__PURE__ */ A(ar, {
					$active: s === "stop-market",
					role: "menuitem",
					onClick: () => ce("stop-market"),
					children: I("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ j(Gn, { children: [/* @__PURE__ */ A(Kn, {
			$active: n.side === "BUY",
			$side: "BUY",
			onClick: () => R("BUY"),
			children: I("Buy")
		}), /* @__PURE__ */ A(Kn, {
			$active: n.side === "SELL",
			$side: "SELL",
			onClick: () => R("SELL"),
			children: I("Sell")
		})] }),
		/* @__PURE__ */ j(m, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ A(qn, {
				disabled: x,
				onClick: P,
				title: I("Margin mode"),
				children: n.marginMode === "CROSS" ? I("Cross") : I("Isolated")
			}), /* @__PURE__ */ j(qn, {
				onClick: N,
				title: I("Leverage"),
				children: [n.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ j(Jn, { children: [/* @__PURE__ */ A(Yn, { children: I("Avbl") }), /* @__PURE__ */ j(Xn, { children: [/* @__PURE__ */ j(r, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				d,
				" ",
				t
			]
		}), /* @__PURE__ */ A(a, {
			variant: "text",
			scale: "xs",
			onClick: F,
			title: I("Deposit"),
			"aria-label": I("Deposit"),
			style: {
				width: 18,
				height: 18,
				minWidth: 18,
				borderRadius: 999
			},
			children: /* @__PURE__ */ A(c, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		te && /* @__PURE__ */ j(tr, { children: [
			/* @__PURE__ */ A(Qn, { children: I("Stop") }),
			/* @__PURE__ */ A(nr, {
				value: n.stopPrice,
				onChange: (e) => i({
					...n,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": I("Stop price")
			}),
			/* @__PURE__ */ j(rr, {
				type: "button",
				onClick: () => i({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: I("Trigger source"),
				children: [n.stopPriceSource === "MARK" ? I("Mark") : I("Last"), " ▾"]
			})
		] }),
		V && /* @__PURE__ */ j(tr, { children: [
			/* @__PURE__ */ A(Qn, { children: I("Price") }),
			/* @__PURE__ */ A(nr, {
				value: n.price,
				onChange: (e) => i({
					...n,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": I("Limit price")
			}),
			/* @__PURE__ */ A(er, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: t
			})
		] }),
		s === "stop-limit" && /* @__PURE__ */ j(tr, { children: [
			/* @__PURE__ */ A(Qn, { children: I("TIF") }),
			/* @__PURE__ */ A(m, { flex: 1 }),
			/* @__PURE__ */ j(or, {
				value: n.timeInForce === "GTX" ? "GTC" : n.timeInForce,
				onChange: (e) => i({
					...n,
					timeInForce: e.target.value
				}),
				"aria-label": I("Time in force"),
				children: [
					/* @__PURE__ */ A("option", {
						value: "GTC",
						children: "GTC"
					}),
					/* @__PURE__ */ A("option", {
						value: "IOC",
						children: "IOC"
					}),
					/* @__PURE__ */ A("option", {
						value: "FOK",
						children: "FOK"
					})
				]
			})
		] }),
		/* @__PURE__ */ j(Zn, { children: [
			/* @__PURE__ */ A(Qn, { children: I("Size") }),
			/* @__PURE__ */ A($n, {
				value: n.quantity,
				onChange: (e) => i({
					...n,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ j(er, {
				onClick: ee,
				title: I("Toggle unit"),
				children: [L, " ▾"]
			})
		] }),
		/* @__PURE__ */ A(cr, { children: /* @__PURE__ */ A(g, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: h,
			onValueChanged: _,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ j(m, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ A(l, {
				scale: "sm",
				checked: n.reduceOnly,
				onChange: (e) => i({
					...n,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ A(r, {
				fontSize: "14px",
				children: I("Reduce Only")
			})]
		}),
		/* @__PURE__ */ j(m, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ A(l, {
				scale: "sm",
				checked: n.tpSlEnabled,
				onChange: z
			}), /* @__PURE__ */ A(r, {
				fontSize: "14px",
				children: I("Take Profit / Stop Loss")
			})]
		}),
		n.tpSlEnabled && /* @__PURE__ */ j(lr, { children: [/* @__PURE__ */ j(o, {
			style: { flex: 1 },
			children: [/* @__PURE__ */ A(r, {
				fontSize: "14px",
				color: "textSubtle",
				mb: "4px",
				children: I("Take Profit")
			}), /* @__PURE__ */ A(sr, {
				value: n.takeProfitPrice,
				onChange: (e) => i({
					...n,
					takeProfitPrice: e.target.value
				}),
				placeholder: "0.00",
				inputMode: "decimal"
			})]
		}), /* @__PURE__ */ j(o, {
			style: { flex: 1 },
			children: [/* @__PURE__ */ A(r, {
				fontSize: "14px",
				color: "textSubtle",
				mb: "4px",
				children: I("Stop Loss")
			}), /* @__PURE__ */ A(sr, {
				value: n.stopLossPrice,
				onChange: (e) => i({
					...n,
					stopLossPrice: e.target.value
				}),
				placeholder: "0.00",
				inputMode: "decimal"
			})]
		})] }),
		D,
		C ? /* @__PURE__ */ A(ur, {
			onClick: O,
			disabled: !y,
			isLoading: b,
			scale: "md",
			$side: n.side,
			children: v
		}) : /* @__PURE__ */ A(ur, {
			$side: n.side,
			onClick: O,
			scale: "md",
			disabled: !w,
			children: v
		}),
		/* @__PURE__ */ j(dr, { children: [
			/* @__PURE__ */ A(fr, { children: I("Cost") }),
			/* @__PURE__ */ A(pr, { children: f.cost }),
			!B && /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A(fr, { children: I("Est. Liq. Price") }), /* @__PURE__ */ A(pr, { children: f.liq })] }),
			/* @__PURE__ */ A(fr, { children: I("Fees") }),
			/* @__PURE__ */ A(pr, { children: p })
		] })
	] });
}, gr = D(m)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, _r = D.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, vr = D(m)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, yr = D(r).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, br = D(m)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, Q = D(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, xr = D(m)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Sr = D.button`
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
`, Cr = D(m)`
  flex-direction: column;
`, wr = D(m)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, Tr = D.input`
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
`, Er = D(m)`
  gap: 6px;
  margin-top: 4px;
`, Dr = D.button`
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
`, Or = D.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, $ = D(m)`
  justify-content: space-between;
  align-items: center;
`, kr = D(m)`
  flex-direction: column;
  gap: 8px;
`, Ar = D(m)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, jr = D.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, Mr = D(r).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, Nr = D.div`
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
`, Pr = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Fr = [
	25,
	50,
	75
], Ir = ({ isOpen: e, onClose: t, step: n, evmAddress: i, solanaAddress: a, isLoadingAssets: o = !1, assets: s, selectedAssetId: c, onSelectAsset: l, otherSupportedSymbols: p = [], selectedAsset: h, amount: g, onAmountChange: v, sourceAddress: y, errorSlot: b, onPercentClick: x, submitState: S, canContinue: C, onContinue: w, onBack: T, receipt: E, checkingElapsedMs: D = 0, onDepositAgain: O, onRetry: M, t: N = Pr, renderTokenIcon: P, renderSpinner: F }) => {
	let I = N(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund your Account"), L = (() => {
		switch (S) {
			case "switching-chain": return N("Switching chain...");
			case "approving": return N("Approve in wallet...");
			case "approve-confirming": return N("Confirming approval...");
			case "depositing": return N("Confirm in wallet...");
			case "deposit-confirming": return N("Confirming deposit...");
			case "done": return N("Done");
			case "failed": return N("Retry");
			default: return N("Continue");
		}
	})(), R = (e, t = 24) => P ? P(e, t) : /* @__PURE__ */ A(Nr, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), ee = (e) => F ? F(e) : /* @__PURE__ */ A("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ A("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), z = S === "switching-chain" || S === "approving" || S === "approve-confirming" || S === "depositing" || S === "deposit-confirming";
	return /* @__PURE__ */ A(u, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ A(d, {
			title: I,
			onDismiss: t,
			children: /* @__PURE__ */ j(gr, { children: [
				n === "amount" && /* @__PURE__ */ A(m, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ A(_, {
						scale: "sm",
						variant: "text",
						onClick: T,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ A(f, { width: "18px" }),
						children: N("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ j(k, { children: [
					/* @__PURE__ */ j(_r, { children: [
						i && /* @__PURE__ */ j(vr, { children: [
							/* @__PURE__ */ A("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ A(yr, { children: i }),
							/* @__PURE__ */ A(r, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						a && /* @__PURE__ */ j(vr, {
							style: { borderTop: i ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ A("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ A(yr, { children: a }),
								/* @__PURE__ */ A(r, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ j(br, { children: [/* @__PURE__ */ j("div", { children: [/* @__PURE__ */ A(Q, {
							color: "textSubtle",
							children: N("Balance")
						}), /* @__PURE__ */ A(r, {
							fontSize: "12px",
							color: "textSubtle",
							children: N("In your wallet")
						})] }), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							bold: !0,
							children: s.some((e) => e.hasBalance) ? N("Ready") : "—"
						})] })
					] }),
					o && /* @__PURE__ */ A(r, {
						fontSize: "12px",
						children: N("Loading tokens...")
					}),
					!o && s.length === 0 && /* @__PURE__ */ j(m, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								children: N("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ A(r, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: N("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							p.length > 0 && /* @__PURE__ */ A(r, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: N("Supported: %tokens%", { tokens: p.slice(0, 8).join(" · ") })
							})
						]
					}),
					s.length > 0 && /* @__PURE__ */ A(xr, { children: s.map((e) => /* @__PURE__ */ A(Sr, {
						$selected: c === e.id,
						onClick: () => l(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ j(m, {
							alignItems: "center",
							style: { gap: 12 },
							children: [R(e, 32), /* @__PURE__ */ j(Cr, { children: [/* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ j(r, {
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
					s.length > 0 && p.length > 0 && /* @__PURE__ */ A(r, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: N("Also supported: %tokens%", { tokens: p.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && h && /* @__PURE__ */ j(k, { children: [
					/* @__PURE__ */ j(wr, { children: [/* @__PURE__ */ j(m, {
						alignItems: "center",
						style: { gap: 12 },
						children: [R(h, 40), /* @__PURE__ */ j(m, {
							flexDirection: "column",
							children: [/* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								children: h.displayName || h.symbol
							}), /* @__PURE__ */ A(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: h.balanceText
							})]
						})]
					}), /* @__PURE__ */ j(m, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ A(Tr, {
							value: g,
							onChange: (e) => v(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ j(Er, { children: [Fr.map((e) => /* @__PURE__ */ j(Dr, {
							onClick: () => x(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ A(Dr, {
							onClick: () => x(100),
							children: N("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ j(Or, { children: [
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(Q, {
							color: "textSubtle",
							children: N("Source")
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							children: y ?? "—"
						})] }),
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(Q, {
							color: "textSubtle",
							children: N("Destination")
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							children: N("Aster perp account")
						})] }),
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(Q, {
							color: "textSubtle",
							children: N("Token")
						}), /* @__PURE__ */ j(m, {
							alignItems: "center",
							style: { gap: 6 },
							children: [R(h, 16), /* @__PURE__ */ A(r, {
								fontSize: "14px",
								bold: !0,
								children: h.symbol
							})]
						})] })
					] }),
					b,
					/* @__PURE__ */ A(_, {
						onClick: w,
						disabled: !C || z,
						isLoading: z,
						scale: "md",
						children: L
					})
				] }),
				n === "checking" && E && /* @__PURE__ */ j(k, { children: [
					/* @__PURE__ */ j(m, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [ee(72), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: N("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ j(kr, { children: [
						/* @__PURE__ */ j(Ar, {
							$state: "done",
							children: [/* @__PURE__ */ A(jr, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ A(r, {
								fontSize: "13px",
								children: N("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ j(Ar, {
							$state: "done",
							children: [/* @__PURE__ */ A(jr, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ A(r, {
								fontSize: "13px",
								children: N("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ j(Ar, {
							$state: "active",
							children: [/* @__PURE__ */ A(jr, {
								$state: "active",
								children: ee(16)
							}), /* @__PURE__ */ A(r, {
								fontSize: "13px",
								children: N("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ j(Or, { children: [
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(Q, {
							color: "textSubtle",
							children: N("Amount")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							bold: !0,
							children: [
								E.amount,
								" ",
								E.assetSymbol
							]
						})] }),
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(Q, {
							color: "textSubtle",
							children: N("Tx hash")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								E.hash.slice(0, 10),
								"…",
								E.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(Q, {
							color: "textSubtle",
							children: N("Elapsed")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(D / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ A(_, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: N("Close")
					})
				] }),
				n === "success" && E && /* @__PURE__ */ j(k, { children: [
					/* @__PURE__ */ j(Mr, { children: [
						E.amount,
						" ",
						E.assetSymbol
					] }),
					/* @__PURE__ */ j(Or, { children: [
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: N("Source")
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							bold: !0,
							children: E.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: N("Destination")
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							bold: !0,
							children: N("Aster perp account")
						})] }),
						/* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: N("Processing time")
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							bold: !0,
							children: N("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ A(Or, { children: /* @__PURE__ */ j($, { children: [/* @__PURE__ */ A(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: N("Tx hash")
					}), /* @__PURE__ */ j(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							E.hash.slice(0, 10),
							"…",
							E.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ j(m, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ A(_, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: N("View Balance")
						}), /* @__PURE__ */ A(_, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: O,
							children: N("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ j(k, { children: [
					/* @__PURE__ */ j(m, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ A(r, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ A(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: N("The transaction did not go through. Your funds did not move.")
						})]
					}),
					b,
					/* @__PURE__ */ j(m, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ A(_, {
							style: { flex: 1 },
							scale: "md",
							onClick: M,
							children: N("Try Again")
						}), /* @__PURE__ */ A(_, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: t,
							children: N("Close")
						})]
					})
				] })
			] })
		})
	});
}, Lr = (e) => e, Rr = ({ isOpen: t, onClose: n, phase: i, eoaAddress: a, agentAddress: s, isProvisioning: c = !1, linkButtonLabel: l, isLinkDisabled: f = !1, isLinkPending: h = !1, onLinkWallet: g, approveButtonLabel: v, isApproveDisabled: y = !1, isApprovePending: b = !1, onApprove: x, errorSlot: S, t: C = Lr }) => {
	let w = s ?? C(c ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ A(u, {
		isOpen: t,
		onDismiss: n,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ A(d, {
			title: C("Enable Perps Trading"),
			onDismiss: n,
			children: /* @__PURE__ */ j(m, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ A(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: C("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ j(o, { children: [/* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Your wallet")
					}), /* @__PURE__ */ A(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: a ?? "—"
					})] }),
					/* @__PURE__ */ j(o, { children: [/* @__PURE__ */ A(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Agent (trading signer)")
					}), /* @__PURE__ */ A(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: w
					})] }),
					S,
					i === "link-wallet" && /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A(_, {
						onClick: g,
						disabled: f || h,
						isLoading: h,
						scale: "md",
						children: l
					}), /* @__PURE__ */ A(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign one message in your wallet. No funds move.")
					})] }),
					(i === "authorize-agent" || i === "checking-status") && /* @__PURE__ */ j(k, { children: [/* @__PURE__ */ A(_, {
						onClick: x,
						disabled: y || b || i === "checking-status",
						isLoading: b || i === "checking-status",
						scale: "md",
						children: v
					}), /* @__PURE__ */ A(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					i === "done" && /* @__PURE__ */ A(e, {
						variant: "success",
						children: /* @__PURE__ */ A(p, { children: C("Trading enabled.") })
					})
				]
			})
		})
	});
}, zr = [
	50,
	250,
	500,
	1001
], Br = 1001, Vr = (e) => e <= 50 ? "safe" : e <= 250 ? "warn" : "danger", Hr = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "Caution" : "Danger zone", Ur = () => /* @__PURE__ */ A("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", { d: "M12 4l-7 7h4v9h6v-9h4z" })
}), Wr = () => /* @__PURE__ */ A("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", { d: "M12 20l7-7h-4V4h-6v9H5z" })
}), Gr = () => /* @__PURE__ */ A("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ A("path", {
		d: "M7.99636 11.2598C8.18224 11.2598 8.3393 11.1966 8.46752 11.0702C8.59563 10.9436 8.65969 10.7869 8.65969 10.6V7.85984C8.65969 7.67284 8.5968 7.51612 8.47102 7.38967C8.34524 7.26323 8.18936 7.20001 8.00336 7.20001C7.81747 7.20001 7.66041 7.26323 7.53219 7.38967C7.40408 7.51612 7.34002 7.67284 7.34002 7.85984V10.6C7.34002 10.7869 7.40291 10.9436 7.52869 11.0702C7.65447 11.1966 7.81036 11.2598 7.99636 11.2598ZM7.99636 6.07968C8.18791 6.07968 8.34969 6.0149 8.48169 5.88534C8.61358 5.75567 8.67952 5.59506 8.67952 5.40351C8.67952 5.21195 8.61474 5.05018 8.48519 4.91818C8.35552 4.78629 8.19491 4.72034 8.00336 4.72034C7.8118 4.72034 7.65002 4.78512 7.51802 4.91467C7.38613 5.04434 7.32019 5.20495 7.32019 5.39651C7.32019 5.58806 7.38497 5.74984 7.51452 5.88184C7.64419 6.01373 7.8048 6.07968 7.99636 6.07968ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Kr = () => /* @__PURE__ */ A("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), qr = () => /* @__PURE__ */ A("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ A("path", {
		d: "M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Jr = () => /* @__PURE__ */ A("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Yr = D(N)`
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
`, Xr = D.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
`, Zr = D.div`
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
`, Qr = D.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0 16px 16px 16px;
`, $r = D.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
D(m)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, D.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, D.span`
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
`, D.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, D.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, D.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var ei = D.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ti = D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, ni = D(m)`
  align-items: center;
  justify-content: space-between;
`, ri = D(r).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, ii = D.button`
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
`, ai = D.span`
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
`, oi = D.div`
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
`, si = D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, ci = D.span`
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
`, li = D.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, ui = D.input`
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
`, di = D.button`
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
`, fi = D.span`
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
`, pi = D.span`
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
D.span`
  font-size: 14px;
  font-weight: 600;
`;
var mi = D(m)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, hi = D.button`
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
`, gi = D.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, _i = D(m)`
  justify-content: space-between;
  align-items: center;
`, vi = D.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, yi = D.span`
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
`, bi = D.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, xi = D.div`
  position: relative;
  height: 21px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;
`, Si = D.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $fillPct: e }) => `${e}%`};
  border-radius: 24px 0 0 24px;
  background: ${({ theme: e, $zone: t, $degen: n }) => n ? "linear-gradient(90deg, #FAD658 0%, #ED4B9E 100%)" : t === "safe" ? e.colors.success : t === "warn" ? e.colors.warning : e.colors.failure};
  box-shadow: ${({ $degen: e }) => e ? "0 2px 0 0 rgba(0, 0, 0, 0.06) inset" : "none"};
`, Ci = D.span`
  position: absolute;
  top: ${({ $variant: e }) => e === "triple" ? "-15px" : "-10px"};
  left: ${({ $fillPct: e, $variant: t }) => t === "triple" ? `calc(${e}% - 22px)` : t === "double" ? `calc(${e}% - 20.7px)` : `calc(${e}% - 19px)`};
  width: ${({ $variant: e }) => e === "triple" ? "44px" : e === "double" ? "41.455px" : "38.004px"};
  height: ${({ $variant: e }) => e === "triple" ? "48px" : e === "double" ? "42.549px" : "38.186px"};
  pointer-events: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`, wi = () => /* @__PURE__ */ j("svg", {
	width: "38",
	height: "39",
	viewBox: "0 0 38 39",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ A("ellipse", {
			cx: "19.0019",
			cy: "19.6397",
			rx: "19.0019",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "19.0013",
			cy: "17.455",
			rx: "17.8841",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ A("rect", {
			x: "23.3804",
			y: "9",
			width: "11.1776",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Ti = () => /* @__PURE__ */ j("svg", {
	width: "42",
	height: "43",
	viewBox: "0 0 42 43",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ A("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "18.5459",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "22.9092",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ A("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Ei = () => /* @__PURE__ */ j("svg", {
	width: "44",
	height: "48",
	viewBox: "0 0 44 48",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ A("ellipse", {
			cx: "25.0904",
			cy: "29.4522",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "25.0913",
			cy: "27.2753",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "18.5464",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ A("ellipse", {
			cx: "22.9087",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ A("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Di = D.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, Oi = D(m)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, ki = D.button`
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
`, Ai = D.div`
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
`, ji = D.input`
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
`, Mi = D.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`, Ni = D(m)`
  align-items: center;
  justify-content: space-between;
`;
D.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var Pi = D.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, Fi = D(m)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, Ii = D.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Li = D.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, Ri = D(m)`
  align-self: stretch;
  gap: 8px;
`, zi = D.button`
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
`, Bi = D(m)`
  align-self: stretch;
  gap: 8px;
`, Vi = D(_)`
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
`, Hi = D.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ui = D(m)`
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
`, Wi = D.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Gi = D.span`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, Ki = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: c, leverage: l, onLeverageChange: u, quoteAsset: d, onQuoteAssetClick: f, fundBalanceText: p, onTopUpFund: m, onPercentClick: h, estimatedEntry: g, liqIfLong: _, marginRequired: v, openingFee: y, canSubmit: b, isSubmittingUp: x = !1, isSubmittingDown: S = !1, onUp: C, onDown: w, onDeposit: T, onWithdraw: E, unrealizedPnl: D }) => {
	let O = Math.min(100, Math.max(0, l / Br * 100)), k = Vr(l), M = x || S, N = !b || M, P = !b || M;
	return /* @__PURE__ */ j(Yr, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ A(Xr, { children: /* @__PURE__ */ j($r, { children: [/* @__PURE__ */ j(ei, { children: [
			/* @__PURE__ */ j(ti, { children: [
				/* @__PURE__ */ j(ni, { children: [/* @__PURE__ */ A(ri, { children: "My Perp Fund" }), /* @__PURE__ */ j(ii, {
					type: "button",
					onClick: m,
					"aria-label": "Top up fund",
					children: [
						/* @__PURE__ */ A("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text-subtle, #7A6EAA)"
							},
							children: /* @__PURE__ */ A(Jr, {})
						}),
						/* @__PURE__ */ A(ai, { children: p }),
						/* @__PURE__ */ A("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text, #280D5F)"
							},
							children: /* @__PURE__ */ A(qr, {})
						})
					]
				})] }),
				/* @__PURE__ */ A(oi, { children: /* @__PURE__ */ j(si, { children: [/* @__PURE__ */ A(ci, { children: "My Bet" }), /* @__PURE__ */ j(li, { children: [/* @__PURE__ */ A(ui, {
					type: "number",
					inputMode: "decimal",
					value: o,
					onChange: (e) => c(e.target.value),
					"aria-label": "Bet amount",
					placeholder: "0"
				}), /* @__PURE__ */ j(di, {
					type: "button",
					onClick: f,
					"aria-label": "Choose quote asset",
					children: [/* @__PURE__ */ A(fi, { children: d }), /* @__PURE__ */ A(pi, { children: /* @__PURE__ */ A(Kr, {}) })]
				})] })] }) }),
				/* @__PURE__ */ j(mi, { children: [
					/* @__PURE__ */ A(hi, {
						type: "button",
						onClick: () => h?.(.25),
						children: "25%"
					}),
					/* @__PURE__ */ A(gi, {}),
					/* @__PURE__ */ A(hi, {
						type: "button",
						onClick: () => h?.(.5),
						children: "50%"
					}),
					/* @__PURE__ */ A(gi, {}),
					/* @__PURE__ */ A(hi, {
						type: "button",
						onClick: () => h?.(1),
						children: "MAX"
					})
				] })
			] }),
			/* @__PURE__ */ j(ti, { children: [
				/* @__PURE__ */ A(ri, { children: "Leverage" }),
				/* @__PURE__ */ j(_i, { children: [/* @__PURE__ */ j(vi, { children: [l, "x"] }), /* @__PURE__ */ j(yi, {
					$zone: k,
					children: [Hr(k), /* @__PURE__ */ A("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ A(Gr, {})
					})]
				})] }),
				/* @__PURE__ */ j(bi, { children: [/* @__PURE__ */ j(xi, {
					$fillPct: O,
					$zone: k,
					"aria-hidden": !0,
					children: [
						/* @__PURE__ */ A(Si, {
							$fillPct: O,
							$zone: k,
							$degen: l > 500
						}),
						/* @__PURE__ */ A(Ci, {
							$fillPct: O,
							$variant: l > 500 ? "triple" : l > 250 ? "double" : "single",
							children: A(l > 500 ? Ei : l > 250 ? Ti : wi, {})
						}),
						/* @__PURE__ */ A(Di, {
							type: "range",
							min: 1,
							max: Br,
							value: l,
							onChange: (e) => u(Number(e.target.value)),
							"aria-label": "Leverage"
						})
					]
				}), /* @__PURE__ */ j(Oi, {
					role: "tablist",
					children: [/* @__PURE__ */ j(Ai, { children: [/* @__PURE__ */ A(ji, {
						type: "number",
						min: 1,
						max: Br,
						value: l,
						onChange: (e) => u(Math.max(1, Math.min(Br, Number(e.target.value) || 1))),
						"aria-label": "Custom leverage"
					}), /* @__PURE__ */ A(Mi, { children: "x" })] }), zr.map((e) => /* @__PURE__ */ j(ki, {
						type: "button",
						role: "tab",
						"aria-selected": l === e,
						$active: l === e,
						onClick: () => u(e),
						children: [e, "x"]
					}, e))]
				})] })
			] }),
			/* @__PURE__ */ j(Ni, { children: [/* @__PURE__ */ A(ri, { children: "Duration" }), /* @__PURE__ */ j(ii, {
				type: "button",
				disabled: !0,
				children: [/* @__PURE__ */ A(ai, {
					style: { fontSize: 14 },
					children: "Perpetual"
				}), /* @__PURE__ */ A("span", {
					"aria-hidden": !0,
					children: "▾"
				})]
			})] })
		] }), o && o !== "0" ? /* @__PURE__ */ j(Zr, { children: [/* @__PURE__ */ j(Pi, { children: [
			/* @__PURE__ */ j(Fi, { children: [/* @__PURE__ */ A(Ii, { children: "Estimated Entry" }), /* @__PURE__ */ A(Li, { children: g })] }),
			/* @__PURE__ */ j(Fi, { children: [/* @__PURE__ */ A(Ii, { children: "Liquidation if long" }), /* @__PURE__ */ A(Li, {
				$danger: !0,
				children: _
			})] }),
			/* @__PURE__ */ j(Fi, { children: [/* @__PURE__ */ A(Ii, { children: "Margin required" }), /* @__PURE__ */ A(Li, { children: v })] }),
			/* @__PURE__ */ j(Fi, { children: [/* @__PURE__ */ A(Ii, { children: "Opening fee" }), /* @__PURE__ */ A(Li, { children: y })] })
		] }), /* @__PURE__ */ j(Qr, { children: [/* @__PURE__ */ j(zi, {
			type: "button",
			$variant: "up",
			disabled: N,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ A(Ur, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ j(zi, {
			type: "button",
			$variant: "down",
			disabled: P,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ A(Wr, {}), S ? "..." : "DOWN"]
		})] })] }) : /* @__PURE__ */ j(Ri, { children: [/* @__PURE__ */ j(zi, {
			type: "button",
			$variant: "up",
			disabled: N,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ A(Ur, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ j(zi, {
			type: "button",
			$variant: "down",
			disabled: P,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ A(Wr, {}), S ? "..." : "DOWN"]
		})] })] }) }), /* @__PURE__ */ j(Hi, { children: [/* @__PURE__ */ j(Bi, { children: [/* @__PURE__ */ A(Vi, {
			$variant: "primary",
			onClick: T,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ A(Vi, {
			$variant: "secondary",
			onClick: E,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ j(Ui, { children: [/* @__PURE__ */ j(Wi, { children: ["Unrealized PnL ", /* @__PURE__ */ A(s, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ A(Gi, { children: D })] })] })]
	});
}, qi = D.div`
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
`, Ji = D.button`
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
`, Yi = D.span`
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
`, Xi = D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Zi = D.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Qi = D.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, $i = D.span`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  font-size: 12px;
  letter-spacing: 0.12px;
`, ea = D.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, ta = D.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, na = D.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme: e, $positive: t }) => t ? `color-mix(in srgb, ${e.colors.success} 18%, transparent)` : `color-mix(in srgb, ${e.colors.failure} 18%, transparent)`};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, ra = D(m)`
  align-items: center;
  gap: 24px;
  height: 56px;
`, ia = D.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, aa = D.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, oa = D.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, sa = () => /* @__PURE__ */ A("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", { d: "M6 2l5 8H1z" })
}), ca = () => /* @__PURE__ */ A("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ A("path", { d: "M6 10L1 2h10z" })
}), la = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c }) => {
	let l = r >= 0;
	return /* @__PURE__ */ j(qi, { children: [/* @__PURE__ */ j(Ji, {
		type: "button",
		onClick: c,
		disabled: !c,
		"aria-label": `Change market · ${t}`,
		children: [/* @__PURE__ */ A(Yi, { children: e }), /* @__PURE__ */ j(Xi, { children: [/* @__PURE__ */ j(Zi, { children: [/* @__PURE__ */ A(Qi, { children: t }), /* @__PURE__ */ A($i, { children: "Perp" })] }), /* @__PURE__ */ j(ea, { children: [/* @__PURE__ */ A(ta, { children: n }), /* @__PURE__ */ j(na, {
			$positive: l,
			children: [
				A(l ? sa : ca, {}),
				r.toFixed(2),
				"%"
			]
		})] })] })]
	}), /* @__PURE__ */ j(ra, { children: [
		/* @__PURE__ */ j(ia, { children: [/* @__PURE__ */ A(aa, { children: "24h Volume" }), /* @__PURE__ */ A(oa, { children: i })] }),
		/* @__PURE__ */ j(ia, { children: [/* @__PURE__ */ A(aa, { children: "Open Interest" }), /* @__PURE__ */ A(oa, { children: a })] }),
		/* @__PURE__ */ j(ia, { children: [/* @__PURE__ */ A(aa, { children: "Funding Rate" }), /* @__PURE__ */ A(oa, { children: o })] }),
		/* @__PURE__ */ j(ia, { children: [/* @__PURE__ */ A(aa, { children: "Next Funding" }), /* @__PURE__ */ A(oa, { children: s })] })
	] })] });
};
//#endregion
export { ne as AccountPanel, Vn as BookTradesPanel, In as ChartPanel, Ir as DepositModal, Rr as EnableTradingModal, ce as LeverageModal, ft as MarketsDropdown, hn as OrderBook, Ge as OrderConfirmModal, hr as OrderForm, xe as PerpsErrorMessage, N as PerpsPanel, En as PositionsPanel, _e as RecentTrades, Ki as SimpleBetPanel, la as SimpleTickerCard, Lt as SymbolHeader, Nn as TpSlModal, I as UnderlineTab, L as UnderlineTabs, Le as WithdrawModal };

//# sourceMappingURL=widgets.js.map