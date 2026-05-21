import { A as e, Aa as t, B as n, C as r, Cn as i, E as a, Ft as o, Gi as s, Gn as c, Jt as l, Kt as u, N as d, R as f, S as p, Si as m, T as h, Wi as g, X as _, Yt as v, Zi as y, ft as b, k as x, nt as S, r as C, t as w, ur as T, w as E, x as D, y as O, z as k } from "./chunks/Modal-BRII01Cx.js";
import A, { Children as j, cloneElement as M, useCallback as ee, useEffect as N, useId as P, useLayoutEffect as te, useMemo as F, useRef as ne, useState as I } from "react";
import L, { css as re, useTheme as R } from "styled-components";
import { Fragment as z, jsx as B, jsxs as V } from "react/jsx-runtime";
import { createPortal as ie } from "react-dom";
//#region src/widgets/primitives.tsx
var H = L(f)`
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
`, ae = L.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, oe = L.button`
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
`, U = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(oe, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), se = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ B(ae, {
	$fullWidth: r,
	children: j.map(n, (n, i) => !n || typeof n != "object" ? n : M(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), ce = L(H)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, le = L(d).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, ue = L(D)`
  justify-content: space-between;
  align-items: center;
`, de = L(d).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, fe = L(d).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, pe = L.button`
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
`, me = L(D)`
  flex-direction: column;
  gap: 8px;
`, he = L(fe)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, ge = (e) => e, _e = ({ walletDisplay: e, state: t, canDeposit: i = !0, canWithdraw: a = !0, onDeposit: o, onWithdraw: s, onEnableTrading: c, t: l = ge }) => /* @__PURE__ */ V(ce, { children: [
	/* @__PURE__ */ V(D, {
		style: { gap: 8 },
		children: [/* @__PURE__ */ B(pe, {
			$variant: "primary",
			onClick: o,
			disabled: !i,
			children: l("Deposit")
		}), /* @__PURE__ */ B(pe, {
			$variant: "secondary",
			onClick: s,
			disabled: !a,
			children: l("Withdraw")
		})]
	}),
	t.kind === "needs-deposit" && /* @__PURE__ */ B(r, {
		variant: "warning",
		children: /* @__PURE__ */ V(D, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ B(d, {
				fontSize: "14px",
				bold: !0,
				children: l("Deposit to get started")
			}), /* @__PURE__ */ B(E, {
				fontSize: "12px",
				children: l("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
			})]
		})
	}),
	t.kind === "needs-trading" && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(r, {
		variant: "warning",
		children: /* @__PURE__ */ V(D, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ B(d, {
				fontSize: "14px",
				bold: !0,
				children: l("Enable Trading to view your Aster balance")
			}), /* @__PURE__ */ B(E, {
				fontSize: "12px",
				children: l("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
			})]
		})
	}), /* @__PURE__ */ B(n, {
		onClick: c,
		scale: "sm",
		variant: "primary",
		children: l("Enable Trading")
	})] }),
	t.kind === "ready" && /* @__PURE__ */ V(me, { children: [
		/* @__PURE__ */ B(le, { children: l("Account Equity") }),
		/* @__PURE__ */ V(ue, { children: [/* @__PURE__ */ B(de, { children: l("Wallet") }), /* @__PURE__ */ B(fe, { children: e ?? "—" })] }),
		/* @__PURE__ */ V(ue, { children: [/* @__PURE__ */ B(de, { children: l("Equity") }), /* @__PURE__ */ B(fe, { children: t.equity || "—" })] }),
		/* @__PURE__ */ V(ue, { children: [/* @__PURE__ */ B(de, { children: l("Available") }), /* @__PURE__ */ B(fe, { children: t.available || "—" })] }),
		/* @__PURE__ */ V(ue, { children: [/* @__PURE__ */ B(de, { children: l("Unrealized PnL") }), /* @__PURE__ */ B(he, {
			$sign: t.pnlSign,
			children: t.unrealizedPnl || "—"
		})] }),
		/* @__PURE__ */ V(ue, { children: [/* @__PURE__ */ B(de, { children: l("Margin mode") }), /* @__PURE__ */ B(fe, { children: t.marginMode ?? l("Cross") })] })
	] })
] });
//#endregion
//#region src/widgets/BunnySlider.tsx
function ve({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = ne(null), [u, d] = I(0);
	te(() => {
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
var ye = L(D)`
  gap: 10px;
  align-items: stretch;
`, be = L(n).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, xe = L(D)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, Se = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ce = ({ isOpen: e, symbol: t, currentLeverage: r, minLeverage: i = 1, maxLeverage: a = 100, availableBalance: o, onConfirm: s, onClose: c, isSubmitting: l = !1, errorSlot: u, t: f = Se }) => {
	let [m, h] = I(r);
	N(() => {
		e && h(r);
	}, [e, r]);
	let g = (e) => Math.max(i, Math.min(a, Math.round(e))), _ = o * m;
	return /* @__PURE__ */ B(C, {
		isOpen: e,
		onDismiss: c,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(w, {
			title: f("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: c,
			children: /* @__PURE__ */ V(D, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(ye, { children: [
						/* @__PURE__ */ B(be, {
							onClick: () => h((e) => g(e - 1)),
							disabled: m <= i,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ V(xe, { children: [m, "X"] }),
						/* @__PURE__ */ B(be, {
							onClick: () => h((e) => g(e + 1)),
							disabled: m >= a,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ B(ve, {
						name: "perp-leverage",
						min: i,
						max: a,
						value: m,
						onValueChanged: (e) => h(g(e)),
						width: "100%"
					}),
					/* @__PURE__ */ V(p, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						color: "textSubtle",
						children: f("Maximum position at current leverage:")
					}), /* @__PURE__ */ B(d, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(_) && _ > 0 ? `${_.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ B(d, {
						fontSize: "12px",
						color: "textSubtle",
						children: f("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					u,
					/* @__PURE__ */ B(n, {
						scale: "md",
						disabled: l,
						onClick: () => s(m),
						children: f(l ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, we = L.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, Te = L.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ee = L.div`
  overflow-y: auto;
  min-height: 0;
`, De = L.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, Oe = L.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, ke = L.span`
  text-align: right;
`, Ae = L(ke)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, je = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, Me = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = F(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ V(z, { children: [
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
}, Ne = L(p)`
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
`, Pe = L(n).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Fe = (e) => e, Ie = ({ variant: e, title: t, message: n, details: i, t: a = Fe }) => {
	let [o, s] = I(!1);
	return t ? /* @__PURE__ */ B(r, {
		variant: e,
		children: /* @__PURE__ */ V(D, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ B(E, { children: /* @__PURE__ */ B(d, {
					fontSize: "13px",
					bold: !0,
					children: t
				}) }),
				/* @__PURE__ */ B(E, { children: /* @__PURE__ */ B(d, {
					fontSize: "12px",
					children: n
				}) }),
				i && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(Pe, {
					onClick: () => s((e) => !e),
					children: a(o ? "Hide details" : "Show details")
				}), o && /* @__PURE__ */ B(Ne, { children: i })] })
			]
		})
	}) : /* @__PURE__ */ B(r, {
		variant: e,
		children: /* @__PURE__ */ B(E, { children: n })
	});
}, Le = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Re = L(D)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, ze = L(d).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Be = L(D)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Ve = L.button`
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
`, He = L(D)`
  flex-direction: column;
`, Ue = L.div`
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
`, We = L(D)`
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
`, Ge = L.input`
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
`, Ke = L(D)`
  gap: 6px;
  margin-top: 4px;
`, qe = L.button`
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
`, Je = L.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ye = L(D)`
  justify-content: space-between;
  align-items: center;
`, Xe = L(D)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, Ze = [
	25,
	50,
	75
], Qe = ({ isOpen: e, step: t, isLoadingAssets: r = !1, assets: i, selectedAssetId: a, onSelectAsset: o, selectedAsset: s, destinationAddress: c, destinationChainName: l = "BSC", feeText: u, amount: f, onAmountChange: m, onPercentClick: h, onBack: g, onWithdraw: _, onClose: v, isSubmitting: y = !1, canSubmit: b = !0, errorSlot: x, t: T = Le, renderTokenIcon: E }) => {
	let O = (e, t = 24) => E ? E(e, t) : /* @__PURE__ */ B(Ue, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ B(C, {
		isOpen: e,
		onDismiss: v,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(w, {
			title: t === "select" ? T("Withdraw from Aster") : T("Withdraw %asset%", { asset: s?.symbol ?? "" }),
			onDismiss: v,
			children: /* @__PURE__ */ V(Re, { children: [
				t === "amount" && /* @__PURE__ */ B(D, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ B(n, {
						scale: "sm",
						variant: "text",
						onClick: g,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ B(S, { width: "18px" }),
						children: T("Back")
					})
				}),
				t === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(p, { children: [/* @__PURE__ */ B(ze, {
						color: "textSubtle",
						children: T("Select asset")
					}), /* @__PURE__ */ B(d, {
						fontSize: "12px",
						color: "textSubtle",
						children: T("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					r && /* @__PURE__ */ B(d, {
						fontSize: "12px",
						children: T("Loading assets...")
					}),
					!r && i.length === 0 && /* @__PURE__ */ V(Xe, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						bold: !0,
						children: T("Nothing to withdraw yet")
					}), /* @__PURE__ */ B(d, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: T("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					i.length > 0 && /* @__PURE__ */ B(Be, { children: i.map((e) => /* @__PURE__ */ V(Ve, {
						$selected: a === e.id,
						onClick: () => o(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ V(D, {
							alignItems: "center",
							style: { gap: 12 },
							children: [O(e, 32), /* @__PURE__ */ V(He, { children: [/* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ B(d, {
								fontSize: "11px",
								color: "textSubtle",
								children: T("Withdrawable")
							})] })]
						}), /* @__PURE__ */ V(D, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ B(d, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && s && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(We, { children: [/* @__PURE__ */ V(D, {
						alignItems: "center",
						style: { gap: 12 },
						children: [O(s, 40), /* @__PURE__ */ V(D, {
							flexDirection: "column",
							children: [/* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								children: s.displayName || s.symbol
							}), /* @__PURE__ */ B(d, {
								fontSize: "12px",
								color: "textSubtle",
								children: T("Withdrawable: %amt% %sym%", {
									amt: s.withdrawableText,
									sym: s.symbol
								})
							})]
						})]
					}), /* @__PURE__ */ V(D, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ B(Ge, {
							value: f,
							onChange: (e) => m(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), h && /* @__PURE__ */ V(Ke, { children: [Ze.map((e) => /* @__PURE__ */ V(qe, {
							onClick: () => h(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ B(qe, {
							onClick: () => h(100),
							children: T("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ V(Je, { children: [
						/* @__PURE__ */ V(Ye, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: T("Destination")
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: c ?? "—"
						})] }),
						/* @__PURE__ */ V(Ye, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: T("Network")
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							children: l
						})] }),
						/* @__PURE__ */ V(Ye, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: T("Token")
						}), /* @__PURE__ */ V(D, {
							alignItems: "center",
							style: { gap: 6 },
							children: [O(s, 16), /* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								children: s.symbol
							})]
						})] }),
						/* @__PURE__ */ V(Ye, { children: [/* @__PURE__ */ B(ze, {
							color: "textSubtle",
							children: T("Fee")
						}), /* @__PURE__ */ V(d, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								u ?? "—",
								" ",
								s.symbol
							]
						})] })
					] }),
					x,
					/* @__PURE__ */ B(n, {
						onClick: _,
						disabled: !b || !f || y,
						isLoading: y,
						scale: "md",
						children: T(y ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ B(d, {
						fontSize: "11px",
						color: "textSubtle",
						children: T("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, W = L(D)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, G = L(d).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, K = L(d).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, $e = L(D)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, et = L.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, tt = L(K)`
  color: ${({ theme: e }) => e.colors.failure};
`, nt = L(n)`
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
}, ot = ({ isOpen: t, details: n, onConfirm: r, onClose: i, onSkipFutureChange: a, t: o = rt }) => {
	let [s, c] = I(!1);
	return /* @__PURE__ */ B(C, {
		isOpen: t,
		onDismiss: i,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(w, {
			title: o("Confirm Order"),
			onDismiss: i,
			children: /* @__PURE__ */ V(D, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Symbol") }), /* @__PURE__ */ B(K, { children: n.symbol })] }),
					/* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Side / Type") }), /* @__PURE__ */ V(K, { children: [
						/* @__PURE__ */ B(et, {
							$side: n.side,
							children: n.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						at(n.type, o)
					] })] }),
					/* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Size") }), /* @__PURE__ */ V(K, { children: [
						n.quantity,
						" ",
						n.baseAsset
					] })] }),
					n.price && /* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Price") }), /* @__PURE__ */ V(K, { children: [
						it(n.price),
						" ",
						n.quoteAsset
					] })] }),
					n.stopPrice && /* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Trigger Price") }), /* @__PURE__ */ V(K, { children: [
						it(n.stopPrice),
						" ",
						n.quoteAsset
					] })] }),
					/* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Leverage") }), /* @__PURE__ */ V(K, { children: [n.leverage, "x"] })] }),
					/* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Cost") }), /* @__PURE__ */ B(K, { children: n.costUsdt ? `${n.costUsdt.toFixed(2)} ${n.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Est. Liq. Price") }), /* @__PURE__ */ B(tt, { children: n.liqPrice ? `${n.liqPrice.toFixed(2)} ${n.quoteAsset}` : "—" })] }),
					n.reduceOnly && /* @__PURE__ */ V(W, { children: [/* @__PURE__ */ B(G, { children: o("Reduce Only") }), /* @__PURE__ */ B(K, { children: o("Yes") })] }),
					/* @__PURE__ */ V($e, { children: [/* @__PURE__ */ B(e, {
						scale: "sm",
						checked: s,
						onChange: (e) => c(e.target.checked)
					}), /* @__PURE__ */ B(d, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ B(p, {
						mt: "8px",
						children: /* @__PURE__ */ B(nt, {
							$side: n.side,
							onClick: () => {
								s && a?.(!0), r(), i();
							},
							scale: "md",
							children: n.side === "BUY" ? o("Confirm Buy / Long") : o("Confirm Sell / Short")
						})
					})
				]
			})
		})
	});
}, st = L.div`
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
`, ct = L(D)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, lt = L.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, ut = L.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, dt = L.input`
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
`, ft = L.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, pt = L.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, mt = L.button`
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
`, ht = L.button`
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
`, gt = L(D)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, _t = L.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, vt = L.span`
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
`, yt = L.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, bt = L(d)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, xt = L(D)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, St = ({ filled: e }) => /* @__PURE__ */ B("svg", {
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
}, Et = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), Dt = (e) => Et(e).slice(0, 1) || e.slice(0, 1), Ot = (e) => e, kt = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: r, logoForSymbol: i, isLoading: a = !1, t: o = Ot }) => {
	let [s, c] = I("all"), [l, u] = I(""), f = F(() => {
		let n = l.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return s === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		l,
		s,
		t
	]);
	return /* @__PURE__ */ V(st, { children: [
		/* @__PURE__ */ V(ct, { children: [/* @__PURE__ */ B(lt, {
			$active: s === "all",
			onClick: () => c("all"),
			children: o("All Markets")
		}), /* @__PURE__ */ B(lt, {
			$active: s === "favorites",
			onClick: () => c("favorites"),
			children: o("Favorites")
		})] }),
		/* @__PURE__ */ V(ut, { children: [/* @__PURE__ */ B(m, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ B(dt, {
			placeholder: o("All tokens"),
			value: l,
			onChange: (e) => u(e.target.value),
			"aria-label": o("Search markets")
		})] }),
		/* @__PURE__ */ V(ft, { children: [
			/* @__PURE__ */ B("span", {}),
			/* @__PURE__ */ B("span", { children: o("Symbols") }),
			/* @__PURE__ */ B(bt, {
				as: "span",
				style: { color: "inherit" },
				children: o("Last Price")
			}),
			/* @__PURE__ */ B(bt, {
				as: "span",
				style: { color: "inherit" },
				children: o("24h Change")
			}),
			/* @__PURE__ */ B(bt, {
				as: "span",
				style: { color: "inherit" },
				children: o("24h Vol")
			})
		] }),
		/* @__PURE__ */ B(pt, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ B(xt, { children: /* @__PURE__ */ B(d, {
				fontSize: "14px",
				color: "textSubtle",
				children: o(a ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let a = t.includes(e.symbol), s = Number(e.priceChangePercent), c = i?.(Et(e.symbol));
				return /* @__PURE__ */ V(mt, {
					onClick: () => r(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ B(ht, {
							$filled: a,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": o(a ? "Unfavorite" : "Favorite"),
							"aria-pressed": a,
							children: /* @__PURE__ */ B(St, { filled: a })
						}),
						/* @__PURE__ */ V(gt, { children: [
							/* @__PURE__ */ B(vt, { children: c ? /* @__PURE__ */ B(yt, {
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
							/* @__PURE__ */ B("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ V(_t, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ B(bt, { children: Ct(e.lastPrice) }),
						/* @__PURE__ */ B(bt, {
							$tone: s >= 0 ? "up" : "down",
							children: wt(e.priceChangePercent)
						}),
						/* @__PURE__ */ B(bt, { children: Tt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, At = L(D)`
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
`, jt = L(D)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, Mt = L.button`
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
`, Nt = L.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, Pt = L.button`
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
`, Ft = L.span`
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
`, It = L.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Lt = L(d)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`;
L.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`;
var Rt = L.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, zt = L(D)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Bt = L(D)`
  flex-direction: column;
  flex-shrink: 0;
`, Vt = L(d)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, Ht = L(d)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Ut = L(D)`
  align-items: baseline;
  white-space: nowrap;
`, Wt = L.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Gt = L.span`
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
}, Xt = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", Zt = () => /* @__PURE__ */ B("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Qt = (e) => e, $t = ({ symbol: e, pairLabel: t, logoUrl: n, leverage: r, lastPrice: i, markPrice: a, indexPrice: o, fundingRate: s, nextFundingTime: c, change24h: l, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, t: h = Qt }) => {
	let g = R(), [_, v] = I(!1), [y, b] = I(null), x = ne(null), S = ne(null);
	te(() => {
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
	let C = ee(() => v(!1), []), w = Number(s) < 0, T = Number(l) < 0;
	return /* @__PURE__ */ V(At, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ V(jt, { children: [p && /* @__PURE__ */ B(Pt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": h(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ B(Zt, {})
			}), /* @__PURE__ */ V(Mt, {
				ref: x,
				"aria-haspopup": "listbox",
				"aria-expanded": _,
				disabled: !m,
				onClick: () => m && v((e) => !e),
				children: [
					/* @__PURE__ */ B(Ft, {
						$bg: n ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: n ? /* @__PURE__ */ B(It, {
							src: n,
							alt: t
						}) : Xt(t)
					}),
					/* @__PURE__ */ B(Lt, { children: t }),
					/* @__PURE__ */ B(u, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			_ && y && typeof document < "u" && m ? ie(/* @__PURE__ */ B(Nt, {
				ref: S,
				style: {
					top: y.top,
					left: y.left
				},
				children: m(C)
			}), document.body) : null,
			/* @__PURE__ */ B(Rt, {
				"aria-label": `Last price: ${i ?? ""}`,
				children: i ?? "—"
			}),
			/* @__PURE__ */ V(zt, {
				role: "list",
				children: [
					/* @__PURE__ */ V(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Vt, {
							$dashed: !0,
							children: h("Mark")
						}), /* @__PURE__ */ B(Ht, { children: a ?? "—" })]
					}),
					/* @__PURE__ */ V(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Vt, {
							$dashed: !0,
							children: h("Index")
						}), /* @__PURE__ */ B(Ht, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ V(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Vt, {
							$dashed: !0,
							children: h("Funding / Countdown")
						}), /* @__PURE__ */ V(Ut, { children: [
							/* @__PURE__ */ B(Wt, {
								$negative: w,
								children: Kt(s)
							}),
							/* @__PURE__ */ B(Gt, { children: "/" }),
							/* @__PURE__ */ B(Ht, {
								as: "span",
								children: Jt(c)
							})
						] })]
					}),
					/* @__PURE__ */ V(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Vt, { children: h("24h Change") }), /* @__PURE__ */ B(Ht, {
							style: { color: l ? T ? g.colors.failure : g.colors.success : void 0 },
							children: qt(l)
						})]
					}),
					/* @__PURE__ */ V(Bt, {
						role: "listitem",
						children: [/* @__PURE__ */ B(Vt, { children: h("24h Volume (USDT)") }), /* @__PURE__ */ B(Ht, { children: Yt(d) })]
					})
				]
			})
		]
	});
}, en = 10, tn = 27, nn = L(D)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, rn = L(D)`
  gap: 5px;
`, an = L.button`
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
`, on = L.div`
  position: relative;
`, sn = L.button`
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
`, cn = L.div`
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
`, ln = L.button`
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
`, un = L(D)`
  align-items: center;
  gap: 2px;
`, dn = L.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, fn = L.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, pn = L.div`
  height: ${({ $size: e }) => e === "full" ? en * 2 * tn : en * tn}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, mn = L.div`
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
`, hn = L.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, gn = L.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, _n = L.div`
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
`, vn = L.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, yn = L.span`
  text-align: center;
`, bn = L.span`
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
	let [i, a] = I(!1), o = ne(null);
	return En(o, () => a(!1)), /* @__PURE__ */ V(on, {
		ref: o,
		children: [/* @__PURE__ */ V(sn, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ B(cn, { children: t.map((e) => /* @__PURE__ */ B(ln, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, On = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ V("svg", {
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
}), kn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
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
}), An = ({ askColor: e, listColor: t }) => /* @__PURE__ */ V("svg", {
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
}), jn = (e) => e, Mn = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = jn }) => {
	let g = R(), _ = d === "QUOTE" ? r : n, v = F(() => Tn(i, o), [i, o]);
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
	}, T = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), E = /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ V(nn, { children: [/* @__PURE__ */ V(rn, { children: [
			/* @__PURE__ */ B(an, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ B(On, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B(an, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ B(kn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ B(an, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ B(An, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ V(un, { children: [/* @__PURE__ */ B(Dn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ B(Dn, {
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
		/* @__PURE__ */ V(dn, { children: [
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
		/* @__PURE__ */ V(fn, { children: [
			s !== "bids" && /* @__PURE__ */ B(pn, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - en)).map((e) => /* @__PURE__ */ V(mn, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ B(hn, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ B(gn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(gn, {
							$align: "right",
							children: T(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ V(_n, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ B(vn, { children: h("Spread") }),
					/* @__PURE__ */ B(yn, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ B(bn, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ B(pn, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? en * 2 : en).map((e) => /* @__PURE__ */ V(mn, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ B(hn, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ B(gn, {
							$align: "center",
							children: T(Number(e.qty))
						}),
						/* @__PURE__ */ B(gn, {
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
}, Nn = L(H)`
  flex: 1;
  min-height: 200px;
`, Pn = L.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, Fn = L(D)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, In = L.div`
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
`, Ln = L.div`
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
`, Rn = L(D)`
  gap: 6px;
  align-items: center;
`, zn = L.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, Bn = L.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, Vn = L.div`
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
`, Hn = L.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, Un = L.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, Wn = L.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Gn = L.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, Kn = L.button`
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
`, q = L(d).attrs({
	fontSize: "10px",
	color: "textSubtle"
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, J = L(d).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
`, qn = (e) => e, Jn = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: r, onClose: i, onEditTpSl: a, closingSymbol: o, t: s }) => {
	let c = R(), l = t?.(e.symbol), u = e.positionAmt >= 0 ? "BUY" : "SELL", d = Number.isFinite(l) && Number.isFinite(e.entryPrice) ? (l - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), f = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? r?.({
		side: u,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, p = o === e.symbol;
	return /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ B(J, {
			bold: !0,
			children: e.symbol
		}),
		/* @__PURE__ */ B(J, {
			style: { color: u === "BUY" ? c.colors.success : c.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ B(J, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ B(J, { children: l !== void 0 && Number.isFinite(l) ? l.toFixed(2) : "—" }),
		/* @__PURE__ */ V(J, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ B(J, { children: f ? f.toFixed(2) : "—" }),
		/* @__PURE__ */ B(J, {
			style: { color: d >= 0 ? c.colors.success : c.colors.failure },
			children: Number.isFinite(d) ? d.toFixed(4) : "—"
		}),
		/* @__PURE__ */ V(zn, { children: [/* @__PURE__ */ V(Bn, {
			$kind: "tp",
			children: [
				s("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ V(Bn, {
			$kind: "sl",
			children: [
				s("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ V(Rn, { children: [/* @__PURE__ */ B(n, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => a(e, l ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: s("TP/SL")
		}), /* @__PURE__ */ B(n, {
			scale: "xs",
			variant: "secondary",
			onClick: () => i(e),
			disabled: p || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: p,
			children: s("Close")
		})] })
	] });
}, Yn = ({ tab: e, onTabChange: t, positions: r, openOrders: i, tradeHistory: a = [], transactionHistory: o = [], onShareTrade: s, useMarkPriceForSymbol: c, computeLiqPrice: l, onClosePosition: u, onEditTpSl: f, onCancelOrder: p, closingSymbol: m = null, cancellingOrderId: h = null, t: g = qn }) => {
	let _ = R(), v = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ V(Nn, { children: [/* @__PURE__ */ V(se, {
		activeIndex: v.indexOf(e),
		onItemClick: (e) => t(v[e]),
		children: [
			/* @__PURE__ */ V(U, { children: [
				g("Positions"),
				" (",
				r.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				g("Open Orders"),
				" (",
				i.length,
				")"
			] }),
			/* @__PURE__ */ B(U, { children: g("Order History") }),
			/* @__PURE__ */ V(U, { children: [
				g("Trade History"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ V(U, { children: [
				g("Transaction History"),
				" (",
				o.length,
				")"
			] })
		]
	}), /* @__PURE__ */ V(Pn, { children: [
		e === "positions" && (r.length === 0 ? /* @__PURE__ */ B(Fn, { children: /* @__PURE__ */ B(d, {
			fontSize: "12px",
			color: "textSubtle",
			children: g("No open positions")
		}) }) : /* @__PURE__ */ V(In, { children: [
			/* @__PURE__ */ B(q, { children: g("Symbol") }),
			/* @__PURE__ */ B(q, { children: g("Size") }),
			/* @__PURE__ */ B(q, { children: g("Entry") }),
			/* @__PURE__ */ B(q, { children: g("Mark") }),
			/* @__PURE__ */ B(q, { children: g("Lev") }),
			/* @__PURE__ */ B(q, { children: g("Liq") }),
			/* @__PURE__ */ B(q, { children: g("uPnL") }),
			/* @__PURE__ */ B(q, { children: g("TP/SL") }),
			/* @__PURE__ */ B(q, {}),
			r.map((e) => /* @__PURE__ */ B(Ln, { children: /* @__PURE__ */ B(Jn, {
				p: e,
				useMarkPriceForSymbol: c,
				computeLiqPrice: l,
				onClose: u,
				onEditTpSl: f,
				closingSymbol: m,
				t: g
			}) }, e.id))
		] })),
		e === "orders" && (i.length === 0 ? /* @__PURE__ */ B(Fn, { children: /* @__PURE__ */ B(d, {
			fontSize: "12px",
			color: "textSubtle",
			children: g("No open orders")
		}) }) : /* @__PURE__ */ V(Vn, { children: [
			/* @__PURE__ */ B(q, { children: g("Symbol") }),
			/* @__PURE__ */ B(q, { children: g("Side") }),
			/* @__PURE__ */ B(q, { children: g("Type") }),
			/* @__PURE__ */ B(q, { children: g("Price") }),
			/* @__PURE__ */ B(q, { children: g("Size") }),
			/* @__PURE__ */ B(q, { children: g("Filled") }),
			/* @__PURE__ */ B(q, { children: g("Status") }),
			/* @__PURE__ */ B(q, {}),
			i.map((e) => {
				let t = h === e.id;
				return /* @__PURE__ */ V(Ln, { children: [
					/* @__PURE__ */ B(J, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ B(J, {
						style: { color: e.side === "BUY" ? _.colors.success : _.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ B(J, { children: e.type }),
					/* @__PURE__ */ B(J, { children: e.price }),
					/* @__PURE__ */ B(J, { children: e.origQty }),
					/* @__PURE__ */ B(J, { children: e.executedQty }),
					/* @__PURE__ */ B(J, { children: e.status }),
					/* @__PURE__ */ B(Rn, { children: /* @__PURE__ */ B(n, {
						scale: "xs",
						variant: "secondary",
						disabled: t,
						isLoading: t,
						onClick: () => p(e),
						children: g("Cancel")
					}) })
				] }, e.id);
			})
		] })),
		e === "history" && /* @__PURE__ */ B(Fn, { children: /* @__PURE__ */ B(d, {
			fontSize: "12px",
			color: "textSubtle",
			children: g("Order history coming soon")
		}) }),
		e === "trades" && (a.length === 0 ? /* @__PURE__ */ B(Fn, { children: /* @__PURE__ */ B(d, {
			fontSize: "12px",
			color: "textSubtle",
			children: g("No trades yet")
		}) }) : /* @__PURE__ */ V(Hn, { children: [
			/* @__PURE__ */ B(q, { children: g("Time") }),
			/* @__PURE__ */ B(q, { children: g("Symbol") }),
			/* @__PURE__ */ B(q, { children: g("Price") }),
			/* @__PURE__ */ B(q, { children: g("Quantity") }),
			/* @__PURE__ */ B(q, { children: g("Fee") }),
			/* @__PURE__ */ B(q, { children: g("Realized profit") }),
			a.map((e) => {
				let t = e.side === "BUY" ? _.colors.success : _.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ V(Ln, { children: [
					/* @__PURE__ */ B(J, {
						as: "div",
						children: /* @__PURE__ */ V(Wn, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
					}),
					/* @__PURE__ */ B(J, {
						as: "div",
						children: /* @__PURE__ */ V(Gn, { children: [/* @__PURE__ */ B("span", { children: e.symbol }), /* @__PURE__ */ B("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? g("Buy") : g("Sell")
						})] })
					}),
					/* @__PURE__ */ B(J, { children: e.price }),
					/* @__PURE__ */ B(J, { children: e.quantity }),
					/* @__PURE__ */ B(J, { children: e.fee }),
					/* @__PURE__ */ B(J, {
						as: "div",
						children: /* @__PURE__ */ V(D, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ B("span", {
								style: { color: n ? _.colors.success : _.colors.failure },
								children: e.realizedProfit
							}), s && /* @__PURE__ */ B(Kn, {
								type: "button",
								onClick: () => s(e),
								"aria-label": g("Share trade"),
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
		e === "transactions" && (o.length === 0 ? /* @__PURE__ */ B(Fn, { children: /* @__PURE__ */ B(d, {
			fontSize: "12px",
			color: "textSubtle",
			children: g("No transactions yet")
		}) }) : /* @__PURE__ */ V(Un, { children: [
			/* @__PURE__ */ B(q, { children: g("Time") }),
			/* @__PURE__ */ B(q, { children: g("Type") }),
			/* @__PURE__ */ B(q, { children: g("Amount") }),
			/* @__PURE__ */ B(q, { children: g("Symbol") }),
			o.map((e) => /* @__PURE__ */ V(Ln, { children: [
				/* @__PURE__ */ B(J, {
					as: "div",
					children: /* @__PURE__ */ V(Wn, { children: [/* @__PURE__ */ B("span", { children: e.date }), /* @__PURE__ */ B("span", { children: e.time })] })
				}),
				/* @__PURE__ */ B(J, { children: e.type }),
				/* @__PURE__ */ B(J, { children: e.amount }),
				/* @__PURE__ */ B(J, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, Xn = L(D)`
  flex-direction: column;
  gap: 8px;
`, Zn = L(D)`
  gap: 8px;
`, Qn = L.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, $n = L(d).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, er = L(x)`
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
`, tr = L(D)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, nr = (e) => e, rr = ({ isOpen: e, symbol: t, positionSide: r, qty: i, entryPrice: a, markPrice: o, onConfirm: s, onClose: c, t: l = nr }) => {
	let u = R(), f = r === "LONG" ? 1 : -1, [m, h] = I(""), [g, _] = I(""), [v, y] = I(""), [b, x] = I(""), [S, T] = I(!1);
	N(() => {
		e || (h(""), _(""), y(""), x(""));
	}, [e]);
	let E = (e) => i > 0 ? a + f * e / i : NaN, O = (e) => i > 0 ? f * (e - a) * i : NaN, k = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", A = (e) => {
		h(e);
		let t = Number(e);
		_(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, j = (e) => {
		_(e);
		let t = Number(e);
		h(Number.isFinite(t) && e !== "" ? k(E(t), 2) : "");
	}, M = (e) => {
		y(e);
		let t = Number(e);
		x(Number.isFinite(t) && e !== "" ? k(O(t), 4) : "");
	}, ee = (e) => {
		x(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? y(k(E(t), 2)) : x("");
	}, P = F(() => {
		let e = Number(m), t = Number(v), n = m !== "" && Number.isFinite(e), i = v !== "" && Number.isFinite(t);
		if (r === "LONG") {
			if (n && e <= a) return l("Take Profit price must be above entry for a LONG position.");
			if (i && t >= a) return l("Stop Loss price must be below entry for a LONG position.");
		} else {
			if (n && e >= a) return l("Take Profit price must be below entry for a SHORT position.");
			if (i && t <= a) return l("Stop Loss price must be above entry for a SHORT position.");
		}
	}, [
		m,
		v,
		r,
		a,
		l
	]), te = !S && (m !== "" || v !== "") && !P;
	return /* @__PURE__ */ B(C, {
		isOpen: e,
		onDismiss: c,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(w, {
			title: l("Set TP / SL"),
			onDismiss: c,
			children: /* @__PURE__ */ V(D, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ V(tr, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						color: "textSubtle",
						children: l("Symbol")
					}), /* @__PURE__ */ V(d, {
						fontSize: "14px",
						bold: !0,
						style: { color: r === "LONG" ? u.colors.success : u.colors.failure },
						children: [
							t,
							" · ",
							r
						]
					})] }),
					/* @__PURE__ */ V(tr, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						color: "textSubtle",
						children: l("Entry")
					}), /* @__PURE__ */ B(d, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(a) ? a.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ V(tr, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						color: "textSubtle",
						children: l("Mark")
					}), /* @__PURE__ */ B(d, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? o.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ B(Qn, {}),
					/* @__PURE__ */ V(Xn, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						bold: !0,
						color: u.colors.success,
						children: l("Take Profit")
					}), /* @__PURE__ */ V(Zn, { children: [/* @__PURE__ */ V(p, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B($n, { children: l("Trigger Price") }), /* @__PURE__ */ B(er, {
							value: m,
							onChange: (e) => A(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(p, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B($n, { children: l("PnL (USDT)") }), /* @__PURE__ */ B(er, {
							value: g,
							onChange: (e) => j(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ V(Xn, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						bold: !0,
						color: u.colors.failure,
						children: l("Stop Loss")
					}), /* @__PURE__ */ V(Zn, { children: [/* @__PURE__ */ V(p, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B($n, { children: l("Trigger Price") }), /* @__PURE__ */ B(er, {
							value: v,
							onChange: (e) => M(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ V(p, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ B($n, { children: l("PnL (USDT)") }), /* @__PURE__ */ B(er, {
							value: b,
							onChange: (e) => ee(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					P && /* @__PURE__ */ B(d, {
						fontSize: "14px",
						color: "failure",
						children: P
					}),
					/* @__PURE__ */ B(n, {
						onClick: async () => {
							if (te) {
								T(!0);
								try {
									await s({
										symbol: t,
										closeSide: r === "LONG" ? "SELL" : "BUY",
										tpPrice: m,
										slPrice: v,
										qty: String(i),
										closePosition: !0
									}), c();
								} finally {
									T(!1);
								}
							}
						},
						disabled: !te,
						isLoading: S,
						scale: "md",
						children: l("Confirm")
					})
				]
			})
		})
	});
}, ir = L(H)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, ar = (e) => typeof e == "number" ? `${e}px` : e, or = ({ children: e, minHeight: t = "420px" }) => /* @__PURE__ */ B(ir, {
	$minHeight: ar(t),
	children: e
}), sr = L(H)`
  height: 100%;
`, cr = L.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, lr = L.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, ur = (e) => e, dr = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = ur }) => /* @__PURE__ */ V(sr, { children: [/* @__PURE__ */ V(se, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ B(U, { children: i("Order Book") }), /* @__PURE__ */ B(U, { children: i("Trades") })]
}), /* @__PURE__ */ V(cr, { children: [/* @__PURE__ */ B(lr, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ B(lr, {
	$hidden: e !== "trades",
	children: r
})] })] }), fr = L(H)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, pr = L(D)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, mr = L.button`
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
`, hr = L(D)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, gr = L.button`
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
`, _r = L.button`
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
`, vr = L(D)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, yr = L(d).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, br = L(D)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, xr = L.div`
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
`, Sr = L(d).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, Cr = L.input`
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
`, wr = L(n).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, Tr = L.div`
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
`, Er = L.input`
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
`, Dr = L.button`
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
`, Or = L.div`
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
`, kr = L.button`
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
`, Ar = L.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, jr = L(x)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, Mr = L.div`
  padding: 4px 0;
`, Nr = L(D)`
  gap: 8px;
`, Pr = L.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, Fr = L.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, Ir = ({ value: e, onChange: t }) => /* @__PURE__ */ V(Pr, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ B(Fr, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ B(Fr, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), Lr = L(n)`
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
`, Rr = L.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, zr = L(d).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Br = L(d).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, Vr = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Hr = ({ baseAsset: t, quoteAsset: n, draft: r, onDraftChange: i, typeKey: a, onTypeKeyChange: o, availableBalanceText: s, preview: c, feeText: l, sizePercent: u, onSizePercentChange: f, cta: m, canSubmit: h, isSubmitting: g = !1, marginSubmitting: v = !1, authReady: y = !0, hasAddress: b = !0, errorSlot: x, onSubmit: S, onLeverageClick: C, onMarginModeToggle: w, onDepositClick: T, t: E = Vr }) => {
	let A = r.sizeUnit === "QUOTE" ? n : t, j = (e) => i({
		...r,
		side: e
	}), M = () => i({
		...r,
		sizeUnit: r.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), ee = () => i({
		...r,
		tpSlEnabled: !r.tpSlEnabled
	}), P = a === "stop-limit" || a === "stop-market", te = a === "limit" || a === "stop-limit", F = P, L = ne(null), re = ne(null), [R, H] = I(!1), [ae, oe] = I({
		top: 0,
		left: 0
	});
	N(() => {
		if (!R || !L.current || !re.current) return;
		let e = L.current.getBoundingClientRect(), t = re.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		oe({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [R]), N(() => {
		if (!R) return;
		let e = (e) => {
			let t = e.target;
			L.current && !L.current.contains(t) && re.current && !re.current.contains(t) && H(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [R]);
	let U = P, se = a === "stop-market" ? `${E("Stop Market")} ▾` : `${E("Stop Limit")} ▾`, ce = () => {
		H((e) => !e);
	}, le = (e) => {
		o(e), H(!1);
	};
	return /* @__PURE__ */ V(fr, { children: [
		/* @__PURE__ */ V(pr, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ B(mr, {
				$active: a === e,
				onClick: () => o(e),
				children: E(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ B(mr, {
				ref: L,
				$active: U,
				onClick: ce,
				"aria-haspopup": "menu",
				"aria-expanded": R,
				children: se
			}),
			R && typeof document < "u" && ie(/* @__PURE__ */ V(Or, {
				ref: re,
				style: {
					top: ae.top,
					left: ae.left
				},
				role: "menu",
				children: [/* @__PURE__ */ B(kr, {
					$active: a === "stop-limit",
					role: "menuitem",
					onClick: () => le("stop-limit"),
					children: E("Stop Limit")
				}), /* @__PURE__ */ B(kr, {
					$active: a === "stop-market",
					role: "menuitem",
					onClick: () => le("stop-market"),
					children: E("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ V(hr, { children: [/* @__PURE__ */ B(gr, {
			$active: r.side === "BUY",
			$side: "BUY",
			onClick: () => j("BUY"),
			children: E("Buy")
		}), /* @__PURE__ */ B(gr, {
			$active: r.side === "SELL",
			$side: "SELL",
			onClick: () => j("SELL"),
			children: E("Sell")
		})] }),
		/* @__PURE__ */ V(D, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(_r, {
				disabled: v,
				onClick: w,
				title: E("Margin mode"),
				children: r.marginMode === "CROSS" ? E("Cross") : E("Isolated")
			}), /* @__PURE__ */ V(_r, {
				onClick: C,
				title: E("Leverage"),
				children: [r.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ V(vr, { children: [/* @__PURE__ */ B(yr, { children: E("Avbl") }), /* @__PURE__ */ V(br, { children: [/* @__PURE__ */ V(d, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				s,
				" ",
				n
			]
		}), /* @__PURE__ */ B(k, {
			variant: "text",
			scale: "xs",
			onClick: T,
			title: E("Deposit"),
			"aria-label": E("Deposit"),
			style: {
				width: 18,
				height: 18,
				minWidth: 18,
				borderRadius: 999
			},
			children: /* @__PURE__ */ B(_, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		F && /* @__PURE__ */ V(Tr, { children: [
			/* @__PURE__ */ B(Sr, { children: E("Stop") }),
			/* @__PURE__ */ B(Er, {
				value: r.stopPrice,
				onChange: (e) => i({
					...r,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": E("Stop price")
			}),
			/* @__PURE__ */ V(Dr, {
				type: "button",
				onClick: () => i({
					...r,
					stopPriceSource: r.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: E("Trigger source"),
				children: [r.stopPriceSource === "MARK" ? E("Mark") : E("Last"), " ▾"]
			})
		] }),
		te && /* @__PURE__ */ V(Tr, { children: [
			/* @__PURE__ */ B(Sr, { children: E("Price") }),
			/* @__PURE__ */ B(Er, {
				value: r.price,
				onChange: (e) => i({
					...r,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": E("Limit price")
			}),
			/* @__PURE__ */ B(wr, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: n
			})
		] }),
		a === "stop-limit" && /* @__PURE__ */ V(Tr, { children: [
			/* @__PURE__ */ B(Sr, { children: E("TIF") }),
			/* @__PURE__ */ B(D, { flex: 1 }),
			/* @__PURE__ */ V(Ar, {
				value: r.timeInForce === "GTX" ? "GTC" : r.timeInForce,
				onChange: (e) => i({
					...r,
					timeInForce: e.target.value
				}),
				"aria-label": E("Time in force"),
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
		/* @__PURE__ */ V(xr, { children: [
			/* @__PURE__ */ B(Sr, { children: E("Size") }),
			/* @__PURE__ */ B(Cr, {
				value: r.quantity,
				onChange: (e) => i({
					...r,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ V(wr, {
				onClick: M,
				title: E("Toggle unit"),
				children: [A, " ▾"]
			})
		] }),
		/* @__PURE__ */ B(Mr, { children: /* @__PURE__ */ B(O, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: u,
			onValueChanged: f,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ V(D, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(e, {
				scale: "sm",
				checked: r.reduceOnly,
				onChange: (e) => i({
					...r,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ B(d, {
				fontSize: "14px",
				children: E("Reduce Only")
			})]
		}),
		/* @__PURE__ */ V(D, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ B(e, {
				scale: "sm",
				checked: r.tpSlEnabled,
				onChange: ee
			}), /* @__PURE__ */ B(d, {
				fontSize: "14px",
				children: E("Take Profit / Stop Loss")
			})]
		}),
		r.tpSlEnabled && /* @__PURE__ */ V(D, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ V(p, { children: [/* @__PURE__ */ V(D, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(d, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: E("Take Profit")
				}), /* @__PURE__ */ B(Ir, {
					value: r.takeProfitSource ?? "LAST",
					onChange: (e) => i({
						...r,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ V(Nr, { children: [/* @__PURE__ */ V(p, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(d, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: E("Trigger Price")
				}), /* @__PURE__ */ B(jr, {
					value: r.takeProfitPrice,
					onChange: (e) => i({
						...r,
						takeProfitPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ V(p, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(d, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: E("PnL (USDT)")
				}), /* @__PURE__ */ B(jr, {
					value: r.takeProfitPnl ?? "",
					onChange: (e) => i({
						...r,
						takeProfitPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] }), /* @__PURE__ */ V(p, { children: [/* @__PURE__ */ V(D, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ B(d, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: E("Stop Loss")
				}), /* @__PURE__ */ B(Ir, {
					value: r.stopLossSource ?? "LAST",
					onChange: (e) => i({
						...r,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ V(Nr, { children: [/* @__PURE__ */ V(p, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(d, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: E("Trigger Price")
				}), /* @__PURE__ */ B(jr, {
					value: r.stopLossPrice,
					onChange: (e) => i({
						...r,
						stopLossPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ V(p, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ B(d, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: E("PnL (USDT)")
				}), /* @__PURE__ */ B(jr, {
					value: r.stopLossPnl ?? "",
					onChange: (e) => i({
						...r,
						stopLossPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] })]
		}),
		x,
		y ? /* @__PURE__ */ B(Lr, {
			onClick: S,
			disabled: !h,
			isLoading: g,
			scale: "md",
			$side: r.side,
			children: m
		}) : /* @__PURE__ */ B(Lr, {
			$side: r.side,
			onClick: S,
			scale: "md",
			disabled: !b,
			children: m
		}),
		/* @__PURE__ */ V(Rr, { children: [
			/* @__PURE__ */ B(zr, { children: E("Cost") }),
			/* @__PURE__ */ B(Br, { children: c.cost }),
			!P && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(zr, { children: E("Est. Liq. Price") }), /* @__PURE__ */ B(Br, { children: c.liq })] }),
			/* @__PURE__ */ B(zr, { children: E("Fees") }),
			/* @__PURE__ */ B(Br, { children: l })
		] })
	] });
}, Ur = L(D)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Wr = L.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, Gr = L(D)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, Kr = L(d).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, qr = L(D)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, Jr = L(d).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Yr = L(D)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, Xr = L.button`
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
`, Zr = L(D)`
  flex-direction: column;
`, Qr = L(D)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, $r = L.input`
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
`, ei = L(D)`
  gap: 6px;
  margin-top: 4px;
`, ti = L.button`
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
`, ni = L.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Y = L(D)`
  justify-content: space-between;
  align-items: center;
`, ri = L(D)`
  flex-direction: column;
  gap: 8px;
`, ii = L(D)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, ai = L.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, oi = L(d).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, si = L.div`
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
], ui = ({ isOpen: e, onClose: t, step: r, evmAddress: i, solanaAddress: a, isLoadingAssets: o = !1, assets: s, selectedAssetId: c, onSelectAsset: l, otherSupportedSymbols: u = [], selectedAsset: f, amount: p, onAmountChange: m, sourceAddress: h, errorSlot: g, onPercentClick: _, submitState: v, canContinue: y, onContinue: b, onBack: x, receipt: T, checkingElapsedMs: E = 0, onDepositAgain: O, onRetry: k, t: A = ci, renderTokenIcon: j, renderSpinner: M }) => {
	let ee = A(r === "success" ? "Deposit Successful" : r === "checking" ? "Processing Deposit" : r === "failed" ? "Deposit Failed" : "Fund your Account"), N = (() => {
		switch (v) {
			case "switching-chain": return A("Switching chain...");
			case "approving": return A("Approve in wallet...");
			case "approve-confirming": return A("Confirming approval...");
			case "depositing": return A("Confirm in wallet...");
			case "deposit-confirming": return A("Confirming deposit...");
			case "done": return A("Done");
			case "failed": return A("Retry");
			default: return A("Continue");
		}
	})(), P = (e, t = 24) => j ? j(e, t) : /* @__PURE__ */ B(si, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), te = (e) => M ? M(e) : /* @__PURE__ */ B("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ B("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), F = v === "switching-chain" || v === "approving" || v === "approve-confirming" || v === "depositing" || v === "deposit-confirming";
	return /* @__PURE__ */ B(C, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(w, {
			title: ee,
			onDismiss: t,
			children: /* @__PURE__ */ V(Ur, { children: [
				r === "amount" && /* @__PURE__ */ B(D, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ B(n, {
						scale: "sm",
						variant: "text",
						onClick: x,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ B(S, { width: "18px" }),
						children: A("Back")
					})
				}),
				r === "select" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(Wr, { children: [
						i && /* @__PURE__ */ V(Gr, { children: [
							/* @__PURE__ */ B("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ B(Kr, { children: i }),
							/* @__PURE__ */ B(d, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						a && /* @__PURE__ */ V(Gr, {
							style: { borderTop: i ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ B("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ B(Kr, { children: a }),
								/* @__PURE__ */ B(d, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ V(qr, { children: [/* @__PURE__ */ V("div", { children: [/* @__PURE__ */ B(Jr, {
							color: "textSubtle",
							children: A("Balance")
						}), /* @__PURE__ */ B(d, {
							fontSize: "12px",
							color: "textSubtle",
							children: A("In your wallet")
						})] }), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							bold: !0,
							children: s.some((e) => e.hasBalance) ? A("Ready") : "—"
						})] })
					] }),
					o && /* @__PURE__ */ B(d, {
						fontSize: "12px",
						children: A("Loading tokens...")
					}),
					!o && s.length === 0 && /* @__PURE__ */ V(D, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								children: A("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ B(d, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							u.length > 0 && /* @__PURE__ */ B(d, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
							})
						]
					}),
					s.length > 0 && /* @__PURE__ */ B(Yr, { children: s.map((e) => /* @__PURE__ */ B(Xr, {
						$selected: c === e.id,
						onClick: () => l(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ V(D, {
							alignItems: "center",
							style: { gap: 12 },
							children: [P(e, 32), /* @__PURE__ */ V(Zr, { children: [/* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ V(d, {
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
					s.length > 0 && u.length > 0 && /* @__PURE__ */ B(d, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: A("Also supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
					})
				] }),
				r === "amount" && f && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(Qr, { children: [/* @__PURE__ */ V(D, {
						alignItems: "center",
						style: { gap: 12 },
						children: [P(f, 40), /* @__PURE__ */ V(D, {
							flexDirection: "column",
							children: [/* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								children: f.displayName || f.symbol
							}), /* @__PURE__ */ B(d, {
								fontSize: "12px",
								color: "textSubtle",
								children: f.balanceText
							})]
						})]
					}), /* @__PURE__ */ V(D, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ B($r, {
							value: p,
							onChange: (e) => m(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ V(ei, { children: [li.map((e) => /* @__PURE__ */ V(ti, {
							onClick: () => _(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ B(ti, {
							onClick: () => _(100),
							children: A("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ V(ni, { children: [
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(Jr, {
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							children: h ?? "—"
						})] }),
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(Jr, {
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(Jr, {
							color: "textSubtle",
							children: A("Token")
						}), /* @__PURE__ */ V(D, {
							alignItems: "center",
							style: { gap: 6 },
							children: [P(f, 16), /* @__PURE__ */ B(d, {
								fontSize: "14px",
								bold: !0,
								children: f.symbol
							})]
						})] })
					] }),
					g,
					/* @__PURE__ */ B(n, {
						onClick: b,
						disabled: !y || F,
						isLoading: F,
						scale: "md",
						children: N
					})
				] }),
				r === "checking" && T && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(D, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [te(72), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ V(ri, { children: [
						/* @__PURE__ */ V(ii, {
							$state: "done",
							children: [/* @__PURE__ */ B(ai, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(d, {
								fontSize: "13px",
								children: A("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ V(ii, {
							$state: "done",
							children: [/* @__PURE__ */ B(ai, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ B(d, {
								fontSize: "13px",
								children: A("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ V(ii, {
							$state: "active",
							children: [/* @__PURE__ */ B(ai, {
								$state: "active",
								children: te(16)
							}), /* @__PURE__ */ B(d, {
								fontSize: "13px",
								children: A("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ V(ni, { children: [
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(Jr, {
							color: "textSubtle",
							children: A("Amount")
						}), /* @__PURE__ */ V(d, {
							fontSize: "14px",
							bold: !0,
							children: [
								T.amount,
								" ",
								T.assetSymbol
							]
						})] }),
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(Jr, {
							color: "textSubtle",
							children: A("Tx hash")
						}), /* @__PURE__ */ V(d, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								T.hash.slice(0, 10),
								"…",
								T.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(Jr, {
							color: "textSubtle",
							children: A("Elapsed")
						}), /* @__PURE__ */ V(d, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(E / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ B(n, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: A("Close")
					})
				] }),
				r === "success" && T && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(oi, { children: [
						T.amount,
						" ",
						T.assetSymbol
					] }),
					/* @__PURE__ */ V(ni, { children: [
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(d, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							bold: !0,
							children: T.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(d, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							bold: !0,
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(d, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Processing time")
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							bold: !0,
							children: A("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ B(ni, { children: /* @__PURE__ */ V(Y, { children: [/* @__PURE__ */ B(d, {
						fontSize: "14px",
						color: "textSubtle",
						children: A("Tx hash")
					}), /* @__PURE__ */ V(d, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							T.hash.slice(0, 10),
							"…",
							T.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ V(D, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(n, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: A("View Balance")
						}), /* @__PURE__ */ B(n, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: O,
							children: A("Deposit Again")
						})]
					})
				] }),
				r === "failed" && /* @__PURE__ */ V(z, { children: [
					/* @__PURE__ */ V(D, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(d, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ B(d, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("The transaction did not go through. Your funds did not move.")
						})]
					}),
					g,
					/* @__PURE__ */ V(D, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ B(n, {
							style: { flex: 1 },
							scale: "md",
							onClick: k,
							children: A("Try Again")
						}), /* @__PURE__ */ B(n, {
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
}, di = (e) => e, fi = ({ isOpen: e, onClose: t, phase: i, eoaAddress: a, agentAddress: o, isProvisioning: s = !1, linkButtonLabel: c, isLinkDisabled: l = !1, isLinkPending: u = !1, onLinkWallet: f, approveButtonLabel: m, isApproveDisabled: h = !1, isApprovePending: g = !1, onApprove: _, errorSlot: v, t: y = di }) => {
	let b = o ?? y(s ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ B(C, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ B(w, {
			title: y("Enable Perps Trading"),
			onDismiss: t,
			children: /* @__PURE__ */ V(D, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ B(d, {
						fontSize: "14px",
						color: "textSubtle",
						children: y("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ V(p, { children: [/* @__PURE__ */ B(d, {
						fontSize: "12px",
						color: "textSubtle",
						children: y("Your wallet")
					}), /* @__PURE__ */ B(d, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: a ?? "—"
					})] }),
					/* @__PURE__ */ V(p, { children: [/* @__PURE__ */ B(d, {
						fontSize: "12px",
						color: "textSubtle",
						children: y("Agent (trading signer)")
					}), /* @__PURE__ */ B(d, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: b
					})] }),
					v,
					i === "link-wallet" && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(n, {
						onClick: f,
						disabled: l || u,
						isLoading: u,
						scale: "md",
						children: c
					}), /* @__PURE__ */ B(d, {
						fontSize: "11px",
						color: "textSubtle",
						children: y("You'll sign one message in your wallet. No funds move.")
					})] }),
					(i === "authorize-agent" || i === "checking-status") && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(n, {
						onClick: _,
						disabled: h || g || i === "checking-status",
						isLoading: g || i === "checking-status",
						scale: "md",
						children: m
					}), /* @__PURE__ */ B(d, {
						fontSize: "11px",
						color: "textSubtle",
						children: y("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					i === "done" && /* @__PURE__ */ B(r, {
						variant: "success",
						children: /* @__PURE__ */ B(E, { children: y("Trading enabled.") })
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
], mi = 1001, hi = (e) => e <= 50 ? "safe" : e <= 250 ? "warn" : "danger", gi = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "Caution" : "Danger zone", _i = () => /* @__PURE__ */ B("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 4l-7 7h4v9h6v-9h4z" })
}), vi = () => /* @__PURE__ */ B("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M12 20l7-7h-4V4h-6v9H5z" })
}), yi = () => /* @__PURE__ */ B("svg", {
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
}), bi = () => /* @__PURE__ */ B("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), xi = () => /* @__PURE__ */ B("svg", {
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
}), Si = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Ci = L(H)`
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
`, wi = L.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
`, Ti = L.div`
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
`, Ei = L.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0 16px 16px 16px;
`, Di = L.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
L(D)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, L.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, L.span`
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
`, L.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, L.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, L.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, L.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var Oi = L.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ki = L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Ai = L(D)`
  align-items: center;
  justify-content: space-between;
`, ji = L(d).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, Mi = L.button`
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
`, Ni = L.span`
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
`, Pi = L.div`
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
`, Fi = L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, Ii = L.span`
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
`, Li = L.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, Ri = L.input`
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
`, zi = L.button`
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
`, Bi = L.span`
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
`, Vi = L.span`
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
L.span`
  font-size: 14px;
  font-weight: 600;
`;
var Hi = L(D)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, Ui = L.button`
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
`, Wi = L.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, Gi = L(D)`
  justify-content: space-between;
  align-items: center;
`, Ki = L.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, qi = L.span`
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
`, Ji = L.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, Yi = L.div`
  position: relative;
  height: 21px;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: linear-gradient(140deg, #E5FDFF 0%, #F3EFFF 100%);
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.06) inset;
  overflow: visible;
`, Xi = L.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $fillPct: e }) => `${e}%`};
  border-radius: 24px 0 0 24px;
  background: ${({ theme: e, $zone: t, $degen: n }) => n ? "linear-gradient(90deg, #FAD658 0%, #ED4B9E 100%)" : t === "safe" ? e.colors.success : t === "warn" ? e.colors.warning : e.colors.failure};
  box-shadow: ${({ $degen: e }) => e ? "0 2px 0 0 rgba(0, 0, 0, 0.06) inset" : "none"};
`, Zi = L.span`
  position: absolute;
  top: ${({ $variant: e }) => e === "triple" ? "-15px" : "-10px"};
  left: ${({ $fillPct: e, $variant: t }) => t === "triple" ? `calc(${e}% - 22px)` : t === "double" ? `calc(${e}% - 20.7px)` : `calc(${e}% - 19px)`};
  width: ${({ $variant: e }) => e === "triple" ? "44px" : e === "double" ? "41.455px" : "38.004px"};
  height: ${({ $variant: e }) => e === "triple" ? "48px" : e === "double" ? "42.549px" : "38.186px"};
  pointer-events: none;
  cursor: grab;
  &:active { cursor: grabbing; }
`, Qi = () => /* @__PURE__ */ V("svg", {
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
}), $i = () => /* @__PURE__ */ V("svg", {
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
}), ea = () => /* @__PURE__ */ V("svg", {
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
}), ta = L.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, na = L(D)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, ra = L.button`
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
`, ia = L.div`
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
`, aa = L.input`
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
`, oa = L.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`, sa = L(D)`
  align-items: center;
  justify-content: space-between;
`;
L.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var ca = L.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, la = L(D)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, ua = L.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, da = L.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, fa = L(D)`
  align-self: stretch;
  gap: 8px;
`, pa = L.button`
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
`, ma = L(D)`
  align-self: stretch;
  gap: 8px;
`, ha = L(n)`
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
`, ga = L.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, _a = L(D)`
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
`, va = L.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ya = L.span`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.22px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, ba = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, leverage: l, onLeverageChange: u, quoteAsset: d, onQuoteAssetClick: f, fundBalanceText: p, onTopUpFund: m, onPercentClick: h, estimatedEntry: g, liqIfLong: _, marginRequired: v, openingFee: y, canSubmit: b, isSubmittingUp: x = !1, isSubmittingDown: S = !1, onUp: C, onDown: w, onDeposit: T, onWithdraw: E, unrealizedPnl: D }) => {
	let O = Math.min(100, Math.max(0, l / mi * 100)), k = hi(l), A = x || S, j = !b || A, M = !b || A;
	return /* @__PURE__ */ V(Ci, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ B(wi, { children: /* @__PURE__ */ V(Di, { children: [/* @__PURE__ */ V(Oi, { children: [
			/* @__PURE__ */ V(ki, { children: [
				/* @__PURE__ */ V(Ai, { children: [/* @__PURE__ */ B(ji, { children: "My Perp Fund" }), /* @__PURE__ */ V(Mi, {
					type: "button",
					onClick: m,
					"aria-label": "Top up fund",
					children: [
						/* @__PURE__ */ B("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text-subtle, #7A6EAA)"
							},
							children: /* @__PURE__ */ B(Si, {})
						}),
						/* @__PURE__ */ B(Ni, { children: p }),
						/* @__PURE__ */ B("span", {
							style: {
								display: "inline-flex",
								color: "var(--pcs-colors-text, #280D5F)"
							},
							children: /* @__PURE__ */ B(xi, {})
						})
					]
				})] }),
				/* @__PURE__ */ B(Pi, { children: /* @__PURE__ */ V(Fi, { children: [/* @__PURE__ */ B(Ii, { children: "My Bet" }), /* @__PURE__ */ V(Li, { children: [/* @__PURE__ */ B(Ri, {
					type: "number",
					inputMode: "decimal",
					value: o,
					onChange: (e) => s(e.target.value),
					"aria-label": "Bet amount",
					placeholder: "0"
				}), /* @__PURE__ */ V(zi, {
					type: "button",
					onClick: f,
					"aria-label": "Choose quote asset",
					children: [/* @__PURE__ */ B(Bi, { children: d }), /* @__PURE__ */ B(Vi, { children: /* @__PURE__ */ B(bi, {}) })]
				})] })] }) }),
				/* @__PURE__ */ V(Hi, { children: [
					/* @__PURE__ */ B(Ui, {
						type: "button",
						onClick: () => h?.(.25),
						children: "25%"
					}),
					/* @__PURE__ */ B(Wi, {}),
					/* @__PURE__ */ B(Ui, {
						type: "button",
						onClick: () => h?.(.5),
						children: "50%"
					}),
					/* @__PURE__ */ B(Wi, {}),
					/* @__PURE__ */ B(Ui, {
						type: "button",
						onClick: () => h?.(1),
						children: "MAX"
					})
				] })
			] }),
			/* @__PURE__ */ V(ki, { children: [
				/* @__PURE__ */ B(ji, { children: "Leverage" }),
				/* @__PURE__ */ V(Gi, { children: [/* @__PURE__ */ V(Ki, { children: [l, "x"] }), /* @__PURE__ */ V(qi, {
					$zone: k,
					children: [gi(k), /* @__PURE__ */ B("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ B(yi, {})
					})]
				})] }),
				/* @__PURE__ */ V(Ji, { children: [/* @__PURE__ */ V(Yi, {
					$fillPct: O,
					$zone: k,
					"aria-hidden": !0,
					children: [
						/* @__PURE__ */ B(Xi, {
							$fillPct: O,
							$zone: k,
							$degen: l > 500
						}),
						/* @__PURE__ */ B(Zi, {
							$fillPct: O,
							$variant: l > 500 ? "triple" : l > 250 ? "double" : "single",
							children: B(l > 500 ? ea : l > 250 ? $i : Qi, {})
						}),
						/* @__PURE__ */ B(ta, {
							type: "range",
							min: 1,
							max: mi,
							value: l,
							onChange: (e) => u(Number(e.target.value)),
							"aria-label": "Leverage"
						})
					]
				}), /* @__PURE__ */ V(na, {
					role: "tablist",
					children: [/* @__PURE__ */ V(ia, { children: [/* @__PURE__ */ B(aa, {
						type: "number",
						min: 1,
						max: mi,
						value: l,
						onChange: (e) => u(Math.max(1, Math.min(mi, Number(e.target.value) || 1))),
						"aria-label": "Custom leverage"
					}), /* @__PURE__ */ B(oa, { children: "x" })] }), pi.map((e) => /* @__PURE__ */ V(ra, {
						type: "button",
						role: "tab",
						"aria-selected": l === e,
						$active: l === e,
						onClick: () => u(e),
						children: [e, "x"]
					}, e))]
				})] })
			] }),
			/* @__PURE__ */ V(sa, { children: [/* @__PURE__ */ B(ji, { children: "Duration" }), /* @__PURE__ */ V(Mi, {
				type: "button",
				disabled: !0,
				children: [/* @__PURE__ */ B(Ni, {
					style: { fontSize: 14 },
					children: "Perpetual"
				}), /* @__PURE__ */ B("span", {
					"aria-hidden": !0,
					children: "▾"
				})]
			})] })
		] }), o && o !== "0" ? /* @__PURE__ */ V(Ti, { children: [/* @__PURE__ */ V(ca, { children: [
			/* @__PURE__ */ V(la, { children: [/* @__PURE__ */ B(ua, { children: "Estimated Entry" }), /* @__PURE__ */ B(da, { children: g })] }),
			/* @__PURE__ */ V(la, { children: [/* @__PURE__ */ B(ua, { children: "Liquidation if long" }), /* @__PURE__ */ B(da, {
				$danger: !0,
				children: _
			})] }),
			/* @__PURE__ */ V(la, { children: [/* @__PURE__ */ B(ua, { children: "Margin required" }), /* @__PURE__ */ B(da, { children: v })] }),
			/* @__PURE__ */ V(la, { children: [/* @__PURE__ */ B(ua, { children: "Opening fee" }), /* @__PURE__ */ B(da, { children: y })] })
		] }), /* @__PURE__ */ V(Ei, { children: [/* @__PURE__ */ V(pa, {
			type: "button",
			$variant: "up",
			disabled: j,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ B(_i, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ V(pa, {
			type: "button",
			$variant: "down",
			disabled: M,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ B(vi, {}), S ? "..." : "DOWN"]
		})] })] }) : /* @__PURE__ */ V(fa, { children: [/* @__PURE__ */ V(pa, {
			type: "button",
			$variant: "up",
			disabled: j,
			onClick: C,
			"aria-busy": x,
			children: [/* @__PURE__ */ B(_i, {}), x ? "..." : "UP"]
		}), /* @__PURE__ */ V(pa, {
			type: "button",
			$variant: "down",
			disabled: M,
			onClick: w,
			"aria-busy": S,
			children: [/* @__PURE__ */ B(vi, {}), S ? "..." : "DOWN"]
		})] })] }) }), /* @__PURE__ */ V(ga, { children: [/* @__PURE__ */ V(ma, { children: [/* @__PURE__ */ B(ha, {
			$variant: "primary",
			onClick: T,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ B(ha, {
			$variant: "secondary",
			onClick: E,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ V(_a, { children: [/* @__PURE__ */ V(va, { children: ["Unrealized PnL ", /* @__PURE__ */ B(c, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ B(ya, { children: D })] })] })]
	});
}, xa = L.div`
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
`, Sa = L.button`
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
`, Ca = L.span`
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
`, wa = L.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Ta = L.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, Ea = L.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Da = L.span`
  display: inline-flex;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.textSubtle};
  color: ${({ theme: e }) => e.colors.invertedContrast};
  font-size: 12px;
  letter-spacing: 0.12px;
`, Oa = L.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, ka = L.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, Aa = L.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
  border-radius: 999px;
  background: ${({ theme: e, $positive: t }) => t ? `color-mix(in srgb, ${e.colors.success} 18%, transparent)` : `color-mix(in srgb, ${e.colors.failure} 18%, transparent)`};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, ja = L(D)`
  align-items: center;
  gap: 24px;
  height: 56px;
`, Ma = L.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`, Na = L.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Pa = L.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, Fa = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M6 2l5 8H1z" })
}), Ia = () => /* @__PURE__ */ B("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ B("path", { d: "M6 10L1 2h10z" })
}), La = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c }) => {
	let l = r >= 0;
	return /* @__PURE__ */ V(xa, { children: [/* @__PURE__ */ V(Sa, {
		type: "button",
		onClick: c,
		disabled: !c,
		"aria-label": `Change market · ${t}`,
		children: [/* @__PURE__ */ B(Ca, { children: e }), /* @__PURE__ */ V(wa, { children: [/* @__PURE__ */ V(Ta, { children: [/* @__PURE__ */ B(Ea, { children: t }), /* @__PURE__ */ B(Da, { children: "Perp" })] }), /* @__PURE__ */ V(Oa, { children: [/* @__PURE__ */ B(ka, { children: n }), /* @__PURE__ */ V(Aa, {
			$positive: l,
			children: [
				B(l ? Fa : Ia, {}),
				r.toFixed(2),
				"%"
			]
		})] })] })]
	}), /* @__PURE__ */ V(ja, { children: [
		/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B(Na, { children: "24h Volume" }), /* @__PURE__ */ B(Pa, { children: i })] }),
		/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B(Na, { children: "Open Interest" }), /* @__PURE__ */ B(Pa, { children: a })] }),
		/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B(Na, { children: "Funding Rate" }), /* @__PURE__ */ B(Pa, { children: o })] }),
		/* @__PURE__ */ V(Ma, { children: [/* @__PURE__ */ B(Na, { children: "Next Funding" }), /* @__PURE__ */ B(Pa, { children: s })] })
	] })] });
}, Ra = L(H)`
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
`, za = L.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Ba = L.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Va = L.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Ha = L.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, Ua = L.div`
  position: relative;
  overflow: visible;
`, Wa = L.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, Ga = L.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, Ka = L.span`
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
	let s = R(), c = `simple-chart-fill-${P().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = F(() => Za(r), [r]), d = u?.line ?? Qa, f = u?.area ?? $a, p = u?.endY ?? eo;
	return /* @__PURE__ */ V(Ra, { children: [/* @__PURE__ */ B(za, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ B(Ba, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ V(Va, { children: [/* @__PURE__ */ V(Ha, { children: [/* @__PURE__ */ V(Ua, { children: [/* @__PURE__ */ V("svg", {
		viewBox: `0 0 ${qa} ${Ja}`,
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
				x2: qa - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ B(Ka, {
		style: {
			right: -8,
			top: `calc(${p}/${Ja} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ B(Wa, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ B(Ga, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ B("span", { children: e }, `${e}-${t}`))
	})] })] });
}, no = L(H)`
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
`, ro = L.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, io = L.button`
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
`, ao = L.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`, oo = L.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, X = L.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Z = L.div`
  padding: 16px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, so = L(Z)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, co = L.span`
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
`, lo = L.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`, uo = L.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, fo = L.span`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, po = L(Z)`
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
`, mo = L(Z)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
  font-weight: 600;
  font-size: 16px;
`, ho = L(Z)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, go = L.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, _o = L.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, vo = L.button`
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
`, yo = L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, bo = L.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, xo = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, So = (e) => xo[e.toUpperCase()] ?? "#7A6EAA", Co = (e) => e === "up" ? "↑" : "↓", wo = (e) => e === "up" ? "Up/Long" : "Down/Short", To = () => /* @__PURE__ */ B("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ B("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), Eo = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ V(no, { children: [
	/* @__PURE__ */ V(ro, {
		role: "tablist",
		children: [
			/* @__PURE__ */ B(io, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ B(io, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ B(io, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ B(yo, { children: "No open positions" }) : /* @__PURE__ */ V(ao, {
		role: "table",
		children: [
			/* @__PURE__ */ B(X, { children: "Token" }),
			/* @__PURE__ */ B(X, { children: "Direction" }),
			/* @__PURE__ */ B(X, { children: "Unrealized PnL" }),
			/* @__PURE__ */ B(X, { children: "Entry Price" }),
			/* @__PURE__ */ B(X, { children: "Liq. Price" }),
			/* @__PURE__ */ B(X, { children: "Distance to Liq" }),
			/* @__PURE__ */ B(X, {}),
			n.map((e) => /* @__PURE__ */ V(A.Fragment, { children: [
				/* @__PURE__ */ V(so, { children: [o ? o(e) : /* @__PURE__ */ B(co, {
					$color: e.iconColor ?? So(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ V(lo, { children: [/* @__PURE__ */ B(uo, { children: e.symbol }), /* @__PURE__ */ B(fo, { children: e.chainLabel })] })] }),
				/* @__PURE__ */ V(po, {
					$direction: e.direction,
					children: [
						Co(e.direction),
						" ",
						wo(e.direction)
					]
				}),
				/* @__PURE__ */ B(mo, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ B(Z, { children: e.entryPrice }),
				/* @__PURE__ */ B(Z, { children: e.liqPrice }),
				/* @__PURE__ */ V(ho, { children: [/* @__PURE__ */ B(go, { children: /* @__PURE__ */ B(_o, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ B("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ B(vo, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ B(To, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ B(yo, { children: "No open orders" }) : /* @__PURE__ */ V(oo, {
		role: "table",
		children: [
			/* @__PURE__ */ B(X, { children: "Symbol" }),
			/* @__PURE__ */ B(X, { children: "Side" }),
			/* @__PURE__ */ B(X, { children: "Type" }),
			/* @__PURE__ */ B(X, { children: "Price" }),
			/* @__PURE__ */ B(X, { children: "Size" }),
			/* @__PURE__ */ B(X, { children: "Filled" }),
			/* @__PURE__ */ B(X, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ V(A.Fragment, { children: [
				/* @__PURE__ */ B(Z, { children: e.symbol }),
				/* @__PURE__ */ B(Z, { children: /* @__PURE__ */ B(bo, {
					$side: e.side,
					children: e.side
				}) }),
				/* @__PURE__ */ B(Z, { children: e.type }),
				/* @__PURE__ */ B(Z, { children: e.price }),
				/* @__PURE__ */ B(Z, { children: e.origQty }),
				/* @__PURE__ */ B(Z, { children: e.executedQty }),
				/* @__PURE__ */ B(Z, { children: e.status })
			] }, e.id))
		]
	})),
	e === "history" && /* @__PURE__ */ B(yo, { children: "No transaction history" })
] }), Do = L(f)`
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
`, Oo = L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 8px;
`, ko = L.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`, Ao = L.button`
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
`, jo = L.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  scrollbar-width: thin;
`, Mo = L.div`
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
`, No = L.button`
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
`, Po = L.button`
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
`, Fo = L.div`
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
`, Io = L.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Lo = L.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, Ro = L.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme: e }) => e.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`, zo = L.div`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  overflow: hidden;
`, Bo = L.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  min-width: 0;
`, Vo = L.div`
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
`, Ho = L.span`
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
function Uo(e) {
	let t = (e ?? "").toLowerCase();
	return t.includes("ondo") ? "ondo" : t.includes("xstock") ? "xstocks" : "default";
}
var Wo = L.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`, Go = L.div`
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
function Ko(e) {
	return e > 0 ? "success" : e < 0 ? "failure" : "textSubtle";
}
function qo(e) {
	return `${e > 0 ? "+" : ""}${e.toFixed(2)}%`;
}
var Jo = ({ searchQuery: e, onSearchChange: t, searchPlaceholder: n = "Search Tokens / Pools", filters: r, filterCounts: i, activeFilter: a, onFilterChange: o, assets: c, selectedAssetId: l, onAssetClick: u, onFavoriteToggle: f }) => /* @__PURE__ */ V(Do, { children: [
	/* @__PURE__ */ V(Oo, { children: [/* @__PURE__ */ V(Go, { children: [/* @__PURE__ */ B(m, {
		width: "24px",
		height: "24px"
	}), /* @__PURE__ */ B(x, {
		value: e,
		placeholder: n,
		onChange: (e) => t(e.target.value),
		"aria-label": "Search tokenized assets"
	})] }), /* @__PURE__ */ B(ko, {
		role: "tablist",
		"aria-label": "Asset categories",
		children: r.map((e) => {
			let t = e === a, n = i?.[e];
			return /* @__PURE__ */ V(Ao, {
				$active: t,
				type: "button",
				role: "tab",
				"aria-selected": t,
				onClick: () => o(e),
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
	/* @__PURE__ */ B(jo, { children: c.map((e) => {
		let t = e.id === l, n = e.symbol.slice(0, 2).toUpperCase(), r = e.logoUrls?.find(Boolean);
		return /* @__PURE__ */ V(No, {
			type: "button",
			$selected: t,
			onClick: () => u?.(e.id),
			"aria-label": `${e.name} ${e.symbol}, ${e.price}, ${qo(e.changePct)}`,
			children: [
				/* @__PURE__ */ B(Po, {
					$on: !!e.favorite,
					type: "button",
					"aria-label": e.favorite ? `Unfavorite ${e.symbol}` : `Favorite ${e.symbol}`,
					onClick: (t) => {
						t.stopPropagation(), f?.(e.id);
					},
					children: e.favorite ? /* @__PURE__ */ B(g, {
						width: "16px",
						height: "16px"
					}) : /* @__PURE__ */ B(s, {
						width: "16px",
						height: "16px"
					})
				}),
				/* @__PURE__ */ V(Fo, { children: [r ? /* @__PURE__ */ B(Io, {
					src: r,
					alt: ""
				}) : /* @__PURE__ */ B(Lo, { children: n }), /* @__PURE__ */ B(Ro, {})] }),
				/* @__PURE__ */ V(zo, { children: [/* @__PURE__ */ B(Bo, { children: /* @__PURE__ */ B(h, {
					as: "h4",
					scale: "md",
					ellipsis: !0,
					children: e.name
				}) }), /* @__PURE__ */ V(Vo, { children: [/* @__PURE__ */ B(d, {
					bold: !0,
					fontSize: "12px",
					color: "textSubtle",
					textTransform: "uppercase",
					style: { letterSpacing: "0.24px" },
					ellipsis: !0,
					children: e.symbol
				}), e.source && /* @__PURE__ */ B(Ho, {
					$tone: Uo(e.source),
					children: e.source
				})] })] }),
				/* @__PURE__ */ V(Wo, { children: [/* @__PURE__ */ B(d, {
					bold: !0,
					fontSize: "20px",
					children: e.price
				}), /* @__PURE__ */ B(d, {
					fontSize: "14px",
					color: Ko(e.changePct),
					children: qo(e.changePct)
				})] })
			]
		}, e.id);
	}) }),
	/* @__PURE__ */ B(Mo, { "aria-hidden": !0 })
] }), Yo = L(f)`
  & > div {
    padding: 0;
    overflow: hidden;
  }
`, Xo = L.div`
  position: relative;
  display: flex;
  flex-direction: column;
`, Zo = L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  ${({ $bordered: e, theme: t }) => e && re`
      border-bottom: 1px solid ${t.colors.cardBorder};
    `}
`, Qo = L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, $o = L.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Kanit', sans-serif;
`, es = L.div`
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
`, ts = L.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
`, ns = L.div`
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
`, rs = L.button`
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
`, is = L.div`
  position: relative;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`, as = L.div`
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
`, os = L.div`
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 0.6px solid ${({ theme: e }) => e.colors.contrast};
  opacity: 0.1;
  pointer-events: none;
`, ss = L.div`
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
`, cs = L.img`
  width: 100%;
  height: 100%;
  border-radius: 35%;
`, ls = L.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, us = L.input`
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
`, ds = L.div`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: right;
  font-variant-numeric: tabular-nums;
`, fs = L.button`
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
`, ps = L.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`, ms = L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
`, hs = L.span`
  display: inline-flex;
  flex-direction: column;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme: e }) => e.colors.textSubtle};
  cursor: help;
`, gs = L.button`
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
`, _s = L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  font-family: 'Kanit', sans-serif;
`, vs = L.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
`, ys = L.button`
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
`, bs = ({ side: e }) => {
	let t = e.logoUrls?.find(Boolean);
	return /* @__PURE__ */ V(is, { children: [
		t ? /* @__PURE__ */ B(as, { style: { backgroundImage: `url(${t})` } }) : /* @__PURE__ */ B(as, { children: e.symbol.slice(0, 2).toUpperCase() }),
		/* @__PURE__ */ B(os, {}),
		e.chainLogoUrl && /* @__PURE__ */ B(ss, { children: /* @__PURE__ */ B(cs, {
			src: e.chainLogoUrl,
			alt: ""
		}) })
	] });
}, xs = ({ labelPrefix: e, side: n, onAmountChange: r, onTokenSelect: i, amountId: a }) => {
	let o = !n.symbol;
	return /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ V(Qo, { children: [/* @__PURE__ */ V($o, { children: [/* @__PURE__ */ B(d, {
		bold: !0,
		fontSize: "12px",
		color: "textSubtle",
		style: { letterSpacing: "0.12px" },
		children: e
	}), !o && n.address && /* @__PURE__ */ V(z, { children: [/* @__PURE__ */ B(es, {
		"aria-hidden": !0,
		children: n.symbol.slice(0, 1)
	}), /* @__PURE__ */ B(d, {
		bold: !0,
		fontSize: "12px",
		color: "textSubtle",
		style: { letterSpacing: "0.12px" },
		children: n.address
	})] })] }), !o && n.balance && /* @__PURE__ */ V(ts, { children: [/* @__PURE__ */ B(t, {
		width: "18px",
		height: "18px"
	}), n.balance] })] }), /* @__PURE__ */ V(ns, { children: [/* @__PURE__ */ V(rs, {
		type: "button",
		onClick: i,
		"aria-label": o ? "Select token" : `Choose token (${n.symbol})`,
		children: [
			!o && /* @__PURE__ */ B(bs, { side: n }),
			/* @__PURE__ */ B(d, {
				bold: !0,
				fontSize: "20px",
				color: o ? "textSubtle" : "text",
				style: { letterSpacing: "-0.2px" },
				children: o ? "Select token" : n.symbol
			}),
			/* @__PURE__ */ B(u, {
				width: "24px",
				height: "24px"
			})
		]
	}), /* @__PURE__ */ V(ls, { children: [/* @__PURE__ */ B(us, {
		id: a,
		inputMode: "decimal",
		autoComplete: "off",
		spellCheck: !1,
		value: n.amount,
		placeholder: "0.0",
		disabled: o,
		onChange: (e) => r?.(e.target.value),
		"aria-label": `${e} ${n.symbol || "unselected"} amount`
	}), n.amountUsd && /* @__PURE__ */ B(ds, { children: n.amountUsd })] })] })] });
}, Ss = ({ toSide: e, fromSide: t, onToAmountChange: r, onFromAmountChange: a, onToTokenSelect: o, onFromTokenSelect: s, onSwapDirection: c, slippage: l, onSlippageEdit: d, rateFromLabel: f, rateToLabel: p, expanded: m = !0, onToggleExpanded: h, onRefreshRate: g, canSubmit: _, submitLabel: x = "Swap", onSubmit: S }) => /* @__PURE__ */ V("div", {
	style: {
		display: "flex",
		flexDirection: "column",
		gap: 16
	},
	children: [/* @__PURE__ */ B(Yo, { children: /* @__PURE__ */ V(Xo, { children: [
		/* @__PURE__ */ B(Zo, {
			$bordered: !0,
			children: /* @__PURE__ */ B(xs, {
				labelPrefix: "From:",
				side: t,
				onAmountChange: a,
				onTokenSelect: s,
				amountId: "tokenized-swap-from"
			})
		}),
		/* @__PURE__ */ B(Zo, { children: /* @__PURE__ */ B(xs, {
			labelPrefix: "To:",
			side: e,
			onAmountChange: r,
			onTokenSelect: o,
			amountId: "tokenized-swap-to"
		}) }),
		/* @__PURE__ */ B(fs, {
			type: "button",
			onClick: c,
			"aria-label": "Swap direction",
			children: /* @__PURE__ */ B(y, {
				width: "24px",
				height: "24px"
			})
		})
	] }) }), /* @__PURE__ */ B(Yo, { children: /* @__PURE__ */ V(ps, { children: [
		/* @__PURE__ */ V(ms, { children: [/* @__PURE__ */ B(hs, { children: "Slippage Tolerance" }), /* @__PURE__ */ V(gs, {
			type: "button",
			onClick: d,
			"aria-label": `Slippage tolerance ${l}, edit`,
			children: [l, /* @__PURE__ */ B(i, {
				width: "20px",
				height: "20px"
			})]
		})] }),
		/* @__PURE__ */ B(n, {
			variant: "primary",
			disabled: !_,
			onClick: S,
			width: "100%",
			style: { height: 48 },
			children: x
		}),
		/* @__PURE__ */ V(_s, { children: [/* @__PURE__ */ V(vs, { children: [
			/* @__PURE__ */ B(ys, {
				type: "button",
				onClick: g,
				"aria-label": "Refresh rate",
				children: /* @__PURE__ */ B(b, {
					width: "18px",
					height: "18px"
				})
			}),
			/* @__PURE__ */ B("span", { children: f }),
			/* @__PURE__ */ B(y, {
				width: "18px",
				height: "18px",
				style: { transform: "rotate(90deg)" },
				"aria-hidden": !0
			}),
			/* @__PURE__ */ B("span", { children: p })
		] }), /* @__PURE__ */ B(ys, {
			type: "button",
			onClick: h,
			"aria-label": m ? "Collapse details" : "Expand details",
			children: B(m ? v : u, {
				width: "24px",
				height: "24px"
			})
		})] })
	] }) })]
}), Cs = [
	"1d",
	"1w",
	"1m",
	"3m",
	"6m",
	"1y"
], ws = L(f)`
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
`, Ts = L.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 16px;
`, Es = L.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`, Ds = L.div`
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
`, Os = L.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, ks = L.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, As = L.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, js = L.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`, Ms = L.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-variant-numeric: tabular-nums;
`, Ns = L.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`, Ps = L.div`
  position: relative;
  flex: 1;
  min-height: 0;
  margin: 0 16px;
  padding: 8px 0;
`, Fs = L.svg`
  display: block;
  width: 100%;
  height: 100%;
`, Is = L.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12px;
`, Ls = L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 24px 16px;
  position: relative;
`, Rs = L.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  min-width: 36px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: ${({ $active: e, theme: t }) => e ? t.colors.tertiary : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary60 ?? t.colors.primary : t.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.12s, color 0.12s;
  &:hover:not(:disabled) {
    color: ${({ theme: e }) => e.colors.text};
  }
`, zs = L.button`
  position: absolute;
  right: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: ${({ theme: e }) => e.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`;
function Bs(e) {
	return e > 0 ? "success" : e < 0 ? "failure" : "textSubtle";
}
function Vs(e) {
	return `${e > 0 ? "+" : ""}${e.toFixed(2)}%`;
}
function Hs({ candles: e, color: t }) {
	let n = F(() => {
		if (e.length === 0) return [];
		let n = 984 / e.length, r = Math.max(2, n * .55), i = Infinity, a = -Infinity;
		for (let t of e) t.low < i && (i = t.low), t.high > a && (a = t.high);
		(!isFinite(i) || !isFinite(a) || a === i) && (i = 0, a = 1);
		let o = (e) => 16 + (a - e) / (a - i) * 368;
		return e.map((e, i) => {
			let a = 8 + n * i + n / 2, s = e.close >= e.open, c = o(e.open), l = o(e.close), u = o(e.high), d = o(e.low), f = Math.min(c, l), p = Math.max(2, Math.abs(c - l)), m = s ? t : "var(--pcs-colors-failure, #ED4B9E)";
			return /* @__PURE__ */ V("g", { children: [/* @__PURE__ */ B("line", {
				x1: a,
				x2: a,
				y1: u,
				y2: d,
				stroke: m,
				strokeWidth: 1
			}), /* @__PURE__ */ B("rect", {
				x: a - r / 2,
				y: f,
				width: r,
				height: p,
				fill: m,
				rx: 1
			})] }, i);
		});
	}, [e, t]);
	return /* @__PURE__ */ V(Fs, {
		viewBox: "0 0 1000 400",
		preserveAspectRatio: "none",
		"aria-hidden": !0,
		children: [[
			.25,
			.5,
			.75
		].map((e) => /* @__PURE__ */ B("line", {
			x1: 0,
			x2: 1e3,
			y1: e * 400,
			y2: e * 400,
			stroke: "currentColor",
			strokeOpacity: .08,
			strokeWidth: 1
		}, e)), n]
	});
}
var Us = ({ name: e, symbol: t, categoryTag: n, logoUrls: r, marketCapLabel: i = "Market Cap", marketCapValue: s, price: c, changeAbs: l, changePct: u, candles: f, tradesLabel: p, timeRange: m, onTimeRangeChange: g, chartType: _ = "candle", onChartTypeChange: v }) => {
	let y = r?.find(Boolean), b = t.slice(0, 2).toUpperCase();
	return /* @__PURE__ */ V(ws, { children: [
		/* @__PURE__ */ V(Ts, { children: [/* @__PURE__ */ V(Es, { children: [/* @__PURE__ */ B(Ds, { children: y ? /* @__PURE__ */ B(Os, {
			src: y,
			alt: ""
		}) : /* @__PURE__ */ B(ks, { children: b }) }), /* @__PURE__ */ V(As, { children: [/* @__PURE__ */ V(js, { children: [/* @__PURE__ */ B(h, {
			as: "h2",
			scale: "lg",
			ellipsis: !0,
			children: e
		}), n && /* @__PURE__ */ B(a, {
			variant: "textSubtle",
			scale: "sm",
			outline: !0,
			children: n
		})] }), /* @__PURE__ */ V(Ms, { children: [
			/* @__PURE__ */ B(d, {
				bold: !0,
				fontSize: "14px",
				color: "textSubtle",
				textTransform: "uppercase",
				children: t
			}),
			/* @__PURE__ */ B(d, {
				fontSize: "14px",
				color: "textSubtle",
				children: i
			}),
			/* @__PURE__ */ B(d, {
				bold: !0,
				fontSize: "14px",
				children: s
			})
		] })] })] }), /* @__PURE__ */ V(Ns, { children: [/* @__PURE__ */ B(h, {
			scale: "xl",
			children: c
		}), /* @__PURE__ */ V(d, {
			bold: !0,
			fontSize: "16px",
			color: Bs(u),
			children: [
				u >= 0 ? "+" : "-",
				l.replace("-", ""),
				" (",
				Vs(u),
				")"
			]
		})] })] }),
		/* @__PURE__ */ V(Ps, { children: [p && /* @__PURE__ */ B(Is, { children: p }), /* @__PURE__ */ B(Hs, {
			candles: f,
			color: "var(--pcs-colors-success, #31D0AA)"
		})] }),
		/* @__PURE__ */ V(Ls, { children: [Cs.map((e) => /* @__PURE__ */ B(Rs, {
			type: "button",
			$active: e === m,
			"aria-pressed": e === m,
			onClick: () => g?.(e),
			children: e
		}, e)), /* @__PURE__ */ B(zs, {
			type: "button",
			"aria-label": _ === "candle" ? "Switch to line chart" : "Switch to candle chart",
			onClick: () => v?.(_ === "candle" ? "line" : "candle"),
			children: B(_ === "candle" ? T : o, {
				width: "24px",
				height: "24px"
			})
		})] })
	] });
}, Ws = L(f)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 0;
  }
`, Gs = L.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding: 0 8px;
`, Ks = L.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  padding: 0 16px;
  border: 0;
  background: transparent;
  font-family: 'Kanit', sans-serif;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  font-size: 14px;
  letter-spacing: 0.12px;
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  cursor: pointer;
  &:hover:not(:disabled) { color: ${({ theme: e }) => e.colors.text}; }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 16px;
    right: 16px;
    height: 2px;
    background: ${({ $active: e, theme: t }) => e ? t.colors.primary60 ?? t.colors.primary : "transparent"};
    border-radius: 2px;
  }
`, qs = L.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
`, Js = L.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: 'Kanit', sans-serif;
`, Q = L.th`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: ${({ $align: e }) => e ?? "left"};
  padding: 12px 16px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  white-space: nowrap;
`, $ = L.td`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  text-align: ${({ $align: e }) => e ?? "left"};
  padding: 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  font-variant-numeric: tabular-nums;
  vertical-align: middle;
`, Ys = L($)`
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 12px;
  line-height: 1.45;
  white-space: pre-line;
`, Xs = L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 40px 24px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-family: 'Kanit', sans-serif;
`;
function Zs(e) {
	return e > 0 ? "success" : e < 0 ? "failure" : "textSubtle";
}
var Qs = ({ activeTab: e, onTabChange: t, positions: n, transactions: r }) => {
	let i = e === "positions" ? n : r ?? [], a = e === "positions";
	return /* @__PURE__ */ V(Ws, { children: [/* @__PURE__ */ V(Gs, {
		role: "tablist",
		"aria-label": "Account view",
		children: [/* @__PURE__ */ V(Ks, {
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
		}), /* @__PURE__ */ B(Ks, {
			$active: e === "transactions",
			role: "tab",
			"aria-selected": e === "transactions",
			type: "button",
			onClick: () => t?.("transactions"),
			children: "Transactions"
		})]
	}), /* @__PURE__ */ B(qs, { children: i.length === 0 ? /* @__PURE__ */ B(Xs, { children: a ? "No open positions" : "No transactions yet" }) : /* @__PURE__ */ V(Js, { children: [/* @__PURE__ */ B("thead", { children: /* @__PURE__ */ B("tr", { children: a ? /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ B(Q, { children: "Date" }),
		/* @__PURE__ */ B(Q, { children: "Assets" }),
		/* @__PURE__ */ B(Q, { children: "Qty" }),
		/* @__PURE__ */ B(Q, {
			$align: "right",
			children: "Index Price"
		}),
		/* @__PURE__ */ B(Q, {
			$align: "right",
			children: "Entry Price"
		}),
		/* @__PURE__ */ B(Q, {
			$align: "right",
			children: "Amount"
		}),
		/* @__PURE__ */ B(Q, {
			$align: "right",
			children: "Pnl (ROI%)"
		})
	] }) : /* @__PURE__ */ V(z, { children: [
		/* @__PURE__ */ B(Q, { children: "Date" }),
		/* @__PURE__ */ B(Q, { children: "Type" }),
		/* @__PURE__ */ B(Q, { children: "Assets" }),
		/* @__PURE__ */ B(Q, { children: "Qty" }),
		/* @__PURE__ */ B(Q, {
			$align: "right",
			children: "Price"
		}),
		/* @__PURE__ */ B(Q, {
			$align: "right",
			children: "Amount"
		}),
		/* @__PURE__ */ B(Q, {
			$align: "right",
			children: "Status"
		})
	] }) }) }), /* @__PURE__ */ B("tbody", { children: a ? i.map((e) => /* @__PURE__ */ V("tr", { children: [
		/* @__PURE__ */ B(Ys, { children: e.date }),
		/* @__PURE__ */ B($, { children: e.asset }),
		/* @__PURE__ */ B($, { children: e.qty }),
		/* @__PURE__ */ B($, {
			$align: "right",
			children: e.indexPrice
		}),
		/* @__PURE__ */ B($, {
			$align: "right",
			children: e.entryPrice
		}),
		/* @__PURE__ */ B($, {
			$align: "right",
			children: e.amount
		}),
		/* @__PURE__ */ B($, {
			$align: "right",
			children: /* @__PURE__ */ B(d, {
				bold: !0,
				fontSize: "14px",
				color: Zs(e.pnlSign),
				children: e.pnlLabel
			})
		})
	] }, e.id)) : i.map((e) => /* @__PURE__ */ V("tr", { children: [
		/* @__PURE__ */ B(Ys, { children: e.date }),
		/* @__PURE__ */ B($, { children: e.type }),
		/* @__PURE__ */ B($, { children: e.asset }),
		/* @__PURE__ */ B($, { children: e.qty }),
		/* @__PURE__ */ B($, {
			$align: "right",
			children: e.price
		}),
		/* @__PURE__ */ B($, {
			$align: "right",
			children: e.amount
		}),
		/* @__PURE__ */ B($, {
			$align: "right",
			children: e.status
		})
	] }, e.id)) })] }) })] });
}, $s = L(f)`
  & > div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`, ec = L.div`
  display: flex;
  align-items: center;
  gap: 12px;
`, tc = L.div`
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
`, nc = L.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, rc = L.div`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ic = L.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`, ac = L.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`, oc = L.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-variant-numeric: tabular-nums;
`, sc = L.button`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 8px 0 12px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${({ theme: e }) => e.colors.primary60 ?? e.colors.primary};
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  &:hover { opacity: 0.65; }
`, cc = L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 24px;
  font-variant-numeric: tabular-nums;
`, lc = L.span`
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px dashed ${({ theme: e }) => e.colors.textSubtle};
  cursor: help;
`, uc = L.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;
function dc(e) {
	return e === void 0 ? "textSubtle" : e > 0 ? "successLowContrast" : e < 0 ? "failureLowContrast" : "textSubtle";
}
var fc = ({ symbol: e, categoryTag: t, logoUrls: n, tvlLabel: r = "TVL", tvlValue: i, marketPrice: o, marketPriceChangeLabel: s, marketPriceChangePct: c, floorPriceLabel: u = "Floor Price", floorPrice: f, holdersLabel: p = "Holders", holdersCount: m, holdersTagLabel: g = "Address", onDetails: _ }) => {
	let v = n?.find(Boolean), y = e.slice(0, 2).toUpperCase();
	return /* @__PURE__ */ V($s, { children: [
		/* @__PURE__ */ V(ec, { children: [
			/* @__PURE__ */ B(tc, { children: v ? /* @__PURE__ */ B(nc, {
				src: v,
				alt: ""
			}) : /* @__PURE__ */ B(rc, { children: y }) }),
			/* @__PURE__ */ V(ic, { children: [/* @__PURE__ */ V(ac, { children: [/* @__PURE__ */ B(h, {
				scale: "lg",
				children: e
			}), t && /* @__PURE__ */ B(a, {
				variant: "textSubtle",
				scale: "sm",
				outline: !0,
				children: t
			})] }), /* @__PURE__ */ V(oc, { children: [/* @__PURE__ */ B(d, {
				fontSize: "14px",
				color: "textSubtle",
				children: r
			}), /* @__PURE__ */ B(d, {
				bold: !0,
				fontSize: "14px",
				children: i
			})] })] }),
			/* @__PURE__ */ V(sc, {
				type: "button",
				onClick: _,
				children: ["Details", /* @__PURE__ */ B(l, {
					width: "20px",
					height: "20px"
				})]
			})
		] }),
		/* @__PURE__ */ V(cc, { children: [/* @__PURE__ */ B(lc, { children: "Market Price" }), /* @__PURE__ */ V(uc, { children: [/* @__PURE__ */ B(d, {
			bold: !0,
			fontSize: "14px",
			children: o
		}), s && /* @__PURE__ */ B(a, {
			variant: dc(c),
			scale: "sm",
			children: s
		})] })] }),
		/* @__PURE__ */ V(cc, { children: [/* @__PURE__ */ B(lc, { children: u }), /* @__PURE__ */ B(d, {
			bold: !0,
			fontSize: "14px",
			children: f
		})] }),
		/* @__PURE__ */ V(cc, { children: [/* @__PURE__ */ B(lc, { children: p }), /* @__PURE__ */ V(uc, { children: [/* @__PURE__ */ B(d, {
			bold: !0,
			fontSize: "14px",
			children: m
		}), /* @__PURE__ */ B(d, {
			fontSize: "14px",
			color: "textSubtle",
			children: g
		})] })] })
	] });
};
//#endregion
export { _e as AccountPanel, dr as BookTradesPanel, or as ChartPanel, ui as DepositModal, fi as EnableTradingModal, Ce as LeverageModal, kt as MarketsDropdown, Mn as OrderBook, ot as OrderConfirmModal, Hr as OrderForm, Ie as PerpsErrorMessage, H as PerpsPanel, Yn as PositionsPanel, Me as RecentTrades, ba as SimpleBetPanel, to as SimpleChartCard, Eo as SimplePositionsCard, La as SimpleTickerCard, Us as StockChartCard, fc as StockInfoCard, Qs as StockPositionsCard, $t as SymbolHeader, Jo as TokenizedAssetsList, Ss as TokenizedSwapForm, rr as TpSlModal, U as UnderlineTab, se as UnderlineTabs, Qe as WithdrawModal };

//# sourceMappingURL=widgets.js.map