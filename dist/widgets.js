import { C as e, Gt as t, L as n, M as r, O as i, R as a, S as o, Wn as s, Y as c, k as l, r as u, t as d, tt as f, w as p, x as m, xi as h, y as g, z as _ } from "./chunks/Modal-62NRAk7R.js";
import v, { Children as y, cloneElement as b, useCallback as x, useEffect as S, useId as C, useLayoutEffect as w, useMemo as T, useRef as E, useState as D } from "react";
import O, { useTheme as k } from "styled-components";
import { Fragment as A, jsx as j, jsxs as M } from "react/jsx-runtime";
import { createPortal as N } from "react-dom";
//#region src/widgets/primitives.tsx
var P = O(n)`
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
`, F = O.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, I = O.button`
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
`, L = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ j(I, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), R = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ j(F, {
	$fullWidth: r,
	children: y.map(n, (n, i) => !n || typeof n != "object" ? n : b(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), ee = O(P)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, z = O(r).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, B = O(m)`
  justify-content: space-between;
  align-items: center;
`, te = O(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, ne = O(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, V = O.button`
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
`, re = O(m)`
  flex-direction: column;
  gap: 8px;
`, H = O(ne)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, ie = (e) => e, ae = ({ walletDisplay: t, state: n, canDeposit: i = !0, canWithdraw: a = !0, onDeposit: o, onWithdraw: s, onEnableTrading: c, t: l = ie }) => /* @__PURE__ */ M(ee, { children: [
	/* @__PURE__ */ M(m, {
		style: { gap: 8 },
		children: [/* @__PURE__ */ j(V, {
			$variant: "primary",
			onClick: o,
			disabled: !i,
			children: l("Deposit")
		}), /* @__PURE__ */ j(V, {
			$variant: "secondary",
			onClick: s,
			disabled: !a,
			children: l("Withdraw")
		})]
	}),
	n.kind === "needs-deposit" && /* @__PURE__ */ j(e, {
		variant: "warning",
		children: /* @__PURE__ */ M(m, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ j(r, {
				fontSize: "14px",
				bold: !0,
				children: l("Deposit to get started")
			}), /* @__PURE__ */ j(p, {
				fontSize: "12px",
				children: l("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
			})]
		})
	}),
	n.kind === "needs-trading" && /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(e, {
		variant: "warning",
		children: /* @__PURE__ */ M(m, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ j(r, {
				fontSize: "14px",
				bold: !0,
				children: l("Enable Trading to view your Aster balance")
			}), /* @__PURE__ */ j(p, {
				fontSize: "12px",
				children: l("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
			})]
		})
	}), /* @__PURE__ */ j(_, {
		onClick: c,
		scale: "sm",
		variant: "primary",
		children: l("Enable Trading")
	})] }),
	n.kind === "ready" && /* @__PURE__ */ M(re, { children: [
		/* @__PURE__ */ j(z, { children: l("Account Equity") }),
		/* @__PURE__ */ M(B, { children: [/* @__PURE__ */ j(te, { children: l("Wallet") }), /* @__PURE__ */ j(ne, { children: t ?? "—" })] }),
		/* @__PURE__ */ M(B, { children: [/* @__PURE__ */ j(te, { children: l("Equity") }), /* @__PURE__ */ j(ne, { children: n.equity || "—" })] }),
		/* @__PURE__ */ M(B, { children: [/* @__PURE__ */ j(te, { children: l("Available") }), /* @__PURE__ */ j(ne, { children: n.available || "—" })] }),
		/* @__PURE__ */ M(B, { children: [/* @__PURE__ */ j(te, { children: l("Unrealized PnL") }), /* @__PURE__ */ j(H, {
			$sign: n.pnlSign,
			children: n.unrealizedPnl || "—"
		})] }),
		/* @__PURE__ */ M(B, { children: [/* @__PURE__ */ j(te, { children: l("Margin mode") }), /* @__PURE__ */ j(ne, { children: n.marginMode ?? l("Cross") })] })
	] })
] });
//#endregion
//#region src/widgets/BunnySlider.tsx
function oe({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = E(null), [u, d] = D(0);
	w(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 0 + Math.max(0, u - 32) * p, h = m + 9, g = Math.max(0, h - 8), _ = p >= .999;
	return /* @__PURE__ */ M("div", {
		ref: l,
		className: "bs-root",
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ j("span", { className: "bs-track" }),
			/* @__PURE__ */ j("span", { className: "bs-back" }),
			/* @__PURE__ */ j("span", {
				className: "bs-fill",
				style: { width: g }
			}),
			/* @__PURE__ */ j("span", {
				className: `bs-front${_ ? " bs-front--max" : ""}`,
				style: { left: m }
			}),
			/* @__PURE__ */ j("input", {
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
			s && /* @__PURE__ */ j("span", {
				className: "bs-value-label",
				style: { left: m + 32 / 2 },
				children: _ ? "MAX" : s
			})
		]
	});
}
//#endregion
//#region src/widgets/LeverageModal.tsx
var se = O(m)`
  gap: 10px;
  align-items: stretch;
`, ce = O(_).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, le = O(m)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, ue = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, de = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: i = 1, maxLeverage: a = 100, availableBalance: s, onConfirm: c, onClose: l, isSubmitting: f = !1, errorSlot: p, t: h = ue }) => {
	let [g, v] = D(n);
	S(() => {
		e && v(n);
	}, [e, n]);
	let y = (e) => Math.max(i, Math.min(a, Math.round(e))), b = s * g;
	return /* @__PURE__ */ j(u, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ j(d, {
			title: h("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: l,
			children: /* @__PURE__ */ M(m, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ M(se, { children: [
						/* @__PURE__ */ j(ce, {
							onClick: () => v((e) => y(e - 1)),
							disabled: g <= i,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ M(le, { children: [g, "X"] }),
						/* @__PURE__ */ j(ce, {
							onClick: () => v((e) => y(e + 1)),
							disabled: g >= a,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ j(oe, {
						name: "perp-leverage",
						min: i,
						max: a,
						value: g,
						onValueChanged: (e) => v(y(e)),
						width: "100%"
					}),
					/* @__PURE__ */ M(o, { children: [/* @__PURE__ */ j(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: h("Maximum position at current leverage:")
					}), /* @__PURE__ */ j(r, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(b) && b > 0 ? `${b.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: h("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					p,
					/* @__PURE__ */ j(_, {
						scale: "md",
						disabled: f,
						onClick: () => c(g),
						children: h(f ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, fe = O.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, pe = O.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, me = O.div`
  overflow-y: auto;
  min-height: 0;
`, he = O.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, ge = O.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, _e = O.span`
  text-align: right;
`, ve = O(_e)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ye = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, be = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = T(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ M(A, { children: [
		t && /* @__PURE__ */ j(fe, { children: t }),
		/* @__PURE__ */ M(pe, { children: [
			/* @__PURE__ */ j("span", { children: o }),
			/* @__PURE__ */ j("span", {
				style: { textAlign: "right" },
				children: s
			}),
			/* @__PURE__ */ j("span", {
				style: { textAlign: "right" },
				children: c
			})
		] }),
		/* @__PURE__ */ j(me, { children: a.map((e) => /* @__PURE__ */ M(he, { children: [
			/* @__PURE__ */ j(ge, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ j(_e, { children: e.size }),
			/* @__PURE__ */ j(ve, { children: ye(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ j("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ j(P, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, xe = O(o)`
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
`, Se = O(_).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Ce = (e) => e, we = ({ variant: t, title: n, message: i, details: a, t: o = Ce }) => {
	let [s, c] = D(!1);
	return n ? /* @__PURE__ */ j(e, {
		variant: t,
		children: /* @__PURE__ */ M(m, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ j(p, { children: /* @__PURE__ */ j(r, {
					fontSize: "13px",
					bold: !0,
					children: n
				}) }),
				/* @__PURE__ */ j(p, { children: /* @__PURE__ */ j(r, {
					fontSize: "12px",
					children: i
				}) }),
				a && /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(Se, {
					onClick: () => c((e) => !e),
					children: o(s ? "Hide details" : "Show details")
				}), s && /* @__PURE__ */ j(xe, { children: a })] })
			]
		})
	}) : /* @__PURE__ */ j(e, {
		variant: t,
		children: /* @__PURE__ */ j(p, { children: i })
	});
}, Te = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ee = O(m)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, De = O(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Oe = O(m)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, ke = O.button`
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
`, Ae = O(m)`
  flex-direction: column;
`, je = O.div`
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
`, Me = O(m)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, Ne = O.input`
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
`, Pe = O(m)`
  gap: 6px;
  margin-top: 4px;
`, Fe = O.button`
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
`, Ie = O.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Le = O(m)`
  justify-content: space-between;
  align-items: center;
`, Re = O(m)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, ze = [
	25,
	50,
	75
], Be = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: i, selectedAssetId: a, onSelectAsset: s, selectedAsset: c, destinationAddress: l, destinationChainName: p = "BSC", feeText: h, amount: g, onAmountChange: v, onPercentClick: y, onBack: b, onWithdraw: x, onClose: S, isSubmitting: C = !1, canSubmit: w = !0, errorSlot: T, t: E = Te, renderTokenIcon: D }) => {
	let O = (e, t = 24) => D ? D(e, t) : /* @__PURE__ */ j(je, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ j(u, {
		isOpen: e,
		onDismiss: S,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ j(d, {
			title: t === "select" ? E("Withdraw from Aster") : E("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: S,
			children: /* @__PURE__ */ M(Ee, { children: [
				t === "amount" && /* @__PURE__ */ j(m, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ j(_, {
						scale: "sm",
						variant: "text",
						onClick: b,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ j(f, { width: "18px" }),
						children: E("Back")
					})
				}),
				t === "select" && /* @__PURE__ */ M(A, { children: [
					/* @__PURE__ */ M(o, { children: [/* @__PURE__ */ j(De, {
						color: "textSubtle",
						children: E("Select asset")
					}), /* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: E("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ j(r, {
						fontSize: "12px",
						children: E("Loading assets...")
					}),
					!n && i.length === 0 && /* @__PURE__ */ M(Re, { children: [/* @__PURE__ */ j(r, {
						fontSize: "14px",
						bold: !0,
						children: E("Nothing to withdraw yet")
					}), /* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: E("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					i.length > 0 && /* @__PURE__ */ j(Oe, { children: i.map((e) => /* @__PURE__ */ M(ke, {
						$selected: a === e.id,
						onClick: () => s(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ M(m, {
							alignItems: "center",
							style: { gap: 12 },
							children: [O(e, 32), /* @__PURE__ */ M(Ae, { children: [/* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ j(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: E("Withdrawable")
							})] })]
						}), /* @__PURE__ */ M(m, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ j(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && c && /* @__PURE__ */ M(A, { children: [
					/* @__PURE__ */ M(Me, { children: [/* @__PURE__ */ M(m, {
						alignItems: "center",
						style: { gap: 12 },
						children: [O(c, 40), /* @__PURE__ */ M(m, {
							flexDirection: "column",
							children: [/* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								children: c.displayName || c.symbol
							}), /* @__PURE__ */ j(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: E("Withdrawable: %amt% %sym%", {
									amt: c.withdrawableText,
									sym: c.symbol
								})
							})]
						})]
					}), /* @__PURE__ */ M(m, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ j(Ne, {
							value: g,
							onChange: (e) => v(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), y && /* @__PURE__ */ M(Pe, { children: [ze.map((e) => /* @__PURE__ */ M(Fe, {
							onClick: () => y(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ j(Fe, {
							onClick: () => y(100),
							children: E("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ M(Ie, { children: [
						/* @__PURE__ */ M(Le, { children: [/* @__PURE__ */ j(De, {
							color: "textSubtle",
							children: E("Destination")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ M(Le, { children: [/* @__PURE__ */ j(De, {
							color: "textSubtle",
							children: E("Network")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							children: p
						})] }),
						/* @__PURE__ */ M(Le, { children: [/* @__PURE__ */ j(De, {
							color: "textSubtle",
							children: E("Token")
						}), /* @__PURE__ */ M(m, {
							alignItems: "center",
							style: { gap: 6 },
							children: [O(c, 16), /* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ M(Le, { children: [/* @__PURE__ */ j(De, {
							color: "textSubtle",
							children: E("Fee")
						}), /* @__PURE__ */ M(r, {
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
					/* @__PURE__ */ j(_, {
						onClick: x,
						disabled: !w || !g || C,
						isLoading: C,
						scale: "md",
						children: E(C ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ j(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: E("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, U = O(m)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  &:last-of-type {
    border-bottom: 0;
  }
`, W = O(r).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, G = O(r).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Ve = O(m)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, He = O.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, Ue = O(G)`
  color: ${({ theme: e }) => e.colors.failure};
`, We = O(_)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, Ge = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ke = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", qe = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, Je = ({ isOpen: e, details: t, onConfirm: n, onClose: i, onSkipFutureChange: a, t: s = Ge }) => {
	let [c, f] = D(!1);
	return /* @__PURE__ */ j(u, {
		isOpen: e,
		onDismiss: i,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ j(d, {
			title: s("Confirm Order"),
			onDismiss: i,
			children: /* @__PURE__ */ M(m, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Symbol") }), /* @__PURE__ */ j(G, { children: t.symbol })] }),
					/* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Side / Type") }), /* @__PURE__ */ M(G, { children: [
						/* @__PURE__ */ j(He, {
							$side: t.side,
							children: t.side === "BUY" ? s("Buy / Long") : s("Sell / Short")
						}),
						" · ",
						qe(t.type, s)
					] })] }),
					/* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Size") }), /* @__PURE__ */ M(G, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Price") }), /* @__PURE__ */ M(G, { children: [
						Ke(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Trigger Price") }), /* @__PURE__ */ M(G, { children: [
						Ke(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Leverage") }), /* @__PURE__ */ M(G, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Cost") }), /* @__PURE__ */ j(G, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Est. Liq. Price") }), /* @__PURE__ */ j(Ue, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ M(U, { children: [/* @__PURE__ */ j(W, { children: s("Reduce Only") }), /* @__PURE__ */ j(G, { children: s("Yes") })] }),
					/* @__PURE__ */ M(Ve, { children: [/* @__PURE__ */ j(l, {
						scale: "sm",
						checked: c,
						onChange: (e) => f(e.target.checked)
					}), /* @__PURE__ */ j(r, {
						fontSize: "12px",
						children: s("Don't show this again")
					})] }),
					/* @__PURE__ */ j(o, {
						mt: "8px",
						children: /* @__PURE__ */ j(We, {
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
}, Ye = O.div`
  width: 100%;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  max-height: 420px;
  display: flex;
  flex-direction: column;
`, Xe = O(m)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ze = O.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, Qe = O.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, $e = O.input`
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
`, et = O.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, tt = O.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, nt = O.button`
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
`, rt = O.button`
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
`, it = O(m)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
`, at = O.span`
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
`, ot = O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, K = O(r)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, st = O(m)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ct = ({ filled: e }) => /* @__PURE__ */ j("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: e ? "currentColor" : "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinejoin: "round",
	strokeLinecap: "round",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), lt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, ut = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, dt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, ft = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), pt = (e) => ft(e).slice(0, 1) || e.slice(0, 1), mt = (e) => e, ht = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: i, logoForSymbol: a, isLoading: o = !1, t: s = mt }) => {
	let [c, l] = D("all"), [u, d] = D(""), f = T(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ M(Ye, { children: [
		/* @__PURE__ */ M(Xe, { children: [/* @__PURE__ */ j(Ze, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ j(Ze, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ M(Qe, { children: [/* @__PURE__ */ j(h, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ j($e, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ M(et, { children: [
			/* @__PURE__ */ j("span", {}),
			/* @__PURE__ */ j("span", { children: s("Symbols") }),
			/* @__PURE__ */ j(K, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ j(K, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ j(K, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ j(tt, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ j(st, { children: /* @__PURE__ */ j(r, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let r = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(ft(e.symbol));
				return /* @__PURE__ */ M(nt, {
					onClick: () => i(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ j(rt, {
							$filled: r,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(r ? "Unfavorite" : "Favorite"),
							"aria-pressed": r,
							children: /* @__PURE__ */ j(ct, { filled: r })
						}),
						/* @__PURE__ */ M(it, { children: [/* @__PURE__ */ j(at, { children: c ? /* @__PURE__ */ j(ot, {
							src: c,
							alt: ft(e.symbol),
							loading: "lazy",
							onError: (t) => {
								let n = t.currentTarget;
								n.style.display = "none";
								let r = n.parentElement;
								r && !r.textContent && (r.textContent = pt(e.symbol));
							}
						}) : pt(e.symbol) }), /* @__PURE__ */ j("span", { children: e.symbol })] }),
						/* @__PURE__ */ j(K, { children: lt(e.lastPrice) }),
						/* @__PURE__ */ j(K, {
							$tone: o >= 0 ? "up" : "down",
							children: ut(e.priceChangePercent)
						}),
						/* @__PURE__ */ j(K, { children: dt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, gt = O(m)`
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
`, _t = O(m)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, vt = O.button`
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
`, yt = O.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, bt = O.button`
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
`, xt = O.span`
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
`, St = O.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Ct = O(r)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`, wt = O.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`, Tt = O.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Et = O(m)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Dt = O(m)`
  flex-direction: column;
  flex-shrink: 0;
`, Ot = O(r)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, kt = O(r)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, At = O(m)`
  align-items: baseline;
  white-space: nowrap;
`, jt = O.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Mt = O.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, Nt = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Pt = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Ft = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, It = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, Lt = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", Rt = () => /* @__PURE__ */ j("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), zt = (e) => e, Bt = ({ symbol: e, pairLabel: n, logoUrl: r, leverage: i, lastPrice: a, markPrice: o, indexPrice: s, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, t: h = zt }) => {
	let g = k(), [_, v] = D(!1), [y, b] = D(null), C = E(null), T = E(null);
	w(() => {
		if (!_ || !C.current) return;
		let e = () => {
			let e = C.current.getBoundingClientRect();
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
			C.current?.contains(t) || T.current?.contains(t) || v(!1);
		}, t = (e) => {
			e.key === "Escape" && v(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [_]);
	let O = x(() => v(!1), []), A = Number(c) < 0, P = Number(u) < 0;
	return /* @__PURE__ */ M(gt, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ M(_t, { children: [p && /* @__PURE__ */ j(bt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": h(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ j(Rt, {})
			}), /* @__PURE__ */ M(vt, {
				ref: C,
				"aria-haspopup": "listbox",
				"aria-expanded": _,
				disabled: !m,
				onClick: () => m && v((e) => !e),
				children: [
					/* @__PURE__ */ j(xt, {
						$bg: r ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: r ? /* @__PURE__ */ j(St, {
							src: r,
							alt: n
						}) : Lt(n)
					}),
					/* @__PURE__ */ j(Ct, { children: n }),
					/* @__PURE__ */ j(t, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			_ && y && typeof document < "u" && m ? N(/* @__PURE__ */ j(yt, {
				ref: T,
				style: {
					top: y.top,
					left: y.left
				},
				children: m(O)
			}), document.body) : null,
			/* @__PURE__ */ M(wt, { children: [i, "x"] }),
			/* @__PURE__ */ j(Tt, {
				"aria-label": `Last price: ${a ?? ""}`,
				children: a ?? "—"
			}),
			/* @__PURE__ */ M(Et, {
				role: "list",
				children: [
					/* @__PURE__ */ M(Dt, {
						role: "listitem",
						children: [/* @__PURE__ */ j(Ot, {
							$dashed: !0,
							children: h("Mark")
						}), /* @__PURE__ */ j(kt, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ M(Dt, {
						role: "listitem",
						children: [/* @__PURE__ */ j(Ot, {
							$dashed: !0,
							children: h("Index")
						}), /* @__PURE__ */ j(kt, { children: s ?? "—" })]
					}),
					/* @__PURE__ */ M(Dt, {
						role: "listitem",
						children: [/* @__PURE__ */ j(Ot, {
							$dashed: !0,
							children: h("Funding / Countdown")
						}), /* @__PURE__ */ M(At, { children: [
							/* @__PURE__ */ j(jt, {
								$negative: A,
								children: Nt(c)
							}),
							/* @__PURE__ */ j(Mt, { children: "/" }),
							/* @__PURE__ */ j(kt, {
								as: "span",
								children: Ft(l)
							})
						] })]
					}),
					/* @__PURE__ */ M(Dt, {
						role: "listitem",
						children: [/* @__PURE__ */ j(Ot, { children: h("24h Change") }), /* @__PURE__ */ j(kt, {
							style: { color: u ? P ? g.colors.failure : g.colors.success : void 0 },
							children: Pt(u)
						})]
					}),
					/* @__PURE__ */ M(Dt, {
						role: "listitem",
						children: [/* @__PURE__ */ j(Ot, { children: h("24h Volume (USDT)") }), /* @__PURE__ */ j(kt, { children: It(d) })]
					})
				]
			})
		]
	});
}, q = 10, Vt = 27, Ht = O(m)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, Ut = O(m)`
  gap: 5px;
`, Wt = O.button`
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
`, Gt = O.div`
  position: relative;
`, Kt = O.button`
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
`, qt = O.div`
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
`, Jt = O.button`
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
`, Yt = O(m)`
  align-items: center;
  gap: 2px;
`, Xt = O.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, Zt = O.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, Qt = O.div`
  height: ${({ $size: e }) => e === "full" ? q * 2 * Vt : q * Vt}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, $t = O.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${Vt}px;
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
`, en = O.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? t.colors.success : t.colors.failure};
`, tn = O.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, nn = O.div`
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
`, rn = O.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, an = O.span`
  text-align: center;
`, on = O.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, sn = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, cn = [
	100,
	50,
	10,
	1
], ln = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, un = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), dn = (e, t) => {
	let n = [];
	for (let e of cn) t > e * 10 && n.push(String(e));
	let r = un(e);
	for (let e = 1; e <= r; e++) n.push(ln(e));
	return n;
}, fn = (e, t) => {
	S(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, pn = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = D(!1), o = E(null);
	return fn(o, () => a(!1)), /* @__PURE__ */ M(Gt, {
		ref: o,
		children: [/* @__PURE__ */ M(Kt, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ j(qt, { children: t.map((e) => /* @__PURE__ */ j(Jt, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, mn = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ M("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ j("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "6",
			stroke: t
		}),
		/* @__PURE__ */ j("rect", {
			x: "0.5",
			y: "8.5",
			width: "6",
			height: "6",
			stroke: e
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: n
		})
	]
}), hn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ M("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ j("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), gn = ({ askColor: e, listColor: t }) => /* @__PURE__ */ M("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ j("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ j("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), _n = (e) => e, vn = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = _n }) => {
	let g = k(), _ = d === "QUOTE" ? r : n, v = T(() => dn(i, o), [i, o]);
	S(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = T(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = sn(e, "ask", i, r, a), s = sn(t, "bid", i, r, a), c = q * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
	}, x = T(() => b([...y.asks].reverse()).reverse(), [y.asks, d]), C = T(() => b(y.bids), [y.bids, d]), w = T(() => {
		let e = x[0]?.total ?? 0, t = C[C.length - 1]?.total ?? 0;
		return Math.max(e, t, 1);
	}, [x, C]), E = (e, t) => {
		let n = e === "bid" ? g.colors.success : g.colors.failure, r = Math.max(0, Math.min(100, t * 100)).toFixed(2);
		return { background: `linear-gradient(to right, ${`color-mix(in srgb, ${n} 60%, transparent)`} 0%, ${`color-mix(in srgb, ${n} 20%, transparent)`} ${r}%, transparent ${r}%, transparent 100%)` };
	}, D = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), O = /* @__PURE__ */ M(A, { children: [
		/* @__PURE__ */ M(Ht, { children: [/* @__PURE__ */ M(Ut, { children: [
			/* @__PURE__ */ j(Wt, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ j(mn, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ j(Wt, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ j(hn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ j(Wt, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ j(gn, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ M(Yt, { children: [/* @__PURE__ */ j(pn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ j(pn, {
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
		/* @__PURE__ */ M(Xt, { children: [
			/* @__PURE__ */ M("span", { children: [
				h("Price"),
				" (",
				r,
				")"
			] }),
			/* @__PURE__ */ M("span", {
				style: { textAlign: "center" },
				children: [
					h("Amount"),
					" (",
					_,
					")"
				]
			}),
			/* @__PURE__ */ M("span", {
				style: { textAlign: "right" },
				children: [
					h("SUM"),
					" (",
					_,
					")"
				]
			})
		] }),
		/* @__PURE__ */ M(Zt, { children: [
			s !== "bids" && /* @__PURE__ */ j(Qt, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - q)).map((e) => /* @__PURE__ */ M($t, {
					$side: "ask",
					style: E("ask", e.total / w),
					children: [
						/* @__PURE__ */ j(en, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ j(tn, {
							$align: "center",
							children: D(Number(e.qty))
						}),
						/* @__PURE__ */ j(tn, {
							$align: "right",
							children: D(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ M(nn, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ j(rn, { children: h("Spread") }),
					/* @__PURE__ */ j(an, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ j(on, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ j(Qt, {
				$size: s === "bids" ? "full" : "half",
				children: C.slice(0, s === "bids" ? q * 2 : q).map((e) => /* @__PURE__ */ M($t, {
					$side: "bid",
					style: E("bid", e.total / w),
					children: [
						/* @__PURE__ */ j(en, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ j(tn, {
							$align: "center",
							children: D(Number(e.qty))
						}),
						/* @__PURE__ */ j(tn, {
							$align: "right",
							children: D(e.total)
						})
					]
				}, `b-${e.price}`))
			})
		] })
	] });
	return m ? /* @__PURE__ */ j("div", {
		style: p ? { display: "none" } : { display: "contents" },
		children: O
	}) : /* @__PURE__ */ j(P, {
		style: p ? { display: "none" } : void 0,
		children: O
	});
}, yn = O(P)`
  flex: 1;
  min-height: 200px;
`, bn = O.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, xn = O(m)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, Sn = O.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 1fr)) auto;
  gap: 6px 16px;
  font-variant-numeric: tabular-nums;
`, Cn = O(m)`
  gap: 6px;
  align-items: center;
`, wn = O.div`
  font-size: 11px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 2px;
`, Tn = O.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, En = O.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(min-content, 1fr)) auto;
  gap: 6px 16px;
  font-variant-numeric: tabular-nums;
`, J = O(r).attrs({
	fontSize: "10px",
	color: "textSubtle"
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Y = O(r).attrs({ fontSize: "12px" })`
  font-variant-numeric: tabular-nums;
`, Dn = (e) => e, On = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: i, closingSymbol: a, t: o }) => {
	let s = k(), c = t?.(e.symbol), l = e.positionAmt >= 0 ? "BUY" : "SELL", u = Number.isFinite(c) && Number.isFinite(e.entryPrice) ? (c - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), d = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: l,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, f = a === e.symbol;
	return /* @__PURE__ */ M(A, { children: [
		/* @__PURE__ */ j(Y, {
			bold: !0,
			children: e.symbol
		}),
		/* @__PURE__ */ j(Y, {
			style: { color: l === "BUY" ? s.colors.success : s.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ j(Y, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ j(Y, { children: c !== void 0 && Number.isFinite(c) ? c.toFixed(2) : "—" }),
		/* @__PURE__ */ M(Y, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ j(Y, { children: d ? d.toFixed(2) : "—" }),
		/* @__PURE__ */ j(Y, {
			style: { color: u >= 0 ? s.colors.success : s.colors.failure },
			children: Number.isFinite(u) ? u.toFixed(4) : "—"
		}),
		/* @__PURE__ */ M(wn, { children: [/* @__PURE__ */ M(Tn, {
			$kind: "tp",
			children: [
				o("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ M(Tn, {
			$kind: "sl",
			children: [
				o("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ M(Cn, { children: [/* @__PURE__ */ j(_, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => i(e, c ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: o("TP/SL")
		}), /* @__PURE__ */ j(_, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: f || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: f,
			children: o("Close")
		})] })
	] });
}, kn = ({ tab: e, onTabChange: t, positions: n, openOrders: i, useMarkPriceForSymbol: a, computeLiqPrice: o, onClosePosition: s, onEditTpSl: c, onCancelOrder: l, closingSymbol: u = null, t: d = Dn }) => {
	let f = k(), p = [
		"positions",
		"orders",
		"history"
	];
	return /* @__PURE__ */ M(yn, { children: [/* @__PURE__ */ M(R, {
		activeIndex: p.indexOf(e),
		onItemClick: (e) => t(p[e]),
		children: [
			/* @__PURE__ */ M(L, { children: [
				d("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ M(L, { children: [
				d("Open Orders"),
				" (",
				i.length,
				")"
			] }),
			/* @__PURE__ */ j(L, { children: d("History") })
		]
	}), /* @__PURE__ */ M(bn, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ j(xn, { children: /* @__PURE__ */ j(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: d("No open positions")
		}) }) : /* @__PURE__ */ M(Sn, { children: [
			/* @__PURE__ */ j(J, { children: d("Symbol") }),
			/* @__PURE__ */ j(J, { children: d("Size") }),
			/* @__PURE__ */ j(J, { children: d("Entry") }),
			/* @__PURE__ */ j(J, { children: d("Mark") }),
			/* @__PURE__ */ j(J, { children: d("Lev") }),
			/* @__PURE__ */ j(J, { children: d("Liq") }),
			/* @__PURE__ */ j(J, { children: d("uPnL") }),
			/* @__PURE__ */ j(J, { children: d("TP/SL") }),
			/* @__PURE__ */ j(J, {}),
			n.map((e) => /* @__PURE__ */ j(v.Fragment, { children: /* @__PURE__ */ j(On, {
				p: e,
				useMarkPriceForSymbol: a,
				computeLiqPrice: o,
				onClose: s,
				onEditTpSl: c,
				closingSymbol: u,
				t: d
			}) }, e.id))
		] })),
		e === "orders" && (i.length === 0 ? /* @__PURE__ */ j(xn, { children: /* @__PURE__ */ j(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: d("No open orders")
		}) }) : /* @__PURE__ */ M(En, { children: [
			/* @__PURE__ */ j(J, { children: d("Symbol") }),
			/* @__PURE__ */ j(J, { children: d("Side") }),
			/* @__PURE__ */ j(J, { children: d("Type") }),
			/* @__PURE__ */ j(J, { children: d("Price") }),
			/* @__PURE__ */ j(J, { children: d("Size") }),
			/* @__PURE__ */ j(J, { children: d("Filled") }),
			/* @__PURE__ */ j(J, { children: d("Status") }),
			/* @__PURE__ */ j(J, {}),
			i.map((e) => /* @__PURE__ */ M(v.Fragment, { children: [
				/* @__PURE__ */ j(Y, {
					bold: !0,
					children: e.symbol
				}),
				/* @__PURE__ */ j(Y, {
					style: { color: e.side === "BUY" ? f.colors.success : f.colors.failure },
					children: e.side
				}),
				/* @__PURE__ */ j(Y, { children: e.type }),
				/* @__PURE__ */ j(Y, { children: e.price }),
				/* @__PURE__ */ j(Y, { children: e.origQty }),
				/* @__PURE__ */ j(Y, { children: e.executedQty }),
				/* @__PURE__ */ j(Y, { children: e.status }),
				/* @__PURE__ */ j(_, {
					scale: "xs",
					variant: "secondary",
					onClick: () => l(e),
					children: d("Cancel")
				})
			] }, e.id))
		] })),
		e === "history" && /* @__PURE__ */ j(xn, { children: /* @__PURE__ */ j(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: d("History coming soon")
		}) })
	] })] });
}, An = O(m)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ theme: e }) => e.colors.input};
`, jn = O(m)`
  gap: 8px;
`, Mn = O(r).attrs({
	fontSize: "11px",
	color: "textSubtle"
})``, Nn = O(i)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, Pn = O(m)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, Fn = (e) => e, In = ({ isOpen: e, symbol: t, positionSide: n, qty: i, entryPrice: a, markPrice: s, onConfirm: c, onClose: l, t: f = Fn }) => {
	let p = k(), h = n === "LONG" ? 1 : -1, [g, v] = D(""), [y, b] = D(""), [x, C] = D(""), [w, E] = D(""), [O, A] = D(!1);
	S(() => {
		e || (v(""), b(""), C(""), E(""));
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
		E(Number.isFinite(t) && e !== "" ? F(P(t), 4) : "");
	}, ee = (e) => {
		E(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? C(F(N(t), 2)) : E("");
	}, z = T(() => {
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
	]), B = !O && (g !== "" || x !== "") && !z;
	return /* @__PURE__ */ j(u, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ j(d, {
			title: f("Set TP / SL"),
			onDismiss: l,
			children: /* @__PURE__ */ M(m, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ M(Pn, { children: [/* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Symbol")
					}), /* @__PURE__ */ M(r, {
						fontSize: "12px",
						bold: !0,
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ M(Pn, { children: [/* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Entry")
					}), /* @__PURE__ */ j(r, {
						fontSize: "12px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(a) ? a.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ M(Pn, { children: [/* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Mark")
					}), /* @__PURE__ */ j(r, {
						fontSize: "12px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(s) ? s.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ M(An, { children: [/* @__PURE__ */ j(r, {
						fontSize: "13px",
						bold: !0,
						color: p.colors.success,
						children: f("Take Profit")
					}), /* @__PURE__ */ M(jn, { children: [/* @__PURE__ */ M(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ j(Mn, { children: f("Trigger Price") }), /* @__PURE__ */ j(Nn, {
							value: g,
							onChange: (e) => I(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ M(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ j(Mn, { children: f("PnL (USDT)") }), /* @__PURE__ */ j(Nn, {
							value: y,
							onChange: (e) => L(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ M(An, { children: [/* @__PURE__ */ j(r, {
						fontSize: "13px",
						bold: !0,
						color: p.colors.failure,
						children: f("Stop Loss")
					}), /* @__PURE__ */ M(jn, { children: [/* @__PURE__ */ M(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ j(Mn, { children: f("Trigger Price") }), /* @__PURE__ */ j(Nn, {
							value: x,
							onChange: (e) => R(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ M(o, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ j(Mn, { children: f("PnL (USDT)") }), /* @__PURE__ */ j(Nn, {
							value: w,
							onChange: (e) => ee(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					z && /* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "failure",
						children: z
					}),
					/* @__PURE__ */ j(_, {
						onClick: async () => {
							if (B) {
								A(!0);
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
									A(!1);
								}
							}
						},
						disabled: !B,
						isLoading: O,
						scale: "md",
						children: f("Confirm")
					})
				]
			})
		})
	});
}, Ln = O(P)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, Rn = (e) => typeof e == "number" ? `${e}px` : e, zn = ({ children: e, minHeight: t = "420px" }) => /* @__PURE__ */ j(Ln, {
	$minHeight: Rn(t),
	children: e
}), Bn = O(P)`
  height: 100%;
`, Vn = O.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, Hn = O.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, Un = (e) => e, Wn = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = Un }) => /* @__PURE__ */ M(Bn, { children: [/* @__PURE__ */ M(R, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ j(L, { children: i("Order Book") }), /* @__PURE__ */ j(L, { children: i("Trades") })]
}), /* @__PURE__ */ M(Vn, { children: [/* @__PURE__ */ j(Hn, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ j(Hn, {
	$hidden: e !== "trades",
	children: r
})] })] }), Gn = O(P)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, Kn = O(m)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, qn = O.button`
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
`, Jn = O(m)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, Yn = O.button`
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
`, Xn = O.button`
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
`, Zn = O(m)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, Qn = O(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, $n = O(m)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, er = O.div`
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
`, tr = O(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, nr = O.input`
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
`, rr = O(_).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, ir = O.div`
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
`, ar = O.input`
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
`, or = O.button`
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
`, sr = O.div`
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
`, cr = O.button`
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
`, lr = O.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, ur = O(i)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, dr = O.div`
  padding: 4px 0;
`, fr = O(m)`
  gap: 8px;
`, pr = O(_)`
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
`, mr = O.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, hr = O(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, gr = O(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, _r = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, vr = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: i, typeKey: s, onTypeKeyChange: u, availableBalanceText: d, preview: f, feeText: p, sizePercent: h, onSizePercentChange: _, cta: v, canSubmit: y, isSubmitting: b = !1, marginSubmitting: x = !1, authReady: C = !0, hasAddress: w = !0, errorSlot: T, onSubmit: O, onLeverageClick: k, onMarginModeToggle: P, onDepositClick: F, t: I = _r }) => {
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
	}), B = s === "stop-limit" || s === "stop-market", te = s === "limit" || s === "stop-limit", ne = B, V = E(null), re = E(null), [H, ie] = D(!1), [ae, oe] = D({
		top: 0,
		left: 0
	});
	S(() => {
		if (!H || !V.current || !re.current) return;
		let e = V.current.getBoundingClientRect(), t = re.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		oe({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [H]), S(() => {
		if (!H) return;
		let e = (e) => {
			let t = e.target;
			V.current && !V.current.contains(t) && re.current && !re.current.contains(t) && ie(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [H]);
	let se = B, ce = s === "stop-market" ? `${I("Stop Market")} ▾` : `${I("Stop Limit")} ▾`, le = () => {
		ie((e) => !e);
	}, ue = (e) => {
		u(e), ie(!1);
	};
	return /* @__PURE__ */ M(Gn, { children: [
		/* @__PURE__ */ M(Kn, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ j(qn, {
				$active: s === e,
				onClick: () => u(e),
				children: I(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ j(qn, {
				ref: V,
				$active: se,
				onClick: le,
				"aria-haspopup": "menu",
				"aria-expanded": H,
				children: ce
			}),
			H && typeof document < "u" && N(/* @__PURE__ */ M(sr, {
				ref: re,
				style: {
					top: ae.top,
					left: ae.left
				},
				role: "menu",
				children: [/* @__PURE__ */ j(cr, {
					$active: s === "stop-limit",
					role: "menuitem",
					onClick: () => ue("stop-limit"),
					children: I("Stop Limit")
				}), /* @__PURE__ */ j(cr, {
					$active: s === "stop-market",
					role: "menuitem",
					onClick: () => ue("stop-market"),
					children: I("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ M(Jn, { children: [/* @__PURE__ */ j(Yn, {
			$active: n.side === "BUY",
			$side: "BUY",
			onClick: () => R("BUY"),
			children: I("Buy")
		}), /* @__PURE__ */ j(Yn, {
			$active: n.side === "SELL",
			$side: "SELL",
			onClick: () => R("SELL"),
			children: I("Sell")
		})] }),
		/* @__PURE__ */ M(m, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ j(Xn, {
				disabled: x,
				onClick: P,
				title: I("Margin mode"),
				children: n.marginMode === "CROSS" ? I("Cross") : I("Isolated")
			}), /* @__PURE__ */ M(Xn, {
				onClick: k,
				title: I("Leverage"),
				children: [n.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ M(Zn, { children: [/* @__PURE__ */ j(Qn, { children: I("Avbl") }), /* @__PURE__ */ M($n, { children: [/* @__PURE__ */ M(r, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				d,
				" ",
				t
			]
		}), /* @__PURE__ */ j(a, {
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
			children: /* @__PURE__ */ j(c, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		ne && /* @__PURE__ */ M(ir, { children: [
			/* @__PURE__ */ j(tr, { children: I("Stop") }),
			/* @__PURE__ */ j(ar, {
				value: n.stopPrice,
				onChange: (e) => i({
					...n,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": I("Stop price")
			}),
			/* @__PURE__ */ M(or, {
				type: "button",
				onClick: () => i({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: I("Trigger source"),
				children: [n.stopPriceSource === "MARK" ? I("Mark") : I("Last"), " ▾"]
			})
		] }),
		te && /* @__PURE__ */ M(ir, { children: [
			/* @__PURE__ */ j(tr, { children: I("Price") }),
			/* @__PURE__ */ j(ar, {
				value: n.price,
				onChange: (e) => i({
					...n,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": I("Limit price")
			}),
			/* @__PURE__ */ j(rr, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: t
			})
		] }),
		s === "stop-limit" && /* @__PURE__ */ M(ir, { children: [
			/* @__PURE__ */ j(tr, { children: I("TIF") }),
			/* @__PURE__ */ j(m, { flex: 1 }),
			/* @__PURE__ */ M(lr, {
				value: n.timeInForce === "GTX" ? "GTC" : n.timeInForce,
				onChange: (e) => i({
					...n,
					timeInForce: e.target.value
				}),
				"aria-label": I("Time in force"),
				children: [
					/* @__PURE__ */ j("option", {
						value: "GTC",
						children: "GTC"
					}),
					/* @__PURE__ */ j("option", {
						value: "IOC",
						children: "IOC"
					}),
					/* @__PURE__ */ j("option", {
						value: "FOK",
						children: "FOK"
					})
				]
			})
		] }),
		/* @__PURE__ */ M(er, { children: [
			/* @__PURE__ */ j(tr, { children: I("Size") }),
			/* @__PURE__ */ j(nr, {
				value: n.quantity,
				onChange: (e) => i({
					...n,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ M(rr, {
				onClick: ee,
				title: I("Toggle unit"),
				children: [L, " ▾"]
			})
		] }),
		/* @__PURE__ */ j(dr, { children: /* @__PURE__ */ j(g, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: h,
			onValueChanged: _,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ M(m, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ j(l, {
				scale: "sm",
				checked: n.reduceOnly,
				onChange: (e) => i({
					...n,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ j(r, {
				fontSize: "14px",
				children: I("Reduce Only")
			})]
		}),
		/* @__PURE__ */ M(m, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ j(l, {
				scale: "sm",
				checked: n.tpSlEnabled,
				onChange: z
			}), /* @__PURE__ */ j(r, {
				fontSize: "14px",
				children: I("Take Profit / Stop Loss")
			})]
		}),
		n.tpSlEnabled && /* @__PURE__ */ M(fr, { children: [/* @__PURE__ */ M(o, {
			style: { flex: 1 },
			children: [/* @__PURE__ */ j(r, {
				fontSize: "14px",
				color: "textSubtle",
				mb: "4px",
				children: I("Take Profit")
			}), /* @__PURE__ */ j(ur, {
				value: n.takeProfitPrice,
				onChange: (e) => i({
					...n,
					takeProfitPrice: e.target.value
				}),
				placeholder: "0.00",
				inputMode: "decimal"
			})]
		}), /* @__PURE__ */ M(o, {
			style: { flex: 1 },
			children: [/* @__PURE__ */ j(r, {
				fontSize: "14px",
				color: "textSubtle",
				mb: "4px",
				children: I("Stop Loss")
			}), /* @__PURE__ */ j(ur, {
				value: n.stopLossPrice,
				onChange: (e) => i({
					...n,
					stopLossPrice: e.target.value
				}),
				placeholder: "0.00",
				inputMode: "decimal"
			})]
		})] }),
		T,
		C ? /* @__PURE__ */ j(pr, {
			onClick: O,
			disabled: !y,
			isLoading: b,
			scale: "md",
			$side: n.side,
			children: v
		}) : /* @__PURE__ */ j(pr, {
			$side: n.side,
			onClick: O,
			scale: "md",
			disabled: !w,
			children: v
		}),
		/* @__PURE__ */ M(mr, { children: [
			/* @__PURE__ */ j(hr, { children: I("Cost") }),
			/* @__PURE__ */ j(gr, { children: f.cost }),
			!B && /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(hr, { children: I("Est. Liq. Price") }), /* @__PURE__ */ j(gr, { children: f.liq })] }),
			/* @__PURE__ */ j(hr, { children: I("Fees") }),
			/* @__PURE__ */ j(gr, { children: p })
		] })
	] });
}, yr = O(m)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, br = O.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, xr = O(m)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, Sr = O(r).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Cr = O(m)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, X = O(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, wr = O(m)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Tr = O.button`
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
`, Er = O(m)`
  flex-direction: column;
`, Dr = O(m)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, Or = O.input`
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
`, kr = O(m)`
  gap: 6px;
  margin-top: 4px;
`, Ar = O.button`
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
`, jr = O.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Z = O(m)`
  justify-content: space-between;
  align-items: center;
`, Mr = O(m)`
  flex-direction: column;
  gap: 8px;
`, Nr = O(m)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, Pr = O.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, Fr = O(r).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, Ir = O.div`
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
`, Lr = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Rr = [
	25,
	50,
	75
], zr = ({ isOpen: e, onClose: t, step: n, evmAddress: i, solanaAddress: a, isLoadingAssets: o = !1, assets: s, selectedAssetId: c, onSelectAsset: l, otherSupportedSymbols: p = [], selectedAsset: h, amount: g, onAmountChange: v, sourceAddress: y, errorSlot: b, onPercentClick: x, submitState: S, canContinue: C, onContinue: w, onBack: T, receipt: E, checkingElapsedMs: D = 0, onDepositAgain: O, onRetry: k, t: N = Lr, renderTokenIcon: P, renderSpinner: F }) => {
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
	})(), R = (e, t = 24) => P ? P(e, t) : /* @__PURE__ */ j(Ir, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), ee = (e) => F ? F(e) : /* @__PURE__ */ j("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ j("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), z = S === "switching-chain" || S === "approving" || S === "approve-confirming" || S === "depositing" || S === "deposit-confirming";
	return /* @__PURE__ */ j(u, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ j(d, {
			title: I,
			onDismiss: t,
			children: /* @__PURE__ */ M(yr, { children: [
				n === "amount" && /* @__PURE__ */ j(m, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ j(_, {
						scale: "sm",
						variant: "text",
						onClick: T,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ j(f, { width: "18px" }),
						children: N("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ M(A, { children: [
					/* @__PURE__ */ M(br, { children: [
						i && /* @__PURE__ */ M(xr, { children: [
							/* @__PURE__ */ j("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ j(Sr, { children: i }),
							/* @__PURE__ */ j(r, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						a && /* @__PURE__ */ M(xr, {
							style: { borderTop: i ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ j("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ j(Sr, { children: a }),
								/* @__PURE__ */ j(r, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ M(Cr, { children: [/* @__PURE__ */ M("div", { children: [/* @__PURE__ */ j(X, {
							color: "textSubtle",
							children: N("Balance")
						}), /* @__PURE__ */ j(r, {
							fontSize: "12px",
							color: "textSubtle",
							children: N("In your wallet")
						})] }), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							bold: !0,
							children: s.some((e) => e.hasBalance) ? N("Ready") : "—"
						})] })
					] }),
					o && /* @__PURE__ */ j(r, {
						fontSize: "12px",
						children: N("Loading tokens...")
					}),
					!o && s.length === 0 && /* @__PURE__ */ M(m, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								children: N("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ j(r, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: N("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							p.length > 0 && /* @__PURE__ */ j(r, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: N("Supported: %tokens%", { tokens: p.slice(0, 8).join(" · ") })
							})
						]
					}),
					s.length > 0 && /* @__PURE__ */ j(wr, { children: s.map((e) => /* @__PURE__ */ j(Tr, {
						$selected: c === e.id,
						onClick: () => l(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ M(m, {
							alignItems: "center",
							style: { gap: 12 },
							children: [R(e, 32), /* @__PURE__ */ M(Er, { children: [/* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ M(r, {
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
					s.length > 0 && p.length > 0 && /* @__PURE__ */ j(r, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: N("Also supported: %tokens%", { tokens: p.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && h && /* @__PURE__ */ M(A, { children: [
					/* @__PURE__ */ M(Dr, { children: [/* @__PURE__ */ M(m, {
						alignItems: "center",
						style: { gap: 12 },
						children: [R(h, 40), /* @__PURE__ */ M(m, {
							flexDirection: "column",
							children: [/* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								children: h.displayName || h.symbol
							}), /* @__PURE__ */ j(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: h.balanceText
							})]
						})]
					}), /* @__PURE__ */ M(m, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ j(Or, {
							value: g,
							onChange: (e) => v(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ M(kr, { children: [Rr.map((e) => /* @__PURE__ */ M(Ar, {
							onClick: () => x(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ j(Ar, {
							onClick: () => x(100),
							children: N("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ M(jr, { children: [
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(X, {
							color: "textSubtle",
							children: N("Source")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							children: y ?? "—"
						})] }),
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(X, {
							color: "textSubtle",
							children: N("Destination")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							children: N("Aster perp account")
						})] }),
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(X, {
							color: "textSubtle",
							children: N("Token")
						}), /* @__PURE__ */ M(m, {
							alignItems: "center",
							style: { gap: 6 },
							children: [R(h, 16), /* @__PURE__ */ j(r, {
								fontSize: "14px",
								bold: !0,
								children: h.symbol
							})]
						})] })
					] }),
					b,
					/* @__PURE__ */ j(_, {
						onClick: w,
						disabled: !C || z,
						isLoading: z,
						scale: "md",
						children: L
					})
				] }),
				n === "checking" && E && /* @__PURE__ */ M(A, { children: [
					/* @__PURE__ */ M(m, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [ee(72), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: N("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ M(Mr, { children: [
						/* @__PURE__ */ M(Nr, {
							$state: "done",
							children: [/* @__PURE__ */ j(Pr, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ j(r, {
								fontSize: "13px",
								children: N("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ M(Nr, {
							$state: "done",
							children: [/* @__PURE__ */ j(Pr, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ j(r, {
								fontSize: "13px",
								children: N("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ M(Nr, {
							$state: "active",
							children: [/* @__PURE__ */ j(Pr, {
								$state: "active",
								children: ee(16)
							}), /* @__PURE__ */ j(r, {
								fontSize: "13px",
								children: N("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ M(jr, { children: [
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(X, {
							color: "textSubtle",
							children: N("Amount")
						}), /* @__PURE__ */ M(r, {
							fontSize: "14px",
							bold: !0,
							children: [
								E.amount,
								" ",
								E.assetSymbol
							]
						})] }),
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(X, {
							color: "textSubtle",
							children: N("Tx hash")
						}), /* @__PURE__ */ M(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								E.hash.slice(0, 10),
								"…",
								E.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(X, {
							color: "textSubtle",
							children: N("Elapsed")
						}), /* @__PURE__ */ M(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(D / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ j(_, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: N("Close")
					})
				] }),
				n === "success" && E && /* @__PURE__ */ M(A, { children: [
					/* @__PURE__ */ M(Fr, { children: [
						E.amount,
						" ",
						E.assetSymbol
					] }),
					/* @__PURE__ */ M(jr, { children: [
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: N("Source")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							bold: !0,
							children: E.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: N("Destination")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							bold: !0,
							children: N("Aster perp account")
						})] }),
						/* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: N("Processing time")
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							bold: !0,
							children: N("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ j(jr, { children: /* @__PURE__ */ M(Z, { children: [/* @__PURE__ */ j(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: N("Tx hash")
					}), /* @__PURE__ */ M(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							E.hash.slice(0, 10),
							"…",
							E.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ M(m, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ j(_, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: N("View Balance")
						}), /* @__PURE__ */ j(_, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: O,
							children: N("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ M(A, { children: [
					/* @__PURE__ */ M(m, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ j(r, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ j(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: N("The transaction did not go through. Your funds did not move.")
						})]
					}),
					b,
					/* @__PURE__ */ M(m, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ j(_, {
							style: { flex: 1 },
							scale: "md",
							onClick: k,
							children: N("Try Again")
						}), /* @__PURE__ */ j(_, {
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
}, Br = (e) => e, Vr = ({ isOpen: t, onClose: n, phase: i, eoaAddress: a, agentAddress: s, isProvisioning: c = !1, linkButtonLabel: l, isLinkDisabled: f = !1, isLinkPending: h = !1, onLinkWallet: g, approveButtonLabel: v, isApproveDisabled: y = !1, isApprovePending: b = !1, onApprove: x, errorSlot: S, t: C = Br }) => {
	let w = s ?? C(c ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ j(u, {
		isOpen: t,
		onDismiss: n,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ j(d, {
			title: C("Enable Perps Trading"),
			onDismiss: n,
			children: /* @__PURE__ */ M(m, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ j(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: C("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ M(o, { children: [/* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Your wallet")
					}), /* @__PURE__ */ j(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: a ?? "—"
					})] }),
					/* @__PURE__ */ M(o, { children: [/* @__PURE__ */ j(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Agent (trading signer)")
					}), /* @__PURE__ */ j(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: w
					})] }),
					S,
					i === "link-wallet" && /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(_, {
						onClick: g,
						disabled: f || h,
						isLoading: h,
						scale: "md",
						children: l
					}), /* @__PURE__ */ j(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign one message in your wallet. No funds move.")
					})] }),
					(i === "authorize-agent" || i === "checking-status") && /* @__PURE__ */ M(A, { children: [/* @__PURE__ */ j(_, {
						onClick: x,
						disabled: y || b || i === "checking-status",
						isLoading: b || i === "checking-status",
						scale: "md",
						children: v
					}), /* @__PURE__ */ j(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					i === "done" && /* @__PURE__ */ j(e, {
						variant: "success",
						children: /* @__PURE__ */ j(p, { children: C("Trading enabled.") })
					})
				]
			})
		})
	});
}, Hr = [
	50,
	250,
	500,
	1001
], Ur = 1001, Wr = (e) => e <= 50 ? "safe" : e <= 250 ? "warn" : "danger", Gr = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "Caution" : "Danger zone", Kr = () => /* @__PURE__ */ j("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", { d: "M12 4l-7 7h4v9h6v-9h4z" })
}), qr = () => /* @__PURE__ */ j("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", { d: "M12 20l7-7h-4V4h-6v9H5z" })
}), Jr = () => /* @__PURE__ */ j("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ j("path", {
		d: "M7.99636 11.2598C8.18224 11.2598 8.3393 11.1966 8.46752 11.0702C8.59563 10.9436 8.65969 10.7869 8.65969 10.6V7.85984C8.65969 7.67284 8.5968 7.51612 8.47102 7.38967C8.34524 7.26323 8.18936 7.20001 8.00336 7.20001C7.81747 7.20001 7.66041 7.26323 7.53219 7.38967C7.40408 7.51612 7.34002 7.67284 7.34002 7.85984V10.6C7.34002 10.7869 7.40291 10.9436 7.52869 11.0702C7.65447 11.1966 7.81036 11.2598 7.99636 11.2598ZM7.99636 6.07968C8.18791 6.07968 8.34969 6.0149 8.48169 5.88534C8.61358 5.75567 8.67952 5.59506 8.67952 5.40351C8.67952 5.21195 8.61474 5.05018 8.48519 4.91818C8.35552 4.78629 8.19491 4.72034 8.00336 4.72034C7.8118 4.72034 7.65002 4.78512 7.51802 4.91467C7.38613 5.04434 7.32019 5.20495 7.32019 5.39651C7.32019 5.58806 7.38497 5.74984 7.51452 5.88184C7.64419 6.01373 7.8048 6.07968 7.99636 6.07968ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Yr = () => /* @__PURE__ */ j("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), Xr = () => /* @__PURE__ */ j("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ j("path", {
		d: "M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Zr = () => /* @__PURE__ */ j("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Qr = O(P)`
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
`, $r = O.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
`, ei = O.div`
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
`, ti = O.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0 16px 16px 16px;
`, ni = O.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
O(m)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, O.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, O.span`
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
`, O.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, O.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, O.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, O.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var ri = O.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ii = O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, ai = O(m)`
  align-items: center;
  justify-content: space-between;
`, oi = O(r).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, si = O.button`
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
`, ci = O.span`
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
`, li = O.div`
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
`, ui = O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, di = O.span`
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
`, fi = O.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, pi = O.input`
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
`, mi = O.button`
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
`, hi = O.span`
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
`, gi = O.span`
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
O.span`
  font-size: 14px;
  font-weight: 600;
`;
var _i = O(m)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, vi = O.button`
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
`, yi = O.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, bi = O(m)`
  justify-content: space-between;
  align-items: center;
`, xi = O.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, Si = O.span`
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
`, Ci = O.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, wi = O.div`
  position: relative;
  height: 21px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;
`, Ti = O.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $fillPct: e }) => `${e}%`};
  border-radius: 24px 0 0 24px;
  background: ${({ theme: e, $zone: t, $degen: n }) => n ? "linear-gradient(90deg, #FAD658 0%, #ED4B9E 100%)" : t === "safe" ? e.colors.success : t === "warn" ? e.colors.warning : e.colors.failure};
  box-shadow: ${({ $degen: e }) => e ? "0 2px 0 0 rgba(0, 0, 0, 0.06) inset" : "none"};
`, Ei = O.span`
  position: absolute;
  top: ${({ $variant: e }) => e === "triple" ? "-15px" : "-10px"};
  left: ${({ $fillPct: e, $variant: t }) => t === "triple" ? `calc(${e}% - 22px)` : t === "double" ? `calc(${e}% - 20.7px)` : `calc(${e}% - 19px)`};
  width: ${({ $variant: e }) => e === "triple" ? "44px" : e === "double" ? "41.455px" : "38.004px"};
  height: ${({ $variant: e }) => e === "triple" ? "48px" : e === "double" ? "42.549px" : "38.186px"};
  pointer-events: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`, Di = () => /* @__PURE__ */ M("svg", {
	width: "38",
	height: "39",
	viewBox: "0 0 38 39",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ j("ellipse", {
			cx: "19.0019",
			cy: "19.6397",
			rx: "19.0019",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "19.0013",
			cy: "17.455",
			rx: "17.8841",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ j("rect", {
			x: "23.3804",
			y: "9",
			width: "11.1776",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Oi = () => /* @__PURE__ */ M("svg", {
	width: "42",
	height: "43",
	viewBox: "0 0 42 43",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ j("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "18.5459",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "22.9092",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ j("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), ki = () => /* @__PURE__ */ M("svg", {
	width: "44",
	height: "48",
	viewBox: "0 0 44 48",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ j("ellipse", {
			cx: "25.0904",
			cy: "29.4522",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "25.0913",
			cy: "27.2753",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "18.5464",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ j("ellipse", {
			cx: "22.9087",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ j("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Ai = O.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, ji = O(m)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, Mi = O.button`
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
`, Ni = O.div`
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
`, Pi = O.input`
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
`, Fi = O.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`, Ii = O(m)`
  align-items: center;
  justify-content: space-between;
`;
O.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var Li = O.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, Ri = O(m)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, zi = O.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Bi = O.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, Vi = O(m)`
  align-self: stretch;
  gap: 8px;
`, Hi = O.button`
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
`, Ui = O(m)`
  align-self: stretch;
  gap: 8px;
`, Wi = O(_)`
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
`, Gi = O.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ki = O(m)`
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
`, qi = O.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ji = O.span`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, Yi = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: c, leverage: l, onLeverageChange: u, quoteAsset: d, onQuoteAssetClick: f, fundBalanceText: p, onTopUpFund: m, onPercentClick: h, estimatedEntry: g, liqIfLong: _, marginRequired: v, openingFee: y, canSubmit: b, isSubmittingUp: x = !1, isSubmittingDown: S = !1, onUp: C, onDown: w, onDeposit: T, onWithdraw: E, unrealizedPnl: D }) => {
	let O = Math.min(100, Math.max(0, l / Ur * 100)), k = Wr(l), A = x || S, N = !b || A, P = !b || A;
	return /* @__PURE__ */ M(Qr, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ j($r, { children: /* @__PURE__ */ M(ni, { children: [/* @__PURE__ */ M(ri, { children: [
			/* @__PURE__ */ M(ii, { children: [
				/* @__PURE__ */ M(ai, { children: [/* @__PURE__ */ j(oi, { children: "My Perp Fund" }), /* @__PURE__ */ M(si, {
					type: "button",
					onClick: m,
					"aria-label": "Top up fund",
					children: [
						/* @__PURE__ */ j("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text-subtle, #7A6EAA)"
							},
							children: /* @__PURE__ */ j(Zr, {})
						}),
						/* @__PURE__ */ j(ci, { children: p }),
						/* @__PURE__ */ j("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text, #280D5F)"
							},
							children: /* @__PURE__ */ j(Xr, {})
						})
					]
				})] }),
				/* @__PURE__ */ j(li, { children: /* @__PURE__ */ M(ui, { children: [/* @__PURE__ */ j(di, { children: "My Bet" }), /* @__PURE__ */ M(fi, { children: [/* @__PURE__ */ j(pi, {
					type: "number",
					inputMode: "decimal",
					value: o,
					onChange: (e) => c(e.target.value),
					"aria-label": "Bet amount",
					placeholder: "0"
				}), /* @__PURE__ */ M(mi, {
					type: "button",
					onClick: f,
					"aria-label": "Choose quote asset",
					children: [/* @__PURE__ */ j(hi, { children: d }), /* @__PURE__ */ j(gi, { children: /* @__PURE__ */ j(Yr, {}) })]
				})] })] }) }),
				/* @__PURE__ */ M(_i, { children: [
					/* @__PURE__ */ j(vi, {
						type: "button",
						onClick: () => h?.(.25),
						children: "25%"
					}),
					/* @__PURE__ */ j(yi, {}),
					/* @__PURE__ */ j(vi, {
						type: "button",
						onClick: () => h?.(.5),
						children: "50%"
					}),
					/* @__PURE__ */ j(yi, {}),
					/* @__PURE__ */ j(vi, {
						type: "button",
						onClick: () => h?.(1),
						children: "MAX"
					})
				] })
			] }),
			/* @__PURE__ */ M(ii, { children: [
				/* @__PURE__ */ j(oi, { children: "Leverage" }),
				/* @__PURE__ */ M(bi, { children: [/* @__PURE__ */ M(xi, { children: [l, "x"] }), /* @__PURE__ */ M(Si, {
					$zone: k,
					children: [Gr(k), /* @__PURE__ */ j("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ j(Jr, {})
					})]
				})] }),
				/* @__PURE__ */ M(Ci, { children: [/* @__PURE__ */ M(wi, {
					$fillPct: O,
					$zone: k,
					"aria-hidden": !0,
					children: [
						/* @__PURE__ */ j(Ti, {
							$fillPct: O,
							$zone: k,
							$degen: l > 500
						}),
						/* @__PURE__ */ j(Ei, {
							$fillPct: O,
							$variant: l > 500 ? "triple" : l > 250 ? "double" : "single",
							children: j(l > 500 ? ki : l > 250 ? Oi : Di, {})
						}),
						/* @__PURE__ */ j(Ai, {
							type: "range",
							min: 1,
							max: Ur,
							value: l,
							onChange: (e) => u(Number(e.target.value)),
							"aria-label": "Leverage"
						})
					]
				}), /* @__PURE__ */ M(ji, {
					role: "tablist",
					children: [/* @__PURE__ */ M(Ni, { children: [/* @__PURE__ */ j(Pi, {
						type: "number",
						min: 1,
						max: Ur,
						value: l,
						onChange: (e) => u(Math.max(1, Math.min(Ur, Number(e.target.value) || 1))),
						"aria-label": "Custom leverage"
					}), /* @__PURE__ */ j(Fi, { children: "x" })] }), Hr.map((e) => /* @__PURE__ */ M(Mi, {
						type: "button",
						role: "tab",
						"aria-selected": l === e,
						$active: l === e,
						onClick: () => u(e),
						children: [e, "x"]
					}, e))]
				})] })
			] }),
			/* @__PURE__ */ M(Ii, { children: [/* @__PURE__ */ j(oi, { children: "Duration" }), /* @__PURE__ */ M(si, {
				type: "button",
				disabled: !0,
				children: [/* @__PURE__ */ j(ci, {
					style: { fontSize: 14 },
					children: "Perpetual"
				}), /* @__PURE__ */ j("span", {
					"aria-hidden": !0,
					children: "▾"
				})]
			})] })
		] }), o && o !== "0" ? /* @__PURE__ */ M(ei, { children: [/* @__PURE__ */ M(Li, { children: [
			/* @__PURE__ */ M(Ri, { children: [/* @__PURE__ */ j(zi, { children: "Estimated Entry" }), /* @__PURE__ */ j(Bi, { children: g })] }),
			/* @__PURE__ */ M(Ri, { children: [/* @__PURE__ */ j(zi, { children: "Liquidation if long" }), /* @__PURE__ */ j(Bi, {
				$danger: !0,
				children: _
			})] }),
			/* @__PURE__ */ M(Ri, { children: [/* @__PURE__ */ j(zi, { children: "Margin required" }), /* @__PURE__ */ j(Bi, { children: v })] }),
			/* @__PURE__ */ M(Ri, { children: [/* @__PURE__ */ j(zi, { children: "Opening fee" }), /* @__PURE__ */ j(Bi, { children: y })] })
		] }), /* @__PURE__ */ M(ti, { children: [/* @__PURE__ */ M(Hi, {
			type: "button",
			$variant: "up",
			disabled: N,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ j(Kr, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ M(Hi, {
			type: "button",
			$variant: "down",
			disabled: P,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ j(qr, {}), S ? "..." : "DOWN"]
		})] })] }) : /* @__PURE__ */ M(Vi, { children: [/* @__PURE__ */ M(Hi, {
			type: "button",
			$variant: "up",
			disabled: N,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ j(Kr, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ M(Hi, {
			type: "button",
			$variant: "down",
			disabled: P,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ j(qr, {}), S ? "..." : "DOWN"]
		})] })] }) }), /* @__PURE__ */ M(Gi, { children: [/* @__PURE__ */ M(Ui, { children: [/* @__PURE__ */ j(Wi, {
			$variant: "primary",
			onClick: T,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ j(Wi, {
			$variant: "secondary",
			onClick: E,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ M(Ki, { children: [/* @__PURE__ */ M(qi, { children: ["Unrealized PnL ", /* @__PURE__ */ j(s, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ j(Ji, { children: D })] })] })]
	});
}, Xi = O.div`
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
`, Zi = O.button`
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
`, Qi = O.span`
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
`, $i = O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, ea = O.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, ta = O.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, na = O.span`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  font-size: 12px;
  letter-spacing: 0.12px;
`, ra = O.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, ia = O.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, aa = O.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme: e, $positive: t }) => t ? `color-mix(in srgb, ${e.colors.success} 18%, transparent)` : `color-mix(in srgb, ${e.colors.failure} 18%, transparent)`};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, oa = O(m)`
  align-items: center;
  gap: 24px;
  height: 56px;
`, sa = O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, ca = O.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, la = O.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, ua = () => /* @__PURE__ */ j("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", { d: "M6 2l5 8H1z" })
}), da = () => /* @__PURE__ */ j("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ j("path", { d: "M6 10L1 2h10z" })
}), fa = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c }) => {
	let l = r >= 0;
	return /* @__PURE__ */ M(Xi, { children: [/* @__PURE__ */ M(Zi, {
		type: "button",
		onClick: c,
		disabled: !c,
		"aria-label": `Change market · ${t}`,
		children: [/* @__PURE__ */ j(Qi, { children: e }), /* @__PURE__ */ M($i, { children: [/* @__PURE__ */ M(ea, { children: [/* @__PURE__ */ j(ta, { children: t }), /* @__PURE__ */ j(na, { children: "Perp" })] }), /* @__PURE__ */ M(ra, { children: [/* @__PURE__ */ j(ia, { children: n }), /* @__PURE__ */ M(aa, {
			$positive: l,
			children: [
				j(l ? ua : da, {}),
				r.toFixed(2),
				"%"
			]
		})] })] })]
	}), /* @__PURE__ */ M(oa, { children: [
		/* @__PURE__ */ M(sa, { children: [/* @__PURE__ */ j(ca, { children: "24h Volume" }), /* @__PURE__ */ j(la, { children: i })] }),
		/* @__PURE__ */ M(sa, { children: [/* @__PURE__ */ j(ca, { children: "Open Interest" }), /* @__PURE__ */ j(la, { children: a })] }),
		/* @__PURE__ */ M(sa, { children: [/* @__PURE__ */ j(ca, { children: "Funding Rate" }), /* @__PURE__ */ j(la, { children: o })] }),
		/* @__PURE__ */ M(sa, { children: [/* @__PURE__ */ j(ca, { children: "Next Funding" }), /* @__PURE__ */ j(la, { children: s })] })
	] })] });
}, pa = O(P)`
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
`, ma = O.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, ha = O.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, ga = O.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, _a = O.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, va = O.div`
  position: relative;
  overflow: visible;
`, ya = O.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, ba = O.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, xa = O.span`
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
`, Sa = 1e3, Ca = 360, wa = 20, Ta = 70;
function Ea(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * Sa), i = e.map((e) => wa + (1 - (e.price - t) / n) * (Ca - wa - Ta)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${Sa} ${Ca} L 0 ${Ca} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var Da = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", Oa = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", ka = 200, Aa = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = k(), c = `simple-chart-fill-${C().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = T(() => Ea(r), [r]), d = u?.line ?? Da, f = u?.area ?? Oa, p = u?.endY ?? ka;
	return /* @__PURE__ */ M(pa, { children: [/* @__PURE__ */ j(ma, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ j(ha, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ M(ga, { children: [/* @__PURE__ */ M(_a, { children: [/* @__PURE__ */ M(va, { children: [/* @__PURE__ */ M("svg", {
		viewBox: `0 0 ${Sa} ${Ca}`,
		preserveAspectRatio: "none",
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		},
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ j("defs", { children: /* @__PURE__ */ M("linearGradient", {
				id: c,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ j("stop", {
					offset: "0%",
					stopColor: l,
					stopOpacity: "0.30"
				}), /* @__PURE__ */ j("stop", {
					offset: "100%",
					stopColor: l,
					stopOpacity: "0.02"
				})]
			}) }),
			/* @__PURE__ */ j("path", {
				d: f,
				fill: `url(#${c})`
			}),
			/* @__PURE__ */ j("path", {
				d,
				fill: "none",
				stroke: l,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ j("line", {
				x1: "0",
				y1: p,
				x2: Sa - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ j(xa, {
		style: {
			right: -8,
			top: `calc(${p}/${Ca} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ j(ya, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ j("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ j(ba, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ j("span", { children: e }, `${e}-${t}`))
	})] })] });
}, ja = O(P)`
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
`, Ma = O.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Na = O.button`
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
`, Pa = O.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`, Fa = O.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Q = O.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, $ = O.div`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, Ia = O($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, La = O.span`
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
`, Ra = O.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`, za = O.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Ba = O.span`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Va = O($)`
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
`, Ha = O($)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
  font-weight: 600;
  font-size: 16px;
`, Ua = O($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Wa = O.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, Ga = O.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, Ka = O.button`
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
`, qa = O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, Ja = O.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, Ya = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, Xa = (e) => Ya[e.toUpperCase()] ?? "#7A6EAA", Za = (e) => e === "up" ? "↑" : "↓", Qa = (e) => e === "up" ? "Up/Long" : "Down/Short", $a = () => /* @__PURE__ */ j("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ j("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), eo = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ M(ja, { children: [
	/* @__PURE__ */ M(Ma, {
		role: "tablist",
		children: [
			/* @__PURE__ */ j(Na, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ j(Na, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ j(Na, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ j(qa, { children: "No open positions" }) : /* @__PURE__ */ M(Pa, {
		role: "table",
		children: [
			/* @__PURE__ */ j(Q, { children: "Token" }),
			/* @__PURE__ */ j(Q, { children: "Direction" }),
			/* @__PURE__ */ j(Q, { children: "Unrealized PnL" }),
			/* @__PURE__ */ j(Q, { children: "Entry Price" }),
			/* @__PURE__ */ j(Q, { children: "Liq. Price" }),
			/* @__PURE__ */ j(Q, { children: "Distance to Liq" }),
			/* @__PURE__ */ j(Q, {}),
			n.map((e) => /* @__PURE__ */ M(v.Fragment, { children: [
				/* @__PURE__ */ M(Ia, { children: [o ? o(e) : /* @__PURE__ */ j(La, {
					$color: e.iconColor ?? Xa(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ M(Ra, { children: [/* @__PURE__ */ j(za, { children: e.symbol }), /* @__PURE__ */ j(Ba, { children: e.chainLabel })] })] }),
				/* @__PURE__ */ M(Va, {
					$direction: e.direction,
					children: [
						Za(e.direction),
						" ",
						Qa(e.direction)
					]
				}),
				/* @__PURE__ */ j(Ha, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ j($, { children: e.entryPrice }),
				/* @__PURE__ */ j($, { children: e.liqPrice }),
				/* @__PURE__ */ M(Ua, { children: [/* @__PURE__ */ j(Wa, { children: /* @__PURE__ */ j(Ga, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ j("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ j(Ka, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ j($a, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ j(qa, { children: "No open orders" }) : /* @__PURE__ */ M(Fa, {
		role: "table",
		children: [
			/* @__PURE__ */ j(Q, { children: "Symbol" }),
			/* @__PURE__ */ j(Q, { children: "Side" }),
			/* @__PURE__ */ j(Q, { children: "Type" }),
			/* @__PURE__ */ j(Q, { children: "Price" }),
			/* @__PURE__ */ j(Q, { children: "Size" }),
			/* @__PURE__ */ j(Q, { children: "Filled" }),
			/* @__PURE__ */ j(Q, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ M(v.Fragment, { children: [
				/* @__PURE__ */ j($, { children: e.symbol }),
				/* @__PURE__ */ j($, { children: /* @__PURE__ */ j(Ja, {
					$side: e.side,
					children: e.side
				}) }),
				/* @__PURE__ */ j($, { children: e.type }),
				/* @__PURE__ */ j($, { children: e.price }),
				/* @__PURE__ */ j($, { children: e.origQty }),
				/* @__PURE__ */ j($, { children: e.executedQty }),
				/* @__PURE__ */ j($, { children: e.status })
			] }, e.id))
		]
	})),
	e === "history" && /* @__PURE__ */ j(qa, { children: "No transaction history" })
] });
//#endregion
export { ae as AccountPanel, Wn as BookTradesPanel, zn as ChartPanel, zr as DepositModal, Vr as EnableTradingModal, de as LeverageModal, ht as MarketsDropdown, vn as OrderBook, Je as OrderConfirmModal, vr as OrderForm, we as PerpsErrorMessage, P as PerpsPanel, kn as PositionsPanel, be as RecentTrades, Yi as SimpleBetPanel, Aa as SimpleChartCard, eo as SimplePositionsCard, fa as SimpleTickerCard, Bt as SymbolHeader, In as TpSlModal, L as UnderlineTab, R as UnderlineTabs, Be as WithdrawModal };

//# sourceMappingURL=widgets.js.map