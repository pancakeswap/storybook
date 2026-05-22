import { $t as e, C as t, Gt as n, Jt as r, L as i, M as a, O as o, Pt as s, R as c, S as l, Sn as u, T as d, Ui as f, Wi as p, Wn as m, Xi as h, Y as g, dt as _, k as v, ka as y, lr as b, r as x, t as S, tt as C, w, x as T, xi as E, y as D, z as O } from "./chunks/Modal-Vr0QDvCZ.js";
import k, { Children as A, cloneElement as j, useCallback as M, useEffect as N, useId as ee, useLayoutEffect as P, useMemo as F, useRef as I, useState as L } from "react";
import R, { css as te, useTheme as z } from "styled-components";
import { Fragment as B, jsx as V, jsxs as H } from "react/jsx-runtime";
import { createPortal as ne } from "react-dom";
//#region src/widgets/primitives.tsx
var U = R(i)`
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
`, re = R.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, ie = R.button`
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
`, W = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ V(ie, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), ae = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ V(re, {
	$fullWidth: r,
	children: A.map(n, (n, i) => !n || typeof n != "object" ? n : j(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), oe = R(U)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, se = R(a).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, ce = R(T)`
  justify-content: space-between;
  align-items: center;
`, le = R(a).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, ue = R(a).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, de = R.button`
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
`, fe = R(T)`
  flex-direction: column;
  gap: 8px;
`, pe = R(ue)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, me = (e) => e, he = ({ walletDisplay: e, state: n, canDeposit: r = !0, canWithdraw: i = !0, onDeposit: o, onWithdraw: s, onEnableTrading: c, t: l = me }) => /* @__PURE__ */ H(oe, { children: [
	/* @__PURE__ */ H(T, {
		style: { gap: 8 },
		children: [/* @__PURE__ */ V(de, {
			$variant: "primary",
			onClick: o,
			disabled: !r,
			children: l("Deposit")
		}), /* @__PURE__ */ V(de, {
			$variant: "secondary",
			onClick: s,
			disabled: !i,
			children: l("Withdraw")
		})]
	}),
	n.kind === "needs-deposit" && /* @__PURE__ */ V(t, {
		variant: "warning",
		children: /* @__PURE__ */ H(T, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ V(a, {
				fontSize: "14px",
				bold: !0,
				children: l("Deposit to get started")
			}), /* @__PURE__ */ V(w, {
				fontSize: "12px",
				children: l("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
			})]
		})
	}),
	n.kind === "needs-trading" && /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ V(t, {
		variant: "warning",
		children: /* @__PURE__ */ H(T, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ V(a, {
				fontSize: "14px",
				bold: !0,
				children: l("Enable Trading to view your Aster balance")
			}), /* @__PURE__ */ V(w, {
				fontSize: "12px",
				children: l("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
			})]
		})
	}), /* @__PURE__ */ V(O, {
		onClick: c,
		scale: "sm",
		variant: "primary",
		children: l("Enable Trading")
	})] }),
	n.kind === "ready" && /* @__PURE__ */ H(fe, { children: [
		/* @__PURE__ */ V(se, { children: l("Account Equity") }),
		/* @__PURE__ */ H(ce, { children: [/* @__PURE__ */ V(le, { children: l("Wallet") }), /* @__PURE__ */ V(ue, { children: e ?? "—" })] }),
		/* @__PURE__ */ H(ce, { children: [/* @__PURE__ */ V(le, { children: l("Equity") }), /* @__PURE__ */ V(ue, { children: n.equity || "—" })] }),
		/* @__PURE__ */ H(ce, { children: [/* @__PURE__ */ V(le, { children: l("Available") }), /* @__PURE__ */ V(ue, { children: n.available || "—" })] }),
		/* @__PURE__ */ H(ce, { children: [/* @__PURE__ */ V(le, { children: l("Unrealized PnL") }), /* @__PURE__ */ V(pe, {
			$sign: n.pnlSign,
			children: n.unrealizedPnl || "—"
		})] }),
		/* @__PURE__ */ H(ce, { children: [/* @__PURE__ */ V(le, { children: l("Margin mode") }), /* @__PURE__ */ V(ue, { children: n.marginMode ?? l("Cross") })] })
	] })
] });
//#endregion
//#region src/widgets/BunnySlider.tsx
function ge({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = I(null), [u, d] = L(0);
	P(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999;
	return /* @__PURE__ */ H("div", {
		ref: l,
		className: "bs-root",
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ V("span", { className: "bs-track" }),
			/* @__PURE__ */ V("span", { className: "bs-back" }),
			/* @__PURE__ */ V("span", {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ V("span", {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: { left: m }
			}),
			/* @__PURE__ */ V("input", {
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
			s && /* @__PURE__ */ V("span", {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
//#endregion
//#region src/widgets/LeverageModal.tsx
var _e = R(T)`
  gap: 10px;
  align-items: stretch;
`, ve = R(O).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, ye = R(T)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, be = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, xe = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: r = 1, maxLeverage: i = 100, availableBalance: o, onConfirm: s, onClose: c, isSubmitting: u = !1, errorSlot: d, t: f = be }) => {
	let [p, m] = L(n);
	N(() => {
		e && m(n);
	}, [e, n]);
	let h = (e) => Math.max(r, Math.min(i, Math.round(e))), g = o * p;
	return /* @__PURE__ */ V(x, {
		isOpen: e,
		onDismiss: c,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ V(S, {
			title: f("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: c,
			children: /* @__PURE__ */ H(T, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ H(_e, { children: [
						/* @__PURE__ */ V(ve, {
							onClick: () => m((e) => h(e - 1)),
							disabled: p <= r,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ H(ye, { children: [p, "X"] }),
						/* @__PURE__ */ V(ve, {
							onClick: () => m((e) => h(e + 1)),
							disabled: p >= i,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ V(ge, {
						name: "perp-leverage",
						min: r,
						max: i,
						value: p,
						onValueChanged: (e) => m(h(e)),
						width: "100%"
					}),
					/* @__PURE__ */ H(l, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						color: "textSubtle",
						children: f("Maximum position at current leverage:")
					}), /* @__PURE__ */ V(a, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(g) && g > 0 ? `${g.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ V(a, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					d,
					/* @__PURE__ */ V(O, {
						scale: "md",
						disabled: u,
						onClick: () => s(p),
						children: f(u ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, Se = R.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, Ce = R.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, we = R.div`
  overflow-y: auto;
  min-height: 0;
`, Te = R.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, Ee = R.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, De = R.span`
  text-align: right;
`, Oe = R(De)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ke = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, Ae = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = F(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ H(B, { children: [
		t && /* @__PURE__ */ V(Se, { children: t }),
		/* @__PURE__ */ H(Ce, { children: [
			/* @__PURE__ */ V("span", { children: o }),
			/* @__PURE__ */ V("span", {
				style: { textAlign: "right" },
				children: s
			}),
			/* @__PURE__ */ V("span", {
				style: { textAlign: "right" },
				children: c
			})
		] }),
		/* @__PURE__ */ V(we, { children: a.map((e) => /* @__PURE__ */ H(Te, { children: [
			/* @__PURE__ */ V(Ee, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ V(De, { children: e.size }),
			/* @__PURE__ */ V(Oe, { children: ke(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ V("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ V(U, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, je = R(l)`
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
`, Me = R(O).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Ne = (e) => e, Pe = ({ variant: e, title: n, message: r, details: i, t: o = Ne }) => {
	let [s, c] = L(!1);
	return n ? /* @__PURE__ */ V(t, {
		variant: e,
		children: /* @__PURE__ */ H(T, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ V(w, { children: /* @__PURE__ */ V(a, {
					fontSize: "13px",
					bold: !0,
					children: n
				}) }),
				/* @__PURE__ */ V(w, { children: /* @__PURE__ */ V(a, {
					fontSize: "12px",
					children: r
				}) }),
				i && /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ V(Me, {
					onClick: () => c((e) => !e),
					children: o(s ? "Hide details" : "Show details")
				}), s && /* @__PURE__ */ V(je, { children: i })] })
			]
		})
	}) : /* @__PURE__ */ V(t, {
		variant: e,
		children: /* @__PURE__ */ V(w, { children: r })
	});
}, Fe = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ie = R(T)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Le = R(a).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Re = R(T)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, ze = R.button`
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
`, Be = R(T)`
  flex-direction: column;
`, Ve = R.div`
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
`, He = R(T)`
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
`, Ue = R.input`
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
`, We = R(T)`
  gap: 6px;
  margin-top: 4px;
`, Ge = R.button`
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
`, Ke = R.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, qe = R(T)`
  justify-content: space-between;
  align-items: center;
`, Je = R(T)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, Ye = [
	25,
	50,
	75
], Xe = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: r, selectedAssetId: i, onSelectAsset: o, selectedAsset: s, destinationAddress: c, destinationChainName: u = "BSC", feeText: d, amount: f, onAmountChange: p, onPercentClick: m, onBack: h, onWithdraw: g, onClose: _, isSubmitting: v = !1, canSubmit: y = !0, errorSlot: b, t: w = Fe, renderTokenIcon: E }) => {
	let D = (e, t = 24) => E ? E(e, t) : /* @__PURE__ */ V(Ve, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ V(x, {
		isOpen: e,
		onDismiss: _,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ V(S, {
			title: t === "select" ? w("Withdraw from Aster") : w("Withdraw %asset%", { asset: s?.symbol ?? "" }),
			onDismiss: _,
			children: /* @__PURE__ */ H(Ie, { children: [
				t === "amount" && /* @__PURE__ */ V(T, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ V(O, {
						scale: "sm",
						variant: "text",
						onClick: h,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ V(C, { width: "18px" }),
						children: w("Back")
					})
				}),
				t === "select" && /* @__PURE__ */ H(B, { children: [
					/* @__PURE__ */ H(l, { children: [/* @__PURE__ */ V(Le, {
						color: "textSubtle",
						children: w("Select asset")
					}), /* @__PURE__ */ V(a, {
						fontSize: "12px",
						color: "textSubtle",
						children: w("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ V(a, {
						fontSize: "12px",
						children: w("Loading assets...")
					}),
					!n && r.length === 0 && /* @__PURE__ */ H(Je, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						bold: !0,
						children: w("Nothing to withdraw yet")
					}), /* @__PURE__ */ V(a, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: w("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					r.length > 0 && /* @__PURE__ */ V(Re, { children: r.map((e) => /* @__PURE__ */ H(ze, {
						$selected: i === e.id,
						onClick: () => o(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ H(T, {
							alignItems: "center",
							style: { gap: 12 },
							children: [D(e, 32), /* @__PURE__ */ H(Be, { children: [/* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ V(a, {
								fontSize: "11px",
								color: "textSubtle",
								children: w("Withdrawable")
							})] })]
						}), /* @__PURE__ */ H(T, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ V(a, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && s && /* @__PURE__ */ H(B, { children: [
					/* @__PURE__ */ H(He, { children: [/* @__PURE__ */ H(T, {
						alignItems: "center",
						style: { gap: 12 },
						children: [D(s, 40), /* @__PURE__ */ H(T, {
							flexDirection: "column",
							children: [/* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								children: s.displayName || s.symbol
							}), /* @__PURE__ */ V(a, {
								fontSize: "12px",
								color: "textSubtle",
								children: w("Withdrawable: %amt% %sym%", {
									amt: s.withdrawableText,
									sym: s.symbol
								})
							})]
						})]
					}), /* @__PURE__ */ H(T, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ V(Ue, {
							value: f,
							onChange: (e) => p(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), m && /* @__PURE__ */ H(We, { children: [Ye.map((e) => /* @__PURE__ */ H(Ge, {
							onClick: () => m(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ V(Ge, {
							onClick: () => m(100),
							children: w("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ H(Ke, { children: [
						/* @__PURE__ */ H(qe, { children: [/* @__PURE__ */ V(Le, {
							color: "textSubtle",
							children: w("Destination")
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: c ?? "—"
						})] }),
						/* @__PURE__ */ H(qe, { children: [/* @__PURE__ */ V(Le, {
							color: "textSubtle",
							children: w("Network")
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							children: u
						})] }),
						/* @__PURE__ */ H(qe, { children: [/* @__PURE__ */ V(Le, {
							color: "textSubtle",
							children: w("Token")
						}), /* @__PURE__ */ H(T, {
							alignItems: "center",
							style: { gap: 6 },
							children: [D(s, 16), /* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								children: s.symbol
							})]
						})] }),
						/* @__PURE__ */ H(qe, { children: [/* @__PURE__ */ V(Le, {
							color: "textSubtle",
							children: w("Fee")
						}), /* @__PURE__ */ H(a, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								d ?? "—",
								" ",
								s.symbol
							]
						})] })
					] }),
					b,
					/* @__PURE__ */ V(O, {
						onClick: g,
						disabled: !y || !f || v,
						isLoading: v,
						scale: "md",
						children: w(v ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ V(a, {
						fontSize: "11px",
						color: "textSubtle",
						children: w("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, G = R(T)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, Ze = R(a).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, Qe = R(a).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, $e = R(T)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, et = R.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, tt = R(Qe)`
  color: ${({ theme: e }) => e.colors.failure};
`, nt = R(O)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, rt = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, it = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", at = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, ot = ({ isOpen: e, details: t, onConfirm: n, onClose: r, onSkipFutureChange: i, t: o = rt }) => {
	let [s, c] = L(!1);
	return /* @__PURE__ */ V(x, {
		isOpen: e,
		onDismiss: r,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ V(S, {
			title: o("Confirm Order"),
			onDismiss: r,
			children: /* @__PURE__ */ H(T, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Symbol") }), /* @__PURE__ */ V(Qe, { children: t.symbol })] }),
					/* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Side / Type") }), /* @__PURE__ */ H(Qe, { children: [
						/* @__PURE__ */ V(et, {
							$side: t.side,
							children: t.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						at(t.type, o)
					] })] }),
					/* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Size") }), /* @__PURE__ */ H(Qe, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Price") }), /* @__PURE__ */ H(Qe, { children: [
						it(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Trigger Price") }), /* @__PURE__ */ H(Qe, { children: [
						it(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Leverage") }), /* @__PURE__ */ H(Qe, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Cost") }), /* @__PURE__ */ V(Qe, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Est. Liq. Price") }), /* @__PURE__ */ V(tt, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ H(G, { children: [/* @__PURE__ */ V(Ze, { children: o("Reduce Only") }), /* @__PURE__ */ V(Qe, { children: o("Yes") })] }),
					/* @__PURE__ */ H($e, { children: [/* @__PURE__ */ V(v, {
						scale: "sm",
						checked: s,
						onChange: (e) => c(e.target.checked)
					}), /* @__PURE__ */ V(a, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ V(l, {
						mt: "8px",
						children: /* @__PURE__ */ V(nt, {
							$side: t.side,
							onClick: () => {
								s && i?.(!0), n(), r();
							},
							scale: "md",
							children: t.side === "BUY" ? o("Confirm Buy / Long") : o("Confirm Sell / Short")
						})
					})
				]
			})
		})
	});
}, st = R.div`
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
`, ct = R(T)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, lt = R.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, ut = R.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, dt = R.input`
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
`, ft = R.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, pt = R.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, mt = R.button`
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
`, ht = R.button`
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
`, gt = R(T)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, _t = R.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, vt = R.span`
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
`, yt = R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, bt = R(a)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, xt = R(T)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, St = ({ filled: e }) => /* @__PURE__ */ V("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: e ? "currentColor" : "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinejoin: "round",
	strokeLinecap: "round",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Ct = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, wt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, Tt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, Et = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), Dt = (e) => Et(e).slice(0, 1) || e.slice(0, 1), Ot = (e) => e, kt = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: r, logoForSymbol: i, isLoading: o = !1, t: s = Ot }) => {
	let [c, l] = L("all"), [u, d] = L(""), f = F(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ H(st, { children: [
		/* @__PURE__ */ H(ct, { children: [/* @__PURE__ */ V(lt, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ V(lt, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ H(ut, { children: [/* @__PURE__ */ V(E, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ V(dt, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ H(ft, { children: [
			/* @__PURE__ */ V("span", {}),
			/* @__PURE__ */ V("span", { children: s("Symbols") }),
			/* @__PURE__ */ V(bt, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ V(bt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ V(bt, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ V(pt, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ V(xt, { children: /* @__PURE__ */ V(a, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let a = t.includes(e.symbol), o = Number(e.priceChangePercent), c = i?.(Et(e.symbol));
				return /* @__PURE__ */ H(mt, {
					onClick: () => r(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ V(ht, {
							$filled: a,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(a ? "Unfavorite" : "Favorite"),
							"aria-pressed": a,
							children: /* @__PURE__ */ V(St, { filled: a })
						}),
						/* @__PURE__ */ H(gt, { children: [
							/* @__PURE__ */ V(vt, { children: c ? /* @__PURE__ */ V(yt, {
								src: c,
								alt: Et(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = Dt(e.symbol));
								}
							}) : Dt(e.symbol) }),
							/* @__PURE__ */ V("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ H(_t, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ V(bt, { children: Ct(e.lastPrice) }),
						/* @__PURE__ */ V(bt, {
							$tone: o >= 0 ? "up" : "down",
							children: wt(e.priceChangePercent)
						}),
						/* @__PURE__ */ V(bt, { children: Tt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, At = R(T)`
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
`, jt = R(T)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, Mt = R.button`
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
`, Nt = R.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, Pt = R.button`
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
`, Ft = R.span`
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
`, It = R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Lt = R(a)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`;
R.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`;
var Rt = R.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, zt = R(T)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Bt = R(T)`
  flex-direction: column;
  flex-shrink: 0;
`, Vt = R(a)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, Ht = R(a)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Ut = R(T)`
  align-items: baseline;
  white-space: nowrap;
`, Wt = R.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Gt = R.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, Kt = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, qt = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Jt = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, Yt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, Xt = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", Zt = () => /* @__PURE__ */ V("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Qt = (e) => e, $t = ({ symbol: e, pairLabel: t, logoUrl: r, leverage: i, lastPrice: a, markPrice: o, indexPrice: s, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, t: h = Qt }) => {
	let g = z(), [_, v] = L(!1), [y, b] = L(null), x = I(null), S = I(null);
	P(() => {
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
	}, [_]), N(() => {
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
	let C = M(() => v(!1), []), w = Number(c) < 0, T = Number(u) < 0;
	return /* @__PURE__ */ H(At, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ H(jt, { children: [p && /* @__PURE__ */ V(Pt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": h(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ V(Zt, {})
			}), /* @__PURE__ */ H(Mt, {
				ref: x,
				"aria-haspopup": "listbox",
				"aria-expanded": _,
				disabled: !m,
				onClick: () => m && v((e) => !e),
				children: [
					/* @__PURE__ */ V(Ft, {
						$bg: r ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: r ? /* @__PURE__ */ V(It, {
							src: r,
							alt: t
						}) : Xt(t)
					}),
					/* @__PURE__ */ V(Lt, { children: t }),
					/* @__PURE__ */ V(n, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			_ && y && typeof document < "u" && m ? ne(/* @__PURE__ */ V(Nt, {
				ref: S,
				style: {
					top: y.top,
					left: y.left
				},
				children: m(C)
			}), document.body) : null,
			/* @__PURE__ */ V(Rt, {
				"aria-label": `Last price: ${a ?? ""}`,
				children: a ?? "—"
			}),
			/* @__PURE__ */ H(zt, {
				role: "list",
				children: [
					/* @__PURE__ */ H(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ V(Vt, {
							$dashed: !0,
							children: h("Mark")
						}), /* @__PURE__ */ V(Ht, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ H(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ V(Vt, {
							$dashed: !0,
							children: h("Index")
						}), /* @__PURE__ */ V(Ht, { children: s ?? "—" })]
					}),
					/* @__PURE__ */ H(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ V(Vt, {
							$dashed: !0,
							children: h("Funding / Countdown")
						}), /* @__PURE__ */ H(Ut, { children: [
							/* @__PURE__ */ V(Wt, {
								$negative: w,
								children: Kt(c)
							}),
							/* @__PURE__ */ V(Gt, { children: "/" }),
							/* @__PURE__ */ V(Ht, {
								as: "span",
								children: Jt(l)
							})
						] })]
					}),
					/* @__PURE__ */ H(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ V(Vt, { children: h("24h Change") }), /* @__PURE__ */ V(Ht, {
							style: { color: u ? T ? g.colors.failure : g.colors.success : void 0 },
							children: qt(u)
						})]
					}),
					/* @__PURE__ */ H(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ V(Vt, { children: h("24h Volume (USDT)") }), /* @__PURE__ */ V(Ht, { children: Yt(d) })]
					})
				]
			})
		]
	});
}, en = 10, tn = 27, nn = R(T)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, rn = R(T)`
  gap: 5px;
`, an = R.button`
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
`, on = R.div`
  position: relative;
`, sn = R.button`
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
`, cn = R.div`
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
`, ln = R.button`
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
`, un = R(T)`
  align-items: center;
  gap: 2px;
`, dn = R.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, fn = R.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, pn = R.div`
  height: ${({ $size: e }) => e === "full" ? en * 2 * tn : en * tn}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, mn = R.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${tn}px;
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
`, hn = R.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, gn = R.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, _n = R.div`
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
`, vn = R.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, yn = R.span`
  text-align: center;
`, bn = R.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, xn = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, Sn = [
	100,
	50,
	10,
	1
], Cn = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, wn = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), Tn = (e, t) => {
	let n = [];
	for (let e of Sn) t > e * 10 && n.push(String(e));
	let r = wn(e);
	for (let e = 1; e <= r; e++) n.push(Cn(e));
	return n;
}, En = (e, t) => {
	N(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, Dn = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = L(!1), o = I(null);
	return En(o, () => a(!1)), /* @__PURE__ */ H(on, {
		ref: o,
		children: [/* @__PURE__ */ H(sn, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ V(cn, { children: t.map((e) => /* @__PURE__ */ V(ln, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, On = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ H("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ V("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "6",
			stroke: t
		}),
		/* @__PURE__ */ V("rect", {
			x: "0.5",
			y: "8.5",
			width: "6",
			height: "6",
			stroke: e
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: n
		})
	]
}), kn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ H("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ V("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), An = ({ askColor: e, listColor: t }) => /* @__PURE__ */ H("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ V("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ V("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), jn = (e) => e, Mn = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = jn }) => {
	let g = z(), _ = d === "QUOTE" ? r : n, v = F(() => Tn(i, o), [i, o]);
	N(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = F(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = xn(e, "ask", i, r, a), s = xn(t, "bid", i, r, a), c = en * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
	}, T = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), E = /* @__PURE__ */ H(B, { children: [
		/* @__PURE__ */ H(nn, { children: [/* @__PURE__ */ H(rn, { children: [
			/* @__PURE__ */ V(an, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ V(On, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ V(an, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ V(kn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ V(an, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ V(An, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ H(un, { children: [/* @__PURE__ */ V(Dn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ V(Dn, {
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
		/* @__PURE__ */ H(dn, { children: [
			/* @__PURE__ */ H("span", { children: [
				h("Price"),
				" (",
				r,
				")"
			] }),
			/* @__PURE__ */ H("span", {
				style: { textAlign: "center" },
				children: [
					h("Amount"),
					" (",
					_,
					")"
				]
			}),
			/* @__PURE__ */ H("span", {
				style: { textAlign: "right" },
				children: [
					h("SUM"),
					" (",
					_,
					")"
				]
			})
		] }),
		/* @__PURE__ */ H(fn, { children: [
			s !== "bids" && /* @__PURE__ */ V(pn, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - en)).map((e) => /* @__PURE__ */ H(mn, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ V(hn, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ V(gn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ V(gn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ H(_n, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ V(vn, { children: h("Spread") }),
					/* @__PURE__ */ V(yn, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ V(bn, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ V(pn, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? en * 2 : en).map((e) => /* @__PURE__ */ H(mn, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ V(hn, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ V(gn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ V(gn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `b-${e.price}`))
			})
		] })
	] });
	return m ? /* @__PURE__ */ V("div", {
		style: p ? { display: "none" } : { display: "contents" },
		children: E
	}) : /* @__PURE__ */ V(U, {
		style: p ? { display: "none" } : void 0,
		children: E
	});
}, Nn = R(U)`
  flex: 1;
  min-height: 200px;
`, Pn = R.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, Fn = R(T)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, In = R.div`
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
`, Ln = R.div`
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
`, Rn = R(T)`
  gap: 6px;
  align-items: center;
`, zn = R.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, Bn = R.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, Vn = R.div`
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
`, Hn = R.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, Un = R.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, Wn = R.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Gn = R.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, Kn = R.button`
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
`, K = R(a).attrs({
	fontSize: "10px",
	color: "textSubtle"
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, q = R(a).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
`, qn = (e) => e, Jn = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: i, closingSymbol: a, t: o }) => {
	let s = z(), c = t?.(e.symbol), l = e.positionAmt >= 0 ? "BUY" : "SELL", u = Number.isFinite(c) && Number.isFinite(e.entryPrice) ? (c - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), d = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: l,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, f = a === e.symbol;
	return /* @__PURE__ */ H(B, { children: [
		/* @__PURE__ */ V(q, {
			bold: !0,
			children: e.symbol
		}),
		/* @__PURE__ */ V(q, {
			style: { color: l === "BUY" ? s.colors.success : s.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ V(q, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ V(q, { children: c !== void 0 && Number.isFinite(c) ? c.toFixed(2) : "—" }),
		/* @__PURE__ */ H(q, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ V(q, { children: d ? d.toFixed(2) : "—" }),
		/* @__PURE__ */ V(q, {
			style: { color: u >= 0 ? s.colors.success : s.colors.failure },
			children: Number.isFinite(u) ? u.toFixed(4) : "—"
		}),
		/* @__PURE__ */ H(zn, { children: [/* @__PURE__ */ H(Bn, {
			$kind: "tp",
			children: [
				o("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ H(Bn, {
			$kind: "sl",
			children: [
				o("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ H(Rn, { children: [/* @__PURE__ */ V(O, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => i(e, c ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: o("TP/SL")
		}), /* @__PURE__ */ V(O, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: f || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: f,
			children: o("Close")
		})] })
	] });
}, Yn = ({ tab: e, onTabChange: t, positions: n, openOrders: r, tradeHistory: i = [], transactionHistory: o = [], onShareTrade: s, useMarkPriceForSymbol: c, computeLiqPrice: l, onClosePosition: u, onEditTpSl: d, onCancelOrder: f, closingSymbol: p = null, cancellingOrderId: m = null, t: h = qn }) => {
	let g = z(), _ = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ H(Nn, { children: [/* @__PURE__ */ H(ae, {
		activeIndex: _.indexOf(e),
		onItemClick: (e) => t(_[e]),
		children: [
			/* @__PURE__ */ H(W, { children: [
				h("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ H(W, { children: [
				h("Open Orders"),
				" (",
				r.length,
				")"
			] }),
			/* @__PURE__ */ V(W, { children: h("Order History") }),
			/* @__PURE__ */ H(W, { children: [
				h("Trade History"),
				" (",
				i.length,
				")"
			] }),
			/* @__PURE__ */ H(W, { children: [
				h("Transaction History"),
				" (",
				o.length,
				")"
			] })
		]
	}), /* @__PURE__ */ H(Pn, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ V(Fn, { children: /* @__PURE__ */ V(a, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No open positions")
		}) }) : /* @__PURE__ */ H(In, { children: [
			/* @__PURE__ */ V(K, { children: h("Symbol") }),
			/* @__PURE__ */ V(K, { children: h("Size") }),
			/* @__PURE__ */ V(K, { children: h("Entry") }),
			/* @__PURE__ */ V(K, { children: h("Mark") }),
			/* @__PURE__ */ V(K, { children: h("Lev") }),
			/* @__PURE__ */ V(K, { children: h("Liq") }),
			/* @__PURE__ */ V(K, { children: h("uPnL") }),
			/* @__PURE__ */ V(K, { children: h("TP/SL") }),
			/* @__PURE__ */ V(K, {}),
			n.map((e) => /* @__PURE__ */ V(Ln, { children: /* @__PURE__ */ V(Jn, {
				p: e,
				useMarkPriceForSymbol: c,
				computeLiqPrice: l,
				onClose: u,
				onEditTpSl: d,
				closingSymbol: p,
				t: h
			}) }, e.id))
		] })),
		e === "orders" && (r.length === 0 ? /* @__PURE__ */ V(Fn, { children: /* @__PURE__ */ V(a, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No open orders")
		}) }) : /* @__PURE__ */ H(Vn, { children: [
			/* @__PURE__ */ V(K, { children: h("Symbol") }),
			/* @__PURE__ */ V(K, { children: h("Side") }),
			/* @__PURE__ */ V(K, { children: h("Type") }),
			/* @__PURE__ */ V(K, { children: h("Price") }),
			/* @__PURE__ */ V(K, { children: h("Size") }),
			/* @__PURE__ */ V(K, { children: h("Filled") }),
			/* @__PURE__ */ V(K, { children: h("Status") }),
			/* @__PURE__ */ V(K, {}),
			r.map((e) => {
				let t = m === e.id;
				return /* @__PURE__ */ H(Ln, { children: [
					/* @__PURE__ */ V(q, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ V(q, {
						style: { color: e.side === "BUY" ? g.colors.success : g.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ V(q, { children: e.type }),
					/* @__PURE__ */ V(q, { children: e.price }),
					/* @__PURE__ */ V(q, { children: e.origQty }),
					/* @__PURE__ */ V(q, { children: e.executedQty }),
					/* @__PURE__ */ V(q, { children: e.status }),
					/* @__PURE__ */ V(Rn, { children: /* @__PURE__ */ V(O, {
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
		e === "history" && /* @__PURE__ */ V(Fn, { children: /* @__PURE__ */ V(a, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("Order history coming soon")
		}) }),
		e === "trades" && (i.length === 0 ? /* @__PURE__ */ V(Fn, { children: /* @__PURE__ */ V(a, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No trades yet")
		}) }) : /* @__PURE__ */ H(Hn, { children: [
			/* @__PURE__ */ V(K, { children: h("Time") }),
			/* @__PURE__ */ V(K, { children: h("Symbol") }),
			/* @__PURE__ */ V(K, { children: h("Price") }),
			/* @__PURE__ */ V(K, { children: h("Quantity") }),
			/* @__PURE__ */ V(K, { children: h("Fee") }),
			/* @__PURE__ */ V(K, { children: h("Realized profit") }),
			i.map((e) => {
				let t = e.side === "BUY" ? g.colors.success : g.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ H(Ln, { children: [
					/* @__PURE__ */ V(q, {
						as: "div",
						children: /* @__PURE__ */ H(Wn, { children: [/* @__PURE__ */ V("span", { children: e.date }), /* @__PURE__ */ V("span", { children: e.time })] })
					}),
					/* @__PURE__ */ V(q, {
						as: "div",
						children: /* @__PURE__ */ H(Gn, { children: [/* @__PURE__ */ V("span", { children: e.symbol }), /* @__PURE__ */ V("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? h("Buy") : h("Sell")
						})] })
					}),
					/* @__PURE__ */ V(q, { children: e.price }),
					/* @__PURE__ */ V(q, { children: e.quantity }),
					/* @__PURE__ */ V(q, { children: e.fee }),
					/* @__PURE__ */ V(q, {
						as: "div",
						children: /* @__PURE__ */ H(T, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ V("span", {
								style: { color: n ? g.colors.success : g.colors.failure },
								children: e.realizedProfit
							}), s && /* @__PURE__ */ V(Kn, {
								type: "button",
								onClick: () => s(e),
								"aria-label": h("Share trade"),
								children: /* @__PURE__ */ V("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ V("path", {
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
		e === "transactions" && (o.length === 0 ? /* @__PURE__ */ V(Fn, { children: /* @__PURE__ */ V(a, {
			fontSize: "12px",
			color: "textSubtle",
			children: h("No transactions yet")
		}) }) : /* @__PURE__ */ H(Un, { children: [
			/* @__PURE__ */ V(K, { children: h("Time") }),
			/* @__PURE__ */ V(K, { children: h("Type") }),
			/* @__PURE__ */ V(K, { children: h("Amount") }),
			/* @__PURE__ */ V(K, { children: h("Symbol") }),
			o.map((e) => /* @__PURE__ */ H(Ln, { children: [
				/* @__PURE__ */ V(q, {
					as: "div",
					children: /* @__PURE__ */ H(Wn, { children: [/* @__PURE__ */ V("span", { children: e.date }), /* @__PURE__ */ V("span", { children: e.time })] })
				}),
				/* @__PURE__ */ V(q, { children: e.type }),
				/* @__PURE__ */ V(q, { children: e.amount }),
				/* @__PURE__ */ V(q, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, Xn = R(T)`
  flex-direction: column;
  gap: 8px;
`, Zn = R(T)`
  gap: 8px;
`, Qn = R.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, $n = R(a).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, er = R(o)`
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
`, tr = R(T)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, nr = (e) => e, rr = ({ isOpen: e, symbol: t, positionSide: n, qty: r, entryPrice: i, markPrice: o, onConfirm: s, onClose: c, t: u = nr }) => {
	let d = z(), f = n === "LONG" ? 1 : -1, [p, m] = L(""), [h, g] = L(""), [_, v] = L(""), [y, b] = L(""), [C, w] = L(!1);
	N(() => {
		e || (m(""), g(""), v(""), b(""));
	}, [e]);
	let E = (e) => r > 0 ? i + f * e / r : NaN, D = (e) => r > 0 ? f * (e - i) * r : NaN, k = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", A = (e) => {
		m(e);
		let t = Number(e);
		g(Number.isFinite(t) && e !== "" ? k(D(t), 4) : "");
	}, j = (e) => {
		g(e);
		let t = Number(e);
		m(Number.isFinite(t) && e !== "" ? k(E(t), 2) : "");
	}, M = (e) => {
		v(e);
		let t = Number(e);
		b(Number.isFinite(t) && e !== "" ? k(D(t), 4) : "");
	}, ee = (e) => {
		b(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? v(k(E(t), 2)) : b("");
	}, P = F(() => {
		let e = Number(p), t = Number(_), r = p !== "" && Number.isFinite(e), a = _ !== "" && Number.isFinite(t);
		if (n === "LONG") {
			if (r && e <= i) return u("Take Profit price must be above entry for a LONG position.");
			if (a && t >= i) return u("Stop Loss price must be below entry for a LONG position.");
		} else {
			if (r && e >= i) return u("Take Profit price must be below entry for a SHORT position.");
			if (a && t <= i) return u("Stop Loss price must be above entry for a SHORT position.");
		}
	}, [
		p,
		_,
		n,
		i,
		u
	]), I = !C && (p !== "" || _ !== "") && !P;
	return /* @__PURE__ */ V(x, {
		isOpen: e,
		onDismiss: c,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ V(S, {
			title: u("Set TP / SL"),
			onDismiss: c,
			children: /* @__PURE__ */ H(T, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ H(tr, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Symbol")
					}), /* @__PURE__ */ H(a, {
						fontSize: "14px",
						bold: !0,
						style: { color: n === "LONG" ? d.colors.success : d.colors.failure },
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ H(tr, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Entry")
					}), /* @__PURE__ */ V(a, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(i) ? i.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ H(tr, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Mark")
					}), /* @__PURE__ */ V(a, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? o.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ V(Qn, {}),
					/* @__PURE__ */ H(Xn, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.success,
						children: u("Take Profit")
					}), /* @__PURE__ */ H(Zn, { children: [/* @__PURE__ */ H(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ V($n, { children: u("Trigger Price") }), /* @__PURE__ */ V(er, {
							value: p,
							onChange: (e) => A(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ H(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ V($n, { children: u("PnL (USDT)") }), /* @__PURE__ */ V(er, {
							value: h,
							onChange: (e) => j(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ H(Xn, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.failure,
						children: u("Stop Loss")
					}), /* @__PURE__ */ H(Zn, { children: [/* @__PURE__ */ H(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ V($n, { children: u("Trigger Price") }), /* @__PURE__ */ V(er, {
							value: _,
							onChange: (e) => M(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ H(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ V($n, { children: u("PnL (USDT)") }), /* @__PURE__ */ V(er, {
							value: y,
							onChange: (e) => ee(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					P && /* @__PURE__ */ V(a, {
						fontSize: "14px",
						color: "failure",
						children: P
					}),
					/* @__PURE__ */ V(O, {
						onClick: async () => {
							if (I) {
								w(!0);
								try {
									await s({
										symbol: t,
										closeSide: n === "LONG" ? "SELL" : "BUY",
										tpPrice: p,
										slPrice: _,
										qty: String(r),
										closePosition: !0
									}), c();
								} finally {
									w(!1);
								}
							}
						},
						disabled: !I,
						isLoading: C,
						scale: "md",
						children: u("Confirm")
					})
				]
			})
		})
	});
}, ir = R(U)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, ar = (e) => typeof e == "number" ? `${e}px` : e, or = ({ children: e, minHeight: t = "420px" }) => /* @__PURE__ */ V(ir, {
	$minHeight: ar(t),
	children: e
}), sr = R(U)`
  height: 100%;
`, cr = R.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, lr = R.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, ur = (e) => e, dr = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = ur }) => /* @__PURE__ */ H(sr, { children: [/* @__PURE__ */ H(ae, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ V(W, { children: i("Order Book") }), /* @__PURE__ */ V(W, { children: i("Trades") })]
}), /* @__PURE__ */ H(cr, { children: [/* @__PURE__ */ V(lr, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ V(lr, {
	$hidden: e !== "trades",
	children: r
})] })] }), fr = R(U)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, pr = R(T)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, mr = R.button`
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
`, hr = R(T)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, gr = R.button`
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
`, _r = R.button`
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
`, vr = R(T)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, yr = R(a).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, br = R(T)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, xr = R.div`
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
`, Sr = R(a).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, Cr = R.input`
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
`, wr = R(O).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, Tr = R.div`
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
`, Er = R.input`
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
`, Dr = R.button`
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
`, Or = R.div`
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
`, kr = R.button`
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
`, Ar = R.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, jr = R(o)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, Mr = R.div`
  padding: 4px 0;
`, Nr = R(T)`
  gap: 8px;
`, Pr = R.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, Fr = R.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, Ir = ({ value: e, onChange: t }) => /* @__PURE__ */ H(Pr, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ V(Fr, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ V(Fr, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), Lr = R(O)`
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
`, Rr = R.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, zr = R(a).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Br = R(a).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, Vr = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Hr = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: r, typeKey: i, onTypeKeyChange: o, availableBalanceText: s, preview: u, feeText: d, sizePercent: f, onSizePercentChange: p, cta: m, canSubmit: h, isSubmitting: _ = !1, marginSubmitting: y = !1, authReady: b = !0, hasAddress: x = !0, errorSlot: S, onSubmit: C, onLeverageClick: w, onMarginModeToggle: E, onDepositClick: O, t: k = Vr }) => {
	let A = n.sizeUnit === "QUOTE" ? t : e, j = (e) => r({
		...n,
		side: e
	}), M = () => r({
		...n,
		sizeUnit: n.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), ee = () => r({
		...n,
		tpSlEnabled: !n.tpSlEnabled
	}), P = i === "stop-limit" || i === "stop-market", F = i === "limit" || i === "stop-limit", R = P, te = I(null), z = I(null), [U, re] = L(!1), [ie, W] = L({
		top: 0,
		left: 0
	});
	N(() => {
		if (!U || !te.current || !z.current) return;
		let e = te.current.getBoundingClientRect(), t = z.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		W({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [U]), N(() => {
		if (!U) return;
		let e = (e) => {
			let t = e.target;
			te.current && !te.current.contains(t) && z.current && !z.current.contains(t) && re(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [U]);
	let ae = P, oe = i === "stop-market" ? `${k("Stop Market")} ▾` : `${k("Stop Limit")} ▾`, se = () => {
		re((e) => !e);
	}, ce = (e) => {
		o(e), re(!1);
	};
	return /* @__PURE__ */ H(fr, { children: [
		/* @__PURE__ */ H(pr, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ V(mr, {
				$active: i === e,
				onClick: () => o(e),
				children: k(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ V(mr, {
				ref: te,
				$active: ae,
				onClick: se,
				"aria-haspopup": "menu",
				"aria-expanded": U,
				children: oe
			}),
			U && typeof document < "u" && ne(/* @__PURE__ */ H(Or, {
				ref: z,
				style: {
					top: ie.top,
					left: ie.left
				},
				role: "menu",
				children: [/* @__PURE__ */ V(kr, {
					$active: i === "stop-limit",
					role: "menuitem",
					onClick: () => ce("stop-limit"),
					children: k("Stop Limit")
				}), /* @__PURE__ */ V(kr, {
					$active: i === "stop-market",
					role: "menuitem",
					onClick: () => ce("stop-market"),
					children: k("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ H(hr, { children: [/* @__PURE__ */ V(gr, {
			$active: n.side === "BUY",
			$side: "BUY",
			onClick: () => j("BUY"),
			children: k("Buy")
		}), /* @__PURE__ */ V(gr, {
			$active: n.side === "SELL",
			$side: "SELL",
			onClick: () => j("SELL"),
			children: k("Sell")
		})] }),
		/* @__PURE__ */ H(T, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ V(_r, {
				disabled: y,
				onClick: E,
				title: k("Margin mode"),
				children: n.marginMode === "CROSS" ? k("Cross") : k("Isolated")
			}), /* @__PURE__ */ H(_r, {
				onClick: w,
				title: k("Leverage"),
				children: [n.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ H(vr, { children: [/* @__PURE__ */ V(yr, { children: k("Avbl") }), /* @__PURE__ */ H(br, { children: [/* @__PURE__ */ H(a, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				s,
				" ",
				t
			]
		}), /* @__PURE__ */ V(c, {
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
			children: /* @__PURE__ */ V(g, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		R && /* @__PURE__ */ H(Tr, { children: [
			/* @__PURE__ */ V(Sr, { children: k("Stop") }),
			/* @__PURE__ */ V(Er, {
				value: n.stopPrice,
				onChange: (e) => r({
					...n,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": k("Stop price")
			}),
			/* @__PURE__ */ H(Dr, {
				type: "button",
				onClick: () => r({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: k("Trigger source"),
				children: [n.stopPriceSource === "MARK" ? k("Mark") : k("Last"), " ▾"]
			})
		] }),
		F && /* @__PURE__ */ H(Tr, { children: [
			/* @__PURE__ */ V(Sr, { children: k("Price") }),
			/* @__PURE__ */ V(Er, {
				value: n.price,
				onChange: (e) => r({
					...n,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": k("Limit price")
			}),
			/* @__PURE__ */ V(wr, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: t
			})
		] }),
		i === "stop-limit" && /* @__PURE__ */ H(Tr, { children: [
			/* @__PURE__ */ V(Sr, { children: k("TIF") }),
			/* @__PURE__ */ V(T, { flex: 1 }),
			/* @__PURE__ */ H(Ar, {
				value: n.timeInForce === "GTX" ? "GTC" : n.timeInForce,
				onChange: (e) => r({
					...n,
					timeInForce: e.target.value
				}),
				"aria-label": k("Time in force"),
				children: [
					/* @__PURE__ */ V("option", {
						value: "GTC",
						children: "GTC"
					}),
					/* @__PURE__ */ V("option", {
						value: "IOC",
						children: "IOC"
					}),
					/* @__PURE__ */ V("option", {
						value: "FOK",
						children: "FOK"
					})
				]
			})
		] }),
		/* @__PURE__ */ H(xr, { children: [
			/* @__PURE__ */ V(Sr, { children: k("Size") }),
			/* @__PURE__ */ V(Cr, {
				value: n.quantity,
				onChange: (e) => r({
					...n,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ H(wr, {
				onClick: M,
				title: k("Toggle unit"),
				children: [A, " ▾"]
			})
		] }),
		/* @__PURE__ */ V(Mr, { children: /* @__PURE__ */ V(D, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: f,
			onValueChanged: p,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ H(T, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ V(v, {
				scale: "sm",
				checked: n.reduceOnly,
				onChange: (e) => r({
					...n,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ V(a, {
				fontSize: "14px",
				children: k("Reduce Only")
			})]
		}),
		/* @__PURE__ */ H(T, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ V(v, {
				scale: "sm",
				checked: n.tpSlEnabled,
				onChange: ee
			}), /* @__PURE__ */ V(a, {
				fontSize: "14px",
				children: k("Take Profit / Stop Loss")
			})]
		}),
		n.tpSlEnabled && /* @__PURE__ */ H(T, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ H(l, { children: [/* @__PURE__ */ H(T, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ V(a, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: k("Take Profit")
				}), /* @__PURE__ */ V(Ir, {
					value: n.takeProfitSource ?? "LAST",
					onChange: (e) => r({
						...n,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ H(Nr, { children: [/* @__PURE__ */ H(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ V(a, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("Trigger Price")
				}), /* @__PURE__ */ V(jr, {
					value: n.takeProfitPrice,
					onChange: (e) => r({
						...n,
						takeProfitPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ H(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ V(a, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("PnL (USDT)")
				}), /* @__PURE__ */ V(jr, {
					value: n.takeProfitPnl ?? "",
					onChange: (e) => r({
						...n,
						takeProfitPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] }), /* @__PURE__ */ H(l, { children: [/* @__PURE__ */ H(T, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ V(a, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: k("Stop Loss")
				}), /* @__PURE__ */ V(Ir, {
					value: n.stopLossSource ?? "LAST",
					onChange: (e) => r({
						...n,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ H(Nr, { children: [/* @__PURE__ */ H(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ V(a, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("Trigger Price")
				}), /* @__PURE__ */ V(jr, {
					value: n.stopLossPrice,
					onChange: (e) => r({
						...n,
						stopLossPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ H(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ V(a, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: k("PnL (USDT)")
				}), /* @__PURE__ */ V(jr, {
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
		S,
		b ? /* @__PURE__ */ V(Lr, {
			onClick: C,
			disabled: !h,
			isLoading: _,
			scale: "md",
			$side: n.side,
			children: m
		}) : /* @__PURE__ */ V(Lr, {
			$side: n.side,
			onClick: C,
			scale: "md",
			disabled: !x,
			children: m
		}),
		/* @__PURE__ */ H(Rr, { children: [
			/* @__PURE__ */ V(zr, { children: k("Cost") }),
			/* @__PURE__ */ V(Br, { children: u.cost }),
			!P && /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ V(zr, { children: k("Est. Liq. Price") }), /* @__PURE__ */ V(Br, { children: u.liq })] }),
			/* @__PURE__ */ V(zr, { children: k("Fees") }),
			/* @__PURE__ */ V(Br, { children: d })
		] })
	] });
}, Ur = R(T)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Wr = R.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, Gr = R(T)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, Kr = R(a).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, qr = R(T)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, Jr = R(a).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Yr = R(T)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Xr = R.button`
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
`, Zr = R(T)`
  flex-direction: column;
`, Qr = R(T)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, $r = R.input`
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
`, ei = R(T)`
  gap: 6px;
  margin-top: 4px;
`, ti = R.button`
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
`, ni = R.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, J = R(T)`
  justify-content: space-between;
  align-items: center;
`, ri = R(T)`
  flex-direction: column;
  gap: 8px;
`, ii = R(T)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, ai = R.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, oi = R(a).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, si = R.div`
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
`, ci = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, li = [
	25,
	50,
	75
], ui = ({ isOpen: e, onClose: t, step: n, evmAddress: r, solanaAddress: i, isLoadingAssets: o = !1, assets: s, selectedAssetId: c, onSelectAsset: l, otherSupportedSymbols: u = [], selectedAsset: d, amount: f, onAmountChange: p, sourceAddress: m, errorSlot: h, onPercentClick: g, submitState: _, canContinue: v, onContinue: y, onBack: b, receipt: w, checkingElapsedMs: E = 0, onDepositAgain: D, onRetry: k, t: A = ci, renderTokenIcon: j, renderSpinner: M }) => {
	let N = A(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund your Account"), ee = (() => {
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
	})(), P = (e, t = 24) => j ? j(e, t) : /* @__PURE__ */ V(si, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), F = (e) => M ? M(e) : /* @__PURE__ */ V("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ V("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), I = _ === "switching-chain" || _ === "approving" || _ === "approve-confirming" || _ === "depositing" || _ === "deposit-confirming";
	return /* @__PURE__ */ V(x, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ V(S, {
			title: N,
			onDismiss: t,
			children: /* @__PURE__ */ H(Ur, { children: [
				n === "amount" && /* @__PURE__ */ V(T, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ V(O, {
						scale: "sm",
						variant: "text",
						onClick: b,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ V(C, { width: "18px" }),
						children: A("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ H(B, { children: [
					/* @__PURE__ */ H(Wr, { children: [
						r && /* @__PURE__ */ H(Gr, { children: [
							/* @__PURE__ */ V("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ V(Kr, { children: r }),
							/* @__PURE__ */ V(a, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						i && /* @__PURE__ */ H(Gr, {
							style: { borderTop: r ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ V("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ V(Kr, { children: i }),
								/* @__PURE__ */ V(a, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ H(qr, { children: [/* @__PURE__ */ H("div", { children: [/* @__PURE__ */ V(Jr, {
							color: "textSubtle",
							children: A("Balance")
						}), /* @__PURE__ */ V(a, {
							fontSize: "12px",
							color: "textSubtle",
							children: A("In your wallet")
						})] }), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							bold: !0,
							children: s.some((e) => e.hasBalance) ? A("Ready") : "—"
						})] })
					] }),
					o && /* @__PURE__ */ V(a, {
						fontSize: "12px",
						children: A("Loading tokens...")
					}),
					!o && s.length === 0 && /* @__PURE__ */ H(T, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								children: A("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ V(a, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							u.length > 0 && /* @__PURE__ */ V(a, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
							})
						]
					}),
					s.length > 0 && /* @__PURE__ */ V(Yr, { children: s.map((e) => /* @__PURE__ */ V(Xr, {
						$selected: c === e.id,
						onClick: () => l(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ H(T, {
							alignItems: "center",
							style: { gap: 12 },
							children: [P(e, 32), /* @__PURE__ */ H(Zr, { children: [/* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ H(a, {
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
					s.length > 0 && u.length > 0 && /* @__PURE__ */ V(a, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: A("Also supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && d && /* @__PURE__ */ H(B, { children: [
					/* @__PURE__ */ H(Qr, { children: [/* @__PURE__ */ H(T, {
						alignItems: "center",
						style: { gap: 12 },
						children: [P(d, 40), /* @__PURE__ */ H(T, {
							flexDirection: "column",
							children: [/* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								children: d.displayName || d.symbol
							}), /* @__PURE__ */ V(a, {
								fontSize: "12px",
								color: "textSubtle",
								children: d.balanceText
							})]
						})]
					}), /* @__PURE__ */ H(T, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ V($r, {
							value: f,
							onChange: (e) => p(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ H(ei, { children: [li.map((e) => /* @__PURE__ */ H(ti, {
							onClick: () => g(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ V(ti, {
							onClick: () => g(100),
							children: A("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ H(ni, { children: [
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(Jr, {
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							children: m ?? "—"
						})] }),
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(Jr, {
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(Jr, {
							color: "textSubtle",
							children: A("Token")
						}), /* @__PURE__ */ H(T, {
							alignItems: "center",
							style: { gap: 6 },
							children: [P(d, 16), /* @__PURE__ */ V(a, {
								fontSize: "14px",
								bold: !0,
								children: d.symbol
							})]
						})] })
					] }),
					h,
					/* @__PURE__ */ V(O, {
						onClick: y,
						disabled: !v || I,
						isLoading: I,
						scale: "md",
						children: ee
					})
				] }),
				n === "checking" && w && /* @__PURE__ */ H(B, { children: [
					/* @__PURE__ */ H(T, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [F(72), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ H(ri, { children: [
						/* @__PURE__ */ H(ii, {
							$state: "done",
							children: [/* @__PURE__ */ V(ai, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ V(a, {
								fontSize: "13px",
								children: A("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ H(ii, {
							$state: "done",
							children: [/* @__PURE__ */ V(ai, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ V(a, {
								fontSize: "13px",
								children: A("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ H(ii, {
							$state: "active",
							children: [/* @__PURE__ */ V(ai, {
								$state: "active",
								children: F(16)
							}), /* @__PURE__ */ V(a, {
								fontSize: "13px",
								children: A("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ H(ni, { children: [
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(Jr, {
							color: "textSubtle",
							children: A("Amount")
						}), /* @__PURE__ */ H(a, {
							fontSize: "14px",
							bold: !0,
							children: [
								w.amount,
								" ",
								w.assetSymbol
							]
						})] }),
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(Jr, {
							color: "textSubtle",
							children: A("Tx hash")
						}), /* @__PURE__ */ H(a, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								w.hash.slice(0, 10),
								"…",
								w.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(Jr, {
							color: "textSubtle",
							children: A("Elapsed")
						}), /* @__PURE__ */ H(a, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(E / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ V(O, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: A("Close")
					})
				] }),
				n === "success" && w && /* @__PURE__ */ H(B, { children: [
					/* @__PURE__ */ H(oi, { children: [
						w.amount,
						" ",
						w.assetSymbol
					] }),
					/* @__PURE__ */ H(ni, { children: [
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(a, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							bold: !0,
							children: w.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(a, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							bold: !0,
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(a, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Processing time")
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							bold: !0,
							children: A("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ V(ni, { children: /* @__PURE__ */ H(J, { children: [/* @__PURE__ */ V(a, {
						fontSize: "14px",
						color: "textSubtle",
						children: A("Tx hash")
					}), /* @__PURE__ */ H(a, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							w.hash.slice(0, 10),
							"…",
							w.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ H(T, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ V(O, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: A("View Balance")
						}), /* @__PURE__ */ V(O, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: D,
							children: A("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ H(B, { children: [
					/* @__PURE__ */ H(T, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ V(a, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ V(a, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("The transaction did not go through. Your funds did not move.")
						})]
					}),
					h,
					/* @__PURE__ */ H(T, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ V(O, {
							style: { flex: 1 },
							scale: "md",
							onClick: k,
							children: A("Try Again")
						}), /* @__PURE__ */ V(O, {
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
}, di = (e) => e, fi = ({ isOpen: e, onClose: n, phase: r, eoaAddress: i, agentAddress: o, isProvisioning: s = !1, linkButtonLabel: c, isLinkDisabled: u = !1, isLinkPending: d = !1, onLinkWallet: f, approveButtonLabel: p, isApproveDisabled: m = !1, isApprovePending: h = !1, onApprove: g, errorSlot: _, t: v = di }) => {
	let y = o ?? v(s ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ V(x, {
		isOpen: e,
		onDismiss: n,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ V(S, {
			title: v("Enable Perps Trading"),
			onDismiss: n,
			children: /* @__PURE__ */ H(T, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ V(a, {
						fontSize: "14px",
						color: "textSubtle",
						children: v("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ H(l, { children: [/* @__PURE__ */ V(a, {
						fontSize: "12px",
						color: "textSubtle",
						children: v("Your wallet")
					}), /* @__PURE__ */ V(a, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: i ?? "—"
					})] }),
					/* @__PURE__ */ H(l, { children: [/* @__PURE__ */ V(a, {
						fontSize: "12px",
						color: "textSubtle",
						children: v("Agent (trading signer)")
					}), /* @__PURE__ */ V(a, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: y
					})] }),
					_,
					r === "link-wallet" && /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ V(O, {
						onClick: f,
						disabled: u || d,
						isLoading: d,
						scale: "md",
						children: c
					}), /* @__PURE__ */ V(a, {
						fontSize: "11px",
						color: "textSubtle",
						children: v("You'll sign one message in your wallet. No funds move.")
					})] }),
					(r === "authorize-agent" || r === "checking-status") && /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ V(O, {
						onClick: g,
						disabled: m || h || r === "checking-status",
						isLoading: h || r === "checking-status",
						scale: "md",
						children: p
					}), /* @__PURE__ */ V(a, {
						fontSize: "11px",
						color: "textSubtle",
						children: v("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					r === "done" && /* @__PURE__ */ V(t, {
						variant: "success",
						children: /* @__PURE__ */ V(w, { children: v("Trading enabled.") })
					})
				]
			})
		})
	});
}, pi = [
	50,
	250,
	500,
	1001
], mi = 1001, hi = (e) => e <= 50 ? "safe" : e <= 250 ? "warn" : "danger", gi = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "Caution" : "Danger zone", _i = () => /* @__PURE__ */ V("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", { d: "M12 4l-7 7h4v9h6v-9h4z" })
}), vi = () => /* @__PURE__ */ V("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", { d: "M12 20l7-7h-4V4h-6v9H5z" })
}), yi = () => /* @__PURE__ */ V("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ V("path", {
		d: "M7.99636 11.2598C8.18224 11.2598 8.3393 11.1966 8.46752 11.0702C8.59563 10.9436 8.65969 10.7869 8.65969 10.6V7.85984C8.65969 7.67284 8.5968 7.51612 8.47102 7.38967C8.34524 7.26323 8.18936 7.20001 8.00336 7.20001C7.81747 7.20001 7.66041 7.26323 7.53219 7.38967C7.40408 7.51612 7.34002 7.67284 7.34002 7.85984V10.6C7.34002 10.7869 7.40291 10.9436 7.52869 11.0702C7.65447 11.1966 7.81036 11.2598 7.99636 11.2598ZM7.99636 6.07968C8.18791 6.07968 8.34969 6.0149 8.48169 5.88534C8.61358 5.75567 8.67952 5.59506 8.67952 5.40351C8.67952 5.21195 8.61474 5.05018 8.48519 4.91818C8.35552 4.78629 8.19491 4.72034 8.00336 4.72034C7.8118 4.72034 7.65002 4.78512 7.51802 4.91467C7.38613 5.04434 7.32019 5.20495 7.32019 5.39651C7.32019 5.58806 7.38497 5.74984 7.51452 5.88184C7.64419 6.01373 7.8048 6.07968 7.99636 6.07968ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), bi = () => /* @__PURE__ */ V("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), xi = () => /* @__PURE__ */ V("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ V("path", {
		d: "M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Si = () => /* @__PURE__ */ V("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Ci = R(U)`
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
`, wi = R.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
`, Ti = R.div`
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
`, Ei = R.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0 16px 16px 16px;
`, Di = R.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
R(T)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, R.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, R.span`
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
`, R.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, R.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, R.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var Oi = R.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ki = R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ai = R(T)`
  align-items: center;
  justify-content: space-between;
`, ji = R(a).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, Mi = R.button`
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
`, Ni = R.span`
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
`, Pi = R.div`
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
`, Fi = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, Ii = R.span`
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
`, Li = R.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, Ri = R.input`
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
`, zi = R.button`
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
`, Bi = R.span`
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
`, Vi = R.span`
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
R.span`
  font-size: 14px;
  font-weight: 600;
`;
var Hi = R(T)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, Ui = R.button`
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
`, Wi = R.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Gi = R(T)`
  justify-content: space-between;
  align-items: center;
`, Ki = R.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, qi = R.span`
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
`, Ji = R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, Yi = R.div`
  position: relative;
  height: 21px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;
`, Xi = R.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $fillPct: e }) => `${e}%`};
  border-radius: 24px 0 0 24px;
  background: ${({ theme: e, $zone: t, $degen: n }) => n ? "linear-gradient(90deg, #FAD658 0%, #ED4B9E 100%)" : t === "safe" ? e.colors.success : t === "warn" ? e.colors.warning : e.colors.failure};
  box-shadow: ${({ $degen: e }) => e ? "0 2px 0 0 rgba(0, 0, 0, 0.06) inset" : "none"};
`, Zi = R.span`
  position: absolute;
  top: ${({ $variant: e }) => e === "triple" ? "-15px" : "-10px"};
  left: ${({ $fillPct: e, $variant: t }) => t === "triple" ? `calc(${e}% - 22px)` : t === "double" ? `calc(${e}% - 20.7px)` : `calc(${e}% - 19px)`};
  width: ${({ $variant: e }) => e === "triple" ? "44px" : e === "double" ? "41.455px" : "38.004px"};
  height: ${({ $variant: e }) => e === "triple" ? "48px" : e === "double" ? "42.549px" : "38.186px"};
  pointer-events: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`, Qi = () => /* @__PURE__ */ H("svg", {
	width: "38",
	height: "39",
	viewBox: "0 0 38 39",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ V("ellipse", {
			cx: "19.0019",
			cy: "19.6397",
			rx: "19.0019",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "19.0013",
			cy: "17.455",
			rx: "17.8841",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ V("rect", {
			x: "23.3804",
			y: "9",
			width: "11.1776",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), $i = () => /* @__PURE__ */ H("svg", {
	width: "42",
	height: "43",
	viewBox: "0 0 42 43",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ V("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "18.5459",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "22.9092",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ V("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), ea = () => /* @__PURE__ */ H("svg", {
	width: "44",
	height: "48",
	viewBox: "0 0 44 48",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ V("ellipse", {
			cx: "25.0904",
			cy: "29.4522",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "25.0913",
			cy: "27.2753",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "18.5464",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ V("ellipse", {
			cx: "22.9087",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ V("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), ta = R.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, na = R(T)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, ra = R.button`
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
`, ia = R.div`
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
`, aa = R.input`
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
`, oa = R.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`, sa = R(T)`
  align-items: center;
  justify-content: space-between;
`;
R.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var ca = R.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, la = R(T)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, ua = R.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, da = R.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, fa = R(T)`
  align-self: stretch;
  gap: 8px;
`, pa = R.button`
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
`, ma = R(T)`
  align-self: stretch;
  gap: 8px;
`, ha = R(O)`
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
`, ga = R.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, _a = R(T)`
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
`, va = R.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ya = R.span`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, ba = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, leverage: c, onLeverageChange: l, quoteAsset: u, onQuoteAssetClick: d, fundBalanceText: f, onTopUpFund: p, onPercentClick: h, estimatedEntry: g, liqIfLong: _, marginRequired: v, openingFee: y, canSubmit: b, isSubmittingUp: x = !1, isSubmittingDown: S = !1, onUp: C, onDown: w, onDeposit: T, onWithdraw: E, unrealizedPnl: D }) => {
	let O = Math.min(100, Math.max(0, c / mi * 100)), k = hi(c), A = x || S, j = !b || A, M = !b || A;
	return /* @__PURE__ */ H(Ci, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ V(wi, { children: /* @__PURE__ */ H(Di, { children: [/* @__PURE__ */ H(Oi, { children: [
			/* @__PURE__ */ H(ki, { children: [
				/* @__PURE__ */ H(Ai, { children: [/* @__PURE__ */ V(ji, { children: "My Perp Fund" }), /* @__PURE__ */ H(Mi, {
					type: "button",
					onClick: p,
					"aria-label": "Top up fund",
					children: [
						/* @__PURE__ */ V("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text-subtle, #7A6EAA)"
							},
							children: /* @__PURE__ */ V(Si, {})
						}),
						/* @__PURE__ */ V(Ni, { children: f }),
						/* @__PURE__ */ V("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text, #280D5F)"
							},
							children: /* @__PURE__ */ V(xi, {})
						})
					]
				})] }),
				/* @__PURE__ */ V(Pi, { children: /* @__PURE__ */ H(Fi, { children: [/* @__PURE__ */ V(Ii, { children: "My Bet" }), /* @__PURE__ */ H(Li, { children: [/* @__PURE__ */ V(Ri, {
					type: "number",
					inputMode: "decimal",
					value: o,
					onChange: (e) => s(e.target.value),
					"aria-label": "Bet amount",
					placeholder: "0"
				}), /* @__PURE__ */ H(zi, {
					type: "button",
					onClick: d,
					"aria-label": "Choose quote asset",
					children: [/* @__PURE__ */ V(Bi, { children: u }), /* @__PURE__ */ V(Vi, { children: /* @__PURE__ */ V(bi, {}) })]
				})] })] }) }),
				/* @__PURE__ */ H(Hi, { children: [
					/* @__PURE__ */ V(Ui, {
						type: "button",
						onClick: () => h?.(.25),
						children: "25%"
					}),
					/* @__PURE__ */ V(Wi, {}),
					/* @__PURE__ */ V(Ui, {
						type: "button",
						onClick: () => h?.(.5),
						children: "50%"
					}),
					/* @__PURE__ */ V(Wi, {}),
					/* @__PURE__ */ V(Ui, {
						type: "button",
						onClick: () => h?.(1),
						children: "MAX"
					})
				] })
			] }),
			/* @__PURE__ */ H(ki, { children: [
				/* @__PURE__ */ V(ji, { children: "Leverage" }),
				/* @__PURE__ */ H(Gi, { children: [/* @__PURE__ */ H(Ki, { children: [c, "x"] }), /* @__PURE__ */ H(qi, {
					$zone: k,
					children: [gi(k), /* @__PURE__ */ V("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ V(yi, {})
					})]
				})] }),
				/* @__PURE__ */ H(Ji, { children: [/* @__PURE__ */ H(Yi, {
					$fillPct: O,
					$zone: k,
					"aria-hidden": !0,
					children: [
						/* @__PURE__ */ V(Xi, {
							$fillPct: O,
							$zone: k,
							$degen: c > 500
						}),
						/* @__PURE__ */ V(Zi, {
							$fillPct: O,
							$variant: c > 500 ? "triple" : c > 250 ? "double" : "single",
							children: V(c > 500 ? ea : c > 250 ? $i : Qi, {})
						}),
						/* @__PURE__ */ V(ta, {
							type: "range",
							min: 1,
							max: mi,
							value: c,
							onChange: (e) => l(Number(e.target.value)),
							"aria-label": "Leverage"
						})
					]
				}), /* @__PURE__ */ H(na, {
					role: "tablist",
					children: [/* @__PURE__ */ H(ia, { children: [/* @__PURE__ */ V(aa, {
						type: "number",
						min: 1,
						max: mi,
						value: c,
						onChange: (e) => l(Math.max(1, Math.min(mi, Number(e.target.value) || 1))),
						"aria-label": "Custom leverage"
					}), /* @__PURE__ */ V(oa, { children: "x" })] }), pi.map((e) => /* @__PURE__ */ H(ra, {
						type: "button",
						role: "tab",
						"aria-selected": c === e,
						$active: c === e,
						onClick: () => l(e),
						children: [e, "x"]
					}, e))]
				})] })
			] }),
			/* @__PURE__ */ H(sa, { children: [/* @__PURE__ */ V(ji, { children: "Duration" }), /* @__PURE__ */ H(Mi, {
				type: "button",
				disabled: !0,
				children: [/* @__PURE__ */ V(Ni, {
					style: { fontSize: 14 },
					children: "Perpetual"
				}), /* @__PURE__ */ V("span", {
					"aria-hidden": !0,
					children: "▾"
				})]
			})] })
		] }), o && o !== "0" ? /* @__PURE__ */ H(Ti, { children: [/* @__PURE__ */ H(ca, { children: [
			/* @__PURE__ */ H(la, { children: [/* @__PURE__ */ V(ua, { children: "Estimated Entry" }), /* @__PURE__ */ V(da, { children: g })] }),
			/* @__PURE__ */ H(la, { children: [/* @__PURE__ */ V(ua, { children: "Liquidation if long" }), /* @__PURE__ */ V(da, {
				$danger: !0,
				children: _
			})] }),
			/* @__PURE__ */ H(la, { children: [/* @__PURE__ */ V(ua, { children: "Margin required" }), /* @__PURE__ */ V(da, { children: v })] }),
			/* @__PURE__ */ H(la, { children: [/* @__PURE__ */ V(ua, { children: "Opening fee" }), /* @__PURE__ */ V(da, { children: y })] })
		] }), /* @__PURE__ */ H(Ei, { children: [/* @__PURE__ */ H(pa, {
			type: "button",
			$variant: "up",
			disabled: j,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ V(_i, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ H(pa, {
			type: "button",
			$variant: "down",
			disabled: M,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ V(vi, {}), S ? "..." : "DOWN"]
		})] })] }) : /* @__PURE__ */ H(fa, { children: [/* @__PURE__ */ H(pa, {
			type: "button",
			$variant: "up",
			disabled: j,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ V(_i, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ H(pa, {
			type: "button",
			$variant: "down",
			disabled: M,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ V(vi, {}), S ? "..." : "DOWN"]
		})] })] }) }), /* @__PURE__ */ H(ga, { children: [/* @__PURE__ */ H(ma, { children: [/* @__PURE__ */ V(ha, {
			$variant: "primary",
			onClick: T,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ V(ha, {
			$variant: "secondary",
			onClick: E,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ H(_a, { children: [/* @__PURE__ */ H(va, { children: ["Unrealized PnL ", /* @__PURE__ */ V(m, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ V(ya, { children: D })] })] })]
	});
}, xa = R.div`
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
`, Sa = R.button`
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
`, Ca = R.span`
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
`, wa = R.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Ta = R.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Ea = R.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Da = R.span`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  font-size: 12px;
  letter-spacing: 0.12px;
`, Oa = R.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, ka = R.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, Aa = R.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme: e, $positive: t }) => t ? `color-mix(in srgb, ${e.colors.success} 18%, transparent)` : `color-mix(in srgb, ${e.colors.failure} 18%, transparent)`};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, ja = R(T)`
  align-items: center;
  gap: 24px;
  height: 56px;
`, Ma = R.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, Na = R.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Pa = R.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Fa = () => /* @__PURE__ */ V("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", { d: "M6 2l5 8H1z" })
}), Ia = () => /* @__PURE__ */ V("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ V("path", { d: "M6 10L1 2h10z" })
}), La = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c }) => {
	let l = r >= 0;
	return /* @__PURE__ */ H(xa, { children: [/* @__PURE__ */ H(Sa, {
		type: "button",
		onClick: c,
		disabled: !c,
		"aria-label": `Change market · ${t}`,
		children: [/* @__PURE__ */ V(Ca, { children: e }), /* @__PURE__ */ H(wa, { children: [/* @__PURE__ */ H(Ta, { children: [/* @__PURE__ */ V(Ea, { children: t }), /* @__PURE__ */ V(Da, { children: "Perp" })] }), /* @__PURE__ */ H(Oa, { children: [/* @__PURE__ */ V(ka, { children: n }), /* @__PURE__ */ H(Aa, {
			$positive: l,
			children: [
				V(l ? Fa : Ia, {}),
				r.toFixed(2),
				"%"
			]
		})] })] })]
	}), /* @__PURE__ */ H(ja, { children: [
		/* @__PURE__ */ H(Ma, { children: [/* @__PURE__ */ V(Na, { children: "24h Volume" }), /* @__PURE__ */ V(Pa, { children: i })] }),
		/* @__PURE__ */ H(Ma, { children: [/* @__PURE__ */ V(Na, { children: "Open Interest" }), /* @__PURE__ */ V(Pa, { children: a })] }),
		/* @__PURE__ */ H(Ma, { children: [/* @__PURE__ */ V(Na, { children: "Funding Rate" }), /* @__PURE__ */ V(Pa, { children: o })] }),
		/* @__PURE__ */ H(Ma, { children: [/* @__PURE__ */ V(Na, { children: "Next Funding" }), /* @__PURE__ */ V(Pa, { children: s })] })
	] })] });
}, Ra = R(U)`
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
`, za = R.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Ba = R.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Va = R.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Ha = R.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, Ua = R.div`
  position: relative;
  overflow: visible;
`, Wa = R.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, Ga = R.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, Ka = R.span`
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
`, qa = 1e3, Ja = 360, Ya = 20, Xa = 70;
function Za(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * qa), i = e.map((e) => Ya + (1 - (e.price - t) / n) * (Ja - Ya - Xa)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${qa} ${Ja} L 0 ${Ja} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var Qa = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", $a = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", eo = 200, to = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = z(), c = `simple-chart-fill-${ee().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = F(() => Za(r), [r]), d = u?.line ?? Qa, f = u?.area ?? $a, p = u?.endY ?? eo;
	return /* @__PURE__ */ H(Ra, { children: [/* @__PURE__ */ V(za, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ V(Ba, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ H(Va, { children: [/* @__PURE__ */ H(Ha, { children: [/* @__PURE__ */ H(Ua, { children: [/* @__PURE__ */ H("svg", {
		viewBox: `0 0 ${qa} ${Ja}`,
		preserveAspectRatio: "none",
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		},
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ V("defs", { children: /* @__PURE__ */ H("linearGradient", {
				id: c,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ V("stop", {
					offset: "0%",
					stopColor: l,
					stopOpacity: "0.30"
				}), /* @__PURE__ */ V("stop", {
					offset: "100%",
					stopColor: l,
					stopOpacity: "0.02"
				})]
			}) }),
			/* @__PURE__ */ V("path", {
				d: f,
				fill: `url(#${c})`
			}),
			/* @__PURE__ */ V("path", {
				d,
				fill: "none",
				stroke: l,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ V("line", {
				x1: "0",
				y1: p,
				x2: qa - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ V(Ka, {
		style: {
			right: -8,
			top: `calc(${p}/${Ja} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ V(Wa, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ V("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ V(Ga, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ V("span", { children: e }, `${e}-${t}`))
	})] })] });
}, no = R(U)`
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
`, ro = R.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, io = R.button`
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
`, ao = R.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`, oo = R.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Y = R.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, X = R.div`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, so = R(X)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, co = R.span`
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
`, lo = R.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`, uo = R.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, fo = R.span`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, po = R(X)`
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
`, mo = R(X)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
  font-weight: 600;
  font-size: 16px;
`, ho = R(X)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, go = R.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, _o = R.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, vo = R.button`
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
`, yo = R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, bo = R.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, xo = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, So = (e) => xo[e.toUpperCase()] ?? "#7A6EAA", Co = (e) => e === "up" ? "↑" : "↓", wo = (e) => e === "up" ? "Up/Long" : "Down/Short", To = () => /* @__PURE__ */ V("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ V("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), Eo = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ H(no, { children: [
	/* @__PURE__ */ H(ro, {
		role: "tablist",
		children: [
			/* @__PURE__ */ V(io, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ V(io, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ V(io, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ V(yo, { children: "No open positions" }) : /* @__PURE__ */ H(ao, {
		role: "table",
		children: [
			/* @__PURE__ */ V(Y, { children: "Token" }),
			/* @__PURE__ */ V(Y, { children: "Direction" }),
			/* @__PURE__ */ V(Y, { children: "Unrealized PnL" }),
			/* @__PURE__ */ V(Y, { children: "Entry Price" }),
			/* @__PURE__ */ V(Y, { children: "Liq. Price" }),
			/* @__PURE__ */ V(Y, { children: "Distance to Liq" }),
			/* @__PURE__ */ V(Y, {}),
			n.map((e) => /* @__PURE__ */ H(k.Fragment, { children: [
				/* @__PURE__ */ H(so, { children: [o ? o(e) : /* @__PURE__ */ V(co, {
					$color: e.iconColor ?? So(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ H(lo, { children: [/* @__PURE__ */ V(uo, { children: e.symbol }), /* @__PURE__ */ V(fo, { children: e.chainLabel })] })] }),
				/* @__PURE__ */ H(po, {
					$direction: e.direction,
					children: [
						Co(e.direction),
						" ",
						wo(e.direction)
					]
				}),
				/* @__PURE__ */ V(mo, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ V(X, { children: e.entryPrice }),
				/* @__PURE__ */ V(X, { children: e.liqPrice }),
				/* @__PURE__ */ H(ho, { children: [/* @__PURE__ */ V(go, { children: /* @__PURE__ */ V(_o, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ V("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ V(vo, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ V(To, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ V(yo, { children: "No open orders" }) : /* @__PURE__ */ H(oo, {
		role: "table",
		children: [
			/* @__PURE__ */ V(Y, { children: "Symbol" }),
			/* @__PURE__ */ V(Y, { children: "Side" }),
			/* @__PURE__ */ V(Y, { children: "Type" }),
			/* @__PURE__ */ V(Y, { children: "Price" }),
			/* @__PURE__ */ V(Y, { children: "Size" }),
			/* @__PURE__ */ V(Y, { children: "Filled" }),
			/* @__PURE__ */ V(Y, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ H(k.Fragment, { children: [
				/* @__PURE__ */ V(X, { children: e.symbol }),
				/* @__PURE__ */ V(X, { children: /* @__PURE__ */ V(bo, {
					$side: e.side,
					children: e.side
				}) }),
				/* @__PURE__ */ V(X, { children: e.type }),
				/* @__PURE__ */ V(X, { children: e.price }),
				/* @__PURE__ */ V(X, { children: e.origQty }),
				/* @__PURE__ */ V(X, { children: e.executedQty }),
				/* @__PURE__ */ V(X, { children: e.status })
			] }, e.id))
		]
	})),
	e === "history" && /* @__PURE__ */ V(yo, { children: "No transaction history" })
] }), Do = R(i)`
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
`, Oo = R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 8px;
`, ko = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;

  /* Action-sheet mode (narrow): grabber replaces the title bar. */
  @media (max-width: 799px) {
    display: none;
  }
`, Ao = R.button`
  display: none;
  width: 100%;
  margin: -8px 0 0;
  padding: 8px 0;
  border: 0;
  background: transparent;
  cursor: grab;
  touch-action: none;
  &:active { cursor: grabbing; }

  @media (max-width: 799px) {
    display: flex;
    justify-content: center;
  }
`, jo = R.span`
  display: block;
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0.3;
`, Mo = R.h2`
  margin: 0;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
`, No = R.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme: e }) => e.colors.text};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.textSubtle}; }
`, Po = R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`, Fo = R.button`
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
`, Io = R.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  scrollbar-width: thin;
`, Lo = R.div`
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
`, Ro = R.button`
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
`, zo = R.button`
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
`, Bo = R.div`
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
`, Vo = R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Ho = R.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Uo = R.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme: e }) => e.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`, Wo = R.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  overflow: hidden;
`, Go = R.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  min-width: 0;
`, Ko = R.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`, qo = R.span`
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
function Jo(e) {
	let t = (e ?? "").toLowerCase();
	return t.includes("ondo") ? "ondo" : t.includes("xstock") ? "xstocks" : "default";
}
var Yo = R.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`, Xo = R.div`
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
function Zo(e) {
	return e > 0 ? "success" : e < 0 ? "failure" : "textSubtle";
}
function Qo(e) {
	return `${e > 0 ? "+" : ""}${e.toFixed(2)}%`;
}
var $o = ({ searchQuery: t, onSearchChange: n, searchPlaceholder: r = "Search Tokens / Pools", filters: i, filterCounts: s, activeFilter: c, onFilterChange: l, assets: u, selectedAssetId: m, onAssetClick: h, onFavoriteToggle: g, title: _, onClose: v, onGrabberPointerDown: y }) => /* @__PURE__ */ H(Do, { children: [
	/* @__PURE__ */ H(Oo, { children: [
		_ && /* @__PURE__ */ V(Ao, {
			type: "button",
			"aria-label": "Drag to dismiss",
			onPointerDown: y,
			children: /* @__PURE__ */ V(jo, { "aria-hidden": !0 })
		}),
		_ && /* @__PURE__ */ H(ko, { children: [/* @__PURE__ */ V(Mo, { children: _ }), v && /* @__PURE__ */ V(No, {
			type: "button",
			"aria-label": "Close",
			onClick: v,
			children: /* @__PURE__ */ V(e, {
				width: "20px",
				height: "20px"
			})
		})] }),
		/* @__PURE__ */ H(Xo, { children: [/* @__PURE__ */ V(E, {
			width: "24px",
			height: "24px"
		}), /* @__PURE__ */ V(o, {
			value: t,
			placeholder: r,
			onChange: (e) => n(e.target.value),
			"aria-label": "Search tokenized assets"
		})] }),
		/* @__PURE__ */ V(Po, {
			role: "tablist",
			"aria-label": "Asset categories",
			children: i.map((e) => {
				let t = e === c, n = s?.[e];
				return /* @__PURE__ */ H(Fo, {
					$active: t,
					type: "button",
					role: "tab",
					"aria-selected": t,
					onClick: () => l(e),
					children: [e, t && n !== void 0 && /* @__PURE__ */ V("span", {
						style: {
							marginLeft: 6,
							opacity: .7
						},
						children: n
					})]
				}, e);
			})
		})
	] }),
	/* @__PURE__ */ V(Io, { children: u.map((e) => {
		let t = e.id === m, n = e.symbol.slice(0, 2).toUpperCase(), r = e.logoUrls?.find(Boolean);
		return /* @__PURE__ */ H(Ro, {
			type: "button",
			$selected: t,
			onClick: () => h?.(e.id),
			"aria-label": `${e.name} ${e.symbol}, ${e.price}, ${Qo(e.changePct)}`,
			children: [
				/* @__PURE__ */ V(zo, {
					$on: !!e.favorite,
					type: "button",
					"aria-label": e.favorite ? `Unfavorite ${e.symbol}` : `Favorite ${e.symbol}`,
					onClick: (t) => {
						t.stopPropagation(), g?.(e.id);
					},
					children: e.favorite ? /* @__PURE__ */ V(f, {
						width: "16px",
						height: "16px"
					}) : /* @__PURE__ */ V(p, {
						width: "16px",
						height: "16px"
					})
				}),
				/* @__PURE__ */ H(Bo, { children: [r ? /* @__PURE__ */ V(Vo, {
					src: r,
					alt: ""
				}) : /* @__PURE__ */ V(Ho, { children: n }), /* @__PURE__ */ V(Uo, {})] }),
				/* @__PURE__ */ H(Wo, { children: [/* @__PURE__ */ V(Go, { children: /* @__PURE__ */ V(d, {
					as: "h4",
					scale: "md",
					ellipsis: !0,
					children: e.name
				}) }), /* @__PURE__ */ H(Ko, { children: [/* @__PURE__ */ V(a, {
					bold: !0,
					fontSize: "12px",
					color: "textSubtle",
					textTransform: "uppercase",
					style: { letterSpacing: "0.24px" },
					ellipsis: !0,
					children: e.symbol
				}), e.source && /* @__PURE__ */ V(qo, {
					$tone: Jo(e.source),
					children: e.source
				})] })] }),
				/* @__PURE__ */ H(Yo, { children: [/* @__PURE__ */ V(a, {
					bold: !0,
					fontSize: "20px",
					children: e.price
				}), /* @__PURE__ */ V(a, {
					fontSize: "14px",
					color: Zo(e.changePct),
					children: Qo(e.changePct)
				})] })
			]
		}, e.id);
	}) }),
	/* @__PURE__ */ V(Lo, { "aria-hidden": !0 })
] }), es = R(i)`
  & > div {
    padding: 0;
    overflow: hidden;
  }
`, ts = R.div`
  position: relative;
  display: flex;
  flex-direction: column;
`, ns = R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  ${({ $bordered: e, theme: t }) => e && te`
      border-bottom: 1px solid ${t.colors.cardBorder};
    `}
`, rs = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, is = R.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
`, as = R.div`
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
`, os = R.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
`, ss = R.div`
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
`, cs = R.button`
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
`, ls = R.div`
  position: relative;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`, us = R.div`
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
`, ds = R.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme: e }) => e.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`, fs = R.div`
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
`, ps = R.img`
  width: 100%;
  height: 100%;
  border-radius: 35%;
`, ms = R.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, hs = R.input`
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
`, gs = R.div`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: right;
  font-variant-numeric: tabular-nums;
`, _s = R.button`
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
`, vs = R.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`, ys = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
`, bs = R.span`
  display: inline-flex;
  flex-direction: column;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme: e }) => e.colors.textSubtle};
  cursor: help;
`, xs = R.button`
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
`, Ss = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  font-family: 'Kanit', sans-serif;
`, Cs = R.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, ws = R.button`
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
`, Ts = ({ side: e }) => {
	let t = e.logoUrls?.find(Boolean);
	return /* @__PURE__ */ H(ls, { children: [
		t ? /* @__PURE__ */ V(us, { style: { backgroundImage: `url(${t})` } }) : /* @__PURE__ */ V(us, { children: e.symbol.slice(0, 2).toUpperCase() }),
		/* @__PURE__ */ V(ds, {}),
		e.chainLogoUrl && /* @__PURE__ */ V(fs, { children: /* @__PURE__ */ V(ps, {
			src: e.chainLogoUrl,
			alt: ""
		}) })
	] });
}, Es = ({ labelPrefix: e, side: t, onAmountChange: r, onTokenSelect: i, amountId: o }) => {
	let s = !t.symbol;
	return /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ H(rs, { children: [/* @__PURE__ */ H(is, { children: [/* @__PURE__ */ V(a, {
		bold: !0,
		fontSize: "12px",
		color: "textSubtle",
		style: { letterSpacing: "0.12px" },
		children: e
	}), !s && t.address && /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ V(as, {
		"aria-hidden": !0,
		children: t.symbol.slice(0, 1)
	}), /* @__PURE__ */ V(a, {
		bold: !0,
		fontSize: "12px",
		color: "textSubtle",
		style: { letterSpacing: "0.12px" },
		children: t.address
	})] })] }), !s && t.balance && /* @__PURE__ */ H(os, { children: [/* @__PURE__ */ V(y, {
		width: "18px",
		height: "18px"
	}), t.balance] })] }), /* @__PURE__ */ H(ss, { children: [/* @__PURE__ */ H(cs, {
		type: "button",
		onClick: i,
		"aria-label": s ? "Select token" : `Choose token (${t.symbol})`,
		children: [
			!s && /* @__PURE__ */ V(Ts, { side: t }),
			/* @__PURE__ */ V(a, {
				bold: !0,
				fontSize: "20px",
				color: s ? "textSubtle" : "text",
				style: { letterSpacing: "-0.2px" },
				children: s ? "Select token" : t.symbol
			}),
			/* @__PURE__ */ V(n, {
				width: "24px",
				height: "24px"
			})
		]
	}), /* @__PURE__ */ H(ms, { children: [/* @__PURE__ */ V(hs, {
		id: o,
		inputMode: "decimal",
		autoComplete: "off",
		spellCheck: !1,
		value: t.amount,
		placeholder: "0.0",
		disabled: s,
		onChange: (e) => r?.(e.target.value),
		"aria-label": `${e} ${t.symbol || "unselected"} amount`
	}), t.amountUsd && /* @__PURE__ */ V(gs, { children: t.amountUsd })] })] })] });
}, Ds = ({ toSide: e, fromSide: t, onToAmountChange: i, onFromAmountChange: a, onToTokenSelect: o, onFromTokenSelect: s, onSwapDirection: c, slippage: l, onSlippageEdit: d, rateFromLabel: f, rateToLabel: p, expanded: m = !0, onToggleExpanded: g, onRefreshRate: v, canSubmit: y, submitLabel: b = "Swap", onSubmit: x }) => /* @__PURE__ */ H("div", {
	style: {
		display: "flex",
		flexDirection: "column",
		gap: 16
	},
	children: [/* @__PURE__ */ V(es, { children: /* @__PURE__ */ H(ts, { children: [
		/* @__PURE__ */ V(ns, {
			$bordered: !0,
			children: /* @__PURE__ */ V(Es, {
				labelPrefix: "From:",
				side: t,
				onAmountChange: a,
				onTokenSelect: s,
				amountId: "tokenized-swap-from"
			})
		}),
		/* @__PURE__ */ V(ns, { children: /* @__PURE__ */ V(Es, {
			labelPrefix: "To:",
			side: e,
			onAmountChange: i,
			onTokenSelect: o,
			amountId: "tokenized-swap-to"
		}) }),
		/* @__PURE__ */ V(_s, {
			type: "button",
			onClick: c,
			"aria-label": "Swap direction",
			children: /* @__PURE__ */ V(h, {
				width: "24px",
				height: "24px"
			})
		})
	] }) }), /* @__PURE__ */ V(es, { children: /* @__PURE__ */ H(vs, { children: [
		/* @__PURE__ */ H(ys, { children: [/* @__PURE__ */ V(bs, { children: "Slippage Tolerance" }), /* @__PURE__ */ H(xs, {
			type: "button",
			onClick: d,
			"aria-label": `Slippage tolerance ${l}, edit`,
			children: [l, /* @__PURE__ */ V(u, {
				width: "20px",
				height: "20px"
			})]
		})] }),
		/* @__PURE__ */ V(O, {
			variant: "primary",
			disabled: !y,
			onClick: x,
			width: "100%",
			style: { height: 48 },
			children: b
		}),
		/* @__PURE__ */ H(Ss, { children: [/* @__PURE__ */ H(Cs, { children: [
			/* @__PURE__ */ V(ws, {
				type: "button",
				onClick: v,
				"aria-label": "Refresh rate",
				children: /* @__PURE__ */ V(_, {
					width: "18px",
					height: "18px"
				})
			}),
			/* @__PURE__ */ V("span", { children: f }),
			/* @__PURE__ */ V(h, {
				width: "18px",
				height: "18px",
				style: { transform: "rotate(90deg)" },
				"aria-hidden": !0
			}),
			/* @__PURE__ */ V("span", { children: p })
		] }), /* @__PURE__ */ V(ws, {
			type: "button",
			onClick: g,
			"aria-label": m ? "Collapse details" : "Expand details",
			children: V(m ? r : n, {
				width: "24px",
				height: "24px"
			})
		})] })
	] }) })]
}), Os = [
	"1d",
	"1w",
	"1m",
	"3m",
	"1y",
	"All"
], ks = R(i)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
`, As = R.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 16px;

  /* Below 1100px the page renders a standalone top-strip carrying the same
     asset info, so the chart card hides its in-card header to avoid
     duplication. */
  @media (max-width: 1099px) {
    display: none;
  }
`, js = R.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`, Ms = R.div`
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
`, Ns = R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Ps = R.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Fs = R.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, Is = R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`, Ls = R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-variant-numeric: tabular-nums;
`, Rs = R.div`
  display: inline-grid;
  cursor: default;
  & > * { grid-area: 1 / 1; }
`, zs = R.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  white-space: nowrap;
  transition: opacity 0.18s ease;
  opacity: ${({ $hover: e }) => e ? 0 : 1};

  ${Rs}:hover & {
    opacity: ${({ $hover: e }) => e ? 1 : 0};
  }
`, Bs = R.span`
  display: inline-flex;
  align-items: center;
  padding: 1.5px 6px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  background: ${({ $tone: e, theme: t }) => e === "ondo" ? "rgba(118, 69, 217, 0.10)" : e === "xstocks" ? "rgba(2, 145, 157, 0.10)" : t.colors.tertiary};
  color: ${({ $tone: e, theme: t }) => e === "ondo" ? t.colors.secondary : e === "xstocks" ? t.colors.primary60 ?? t.colors.primary : t.colors.textSubtle};
  border: 2px solid
    ${({ $tone: e, theme: t }) => e === "ondo" ? "rgba(118, 69, 217, 0.20)" : e === "xstocks" ? "rgba(2, 145, 157, 0.20)" : t.colors.tertiary};
`;
function Vs(e) {
	let t = (e ?? "").toLowerCase();
	return t.includes("ondo") ? "ondo" : t.includes("xstock") ? "xstocks" : "default";
}
var Hs = R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`, Us = R.div`
  position: relative;
  flex: 1;
  min-height: 0;
  margin: 0 16px;
  cursor: ${({ $dragging: e }) => e ? "grabbing" : "grab"};
  user-select: none;
  touch-action: none;
`, Ws = R.svg`
  display: block;
  width: 100%;
  height: 100%;
`, Gs = R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 8px 24px 16px;
`, Ks = R.div`
  display: flex;
  align-items: center;
  gap: 24px;
`, qs = R.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary60 ?? t.colors.primary : t.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  cursor: pointer;
  transition: color 0.12s;
  &:hover:not(:disabled) {
    color: ${({ theme: e }) => e.colors.text};
  }
`, Js = R.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 2px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, Ys = R.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px dashed ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0.6;
  pointer-events: none;
`, Xs = R.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  border-top: 1px dashed ${({ theme: e }) => e.colors.textSubtle};
  opacity: 0.6;
  pointer-events: none;
`, Zs = R.div`
  position: absolute;
  pointer-events: none;
  background: ${({ theme: e }) => e.colors.backgroundAlt ?? e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 132px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  font-family: 'Kanit', sans-serif;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  transform: translate(calc(-100% - 16px), -50%);
`, Qs = R.div`
  color: ${({ theme: e }) => e.colors.text};
  font-size: 16px;
  font-weight: 700;
`, $s = R.div`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 13px;
  font-weight: 400;
`;
function ec(e) {
	return e > 0 ? "success" : e < 0 ? "failure" : "textSubtle";
}
function tc(e) {
	return `${e > 0 ? "+" : ""}${e.toFixed(2)}%`;
}
var nc = (e) => String(e).padStart(2, "0");
function rc(e, t, n) {
	let r = e === "1d" ? 5 * 6e4 : e === "1w" ? 60 * 6e4 : e === "1m" ? 1440 * 6e4 : e === "3m" ? 4320 * 6e4 : e === "1y" ? 720 * 60 * 6e4 : 2160 * 60 * 6e4, i = /* @__PURE__ */ new Date(Date.now() - (n - 1 - t) * r);
	return `${nc(i.getMonth() + 1)}-${nc(i.getDate())}-${i.getFullYear()}`;
}
function ic(e, t) {
	if (e === "1d") {
		let e = 570 + t * 5;
		return `${nc(Math.floor(e / 60) % 24)}:${nc(e % 60)}`;
	}
	return e === "1w" ? `${nc((9 + t) % 24)}:00` : "16:00";
}
function ac({ candles: e, color: t, panX: n = 0, panY: r = 0, zoom: i = 1 }) {
	let a = F(() => {
		if (e.length === 0) return [];
		let n = 984 / e.length, r = Math.max(2, n * .55), i = Infinity, a = -Infinity;
		for (let t of e) t.low < i && (i = t.low), t.high > a && (a = t.high);
		(!isFinite(i) || !isFinite(a) || a === i) && (i = 0, a = 1);
		let o = (e) => 16 + (a - e) / (a - i) * 368;
		return e.map((e, i) => {
			let a = 8 + n * i + n / 2, s = e.close >= e.open, c = o(e.open), l = o(e.close), u = o(e.high), d = o(e.low), f = Math.min(c, l), p = Math.max(2, Math.abs(c - l)), m = s ? t : "var(--pcs-colors-failure, #ED4B9E)";
			return /* @__PURE__ */ H("g", { children: [/* @__PURE__ */ V("line", {
				x1: a,
				x2: a,
				y1: u,
				y2: d,
				stroke: m,
				strokeWidth: 1
			}), /* @__PURE__ */ V("rect", {
				x: a - r / 2,
				y: f,
				width: r,
				height: p,
				fill: m,
				rx: 1
			})] }, i);
		});
	}, [e, t]);
	return /* @__PURE__ */ V(Ws, {
		viewBox: "0 0 1000 400",
		preserveAspectRatio: "none",
		"aria-hidden": !0,
		children: /* @__PURE__ */ V("g", {
			transform: `translate(${n} ${r}) scale(${i})`,
			children: a
		})
	});
}
function oc({ candles: e, color: t, panX: n = 0, panY: r = 0, zoom: i = 1, gradientId: a }) {
	let { linePath: o, areaPath: s } = F(() => {
		if (e.length === 0) return {
			linePath: "",
			areaPath: ""
		};
		let t = 984 / Math.max(1, e.length - 1), n = Infinity, r = -Infinity;
		for (let t of e) t.low < n && (n = t.low), t.high > r && (r = t.high);
		(!isFinite(n) || !isFinite(r) || r === n) && (n = 0, r = 1);
		let i = (e) => 16 + (r - e) / (r - n) * 368, a = e.map((e, n) => ({
			x: 8 + t * n,
			y: i(e.close)
		})), o = (e, t, n, r) => (n - e) / 6, s = `M ${a[0].x} ${a[0].y}`;
		for (let e = 0; e < a.length - 1; e++) {
			let t = a[e - 1] ?? a[e], n = a[e], r = a[e + 1], i = a[e + 2] ?? r, c = n.x + o(t.x, n.x, r.x, i.x), l = n.y + o(t.y, n.y, r.y, i.y), u = r.x - o(t.x, n.x, r.x, i.x), d = r.y - o(t.y, n.y, r.y, i.y);
			s += ` C ${c} ${l} ${u} ${d} ${r.x} ${r.y}`;
		}
		let c = `${s} L ${a[a.length - 1].x} 384 L ${a[0].x} 384 Z`;
		return {
			linePath: s,
			areaPath: c
		};
	}, [e]);
	return /* @__PURE__ */ H(Ws, {
		viewBox: "0 0 1000 400",
		preserveAspectRatio: "none",
		"aria-hidden": !0,
		children: [/* @__PURE__ */ V("defs", { children: /* @__PURE__ */ H("linearGradient", {
			id: a,
			x1: "0",
			y1: "0",
			x2: "0",
			y2: "1",
			children: [/* @__PURE__ */ V("stop", {
				offset: "0%",
				stopColor: t,
				stopOpacity: .35
			}), /* @__PURE__ */ V("stop", {
				offset: "100%",
				stopColor: t,
				stopOpacity: 0
			})]
		}) }), /* @__PURE__ */ H("g", {
			transform: `translate(${n} ${r}) scale(${i})`,
			children: [/* @__PURE__ */ V("path", {
				d: s,
				fill: `url(#${a})`
			}), /* @__PURE__ */ V("path", {
				d: o,
				stroke: t,
				strokeWidth: 2,
				fill: "none",
				strokeLinejoin: "round",
				strokeLinecap: "round"
			})]
		})]
	});
}
var sc = ({ name: e, symbol: t, source: n, logoUrls: r, tvlLabel: i = "TVL", tvlValue: o, marketCapLabel: c = "Market Cap", marketCapValue: l, price: u, changeAbs: f, changePct: p, candles: m, timeRange: h, onTimeRangeChange: g, chartType: _ = "candle", onChartTypeChange: v }) => {
	let y = r?.find(Boolean), x = t.slice(0, 2).toUpperCase(), S = k.useId().replace(/[:]/g, ""), [C, w] = L(null), { min: T, max: E } = F(() => {
		let e = Infinity, t = -Infinity;
		for (let n of m) n.low < e && (e = n.low), n.high > t && (t = n.high);
		return {
			min: isFinite(e) ? e : 0,
			max: isFinite(t) ? t : 1
		};
	}, [m]), [D, O] = L(0), [A, j] = L(0), [M, ee] = L(1), [P, R] = L(null), te = I(null), z = C && m[C.index], ne = z ? _ === "candle" ? z.high : z.close : 0, U = z && E !== T ? ((16 + (E - ne) / (E - T) * 368) * M + A) / 400 * 100 : 50;
	return N(() => {
		let e = te.current;
		if (!e) return;
		let t = (t) => {
			if (!t.ctrlKey) return;
			t.preventDefault();
			let n = e.getBoundingClientRect(), r = (t.clientX - n.left) / n.width * 1e3, i = (t.clientY - n.top) / n.height * 400, a = Math.exp(-t.deltaY * .01);
			ee((e) => {
				let t = Math.min(10, Math.max(.2, e * a));
				return O((n) => r - (r - n) / e * t), j((n) => i - (i - n) / e * t), t;
			});
		};
		return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
	}, []), N(() => {
		if (!P) return;
		let e = () => R(null);
		return document.addEventListener("pointerup", e), document.addEventListener("pointercancel", e), () => {
			document.removeEventListener("pointerup", e), document.removeEventListener("pointercancel", e);
		};
	}, [P]), /* @__PURE__ */ H(ks, { children: [
		/* @__PURE__ */ H(As, { children: [/* @__PURE__ */ H(js, { children: [/* @__PURE__ */ V(Ms, { children: y ? /* @__PURE__ */ V(Ns, {
			src: y,
			alt: ""
		}) : /* @__PURE__ */ V(Ps, { children: x }) }), /* @__PURE__ */ H(Fs, { children: [/* @__PURE__ */ H(Is, { children: [/* @__PURE__ */ V(d, {
			as: "h2",
			scale: "lg",
			ellipsis: !0,
			children: e
		}), n && /* @__PURE__ */ V(Bs, {
			$tone: Vs(n),
			children: n
		})] }), /* @__PURE__ */ H(Ls, { children: [/* @__PURE__ */ V(a, {
			bold: !0,
			fontSize: "14px",
			color: "textSubtle",
			textTransform: "uppercase",
			children: t
		}), (o || l) && /* @__PURE__ */ H(Rs, { children: [/* @__PURE__ */ H(zs, { children: [/* @__PURE__ */ V(a, {
			fontSize: "14px",
			color: "textSubtle",
			children: i
		}), /* @__PURE__ */ V(a, {
			bold: !0,
			fontSize: "14px",
			children: o ?? l ?? ""
		})] }), l && o && /* @__PURE__ */ H(zs, {
			$hover: !0,
			children: [/* @__PURE__ */ V(a, {
				fontSize: "14px",
				color: "textSubtle",
				children: c
			}), /* @__PURE__ */ V(a, {
				bold: !0,
				fontSize: "14px",
				children: l
			})]
		})] })] })] })] }), /* @__PURE__ */ H(Hs, { children: [/* @__PURE__ */ V(d, {
			scale: "xl",
			children: u
		}), /* @__PURE__ */ H(a, {
			bold: !0,
			fontSize: "16px",
			color: ec(p),
			children: [
				p >= 0 ? "+" : "-",
				f.replace("-", ""),
				" (",
				tc(p),
				")"
			]
		})] })] }),
		/* @__PURE__ */ H(Us, {
			ref: te,
			$dragging: !!P,
			onPointerDown: (e) => {
				m.length !== 0 && (R({
					startClientX: e.clientX,
					startClientY: e.clientY,
					startPanX: D,
					startPanY: A
				}), w(null), e.preventDefault());
			},
			onPointerMove: (e) => {
				if (m.length === 0) return;
				let t = e.currentTarget.getBoundingClientRect();
				if (P) {
					let n = (e.clientX - P.startClientX) / t.width, r = (e.clientY - P.startClientY) / t.height;
					O(P.startPanX + n * 1e3), j(P.startPanY + r * 400);
					return;
				}
				let n = (e.clientX - t.left) / t.width * 1e3, r = 984 / Math.max(1, m.length), i = ((n - D) / M - 8 - r / 2) / r, a = Math.min(m.length - 1, Math.max(0, Math.round(i)));
				w({
					index: a,
					xPct: ((8 + r * a + r / 2) * M + D) / 1e3 * 100,
					yPx: e.clientY - t.top
				});
			},
			onPointerLeave: () => w(null),
			children: [_ === "candle" ? /* @__PURE__ */ V(ac, {
				candles: m,
				color: "var(--pcs-colors-success, #31D0AA)",
				panX: D,
				panY: A,
				zoom: M
			}) : /* @__PURE__ */ V(oc, {
				candles: m,
				color: "var(--pcs-colors-primary, #1FC7D4)",
				panX: D,
				panY: A,
				zoom: M,
				gradientId: S
			}), z && !P && /* @__PURE__ */ H(B, { children: [
				/* @__PURE__ */ V(Ys, {
					style: { left: `${C.xPct}%` },
					"aria-hidden": !0
				}),
				/* @__PURE__ */ V(Xs, {
					style: { top: `${U}%` },
					"aria-hidden": !0
				}),
				/* @__PURE__ */ H(Zs, {
					role: "tooltip",
					style: {
						left: `${C.xPct}%`,
						top: `${C.yPx}px`
					},
					children: [
						/* @__PURE__ */ H(Qs, { children: ["$", ne.toFixed(2)] }),
						/* @__PURE__ */ V($s, { children: rc(h, C.index, m.length) }),
						/* @__PURE__ */ V($s, { children: ic(h, C.index) })
					]
				})
			] })]
		}),
		/* @__PURE__ */ H(Gs, { children: [/* @__PURE__ */ V(Ks, { children: Os.map((e) => /* @__PURE__ */ V(qs, {
			type: "button",
			$active: e === h,
			"aria-pressed": e === h,
			onClick: () => g?.(e),
			children: e
		}, e)) }), /* @__PURE__ */ V(Js, {
			type: "button",
			"aria-label": _ === "candle" ? "Switch to line chart" : "Switch to candle chart",
			onClick: () => v?.(_ === "candle" ? "line" : "candle"),
			children: V(_ === "candle" ? b : s, {
				width: "24px",
				height: "24px"
			})
		})] })
	] });
}, cc = R(i)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* Hug content at narrow widths — page scrolls instead of the table. */
  @media (max-width: 799px) {
    height: auto;
    overflow: visible;
    & > div { height: auto; }
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 0;
  }
`, lc = R.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 8px;
`, uc = R.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 45px;
  padding: 12px 10px;
  border: 0;
  background: transparent;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary ?? t.colors.text : t.colors.textSubtle};
  cursor: pointer;
  &:hover:not(:disabled) { color: ${({ theme: e }) => e.colors.text}; }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  }
`, dc = R.div`
  flex: 1;
  min-height: 0;
  overflow: auto;

  @media (max-width: 799px) {
    overflow: visible;
    flex: 0 0 auto;
  }
`, fc = R.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  font-family: 'Kanit', sans-serif;

  /* Below 800px the table is replaced by stacked card-rows. */
  @media (max-width: 799px) {
    display: none;
  }
`, pc = R.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  font-family: 'Kanit', sans-serif;

  @media (max-width: 799px) {
    display: flex;
  }
`, mc = R.div`
  background: ${({ theme: e }) => e.colors.cardSecondary ?? e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 24px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, hc = R.div`
  height: 0;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, gc = R.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, _c = R.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.disabled};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, vc = R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  min-width: 0;
  flex: 1;
`, yc = R.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
`, bc = R.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-variant-numeric: tabular-nums;
  color: ${({ $sign: e, theme: t }) => e > 0 ? t.colors.success ?? "#31D0AA" : e < 0 ? t.colors.failure ?? "#ED4B9E" : t.colors.textSubtle};
`, xc = R.div`
  font-weight: 600;
  font-size: 16px;
`, Sc = R.div`
  font-weight: 400;
  font-size: 14px;
`, Cc = R.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
`, wc = R.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Tc = R.span`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Z = R.th`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: ${({ $align: e }) => e ?? "left"};
  padding: 8px 16px;
  /* Pin the header row inside the Scroll container so it stays visible
     while rows scroll. Needs an opaque background so rows don't bleed
     through. */
  position: sticky;
  top: 0;
  z-index: 2;
  background: ${({ theme: e }) => e.card.background ?? e.colors.card ?? "#fff"};
  white-space: nowrap;
  vertical-align: middle;
`, Ec = R.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: ${({ $align: e }) => e === "right" ? "flex-end" : "flex-start"};
  width: 100%;
`, Dc = R.button`
  display: inline-flex;
  align-items: flex-start;
  padding: 1px 2px 3px 2px;
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: ${({ theme: e }) => e.colors.tertiary};
  cursor: pointer;
  flex-shrink: 0;
`, Oc = ({ dir: e }) => /* @__PURE__ */ H("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 14 14",
	fill: "none",
	"aria-hidden": !0,
	children: [/* @__PURE__ */ V("path", {
		d: "M8.76661 12.7917C8.66686 12.7917 8.5692 12.7727 8.47363 12.7347C8.37816 12.6965 8.29299 12.6401 8.21813 12.5653L6.12645 10.4653C5.97682 10.3102 5.90303 10.1287 5.90507 9.92095C5.90721 9.71319 5.98586 9.53449 6.14103 9.38487C6.29065 9.23943 6.47071 9.16568 6.6812 9.16364C6.89168 9.1615 7.07174 9.23524 7.22136 9.38487L7.9937 10.1572V7.17331C7.9937 6.95854 8.06885 6.77606 8.21915 6.62585C8.36936 6.47554 8.55185 6.40039 8.76661 6.40039C8.98138 6.40039 9.16386 6.47554 9.31407 6.62585C9.46438 6.77606 9.53953 6.95854 9.53953 7.17331V10.1572L10.3119 9.38487C10.4572 9.23943 10.6348 9.1667 10.8447 9.1667C11.0546 9.1667 11.2371 9.23943 11.3922 9.38487C11.5474 9.53449 11.6249 9.71562 11.6249 9.92824C11.6249 10.1409 11.5501 10.3248 11.4005 10.4799L9.31509 12.5653C9.24023 12.6401 9.15506 12.6965 9.05959 12.7347C8.96402 12.7727 8.86636 12.7917 8.76661 12.7917Z",
		fill: "#BDC2C4",
		opacity: e === "asc" ? .35 : 1
	}), /* @__PURE__ */ V("path", {
		d: "M5.23333 7.60028C5.01857 7.60028 4.83608 7.52512 4.68588 7.37482C4.53557 7.22461 4.46042 7.04212 4.46042 6.82736V3.84346L3.68808 4.6158C3.54274 4.76124 3.36511 4.83396 3.15521 4.83396C2.94531 4.83396 2.76282 4.76124 2.60775 4.6158C2.45258 4.46617 2.375 4.28505 2.375 4.07242C2.375 3.8598 2.44981 3.6759 2.59944 3.52073L4.68485 1.43532C4.75972 1.36055 4.84488 1.30412 4.94035 1.26601C5.03592 1.22799 5.13358 1.20898 5.23333 1.20898C5.33308 1.20898 5.43074 1.22799 5.52631 1.26601C5.62178 1.30412 5.70695 1.36055 5.78181 1.43532L7.8735 3.53532C8.02312 3.69048 8.09692 3.87195 8.09488 4.07971C8.09274 4.28748 8.01408 4.46617 7.85892 4.6158C7.70929 4.76124 7.52924 4.83498 7.31875 4.83703C7.10826 4.83917 6.92821 4.76542 6.77858 4.6158L6.00625 3.84346V6.82736C6.00625 7.04212 5.9311 7.22461 5.78079 7.37482C5.63058 7.52512 5.4481 7.60028 5.23333 7.60028Z",
		fill: "#BDC2C4",
		opacity: e === "desc" ? .35 : 1
	})]
}), Q = R.td`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.text};
  text-align: ${({ $align: e }) => e ?? "left"};
  padding: 8px 16px;
  font-variant-numeric: tabular-nums;
  vertical-align: middle;
  transition: background 0.12s;
`, kc = R.tr`
  &:hover > ${Q} {
    background: ${({ theme: e }) => e.colors.cardSecondary ?? e.colors.backgroundAlt};
  }
  &:hover > ${Q}:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  &:hover > ${Q}:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`, Ac = R(Q)`
  white-space: pre-line;
  line-height: 1.5;
`, jc = R.button`
  display: inline-block;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 400;
  cursor: pointer;
  transition: font-weight 0.12s;
  &:hover {
    font-weight: 600;
  }
`, Mc = R.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  line-height: 1.4;
`, Nc = R.span`
  display: inline-flex;
  align-items: center;
  padding: 0 6px;
  height: 16px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1px;
  background: ${({ $tone: e, theme: t }) => e === "ondo" ? "rgba(118, 69, 217, 0.10)" : e === "xstocks" ? "rgba(2, 145, 157, 0.10)" : t.colors.tertiary};
  color: ${({ $tone: e, theme: t }) => e === "ondo" ? t.colors.secondary : e === "xstocks" ? t.colors.primary60 ?? t.colors.primary : t.colors.textSubtle};
`;
function Pc(e) {
	let t = (e ?? "").toLowerCase();
	return t.includes("ondo") ? "ondo" : t.includes("xstock") ? "xstocks" : "default";
}
var Fc = R.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 24px;
  padding: 0 12px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 13px;
  background: ${({ $kind: e }) => e === "Buy" ? "rgba(49, 208, 170, 0.10)" : "rgba(237, 75, 158, 0.10)"};
  color: ${({ $kind: e, theme: t }) => e === "Buy" ? t.colors.success ?? "#31D0AA" : t.colors.failure ?? "#ED4B9E"};
  border: 1px solid
    ${({ $kind: e, theme: t }) => e === "Buy" ? t.colors.success ?? "#31D0AA" : t.colors.failure ?? "#ED4B9E"};
`, Ic = R.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  line-height: 1.4;
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
`, Lc = (e) => ({ color: e > 0 ? "var(--pcs-colors-success)" : e < 0 ? "var(--pcs-colors-failure)" : "var(--pcs-colors-text-subtle)" });
function Rc(e) {
	let t = e.match(/^([^()]+?)\s*\(([^)]+)\)\s*$/);
	return t ? {
		dollar: t[1].trim(),
		pct: t[2].trim()
	} : {
		dollar: e,
		pct: ""
	};
}
var zc = R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 40px 24px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
`;
function $(e) {
	let t = e.match(/(-?)\$?([\d,]+\.?\d*)/);
	return t ? (t[1] === "-" ? -1 : 1) * parseFloat(t[2].replace(/,/g, "")) : 0;
}
var Bc = {
	qty: (e) => $(e.qty),
	indexPrice: (e) => $(e.indexPrice),
	entryPrice: (e) => $(e.entryPrice),
	amount: (e) => $(e.amount),
	pnl: (e) => $(e.pnlLabel)
}, Vc = {
	qty: (e) => $(e.qty),
	price: (e) => $(e.price),
	entryPrice: (e) => $(e.entryPrice),
	amount: (e) => $(e.amount)
};
function Hc(e, t) {
	return !e || e.key !== t ? {
		key: t,
		dir: "desc"
	} : e.dir === "desc" ? {
		key: t,
		dir: "asc"
	} : null;
}
var Uc = ({ activeTab: e, onTabChange: t, positions: n, transactions: r, onAssetClick: i }) => {
	let a = e === "positions", [o, s] = L(null), [c, l] = L(null), u = F(() => {
		if (!o) return n;
		let e = Bc[o.key];
		return [...n].sort((t, n) => o.dir === "asc" ? e(t) - e(n) : e(n) - e(t));
	}, [n, o]), d = F(() => {
		let e = r ?? [];
		if (!c) return e;
		let t = Vc[c.key];
		return [...e].sort((e, n) => c.dir === "asc" ? t(e) - t(n) : t(n) - t(e));
	}, [r, c]), f = a ? u : d, p = (e) => s((t) => Hc(t, e)), m = (e) => l((t) => Hc(t, e)), h = (e) => o?.key === e ? o.dir : null, g = (e) => c?.key === e ? c.dir : null;
	return /* @__PURE__ */ H(cc, { children: [/* @__PURE__ */ H(lc, {
		role: "tablist",
		"aria-label": "Account view",
		children: [/* @__PURE__ */ H(uc, {
			$active: e === "positions",
			role: "tab",
			"aria-selected": e === "positions",
			type: "button",
			onClick: () => t?.("positions"),
			children: [
				"My Position (",
				n.length,
				")"
			]
		}), /* @__PURE__ */ V(uc, {
			$active: e === "transactions",
			role: "tab",
			"aria-selected": e === "transactions",
			type: "button",
			onClick: () => t?.("transactions"),
			children: "Transactions"
		})]
	}), /* @__PURE__ */ H(dc, { children: [f.length === 0 ? /* @__PURE__ */ V(zc, { children: a ? "No open positions" : "No transactions yet" }) : /* @__PURE__ */ H(fc, { children: [/* @__PURE__ */ V("thead", { children: /* @__PURE__ */ V("tr", { children: a ? /* @__PURE__ */ H(B, { children: [
		/* @__PURE__ */ V(Z, { children: "Date" }),
		/* @__PURE__ */ V(Z, { children: "Assets" }),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Qty", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by quantity",
					onClick: () => p("qty"),
					children: /* @__PURE__ */ V(Oc, { dir: h("qty") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Index Price", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by index price",
					onClick: () => p("indexPrice"),
					children: /* @__PURE__ */ V(Oc, { dir: h("indexPrice") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Entry Price", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by entry price",
					onClick: () => p("entryPrice"),
					children: /* @__PURE__ */ V(Oc, { dir: h("entryPrice") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Amount", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by amount",
					onClick: () => p("amount"),
					children: /* @__PURE__ */ V(Oc, { dir: h("amount") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Pnl (ROI%)", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by PnL",
					onClick: () => p("pnl"),
					children: /* @__PURE__ */ V(Oc, { dir: h("pnl") })
				})]
			})
		})
	] }) : /* @__PURE__ */ H(B, { children: [
		/* @__PURE__ */ V(Z, { children: "Date" }),
		/* @__PURE__ */ V(Z, { children: "Type" }),
		/* @__PURE__ */ V(Z, { children: "Assets" }),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Qty", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by quantity",
					onClick: () => m("qty"),
					children: /* @__PURE__ */ V(Oc, { dir: g("qty") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Price", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by price",
					onClick: () => m("price"),
					children: /* @__PURE__ */ V(Oc, { dir: g("price") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Entry Price", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by entry price",
					onClick: () => m("entryPrice"),
					children: /* @__PURE__ */ V(Oc, { dir: g("entryPrice") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: /* @__PURE__ */ H(Ec, {
				$align: "right",
				children: ["Amount", /* @__PURE__ */ V(Dc, {
					type: "button",
					"aria-label": "Sort by amount",
					onClick: () => m("amount"),
					children: /* @__PURE__ */ V(Oc, { dir: g("amount") })
				})]
			})
		}),
		/* @__PURE__ */ V(Z, {
			$align: "right",
			children: "Trader"
		})
	] }) }) }), /* @__PURE__ */ V("tbody", { children: a ? f.map((e) => {
		let t = Rc(e.pnlLabel), n = Lc(e.pnlSign);
		return /* @__PURE__ */ H(kc, { children: [
			/* @__PURE__ */ V(Ac, { children: e.date }),
			/* @__PURE__ */ V(Q, { children: /* @__PURE__ */ H(Mc, { children: [e.assetId ? /* @__PURE__ */ V(jc, {
				type: "button",
				onClick: () => i?.(e.assetId),
				children: e.asset
			}) : /* @__PURE__ */ V("span", { children: e.asset }), e.source && /* @__PURE__ */ V(Nc, {
				$tone: Pc(e.source),
				children: e.source
			})] }) }),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: e.qty
			}),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: e.indexPrice
			}),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: e.entryPrice
			}),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: e.amount
			}),
			/* @__PURE__ */ V(Q, {
				$align: "right",
				children: /* @__PURE__ */ H(Ic, { children: [/* @__PURE__ */ V("span", {
					style: n,
					children: t.dollar
				}), t.pct && /* @__PURE__ */ V("span", {
					style: n,
					children: t.pct
				})] })
			})
		] }, e.id);
	}) : f.map((e) => /* @__PURE__ */ H(kc, { children: [
		/* @__PURE__ */ V(Ac, { children: e.date }),
		/* @__PURE__ */ V(Q, { children: /* @__PURE__ */ V(Fc, {
			$kind: e.type,
			children: e.type
		}) }),
		/* @__PURE__ */ V(Q, { children: /* @__PURE__ */ H(Mc, { children: [e.assetId ? /* @__PURE__ */ V(jc, {
			type: "button",
			onClick: () => i?.(e.assetId),
			children: e.asset
		}) : /* @__PURE__ */ V("span", { children: e.asset }), e.source && /* @__PURE__ */ V(Nc, {
			$tone: Pc(e.source),
			children: e.source
		})] }) }),
		/* @__PURE__ */ V(Q, {
			$align: "right",
			children: e.qty
		}),
		/* @__PURE__ */ V(Q, {
			$align: "right",
			children: e.price
		}),
		/* @__PURE__ */ V(Q, {
			$align: "right",
			children: e.entryPrice
		}),
		/* @__PURE__ */ V(Q, {
			$align: "right",
			children: e.amount
		}),
		/* @__PURE__ */ V(Q, {
			$align: "right",
			children: e.trader ?? ""
		})
	] }, e.id)) })] }), f.length > 0 && /* @__PURE__ */ V(pc, { children: a ? f.map((e) => {
		let t = Rc(e.pnlLabel);
		return /* @__PURE__ */ H(mc, { children: [
			/* @__PURE__ */ H(gc, { children: [
				/* @__PURE__ */ V(_c, {
					"aria-hidden": !0,
					children: e.asset.slice(0, 2).toUpperCase()
				}),
				/* @__PURE__ */ H(vc, { children: [/* @__PURE__ */ V(yc, { children: e.asset }), e.source && /* @__PURE__ */ V(Nc, {
					$tone: Pc(e.source),
					children: e.source
				})] }),
				/* @__PURE__ */ H(bc, {
					$sign: e.pnlSign,
					children: [/* @__PURE__ */ V(xc, { children: t.dollar }), t.pct && /* @__PURE__ */ V(Sc, { children: t.pct })]
				})
			] }),
			/* @__PURE__ */ V(hc, {}),
			/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "QTY" }), /* @__PURE__ */ V(Tc, { children: e.qty })] }),
			/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "Index price" }), /* @__PURE__ */ V(Tc, { children: e.indexPrice })] }),
			/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "Entry price" }), /* @__PURE__ */ V(Tc, { children: e.entryPrice })] }),
			/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "Amount" }), /* @__PURE__ */ V(Tc, { children: e.amount })] })
		] }, `card-${e.id}`);
	}) : f.map((e) => /* @__PURE__ */ H(mc, { children: [
		/* @__PURE__ */ H(gc, { children: [
			/* @__PURE__ */ V(_c, {
				"aria-hidden": !0,
				children: e.asset.slice(0, 2).toUpperCase()
			}),
			/* @__PURE__ */ H(vc, { children: [/* @__PURE__ */ V(yc, { children: e.asset }), e.source && /* @__PURE__ */ V(Nc, {
				$tone: Pc(e.source),
				children: e.source
			})] }),
			/* @__PURE__ */ V(Fc, {
				$kind: e.type,
				children: e.type
			})
		] }),
		/* @__PURE__ */ V(hc, {}),
		/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "QTY" }), /* @__PURE__ */ V(Tc, { children: e.qty })] }),
		/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "Price" }), /* @__PURE__ */ V(Tc, { children: e.price })] }),
		/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "Entry price" }), /* @__PURE__ */ V(Tc, { children: e.entryPrice })] }),
		/* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "Amount" }), /* @__PURE__ */ V(Tc, { children: e.amount })] }),
		e.trader && /* @__PURE__ */ H(Cc, { children: [/* @__PURE__ */ V(wc, { children: "Trader" }), /* @__PURE__ */ V(Tc, { children: e.trader })] })
	] }, `card-${e.id}`)) })] })] });
}, Wc = R(i)`
  & > div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`, Gc = R.div`
  display: flex;
  align-items: center;
  gap: 12px;
`, Kc = R.div`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.disabled};
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`, qc = R.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Jc = R.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Yc = R.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, Xc = R.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`, Zc = R.div`
  display: inline-grid;
  cursor: default;
  & > * { grid-area: 1 / 1; }
`, Qc = R.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  transition: opacity 0.18s ease;
  /* $hover labels the "swapped" pair; visible when $shown matches. */
  opacity: ${({ $hover: e, $shown: t }) => !!e == !!t ? 1 : 0};
`, $c = R.span`
  display: inline-flex;
  align-items: center;
  padding: 1.5px 6px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  background: ${({ $tone: e, theme: t }) => e === "ondo" ? "rgba(118, 69, 217, 0.10)" : e === "xstocks" ? "rgba(2, 145, 157, 0.10)" : t.colors.tertiary};
  color: ${({ $tone: e, theme: t }) => e === "ondo" ? t.colors.secondary : e === "xstocks" ? t.colors.primary60 ?? t.colors.primary : t.colors.textSubtle};
  border: 2px solid
    ${({ $tone: e, theme: t }) => e === "ondo" ? "rgba(118, 69, 217, 0.20)" : e === "xstocks" ? "rgba(2, 145, 157, 0.20)" : t.colors.tertiary};
`, el = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
  font-variant-numeric: tabular-nums;
`, tl = R.span`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme: e }) => e.colors.textSubtle};
  cursor: help;
`, nl = R.span`
  position: fixed;
  background: #ffffff;
  color: #08060b;
  font-family: 'Kanit', sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  padding: 10px 14px;
  border-radius: 14px;
  width: max-content;
  max-width: 240px;
  text-align: center;
  pointer-events: none;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  z-index: 9999;
  transform: translateX(-50%);

  /* Pointer at the top center, pointing up to the trigger label. */
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 0 7px 8px;
    border-color: transparent transparent #ffffff;
  }
`, rl = ({ children: e, hint: t }) => {
	let n = I(null), [r, i] = L(null), a = () => {
		let e = n.current;
		if (!e) return;
		let t = e.getBoundingClientRect();
		i({
			x: t.left + t.width / 2,
			y: t.bottom + 10
		});
	}, o = () => i(null);
	return N(() => {
		if (!r) return;
		let e = (e) => {
			n.current?.contains(e.target) || o();
		};
		return document.addEventListener("pointerdown", e), () => document.removeEventListener("pointerdown", e);
	}, [r]), /* @__PURE__ */ H(B, { children: [/* @__PURE__ */ V(tl, {
		ref: n,
		onPointerEnter: (e) => e.pointerType === "mouse" && a(),
		onPointerLeave: (e) => e.pointerType === "mouse" && o(),
		onClick: () => r ? o() : a(),
		children: e
	}), t && r && typeof document < "u" ? ne(/* @__PURE__ */ V(nl, {
		role: "tooltip",
		style: {
			left: r.x,
			top: r.y
		},
		children: t
	}), document.body) : null] });
}, il = R.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, al = R.span`
  @media (min-width: 800px) and (max-width: 967px) {
    display: none;
  }
`, ol = R.span`
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  height: 26px;
  border-radius: 999px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  background: ${({ $sign: e }) => e < 0 ? "rgba(49, 208, 170, 0.10)" : e > 0 ? "rgba(237, 75, 158, 0.10)" : "transparent"};
  color: ${({ $sign: e, theme: t }) => e < 0 ? t.colors.success ?? "#31D0AA" : e > 0 ? t.colors.failure ?? "#ED4B9E" : t.colors.textSubtle};
  border: 1px solid
    ${({ $sign: e, theme: t }) => e < 0 ? t.colors.success ?? "#31D0AA" : e > 0 ? t.colors.failure ?? "#ED4B9E" : t.colors.cardBorder};
  font-variant-numeric: tabular-nums;
`;
function sl(e) {
	let t = (e ?? "").toLowerCase();
	return t.includes("ondo") ? "ondo" : t.includes("xstock") ? "xstocks" : "default";
}
function cl(e) {
	if (!e) return 0;
	let t = e.match(/(-?)\$?([\d,]+\.?\d*)/);
	return t ? (t[1] === "-" ? -1 : 1) * parseFloat(t[2].replace(/,/g, "")) : 0;
}
var ll = ({ symbol: e, source: t, logoUrls: n, tvlLabel: r = "TVL", tvlValue: i, marketCapLabel: o = "Real asset marketcap", marketCapValue: s, chainPrice: c, markPrice: l, holdersLabel: u = "Holders", holdersCount: f, holdersTagLabel: p = "Address" }) => {
	let m = n?.find(Boolean), [h, g] = L(!1), _ = e.slice(0, 2).toUpperCase(), v = cl(c), y = cl(l), b = y === 0 ? 0 : (v - y) / y * 100, x = b < 0 ? -1 : b > 0 ? 1 : 0;
	return /* @__PURE__ */ H(Wc, { children: [
		/* @__PURE__ */ H(Gc, { children: [/* @__PURE__ */ V(Kc, { children: m ? /* @__PURE__ */ V(qc, {
			src: m,
			alt: ""
		}) : /* @__PURE__ */ V(Jc, { children: _ }) }), /* @__PURE__ */ H(Yc, { children: [/* @__PURE__ */ H(Xc, { children: [/* @__PURE__ */ V(d, {
			scale: "lg",
			children: e
		}), t && /* @__PURE__ */ V($c, {
			$tone: sl(t),
			children: t
		})] }), /* @__PURE__ */ H(Zc, {
			onPointerEnter: (e) => e.pointerType === "mouse" && g(!0),
			onPointerLeave: (e) => e.pointerType === "mouse" && g(!1),
			onClick: () => g((e) => !e),
			children: [/* @__PURE__ */ H(Qc, {
				$shown: h,
				children: [/* @__PURE__ */ V(a, {
					fontSize: "14px",
					color: "textSubtle",
					children: r
				}), /* @__PURE__ */ V(a, {
					bold: !0,
					fontSize: "14px",
					children: i
				})]
			}), s && /* @__PURE__ */ H(Qc, {
				$hover: !0,
				$shown: h,
				children: [/* @__PURE__ */ V(a, {
					fontSize: "14px",
					color: "textSubtle",
					children: o
				}), /* @__PURE__ */ V(a, {
					bold: !0,
					fontSize: "14px",
					children: s
				})]
			})]
		})] })] }),
		/* @__PURE__ */ H(el, { children: [/* @__PURE__ */ V(rl, {
			hint: "On-chain price plotted on the chart above.",
			children: "Chain Price"
		}), /* @__PURE__ */ H(il, { children: [/* @__PURE__ */ V(a, {
			bold: !0,
			fontSize: "14px",
			children: c
		}), /* @__PURE__ */ H(ol, {
			$sign: x,
			children: [
				/* @__PURE__ */ V(al, { children: "Discount " }),
				b > 0 ? "+" : "",
				b.toFixed(2),
				"%"
			]
		})] })] }),
		/* @__PURE__ */ H(el, { children: [/* @__PURE__ */ V(rl, {
			hint: "Real-world stock price from off-chain markets.",
			children: "Mark Price"
		}), /* @__PURE__ */ V(a, {
			bold: !0,
			fontSize: "14px",
			children: l
		})] }),
		/* @__PURE__ */ H(el, { children: [/* @__PURE__ */ V(rl, {
			hint: "Unique wallet addresses holding this asset on-chain.",
			children: u
		}), /* @__PURE__ */ H(il, { children: [/* @__PURE__ */ V(a, {
			bold: !0,
			fontSize: "14px",
			children: f
		}), /* @__PURE__ */ V(a, {
			fontSize: "14px",
			color: "primary",
			children: p
		})] })] })
	] });
};
//#endregion
export { he as AccountPanel, dr as BookTradesPanel, or as ChartPanel, ui as DepositModal, fi as EnableTradingModal, xe as LeverageModal, kt as MarketsDropdown, Mn as OrderBook, ot as OrderConfirmModal, Hr as OrderForm, Pe as PerpsErrorMessage, U as PerpsPanel, Yn as PositionsPanel, Ae as RecentTrades, ba as SimpleBetPanel, to as SimpleChartCard, Eo as SimplePositionsCard, La as SimpleTickerCard, sc as StockChartCard, ll as StockInfoCard, Uc as StockPositionsCard, $t as SymbolHeader, $o as TokenizedAssetsList, Ds as TokenizedSwapForm, rr as TpSlModal, W as UnderlineTab, ae as UnderlineTabs, Xe as WithdrawModal };

//# sourceMappingURL=widgets.js.map