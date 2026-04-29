import { B as e, D as t, E as n, F as r, H as i, Jt as a, M as o, Q as s, S as c, T as l, V as u, b as d, i as f, it as p, j as m, nr as h, o as g, qn as _, t as v, w as y, wi as b } from "./chunks/useTooltip-BHDD4AgF.js";
import x, { Children as S, cloneElement as C, useCallback as w, useEffect as T, useId as E, useLayoutEffect as D, useMemo as O, useRef as k, useState as A } from "react";
import j, { css as M, useTheme as N } from "styled-components";
import { Fragment as P, jsx as F, jsxs as I } from "react/jsx-runtime";
import { createPortal as ee } from "react-dom";
//#region src/widgets/primitives.tsx
var L = j(e)`
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
`, R = j.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, z = j.button`
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
`, B = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ F(z, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), te = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ F(R, {
	$fullWidth: r,
	children: S.map(n, (n, i) => !n || typeof n != "object" ? n : C(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), V = j(L)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, ne = j(r).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, H = j(y)`
  justify-content: space-between;
  align-items: center;
`, U = j(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, W = j(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, re = j.button`
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
`, G = j(y)`
  flex-direction: column;
  gap: 8px;
`, ie = j(W)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, ae = (e) => e, oe = ({ walletDisplay: e, state: a, canDeposit: o = !0, canWithdraw: s = !0, onDeposit: c, onWithdraw: l, onEnableTrading: u, t: d = ae }) => /* @__PURE__ */ I(V, { children: [
	/* @__PURE__ */ I(y, {
		style: { gap: 8 },
		children: [/* @__PURE__ */ F(re, {
			$variant: "primary",
			onClick: c,
			disabled: !o,
			children: d("Deposit")
		}), /* @__PURE__ */ F(re, {
			$variant: "secondary",
			onClick: l,
			disabled: !s,
			children: d("Withdraw")
		})]
	}),
	a.kind === "needs-deposit" && /* @__PURE__ */ F(n, {
		variant: "warning",
		children: /* @__PURE__ */ I(y, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ F(r, {
				fontSize: "14px",
				bold: !0,
				children: d("Deposit to get started")
			}), /* @__PURE__ */ F(t, {
				fontSize: "12px",
				children: d("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
			})]
		})
	}),
	a.kind === "needs-trading" && /* @__PURE__ */ I(P, { children: [/* @__PURE__ */ F(n, {
		variant: "warning",
		children: /* @__PURE__ */ I(y, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ F(r, {
				fontSize: "14px",
				bold: !0,
				children: d("Enable Trading to view your Aster balance")
			}), /* @__PURE__ */ F(t, {
				fontSize: "12px",
				children: d("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
			})]
		})
	}), /* @__PURE__ */ F(i, {
		onClick: u,
		scale: "sm",
		variant: "primary",
		children: d("Enable Trading")
	})] }),
	a.kind === "ready" && /* @__PURE__ */ I(G, { children: [
		/* @__PURE__ */ F(ne, { children: d("Account Equity") }),
		/* @__PURE__ */ I(H, { children: [/* @__PURE__ */ F(U, { children: d("Wallet") }), /* @__PURE__ */ F(W, { children: e ?? "—" })] }),
		/* @__PURE__ */ I(H, { children: [/* @__PURE__ */ F(U, { children: d("Equity") }), /* @__PURE__ */ F(W, { children: a.equity || "—" })] }),
		/* @__PURE__ */ I(H, { children: [/* @__PURE__ */ F(U, { children: d("Available") }), /* @__PURE__ */ F(W, { children: a.available || "—" })] }),
		/* @__PURE__ */ I(H, { children: [/* @__PURE__ */ F(U, { children: d("Unrealized PnL") }), /* @__PURE__ */ F(ie, {
			$sign: a.pnlSign,
			children: a.unrealizedPnl || "—"
		})] }),
		/* @__PURE__ */ I(H, { children: [/* @__PURE__ */ F(U, { children: d("Margin mode") }), /* @__PURE__ */ F(W, { children: a.marginMode ?? d("Cross") })] })
	] })
] }), se = j(y)`
  gap: 10px;
  align-items: stretch;
`, ce = j(i).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, le = j(y)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, ue = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, de = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: a = 1, maxLeverage: o = 100, availableBalance: s, onConfirm: u, onClose: d, isSubmitting: p = !1, errorSlot: m, t: h = ue }) => {
	let [_, v] = A(n);
	T(() => {
		e && v(n);
	}, [e, n]);
	let b = (e) => Math.max(a, Math.min(o, Math.round(e))), x = s * _;
	return /* @__PURE__ */ F(g, {
		isOpen: e,
		onDismiss: d,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ F(f, {
			title: h("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: d,
			children: /* @__PURE__ */ I(y, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ I(se, { children: [
						/* @__PURE__ */ F(ce, {
							onClick: () => v((e) => b(e - 1)),
							disabled: _ <= a,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ I(le, { children: [_, "X"] }),
						/* @__PURE__ */ F(ce, {
							onClick: () => v((e) => b(e + 1)),
							disabled: _ >= o,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ F(c, {
						variant: "dotted",
						name: "perp-leverage",
						min: 0,
						max: o,
						value: _,
						onValueChanged: (e) => v(b(e)),
						width: "100%"
					}),
					/* @__PURE__ */ I(l, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: h("Maximum position at current leverage:")
					}), /* @__PURE__ */ F(r, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(x) && x > 0 ? `${x.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ F(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: h("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					m,
					/* @__PURE__ */ F(i, {
						scale: "md",
						disabled: p,
						onClick: () => u(_),
						children: h(p ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, fe = j.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, pe = j.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, me = j.div`
  overflow-y: auto;
  min-height: 0;
`, he = j.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, ge = j.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, _e = j.span`
  text-align: right;
`, ve = j(_e)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ye = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, be = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = O(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ I(P, { children: [
		t && /* @__PURE__ */ F(fe, { children: t }),
		/* @__PURE__ */ I(pe, { children: [
			/* @__PURE__ */ F("span", { children: o }),
			/* @__PURE__ */ F("span", {
				style: { textAlign: "right" },
				children: s
			}),
			/* @__PURE__ */ F("span", {
				style: { textAlign: "right" },
				children: c
			})
		] }),
		/* @__PURE__ */ F(me, { children: a.map((e) => /* @__PURE__ */ I(he, { children: [
			/* @__PURE__ */ F(ge, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ F(_e, { children: e.size }),
			/* @__PURE__ */ F(ve, { children: ye(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ F("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ F(L, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, xe = j(l)`
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
`, Se = j(i).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, Ce = (e) => e, we = ({ variant: e, title: i, message: a, details: o, t: s = Ce }) => {
	let [c, l] = A(!1);
	return i ? /* @__PURE__ */ F(n, {
		variant: e,
		children: /* @__PURE__ */ I(y, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ F(t, { children: /* @__PURE__ */ F(r, {
					fontSize: "13px",
					bold: !0,
					children: i
				}) }),
				/* @__PURE__ */ F(t, { children: /* @__PURE__ */ F(r, {
					fontSize: "12px",
					children: a
				}) }),
				o && /* @__PURE__ */ I(P, { children: [/* @__PURE__ */ F(Se, {
					onClick: () => l((e) => !e),
					children: s(c ? "Hide details" : "Show details")
				}), c && /* @__PURE__ */ F(xe, { children: o })] })
			]
		})
	}) : /* @__PURE__ */ F(n, {
		variant: e,
		children: /* @__PURE__ */ F(t, { children: a })
	});
}, Te = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ee = j(y)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, De = j(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Oe = j(y)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, ke = j.button`
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
`, Ae = j(y)`
  flex-direction: column;
`, je = j.div`
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
`, Me = j(y)`
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
`, Ne = j.input`
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
`, Pe = j(y)`
  gap: 6px;
  margin-top: 4px;
`, Fe = j.button`
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
`, Ie = j.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Le = j(y)`
  justify-content: space-between;
  align-items: center;
`, Re = j(y)`
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
], Be = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: a, selectedAssetId: o, onSelectAsset: s, selectedAsset: c, destinationAddress: u, destinationChainName: d = "BSC", feeText: m, amount: h, onAmountChange: _, onPercentClick: v, onBack: b, onWithdraw: x, onClose: S, isSubmitting: C = !1, canSubmit: w = !0, errorSlot: T, t: E = Te, renderTokenIcon: D }) => {
	let O = (e, t = 24) => D ? D(e, t) : /* @__PURE__ */ F(je, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ F(g, {
		isOpen: e,
		onDismiss: S,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ F(f, {
			title: t === "select" ? E("Withdraw from Aster") : E("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: S,
			children: /* @__PURE__ */ I(Ee, { children: [
				t === "amount" && /* @__PURE__ */ F(y, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ F(i, {
						scale: "sm",
						variant: "text",
						onClick: b,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ F(p, { width: "18px" }),
						children: E("Back")
					})
				}),
				t === "select" && /* @__PURE__ */ I(P, { children: [
					/* @__PURE__ */ I(l, { children: [/* @__PURE__ */ F(De, {
						color: "textSubtle",
						children: E("Select asset")
					}), /* @__PURE__ */ F(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: E("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ F(r, {
						fontSize: "12px",
						children: E("Loading assets...")
					}),
					!n && a.length === 0 && /* @__PURE__ */ I(Re, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						bold: !0,
						children: E("Nothing to withdraw yet")
					}), /* @__PURE__ */ F(r, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: E("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					a.length > 0 && /* @__PURE__ */ F(Oe, { children: a.map((e) => /* @__PURE__ */ I(ke, {
						$selected: o === e.id,
						onClick: () => s(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ I(y, {
							alignItems: "center",
							style: { gap: 12 },
							children: [O(e, 32), /* @__PURE__ */ I(Ae, { children: [/* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ F(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: E("Withdrawable")
							})] })]
						}), /* @__PURE__ */ I(y, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ F(r, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && c && /* @__PURE__ */ I(P, { children: [
					/* @__PURE__ */ I(Me, { children: [/* @__PURE__ */ I(y, {
						alignItems: "center",
						style: { gap: 12 },
						children: [O(c, 40), /* @__PURE__ */ I(y, {
							flexDirection: "column",
							children: [/* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								children: c.displayName || c.symbol
							}), /* @__PURE__ */ F(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: E("Withdrawable: %amt% %sym%", {
									amt: c.withdrawableText,
									sym: c.symbol
								})
							})]
						})]
					}), /* @__PURE__ */ I(y, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ F(Ne, {
							value: h,
							onChange: (e) => _(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), v && /* @__PURE__ */ I(Pe, { children: [ze.map((e) => /* @__PURE__ */ I(Fe, {
							onClick: () => v(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ F(Fe, {
							onClick: () => v(100),
							children: E("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ I(Ie, { children: [
						/* @__PURE__ */ I(Le, { children: [/* @__PURE__ */ F(De, {
							color: "textSubtle",
							children: E("Destination")
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: u ?? "—"
						})] }),
						/* @__PURE__ */ I(Le, { children: [/* @__PURE__ */ F(De, {
							color: "textSubtle",
							children: E("Network")
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							children: d
						})] }),
						/* @__PURE__ */ I(Le, { children: [/* @__PURE__ */ F(De, {
							color: "textSubtle",
							children: E("Token")
						}), /* @__PURE__ */ I(y, {
							alignItems: "center",
							style: { gap: 6 },
							children: [O(c, 16), /* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ I(Le, { children: [/* @__PURE__ */ F(De, {
							color: "textSubtle",
							children: E("Fee")
						}), /* @__PURE__ */ I(r, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								m ?? "—",
								" ",
								c.symbol
							]
						})] })
					] }),
					T,
					/* @__PURE__ */ F(i, {
						onClick: x,
						disabled: !w || !h || C,
						isLoading: C,
						scale: "md",
						children: E(C ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ F(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: E("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, K = j(y)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, q = j(r).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, J = j(r).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, Ve = j(y)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, He = j.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, Ue = j(J)`
  color: ${({ theme: e }) => e.colors.failure};
`, We = j(i)`
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
	let [c, u] = A(!1);
	return /* @__PURE__ */ F(g, {
		isOpen: e,
		onDismiss: i,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ F(f, {
			title: s("Confirm Order"),
			onDismiss: i,
			children: /* @__PURE__ */ I(y, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Symbol") }), /* @__PURE__ */ F(J, { children: t.symbol })] }),
					/* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Side / Type") }), /* @__PURE__ */ I(J, { children: [
						/* @__PURE__ */ F(He, {
							$side: t.side,
							children: t.side === "BUY" ? s("Buy / Long") : s("Sell / Short")
						}),
						" · ",
						qe(t.type, s)
					] })] }),
					/* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Size") }), /* @__PURE__ */ I(J, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Price") }), /* @__PURE__ */ I(J, { children: [
						Ke(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Trigger Price") }), /* @__PURE__ */ I(J, { children: [
						Ke(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Leverage") }), /* @__PURE__ */ I(J, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Cost") }), /* @__PURE__ */ F(J, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Est. Liq. Price") }), /* @__PURE__ */ F(Ue, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ I(K, { children: [/* @__PURE__ */ F(q, { children: s("Reduce Only") }), /* @__PURE__ */ F(J, { children: s("Yes") })] }),
					/* @__PURE__ */ I(Ve, { children: [/* @__PURE__ */ F(o, {
						scale: "sm",
						checked: c,
						onChange: (e) => u(e.target.checked)
					}), /* @__PURE__ */ F(r, {
						fontSize: "12px",
						children: s("Don't show this again")
					})] }),
					/* @__PURE__ */ F(l, {
						mt: "8px",
						children: /* @__PURE__ */ F(We, {
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
}, Ye = j.div`
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
`, Xe = j(y)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ze = j.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, Qe = j.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, $e = j.input`
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
`, et = j.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, tt = j.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, nt = j.button`
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
`, rt = j.button`
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
`, it = j(y)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, at = j.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, ot = j.span`
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
`, st = j.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, ct = j(r)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, lt = j(y)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ut = ({ filled: e }) => /* @__PURE__ */ F("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: e ? "currentColor" : "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinejoin: "round",
	strokeLinecap: "round",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), dt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t >= 100 ? t.toLocaleString("en-US", { maximumFractionDigits: 2 }) : t >= 1 ? t.toFixed(3) : t.toPrecision(4) : "—";
}, ft = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `${t >= 0 ? "+" : ""}${t.toFixed(2)}%` : "—";
}, pt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? t.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—";
}, mt = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), ht = (e) => mt(e).slice(0, 1) || e.slice(0, 1), gt = (e) => e, _t = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: i, logoForSymbol: a, isLoading: o = !1, t: s = gt }) => {
	let [c, l] = A("all"), [u, d] = A(""), f = O(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ I(Ye, { children: [
		/* @__PURE__ */ I(Xe, { children: [/* @__PURE__ */ F(Ze, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ F(Ze, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ I(Qe, { children: [/* @__PURE__ */ F(b, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ F($e, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ I(et, { children: [
			/* @__PURE__ */ F("span", {}),
			/* @__PURE__ */ F("span", { children: s("Symbols") }),
			/* @__PURE__ */ F(ct, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ F(ct, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ F(ct, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ F(tt, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ F(lt, { children: /* @__PURE__ */ F(r, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let r = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(mt(e.symbol));
				return /* @__PURE__ */ I(nt, {
					onClick: () => i(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ F(rt, {
							$filled: r,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(r ? "Unfavorite" : "Favorite"),
							"aria-pressed": r,
							children: /* @__PURE__ */ F(ut, { filled: r })
						}),
						/* @__PURE__ */ I(it, { children: [
							/* @__PURE__ */ F(ot, { children: c ? /* @__PURE__ */ F(st, {
								src: c,
								alt: mt(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = ht(e.symbol));
								}
							}) : ht(e.symbol) }),
							/* @__PURE__ */ F("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ I(at, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ F(ct, { children: dt(e.lastPrice) }),
						/* @__PURE__ */ F(ct, {
							$tone: o >= 0 ? "up" : "down",
							children: ft(e.priceChangePercent)
						}),
						/* @__PURE__ */ F(ct, { children: pt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, vt = j(y)`
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
`, yt = j(y)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, bt = j.button`
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
`, xt = j.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, St = j.button`
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
`, Ct = j.span`
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
`, wt = j.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Tt = j(r)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`;
j.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`;
var Et = j.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Dt = j(y)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Ot = j(y)`
  flex-direction: column;
  flex-shrink: 0;
`, kt = j(r)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, At = j(r)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, jt = j(y)`
  align-items: baseline;
  white-space: nowrap;
`, Mt = j.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, Nt = j.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, Pt = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Ft = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, It = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, Lt = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, Rt = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", zt = () => /* @__PURE__ */ F("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Bt = (e) => e, Vt = ({ symbol: e, pairLabel: t, logoUrl: n, leverage: r, lastPrice: i, markPrice: o, indexPrice: s, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, marketsOpen: h, onMarketsOpenChange: g, t: _ = Bt }) => {
	let v = N(), y = h !== void 0, [b, x] = A(!1), S = y ? h : b, C = w((e) => {
		let t = typeof e == "function" ? e(S) : e;
		y || x(t), g?.(t);
	}, [
		y,
		S,
		g
	]), [E, O] = A(null), j = k(null), M = k(null);
	D(() => {
		if (!S || !j.current) return;
		let e = () => {
			let e = j.current.getBoundingClientRect();
			O({
				top: e.bottom + 8,
				left: e.left
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [S]), T(() => {
		if (!S) return;
		let e = (e) => {
			let t = e.target;
			j.current?.contains(t) || M.current?.contains(t) || C(!1);
		}, t = (e) => {
			e.key === "Escape" && C(!1);
		};
		return window.addEventListener("mousedown", e), window.addEventListener("keydown", t), () => {
			window.removeEventListener("mousedown", e), window.removeEventListener("keydown", t);
		};
	}, [S]);
	let P = w(() => C(!1), []), L = Number(c) < 0, R = Number(u) < 0;
	return /* @__PURE__ */ I(vt, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ I(yt, { children: [p && /* @__PURE__ */ F(St, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": _(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ F(zt, {})
			}), /* @__PURE__ */ I(bt, {
				ref: j,
				"aria-haspopup": "listbox",
				"aria-expanded": S,
				disabled: !m,
				onClick: () => m && C((e) => !e),
				children: [
					/* @__PURE__ */ F(Ct, {
						$bg: n ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: n ? /* @__PURE__ */ F(wt, {
							src: n,
							alt: t
						}) : Rt(t)
					}),
					/* @__PURE__ */ F(Tt, { children: t }),
					/* @__PURE__ */ F(a, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			S && E && typeof document < "u" && m ? ee(/* @__PURE__ */ F(xt, {
				ref: M,
				style: {
					top: E.top,
					left: E.left
				},
				children: m(P)
			}), document.body) : null,
			/* @__PURE__ */ F(Et, {
				"aria-label": `Last price: ${i ?? ""}`,
				children: i ?? "—"
			}),
			/* @__PURE__ */ I(Dt, {
				role: "list",
				children: [
					/* @__PURE__ */ I(Ot, {
						role: "listitem",
						children: [/* @__PURE__ */ F(kt, {
							$dashed: !0,
							children: _("Mark")
						}), /* @__PURE__ */ F(At, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ I(Ot, {
						role: "listitem",
						children: [/* @__PURE__ */ F(kt, {
							$dashed: !0,
							children: _("Index")
						}), /* @__PURE__ */ F(At, { children: s ?? "—" })]
					}),
					/* @__PURE__ */ I(Ot, {
						role: "listitem",
						children: [/* @__PURE__ */ F(kt, {
							$dashed: !0,
							children: _("Funding / Countdown")
						}), /* @__PURE__ */ I(jt, { children: [
							/* @__PURE__ */ F(Mt, {
								$negative: L,
								children: Pt(c)
							}),
							/* @__PURE__ */ F(Nt, { children: "/" }),
							/* @__PURE__ */ F(At, {
								as: "span",
								children: It(l)
							})
						] })]
					}),
					/* @__PURE__ */ I(Ot, {
						role: "listitem",
						children: [/* @__PURE__ */ F(kt, { children: _("24h Change") }), /* @__PURE__ */ F(At, {
							style: { color: u ? R ? v.colors.failure : v.colors.success : void 0 },
							children: Ft(u)
						})]
					}),
					/* @__PURE__ */ I(Ot, {
						role: "listitem",
						children: [/* @__PURE__ */ F(kt, { children: _("24h Volume (USDT)") }), /* @__PURE__ */ F(At, { children: Lt(d) })]
					})
				]
			})
		]
	});
}, Ht = 10, Ut = 27, Wt = j(y)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, Gt = j(y)`
  gap: 5px;
`, Kt = j.button`
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
`, qt = j.div`
  position: relative;
`, Jt = j.button`
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
`, Yt = j.div`
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
`, Xt = j.button`
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
`, Zt = j(y)`
  align-items: center;
  gap: 2px;
`, Qt = j.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, $t = j.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, en = j.div`
  height: ${({ $size: e }) => e === "full" ? Ht * 2 * Ut : Ht * Ut}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, tn = j.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 3px 16px;
  gap: 4px;
  height: ${Ut}px;
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
`, nn = j.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, rn = j.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, an = j.div`
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
`, on = j.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, sn = j.span`
  text-align: center;
`, cn = j.span`
  text-align: right;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ln = (e, t, n, r, i) => {
	if (r <= 1) return e;
	let a = n * r, o = /* @__PURE__ */ new Map();
	for (let [n, r] of e) {
		let e = Number(n), s = Number(r);
		if (!Number.isFinite(e) || !Number.isFinite(s)) continue;
		let c = (t === "bid" ? Math.floor(e / a) * a : Math.ceil(e / a) * a).toFixed(i);
		o.set(c, (o.get(c) ?? 0) + s);
	}
	return [...o.entries()].sort((e, n) => t === "bid" ? Number(n[0]) - Number(e[0]) : Number(e[0]) - Number(n[0])).map(([e, t]) => [e, t.toString()]);
}, un = [
	100,
	50,
	10,
	1
], dn = (e) => e === 0 ? "1" : `0.${"0".repeat(e - 1)}1`, fn = (e) => !e || e <= 0 ? 0 : Math.round(-Math.log10(e)), pn = (e, t) => {
	let n = [];
	for (let e of un) t > e * 10 && n.push(String(e));
	let r = fn(e);
	for (let e = 1; e <= r; e++) n.push(dn(e));
	return n;
}, mn = (e, t) => {
	T(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, hn = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = A(!1), o = k(null);
	return mn(o, () => a(!1)), /* @__PURE__ */ I(qt, {
		ref: o,
		children: [/* @__PURE__ */ I(Jt, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ F(Yt, { children: t.map((e) => /* @__PURE__ */ F(Xt, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, gn = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ I("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ F("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "6",
			stroke: t
		}),
		/* @__PURE__ */ F("rect", {
			x: "0.5",
			y: "8.5",
			width: "6",
			height: "6",
			stroke: e
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: n
		})
	]
}), _n = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ I("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ F("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), vn = ({ askColor: e, listColor: t }) => /* @__PURE__ */ I("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ F("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ F("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), yn = (e) => e, bn = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = yn }) => {
	let g = N(), _ = d === "QUOTE" ? r : n, v = O(() => pn(i, o), [i, o]);
	T(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = O(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = ln(e, "ask", i, r, a), s = ln(t, "bid", i, r, a), c = Ht * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
	}, x = O(() => b([...y.asks].reverse()).reverse(), [y.asks, d]), S = O(() => b(y.bids), [y.bids, d]), C = O(() => {
		let e = x[0]?.total ?? 0, t = S[S.length - 1]?.total ?? 0;
		return Math.max(e, t, 1);
	}, [x, S]), w = (e, t) => {
		let n = e === "bid" ? g.colors.success : g.colors.failure, r = Math.max(0, Math.min(100, t * 100)).toFixed(2);
		return { background: `linear-gradient(to right, ${`color-mix(in srgb, ${n} 30%, transparent)`} 0%, ${`color-mix(in srgb, ${n} 10%, transparent)`} ${r}%, transparent ${r}%, transparent 100%)` };
	}, E = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), D = /* @__PURE__ */ I(P, { children: [
		/* @__PURE__ */ I(Wt, { children: [/* @__PURE__ */ I(Gt, { children: [
			/* @__PURE__ */ F(Kt, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ F(gn, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ F(Kt, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ F(_n, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ F(Kt, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ F(vn, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ I(Zt, { children: [/* @__PURE__ */ F(hn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ F(hn, {
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
		/* @__PURE__ */ I(Qt, { children: [
			/* @__PURE__ */ I("span", { children: [
				h("Price"),
				" (",
				r,
				")"
			] }),
			/* @__PURE__ */ I("span", {
				style: { textAlign: "center" },
				children: [
					h("Amount"),
					" (",
					_,
					")"
				]
			}),
			/* @__PURE__ */ I("span", {
				style: { textAlign: "right" },
				children: [
					h("SUM"),
					" (",
					_,
					")"
				]
			})
		] }),
		/* @__PURE__ */ I($t, { children: [
			s !== "bids" && /* @__PURE__ */ F(en, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - Ht)).map((e) => /* @__PURE__ */ I(tn, {
					$side: "ask",
					style: w("ask", e.total / C),
					children: [
						/* @__PURE__ */ F(nn, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ F(rn, {
							$align: "center",
							children: E(Number(e.qty))
						}),
						/* @__PURE__ */ F(rn, {
							$align: "right",
							children: E(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ I(an, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ F(on, { children: h("Spread") }),
					/* @__PURE__ */ F(sn, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ F(cn, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ F(en, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? Ht * 2 : Ht).map((e) => /* @__PURE__ */ I(tn, {
					$side: "bid",
					style: w("bid", e.total / C),
					children: [
						/* @__PURE__ */ F(nn, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ F(rn, {
							$align: "center",
							children: E(Number(e.qty))
						}),
						/* @__PURE__ */ F(rn, {
							$align: "right",
							children: E(e.total)
						})
					]
				}, `b-${e.price}`))
			})
		] })
	] });
	return m ? /* @__PURE__ */ F("div", {
		style: p ? { display: "none" } : { display: "contents" },
		children: D
	}) : /* @__PURE__ */ F(L, {
		style: p ? { display: "none" } : void 0,
		children: D
	});
}, xn = j(L)`
  flex: 1;
  min-height: 200px;
`, Sn = j.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, Cn = j(y)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, wn = j.div`
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
`, Tn = j.div`
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
`, En = j(y)`
  gap: 6px;
  align-items: center;
`, Dn = j.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, On = j.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, kn = j.div`
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
`, An = M`
  max-height: 360px;
  overflow-y: auto;
`, jn = j.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${An}
`, Mn = j.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${An}
`, Nn = j.div`
  display: grid;
  grid-template-columns: 148px 156px minmax(min-content, 0.6fr) repeat(5, minmax(min-content, 1fr));
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
  ${An}
`, Pn = j.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Fn = j.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, In = j.button`
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
`, Y = j(r).attrs({
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
`, X = j(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
`, Ln = (e) => e, Rn = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: a, closingSymbol: o, t: s }) => {
	let c = N(), l = t?.(e.symbol), u = e.positionAmt >= 0 ? "BUY" : "SELL", d = Number.isFinite(l) && Number.isFinite(e.entryPrice) ? (l - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), f = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: u,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, p = o === e.symbol;
	return /* @__PURE__ */ I(P, { children: [
		/* @__PURE__ */ F(X, {
			bold: !0,
			children: e.symbol
		}),
		/* @__PURE__ */ F(X, {
			style: { color: u === "BUY" ? c.colors.success : c.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ F(X, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ F(X, { children: l !== void 0 && Number.isFinite(l) ? l.toFixed(2) : "—" }),
		/* @__PURE__ */ I(X, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ F(X, { children: f ? f.toFixed(2) : "—" }),
		/* @__PURE__ */ F(X, {
			style: { color: d >= 0 ? c.colors.success : c.colors.failure },
			children: Number.isFinite(d) ? d.toFixed(4) : "—"
		}),
		/* @__PURE__ */ I(Dn, { children: [/* @__PURE__ */ I(On, {
			$kind: "tp",
			children: [
				s("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ I(On, {
			$kind: "sl",
			children: [
				s("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ I(En, { children: [/* @__PURE__ */ F(i, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => a(e, l ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: s("TP/SL")
		}), /* @__PURE__ */ F(i, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: p || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: p,
			children: s("Close")
		})] })
	] });
}, zn = ({ tab: e, onTabChange: t, positions: n, openOrders: a, orderHistory: o = [], tradeHistory: s = [], transactionHistory: c = [], onShareTrade: l, useMarkPriceForSymbol: u, computeLiqPrice: d, onClosePosition: f, onEditTpSl: p, onCancelOrder: m, closingSymbol: h = null, cancellingOrderId: g = null, t: _ = Ln }) => {
	let v = N(), b = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ I(xn, { children: [/* @__PURE__ */ I(te, {
		activeIndex: b.indexOf(e),
		onItemClick: (e) => t(b[e]),
		children: [
			/* @__PURE__ */ I(B, { children: [
				_("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ I(B, { children: [
				_("Open Orders"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ I(B, { children: [
				_("Order History"),
				" (",
				o.length,
				")"
			] }),
			/* @__PURE__ */ I(B, { children: [
				_("Trade History"),
				" (",
				s.length,
				")"
			] }),
			/* @__PURE__ */ I(B, { children: [
				_("Transaction History"),
				" (",
				c.length,
				")"
			] })
		]
	}), /* @__PURE__ */ I(Sn, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ F(Cn, { children: /* @__PURE__ */ F(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open positions")
		}) }) : /* @__PURE__ */ I(wn, { children: [
			/* @__PURE__ */ F(Y, { children: _("Symbol") }),
			/* @__PURE__ */ F(Y, { children: _("Size") }),
			/* @__PURE__ */ F(Y, { children: _("Entry") }),
			/* @__PURE__ */ F(Y, { children: _("Mark") }),
			/* @__PURE__ */ F(Y, { children: _("Lev") }),
			/* @__PURE__ */ F(Y, { children: _("Liq") }),
			/* @__PURE__ */ F(Y, { children: _("uPnL") }),
			/* @__PURE__ */ F(Y, { children: _("TP/SL") }),
			/* @__PURE__ */ F(Y, {}),
			n.map((e) => /* @__PURE__ */ F(Tn, { children: /* @__PURE__ */ F(Rn, {
				p: e,
				useMarkPriceForSymbol: u,
				computeLiqPrice: d,
				onClose: f,
				onEditTpSl: p,
				closingSymbol: h,
				t: _
			}) }, e.id))
		] })),
		e === "orders" && (a.length === 0 ? /* @__PURE__ */ F(Cn, { children: /* @__PURE__ */ F(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open orders")
		}) }) : /* @__PURE__ */ I(kn, { children: [
			/* @__PURE__ */ F(Y, { children: _("Symbol") }),
			/* @__PURE__ */ F(Y, { children: _("Side") }),
			/* @__PURE__ */ F(Y, { children: _("Type") }),
			/* @__PURE__ */ F(Y, { children: _("Price") }),
			/* @__PURE__ */ F(Y, { children: _("Size") }),
			/* @__PURE__ */ F(Y, { children: _("Filled") }),
			/* @__PURE__ */ F(Y, { children: _("Status") }),
			/* @__PURE__ */ F(Y, {}),
			a.map((e) => {
				let t = g === e.id;
				return /* @__PURE__ */ I(Tn, { children: [
					/* @__PURE__ */ F(X, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ F(X, {
						style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ F(X, { children: e.type }),
					/* @__PURE__ */ F(X, { children: e.price }),
					/* @__PURE__ */ F(X, { children: e.origQty }),
					/* @__PURE__ */ F(X, { children: e.executedQty }),
					/* @__PURE__ */ F(X, { children: e.status }),
					/* @__PURE__ */ F(En, { children: /* @__PURE__ */ F(i, {
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
		e === "history" && (o.length === 0 ? /* @__PURE__ */ F(Cn, { children: /* @__PURE__ */ F(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No order history")
		}) }) : /* @__PURE__ */ I(Nn, { children: [
			/* @__PURE__ */ F(Y, { children: _("Time") }),
			/* @__PURE__ */ F(Y, { children: _("Symbol") }),
			/* @__PURE__ */ F(Y, { children: _("Side") }),
			/* @__PURE__ */ F(Y, { children: _("Type") }),
			/* @__PURE__ */ F(Y, { children: _("Price") }),
			/* @__PURE__ */ F(Y, { children: _("Size") }),
			/* @__PURE__ */ F(Y, { children: _("Filled") }),
			/* @__PURE__ */ F(Y, { children: _("Status") }),
			o.map((e) => /* @__PURE__ */ I(Tn, { children: [
				/* @__PURE__ */ F(X, {
					as: "div",
					children: /* @__PURE__ */ I(Pn, { children: [/* @__PURE__ */ F("span", { children: e.date }), /* @__PURE__ */ F("span", { children: e.time })] })
				}),
				/* @__PURE__ */ F(X, {
					bold: !0,
					children: e.symbol
				}),
				/* @__PURE__ */ F(X, {
					style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
					children: e.side
				}),
				/* @__PURE__ */ F(X, { children: e.type }),
				/* @__PURE__ */ F(X, { children: e.price }),
				/* @__PURE__ */ F(X, { children: e.origQty }),
				/* @__PURE__ */ F(X, { children: e.executedQty }),
				/* @__PURE__ */ F(X, { children: e.status })
			] }, e.id))
		] })),
		e === "trades" && (s.length === 0 ? /* @__PURE__ */ F(Cn, { children: /* @__PURE__ */ F(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No trades yet")
		}) }) : /* @__PURE__ */ I(jn, { children: [
			/* @__PURE__ */ F(Y, { children: _("Time") }),
			/* @__PURE__ */ F(Y, { children: _("Symbol") }),
			/* @__PURE__ */ F(Y, { children: _("Price") }),
			/* @__PURE__ */ F(Y, { children: _("Quantity") }),
			/* @__PURE__ */ F(Y, { children: _("Fee") }),
			/* @__PURE__ */ F(Y, { children: _("Realized profit") }),
			s.map((e) => {
				let t = e.side === "BUY" ? v.colors.success : v.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ I(Tn, { children: [
					/* @__PURE__ */ F(X, {
						as: "div",
						children: /* @__PURE__ */ I(Pn, { children: [/* @__PURE__ */ F("span", { children: e.date }), /* @__PURE__ */ F("span", { children: e.time })] })
					}),
					/* @__PURE__ */ F(X, {
						as: "div",
						children: /* @__PURE__ */ I(Fn, { children: [/* @__PURE__ */ F("span", { children: e.symbol }), /* @__PURE__ */ F("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? _("Buy") : _("Sell")
						})] })
					}),
					/* @__PURE__ */ F(X, { children: e.price }),
					/* @__PURE__ */ F(X, { children: e.quantity }),
					/* @__PURE__ */ F(X, { children: e.fee }),
					/* @__PURE__ */ F(X, {
						as: "div",
						children: /* @__PURE__ */ I(y, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ F("span", {
								style: { color: n ? v.colors.success : v.colors.failure },
								children: e.realizedProfit
							}), l && /* @__PURE__ */ F(In, {
								type: "button",
								onClick: () => l(e),
								"aria-label": _("Share trade"),
								children: /* @__PURE__ */ F("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ F("path", {
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
		e === "transactions" && (c.length === 0 ? /* @__PURE__ */ F(Cn, { children: /* @__PURE__ */ F(r, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No transactions yet")
		}) }) : /* @__PURE__ */ I(Mn, { children: [
			/* @__PURE__ */ F(Y, { children: _("Time") }),
			/* @__PURE__ */ F(Y, { children: _("Type") }),
			/* @__PURE__ */ F(Y, { children: _("Amount") }),
			/* @__PURE__ */ F(Y, { children: _("Symbol") }),
			c.map((e) => /* @__PURE__ */ I(Tn, { children: [
				/* @__PURE__ */ F(X, {
					as: "div",
					children: /* @__PURE__ */ I(Pn, { children: [/* @__PURE__ */ F("span", { children: e.date }), /* @__PURE__ */ F("span", { children: e.time })] })
				}),
				/* @__PURE__ */ F(X, { children: e.type }),
				/* @__PURE__ */ F(X, { children: e.amount }),
				/* @__PURE__ */ F(X, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, Bn = j(y)`
  flex-direction: column;
  gap: 8px;
`, Vn = j(y)`
  gap: 8px;
`, Hn = j.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, Un = j(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Wn = j(m)`
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
`, Gn = j(y)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, Kn = (e) => e, qn = ({ isOpen: e, symbol: t, positionSide: n, qty: a, entryPrice: o, markPrice: s, onConfirm: c, onClose: u, t: d = Kn }) => {
	let p = N(), m = n === "LONG" ? 1 : -1, [h, _] = A(""), [v, b] = A(""), [x, S] = A(""), [C, w] = A(""), [E, D] = A(!1);
	T(() => {
		e || (_(""), b(""), S(""), w(""));
	}, [e]);
	let k = (e) => a > 0 ? o + m * e / a : NaN, j = (e) => a > 0 ? m * (e - o) * a : NaN, M = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", P = (e) => {
		_(e);
		let t = Number(e);
		b(Number.isFinite(t) && e !== "" ? M(j(t), 4) : "");
	}, ee = (e) => {
		b(e);
		let t = Number(e);
		_(Number.isFinite(t) && e !== "" ? M(k(t), 2) : "");
	}, L = (e) => {
		S(e);
		let t = Number(e);
		w(Number.isFinite(t) && e !== "" ? M(j(t), 4) : "");
	}, R = (e) => {
		w(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? S(M(k(t), 2)) : w("");
	}, z = O(() => {
		let e = Number(h), t = Number(x), r = h !== "" && Number.isFinite(e), i = x !== "" && Number.isFinite(t);
		if (n === "LONG") {
			if (r && e <= o) return d("Take Profit price must be above entry for a LONG position.");
			if (i && t >= o) return d("Stop Loss price must be below entry for a LONG position.");
		} else {
			if (r && e >= o) return d("Take Profit price must be below entry for a SHORT position.");
			if (i && t <= o) return d("Stop Loss price must be above entry for a SHORT position.");
		}
	}, [
		h,
		x,
		n,
		o,
		d
	]), B = !E && (h !== "" || x !== "") && !z;
	return /* @__PURE__ */ F(g, {
		isOpen: e,
		onDismiss: u,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ F(f, {
			title: d("Set TP / SL"),
			onDismiss: u,
			children: /* @__PURE__ */ I(y, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ I(Gn, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: d("Symbol")
					}), /* @__PURE__ */ I(r, {
						fontSize: "14px",
						bold: !0,
						style: { color: n === "LONG" ? p.colors.success : p.colors.failure },
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ I(Gn, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: d("Entry")
					}), /* @__PURE__ */ F(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? o.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ I(Gn, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: d("Mark")
					}), /* @__PURE__ */ F(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(s) ? s.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ F(Hn, {}),
					/* @__PURE__ */ I(Bn, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						bold: !0,
						color: p.colors.success,
						children: d("Take Profit")
					}), /* @__PURE__ */ I(Vn, { children: [/* @__PURE__ */ I(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ F(Un, { children: d("Trigger Price") }), /* @__PURE__ */ F(Wn, {
							value: h,
							onChange: (e) => P(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ I(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ F(Un, { children: d("PnL (USDT)") }), /* @__PURE__ */ F(Wn, {
							value: v,
							onChange: (e) => ee(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ I(Bn, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						bold: !0,
						color: p.colors.failure,
						children: d("Stop Loss")
					}), /* @__PURE__ */ I(Vn, { children: [/* @__PURE__ */ I(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ F(Un, { children: d("Trigger Price") }), /* @__PURE__ */ F(Wn, {
							value: x,
							onChange: (e) => L(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ I(l, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ F(Un, { children: d("PnL (USDT)") }), /* @__PURE__ */ F(Wn, {
							value: C,
							onChange: (e) => R(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					z && /* @__PURE__ */ F(r, {
						fontSize: "14px",
						color: "failure",
						children: z
					}),
					/* @__PURE__ */ F(i, {
						onClick: async () => {
							if (B) {
								D(!0);
								try {
									await c({
										symbol: t,
										closeSide: n === "LONG" ? "SELL" : "BUY",
										tpPrice: h,
										slPrice: x,
										qty: String(a),
										closePosition: !0
									}), u();
								} finally {
									D(!1);
								}
							}
						},
						disabled: !B,
						isLoading: E,
						scale: "md",
						children: d("Confirm")
					})
				]
			})
		})
	});
}, Jn = j(L)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, Yn = (e) => typeof e == "number" ? `${e}px` : e, Xn = ({ children: e, minHeight: t = "420px" }) => /* @__PURE__ */ F(Jn, {
	$minHeight: Yn(t),
	children: e
}), Zn = j(L)`
  height: 100%;
`, Qn = j.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, $n = j.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, er = (e) => e, tr = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = er }) => /* @__PURE__ */ I(Zn, { children: [/* @__PURE__ */ I(te, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ F(B, { children: i("Order Book") }), /* @__PURE__ */ F(B, { children: i("Trades") })]
}), /* @__PURE__ */ I(Qn, { children: [/* @__PURE__ */ F($n, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ F($n, {
	$hidden: e !== "trades",
	children: r
})] })] }), nr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='32'%20fill='none'%20viewBox='0%200%2015%2032'%3e%3cpath%20fill='%230098A1'%20d='M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z'/%3e%3cpath%20fill='%2353DEE9'%20d='M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z'/%3e%3c/svg%3e", rr = "data:image/svg+xml,%3csvg%20width='24'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='19'%20width='17'%20height='11'%20fill='%231FC7D4'/%3e%3cpath%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'%20fill='%231FC7D4'/%3e%3cpath%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'%20fill='%231FC7D4'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20fill='url(%23paint0_linear_bunnyhead_main)'/%3e%3c/g%3e%3cg%20transform='translate(2)'%3e%3cpath%20d='M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z'%20fill='%23452A7A'/%3e%3cpath%20d='M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z'%20fill='%23452A7A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_main'%20x1='14'%20y1='1'%20x2='14'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", ir = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='32'%20fill='none'%20viewBox='0%200%2028%2032'%3e%3crect%20width='17'%20height='11'%20x='1'%20y='19'%20fill='%231FC7D4'/%3e%3cpath%20fill='%231FC7D4'%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill='url(%23paint0_linear_bunnyhead_max)'%20fill-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787'/%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20width='28'%20height='28'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_max'%20x1='14'%20x2='14'%20y1='1'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/widgets/BunnySlider.tsx
function ar({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = k(null), [u, d] = A(0);
	D(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999, _ = g ? ir : rr;
	return /* @__PURE__ */ I(or, {
		ref: l,
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ F(sr, { className: "bs-track" }),
			/* @__PURE__ */ F(lr, {
				className: "bs-back",
				style: { backgroundImage: `url("${nr}")` }
			}),
			/* @__PURE__ */ F(cr, {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ F(ur, {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: {
					left: m,
					backgroundImage: `url("${_}")`
				}
			}),
			/* @__PURE__ */ F(dr, {
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
			s && /* @__PURE__ */ F(fr, {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
var or = j.div`
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
`, sr = j.span`
  position: absolute;
  left: 14px;
  right: 0;
  top: 18px;
  height: 2px;
  background: ${({ theme: e }) => e?.colors?.inputSecondary ?? "var(--pcs-colors-input-secondary, #D7CAEC)"};
  pointer-events: none;
`, cr = j.span`
  position: absolute;
  left: 14px;
  top: 18px;
  height: 10px;
  background: ${({ theme: e }) => e?.colors?.primary ?? "var(--pcs-colors-primary, #1FC7D4)"};
  pointer-events: none;
  transition: width 60ms linear;
`, lr = j.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 32px;
  pointer-events: none;
  background-size: 15px 32px;
  background-repeat: no-repeat;
`, ur = j.span`
  position: absolute;
  top: 0;
  width: 24px;
  height: 32px;
  pointer-events: none;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  transition: left 60ms linear, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
`, dr = j.input`
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
`, fr = j.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme: e }) => e?.colors?.textSubtle ?? "var(--pcs-colors-text-subtle)"};
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
`, pr = j(L)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, mr = j(y)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, hr = j.button`
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
`, gr = j(y)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, _r = j.button`
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
`, vr = j.button`
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
`, yr = j(y)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, br = j(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, xr = j(y)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, Sr = j.div`
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
`, Cr = j(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, wr = j.input`
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
`, Tr = j(i).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, Er = j.div`
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
`, Dr = j.input`
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
`, Or = j.button`
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
`, kr = j.div`
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
`, Ar = j.button`
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
`, jr = j.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, Mr = j(m)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, Nr = j.div`
  padding: 4px 0;
`, Pr = j(y)`
  gap: 8px;
`, Fr = j.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, Ir = j.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, Lr = ({ value: e, onChange: t }) => /* @__PURE__ */ I(Fr, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ F(Ir, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ F(Ir, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), Rr = j(i)`
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
`, zr = j.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Br = j(r).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Vr = j(r).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, Hr = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Ur = j(y)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, Wr = j(y)`
  gap: 6px;
`, Gr = j.button`
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
`, Kr = j.button`
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
`, qr = j.span`
  text-align: center;
`, Jr = j.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
`, Yr = j.input`
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
`, Xr = j.button`
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
`, Zr = j(y)`
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
`, Qr = j(y)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.text};
`, $r = j.div`
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
`, ei = j(y)`
  justify-content: space-between;
  align-items: center;
`, ti = j.button`
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
`, ni = j.div`
  position: fixed;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`, ri = j.button`
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
`, ii = [
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
], ai = ({ baseAsset: e, quoteAsset: t, draft: n, onDraftChange: i, typeKey: c, onTypeKeyChange: d, availableBalanceText: f, preview: p, feeText: m, sizePercent: g, onSizePercentChange: _, cta: v, canSubmit: y, isSubmitting: b = !1, marginSubmitting: x = !1, authReady: S = !0, hasAddress: C = !0, errorSlot: w, onSubmit: E, onLeverageClick: D, onMarginModeToggle: O, onDepositClick: j, t: M = Hr }) => {
	let N = n.sizeUnit === "QUOTE" ? t : e, P = c === "stop-limit" || c === "stop-market", L = c === "limit" || c === "stop-limit", R = P, z = () => i({
		...n,
		sizeUnit: n.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), B = k(null), te = k(null), [V, ne] = A(!1), [H, U] = A(null);
	T(() => {
		if (!V || !B.current) return;
		let e = B.current.getBoundingClientRect();
		U({
			top: e.bottom + 4,
			left: e.left,
			width: e.width
		});
	}, [V]), T(() => {
		if (!V) return;
		let e = (e) => {
			let t = e.target;
			B.current && !B.current.contains(t) && te.current && !te.current.contains(t) && ne(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [V]);
	let W = ii.find((e) => e.key === c)?.label ?? "Market", re = p.liq, G = p.cost;
	return /* @__PURE__ */ I(Ur, { children: [
		/* @__PURE__ */ I(Wr, { children: [/* @__PURE__ */ F(Gr, {
			disabled: x,
			onClick: O,
			children: n.marginMode === "CROSS" ? M("Cross") : M("Isolated")
		}), /* @__PURE__ */ F(Gr, {
			onClick: D,
			children: `${n.leverage}x`
		})] }),
		/* @__PURE__ */ I(Kr, {
			ref: B,
			type: "button",
			"aria-haspopup": "listbox",
			"aria-expanded": V,
			onClick: () => ne((e) => !e),
			children: [
				/* @__PURE__ */ F(h, {
					width: "14px",
					color: "textSubtle"
				}),
				/* @__PURE__ */ F(qr, { children: M(W) }),
				/* @__PURE__ */ F(a, {
					width: "14px",
					color: "textSubtle"
				})
			]
		}),
		V && H && typeof document < "u" && ee(/* @__PURE__ */ F(ni, {
			ref: te,
			role: "listbox",
			style: {
				top: H.top,
				left: H.left,
				width: H.width
			},
			children: ii.map((e) => /* @__PURE__ */ F(ri, {
				role: "option",
				"aria-selected": e.key === c,
				$active: e.key === c,
				onClick: () => {
					d(e.key), ne(!1);
				},
				children: M(e.label)
			}, e.key))
		}), document.body),
		R && /* @__PURE__ */ I(Jr, { children: [
			/* @__PURE__ */ F(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: M("Stop")
			}),
			/* @__PURE__ */ F(Yr, {
				value: n.stopPrice,
				onChange: (e) => i({
					...n,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": M("Stop price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ I(Xr, {
				type: "button",
				onClick: () => i({
					...n,
					stopPriceSource: n.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				children: [n.stopPriceSource === "MARK" ? M("Mark") : M("Last"), /* @__PURE__ */ F(a, { width: "12px" })]
			})
		] }),
		L && /* @__PURE__ */ I(Jr, { children: [
			/* @__PURE__ */ F(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: M("Price")
			}),
			/* @__PURE__ */ F(Yr, {
				value: n.price,
				onChange: (e) => i({
					...n,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": M("Limit price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ F(r, {
				fontSize: "13px",
				color: "textSubtle",
				children: t
			})
		] }),
		/* @__PURE__ */ I(Jr, { children: [/* @__PURE__ */ F(Yr, {
			value: n.quantity,
			onChange: (e) => i({
				...n,
				quantity: e.target.value
			}),
			placeholder: M("Size"),
			inputMode: "decimal"
		}), /* @__PURE__ */ I(Xr, {
			type: "button",
			onClick: z,
			children: [N, /* @__PURE__ */ F(a, { width: "12px" })]
		})] }),
		/* @__PURE__ */ F(l, { children: /* @__PURE__ */ F(ar, {
			min: 0,
			max: 100,
			step: 1,
			value: g,
			onValueChanged: _
		}) }),
		/* @__PURE__ */ I(Zr, { children: [
			/* @__PURE__ */ F("span", { children: M("Avbl") }),
			/* @__PURE__ */ F("strong", { children: `${f} ${t}` }),
			/* @__PURE__ */ F(u, {
				variant: "text",
				scale: "xs",
				onClick: j,
				"aria-label": M("Deposit"),
				style: {
					width: 18,
					height: 18,
					minWidth: 18,
					borderRadius: 999
				},
				children: /* @__PURE__ */ F(s, {
					color: "primary",
					width: "10px"
				})
			})
		] }),
		/* @__PURE__ */ I(Qr, { children: [/* @__PURE__ */ F(o, {
			scale: "sm",
			checked: n.tpSlEnabled,
			onChange: (e) => i({
				...n,
				tpSlEnabled: e.target.checked
			})
		}), /* @__PURE__ */ F("span", { children: M("TP/SL") })] }),
		/* @__PURE__ */ I(Qr, { children: [/* @__PURE__ */ F(o, {
			scale: "sm",
			checked: n.reduceOnly,
			onChange: (e) => i({
				...n,
				reduceOnly: e.target.checked
			})
		}), /* @__PURE__ */ F("span", { children: M("Reduce-Only") })] }),
		w,
		/* @__PURE__ */ I($r, {
			$tone: "up",
			children: [
				/* @__PURE__ */ I(ei, { children: [/* @__PURE__ */ F("span", { children: M("Est. liq. price") }), /* @__PURE__ */ F("span", {
					className: "v",
					children: re
				})] }),
				/* @__PURE__ */ I(ei, { children: [/* @__PURE__ */ F("span", { children: M("Margin") }), /* @__PURE__ */ F("span", {
					className: "v",
					children: G
				})] }),
				/* @__PURE__ */ I(ei, { children: [/* @__PURE__ */ F("span", { children: M("Max") }), /* @__PURE__ */ F("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ F(ti, {
			type: "button",
			$side: "BUY",
			disabled: !y || b,
			onClick: () => E({ sideOverride: "BUY" }),
			children: M("Buy/Long")
		}),
		/* @__PURE__ */ I($r, {
			$tone: "down",
			children: [
				/* @__PURE__ */ I(ei, { children: [/* @__PURE__ */ F("span", { children: M("Est. liq. price") }), /* @__PURE__ */ F("span", {
					className: "v",
					children: re
				})] }),
				/* @__PURE__ */ I(ei, { children: [/* @__PURE__ */ F("span", { children: M("Margin") }), /* @__PURE__ */ F("span", {
					className: "v",
					children: G
				})] }),
				/* @__PURE__ */ I(ei, { children: [/* @__PURE__ */ F("span", { children: M("Max") }), /* @__PURE__ */ F("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ F(ti, {
			type: "button",
			$side: "SELL",
			disabled: !y || b,
			onClick: () => E({ sideOverride: "SELL" }),
			children: M("Sell/Short")
		}),
		/* @__PURE__ */ I(r, {
			fontSize: "11px",
			color: "textSubtle",
			textAlign: "right",
			children: [
				M("Fees"),
				": ",
				m
			]
		})
	] });
}, oi = (e) => {
	let { isMobile: t } = d();
	if (t) return /* @__PURE__ */ F(ai, { ...e });
	let { baseAsset: n, quoteAsset: i, draft: a, onDraftChange: f, typeKey: p, onTypeKeyChange: m, availableBalanceText: h, preview: g, feeText: _, sizePercent: v, onSizePercentChange: b, cta: x, canSubmit: S, isSubmitting: C = !1, marginSubmitting: w = !1, authReady: E = !0, hasAddress: D = !0, errorSlot: O, onSubmit: j, onLeverageClick: M, onMarginModeToggle: N, onDepositClick: L, t: R = Hr } = e, z = a.sizeUnit === "QUOTE" ? i : n, B = (e) => f({
		...a,
		side: e
	}), te = () => f({
		...a,
		sizeUnit: a.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), V = () => f({
		...a,
		tpSlEnabled: !a.tpSlEnabled
	}), ne = p === "stop-limit" || p === "stop-market", H = p === "limit" || p === "stop-limit", U = ne, W = k(null), re = k(null), [G, ie] = A(!1), [ae, oe] = A({
		top: 0,
		left: 0
	});
	T(() => {
		if (!G || !W.current || !re.current) return;
		let e = W.current.getBoundingClientRect(), t = re.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		oe({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [G]), T(() => {
		if (!G) return;
		let e = (e) => {
			let t = e.target;
			W.current && !W.current.contains(t) && re.current && !re.current.contains(t) && ie(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [G]);
	let se = ne, ce = p === "stop-market" ? `${R("Stop Market")} ▾` : `${R("Stop Limit")} ▾`, le = () => {
		ie((e) => !e);
	}, ue = (e) => {
		m(e), ie(!1);
	};
	return /* @__PURE__ */ I(pr, { children: [
		/* @__PURE__ */ I(mr, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ F(hr, {
				$active: p === e,
				onClick: () => m(e),
				children: R(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ F(hr, {
				ref: W,
				$active: se,
				onClick: le,
				"aria-haspopup": "menu",
				"aria-expanded": G,
				children: ce
			}),
			G && typeof document < "u" && ee(/* @__PURE__ */ I(kr, {
				ref: re,
				style: {
					top: ae.top,
					left: ae.left
				},
				role: "menu",
				children: [/* @__PURE__ */ F(Ar, {
					$active: p === "stop-limit",
					role: "menuitem",
					onClick: () => ue("stop-limit"),
					children: R("Stop Limit")
				}), /* @__PURE__ */ F(Ar, {
					$active: p === "stop-market",
					role: "menuitem",
					onClick: () => ue("stop-market"),
					children: R("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ I(gr, { children: [/* @__PURE__ */ F(_r, {
			$active: a.side === "BUY",
			$side: "BUY",
			onClick: () => B("BUY"),
			children: R("Buy")
		}), /* @__PURE__ */ F(_r, {
			$active: a.side === "SELL",
			$side: "SELL",
			onClick: () => B("SELL"),
			children: R("Sell")
		})] }),
		/* @__PURE__ */ I(y, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ F(vr, {
				disabled: w,
				onClick: N,
				title: R("Margin mode"),
				children: a.marginMode === "CROSS" ? R("Cross") : R("Isolated")
			}), /* @__PURE__ */ I(vr, {
				onClick: M,
				title: R("Leverage"),
				children: [a.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ I(yr, { children: [/* @__PURE__ */ F(br, { children: R("Avbl") }), /* @__PURE__ */ I(xr, { children: [/* @__PURE__ */ I(r, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				h,
				" ",
				i
			]
		}), /* @__PURE__ */ F(u, {
			variant: "text",
			scale: "xs",
			onClick: L,
			title: R("Deposit"),
			"aria-label": R("Deposit"),
			style: {
				width: 18,
				height: 18,
				minWidth: 18,
				borderRadius: 999
			},
			children: /* @__PURE__ */ F(s, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		U && /* @__PURE__ */ I(Er, { children: [
			/* @__PURE__ */ F(Cr, { children: R("Stop") }),
			/* @__PURE__ */ F(Dr, {
				value: a.stopPrice,
				onChange: (e) => f({
					...a,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": R("Stop price")
			}),
			/* @__PURE__ */ I(Or, {
				type: "button",
				onClick: () => f({
					...a,
					stopPriceSource: a.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: R("Trigger source"),
				children: [a.stopPriceSource === "MARK" ? R("Mark") : R("Last"), " ▾"]
			})
		] }),
		H && /* @__PURE__ */ I(Er, { children: [
			/* @__PURE__ */ F(Cr, { children: R("Price") }),
			/* @__PURE__ */ F(Dr, {
				value: a.price,
				onChange: (e) => f({
					...a,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": R("Limit price")
			}),
			/* @__PURE__ */ F(Tr, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: i
			})
		] }),
		p === "stop-limit" && /* @__PURE__ */ I(Er, { children: [
			/* @__PURE__ */ F(Cr, { children: R("TIF") }),
			/* @__PURE__ */ F(y, { flex: 1 }),
			/* @__PURE__ */ I(jr, {
				value: a.timeInForce === "GTX" ? "GTC" : a.timeInForce,
				onChange: (e) => f({
					...a,
					timeInForce: e.target.value
				}),
				"aria-label": R("Time in force"),
				children: [
					/* @__PURE__ */ F("option", {
						value: "GTC",
						children: "GTC"
					}),
					/* @__PURE__ */ F("option", {
						value: "IOC",
						children: "IOC"
					}),
					/* @__PURE__ */ F("option", {
						value: "FOK",
						children: "FOK"
					})
				]
			})
		] }),
		/* @__PURE__ */ I(Sr, { children: [
			/* @__PURE__ */ F(Cr, { children: R("Size") }),
			/* @__PURE__ */ F(wr, {
				value: a.quantity,
				onChange: (e) => f({
					...a,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ I(Tr, {
				onClick: te,
				title: R("Toggle unit"),
				children: [z, " ▾"]
			})
		] }),
		/* @__PURE__ */ F(Nr, { children: /* @__PURE__ */ F(c, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: v,
			onValueChanged: b,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ I(y, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ F(o, {
				scale: "sm",
				checked: a.reduceOnly,
				onChange: (e) => f({
					...a,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ F(r, {
				fontSize: "14px",
				children: R("Reduce Only")
			})]
		}),
		/* @__PURE__ */ I(y, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ F(o, {
				scale: "sm",
				checked: a.tpSlEnabled,
				onChange: V
			}), /* @__PURE__ */ F(r, {
				fontSize: "14px",
				children: R("Take Profit / Stop Loss")
			})]
		}),
		a.tpSlEnabled && /* @__PURE__ */ I(y, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ I(l, { children: [/* @__PURE__ */ I(y, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ F(r, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: R("Take Profit")
				}), /* @__PURE__ */ F(Lr, {
					value: a.takeProfitSource ?? "LAST",
					onChange: (e) => f({
						...a,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ I(Pr, { children: [/* @__PURE__ */ I(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ F(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("Trigger Price")
				}), /* @__PURE__ */ F(Mr, {
					value: a.takeProfitPrice,
					onChange: (e) => f({
						...a,
						takeProfitPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ I(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ F(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("PnL (USDT)")
				}), /* @__PURE__ */ F(Mr, {
					value: a.takeProfitPnl ?? "",
					onChange: (e) => f({
						...a,
						takeProfitPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] }), /* @__PURE__ */ I(l, { children: [/* @__PURE__ */ I(y, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ F(r, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: R("Stop Loss")
				}), /* @__PURE__ */ F(Lr, {
					value: a.stopLossSource ?? "LAST",
					onChange: (e) => f({
						...a,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ I(Pr, { children: [/* @__PURE__ */ I(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ F(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("Trigger Price")
				}), /* @__PURE__ */ F(Mr, {
					value: a.stopLossPrice,
					onChange: (e) => f({
						...a,
						stopLossPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ I(l, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ F(r, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: R("PnL (USDT)")
				}), /* @__PURE__ */ F(Mr, {
					value: a.stopLossPnl ?? "",
					onChange: (e) => f({
						...a,
						stopLossPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] })]
		}),
		O,
		E ? /* @__PURE__ */ F(Rr, {
			onClick: () => j(),
			disabled: !S,
			isLoading: C,
			scale: "md",
			$side: a.side,
			children: x
		}) : /* @__PURE__ */ F(Rr, {
			$side: a.side,
			onClick: () => j(),
			scale: "md",
			disabled: !D,
			children: x
		}),
		/* @__PURE__ */ I(zr, { children: [
			/* @__PURE__ */ F(Br, { children: R("Cost") }),
			/* @__PURE__ */ F(Vr, { children: g.cost }),
			!ne && /* @__PURE__ */ I(P, { children: [/* @__PURE__ */ F(Br, { children: R("Est. Liq. Price") }), /* @__PURE__ */ F(Vr, { children: g.liq })] }),
			/* @__PURE__ */ F(Br, { children: R("Fees") }),
			/* @__PURE__ */ F(Vr, { children: _ })
		] })
	] });
}, si = j(y)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, ci = j.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, li = j(y)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, ui = j(r).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, di = j(y)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, fi = j(r).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, pi = j(y)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, mi = j.button`
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
`, hi = j(y)`
  flex-direction: column;
`, gi = j(y)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, _i = j.input`
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
`, vi = j(y)`
  gap: 6px;
  margin-top: 4px;
`, yi = j.button`
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
`, bi = j.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Z = j(y)`
  justify-content: space-between;
  align-items: center;
`, xi = j(y)`
  flex-direction: column;
  gap: 8px;
`, Si = j(y)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, Ci = j.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, wi = j(r).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, Ti = j.div`
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
`, Ei = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Di = [
	25,
	50,
	75
], Oi = ({ isOpen: e, onClose: t, step: n, evmAddress: a, solanaAddress: o, isLoadingAssets: s = !1, assets: c, selectedAssetId: l, onSelectAsset: u, otherSupportedSymbols: d = [], selectedAsset: m, amount: h, onAmountChange: _, sourceAddress: v, errorSlot: b, onPercentClick: x, submitState: S, canContinue: C, onContinue: w, onBack: T, receipt: E, checkingElapsedMs: D = 0, onDepositAgain: O, onRetry: k, t: A = Ei, renderTokenIcon: j, renderSpinner: M }) => {
	let N = A(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund your Account"), ee = (() => {
		switch (S) {
			case "switching-chain": return A("Switching chain...");
			case "approving": return A("Approve in wallet...");
			case "approve-confirming": return A("Confirming approval...");
			case "depositing": return A("Confirm in wallet...");
			case "deposit-confirming": return A("Confirming deposit...");
			case "done": return A("Done");
			case "failed": return A("Retry");
			default: return A("Continue");
		}
	})(), L = (e, t = 24) => j ? j(e, t) : /* @__PURE__ */ F(Ti, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), R = (e) => M ? M(e) : /* @__PURE__ */ F("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ F("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), z = S === "switching-chain" || S === "approving" || S === "approve-confirming" || S === "depositing" || S === "deposit-confirming";
	return /* @__PURE__ */ F(g, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ F(f, {
			title: N,
			onDismiss: t,
			children: /* @__PURE__ */ I(si, { children: [
				n === "amount" && /* @__PURE__ */ F(y, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ F(i, {
						scale: "sm",
						variant: "text",
						onClick: T,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ F(p, { width: "18px" }),
						children: A("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ I(P, { children: [
					/* @__PURE__ */ I(ci, { children: [
						a && /* @__PURE__ */ I(li, { children: [
							/* @__PURE__ */ F("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ F(ui, { children: a }),
							/* @__PURE__ */ F(r, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						o && /* @__PURE__ */ I(li, {
							style: { borderTop: a ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ F("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ F(ui, { children: o }),
								/* @__PURE__ */ F(r, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ I(di, { children: [/* @__PURE__ */ I("div", { children: [/* @__PURE__ */ F(fi, {
							color: "textSubtle",
							children: A("Balance")
						}), /* @__PURE__ */ F(r, {
							fontSize: "12px",
							color: "textSubtle",
							children: A("In your wallet")
						})] }), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							bold: !0,
							children: c.some((e) => e.hasBalance) ? A("Ready") : "—"
						})] })
					] }),
					s && /* @__PURE__ */ F(r, {
						fontSize: "12px",
						children: A("Loading tokens...")
					}),
					!s && c.length === 0 && /* @__PURE__ */ I(y, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								children: A("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ F(r, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							d.length > 0 && /* @__PURE__ */ F(r, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Supported: %tokens%", { tokens: d.slice(0, 8).join(" · ") })
							})
						]
					}),
					c.length > 0 && /* @__PURE__ */ F(pi, { children: c.map((e) => /* @__PURE__ */ F(mi, {
						$selected: l === e.id,
						onClick: () => u(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ I(y, {
							alignItems: "center",
							style: { gap: 12 },
							children: [L(e, 32), /* @__PURE__ */ I(hi, { children: [/* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ I(r, {
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
					c.length > 0 && d.length > 0 && /* @__PURE__ */ F(r, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: A("Also supported: %tokens%", { tokens: d.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && m && /* @__PURE__ */ I(P, { children: [
					/* @__PURE__ */ I(gi, { children: [/* @__PURE__ */ I(y, {
						alignItems: "center",
						style: { gap: 12 },
						children: [L(m, 40), /* @__PURE__ */ I(y, {
							flexDirection: "column",
							children: [/* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								children: m.displayName || m.symbol
							}), /* @__PURE__ */ F(r, {
								fontSize: "12px",
								color: "textSubtle",
								children: m.balanceText
							})]
						})]
					}), /* @__PURE__ */ I(y, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ F(_i, {
							value: h,
							onChange: (e) => _(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ I(vi, { children: [Di.map((e) => /* @__PURE__ */ I(yi, {
							onClick: () => x(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ F(yi, {
							onClick: () => x(100),
							children: A("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ I(bi, { children: [
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(fi, {
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							children: v ?? "—"
						})] }),
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(fi, {
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(fi, {
							color: "textSubtle",
							children: A("Token")
						}), /* @__PURE__ */ I(y, {
							alignItems: "center",
							style: { gap: 6 },
							children: [L(m, 16), /* @__PURE__ */ F(r, {
								fontSize: "14px",
								bold: !0,
								children: m.symbol
							})]
						})] })
					] }),
					b,
					/* @__PURE__ */ F(i, {
						onClick: w,
						disabled: !C || z,
						isLoading: z,
						scale: "md",
						children: ee
					})
				] }),
				n === "checking" && E && /* @__PURE__ */ I(P, { children: [
					/* @__PURE__ */ I(y, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [R(72), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ I(xi, { children: [
						/* @__PURE__ */ I(Si, {
							$state: "done",
							children: [/* @__PURE__ */ F(Ci, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ F(r, {
								fontSize: "13px",
								children: A("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ I(Si, {
							$state: "done",
							children: [/* @__PURE__ */ F(Ci, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ F(r, {
								fontSize: "13px",
								children: A("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ I(Si, {
							$state: "active",
							children: [/* @__PURE__ */ F(Ci, {
								$state: "active",
								children: R(16)
							}), /* @__PURE__ */ F(r, {
								fontSize: "13px",
								children: A("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ I(bi, { children: [
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(fi, {
							color: "textSubtle",
							children: A("Amount")
						}), /* @__PURE__ */ I(r, {
							fontSize: "14px",
							bold: !0,
							children: [
								E.amount,
								" ",
								E.assetSymbol
							]
						})] }),
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(fi, {
							color: "textSubtle",
							children: A("Tx hash")
						}), /* @__PURE__ */ I(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								E.hash.slice(0, 10),
								"…",
								E.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(fi, {
							color: "textSubtle",
							children: A("Elapsed")
						}), /* @__PURE__ */ I(r, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(D / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ F(i, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: A("Close")
					})
				] }),
				n === "success" && E && /* @__PURE__ */ I(P, { children: [
					/* @__PURE__ */ I(wi, { children: [
						E.amount,
						" ",
						E.assetSymbol
					] }),
					/* @__PURE__ */ I(bi, { children: [
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							bold: !0,
							children: E.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							bold: !0,
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(r, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Processing time")
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							bold: !0,
							children: A("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ F(bi, { children: /* @__PURE__ */ I(Z, { children: [/* @__PURE__ */ F(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: A("Tx hash")
					}), /* @__PURE__ */ I(r, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							E.hash.slice(0, 10),
							"…",
							E.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ I(y, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ F(i, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: A("View Balance")
						}), /* @__PURE__ */ F(i, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: O,
							children: A("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ I(P, { children: [
					/* @__PURE__ */ I(y, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ F(r, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ F(r, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("The transaction did not go through. Your funds did not move.")
						})]
					}),
					b,
					/* @__PURE__ */ I(y, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ F(i, {
							style: { flex: 1 },
							scale: "md",
							onClick: k,
							children: A("Try Again")
						}), /* @__PURE__ */ F(i, {
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
}, ki = (e) => e, Ai = ({ isOpen: e, onClose: a, phase: o, eoaAddress: s, agentAddress: c, isProvisioning: u = !1, linkButtonLabel: d, isLinkDisabled: p = !1, isLinkPending: m = !1, onLinkWallet: h, approveButtonLabel: _, isApproveDisabled: v = !1, isApprovePending: b = !1, onApprove: x, errorSlot: S, t: C = ki }) => {
	let w = c ?? C(u ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ F(g, {
		isOpen: e,
		onDismiss: a,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ F(f, {
			title: C("Enable Perps Trading"),
			onDismiss: a,
			children: /* @__PURE__ */ I(y, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ F(r, {
						fontSize: "14px",
						color: "textSubtle",
						children: C("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ I(l, { children: [/* @__PURE__ */ F(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Your wallet")
					}), /* @__PURE__ */ F(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: s ?? "—"
					})] }),
					/* @__PURE__ */ I(l, { children: [/* @__PURE__ */ F(r, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Agent (trading signer)")
					}), /* @__PURE__ */ F(r, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: w
					})] }),
					S,
					o === "link-wallet" && /* @__PURE__ */ I(P, { children: [/* @__PURE__ */ F(i, {
						onClick: h,
						disabled: p || m,
						isLoading: m,
						scale: "md",
						children: d
					}), /* @__PURE__ */ F(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign one message in your wallet. No funds move.")
					})] }),
					(o === "authorize-agent" || o === "checking-status") && /* @__PURE__ */ I(P, { children: [/* @__PURE__ */ F(i, {
						onClick: x,
						disabled: v || b || o === "checking-status",
						isLoading: b || o === "checking-status",
						scale: "md",
						children: _
					}), /* @__PURE__ */ F(r, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					o === "done" && /* @__PURE__ */ F(n, {
						variant: "success",
						children: /* @__PURE__ */ F(t, { children: C("Trading enabled.") })
					})
				]
			})
		})
	});
}, ji = [
	50,
	250,
	500,
	1001
], Mi = 1001, Ni = 50 / 1001, Pi = 250 / 1001, Fi = (e, t) => e <= t * Ni ? "safe" : e <= t * Pi ? "warn" : "danger", Ii = 500 / 1001, Li = (e, t) => e > t * Ii, Ri = (e, t) => e > t * Pi, zi = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "High leverage" : "Danger zone", Bi = (e) => e === "safe" ? "🌿" : e === "warn" ? "⚡️" : "🔥", Vi = (e) => e === "safe" ? "A good place to start. You'll feel the market without getting rekt." : e === "warn" ? "Liquidation triggers around a 1% move." : "1% move against you liquidates. Only risk what you can afford to lose.", Hi = () => /* @__PURE__ */ F("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", {
		d: "M10.9629 8.57864L6.79069 12.7509C6.58302 12.9586 6.33844 13.0634 6.05694 13.0654C5.77544 13.0674 5.5251 12.9628 5.30594 12.7516C5.1026 12.5403 5.00194 12.2939 5.00394 12.0124C5.00594 11.7309 5.1111 11.4861 5.31944 11.2781L11.2714 5.33339C11.3736 5.23139 11.4873 5.15456 11.6124 5.10289C11.7376 5.05122 11.8683 5.02539 12.0044 5.02539C12.1406 5.02539 12.2713 5.05122 12.3964 5.10289C12.5216 5.15456 12.6319 5.22797 12.7272 5.32314L18.6829 11.2791C18.8983 11.4945 19.0059 11.7367 19.0059 12.0059C19.0059 12.2751 18.9023 12.5153 18.6949 12.7266C18.4758 12.9378 18.225 13.0434 17.9427 13.0434C17.6604 13.0434 17.4164 12.9378 17.2107 12.7266L13.0379 8.57864V18.3664C13.0379 18.6571 12.9383 18.9025 12.7389 19.1026C12.5394 19.303 12.295 19.4031 12.0057 19.4031C11.7164 19.4031 11.4702 19.303 11.2672 19.1026C11.0644 18.9025 10.9629 18.6571 10.9629 18.3664V8.57864Z",
		fill: "currentColor"
	})
}), Ui = () => /* @__PURE__ */ F("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", {
		d: "M10.9997 5V16.17L6.11973 11.29C5.72973 10.9 5.08973 10.9 4.69973 11.29C4.30973 11.68 4.30973 12.31 4.69973 12.7L11.2897 19.29C11.6797 19.68 12.3097 19.68 12.6997 19.29L19.2897 12.7C19.6797 12.31 19.6797 11.68 19.2897 11.29C18.8997 10.9 18.2697 10.9 17.8797 11.29L12.9997 16.17V5C12.9997 4.45 12.5497 4 11.9997 4C11.4497 4 10.9997 4.45 10.9997 5Z",
		fill: "currentColor"
	})
}), Wi = () => /* @__PURE__ */ F("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ F("path", {
		d: "M7.99636 11.2598C8.18224 11.2598 8.3393 11.1966 8.46752 11.0702C8.59563 10.9436 8.65969 10.7869 8.65969 10.6V7.85984C8.65969 7.67284 8.5968 7.51612 8.47102 7.38967C8.34524 7.26323 8.18936 7.20001 8.00336 7.20001C7.81747 7.20001 7.66041 7.26323 7.53219 7.38967C7.40408 7.51612 7.34002 7.67284 7.34002 7.85984V10.6C7.34002 10.7869 7.40291 10.9436 7.52869 11.0702C7.65447 11.1966 7.81036 11.2598 7.99636 11.2598ZM7.99636 6.07968C8.18791 6.07968 8.34969 6.0149 8.48169 5.88534C8.61358 5.75567 8.67952 5.59506 8.67952 5.40351C8.67952 5.21195 8.61474 5.05018 8.48519 4.91818C8.35552 4.78629 8.19491 4.72034 8.00336 4.72034C7.8118 4.72034 7.65002 4.78512 7.51802 4.91467C7.38613 5.04434 7.32019 5.20495 7.32019 5.39651C7.32019 5.58806 7.38497 5.74984 7.51452 5.88184C7.64419 6.01373 7.8048 6.07968 7.99636 6.07968ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Gi = () => /* @__PURE__ */ F("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), Ki = () => /* @__PURE__ */ F("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ F("path", {
		d: "M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), qi = () => /* @__PURE__ */ F("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Ji = j(L)`
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
`, Yi = j.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
  padding: 24px;
`, Xi = j.div`
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
`, Zi = j.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0;
`, Qi = j.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
j(y)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, j.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, j.span`
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
`, j.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, j.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, j.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var $i = j.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ea = j.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, ta = j(y)`
  align-items: center;
  justify-content: space-between;
`, na = j(r).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, ra = j.button`
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
`, ia = j.span`
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
`, aa = j.label`
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
`, oa = j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, sa = j.span`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.failure};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  font-feature-settings: 'liga' off;
`, ca = j.span`
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
`, la = j.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, ua = j.input`
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
`, da = j.button`
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
`, fa = j.span`
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
`, pa = j.span`
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
`, ma = j.span`
  position: relative;
  display: inline-flex;
`, ha = j.div`
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
`, ga = j.button`
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
`, _a = j.span`
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
j.span`
  font-size: 14px;
  font-weight: 600;
`;
var va = j(y)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, ya = j.button`
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
`, ba = j.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, xa = j(y)`
  justify-content: space-between;
  align-items: center;
`, Sa = j.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, Ca = {
	safe: "#129E7D",
	warn: "#FFB237",
	danger: "#ED4B9E"
}, wa = {
	safe: "#EAFBF7",
	warn: "#FBF2E7",
	danger: "#FFF0F9"
}, Ta = j.span`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border-top: 1px solid ${({ $zone: e }) => Ca[e]};
  border-right: 1px solid ${({ $zone: e }) => Ca[e]};
  border-bottom: 2px solid ${({ $zone: e }) => Ca[e]};
  border-left: 1px solid ${({ $zone: e }) => Ca[e]};
  background: ${({ $zone: e }) => wa[e]};
`, Ea = j.span`
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
`, Da = j.span`
  display: inline-flex;
  align-items: center;
  color: #280D5F;
  cursor: help;
`, Oa = j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, ka = j.div`
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
`, Aa = j.span`
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
`, ja = () => /* @__PURE__ */ I("svg", {
	width: "38",
	height: "39",
	viewBox: "0 0 38 39",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ F("ellipse", {
			cx: "19.0019",
			cy: "19.6397",
			rx: "19.0019",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "19.0013",
			cy: "17.455",
			rx: "17.8841",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ F("rect", {
			x: "23.3804",
			y: "9",
			width: "11.1776",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Ma = () => /* @__PURE__ */ I("svg", {
	width: "42",
	height: "43",
	viewBox: "0 0 42 43",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ F("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "18.5459",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "22.9092",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ F("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Na = () => /* @__PURE__ */ I("svg", {
	width: "44",
	height: "48",
	viewBox: "0 0 44 48",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ F("ellipse", {
			cx: "25.0904",
			cy: "29.4522",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "25.0913",
			cy: "27.2753",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "18.5464",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ F("ellipse", {
			cx: "22.9087",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ F("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Pa = j.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, Fa = j(y)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, Ia = j.button`
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
`, La = j.div`
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
`, Ra = j.input`
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
`, za = j.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`;
j.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var Ba = j.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, Va = j(y)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, Ha = j.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Ua = j.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, Wa = j.button`
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
`, Ga = j.span`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`, Ka = j(y)`
  align-self: stretch;
  gap: 8px;
`, qa = j(i)`
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
`, Ja = j.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ya = j(y)`
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
`, Xa = j.span`
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
`, Za = j.span`
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
`, Qa = ({ selected: e, options: t, onSelect: n, onClickFallback: r }) => {
	let [i, a] = A(!1), o = k(null);
	T(() => {
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
	return /* @__PURE__ */ I(ma, {
		ref: o,
		children: [/* @__PURE__ */ I(da, {
			type: "button",
			onClick: () => {
				s ? a((e) => !e) : r?.();
			},
			"aria-label": "Choose bet denomination",
			children: [/* @__PURE__ */ F(fa, { children: c?.logoUrl ? /* @__PURE__ */ F("img", {
				src: c.logoUrl,
				alt: e,
				loading: "lazy",
				decoding: "async"
			}) : e }), /* @__PURE__ */ F(pa, { children: /* @__PURE__ */ F(Gi, {}) })]
		}), s && i ? /* @__PURE__ */ F(ha, {
			role: "menu",
			children: t.map((t) => /* @__PURE__ */ I(ga, {
				type: "button",
				role: "menuitemradio",
				"aria-checked": t.code === e,
				$selected: t.code === e,
				onClick: () => {
					n?.(t.code), a(!1);
				},
				children: [/* @__PURE__ */ F(_a, {
					$color: t.color,
					children: t.logoUrl ? /* @__PURE__ */ F("img", {
						src: t.logoUrl,
						alt: t.code,
						loading: "lazy",
						decoding: "async"
					}) : t.code.slice(0, 1)
				}), t.code]
			}, t.code))
		}) : null]
	});
}, $a = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, betError: c, leverage: l, onLeverageChange: u, maxLeverage: d = Mi, presets: f = ji, quoteAsset: p, onQuoteAssetClick: m, assetOptions: h, onAssetChange: g, fundBalanceText: y, onTopUpFund: b, onPercentClick: S, estimatedEntry: C, liqIfLong: w, marginRequired: T, openingFee: E, canSubmit: D, isSubmittingUp: O = !1, isSubmittingDown: k = !1, onUp: A, onDown: j, onDeposit: M, onWithdraw: N, unrealizedPnl: P }) => {
	let ee = Math.min(100, Math.max(0, l / d * 100)), L = Fi(l, d), R = Li(l, d), z = Ri(l, d), B = O || k, te = !D || B, V = !D || B, { targetRef: ne, tooltip: H } = v(Vi(L), { placement: "top" }), U = x.useRef(null), W = x.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.currentTarget, n = U.current;
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
	return /* @__PURE__ */ I(Ji, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ F(Yi, { children: /* @__PURE__ */ I(Qi, { children: [/* @__PURE__ */ I($i, { children: [/* @__PURE__ */ I(ea, { children: [
			/* @__PURE__ */ I(ta, { children: [/* @__PURE__ */ F(na, { children: "My Perp Fund" }), /* @__PURE__ */ I(ra, {
				type: "button",
				onClick: b,
				"aria-label": "Top up fund",
				children: [
					/* @__PURE__ */ F("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ F(qi, {})
					}),
					/* @__PURE__ */ F(ia, { children: y }),
					/* @__PURE__ */ F("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text, #280D5F)"
						},
						children: /* @__PURE__ */ F(Ki, {})
					})
				]
			})] }),
			/* @__PURE__ */ I(aa, { children: [/* @__PURE__ */ I(oa, { children: [/* @__PURE__ */ F(ca, { children: "My Bet" }), /* @__PURE__ */ I(la, { children: [/* @__PURE__ */ F(ua, {
				type: "number",
				inputMode: "decimal",
				value: o,
				onChange: (e) => s(e.target.value),
				"aria-label": "Bet amount",
				placeholder: "0"
			}), /* @__PURE__ */ F(Qa, {
				selected: p,
				options: h,
				onSelect: g,
				onClickFallback: m
			})] })] }), c ? /* @__PURE__ */ F(sa, {
				role: "alert",
				children: c
			}) : null] }),
			/* @__PURE__ */ I(va, { children: [
				/* @__PURE__ */ F(ya, {
					type: "button",
					onClick: () => S?.(.25),
					children: "25%"
				}),
				/* @__PURE__ */ F(ba, {}),
				/* @__PURE__ */ F(ya, {
					type: "button",
					onClick: () => S?.(.5),
					children: "50%"
				}),
				/* @__PURE__ */ F(ba, {}),
				/* @__PURE__ */ F(ya, {
					type: "button",
					onClick: () => S?.(1),
					children: "MAX"
				})
			] })
		] }), /* @__PURE__ */ I(ea, { children: [
			/* @__PURE__ */ F(na, { children: "Leverage" }),
			/* @__PURE__ */ I(xa, { children: [/* @__PURE__ */ I(Sa, { children: [l, "x"] }), /* @__PURE__ */ I(Ta, {
				$zone: L,
				children: [
					Bi(L) ? /* @__PURE__ */ F(Ea, {
						as: "span",
						"aria-hidden": !0,
						children: Bi(L)
					}) : null,
					/* @__PURE__ */ F(Ea, { children: zi(L) }),
					/* @__PURE__ */ F(Da, {
						ref: ne,
						"aria-label": `${zi(L)} explanation`,
						children: /* @__PURE__ */ F(Wi, {})
					}),
					H
				]
			})] }),
			/* @__PURE__ */ I(Oa, { children: [/* @__PURE__ */ I(ka, {
				ref: U,
				$fillPct: ee,
				$zone: L,
				"aria-hidden": !0,
				children: [/* @__PURE__ */ F(Pa, {
					type: "range",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Number(e.target.value)),
					"aria-label": "Leverage"
				}), /* @__PURE__ */ F(Aa, {
					$fillPct: ee,
					$variant: R ? "triple" : z ? "double" : "single",
					onPointerDown: W,
					children: F(R ? Na : z ? Ma : ja, {})
				})]
			}), /* @__PURE__ */ I(Fa, {
				role: "tablist",
				children: [/* @__PURE__ */ I(La, { children: [/* @__PURE__ */ F(Ra, {
					type: "number",
					min: 1,
					max: d,
					value: l,
					onChange: (e) => u(Math.max(1, Math.min(d, Number(e.target.value) || 1))),
					"aria-label": "Custom leverage"
				}), /* @__PURE__ */ F(za, { children: "%" })] }), f.map((e) => /* @__PURE__ */ I(Ia, {
					type: "button",
					role: "tab",
					"aria-selected": l === e,
					$active: l === e,
					onClick: () => u(e),
					children: [e, "x"]
				}, e))]
			})] })
		] })] }), /* @__PURE__ */ I(Xi, { children: [o && o !== "0" ? /* @__PURE__ */ I(Ba, { children: [
			/* @__PURE__ */ I(Va, { children: [/* @__PURE__ */ F(Ha, { children: "Estimated Entry" }), /* @__PURE__ */ F(Ua, { children: C })] }),
			/* @__PURE__ */ I(Va, { children: [/* @__PURE__ */ F(Ha, { children: "Liquidation if long" }), /* @__PURE__ */ F(Ua, {
				$danger: !0,
				children: w
			})] }),
			/* @__PURE__ */ I(Va, { children: [/* @__PURE__ */ F(Ha, { children: "Margin required" }), /* @__PURE__ */ F(Ua, { children: T })] }),
			/* @__PURE__ */ I(Va, { children: [/* @__PURE__ */ F(Ha, { children: "Opening fee" }), /* @__PURE__ */ F(Ua, { children: E })] })
		] }) : null, /* @__PURE__ */ I(Zi, { children: [/* @__PURE__ */ F(Wa, {
			type: "button",
			$variant: "up",
			disabled: te,
			onClick: A,
			"aria-busy": O,
			children: /* @__PURE__ */ I(Ga, { children: [/* @__PURE__ */ F(Hi, {}), O ? "..." : "UP"] })
		}), /* @__PURE__ */ F(Wa, {
			type: "button",
			$variant: "down",
			disabled: V,
			onClick: j,
			"aria-busy": k,
			children: /* @__PURE__ */ I(Ga, { children: [/* @__PURE__ */ F(Ui, {}), k ? "..." : "DOWN"] })
		})] })] })] }) }), /* @__PURE__ */ I(Ja, { children: [/* @__PURE__ */ I(Ka, { children: [/* @__PURE__ */ F(qa, {
			$variant: "primary",
			onClick: M,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ F(qa, {
			$variant: "secondary",
			onClick: N,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ I(Ya, { children: [/* @__PURE__ */ I(Xa, { children: ["Unrealized PnL ", /* @__PURE__ */ F(_, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ F(Za, { children: P })] })] })]
	});
}, eo = j.div`
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
`, to = j.button`
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
`, no = j.span`
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
`, ro = j.span`
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
j.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`;
var io = j.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, ao = j.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, oo = j.span`
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
`, so = j.span`
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
`, co = j.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, lo = j.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, uo = j.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, fo = j.span`
  display: flex;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  background: ${({ $positive: e }) => e ? "#EAFBF7" : "#FFF0F9"};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, po = j.span`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive: e }) => e ? "#129E7D" : "#ED4B9E"};
`, mo = j.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
`, ho = j(y)`
  align-items: center;
  gap: 24px;
  height: 56px;
  flex-shrink: 0;
`, go = j.span`
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
`, _o = j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`, vo = j.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, yo = j.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, bo = () => /* @__PURE__ */ F("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", {
		d: "M1.90301 9.83956C1.65374 9.83956 1.47213 9.73331 1.35818 9.52081C1.24423 9.30831 1.25374 9.0988 1.3867 8.89228L5.49051 2.73574C5.61516 2.5553 5.78491 2.46509 5.99977 2.46509C6.21462 2.46509 6.38437 2.5553 6.50901 2.73574L10.6128 8.89228C10.7458 9.0988 10.7553 9.30831 10.6414 9.52081C10.5274 9.73331 10.3458 9.83956 10.0965 9.83956H1.90301Z",
		fill: "currentColor"
	})
}), xo = () => /* @__PURE__ */ F("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", {
		d: "M1.90301 2.16044C1.65374 2.16044 1.47213 2.26669 1.35818 2.47919C1.24423 2.69169 1.25374 2.9012 1.3867 3.10772L5.49051 9.26426C5.61516 9.4447 5.78491 9.53491 5.99977 9.53491C6.21462 9.53491 6.38437 9.4447 6.50901 9.26426L10.6128 3.10772C10.7458 2.9012 10.7553 2.69169 10.6414 2.47919C10.5274 2.26669 10.3458 2.16044 10.0965 2.16044H1.90301Z",
		fill: "currentColor"
	})
}), So = () => /* @__PURE__ */ F("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ F("path", {
		d: "M7.25878 9.75835L9.41712 11.9167C9.74212 12.2417 10.2671 12.2417 10.5921 11.9167L12.7504 9.75835C13.2754 9.23335 12.9004 8.33335 12.1588 8.33335H7.84212C7.10045 8.33335 6.73378 9.23335 7.25878 9.75835Z",
		fill: "currentColor"
	})
}), Co = j.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`, wo = j.div`
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
`, To = j.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`, Eo = j.button`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: Kanit;
  font-size: 16px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, Do = j.label`
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
`, Oo = j.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: Kanit;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  &::placeholder { color: ${({ theme: e }) => e.colors.textSubtle}; }
`, ko = j.div`
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr 1fr;
  align-items: center;
  align-self: stretch;
  row-gap: 4px;
`, Ao = j.div`
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
`, jo = j.button`
  display: contents;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
`, Mo = j.div`
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  ${jo}:hover & { background: ${({ theme: e }) => e.colors.cardSecondary}; }
`, No = j(Mo)`
  padding-left: 8px;
  padding-right: 0;
  color: #F0B90B;
`, Po = j(Mo)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`, Fo = j.span`
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
`, Io = j(Mo)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`, Lo = j.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e, $up: t }) => t ? e.colors.success : e.colors.failure};
  font-weight: 600;
`, Ro = [
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
], zo = ({ isOpen: e, onClose: t }) => e ? /* @__PURE__ */ F(Co, {
	onClick: t,
	children: /* @__PURE__ */ I(wo, {
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ I(To, { children: [/* @__PURE__ */ F(Eo, {
				type: "button",
				$active: !0,
				children: "Favorites"
			}), /* @__PURE__ */ F(Eo, {
				type: "button",
				children: "All markets"
			})] }),
			/* @__PURE__ */ I(Do, { children: [/* @__PURE__ */ F("svg", {
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": !0,
				children: /* @__PURE__ */ F("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
			}), /* @__PURE__ */ F(Oo, {
				type: "text",
				placeholder: "All tokens"
			})] }),
			/* @__PURE__ */ I(ko, {
				role: "table",
				children: [
					/* @__PURE__ */ F(Ao, { children: "SYMBOLS" }),
					/* @__PURE__ */ F(Ao, {}),
					/* @__PURE__ */ F(Ao, { children: "LAST PRICE" }),
					/* @__PURE__ */ F(Ao, { children: "1D CHANGE" }),
					/* @__PURE__ */ F(Ao, { children: "1D VOLUME (USDT)" }),
					Ro.map((e) => /* @__PURE__ */ I(jo, {
						type: "button",
						children: [
							/* @__PURE__ */ F(No, { children: "★" }),
							/* @__PURE__ */ I(Po, { children: [/* @__PURE__ */ F(Fo, {
								$color: e.color,
								children: e.symbol.slice(0, 1)
							}), /* @__PURE__ */ F("span", { children: e.symbol })] }),
							/* @__PURE__ */ F(Io, { children: e.lastPrice }),
							/* @__PURE__ */ F(Io, { children: /* @__PURE__ */ I(Lo, {
								$up: e.change >= 0,
								children: [
									e.change >= 0 ? "▲" : "▼",
									" ",
									Math.abs(e.change).toFixed(1),
									"%"
								]
							}) }),
							/* @__PURE__ */ F(Io, { children: e.volume })
						]
					}, e.symbol))
				]
			})
		]
	})
}) : null, Bo = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c, renderTokenIcon: l }) => {
	let u = r >= 0, d = l?.(), f = k(null), p = k(null), [m, h] = A(!1), [g, _] = A(!1);
	return T(() => {
		let e = f.current, t = p.current;
		if (!e || !t) return;
		let n = () => h(t.scrollWidth > e.clientWidth + 1);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), r.observe(t), () => r.disconnect();
	}, []), /* @__PURE__ */ I(eo, { children: [
		/* @__PURE__ */ I(to, {
			type: "button",
			onClick: () => {
				c?.(), _(!0);
			},
			"aria-label": `Change market · ${t}`,
			children: [d == null ? /* @__PURE__ */ F(no, { children: e }) : /* @__PURE__ */ F(ro, { children: d }), /* @__PURE__ */ I(io, { children: [/* @__PURE__ */ F(ao, { children: /* @__PURE__ */ I(oo, { children: [/* @__PURE__ */ F(so, { children: t }), /* @__PURE__ */ F(co, {
				"aria-hidden": !0,
				children: /* @__PURE__ */ F(So, {})
			})] }) }), /* @__PURE__ */ I(lo, { children: [/* @__PURE__ */ F(uo, { children: n }), /* @__PURE__ */ I(fo, {
				$positive: u,
				children: [
					/* @__PURE__ */ F(po, {
						$positive: u,
						children: F(u ? bo : xo, {})
					}),
					r.toFixed(2),
					"%"
				]
			})] })] })]
		}),
		/* @__PURE__ */ I(mo, {
			ref: f,
			children: [/* @__PURE__ */ I(ho, {
				ref: p,
				children: [
					/* @__PURE__ */ I(_o, { children: [/* @__PURE__ */ F(vo, { children: "24h Volume" }), /* @__PURE__ */ F(yo, { children: i })] }),
					/* @__PURE__ */ I(_o, { children: [/* @__PURE__ */ F(vo, { children: "Open Interest" }), /* @__PURE__ */ F(yo, { children: a })] }),
					/* @__PURE__ */ I(_o, { children: [/* @__PURE__ */ F(vo, { children: "Funding Rate" }), /* @__PURE__ */ F(yo, { children: o })] }),
					/* @__PURE__ */ I(_o, { children: [/* @__PURE__ */ F(vo, { children: "Next Funding" }), /* @__PURE__ */ F(yo, { children: s })] })
				]
			}), /* @__PURE__ */ F(go, {
				$visible: m,
				"aria-hidden": !0,
				children: /* @__PURE__ */ F("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					children: /* @__PURE__ */ F("path", { d: "M7.05 14.95 12 10 7.05 5.05 8.46 3.64 14.83 10l-6.37 6.36z" })
				})
			})]
		}),
		/* @__PURE__ */ F(zo, {
			isOpen: g,
			onClose: () => _(!1)
		})
	] });
}, Vo = j(L)`
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
`, Ho = j.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Uo = j.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Wo = j.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Go = j.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, Ko = j.div`
  position: relative;
  overflow: visible;
`, qo = j.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, Jo = j.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, Yo = j.span`
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
`, Xo = 1e3, Zo = 360, Qo = 20, $o = 70;
function es(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * Xo), i = e.map((e) => Qo + (1 - (e.price - t) / n) * (Zo - Qo - $o)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${Xo} ${Zo} L 0 ${Zo} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var ts = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", ns = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", rs = 200, is = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = N(), c = `simple-chart-fill-${E().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = O(() => es(r), [r]), d = u?.line ?? ts, f = u?.area ?? ns, p = u?.endY ?? rs;
	return /* @__PURE__ */ I(Vo, { children: [/* @__PURE__ */ F(Ho, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ F(Uo, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ I(Wo, { children: [/* @__PURE__ */ I(Go, { children: [/* @__PURE__ */ I(Ko, { children: [/* @__PURE__ */ I("svg", {
		viewBox: `0 0 ${Xo} ${Zo}`,
		preserveAspectRatio: "none",
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		},
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ F("defs", { children: /* @__PURE__ */ I("linearGradient", {
				id: c,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ F("stop", {
					offset: "0%",
					stopColor: l,
					stopOpacity: "0.30"
				}), /* @__PURE__ */ F("stop", {
					offset: "100%",
					stopColor: l,
					stopOpacity: "0.02"
				})]
			}) }),
			/* @__PURE__ */ F("path", {
				d: f,
				fill: `url(#${c})`
			}),
			/* @__PURE__ */ F("path", {
				d,
				fill: "none",
				stroke: l,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ F("line", {
				x1: "0",
				y1: p,
				x2: Xo - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ F(Yo, {
		style: {
			right: -8,
			top: `calc(${p}/${Zo} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ F(qo, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ F("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ F(Jo, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ F("span", { children: e }, `${e}-${t}`))
	})] })] });
}, as = j(L)`
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
`, os = j.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, ss = j.button`
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
`, cs = j.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`, ls = j.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Q = j.div`
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
`, $ = j.div`
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
`, us = j($)`
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
`, ds = j.span`
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
`, fs = j.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`, ps = j.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, ms = j.span`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, hs = j($)`
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
`, gs = j($)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "var(--pcs-colors-positive60, #129E7D)" : e === "negative" ? t.colors.failure : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, _s = j($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, vs = j.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, ys = j.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, bs = j.button`
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
`, xs = j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, Ss = j.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, Cs = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, ws = (e) => Cs[e.toUpperCase()] ?? "#7A6EAA", Ts = (e) => e === "up" ? "↑" : "↓", Es = (e) => e === "up" ? "Up/Long" : "Down/Short", Ds = () => /* @__PURE__ */ F("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ F("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), Os = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ I(as, { children: [
	/* @__PURE__ */ I(os, {
		role: "tablist",
		children: [
			/* @__PURE__ */ F(ss, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ F(ss, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ F(ss, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ F(xs, { children: "No open positions" }) : /* @__PURE__ */ I(cs, {
		role: "table",
		children: [
			/* @__PURE__ */ F(Q, { children: "Token" }),
			/* @__PURE__ */ F(Q, { children: "Direction" }),
			/* @__PURE__ */ F(Q, { children: "Unrealized PnL" }),
			/* @__PURE__ */ F(Q, { children: "Entry Price" }),
			/* @__PURE__ */ F(Q, { children: "Liq. Price" }),
			/* @__PURE__ */ F(Q, { children: "Distance to Liq" }),
			/* @__PURE__ */ F(Q, {}),
			n.map((e) => /* @__PURE__ */ I(x.Fragment, { children: [
				/* @__PURE__ */ I(us, { children: [o?.(e) ?? /* @__PURE__ */ F(ds, {
					$color: e.iconColor ?? ws(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ I(fs, { children: [/* @__PURE__ */ F(ps, { children: e.symbol }), /* @__PURE__ */ F(ms, { children: e.chainLabel })] })] }),
				/* @__PURE__ */ I(hs, {
					$direction: e.direction,
					children: [
						Ts(e.direction),
						" ",
						Es(e.direction)
					]
				}),
				/* @__PURE__ */ F(gs, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ F($, { children: e.entryPrice }),
				/* @__PURE__ */ F($, { children: e.liqPrice }),
				/* @__PURE__ */ I(_s, { children: [/* @__PURE__ */ F(vs, { children: /* @__PURE__ */ F(ys, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ F("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ F(bs, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ F(Ds, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ F(xs, { children: "No open orders" }) : /* @__PURE__ */ I(ls, {
		role: "table",
		children: [
			/* @__PURE__ */ F(Q, { children: "Symbol" }),
			/* @__PURE__ */ F(Q, { children: "Side" }),
			/* @__PURE__ */ F(Q, { children: "Type" }),
			/* @__PURE__ */ F(Q, { children: "Price" }),
			/* @__PURE__ */ F(Q, { children: "Size" }),
			/* @__PURE__ */ F(Q, { children: "Filled" }),
			/* @__PURE__ */ F(Q, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ I(x.Fragment, { children: [
				/* @__PURE__ */ F($, { children: e.symbol }),
				/* @__PURE__ */ F($, { children: /* @__PURE__ */ F(Ss, {
					$side: e.side,
					children: e.side
				}) }),
				/* @__PURE__ */ F($, { children: e.type }),
				/* @__PURE__ */ F($, { children: e.price }),
				/* @__PURE__ */ F($, { children: e.origQty }),
				/* @__PURE__ */ F($, { children: e.executedQty }),
				/* @__PURE__ */ F($, { children: e.status })
			] }, e.id))
		]
	})),
	e === "history" && /* @__PURE__ */ F(xs, { children: "No transaction history" })
] });
//#endregion
export { oe as AccountPanel, tr as BookTradesPanel, Xn as ChartPanel, Oi as DepositModal, Ai as EnableTradingModal, de as LeverageModal, _t as MarketsDropdown, bn as OrderBook, Je as OrderConfirmModal, oi as OrderForm, we as PerpsErrorMessage, L as PerpsPanel, zn as PositionsPanel, be as RecentTrades, $a as SimpleBetPanel, is as SimpleChartCard, Os as SimplePositionsCard, Bo as SimpleTickerCard, Vt as SymbolHeader, qn as TpSlModal, B as UnderlineTab, te as UnderlineTabs, Be as WithdrawModal };

//# sourceMappingURL=widgets.js.map