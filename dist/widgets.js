import { $n as e, C as t, Gt as n, L as r, M as i, O as a, R as o, S as s, Wn as c, Y as l, _ as u, k as d, r as f, t as p, tt as m, w as h, x as g, xi as _, y as v, z as y } from "./chunks/Modal-Vr0QDvCZ.js";
import b, { Children as x, cloneElement as S, useCallback as C, useEffect as w, useId as T, useLayoutEffect as E, useMemo as D, useRef as O, useState as k } from "react";
import A, { useTheme as j } from "styled-components";
import { Fragment as M, jsx as N, jsxs as P } from "react/jsx-runtime";
import { createPortal as F } from "react-dom";
//#region src/widgets/primitives.tsx
var I = A(r)`
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
`, L = A.div`
  display: flex;
  gap: ${({ $fullWidth: e }) => e ? "0" : "16px"};
  padding: ${({ $fullWidth: e }) => e ? "0" : "0 12px"};
  border-bottom: ${({ $fullWidth: e }) => e ? "0" : "1px solid"};
  border-bottom-color: ${({ theme: e }) => e.colors.cardBorder};
`, R = A.button`
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
`, z = ({ children: e, isActive: t = !1, onClick: n, fullWidth: r = !1 }) => /* @__PURE__ */ N(R, {
	$active: t,
	$fullWidth: r,
	onClick: n,
	type: "button",
	children: e
}), B = ({ activeIndex: e, onItemClick: t, children: n, fullWidth: r = !1 }) => /* @__PURE__ */ N(L, {
	$fullWidth: r,
	children: x.map(n, (n, i) => !n || typeof n != "object" ? n : S(n, {
		isActive: i === e,
		onClick: () => t(i),
		fullWidth: r
	}))
}), V = A(I)`
  flex: 1;
  & > div {
    padding: 12px;
    gap: 12px;
  }
`, ee = A(i).attrs({ fontSize: "16px" })`
  line-height: 1.3;
  color: ${({ theme: e }) => e.colors.text};
`, H = A(g)`
  justify-content: space-between;
  align-items: center;
`, U = A(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, W = A(i).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
`, te = A.button`
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
`, ne = A(g)`
  flex-direction: column;
  gap: 8px;
`, re = A(W)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? t.colors.success : e === "negative" ? t.colors.failure : t.colors.text};
`, G = (e) => e, ie = ({ walletDisplay: e, state: n, canDeposit: r = !0, canWithdraw: a = !0, onDeposit: o, onWithdraw: s, onEnableTrading: c, t: l = G }) => /* @__PURE__ */ P(V, { children: [
	/* @__PURE__ */ P(g, {
		style: { gap: 8 },
		children: [/* @__PURE__ */ N(te, {
			$variant: "primary",
			onClick: o,
			disabled: !r,
			children: l("Deposit")
		}), /* @__PURE__ */ N(te, {
			$variant: "secondary",
			onClick: s,
			disabled: !a,
			children: l("Withdraw")
		})]
	}),
	n.kind === "needs-deposit" && /* @__PURE__ */ N(t, {
		variant: "warning",
		children: /* @__PURE__ */ P(g, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ N(i, {
				fontSize: "14px",
				bold: !0,
				children: l("Deposit to get started")
			}), /* @__PURE__ */ N(h, {
				fontSize: "12px",
				children: l("Aster activates your account on your first deposit. Once it lands you'll be able to enable trading and see your balance here.")
			})]
		})
	}),
	n.kind === "needs-trading" && /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ N(t, {
		variant: "warning",
		children: /* @__PURE__ */ P(g, {
			flexDirection: "column",
			style: { gap: 4 },
			children: [/* @__PURE__ */ N(i, {
				fontSize: "14px",
				bold: !0,
				children: l("Enable Trading to view your Aster balance")
			}), /* @__PURE__ */ N(h, {
				fontSize: "12px",
				children: l("Already deposited? Your funds are safe on Aster — we just can't display them until you sign the one-time trading authorization.")
			})]
		})
	}), /* @__PURE__ */ N(y, {
		onClick: c,
		scale: "sm",
		variant: "primary",
		children: l("Enable Trading")
	})] }),
	n.kind === "ready" && /* @__PURE__ */ P(ne, { children: [
		/* @__PURE__ */ N(ee, { children: l("Account Equity") }),
		/* @__PURE__ */ P(H, { children: [/* @__PURE__ */ N(U, { children: l("Wallet") }), /* @__PURE__ */ N(W, { children: e ?? "—" })] }),
		/* @__PURE__ */ P(H, { children: [/* @__PURE__ */ N(U, { children: l("Equity") }), /* @__PURE__ */ N(W, { children: n.equity || "—" })] }),
		/* @__PURE__ */ P(H, { children: [/* @__PURE__ */ N(U, { children: l("Available") }), /* @__PURE__ */ N(W, { children: n.available || "—" })] }),
		/* @__PURE__ */ P(H, { children: [/* @__PURE__ */ N(U, { children: l("Unrealized PnL") }), /* @__PURE__ */ N(re, {
			$sign: n.pnlSign,
			children: n.unrealizedPnl || "—"
		})] }),
		/* @__PURE__ */ P(H, { children: [/* @__PURE__ */ N(U, { children: l("Margin mode") }), /* @__PURE__ */ N(W, { children: n.marginMode ?? l("Cross") })] })
	] })
] }), ae = A(g)`
  gap: 10px;
  align-items: stretch;
`, oe = A(y).attrs({
	variant: "tertiary",
	scale: "md"
})`
  width: 44px;
  font-size: 20px;
  font-weight: 700;
`, se = A(g)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme: e }) => e.colors.input};
  border-radius: 12px;
  height: 44px;
  font-size: 18px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
`, ce = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, le = ({ isOpen: e, symbol: t, currentLeverage: n, minLeverage: r = 1, maxLeverage: a = 100, availableBalance: o, onConfirm: c, onClose: l, isSubmitting: u = !1, errorSlot: d, t: m = ce }) => {
	let [h, _] = k(n);
	w(() => {
		e && _(n);
	}, [e, n]);
	let b = (e) => Math.max(r, Math.min(a, Math.round(e))), x = o * h;
	return /* @__PURE__ */ N(f, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ N(p, {
			title: m("%symbol% Adjust Leverage", { symbol: t }),
			onDismiss: l,
			children: /* @__PURE__ */ P(g, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ P(ae, { children: [
						/* @__PURE__ */ N(oe, {
							onClick: () => _((e) => b(e - 1)),
							disabled: h <= r,
							"aria-label": "minus",
							children: "−"
						}),
						/* @__PURE__ */ P(se, { children: [h, "X"] }),
						/* @__PURE__ */ N(oe, {
							onClick: () => _((e) => b(e + 1)),
							disabled: h >= a,
							"aria-label": "plus",
							children: "+"
						})
					] }),
					/* @__PURE__ */ N(v, {
						variant: "dotted",
						name: "perp-leverage",
						min: 0,
						max: a,
						value: h,
						onValueChanged: (e) => _(b(e)),
						width: "100%"
					}),
					/* @__PURE__ */ P(s, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: m("Maximum position at current leverage:")
					}), /* @__PURE__ */ N(i, {
						fontSize: "18px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(x) && x > 0 ? `${x.toLocaleString(void 0, { maximumFractionDigits: 0 })} USDT` : "—"
					})] }),
					/* @__PURE__ */ N(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: m("Please note that setting higher leverage increases the risk of liquidation.")
					}),
					d,
					/* @__PURE__ */ N(y, {
						scale: "md",
						disabled: u,
						onClick: () => c(h),
						children: m(u ? "Confirming…" : "Confirm")
					})
				]
			})
		})
	});
}, ue = A.div`
  padding: 8px 10px 4px 10px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme: e }) => e.colors.text};
`, de = A.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, fe = A.div`
  overflow-y: auto;
  min-height: 0;
`, pe = A.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2px 10px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
`, me = A.span`
  color: ${({ $maker: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, he = A.span`
  text-align: right;
`, ge = A(he)`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, _e = (e) => {
	let t = new Date(e);
	return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}:${String(t.getSeconds()).padStart(2, "0")}`;
}, ve = ({ trades: e, title: t, labels: n, hidden: r, embedded: i }) => {
	let a = D(() => [...e].sort((e, t) => t.time - e.time), [e]), o = n?.price ?? "Price", s = n?.size ?? "Size", c = n?.time ?? "Time", l = /* @__PURE__ */ P(M, { children: [
		t && /* @__PURE__ */ N(ue, { children: t }),
		/* @__PURE__ */ P(de, { children: [
			/* @__PURE__ */ N("span", { children: o }),
			/* @__PURE__ */ N("span", {
				style: { textAlign: "right" },
				children: s
			}),
			/* @__PURE__ */ N("span", {
				style: { textAlign: "right" },
				children: c
			})
		] }),
		/* @__PURE__ */ N(fe, { children: a.map((e) => /* @__PURE__ */ P(pe, { children: [
			/* @__PURE__ */ N(me, {
				$maker: !!e.isBuyerMaker,
				children: e.price
			}),
			/* @__PURE__ */ N(he, { children: e.size }),
			/* @__PURE__ */ N(ge, { children: _e(e.time) })
		] }, e.id)) })
	] });
	return i ? /* @__PURE__ */ N("div", {
		style: r ? { display: "none" } : { display: "contents" },
		children: l
	}) : /* @__PURE__ */ N(I, {
		style: r ? { display: "none" } : void 0,
		children: l
	});
}, ye = A(s)`
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
`, be = A(y).attrs({
	variant: "text",
	scale: "xs"
})`
  align-self: flex-start;
  margin-top: 6px;
  padding: 0;
  height: auto;
  font-size: 11px;
`, xe = (e) => e, Se = ({ variant: e, title: n, message: r, details: a, t: o = xe }) => {
	let [s, c] = k(!1);
	return n ? /* @__PURE__ */ N(t, {
		variant: e,
		children: /* @__PURE__ */ P(g, {
			flexDirection: "column",
			children: [
				/* @__PURE__ */ N(h, { children: /* @__PURE__ */ N(i, {
					fontSize: "13px",
					bold: !0,
					children: n
				}) }),
				/* @__PURE__ */ N(h, { children: /* @__PURE__ */ N(i, {
					fontSize: "12px",
					children: r
				}) }),
				a && /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ N(be, {
					onClick: () => c((e) => !e),
					children: o(s ? "Hide details" : "Show details")
				}), s && /* @__PURE__ */ N(ye, { children: a })] })
			]
		})
	}) : /* @__PURE__ */ N(t, {
		variant: e,
		children: /* @__PURE__ */ N(h, { children: r })
	});
}, Ce = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, we = A(g)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, Te = A(i).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, Ee = A(g)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, De = A.button`
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
`, Oe = A(g)`
  flex-direction: column;
`, ke = A.div`
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
`, Ae = A(g)`
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
`, je = A.input`
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
`, Me = A(g)`
  gap: 6px;
  margin-top: 4px;
`, Ne = A.button`
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
`, Pe = A.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Fe = A(g)`
  justify-content: space-between;
  align-items: center;
`, Ie = A(g)`
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 12px;
  border: 1px dashed ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
`, Le = [
	25,
	50,
	75
], Re = ({ isOpen: e, step: t, isLoadingAssets: n = !1, assets: r, selectedAssetId: a, onSelectAsset: o, selectedAsset: c, destinationAddress: l, destinationChainName: u = "BSC", feeText: d, amount: h, onAmountChange: _, onPercentClick: v, onBack: b, onWithdraw: x, onClose: S, isSubmitting: C = !1, canSubmit: w = !0, errorSlot: T, t: E = Ce, renderTokenIcon: D }) => {
	let O = (e, t = 24) => D ? D(e, t) : /* @__PURE__ */ N(ke, {
		$size: t,
		children: e.symbol.slice(0, 1)
	});
	return /* @__PURE__ */ N(f, {
		isOpen: e,
		onDismiss: S,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ N(p, {
			title: t === "select" ? E("Withdraw from Aster") : E("Withdraw %asset%", { asset: c?.symbol ?? "" }),
			onDismiss: S,
			children: /* @__PURE__ */ P(we, { children: [
				t === "amount" && /* @__PURE__ */ N(g, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ N(y, {
						scale: "sm",
						variant: "text",
						onClick: b,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ N(m, { width: "18px" }),
						children: E("Back")
					})
				}),
				t === "select" && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P(s, { children: [/* @__PURE__ */ N(Te, {
						color: "textSubtle",
						children: E("Select asset")
					}), /* @__PURE__ */ N(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: E("Pick an asset to withdraw from your Aster perp account.")
					})] }),
					n && /* @__PURE__ */ N(i, {
						fontSize: "12px",
						children: E("Loading assets...")
					}),
					!n && r.length === 0 && /* @__PURE__ */ P(Ie, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						bold: !0,
						children: E("Nothing to withdraw yet")
					}), /* @__PURE__ */ N(i, {
						fontSize: "12px",
						color: "textSubtle",
						textAlign: "center",
						children: E("Your Aster perp account has no withdrawable balance. Open positions or pending orders may be holding margin.")
					})] }),
					r.length > 0 && /* @__PURE__ */ N(Ee, { children: r.map((e) => /* @__PURE__ */ P(De, {
						$selected: a === e.id,
						onClick: () => o(e.id),
						disabled: !e.hasBalance,
						title: e.displayName,
						children: [/* @__PURE__ */ P(g, {
							alignItems: "center",
							style: { gap: 12 },
							children: [O(e, 32), /* @__PURE__ */ P(Oe, { children: [/* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ N(i, {
								fontSize: "11px",
								color: "textSubtle",
								children: E("Withdrawable")
							})] })]
						}), /* @__PURE__ */ P(g, {
							flexDirection: "column",
							alignItems: "flex-end",
							children: [/* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								style: { fontVariantNumeric: "tabular-nums" },
								children: e.withdrawableText
							}), /* @__PURE__ */ N(i, {
								fontSize: "11px",
								color: "textSubtle",
								children: e.symbol
							})]
						})]
					}, e.id)) })
				] }),
				t === "amount" && c && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P(Ae, { children: [/* @__PURE__ */ P(g, {
						alignItems: "center",
						style: { gap: 12 },
						children: [O(c, 40), /* @__PURE__ */ P(g, {
							flexDirection: "column",
							children: [/* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								children: c.displayName || c.symbol
							}), /* @__PURE__ */ N(i, {
								fontSize: "12px",
								color: "textSubtle",
								children: E("Withdrawable: %amt% %sym%", {
									amt: c.withdrawableText,
									sym: c.symbol
								})
							})]
						})]
					}), /* @__PURE__ */ P(g, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ N(je, {
							value: h,
							onChange: (e) => _(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), v && /* @__PURE__ */ P(Me, { children: [Le.map((e) => /* @__PURE__ */ P(Ne, {
							onClick: () => v(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ N(Ne, {
							onClick: () => v(100),
							children: E("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ P(Pe, { children: [
						/* @__PURE__ */ P(Fe, { children: [/* @__PURE__ */ N(Te, {
							color: "textSubtle",
							children: E("Destination")
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							style: { fontVariantNumeric: "tabular-nums" },
							children: l ?? "—"
						})] }),
						/* @__PURE__ */ P(Fe, { children: [/* @__PURE__ */ N(Te, {
							color: "textSubtle",
							children: E("Network")
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							children: u
						})] }),
						/* @__PURE__ */ P(Fe, { children: [/* @__PURE__ */ N(Te, {
							color: "textSubtle",
							children: E("Token")
						}), /* @__PURE__ */ P(g, {
							alignItems: "center",
							style: { gap: 6 },
							children: [O(c, 16), /* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								children: c.symbol
							})]
						})] }),
						/* @__PURE__ */ P(Fe, { children: [/* @__PURE__ */ N(Te, {
							color: "textSubtle",
							children: E("Fee")
						}), /* @__PURE__ */ P(i, {
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
					/* @__PURE__ */ N(y, {
						onClick: x,
						disabled: !w || !h || C,
						isLoading: C,
						scale: "md",
						children: E(C ? "Withdrawing..." : "Sign & Withdraw")
					}),
					/* @__PURE__ */ N(i, {
						fontSize: "11px",
						color: "textSubtle",
						children: E("You sign a withdrawal request with your main wallet. The agent wallet is never involved.")
					})
				] })
			] })
		})
	});
}, K = A(g)`
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
`, q = A(i).attrs({
	fontSize: "12px",
	color: "textSubtle"
})``, J = A(i).attrs({
	fontSize: "13px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, ze = A(g)`
  align-items: center;
  gap: 6px;
  padding-top: 6px;
`, Be = A.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 800;
`, Ve = A(J)`
  color: ${({ theme: e }) => e.colors.failure};
`, He = A(y)`
  width: 100%;
  background: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  color: ${({ theme: e }) => e.colors.invertedContrast};
`, Ue = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, We = (e) => e ? Number(e).toLocaleString(void 0, { maximumFractionDigits: 4 }) : "—", Ge = (e, t) => {
	switch (e) {
		case "MARKET": return t("Market");
		case "LIMIT": return t("Limit");
		case "STOP": return t("Stop Limit");
		case "STOP_MARKET": return t("Stop Market");
		case "TAKE_PROFIT": return t("Take Profit");
		case "TAKE_PROFIT_MARKET": return t("Take Profit Market");
		default: return e;
	}
}, Ke = ({ isOpen: e, details: t, onConfirm: n, onClose: r, onSkipFutureChange: a, t: o = Ue }) => {
	let [c, l] = k(!1);
	return /* @__PURE__ */ N(f, {
		isOpen: e,
		onDismiss: r,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ N(p, {
			title: o("Confirm Order"),
			onDismiss: r,
			children: /* @__PURE__ */ P(g, {
				flexDirection: "column",
				style: {
					gap: 4,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Symbol") }), /* @__PURE__ */ N(J, { children: t.symbol })] }),
					/* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Side / Type") }), /* @__PURE__ */ P(J, { children: [
						/* @__PURE__ */ N(Be, {
							$side: t.side,
							children: t.side === "BUY" ? o("Buy / Long") : o("Sell / Short")
						}),
						" · ",
						Ge(t.type, o)
					] })] }),
					/* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Size") }), /* @__PURE__ */ P(J, { children: [
						t.quantity,
						" ",
						t.baseAsset
					] })] }),
					t.price && /* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Price") }), /* @__PURE__ */ P(J, { children: [
						We(t.price),
						" ",
						t.quoteAsset
					] })] }),
					t.stopPrice && /* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Trigger Price") }), /* @__PURE__ */ P(J, { children: [
						We(t.stopPrice),
						" ",
						t.quoteAsset
					] })] }),
					/* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Leverage") }), /* @__PURE__ */ P(J, { children: [t.leverage, "x"] })] }),
					/* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Cost") }), /* @__PURE__ */ N(J, { children: t.costUsdt ? `${t.costUsdt.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					/* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Est. Liq. Price") }), /* @__PURE__ */ N(Ve, { children: t.liqPrice ? `${t.liqPrice.toFixed(2)} ${t.quoteAsset}` : "—" })] }),
					t.reduceOnly && /* @__PURE__ */ P(K, { children: [/* @__PURE__ */ N(q, { children: o("Reduce Only") }), /* @__PURE__ */ N(J, { children: o("Yes") })] }),
					/* @__PURE__ */ P(ze, { children: [/* @__PURE__ */ N(d, {
						scale: "sm",
						checked: c,
						onChange: (e) => l(e.target.checked)
					}), /* @__PURE__ */ N(i, {
						fontSize: "12px",
						children: o("Don't show this again")
					})] }),
					/* @__PURE__ */ N(s, {
						mt: "8px",
						children: /* @__PURE__ */ N(He, {
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
}, qe = A.div`
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
`, Je = A(g)`
  gap: 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Ye = A.button`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${({ $active: e, theme: t }) => e ? t.colors.primary : "transparent"};
  margin-bottom: -1px;
  padding: 6px 0;
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`, Xe = A.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 14px;
  padding: 8px 12px;
  margin-bottom: 8px;
`, Ze = A.input`
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
`, Qe = A.div`
  display: grid;
  grid-template-columns: 32px minmax(120px, 2fr) 1fr 1fr 1fr;
  gap: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, $e = A.div`
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`, et = A.button`
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
`, tt = A.button`
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
`, nt = A(g)`
  align-items: center;
  gap: 8px;
  font-weight: 600;
  min-width: 0;
`, rt = A.span`
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
  line-height: 1.4;
`, it = A.span`
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
`, at = A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, ot = A(i)`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  text-align: right;
  color: ${({ $tone: e, theme: t }) => e === "up" ? t.colors.success : e === "down" ? t.colors.failure : t.colors.text};
`, st = A(g)`
  padding: 24px;
  justify-content: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ct = ({ filled: e }) => /* @__PURE__ */ N("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	fill: e ? "currentColor" : "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinejoin: "round",
	strokeLinecap: "round",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
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
}, ft = (e) => e.toUpperCase().replace(/USDT$/, "").replace(/USDC$/, "").replace(/USD$/, "") || e.toUpperCase(), pt = (e) => ft(e).slice(0, 1) || e.slice(0, 1), mt = (e) => e, ht = ({ markets: e, favorites: t, onToggleFavorite: n, onSelect: r, logoForSymbol: a, isLoading: o = !1, t: s = mt }) => {
	let [c, l] = k("all"), [u, d] = k(""), f = D(() => {
		let n = u.trim().toUpperCase(), r = n ? e.filter((e) => e.symbol.toUpperCase().includes(n)) : e;
		return c === "favorites" ? r.filter((e) => t.includes(e.symbol)) : r;
	}, [
		e,
		u,
		c,
		t
	]);
	return /* @__PURE__ */ P(qe, { children: [
		/* @__PURE__ */ P(Je, { children: [/* @__PURE__ */ N(Ye, {
			$active: c === "all",
			onClick: () => l("all"),
			children: s("All Markets")
		}), /* @__PURE__ */ N(Ye, {
			$active: c === "favorites",
			onClick: () => l("favorites"),
			children: s("Favorites")
		})] }),
		/* @__PURE__ */ P(Xe, { children: [/* @__PURE__ */ N(_, {
			width: "16px",
			color: "textSubtle"
		}), /* @__PURE__ */ N(Ze, {
			placeholder: s("All tokens"),
			value: u,
			onChange: (e) => d(e.target.value),
			"aria-label": s("Search markets")
		})] }),
		/* @__PURE__ */ P(Qe, { children: [
			/* @__PURE__ */ N("span", {}),
			/* @__PURE__ */ N("span", { children: s("Symbols") }),
			/* @__PURE__ */ N(ot, {
				as: "span",
				style: { color: "inherit" },
				children: s("Last Price")
			}),
			/* @__PURE__ */ N(ot, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Change")
			}),
			/* @__PURE__ */ N(ot, {
				as: "span",
				style: { color: "inherit" },
				children: s("24h Vol")
			})
		] }),
		/* @__PURE__ */ N($e, {
			role: "listbox",
			children: f.length === 0 ? /* @__PURE__ */ N(st, { children: /* @__PURE__ */ N(i, {
				fontSize: "14px",
				color: "textSubtle",
				children: s(o ? "Loading markets..." : "No markets")
			}) }) : f.map((e) => {
				let i = t.includes(e.symbol), o = Number(e.priceChangePercent), c = a?.(ft(e.symbol));
				return /* @__PURE__ */ P(et, {
					onClick: () => r(e.symbol),
					role: "option",
					children: [
						/* @__PURE__ */ N(tt, {
							$filled: i,
							onClick: (t) => {
								t.stopPropagation(), n(e.symbol);
							},
							"aria-label": s(i ? "Unfavorite" : "Favorite"),
							"aria-pressed": i,
							children: /* @__PURE__ */ N(ct, { filled: i })
						}),
						/* @__PURE__ */ P(nt, { children: [
							/* @__PURE__ */ N(it, { children: c ? /* @__PURE__ */ N(at, {
								src: c,
								alt: ft(e.symbol),
								loading: "lazy",
								onError: (t) => {
									let n = t.currentTarget;
									n.style.display = "none";
									let r = n.parentElement;
									r && !r.textContent && (r.textContent = pt(e.symbol));
								}
							}) : pt(e.symbol) }),
							/* @__PURE__ */ N("span", { children: e.symbol }),
							e.maxLeverage != null && /* @__PURE__ */ P(rt, { children: [e.maxLeverage, "x"] })
						] }),
						/* @__PURE__ */ N(ot, { children: lt(e.lastPrice) }),
						/* @__PURE__ */ N(ot, {
							$tone: o >= 0 ? "up" : "down",
							children: ut(e.priceChangePercent)
						}),
						/* @__PURE__ */ N(ot, { children: dt(e.quoteVolume) })
					]
				}, e.symbol);
			})
		})
	] });
}, gt = A(g)`
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
`, _t = A(g)`
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-bottom-width: 2px;
  border-radius: 16px;
  padding: 7px 8px 9px;
  flex-shrink: 0;
`, vt = A.button`
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
`, yt = A.div`
  position: fixed;
  z-index: 1000;
  width: min(720px, calc(100vw - 32px));
`, bt = A.button`
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
`, xt = A.span`
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
`, St = A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`, Ct = A(i)`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  padding: 0 8px;
  line-height: 1.5;
`;
A.span`
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.tertiary};
  color: ${({ theme: e }) => e.colors.secondary};
  flex-shrink: 0;
`;
var wt = A.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, Tt = A(g)`
  gap: 24px;
  align-items: flex-start;
  flex-wrap: nowrap;
`, Et = A(g)`
  flex-direction: column;
  flex-shrink: 0;
`, Dt = A(i)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textSubtle};
  white-space: nowrap;
  line-height: 1.5;
  ${({ $dashed: e, theme: t }) => e ? `border-bottom: 1px dashed ${t.colors.cardBorder}; align-self: flex-start; cursor: help;` : ""}
`, Ot = A(i)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
`, kt = A(g)`
  align-items: baseline;
  white-space: nowrap;
`, At = A.span`
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 70px;
  color: ${({ $negative: e, theme: t }) => e ? t.colors.failure : t.colors.success};
`, jt = A.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding: 0 2px;
`, Mt = (e, t = 4) => {
	if (!e) return "—";
	let n = Number(e) * 100;
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Nt = (e, t = 2) => {
	if (!e) return "—";
	let n = Number(e);
	return Number.isFinite(n) ? `${n >= 0 ? "+" : ""}${n.toFixed(t)}%` : "—";
}, Pt = (e) => {
	if (!e) return "—";
	let t = Math.max(0, e - Date.now()), n = Math.floor(t / 36e5), r = Math.floor(t % 36e5 / 6e4), i = Math.floor(t % 6e4 / 1e3);
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}, Ft = (e) => {
	if (!e) return "—";
	let t = Number(e);
	return Number.isFinite(t) ? `$${t.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—";
}, It = (e) => (e.split(/[- ]/)[0] ?? e).slice(0, 1) || "?", Lt = () => /* @__PURE__ */ N("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	stroke: "currentColor",
	strokeWidth: "2",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" })
}), Rt = (e) => e, zt = ({ symbol: e, pairLabel: t, logoUrl: r, leverage: i, lastPrice: a, markPrice: o, indexPrice: s, fundingRate: c, nextFundingTime: l, change24h: u, volume24h: d, favorited: f = !1, onToggleFavorite: p, renderMarketsDropdown: m, t: h = Rt }) => {
	let g = j(), [_, v] = k(!1), [y, b] = k(null), x = O(null), S = O(null);
	E(() => {
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
	}, [_]), w(() => {
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
	let T = C(() => v(!1), []), D = Number(c) < 0, A = Number(u) < 0;
	return /* @__PURE__ */ P(gt, {
		"aria-label": `${e} ticker`,
		children: [
			/* @__PURE__ */ P(_t, { children: [p && /* @__PURE__ */ N(bt, {
				onClick: (e) => {
					e.stopPropagation(), p();
				},
				"aria-label": h(f ? "Unfavorite" : "Favorite"),
				"aria-pressed": f,
				children: /* @__PURE__ */ N(Lt, {})
			}), /* @__PURE__ */ P(vt, {
				ref: x,
				"aria-haspopup": "listbox",
				"aria-expanded": _,
				disabled: !m,
				onClick: () => m && v((e) => !e),
				children: [
					/* @__PURE__ */ N(xt, {
						$bg: r ? "transparent" : "linear-gradient(180deg, #F7931A, #E8850C)",
						children: r ? /* @__PURE__ */ N(St, {
							src: r,
							alt: t
						}) : It(t)
					}),
					/* @__PURE__ */ N(Ct, { children: t }),
					/* @__PURE__ */ N(n, {
						width: "16px",
						color: "textSubtle"
					})
				]
			})] }),
			_ && y && typeof document < "u" && m ? F(/* @__PURE__ */ N(yt, {
				ref: S,
				style: {
					top: y.top,
					left: y.left
				},
				children: m(T)
			}), document.body) : null,
			/* @__PURE__ */ N(wt, {
				"aria-label": `Last price: ${a ?? ""}`,
				children: a ?? "—"
			}),
			/* @__PURE__ */ P(Tt, {
				role: "list",
				children: [
					/* @__PURE__ */ P(Et, {
						role: "listitem",
						children: [/* @__PURE__ */ N(Dt, {
							$dashed: !0,
							children: h("Mark")
						}), /* @__PURE__ */ N(Ot, { children: o ?? "—" })]
					}),
					/* @__PURE__ */ P(Et, {
						role: "listitem",
						children: [/* @__PURE__ */ N(Dt, {
							$dashed: !0,
							children: h("Index")
						}), /* @__PURE__ */ N(Ot, { children: s ?? "—" })]
					}),
					/* @__PURE__ */ P(Et, {
						role: "listitem",
						children: [/* @__PURE__ */ N(Dt, {
							$dashed: !0,
							children: h("Funding / Countdown")
						}), /* @__PURE__ */ P(kt, { children: [
							/* @__PURE__ */ N(At, {
								$negative: D,
								children: Mt(c)
							}),
							/* @__PURE__ */ N(jt, { children: "/" }),
							/* @__PURE__ */ N(Ot, {
								as: "span",
								children: Pt(l)
							})
						] })]
					}),
					/* @__PURE__ */ P(Et, {
						role: "listitem",
						children: [/* @__PURE__ */ N(Dt, { children: h("24h Change") }), /* @__PURE__ */ N(Ot, {
							style: { color: u ? A ? g.colors.failure : g.colors.success : void 0 },
							children: Nt(u)
						})]
					}),
					/* @__PURE__ */ P(Et, {
						role: "listitem",
						children: [/* @__PURE__ */ N(Dt, { children: h("24h Volume (USDT)") }), /* @__PURE__ */ N(Ot, { children: Ft(d) })]
					})
				]
			})
		]
	});
}, Bt = 10, Vt = 27, Ht = A(g)`
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  gap: 8px;
  flex-shrink: 0;
`, Ut = A(g)`
  gap: 5px;
`, Wt = A.button`
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
`, Gt = A.div`
  position: relative;
`, Kt = A.button`
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
`, qt = A.div`
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
`, Jt = A.button`
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
`, Yt = A(g)`
  align-items: center;
  gap: 2px;
`, Xt = A.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 16px;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  flex-shrink: 0;
`, Zt = A.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`, Qt = A.div`
  height: ${({ $size: e }) => e === "full" ? Bt * 2 * Vt : Bt * Vt}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`, $t = A.div`
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
`, en = A.span`
  position: relative;
  z-index: 1;
  color: ${({ $side: e, theme: t }) => e === "bid" ? "#129E7D" : t.colors.failure};
`, tn = A.span`
  position: relative;
  z-index: 1;
  text-align: ${({ $align: e }) => e ?? "right"};
`, nn = A.div`
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
`, rn = A.span`
  color: ${({ theme: e }) => e.colors.textSubtle};
`, an = A.span`
  text-align: center;
`, on = A.span`
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
	w(() => {
		let n = (n) => {
			e.current && !e.current.contains(n.target) && t();
		};
		return window.addEventListener("mousedown", n), () => window.removeEventListener("mousedown", n);
	}, [e, t]);
}, pn = ({ label: e, items: t, activeValue: n, onSelect: r }) => {
	let [i, a] = k(!1), o = O(null);
	return fn(o, () => a(!1)), /* @__PURE__ */ P(Gt, {
		ref: o,
		children: [/* @__PURE__ */ P(Kt, {
			onClick: () => a((e) => !e),
			children: [
				e,
				" ",
				i ? "▴" : "▾"
			]
		}), i && /* @__PURE__ */ N(qt, { children: t.map((e) => /* @__PURE__ */ N(Jt, {
			$active: e.value === n,
			onClick: () => {
				r(e.value), a(!1);
			},
			children: e.label
		}, e.value)) })]
	});
}, mn = ({ bidColor: e, askColor: t, listColor: n }) => /* @__PURE__ */ P("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ N("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "6",
			stroke: t
		}),
		/* @__PURE__ */ N("rect", {
			x: "0.5",
			y: "8.5",
			width: "6",
			height: "6",
			stroke: e
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: n
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: n
		})
	]
}), hn = ({ bidColor: e, listColor: t }) => /* @__PURE__ */ P("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ N("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), gn = ({ askColor: e, listColor: t }) => /* @__PURE__ */ P("svg", {
	width: "16",
	height: "15",
	viewBox: "0 0 16 15",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ N("rect", {
			x: "0.5",
			y: "0.5",
			width: "6",
			height: "14",
			stroke: e
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "0",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "4",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "8",
			width: "8",
			height: "3",
			fill: t
		}),
		/* @__PURE__ */ N("rect", {
			x: "8",
			y: "12",
			width: "8",
			height: "3",
			fill: t
		})
	]
}), _n = (e) => e, vn = ({ asks: e, bids: t, baseAsset: n, quoteAsset: r, tickSize: i, pricePrecision: a = 2, lastPrice: o = 0, view: s, onViewChange: c, priceStep: l, onPriceStepChange: u, sizeUnit: d, onSizeUnitChange: f, hidden: p, embedded: m, t: h = _n }) => {
	let g = j(), _ = d === "QUOTE" ? r : n, v = D(() => dn(i, o), [i, o]);
	w(() => {
		v.length !== 0 && (v.includes(l) || u(v[v.length - 1]));
	}, [
		v,
		l,
		u
	]);
	let y = D(() => {
		let n = Math.max(i, Number(l) || i), r = Math.max(1, Math.round(n / i)), o = sn(e, "ask", i, r, a), s = sn(t, "bid", i, r, a), c = Bt * 2, u = o.slice(0, c).reverse(), d = s.slice(0, c), f = e[0] ? Number(e[0][0]) : void 0, p = t[0] ? Number(t[0][0]) : void 0;
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
	}, x = D(() => b([...y.asks].reverse()).reverse(), [y.asks, d]), S = D(() => b(y.bids), [y.bids, d]), C = D(() => {
		let e = x[0]?.total ?? 0, t = S[S.length - 1]?.total ?? 0;
		return Math.max(e, t, 1);
	}, [x, S]), T = (e, t) => {
		let n = e === "bid" ? g.colors.success : g.colors.failure, r = Math.max(0, Math.min(100, t * 100)).toFixed(2);
		return { background: `linear-gradient(to right, ${`color-mix(in srgb, ${n} 30%, transparent)`} 0%, ${`color-mix(in srgb, ${n} 10%, transparent)`} ${r}%, transparent ${r}%, transparent 100%)` };
	}, E = (e) => d === "QUOTE" ? e >= 1e6 ? `${(e / 1e6).toFixed(2)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(2)}K` : e.toFixed(2) : e.toFixed(3), O = /* @__PURE__ */ P(M, { children: [
		/* @__PURE__ */ P(Ht, { children: [/* @__PURE__ */ P(Ut, { children: [
			/* @__PURE__ */ N(Wt, {
				title: h("Both"),
				$active: s === "both",
				onClick: () => c("both"),
				"aria-label": h("Both"),
				children: /* @__PURE__ */ N(mn, {
					bidColor: g.colors.success,
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ N(Wt, {
				title: h("Bids"),
				$active: s === "bids",
				onClick: () => c("bids"),
				"aria-label": h("Bids"),
				children: /* @__PURE__ */ N(hn, {
					bidColor: g.colors.success,
					listColor: g.colors.textSubtle
				})
			}),
			/* @__PURE__ */ N(Wt, {
				title: h("Asks"),
				$active: s === "asks",
				onClick: () => c("asks"),
				"aria-label": h("Asks"),
				children: /* @__PURE__ */ N(gn, {
					askColor: g.colors.failure,
					listColor: g.colors.textSubtle
				})
			})
		] }), /* @__PURE__ */ P(Yt, { children: [/* @__PURE__ */ N(pn, {
			label: l,
			items: v.map((e) => ({
				value: e,
				label: e
			})),
			activeValue: l,
			onSelect: u
		}), /* @__PURE__ */ N(pn, {
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
		/* @__PURE__ */ P(Xt, { children: [
			/* @__PURE__ */ P("span", { children: [
				h("Price"),
				" (",
				r,
				")"
			] }),
			/* @__PURE__ */ P("span", {
				style: { textAlign: "center" },
				children: [
					h("Amount"),
					" (",
					_,
					")"
				]
			}),
			/* @__PURE__ */ P("span", {
				style: { textAlign: "right" },
				children: [
					h("SUM"),
					" (",
					_,
					")"
				]
			})
		] }),
		/* @__PURE__ */ P(Zt, { children: [
			s !== "bids" && /* @__PURE__ */ N(Qt, {
				$size: s === "asks" ? "full" : "half",
				children: x.slice(s === "asks" ? 0 : Math.max(0, x.length - Bt)).map((e) => /* @__PURE__ */ P($t, {
					$side: "ask",
					style: T("ask", e.total / C),
					children: [
						/* @__PURE__ */ N(en, {
							$side: "ask",
							children: e.price
						}),
						/* @__PURE__ */ N(tn, {
							$align: "center",
							children: E(Number(e.qty))
						}),
						/* @__PURE__ */ N(tn, {
							$align: "right",
							children: E(e.total)
						})
					]
				}, `a-${e.price}`))
			}),
			s === "both" && /* @__PURE__ */ P(nn, {
				role: "row",
				"aria-label": h("Spread"),
				children: [
					/* @__PURE__ */ N(rn, { children: h("Spread") }),
					/* @__PURE__ */ N(an, { children: y.spread === void 0 ? "—" : y.spread.toFixed(2) }),
					/* @__PURE__ */ N(on, { children: y.spreadPct === void 0 ? "" : `${y.spreadPct.toFixed(3)}%` })
				]
			}),
			s !== "asks" && /* @__PURE__ */ N(Qt, {
				$size: s === "bids" ? "full" : "half",
				children: S.slice(0, s === "bids" ? Bt * 2 : Bt).map((e) => /* @__PURE__ */ P($t, {
					$side: "bid",
					style: T("bid", e.total / C),
					children: [
						/* @__PURE__ */ N(en, {
							$side: "bid",
							children: e.price
						}),
						/* @__PURE__ */ N(tn, {
							$align: "center",
							children: E(Number(e.qty))
						}),
						/* @__PURE__ */ N(tn, {
							$align: "right",
							children: E(e.total)
						})
					]
				}, `b-${e.price}`))
			})
		] })
	] });
	return m ? /* @__PURE__ */ N("div", {
		style: p ? { display: "none" } : { display: "contents" },
		children: O
	}) : /* @__PURE__ */ N(I, {
		style: p ? { display: "none" } : void 0,
		children: O
	});
}, yn = A(I)`
  flex: 1;
  min-height: 200px;
`, bn = A.div`
  padding: 8px 12px 12px;
  overflow-x: auto;
  flex: 1;
`, xn = A(g)`
  align-items: center;
  justify-content: center;
  min-height: 120px;
`, Sn = A.div`
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
`, Cn = A.div`
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
`, wn = A(g)`
  gap: 6px;
  align-items: center;
`, Tn = A.div`
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 0;
`, En = A.span`
  color: ${({ $kind: e, theme: t }) => e === "tp" ? t.colors.success : t.colors.failure};
`, Dn = A.div`
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
`, On = A.div`
  display: grid;
  grid-template-columns: 148px 156px 1fr 1fr 1fr 1fr;
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, kn = A.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, An = A.div`
  display: grid;
  grid-template-columns: 148px 156px minmax(min-content, 0.6fr) repeat(5, minmax(min-content, 1fr));
  column-gap: 0;
  row-gap: 6px;
  font-variant-numeric: tabular-nums;
  & > * {
    padding: 16px 12px;
  }
`, jn = A.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  & > span:last-child {
    color: ${({ theme: e }) => e.colors.textSubtle};
  }
`, Mn = A.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
`, Nn = A.button`
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
`, Y = A(i).attrs({
	fontSize: "10px",
	color: "textSubtle"
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, X = A(i).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
`, Pn = (e) => e, Fn = ({ p: e, useMarkPriceForSymbol: t, computeLiqPrice: n, onClose: r, onEditTpSl: i, closingSymbol: a, t: o }) => {
	let s = j(), c = t?.(e.symbol), l = e.positionAmt >= 0 ? "BUY" : "SELL", u = Number.isFinite(c) && Number.isFinite(e.entryPrice) ? (c - e.entryPrice) * e.positionAmt : Number(e.unrealizedProfit), d = Number.isFinite(e.entryPrice) && Number.isFinite(e.leverage) ? n?.({
		side: l,
		entryPrice: e.entryPrice,
		leverage: e.leverage
	}) : void 0, f = a === e.symbol;
	return /* @__PURE__ */ P(M, { children: [
		/* @__PURE__ */ N(X, {
			bold: !0,
			children: e.symbol
		}),
		/* @__PURE__ */ N(X, {
			style: { color: l === "BUY" ? s.colors.success : s.colors.failure },
			children: e.positionAmt
		}),
		/* @__PURE__ */ N(X, { children: Number.isFinite(e.entryPrice) ? e.entryPrice.toFixed(2) : "—" }),
		/* @__PURE__ */ N(X, { children: c !== void 0 && Number.isFinite(c) ? c.toFixed(2) : "—" }),
		/* @__PURE__ */ P(X, { children: [e.leverage, "x"] }),
		/* @__PURE__ */ N(X, { children: d ? d.toFixed(2) : "—" }),
		/* @__PURE__ */ N(X, {
			style: { color: u >= 0 ? s.colors.success : s.colors.failure },
			children: Number.isFinite(u) ? u.toFixed(4) : "—"
		}),
		/* @__PURE__ */ P(Tn, { children: [/* @__PURE__ */ P(En, {
			$kind: "tp",
			children: [
				o("TP"),
				": ",
				e.tpStopPrice ? Number(e.tpStopPrice).toFixed(2) : "—"
			]
		}), /* @__PURE__ */ P(En, {
			$kind: "sl",
			children: [
				o("SL"),
				": ",
				e.slStopPrice ? Number(e.slStopPrice).toFixed(2) : "—"
			]
		})] }),
		/* @__PURE__ */ P(wn, { children: [/* @__PURE__ */ N(y, {
			scale: "xs",
			variant: "tertiary",
			onClick: () => i(e, c ?? NaN),
			disabled: !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			children: o("TP/SL")
		}), /* @__PURE__ */ N(y, {
			scale: "xs",
			variant: "secondary",
			onClick: () => r(e),
			disabled: f || !Number.isFinite(e.positionAmt) || e.positionAmt === 0,
			isLoading: f,
			children: o("Close")
		})] })
	] });
}, In = ({ tab: e, onTabChange: t, positions: n, openOrders: r, orderHistory: a = [], tradeHistory: o = [], transactionHistory: s = [], onShareTrade: c, useMarkPriceForSymbol: l, computeLiqPrice: u, onClosePosition: d, onEditTpSl: f, onCancelOrder: p, closingSymbol: m = null, cancellingOrderId: h = null, t: _ = Pn }) => {
	let v = j(), b = [
		"positions",
		"orders",
		"history",
		"trades",
		"transactions"
	];
	return /* @__PURE__ */ P(yn, { children: [/* @__PURE__ */ P(B, {
		activeIndex: b.indexOf(e),
		onItemClick: (e) => t(b[e]),
		children: [
			/* @__PURE__ */ P(z, { children: [
				_("Positions"),
				" (",
				n.length,
				")"
			] }),
			/* @__PURE__ */ P(z, { children: [
				_("Open Orders"),
				" (",
				r.length,
				")"
			] }),
			/* @__PURE__ */ P(z, { children: [
				_("Order History"),
				" (",
				a.length,
				")"
			] }),
			/* @__PURE__ */ P(z, { children: [
				_("Trade History"),
				" (",
				o.length,
				")"
			] }),
			/* @__PURE__ */ P(z, { children: [
				_("Transaction History"),
				" (",
				s.length,
				")"
			] })
		]
	}), /* @__PURE__ */ P(bn, { children: [
		e === "positions" && (n.length === 0 ? /* @__PURE__ */ N(xn, { children: /* @__PURE__ */ N(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open positions")
		}) }) : /* @__PURE__ */ P(Sn, { children: [
			/* @__PURE__ */ N(Y, { children: _("Symbol") }),
			/* @__PURE__ */ N(Y, { children: _("Size") }),
			/* @__PURE__ */ N(Y, { children: _("Entry") }),
			/* @__PURE__ */ N(Y, { children: _("Mark") }),
			/* @__PURE__ */ N(Y, { children: _("Lev") }),
			/* @__PURE__ */ N(Y, { children: _("Liq") }),
			/* @__PURE__ */ N(Y, { children: _("uPnL") }),
			/* @__PURE__ */ N(Y, { children: _("TP/SL") }),
			/* @__PURE__ */ N(Y, {}),
			n.map((e) => /* @__PURE__ */ N(Cn, { children: /* @__PURE__ */ N(Fn, {
				p: e,
				useMarkPriceForSymbol: l,
				computeLiqPrice: u,
				onClose: d,
				onEditTpSl: f,
				closingSymbol: m,
				t: _
			}) }, e.id))
		] })),
		e === "orders" && (r.length === 0 ? /* @__PURE__ */ N(xn, { children: /* @__PURE__ */ N(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No open orders")
		}) }) : /* @__PURE__ */ P(Dn, { children: [
			/* @__PURE__ */ N(Y, { children: _("Symbol") }),
			/* @__PURE__ */ N(Y, { children: _("Side") }),
			/* @__PURE__ */ N(Y, { children: _("Type") }),
			/* @__PURE__ */ N(Y, { children: _("Price") }),
			/* @__PURE__ */ N(Y, { children: _("Size") }),
			/* @__PURE__ */ N(Y, { children: _("Filled") }),
			/* @__PURE__ */ N(Y, { children: _("Status") }),
			/* @__PURE__ */ N(Y, {}),
			r.map((e) => {
				let t = h === e.id;
				return /* @__PURE__ */ P(Cn, { children: [
					/* @__PURE__ */ N(X, {
						bold: !0,
						children: e.symbol
					}),
					/* @__PURE__ */ N(X, {
						style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
						children: e.side
					}),
					/* @__PURE__ */ N(X, { children: e.type }),
					/* @__PURE__ */ N(X, { children: e.price }),
					/* @__PURE__ */ N(X, { children: e.origQty }),
					/* @__PURE__ */ N(X, { children: e.executedQty }),
					/* @__PURE__ */ N(X, { children: e.status }),
					/* @__PURE__ */ N(wn, { children: /* @__PURE__ */ N(y, {
						scale: "xs",
						variant: "secondary",
						disabled: t,
						isLoading: t,
						onClick: () => p(e),
						children: _("Cancel")
					}) })
				] }, e.id);
			})
		] })),
		e === "history" && (a.length === 0 ? /* @__PURE__ */ N(xn, { children: /* @__PURE__ */ N(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No order history")
		}) }) : /* @__PURE__ */ P(An, { children: [
			/* @__PURE__ */ N(Y, { children: _("Time") }),
			/* @__PURE__ */ N(Y, { children: _("Symbol") }),
			/* @__PURE__ */ N(Y, { children: _("Side") }),
			/* @__PURE__ */ N(Y, { children: _("Type") }),
			/* @__PURE__ */ N(Y, { children: _("Price") }),
			/* @__PURE__ */ N(Y, { children: _("Size") }),
			/* @__PURE__ */ N(Y, { children: _("Filled") }),
			/* @__PURE__ */ N(Y, { children: _("Status") }),
			a.map((e) => /* @__PURE__ */ P(Cn, { children: [
				/* @__PURE__ */ N(X, {
					as: "div",
					children: /* @__PURE__ */ P(jn, { children: [/* @__PURE__ */ N("span", { children: e.date }), /* @__PURE__ */ N("span", { children: e.time })] })
				}),
				/* @__PURE__ */ N(X, {
					bold: !0,
					children: e.symbol
				}),
				/* @__PURE__ */ N(X, {
					style: { color: e.side === "BUY" ? v.colors.success : v.colors.failure },
					children: e.side
				}),
				/* @__PURE__ */ N(X, { children: e.type }),
				/* @__PURE__ */ N(X, { children: e.price }),
				/* @__PURE__ */ N(X, { children: e.origQty }),
				/* @__PURE__ */ N(X, { children: e.executedQty }),
				/* @__PURE__ */ N(X, { children: e.status })
			] }, e.id))
		] })),
		e === "trades" && (o.length === 0 ? /* @__PURE__ */ N(xn, { children: /* @__PURE__ */ N(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No trades yet")
		}) }) : /* @__PURE__ */ P(On, { children: [
			/* @__PURE__ */ N(Y, { children: _("Time") }),
			/* @__PURE__ */ N(Y, { children: _("Symbol") }),
			/* @__PURE__ */ N(Y, { children: _("Price") }),
			/* @__PURE__ */ N(Y, { children: _("Quantity") }),
			/* @__PURE__ */ N(Y, { children: _("Fee") }),
			/* @__PURE__ */ N(Y, { children: _("Realized profit") }),
			o.map((e) => {
				let t = e.side === "BUY" ? v.colors.success : v.colors.failure, n = e.realizedProfit.startsWith("+");
				return /* @__PURE__ */ P(Cn, { children: [
					/* @__PURE__ */ N(X, {
						as: "div",
						children: /* @__PURE__ */ P(jn, { children: [/* @__PURE__ */ N("span", { children: e.date }), /* @__PURE__ */ N("span", { children: e.time })] })
					}),
					/* @__PURE__ */ N(X, {
						as: "div",
						children: /* @__PURE__ */ P(Mn, { children: [/* @__PURE__ */ N("span", { children: e.symbol }), /* @__PURE__ */ N("span", {
							style: {
								color: t,
								fontSize: 12
							},
							children: e.side === "BUY" ? _("Buy") : _("Sell")
						})] })
					}),
					/* @__PURE__ */ N(X, { children: e.price }),
					/* @__PURE__ */ N(X, { children: e.quantity }),
					/* @__PURE__ */ N(X, { children: e.fee }),
					/* @__PURE__ */ N(X, {
						as: "div",
						children: /* @__PURE__ */ P(g, {
							alignItems: "center",
							style: { gap: 8 },
							children: [/* @__PURE__ */ N("span", {
								style: { color: n ? v.colors.success : v.colors.failure },
								children: e.realizedProfit
							}), c && /* @__PURE__ */ N(Nn, {
								type: "button",
								onClick: () => c(e),
								"aria-label": _("Share trade"),
								children: /* @__PURE__ */ N("svg", {
									width: "14",
									height: "14",
									viewBox: "0 0 24 24",
									fill: "none",
									"aria-hidden": "true",
									children: /* @__PURE__ */ N("path", {
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
		e === "transactions" && (s.length === 0 ? /* @__PURE__ */ N(xn, { children: /* @__PURE__ */ N(i, {
			fontSize: "12px",
			color: "textSubtle",
			children: _("No transactions yet")
		}) }) : /* @__PURE__ */ P(kn, { children: [
			/* @__PURE__ */ N(Y, { children: _("Time") }),
			/* @__PURE__ */ N(Y, { children: _("Type") }),
			/* @__PURE__ */ N(Y, { children: _("Amount") }),
			/* @__PURE__ */ N(Y, { children: _("Symbol") }),
			s.map((e) => /* @__PURE__ */ P(Cn, { children: [
				/* @__PURE__ */ N(X, {
					as: "div",
					children: /* @__PURE__ */ P(jn, { children: [/* @__PURE__ */ N("span", { children: e.date }), /* @__PURE__ */ N("span", { children: e.time })] })
				}),
				/* @__PURE__ */ N(X, { children: e.type }),
				/* @__PURE__ */ N(X, { children: e.amount }),
				/* @__PURE__ */ N(X, { children: e.symbol })
			] }, e.id))
		] }))
	] })] });
}, Ln = A(g)`
  flex-direction: column;
  gap: 8px;
`, Rn = A(g)`
  gap: 8px;
`, zn = A.div`
  height: 1px;
  width: 100%;
  background: ${({ theme: e }) => e.colors.cardBorder};
  margin: 4px 0;
`, Bn = A(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Vn = A(a)`
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
`, Hn = A(g)`
  justify-content: space-between;
  padding: 4px 0;
  font-size: 12px;
`, Un = (e) => e, Wn = ({ isOpen: e, symbol: t, positionSide: n, qty: r, entryPrice: a, markPrice: o, onConfirm: c, onClose: l, t: u = Un }) => {
	let d = j(), m = n === "LONG" ? 1 : -1, [h, _] = k(""), [v, b] = k(""), [x, S] = k(""), [C, T] = k(""), [E, O] = k(!1);
	w(() => {
		e || (_(""), b(""), S(""), T(""));
	}, [e]);
	let A = (e) => r > 0 ? a + m * e / r : NaN, M = (e) => r > 0 ? m * (e - a) * r : NaN, F = (e, t = 2) => Number.isFinite(e) ? e.toLocaleString(void 0, { maximumFractionDigits: t }) : "", I = (e) => {
		_(e);
		let t = Number(e);
		b(Number.isFinite(t) && e !== "" ? F(M(t), 4) : "");
	}, L = (e) => {
		b(e);
		let t = Number(e);
		_(Number.isFinite(t) && e !== "" ? F(A(t), 2) : "");
	}, R = (e) => {
		S(e);
		let t = Number(e);
		T(Number.isFinite(t) && e !== "" ? F(M(t), 4) : "");
	}, z = (e) => {
		T(e);
		let t = Number(e);
		Number.isFinite(t) && e !== "" ? S(F(A(t), 2)) : T("");
	}, B = D(() => {
		let e = Number(h), t = Number(x), r = h !== "" && Number.isFinite(e), i = x !== "" && Number.isFinite(t);
		if (n === "LONG") {
			if (r && e <= a) return u("Take Profit price must be above entry for a LONG position.");
			if (i && t >= a) return u("Stop Loss price must be below entry for a LONG position.");
		} else {
			if (r && e >= a) return u("Take Profit price must be below entry for a SHORT position.");
			if (i && t <= a) return u("Stop Loss price must be above entry for a SHORT position.");
		}
	}, [
		h,
		x,
		n,
		a,
		u
	]), V = !E && (h !== "" || x !== "") && !B;
	return /* @__PURE__ */ N(f, {
		isOpen: e,
		onDismiss: l,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ N(p, {
			title: u("Set TP / SL"),
			onDismiss: l,
			children: /* @__PURE__ */ P(g, {
				flexDirection: "column",
				style: {
					gap: 12,
					minWidth: 340,
					maxWidth: 440
				},
				children: [
					/* @__PURE__ */ P(Hn, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Symbol")
					}), /* @__PURE__ */ P(i, {
						fontSize: "14px",
						bold: !0,
						style: { color: n === "LONG" ? d.colors.success : d.colors.failure },
						children: [
							t,
							" · ",
							n
						]
					})] }),
					/* @__PURE__ */ P(Hn, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Entry")
					}), /* @__PURE__ */ N(i, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(a) ? a.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ P(Hn, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: u("Mark")
					}), /* @__PURE__ */ N(i, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: Number.isFinite(o) ? o.toFixed(2) : "—"
					})] }),
					/* @__PURE__ */ N(zn, {}),
					/* @__PURE__ */ P(Ln, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.success,
						children: u("Take Profit")
					}), /* @__PURE__ */ P(Rn, { children: [/* @__PURE__ */ P(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ N(Bn, { children: u("Trigger Price") }), /* @__PURE__ */ N(Vn, {
							value: h,
							onChange: (e) => I(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ P(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ N(Bn, { children: u("PnL (USDT)") }), /* @__PURE__ */ N(Vn, {
							value: v,
							onChange: (e) => L(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					/* @__PURE__ */ P(Ln, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						bold: !0,
						color: d.colors.failure,
						children: u("Stop Loss")
					}), /* @__PURE__ */ P(Rn, { children: [/* @__PURE__ */ P(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ N(Bn, { children: u("Trigger Price") }), /* @__PURE__ */ N(Vn, {
							value: x,
							onChange: (e) => R(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					}), /* @__PURE__ */ P(s, {
						style: { flex: 1 },
						children: [/* @__PURE__ */ N(Bn, { children: u("PnL (USDT)") }), /* @__PURE__ */ N(Vn, {
							value: C,
							onChange: (e) => z(e.target.value),
							placeholder: "0.00",
							inputMode: "decimal"
						})]
					})] })] }),
					B && /* @__PURE__ */ N(i, {
						fontSize: "14px",
						color: "failure",
						children: B
					}),
					/* @__PURE__ */ N(y, {
						onClick: async () => {
							if (V) {
								O(!0);
								try {
									await c({
										symbol: t,
										closeSide: n === "LONG" ? "SELL" : "BUY",
										tpPrice: h,
										slPrice: x,
										qty: String(r),
										closePosition: !0
									}), l();
								} finally {
									O(!1);
								}
							}
						},
						disabled: !V,
						isLoading: E,
						scale: "md",
						children: u("Confirm")
					})
				]
			})
		})
	});
}, Gn = A(I)`
  flex: 1;
  min-height: ${({ $minHeight: e }) => e};
`, Kn = (e) => typeof e == "number" ? `${e}px` : e, qn = ({ children: e, minHeight: t = "420px" }) => /* @__PURE__ */ N(Gn, {
	$minHeight: Kn(t),
	children: e
}), Jn = A(I)`
  height: 100%;
`, Yn = A.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`, Xn = A.div`
  display: ${({ $hidden: e }) => e ? "none" : "contents"};
`, Zn = (e) => e, Qn = ({ tab: e, onTabChange: t, bookContent: n, tradesContent: r, t: i = Zn }) => /* @__PURE__ */ P(Jn, { children: [/* @__PURE__ */ P(B, {
	fullWidth: !0,
	activeIndex: e === "book" ? 0 : 1,
	onItemClick: (e) => t(e === 0 ? "book" : "trades"),
	children: [/* @__PURE__ */ N(z, { children: i("Order Book") }), /* @__PURE__ */ N(z, { children: i("Trades") })]
}), /* @__PURE__ */ P(Yn, { children: [/* @__PURE__ */ N(Xn, {
	$hidden: e !== "book",
	children: n
}), /* @__PURE__ */ N(Xn, {
	$hidden: e !== "trades",
	children: r
})] })] }), $n = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='32'%20fill='none'%20viewBox='0%200%2015%2032'%3e%3cpath%20fill='%230098A1'%20d='M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z'/%3e%3cpath%20fill='%2353DEE9'%20d='M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z'/%3e%3c/svg%3e", er = "data:image/svg+xml,%3csvg%20width='24'%20height='32'%20viewBox='0%200%2028%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='1'%20y='19'%20width='17'%20height='11'%20fill='%231FC7D4'/%3e%3cpath%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'%20fill='%231FC7D4'/%3e%3cpath%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'%20fill='%231FC7D4'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20fill='url(%23paint0_linear_bunnyhead_main)'/%3e%3c/g%3e%3cg%20transform='translate(2)'%3e%3cpath%20d='M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556'%20stroke='%23452A7A'%20stroke-linecap='round'/%3e%3cpath%20d='M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z'%20fill='%23452A7A'/%3e%3cpath%20d='M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z'%20fill='%23452A7A'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_main'%20x1='14'%20y1='1'%20x2='14'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", tr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='32'%20fill='none'%20viewBox='0%200%2028%2032'%3e%3crect%20width='17'%20height='11'%20x='1'%20y='19'%20fill='%231FC7D4'/%3e%3cpath%20fill='%231FC7D4'%20d='M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z'/%3e%3cpath%20fill='%231FC7D4'%20d='M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z'/%3e%3cg%20filter='url(%23filter0_d)'%3e%3cpath%20fill='url(%23paint0_linear_bunnyhead_max)'%20fill-rule='evenodd'%20d='M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z'%20clip-rule='evenodd'/%3e%3c/g%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556'/%3e%3cpath%20stroke='%23452A7A'%20stroke-linecap='round'%20d='M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787'/%3e%3cdefs%3e%3cfilter%20id='filter0_d'%20width='28'%20height='28'%20x='0'%20y='0'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'/%3e%3cfeOffset%20dy='1'/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200'/%3e%3cfeBlend%20in2='BackgroundImageFix'%20mode='normal'%20result='effect1_dropShadow'/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow'%20mode='normal'%20result='shape'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_bunnyhead_max'%20x1='14'%20x2='14'%20y1='1'%20y2='25'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2353DEE9'/%3e%3cstop%20offset='1'%20stop-color='%231FC7D4'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/widgets/BunnySlider.tsx
function nr({ name: e = "bunny-slider", min: t = 0, max: n = 100, step: r = "any", value: i, onValueChanged: a, disabled: o = !1, valueLabel: s, width: c = "100%" }) {
	let l = O(null), [u, d] = k(0);
	E(() => {
		let e = l.current;
		if (!e) return;
		let t = new ResizeObserver(() => d(e.clientWidth));
		return t.observe(e), d(e.clientWidth), () => t.disconnect();
	}, []);
	let f = n <= t ? t + 1 : n, p = Math.max(0, Math.min(1, (i - t) / (f - t))), m = 14 + Math.max(0, u - 14 - 24) * p, h = m - 14 + 24 / 2, g = p >= .999, _ = g ? tr : er;
	return /* @__PURE__ */ P(rr, {
		ref: l,
		style: { width: typeof c == "number" ? `${c}px` : c },
		"aria-disabled": o || void 0,
		children: [
			/* @__PURE__ */ N(ir, { className: "bs-track" }),
			/* @__PURE__ */ N(or, {
				className: "bs-back",
				style: { backgroundImage: `url("${$n}")` }
			}),
			/* @__PURE__ */ N(ar, {
				className: "bs-fill",
				style: { width: Math.max(0, h) }
			}),
			/* @__PURE__ */ N(sr, {
				className: `bs-front${g ? " bs-front--max" : ""}`,
				style: {
					left: m,
					backgroundImage: `url("${_}")`
				}
			}),
			/* @__PURE__ */ N(cr, {
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
			s && /* @__PURE__ */ N(lr, {
				className: "bs-value-label",
				style: { left: m + 24 / 2 },
				children: g ? "MAX" : s
			})
		]
	});
}
var rr = A.div`
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
`, ir = A.span`
  position: absolute;
  left: 14px;
  right: 0;
  top: 18px;
  height: 2px;
  background: ${({ theme: e }) => e?.colors?.inputSecondary ?? "var(--pcs-colors-input-secondary, #D7CAEC)"};
  pointer-events: none;
`, ar = A.span`
  position: absolute;
  left: 14px;
  top: 18px;
  height: 10px;
  background: ${({ theme: e }) => e?.colors?.primary ?? "var(--pcs-colors-primary, #1FC7D4)"};
  pointer-events: none;
  transition: width 60ms linear;
`, or = A.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 32px;
  pointer-events: none;
  background-size: 15px 32px;
  background-repeat: no-repeat;
`, sr = A.span`
  position: absolute;
  top: 0;
  width: 24px;
  height: 32px;
  pointer-events: none;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 24px 32px;
  transition: left 60ms linear, transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
`, cr = A.input`
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
`, lr = A.span`
  position: absolute;
  bottom: -20px;
  font-size: 12px;
  font-family: 'Kanit', sans-serif;
  color: ${({ theme: e }) => e?.colors?.textSubtle ?? "var(--pcs-colors-text-subtle)"};
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  transform: translateX(-50%);
  white-space: nowrap;
`, ur = A(I)`
  & > div {
    padding: 0 12px 12px;
    gap: 12px;
  }
`, dr = A(g)`
  align-items: center;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, fr = A.button`
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
`, pr = A(g)`
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 12px;
  padding: 4px;
  gap: 0;
`, mr = A.button`
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
`, hr = A.button`
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
`, gr = A(g)`
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`, _r = A(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, vr = A(g)`
  align-items: center;
  gap: 4px;
  font-variant-numeric: tabular-nums;
`, yr = A.div`
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
`, br = A(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})`
  pointer-events: none;
  flex-shrink: 0;
`, xr = A.input`
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
`, Sr = A(y).attrs({
	variant: "text",
	scale: "xs"
})`
  padding: 0;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  gap: 2px;
  height: auto;
`, Cr = A.div`
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
`, wr = A.input`
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
`, Tr = A.button`
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
`, Er = A.div`
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
`, Dr = A.button`
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
`, Or = A.select`
  flex-shrink: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${({ theme: e }) => e.colors.text};
  font-size: 14px;
  font-weight: 600;
  font-family: Kanit, sans-serif;
  cursor: pointer;
`, kr = A(a)`
  height: 36px;
  font-size: 13px;
  font-variant-numeric: tabular-nums;
`, Ar = A.div`
  padding: 4px 0;
`, jr = A(g)`
  gap: 8px;
`, Mr = A.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 999px;
  padding: 2px;
  background: ${({ theme: e }) => e.colors.input};
`, Nr = A.button`
  border: 0;
  padding: 2px 8px;
  border-radius: 999px;
  font-family: inherit;
  font-size: 11px;
  cursor: pointer;
  background: ${({ $active: e, theme: t }) => e ? t.colors.card : "transparent"};
  color: ${({ $active: e, theme: t }) => e ? t.colors.text : t.colors.textSubtle};
  font-weight: ${({ $active: e }) => e ? 600 : 400};
`, Pr = ({ value: e, onChange: t }) => /* @__PURE__ */ P(Mr, {
	role: "tablist",
	"aria-label": "Trigger source",
	children: [/* @__PURE__ */ N(Nr, {
		type: "button",
		role: "tab",
		"aria-selected": e === "LAST",
		$active: e === "LAST",
		onClick: () => t("LAST"),
		children: "Last"
	}), /* @__PURE__ */ N(Nr, {
		type: "button",
		role: "tab",
		"aria-selected": e === "MARK",
		$active: e === "MARK",
		onClick: () => t("MARK"),
		children: "Mark"
	})]
}), Fr = A(y)`
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
`, Ir = A.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, Lr = A(i).attrs({
	fontSize: "14px",
	color: "textSubtle"
})``, Rr = A(i).attrs({ fontSize: "14px" })`
  font-variant-numeric: tabular-nums;
  text-align: right;
`, zr = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, Br = A(g)`
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`, Vr = A(g)`
  gap: 6px;
`, Hr = A.button`
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
`, Ur = A.button`
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
`, Wr = A.span`
  text-align: center;
`, Gr = A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  background: ${({ theme: e }) => e.colors.input};
  border: 0;
  border-radius: 10px;
`, Kr = A.input`
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
`, qr = A.button`
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
`, Jr = A(g)`
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
`, Yr = A(g)`
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.text};
`, Xr = A.div`
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
`, Zr = A(g)`
  justify-content: space-between;
  align-items: center;
`, Qr = A.button`
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
`, $r = A.div`
  position: fixed;
  z-index: 200;
  background: ${({ theme: e }) => e.colors.card};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 8px;
  box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`, ei = A.button`
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
`, ti = [
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
], ni = ({ baseAsset: t, quoteAsset: r, draft: a, onDraftChange: c, typeKey: u, onTypeKeyChange: f, availableBalanceText: p, preview: m, feeText: h, sizePercent: g, onSizePercentChange: _, cta: v, canSubmit: y, isSubmitting: b = !1, marginSubmitting: x = !1, authReady: S = !0, hasAddress: C = !0, errorSlot: T, onSubmit: E, onLeverageClick: D, onMarginModeToggle: A, onDepositClick: j, t: M = zr }) => {
	let I = a.sizeUnit === "QUOTE" ? r : t, L = u === "stop-limit" || u === "stop-market", R = u === "limit" || u === "stop-limit", z = L, B = () => c({
		...a,
		sizeUnit: a.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), V = O(null), ee = O(null), [H, U] = k(!1), [W, te] = k(null);
	w(() => {
		if (!H || !V.current) return;
		let e = V.current.getBoundingClientRect();
		te({
			top: e.bottom + 4,
			left: e.left,
			width: e.width
		});
	}, [H]), w(() => {
		if (!H) return;
		let e = (e) => {
			let t = e.target;
			V.current && !V.current.contains(t) && ee.current && !ee.current.contains(t) && U(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [H]);
	let ne = ti.find((e) => e.key === u)?.label ?? "Market", re = m.liq, G = m.cost;
	return /* @__PURE__ */ P(Br, { children: [
		/* @__PURE__ */ P(Vr, { children: [/* @__PURE__ */ N(Hr, {
			disabled: x,
			onClick: A,
			children: a.marginMode === "CROSS" ? M("Cross") : M("Isolated")
		}), /* @__PURE__ */ N(Hr, {
			onClick: D,
			children: `${a.leverage}x`
		})] }),
		/* @__PURE__ */ P(Ur, {
			ref: V,
			type: "button",
			"aria-haspopup": "listbox",
			"aria-expanded": H,
			onClick: () => U((e) => !e),
			children: [
				/* @__PURE__ */ N(e, {
					width: "14px",
					color: "textSubtle"
				}),
				/* @__PURE__ */ N(Wr, { children: M(ne) }),
				/* @__PURE__ */ N(n, {
					width: "14px",
					color: "textSubtle"
				})
			]
		}),
		H && W && typeof document < "u" && F(/* @__PURE__ */ N($r, {
			ref: ee,
			role: "listbox",
			style: {
				top: W.top,
				left: W.left,
				width: W.width
			},
			children: ti.map((e) => /* @__PURE__ */ N(ei, {
				role: "option",
				"aria-selected": e.key === u,
				$active: e.key === u,
				onClick: () => {
					f(e.key), U(!1);
				},
				children: M(e.label)
			}, e.key))
		}), document.body),
		z && /* @__PURE__ */ P(Gr, { children: [
			/* @__PURE__ */ N(i, {
				fontSize: "13px",
				color: "textSubtle",
				children: M("Stop")
			}),
			/* @__PURE__ */ N(Kr, {
				value: a.stopPrice,
				onChange: (e) => c({
					...a,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": M("Stop price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ P(qr, {
				type: "button",
				onClick: () => c({
					...a,
					stopPriceSource: a.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				children: [a.stopPriceSource === "MARK" ? M("Mark") : M("Last"), /* @__PURE__ */ N(n, { width: "12px" })]
			})
		] }),
		R && /* @__PURE__ */ P(Gr, { children: [
			/* @__PURE__ */ N(i, {
				fontSize: "13px",
				color: "textSubtle",
				children: M("Price")
			}),
			/* @__PURE__ */ N(Kr, {
				value: a.price,
				onChange: (e) => c({
					...a,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": M("Limit price"),
				style: { textAlign: "right" }
			}),
			/* @__PURE__ */ N(i, {
				fontSize: "13px",
				color: "textSubtle",
				children: r
			})
		] }),
		/* @__PURE__ */ P(Gr, { children: [/* @__PURE__ */ N(Kr, {
			value: a.quantity,
			onChange: (e) => c({
				...a,
				quantity: e.target.value
			}),
			placeholder: M("Size"),
			inputMode: "decimal"
		}), /* @__PURE__ */ P(qr, {
			type: "button",
			onClick: B,
			children: [I, /* @__PURE__ */ N(n, { width: "12px" })]
		})] }),
		/* @__PURE__ */ N(s, { children: /* @__PURE__ */ N(nr, {
			min: 0,
			max: 100,
			step: 1,
			value: g,
			onValueChanged: _
		}) }),
		/* @__PURE__ */ P(Jr, { children: [
			/* @__PURE__ */ N("span", { children: M("Avbl") }),
			/* @__PURE__ */ N("strong", { children: `${p} ${r}` }),
			/* @__PURE__ */ N(o, {
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
				children: /* @__PURE__ */ N(l, {
					color: "primary",
					width: "10px"
				})
			})
		] }),
		/* @__PURE__ */ P(Yr, { children: [/* @__PURE__ */ N(d, {
			scale: "sm",
			checked: a.tpSlEnabled,
			onChange: (e) => c({
				...a,
				tpSlEnabled: e.target.checked
			})
		}), /* @__PURE__ */ N("span", { children: M("TP/SL") })] }),
		/* @__PURE__ */ P(Yr, { children: [/* @__PURE__ */ N(d, {
			scale: "sm",
			checked: a.reduceOnly,
			onChange: (e) => c({
				...a,
				reduceOnly: e.target.checked
			})
		}), /* @__PURE__ */ N("span", { children: M("Reduce-Only") })] }),
		T,
		/* @__PURE__ */ P(Xr, {
			$tone: "up",
			children: [
				/* @__PURE__ */ P(Zr, { children: [/* @__PURE__ */ N("span", { children: M("Est. liq. price") }), /* @__PURE__ */ N("span", {
					className: "v",
					children: re
				})] }),
				/* @__PURE__ */ P(Zr, { children: [/* @__PURE__ */ N("span", { children: M("Margin") }), /* @__PURE__ */ N("span", {
					className: "v",
					children: G
				})] }),
				/* @__PURE__ */ P(Zr, { children: [/* @__PURE__ */ N("span", { children: M("Max") }), /* @__PURE__ */ N("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ N(Qr, {
			type: "button",
			$side: "BUY",
			disabled: !y || b,
			onClick: () => E({ sideOverride: "BUY" }),
			children: M("Buy/Long")
		}),
		/* @__PURE__ */ P(Xr, {
			$tone: "down",
			children: [
				/* @__PURE__ */ P(Zr, { children: [/* @__PURE__ */ N("span", { children: M("Est. liq. price") }), /* @__PURE__ */ N("span", {
					className: "v",
					children: re
				})] }),
				/* @__PURE__ */ P(Zr, { children: [/* @__PURE__ */ N("span", { children: M("Margin") }), /* @__PURE__ */ N("span", {
					className: "v",
					children: G
				})] }),
				/* @__PURE__ */ P(Zr, { children: [/* @__PURE__ */ N("span", { children: M("Max") }), /* @__PURE__ */ N("span", {
					className: "v",
					children: "—"
				})] })
			]
		}),
		/* @__PURE__ */ N(Qr, {
			type: "button",
			$side: "SELL",
			disabled: !y || b,
			onClick: () => E({ sideOverride: "SELL" }),
			children: M("Sell/Short")
		}),
		/* @__PURE__ */ P(i, {
			fontSize: "11px",
			color: "textSubtle",
			textAlign: "right",
			children: [
				M("Fees"),
				": ",
				h
			]
		})
	] });
}, ri = (e) => {
	let { isMobile: t } = u();
	if (t) return /* @__PURE__ */ N(ni, { ...e });
	let { baseAsset: n, quoteAsset: r, draft: a, onDraftChange: c, typeKey: f, onTypeKeyChange: p, availableBalanceText: m, preview: h, feeText: _, sizePercent: y, onSizePercentChange: b, cta: x, canSubmit: S, isSubmitting: C = !1, marginSubmitting: T = !1, authReady: E = !0, hasAddress: D = !0, errorSlot: A, onSubmit: j, onLeverageClick: I, onMarginModeToggle: L, onDepositClick: R, t: z = zr } = e, B = a.sizeUnit === "QUOTE" ? r : n, V = (e) => c({
		...a,
		side: e
	}), ee = () => c({
		...a,
		sizeUnit: a.sizeUnit === "BASE" ? "QUOTE" : "BASE",
		quantity: ""
	}), H = () => c({
		...a,
		tpSlEnabled: !a.tpSlEnabled
	}), U = f === "stop-limit" || f === "stop-market", W = f === "limit" || f === "stop-limit", te = U, ne = O(null), re = O(null), [G, ie] = k(!1), [ae, oe] = k({
		top: 0,
		left: 0
	});
	w(() => {
		if (!G || !ne.current || !re.current) return;
		let e = ne.current.getBoundingClientRect(), t = re.current.getBoundingClientRect(), n = e.bottom + 4, r = window.innerWidth - t.width - 8;
		oe({
			top: n,
			left: Math.max(8, Math.min(e.left, r))
		});
	}, [G]), w(() => {
		if (!G) return;
		let e = (e) => {
			let t = e.target;
			ne.current && !ne.current.contains(t) && re.current && !re.current.contains(t) && ie(!1);
		};
		return document.addEventListener("click", e), () => document.removeEventListener("click", e);
	}, [G]);
	let se = U, ce = f === "stop-market" ? `${z("Stop Market")} ▾` : `${z("Stop Limit")} ▾`, le = () => {
		ie((e) => !e);
	}, ue = (e) => {
		p(e), ie(!1);
	};
	return /* @__PURE__ */ P(ur, { children: [
		/* @__PURE__ */ P(dr, { children: [
			["market", "limit"].map((e) => /* @__PURE__ */ N(fr, {
				$active: f === e,
				onClick: () => p(e),
				children: z(e === "market" ? "Market" : "Limit")
			}, e)),
			/* @__PURE__ */ N(fr, {
				ref: ne,
				$active: se,
				onClick: le,
				"aria-haspopup": "menu",
				"aria-expanded": G,
				children: ce
			}),
			G && typeof document < "u" && F(/* @__PURE__ */ P(Er, {
				ref: re,
				style: {
					top: ae.top,
					left: ae.left
				},
				role: "menu",
				children: [/* @__PURE__ */ N(Dr, {
					$active: f === "stop-limit",
					role: "menuitem",
					onClick: () => ue("stop-limit"),
					children: z("Stop Limit")
				}), /* @__PURE__ */ N(Dr, {
					$active: f === "stop-market",
					role: "menuitem",
					onClick: () => ue("stop-market"),
					children: z("Stop Market")
				})]
			}), document.body)
		] }),
		/* @__PURE__ */ P(pr, { children: [/* @__PURE__ */ N(mr, {
			$active: a.side === "BUY",
			$side: "BUY",
			onClick: () => V("BUY"),
			children: z("Buy")
		}), /* @__PURE__ */ N(mr, {
			$active: a.side === "SELL",
			$side: "SELL",
			onClick: () => V("SELL"),
			children: z("Sell")
		})] }),
		/* @__PURE__ */ P(g, {
			style: { gap: 8 },
			children: [/* @__PURE__ */ N(hr, {
				disabled: T,
				onClick: L,
				title: z("Margin mode"),
				children: a.marginMode === "CROSS" ? z("Cross") : z("Isolated")
			}), /* @__PURE__ */ P(hr, {
				onClick: I,
				title: z("Leverage"),
				children: [a.leverage, "x"]
			})]
		}),
		/* @__PURE__ */ P(gr, { children: [/* @__PURE__ */ N(_r, { children: z("Avbl") }), /* @__PURE__ */ P(vr, { children: [/* @__PURE__ */ P(i, {
			fontSize: "14px",
			style: { fontVariantNumeric: "tabular-nums" },
			children: [
				m,
				" ",
				r
			]
		}), /* @__PURE__ */ N(o, {
			variant: "text",
			scale: "xs",
			onClick: R,
			title: z("Deposit"),
			"aria-label": z("Deposit"),
			style: {
				width: 18,
				height: 18,
				minWidth: 18,
				borderRadius: 999
			},
			children: /* @__PURE__ */ N(l, {
				color: "primary",
				width: "10px"
			})
		})] })] }),
		te && /* @__PURE__ */ P(Cr, { children: [
			/* @__PURE__ */ N(br, { children: z("Stop") }),
			/* @__PURE__ */ N(wr, {
				value: a.stopPrice,
				onChange: (e) => c({
					...a,
					stopPrice: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": z("Stop price")
			}),
			/* @__PURE__ */ P(Tr, {
				type: "button",
				onClick: () => c({
					...a,
					stopPriceSource: a.stopPriceSource === "MARK" ? "LAST" : "MARK"
				}),
				title: z("Trigger source"),
				children: [a.stopPriceSource === "MARK" ? z("Mark") : z("Last"), " ▾"]
			})
		] }),
		W && /* @__PURE__ */ P(Cr, { children: [
			/* @__PURE__ */ N(br, { children: z("Price") }),
			/* @__PURE__ */ N(wr, {
				value: a.price,
				onChange: (e) => c({
					...a,
					price: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal",
				"aria-label": z("Limit price")
			}),
			/* @__PURE__ */ N(Sr, {
				as: "div",
				onClick: void 0,
				style: { cursor: "default" },
				children: r
			})
		] }),
		f === "stop-limit" && /* @__PURE__ */ P(Cr, { children: [
			/* @__PURE__ */ N(br, { children: z("TIF") }),
			/* @__PURE__ */ N(g, { flex: 1 }),
			/* @__PURE__ */ P(Or, {
				value: a.timeInForce === "GTX" ? "GTC" : a.timeInForce,
				onChange: (e) => c({
					...a,
					timeInForce: e.target.value
				}),
				"aria-label": z("Time in force"),
				children: [
					/* @__PURE__ */ N("option", {
						value: "GTC",
						children: "GTC"
					}),
					/* @__PURE__ */ N("option", {
						value: "IOC",
						children: "IOC"
					}),
					/* @__PURE__ */ N("option", {
						value: "FOK",
						children: "FOK"
					})
				]
			})
		] }),
		/* @__PURE__ */ P(yr, { children: [
			/* @__PURE__ */ N(br, { children: z("Size") }),
			/* @__PURE__ */ N(xr, {
				value: a.quantity,
				onChange: (e) => c({
					...a,
					quantity: e.target.value
				}),
				placeholder: "0",
				inputMode: "decimal"
			}),
			/* @__PURE__ */ P(Sr, {
				onClick: ee,
				title: z("Toggle unit"),
				children: [B, " ▾"]
			})
		] }),
		/* @__PURE__ */ N(Ar, { children: /* @__PURE__ */ N(v, {
			variant: "dotted",
			min: 0,
			max: 100,
			value: y,
			onValueChanged: b,
			name: "perp-size-percent"
		}) }),
		/* @__PURE__ */ P(g, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ N(d, {
				scale: "sm",
				checked: a.reduceOnly,
				onChange: (e) => c({
					...a,
					reduceOnly: e.target.checked
				})
			}), /* @__PURE__ */ N(i, {
				fontSize: "14px",
				children: z("Reduce Only")
			})]
		}),
		/* @__PURE__ */ P(g, {
			alignItems: "center",
			style: { gap: 8 },
			children: [/* @__PURE__ */ N(d, {
				scale: "sm",
				checked: a.tpSlEnabled,
				onChange: H
			}), /* @__PURE__ */ N(i, {
				fontSize: "14px",
				children: z("Take Profit / Stop Loss")
			})]
		}),
		a.tpSlEnabled && /* @__PURE__ */ P(g, {
			flexDirection: "column",
			style: { gap: 12 },
			children: [/* @__PURE__ */ P(s, { children: [/* @__PURE__ */ P(g, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ N(i, {
					fontSize: "13px",
					bold: !0,
					color: "success",
					children: z("Take Profit")
				}), /* @__PURE__ */ N(Pr, {
					value: a.takeProfitSource ?? "LAST",
					onChange: (e) => c({
						...a,
						takeProfitSource: e
					})
				})]
			}), /* @__PURE__ */ P(jr, { children: [/* @__PURE__ */ P(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ N(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: z("Trigger Price")
				}), /* @__PURE__ */ N(kr, {
					value: a.takeProfitPrice,
					onChange: (e) => c({
						...a,
						takeProfitPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ P(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ N(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: z("PnL (USDT)")
				}), /* @__PURE__ */ N(kr, {
					value: a.takeProfitPnl ?? "",
					onChange: (e) => c({
						...a,
						takeProfitPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] }), /* @__PURE__ */ P(s, { children: [/* @__PURE__ */ P(g, {
				alignItems: "center",
				justifyContent: "space-between",
				mb: "6px",
				children: [/* @__PURE__ */ N(i, {
					fontSize: "13px",
					bold: !0,
					color: "failure",
					children: z("Stop Loss")
				}), /* @__PURE__ */ N(Pr, {
					value: a.stopLossSource ?? "LAST",
					onChange: (e) => c({
						...a,
						stopLossSource: e
					})
				})]
			}), /* @__PURE__ */ P(jr, { children: [/* @__PURE__ */ P(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ N(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: z("Trigger Price")
				}), /* @__PURE__ */ N(kr, {
					value: a.stopLossPrice,
					onChange: (e) => c({
						...a,
						stopLossPrice: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			}), /* @__PURE__ */ P(s, {
				style: { flex: 1 },
				children: [/* @__PURE__ */ N(i, {
					fontSize: "12px",
					color: "textSubtle",
					mb: "4px",
					children: z("PnL (USDT)")
				}), /* @__PURE__ */ N(kr, {
					value: a.stopLossPnl ?? "",
					onChange: (e) => c({
						...a,
						stopLossPnl: e.target.value
					}),
					placeholder: "0.00",
					inputMode: "decimal"
				})]
			})] })] })]
		}),
		A,
		E ? /* @__PURE__ */ N(Fr, {
			onClick: () => j(),
			disabled: !S,
			isLoading: C,
			scale: "md",
			$side: a.side,
			children: x
		}) : /* @__PURE__ */ N(Fr, {
			$side: a.side,
			onClick: () => j(),
			scale: "md",
			disabled: !D,
			children: x
		}),
		/* @__PURE__ */ P(Ir, { children: [
			/* @__PURE__ */ N(Lr, { children: z("Cost") }),
			/* @__PURE__ */ N(Rr, { children: h.cost }),
			!U && /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ N(Lr, { children: z("Est. Liq. Price") }), /* @__PURE__ */ N(Rr, { children: h.liq })] }),
			/* @__PURE__ */ N(Lr, { children: z("Fees") }),
			/* @__PURE__ */ N(Rr, { children: _ })
		] })
	] });
}, ii = A(g)`
  flex-direction: column;
  gap: 20px;
  min-width: 380px;
  max-width: 420px;
`, ai = A.div`
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`, oi = A(g)`
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  background: ${({ theme: e }) => e.colors.backgroundAlt};
`, si = A(i).attrs({
	fontSize: "14px",
	bold: !0
})`
  font-variant-numeric: tabular-nums;
`, ci = A(g)`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  background: ${({ theme: e }) => e.colors.background};
  justify-content: space-between;
  align-items: center;
`, li = A(i).attrs({
	fontSize: "12px",
	bold: !0
})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`, ui = A(g)`
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
`, di = A.button`
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
`, fi = A(g)`
  flex-direction: column;
`, pi = A(g)`
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  background: ${({ theme: e }) => e.colors.input};
`, mi = A.input`
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
`, hi = A(g)`
  gap: 6px;
  margin-top: 4px;
`, gi = A.button`
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
`, _i = A.div`
  background: ${({ theme: e }) => e.colors.backgroundAlt};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Z = A(g)`
  justify-content: space-between;
  align-items: center;
`, vi = A(g)`
  flex-direction: column;
  gap: 8px;
`, yi = A(g)`
  align-items: center;
  gap: 8px;
  opacity: ${({ $state: e }) => e === "pending" ? .5 : 1};
`, bi = A.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  background: ${({ $state: e, theme: t }) => e === "done" ? t.colors.success : t.colors.input};
  color: ${({ $state: e, theme: t }) => e === "done" ? "#fff" : t.colors.text};
`, xi = A(i).attrs({
	fontSize: "32px",
	bold: !0
})`
  text-align: center;
  font-variant-numeric: tabular-nums;
`, Si = A.div`
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
`, Ci = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`%${t}%`).join(String(n)), e) : e, wi = [
	25,
	50,
	75
], Ti = ({ isOpen: e, onClose: t, step: n, evmAddress: r, solanaAddress: a, isLoadingAssets: o = !1, assets: s, selectedAssetId: c, onSelectAsset: l, otherSupportedSymbols: u = [], selectedAsset: d, amount: h, onAmountChange: _, sourceAddress: v, errorSlot: b, onPercentClick: x, submitState: S, canContinue: C, onContinue: w, onBack: T, receipt: E, checkingElapsedMs: D = 0, onDepositAgain: O, onRetry: k, t: A = Ci, renderTokenIcon: j, renderSpinner: F }) => {
	let I = A(n === "success" ? "Deposit Successful" : n === "checking" ? "Processing Deposit" : n === "failed" ? "Deposit Failed" : "Fund your Account"), L = (() => {
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
	})(), R = (e, t = 24) => j ? j(e, t) : /* @__PURE__ */ N(Si, {
		$size: t,
		children: e.symbol.slice(0, 1)
	}), z = (e) => F ? F(e) : /* @__PURE__ */ N("div", {
		style: {
			width: e,
			height: e,
			borderRadius: "50%",
			border: `${Math.max(2, Math.round(e / 16))}px solid currentColor`,
			borderTopColor: "transparent",
			animation: "pcs-deposit-spin 0.8s linear infinite"
		},
		children: /* @__PURE__ */ N("style", { children: "@keyframes pcs-deposit-spin{to{transform:rotate(360deg)}}" })
	}), B = S === "switching-chain" || S === "approving" || S === "approve-confirming" || S === "depositing" || S === "deposit-confirming";
	return /* @__PURE__ */ N(f, {
		isOpen: e,
		onDismiss: t,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ N(p, {
			title: I,
			onDismiss: t,
			children: /* @__PURE__ */ P(ii, { children: [
				n === "amount" && /* @__PURE__ */ N(g, {
					justifyContent: "flex-start",
					children: /* @__PURE__ */ N(y, {
						scale: "sm",
						variant: "text",
						onClick: T,
						"aria-label": "back",
						startIcon: /* @__PURE__ */ N(m, { width: "18px" }),
						children: A("Back")
					})
				}),
				n === "select" && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P(ai, { children: [
						r && /* @__PURE__ */ P(oi, { children: [
							/* @__PURE__ */ N("div", { style: {
								width: 24,
								height: 24,
								borderRadius: 999,
								background: "linear-gradient(135deg, #f0b90b, #fd621d)"
							} }),
							/* @__PURE__ */ N(si, { children: r }),
							/* @__PURE__ */ N(i, {
								fontSize: "11px",
								color: "textSubtle",
								style: { marginLeft: "auto" },
								children: "EVM"
							})
						] }),
						a && /* @__PURE__ */ P(oi, {
							style: { borderTop: r ? "1px solid var(--colors-cardBorder)" : void 0 },
							children: [
								/* @__PURE__ */ N("div", { style: {
									width: 24,
									height: 24,
									borderRadius: 999,
									background: "linear-gradient(135deg, #14f195, #9945ff)"
								} }),
								/* @__PURE__ */ N(si, { children: a }),
								/* @__PURE__ */ N(i, {
									fontSize: "11px",
									color: "textSubtle",
									style: { marginLeft: "auto" },
									children: "Solana"
								})
							]
						}),
						/* @__PURE__ */ P(ci, { children: [/* @__PURE__ */ P("div", { children: [/* @__PURE__ */ N(li, {
							color: "textSubtle",
							children: A("Balance")
						}), /* @__PURE__ */ N(i, {
							fontSize: "12px",
							color: "textSubtle",
							children: A("In your wallet")
						})] }), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							bold: !0,
							children: s.some((e) => e.hasBalance) ? A("Ready") : "—"
						})] })
					] }),
					o && /* @__PURE__ */ N(i, {
						fontSize: "12px",
						children: A("Loading tokens...")
					}),
					!o && s.length === 0 && /* @__PURE__ */ P(g, {
						flexDirection: "column",
						alignItems: "center",
						style: {
							gap: 6,
							padding: "24px 12px",
							border: "1px dashed",
							borderRadius: 12
						},
						children: [
							/* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								children: A("No depositable tokens in your wallet")
							}),
							/* @__PURE__ */ N(i, {
								fontSize: "12px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Send a supported token to your connected wallet on BSC, Ethereum, Arbitrum, or Solana to continue.")
							}),
							u.length > 0 && /* @__PURE__ */ N(i, {
								fontSize: "11px",
								color: "textSubtle",
								textAlign: "center",
								children: A("Supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
							})
						]
					}),
					s.length > 0 && /* @__PURE__ */ N(ui, { children: s.map((e) => /* @__PURE__ */ N(di, {
						$selected: c === e.id,
						onClick: () => l(e.id),
						title: e.displayName,
						children: /* @__PURE__ */ P(g, {
							alignItems: "center",
							style: { gap: 12 },
							children: [R(e, 32), /* @__PURE__ */ P(fi, { children: [/* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								children: e.displayName || e.symbol
							}), /* @__PURE__ */ P(i, {
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
					s.length > 0 && u.length > 0 && /* @__PURE__ */ N(i, {
						fontSize: "11px",
						color: "textSubtle",
						textAlign: "center",
						children: A("Also supported: %tokens%", { tokens: u.slice(0, 8).join(" · ") })
					})
				] }),
				n === "amount" && d && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P(pi, { children: [/* @__PURE__ */ P(g, {
						alignItems: "center",
						style: { gap: 12 },
						children: [R(d, 40), /* @__PURE__ */ P(g, {
							flexDirection: "column",
							children: [/* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								children: d.displayName || d.symbol
							}), /* @__PURE__ */ N(i, {
								fontSize: "12px",
								color: "textSubtle",
								children: d.balanceText
							})]
						})]
					}), /* @__PURE__ */ P(g, {
						flexDirection: "column",
						alignItems: "flex-end",
						style: {
							minWidth: 0,
							flex: 1
						},
						children: [/* @__PURE__ */ N(mi, {
							value: h,
							onChange: (e) => _(e.target.value),
							placeholder: "0",
							inputMode: "decimal"
						}), /* @__PURE__ */ P(hi, { children: [wi.map((e) => /* @__PURE__ */ P(gi, {
							onClick: () => x(e),
							children: [e, "%"]
						}, e)), /* @__PURE__ */ N(gi, {
							onClick: () => x(100),
							children: A("MAX")
						})] })]
					})] }),
					/* @__PURE__ */ P(_i, { children: [
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(li, {
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							children: v ?? "—"
						})] }),
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(li, {
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(li, {
							color: "textSubtle",
							children: A("Token")
						}), /* @__PURE__ */ P(g, {
							alignItems: "center",
							style: { gap: 6 },
							children: [R(d, 16), /* @__PURE__ */ N(i, {
								fontSize: "14px",
								bold: !0,
								children: d.symbol
							})]
						})] })
					] }),
					b,
					/* @__PURE__ */ N(y, {
						onClick: w,
						disabled: !C || B,
						isLoading: B,
						scale: "md",
						children: L
					})
				] }),
				n === "checking" && E && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P(g, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [z(72), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("Your deposit is on its way. This usually takes 30-60 seconds.")
						})]
					}),
					/* @__PURE__ */ P(vi, { children: [
						/* @__PURE__ */ P(yi, {
							$state: "done",
							children: [/* @__PURE__ */ N(bi, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ N(i, {
								fontSize: "13px",
								children: A("Transaction broadcast")
							})]
						}),
						/* @__PURE__ */ P(yi, {
							$state: "done",
							children: [/* @__PURE__ */ N(bi, {
								$state: "done",
								children: "✓"
							}), /* @__PURE__ */ N(i, {
								fontSize: "13px",
								children: A("Confirmed on-chain")
							})]
						}),
						/* @__PURE__ */ P(yi, {
							$state: "active",
							children: [/* @__PURE__ */ N(bi, {
								$state: "active",
								children: z(16)
							}), /* @__PURE__ */ N(i, {
								fontSize: "13px",
								children: A("Waiting for Aster to credit your account…")
							})]
						})
					] }),
					/* @__PURE__ */ P(_i, { children: [
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(li, {
							color: "textSubtle",
							children: A("Amount")
						}), /* @__PURE__ */ P(i, {
							fontSize: "14px",
							bold: !0,
							children: [
								E.amount,
								" ",
								E.assetSymbol
							]
						})] }),
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(li, {
							color: "textSubtle",
							children: A("Tx hash")
						}), /* @__PURE__ */ P(i, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [
								E.hash.slice(0, 10),
								"…",
								E.hash.slice(-8)
							]
						})] }),
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(li, {
							color: "textSubtle",
							children: A("Elapsed")
						}), /* @__PURE__ */ P(i, {
							fontSize: "14px",
							bold: !0,
							style: { fontVariantNumeric: "tabular-nums" },
							children: [Math.floor(D / 1e3), "s"]
						})] })
					] }),
					/* @__PURE__ */ N(y, {
						scale: "md",
						variant: "secondary",
						onClick: t,
						children: A("Close")
					})
				] }),
				n === "success" && E && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P(xi, { children: [
						E.amount,
						" ",
						E.assetSymbol
					] }),
					/* @__PURE__ */ P(_i, { children: [
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(i, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Source")
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							bold: !0,
							children: E.sourceAddress ?? "—"
						})] }),
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(i, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Destination")
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							bold: !0,
							children: A("Aster perp account")
						})] }),
						/* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(i, {
							fontSize: "14px",
							color: "textSubtle",
							children: A("Processing time")
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							bold: !0,
							children: A("~1-2 min")
						})] })
					] }),
					/* @__PURE__ */ N(_i, { children: /* @__PURE__ */ P(Z, { children: [/* @__PURE__ */ N(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: A("Tx hash")
					}), /* @__PURE__ */ P(i, {
						fontSize: "14px",
						bold: !0,
						style: { fontVariantNumeric: "tabular-nums" },
						children: [
							E.hash.slice(0, 10),
							"…",
							E.hash.slice(-8)
						]
					})] }) }),
					/* @__PURE__ */ P(g, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ N(y, {
							style: { flex: 1 },
							scale: "md",
							onClick: t,
							children: A("View Balance")
						}), /* @__PURE__ */ N(y, {
							style: { flex: 1 },
							scale: "md",
							variant: "secondary",
							onClick: O,
							children: A("Deposit Again")
						})]
					})
				] }),
				n === "failed" && /* @__PURE__ */ P(M, { children: [
					/* @__PURE__ */ P(g, {
						flexDirection: "column",
						alignItems: "center",
						style: { gap: 8 },
						children: [/* @__PURE__ */ N(i, {
							fontSize: "44px",
							bold: !0,
							style: { lineHeight: 1 },
							children: "⚠️"
						}), /* @__PURE__ */ N(i, {
							fontSize: "14px",
							color: "textSubtle",
							textAlign: "center",
							children: A("The transaction did not go through. Your funds did not move.")
						})]
					}),
					b,
					/* @__PURE__ */ P(g, {
						style: { gap: 8 },
						children: [/* @__PURE__ */ N(y, {
							style: { flex: 1 },
							scale: "md",
							onClick: k,
							children: A("Try Again")
						}), /* @__PURE__ */ N(y, {
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
}, Ei = (e) => e, Di = ({ isOpen: e, onClose: n, phase: r, eoaAddress: a, agentAddress: o, isProvisioning: c = !1, linkButtonLabel: l, isLinkDisabled: u = !1, isLinkPending: d = !1, onLinkWallet: m, approveButtonLabel: _, isApproveDisabled: v = !1, isApprovePending: b = !1, onApprove: x, errorSlot: S, t: C = Ei }) => {
	let w = o ?? C(c ? "Provisioning..." : "Will be created in step 1");
	return /* @__PURE__ */ N(f, {
		isOpen: e,
		onDismiss: n,
		closeOnOverlayClick: !0,
		children: /* @__PURE__ */ N(p, {
			title: C("Enable Perps Trading"),
			onDismiss: n,
			children: /* @__PURE__ */ P(g, {
				flexDirection: "column",
				style: {
					gap: 16,
					minWidth: 320,
					maxWidth: 420
				},
				children: [
					/* @__PURE__ */ N(i, {
						fontSize: "14px",
						color: "textSubtle",
						children: C("We will create (or reuse) a Privy embedded wallet as your trading agent. The agent can only place orders — it cannot withdraw funds.")
					}),
					/* @__PURE__ */ P(s, { children: [/* @__PURE__ */ N(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Your wallet")
					}), /* @__PURE__ */ N(i, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: a ?? "—"
					})] }),
					/* @__PURE__ */ P(s, { children: [/* @__PURE__ */ N(i, {
						fontSize: "12px",
						color: "textSubtle",
						children: C("Agent (trading signer)")
					}), /* @__PURE__ */ N(i, {
						bold: !0,
						fontSize: "14px",
						style: { wordBreak: "break-all" },
						children: w
					})] }),
					S,
					r === "link-wallet" && /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ N(y, {
						onClick: m,
						disabled: u || d,
						isLoading: d,
						scale: "md",
						children: l
					}), /* @__PURE__ */ N(i, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign one message in your wallet. No funds move.")
					})] }),
					(r === "authorize-agent" || r === "checking-status") && /* @__PURE__ */ P(M, { children: [/* @__PURE__ */ N(y, {
						onClick: x,
						disabled: v || b || r === "checking-status",
						isLoading: b || r === "checking-status",
						scale: "md",
						children: _
					}), /* @__PURE__ */ N(i, {
						fontSize: "11px",
						color: "textSubtle",
						children: C("You'll sign two messages with your main wallet: one to authorize the trading agent, one to set the builder fee cap (10 bps). No funds move and withdrawals always require your main wallet.")
					})] }),
					r === "done" && /* @__PURE__ */ N(t, {
						variant: "success",
						children: /* @__PURE__ */ N(h, { children: C("Trading enabled.") })
					})
				]
			})
		})
	});
}, Oi = [
	50,
	250,
	500,
	1001
], ki = 1001, Ai = 50 / 1001, ji = 250 / 1001, Mi = (e, t) => e <= t * Ai ? "safe" : e <= t * ji ? "warn" : "danger", Ni = 500 / 1001, Pi = (e, t) => e > t * Ni, Fi = (e, t) => e > t * ji, Ii = (e) => e === "safe" ? "Safe zone" : e === "warn" ? "High leverage" : "Danger zone", Li = (e) => e === "safe" ? "🌿" : e === "warn" ? "⚡️" : "🔥", Ri = (e) => e === "safe" ? "A good place to start. You'll feel the market without getting rekt." : e === "warn" ? "Liquidation triggers around a 1% move." : "1% move against you liquidates. Only risk what you can afford to lose.", zi = () => /* @__PURE__ */ N("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", {
		d: "M10.9629 8.57864L6.79069 12.7509C6.58302 12.9586 6.33844 13.0634 6.05694 13.0654C5.77544 13.0674 5.5251 12.9628 5.30594 12.7516C5.1026 12.5403 5.00194 12.2939 5.00394 12.0124C5.00594 11.7309 5.1111 11.4861 5.31944 11.2781L11.2714 5.33339C11.3736 5.23139 11.4873 5.15456 11.6124 5.10289C11.7376 5.05122 11.8683 5.02539 12.0044 5.02539C12.1406 5.02539 12.2713 5.05122 12.3964 5.10289C12.5216 5.15456 12.6319 5.22797 12.7272 5.32314L18.6829 11.2791C18.8983 11.4945 19.0059 11.7367 19.0059 12.0059C19.0059 12.2751 18.9023 12.5153 18.6949 12.7266C18.4758 12.9378 18.225 13.0434 17.9427 13.0434C17.6604 13.0434 17.4164 12.9378 17.2107 12.7266L13.0379 8.57864V18.3664C13.0379 18.6571 12.9383 18.9025 12.7389 19.1026C12.5394 19.303 12.295 19.4031 12.0057 19.4031C11.7164 19.4031 11.4702 19.303 11.2672 19.1026C11.0644 18.9025 10.9629 18.6571 10.9629 18.3664V8.57864Z",
		fill: "currentColor"
	})
}), Bi = () => /* @__PURE__ */ N("svg", {
	width: "24",
	height: "24",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", {
		d: "M10.9997 5V16.17L6.11973 11.29C5.72973 10.9 5.08973 10.9 4.69973 11.29C4.30973 11.68 4.30973 12.31 4.69973 12.7L11.2897 19.29C11.6797 19.68 12.3097 19.68 12.6997 19.29L19.2897 12.7C19.6797 12.31 19.6797 11.68 19.2897 11.29C18.8997 10.9 18.2697 10.9 17.8797 11.29L12.9997 16.17V5C12.9997 4.45 12.5497 4 11.9997 4C11.4497 4 10.9997 4.45 10.9997 5Z",
		fill: "currentColor"
	})
}), Vi = () => /* @__PURE__ */ N("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ N("path", {
		d: "M7.99636 11.2598C8.18224 11.2598 8.3393 11.1966 8.46752 11.0702C8.59563 10.9436 8.65969 10.7869 8.65969 10.6V7.85984C8.65969 7.67284 8.5968 7.51612 8.47102 7.38967C8.34524 7.26323 8.18936 7.20001 8.00336 7.20001C7.81747 7.20001 7.66041 7.26323 7.53219 7.38967C7.40408 7.51612 7.34002 7.67284 7.34002 7.85984V10.6C7.34002 10.7869 7.40291 10.9436 7.52869 11.0702C7.65447 11.1966 7.81036 11.2598 7.99636 11.2598ZM7.99636 6.07968C8.18791 6.07968 8.34969 6.0149 8.48169 5.88534C8.61358 5.75567 8.67952 5.59506 8.67952 5.40351C8.67952 5.21195 8.61474 5.05018 8.48519 4.91818C8.35552 4.78629 8.19491 4.72034 8.00336 4.72034C7.8118 4.72034 7.65002 4.78512 7.51802 4.91467C7.38613 5.04434 7.32019 5.20495 7.32019 5.39651C7.32019 5.58806 7.38497 5.74984 7.51452 5.88184C7.64419 6.01373 7.8048 6.07968 7.99636 6.07968ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Hi = () => /* @__PURE__ */ N("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", {
		d: "M7.63537 9.36302L5.17504 6.90152C5.13704 6.86352 5.10854 6.82279 5.08954 6.77935C5.07054 6.73591 5.06104 6.69207 5.06104 6.64785C5.06104 6.55941 5.0932 6.48074 5.15753 6.41185C5.22187 6.34285 5.30565 6.30835 5.40887 6.30835H10.5909C10.6941 6.30835 10.7779 6.34368 10.8422 6.41435C10.9065 6.4849 10.9387 6.56552 10.9387 6.65618C10.9387 6.67263 10.9007 6.75418 10.8247 6.90085L8.36437 9.36302C8.31459 9.41279 8.25726 9.45013 8.19237 9.47502C8.12759 9.49991 8.06342 9.51235 7.99987 9.51235C7.93631 9.51235 7.87215 9.49991 7.80737 9.47502C7.74248 9.45013 7.68515 9.41279 7.63537 9.36302Z",
		fill: "currentColor"
	})
}), Ui = () => /* @__PURE__ */ N("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 16 16",
	fill: "none",
	"aria-hidden": "true",
	style: { aspectRatio: "1 / 1" },
	children: /* @__PURE__ */ N("path", {
		d: "M7.36802 8.63184V10.6C7.36802 10.779 7.42824 10.9291 7.54869 11.0502C7.66913 11.1713 7.81836 11.2318 7.99636 11.2318C8.17436 11.2318 8.32474 11.1713 8.44752 11.0502C8.5703 10.9291 8.63169 10.779 8.63169 10.6V8.63184H10.5999C10.7789 8.63184 10.9289 8.57162 11.05 8.45117C11.1711 8.33073 11.2317 8.18151 11.2317 8.00351C11.2317 7.82551 11.1711 7.67512 11.05 7.55234C10.9289 7.42956 10.7789 7.36818 10.5999 7.36818H8.63169V5.40001C8.63169 5.22101 8.57147 5.07095 8.45102 4.94984C8.33058 4.82873 8.18136 4.76818 8.00336 4.76818C7.82536 4.76818 7.67497 4.82873 7.55219 4.94984C7.42941 5.07095 7.36802 5.22101 7.36802 5.40001V7.36818H5.39986C5.22086 7.36818 5.0708 7.4284 4.94969 7.54884C4.82858 7.66929 4.76802 7.81851 4.76802 7.99651C4.76802 8.17451 4.82858 8.3249 4.94969 8.44767C5.0708 8.57045 5.22086 8.63184 5.39986 8.63184H7.36802ZM8.00452 14.5355C7.10241 14.5355 6.25452 14.3654 5.46086 14.0252C4.66708 13.685 3.97263 13.2173 3.37752 12.6223C2.78252 12.0272 2.31491 11.3331 1.97469 10.5398C1.63447 9.74662 1.46436 8.89745 1.46436 7.99234C1.46436 7.08734 1.63447 6.24079 1.97469 5.45267C2.31491 4.66445 2.78252 3.97279 3.37752 3.37767C3.97263 2.78267 4.6668 2.31506 5.46002 1.97484C6.25324 1.63462 7.10241 1.46451 8.00752 1.46451C8.91252 1.46451 9.75908 1.63462 10.5472 1.97484C11.3354 2.31506 12.0271 2.78267 12.6222 3.37767C13.2172 3.97279 13.6848 4.66567 14.025 5.45634C14.3652 6.24701 14.5354 7.09334 14.5354 7.99534C14.5354 8.89745 14.3652 9.74534 14.025 10.539C13.6848 11.3328 13.2172 12.0272 12.6222 12.6223C12.0271 13.2173 11.3342 13.685 10.5435 14.0252C9.75286 14.3654 8.90652 14.5355 8.00452 14.5355ZM7.99986 13.1522C9.43363 13.1522 10.6508 12.652 11.6514 11.6515C12.6518 10.651 13.152 9.43379 13.152 8.00001C13.152 6.56623 12.6518 5.34906 11.6514 4.34851C10.6508 3.34806 9.43363 2.84784 7.99986 2.84784C6.56608 2.84784 5.34891 3.34806 4.34836 4.34851C3.34791 5.34906 2.84769 6.56623 2.84769 8.00001C2.84769 9.43379 3.34791 10.651 4.34836 11.6515C5.34891 12.652 6.56608 13.1522 7.99986 13.1522Z",
		fill: "currentColor"
	})
}), Wi = () => /* @__PURE__ */ N("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 18 18",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", {
		d: "M4.10361 15.4524C3.67261 15.4524 3.30549 15.3008 3.00224 14.9975C2.69899 14.6943 2.54736 14.3272 2.54736 13.8962V4.1038C2.54736 3.6728 2.69899 3.30567 3.00224 3.00242C3.30549 2.69917 3.67261 2.54755 4.10361 2.54755H13.896C14.327 2.54755 14.6941 2.69917 14.9974 3.00242C15.3006 3.30567 15.4522 3.6728 15.4522 4.1038H9.4588C8.72668 4.1038 8.10111 4.3633 7.58211 4.8823C7.06311 5.4013 6.80361 6.02686 6.80361 6.75898V11.25C6.80361 11.9821 7.06311 12.6062 7.58211 13.1222C8.10111 13.6382 8.72668 13.8962 9.4588 13.8962H15.4522C15.4522 14.3309 15.3006 14.699 14.9974 15.0004C14.6941 15.3017 14.327 15.4524 13.896 15.4524H4.10361ZM9.4588 12.6C9.09055 12.6 8.77199 12.467 8.50311 12.2012C8.23424 11.9353 8.0998 11.6182 8.0998 11.25V6.75898C8.0998 6.39073 8.23424 6.07217 8.50311 5.8033C8.77199 5.53442 9.09055 5.39998 9.4588 5.39998H14.9932C15.3615 5.39998 15.6801 5.53442 15.9489 5.8033C16.2178 6.07217 16.3522 6.39073 16.3522 6.75898V11.25C16.3522 11.6182 16.2178 11.9353 15.9489 12.2012C15.6801 12.467 15.3615 12.6 14.9932 12.6H9.4588ZM12.1498 10.125C12.4623 10.125 12.7279 10.0156 12.9467 9.79686C13.1654 9.57811 13.2748 9.31248 13.2748 8.99998C13.2748 8.68748 13.1654 8.42186 12.9467 8.20311C12.7279 7.98436 12.4623 7.87498 12.1498 7.87498C11.8373 7.87498 11.5717 7.98436 11.3529 8.20311C11.1342 8.42186 11.0248 8.68748 11.0248 8.99998C11.0248 9.31248 11.1342 9.57811 11.3529 9.79686C11.5717 10.0156 11.8373 10.125 12.1498 10.125Z",
		fill: "currentColor"
	})
}), Gi = A(I)`
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
`, Ki = A.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-self: stretch;
  padding: 24px;
`, qi = A.div`
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
`, Ji = A.div`
  display: flex;
  gap: 8px;
  align-self: stretch;
  padding: 0;
`, Yi = A.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 0 0;
  justify-content: space-between;
  gap: 16px;
`;
A(g)`
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, A.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;
  font-family: inherit;
  color: ${({ theme: e }) => e.colors.text};
`, A.span`
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
`, A.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  padding: 0 6px;
`, A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`, A.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  line-height: 1.2;
`, A.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme: e, $positive: t }) => t ? e.colors.success : e.colors.failure};
`;
var Xi = A.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
`, Zi = A.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`, Qi = A(g)`
  align-items: center;
  justify-content: space-between;
`, $i = A(i).attrs({ fontSize: "12px" })`
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.36px;
`, ea = A.button`
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
`, ta = A.span`
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
`, na = A.label`
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
`, ra = A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
`, ia = A.span`
  align-self: stretch;
  color: ${({ theme: e }) => e.colors.failure};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  font-feature-settings: 'liga' off;
`, aa = A.span`
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
`, oa = A.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`, sa = A.input`
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
`, ca = A.button`
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
`, la = A.span`
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
`, ua = A.span`
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
`, da = A.span`
  position: relative;
  display: inline-flex;
`, fa = A.div`
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
`, pa = A.button`
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
`, ma = A.span`
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
A.span`
  font-size: 14px;
  font-weight: 600;
`;
var ha = A(g)`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
`, ga = A.button`
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
`, _a = A.span`
  width: 1px;
  height: 16px;
  background: ${({ theme: e }) => e.colors.cardBorder};
`, va = A(g)`
  justify-content: space-between;
  align-items: center;
`, ya = A.span`
  color: ${({ theme: e }) => e.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.4px;
`, ba = {
	safe: "#129E7D",
	warn: "#FFB237",
	danger: "#ED4B9E"
}, xa = {
	safe: "#EAFBF7",
	warn: "#FBF2E7",
	danger: "#FFF0F9"
}, Sa = A.span`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border-top: 1px solid ${({ $zone: e }) => ba[e]};
  border-right: 1px solid ${({ $zone: e }) => ba[e]};
  border-bottom: 2px solid ${({ $zone: e }) => ba[e]};
  border-left: 1px solid ${({ $zone: e }) => ba[e]};
  background: ${({ $zone: e }) => xa[e]};
`, Ca = A.span`
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
`, wa = A.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #280D5F;
  cursor: help;
`, Ta = A.span`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 200px;
  padding: 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #280D5F;
  box-shadow:
    0 1px 2px 0 rgba(0, 0, 0, 0.08),
    0 4px 8px 0 rgba(0, 0, 0, 0.16);
  color: #FFF;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.12s ease;
  z-index: 10;
  ${wa}:hover &,
  ${wa}:focus-visible & {
    opacity: 1;
    visibility: visible;
  }
`, Ea = A.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 16px;
  margin-top: 16px;
`, Da = A.div`
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
`, Oa = A.span`
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
`, ka = () => /* @__PURE__ */ P("svg", {
	width: "38",
	height: "39",
	viewBox: "0 0 38 39",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ N("ellipse", {
			cx: "19.0019",
			cy: "19.6397",
			rx: "19.0019",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "19.0013",
			cy: "17.455",
			rx: "17.8841",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ N("rect", {
			x: "23.3804",
			y: "9",
			width: "11.1776",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Aa = () => /* @__PURE__ */ P("svg", {
	width: "42",
	height: "43",
	viewBox: "0 0 42 43",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ N("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "18.5459",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "22.9092",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ N("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), ja = () => /* @__PURE__ */ P("svg", {
	width: "44",
	height: "48",
	viewBox: "0 0 44 48",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ N("ellipse", {
			cx: "25.0904",
			cy: "29.4522",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "25.0913",
			cy: "27.2753",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "18.5455",
			cy: "24.003",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "18.5464",
			cy: "21.8183",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "22.9098",
			cy: "19.6397",
			rx: "18.5455",
			ry: "18.5459",
			fill: "#F9AF6C"
		}),
		/* @__PURE__ */ N("ellipse", {
			cx: "22.9087",
			cy: "17.455",
			rx: "17.4546",
			ry: "17.455",
			fill: "#D0702D"
		}),
		/* @__PURE__ */ N("rect", {
			x: "21.8184",
			y: "12",
			width: "10.9091",
			height: "10.9094",
			rx: "2",
			fill: "#FAD658"
		})
	]
}), Ma = A.input`
  position: absolute;
  inset: -4px 0;
  width: 100%;
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
  margin: 0;
`, Na = A(g)`
  display: flex;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${({ theme: e }) => e.colors.inputSecondary};
  background: ${({ theme: e }) => e.colors.input};
  box-shadow: 0 2px 0 -1px rgba(0, 0, 0, 0.06) inset;
`, Pa = A.button`
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
`, Fa = A.div`
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
`, Ia = A.input`
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
`, La = A.span`
  font-size: 13px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  border-left: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  padding-left: 4px;
`;
A.div`
  margin: 0 20px;
  background: ${({ theme: e }) => e.colors.input};
  border: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  border-radius: 16px;
  overflow: hidden;
`;
var Ra = A.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`, za = A(g)`
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`, Ba = A.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: 0.24px;
`, Va = A.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme: e, $danger: t }) => t ? e.colors.failure : e.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.24px;
  font-variant-numeric: tabular-nums;
`, Ha = A.button`
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
`, Ua = A.span`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`, Wa = A(g)`
  align-self: stretch;
  gap: 8px;
`, Ga = A(y)`
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
`, Ka = A.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
`, qa = A(g)`
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
`, Ja = A.span`
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
`, Ya = A.span`
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
`, Xa = ({ selected: e, options: t, onSelect: n, onClickFallback: r }) => {
	let [i, a] = k(!1), o = O(null);
	w(() => {
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
	return /* @__PURE__ */ P(da, {
		ref: o,
		children: [/* @__PURE__ */ P(ca, {
			type: "button",
			onClick: () => {
				s ? a((e) => !e) : r?.();
			},
			"aria-label": "Choose bet denomination",
			children: [/* @__PURE__ */ N(la, { children: c?.logoUrl ? /* @__PURE__ */ N("img", {
				src: c.logoUrl,
				alt: e,
				loading: "lazy",
				decoding: "async"
			}) : e }), /* @__PURE__ */ N(ua, { children: /* @__PURE__ */ N(Hi, {}) })]
		}), s && i ? /* @__PURE__ */ N(fa, {
			role: "menu",
			children: t.map((t) => /* @__PURE__ */ P(pa, {
				type: "button",
				role: "menuitemradio",
				"aria-checked": t.code === e,
				$selected: t.code === e,
				onClick: () => {
					n?.(t.code), a(!1);
				},
				children: [/* @__PURE__ */ N(ma, {
					$color: t.color,
					children: t.logoUrl ? /* @__PURE__ */ N("img", {
						src: t.logoUrl,
						alt: t.code,
						loading: "lazy",
						decoding: "async"
					}) : t.code.slice(0, 1)
				}), t.code]
			}, t.code))
		}) : null]
	});
}, Za = ({ symbol: e, baseAsset: t, pair: n, price: r, pricePnlPct: i, onSymbolClick: a, bet: o, onBetChange: s, betError: l, leverage: u, onLeverageChange: d, maxLeverage: f = ki, presets: p = Oi, quoteAsset: m, onQuoteAssetClick: h, assetOptions: g, onAssetChange: _, fundBalanceText: v, onTopUpFund: y, onPercentClick: x, estimatedEntry: S, liqIfLong: C, marginRequired: w, openingFee: T, canSubmit: E, isSubmittingUp: D = !1, isSubmittingDown: O = !1, onUp: k, onDown: A, onDeposit: j, onWithdraw: M, unrealizedPnl: F }) => {
	let I = Math.min(100, Math.max(0, u / f * 100)), L = Mi(u, f), R = Pi(u, f), z = Fi(u, f), B = D || O, V = !E || B, ee = !E || B, H = b.useRef(null), U = b.useCallback((e) => {
		e.preventDefault(), e.stopPropagation();
		let t = e.currentTarget, n = H.current;
		if (!n) return;
		t.setPointerCapture(e.pointerId);
		let r = n.getBoundingClientRect(), i = (e) => {
			let t = Math.max(0, Math.min(1, (e - r.left) / r.width)), n = Math.round(1 + t * (f - 1));
			return Math.max(1, Math.min(f, n));
		}, a = (e) => d(i(e.clientX)), o = () => {
			t.removeEventListener("pointermove", a), t.removeEventListener("pointerup", o), t.removeEventListener("pointercancel", o);
		};
		t.addEventListener("pointermove", a), t.addEventListener("pointerup", o), t.addEventListener("pointercancel", o);
	}, [f, d]);
	return /* @__PURE__ */ P(Gi, {
		"aria-label": `Simple bet panel · ${n || e}`,
		children: [/* @__PURE__ */ N(Ki, { children: /* @__PURE__ */ P(Yi, { children: [/* @__PURE__ */ P(Xi, { children: [/* @__PURE__ */ P(Zi, { children: [
			/* @__PURE__ */ P(Qi, { children: [/* @__PURE__ */ N($i, { children: "My Perp Fund" }), /* @__PURE__ */ P(ea, {
				type: "button",
				onClick: y,
				"aria-label": "Top up fund",
				children: [
					/* @__PURE__ */ N("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text-subtle, #7A6EAA)"
						},
						children: /* @__PURE__ */ N(Wi, {})
					}),
					/* @__PURE__ */ N(ta, { children: v }),
					/* @__PURE__ */ N("span", {
						style: {
							display: "inline-flex",
							color: "var(--pcs-colors-text, #280D5F)"
						},
						children: /* @__PURE__ */ N(Ui, {})
					})
				]
			})] }),
			/* @__PURE__ */ P(na, { children: [/* @__PURE__ */ P(ra, { children: [/* @__PURE__ */ N(aa, { children: "My Bet" }), /* @__PURE__ */ P(oa, { children: [/* @__PURE__ */ N(sa, {
				type: "number",
				inputMode: "decimal",
				value: o,
				onChange: (e) => s(e.target.value),
				"aria-label": "Bet amount",
				placeholder: "0"
			}), /* @__PURE__ */ N(Xa, {
				selected: m,
				options: g,
				onSelect: _,
				onClickFallback: h
			})] })] }), l ? /* @__PURE__ */ N(ia, {
				role: "alert",
				children: l
			}) : null] }),
			/* @__PURE__ */ P(ha, { children: [
				/* @__PURE__ */ N(ga, {
					type: "button",
					onClick: () => x?.(.25),
					children: "25%"
				}),
				/* @__PURE__ */ N(_a, {}),
				/* @__PURE__ */ N(ga, {
					type: "button",
					onClick: () => x?.(.5),
					children: "50%"
				}),
				/* @__PURE__ */ N(_a, {}),
				/* @__PURE__ */ N(ga, {
					type: "button",
					onClick: () => x?.(1),
					children: "MAX"
				})
			] })
		] }), /* @__PURE__ */ P(Zi, { children: [
			/* @__PURE__ */ N($i, { children: "Leverage" }),
			/* @__PURE__ */ P(va, { children: [/* @__PURE__ */ P(ya, { children: [u, "x"] }), /* @__PURE__ */ P(Sa, {
				$zone: L,
				children: [
					Li(L) ? /* @__PURE__ */ N(Ca, {
						as: "span",
						"aria-hidden": !0,
						children: Li(L)
					}) : null,
					/* @__PURE__ */ N(Ca, { children: Ii(L) }),
					/* @__PURE__ */ P(wa, {
						tabIndex: 0,
						"aria-label": `${Ii(L)} explanation`,
						children: [/* @__PURE__ */ N(Vi, {}), Ri(L) ? /* @__PURE__ */ N(Ta, {
							role: "tooltip",
							children: Ri(L)
						}) : null]
					})
				]
			})] }),
			/* @__PURE__ */ P(Ea, { children: [/* @__PURE__ */ P(Da, {
				ref: H,
				$fillPct: I,
				$zone: L,
				"aria-hidden": !0,
				children: [/* @__PURE__ */ N(Ma, {
					type: "range",
					min: 1,
					max: f,
					value: u,
					onChange: (e) => d(Number(e.target.value)),
					"aria-label": "Leverage"
				}), /* @__PURE__ */ N(Oa, {
					$fillPct: I,
					$variant: R ? "triple" : z ? "double" : "single",
					onPointerDown: U,
					children: N(R ? ja : z ? Aa : ka, {})
				})]
			}), /* @__PURE__ */ P(Na, {
				role: "tablist",
				children: [/* @__PURE__ */ P(Fa, { children: [/* @__PURE__ */ N(Ia, {
					type: "number",
					min: 1,
					max: f,
					value: u,
					onChange: (e) => d(Math.max(1, Math.min(f, Number(e.target.value) || 1))),
					"aria-label": "Custom leverage"
				}), /* @__PURE__ */ N(La, { children: "%" })] }), p.map((e) => /* @__PURE__ */ P(Pa, {
					type: "button",
					role: "tab",
					"aria-selected": u === e,
					$active: u === e,
					onClick: () => d(e),
					children: [e, "x"]
				}, e))]
			})] })
		] })] }), /* @__PURE__ */ P(qi, { children: [o && o !== "0" ? /* @__PURE__ */ P(Ra, { children: [
			/* @__PURE__ */ P(za, { children: [/* @__PURE__ */ N(Ba, { children: "Estimated Entry" }), /* @__PURE__ */ N(Va, { children: S })] }),
			/* @__PURE__ */ P(za, { children: [/* @__PURE__ */ N(Ba, { children: "Liquidation if long" }), /* @__PURE__ */ N(Va, {
				$danger: !0,
				children: C
			})] }),
			/* @__PURE__ */ P(za, { children: [/* @__PURE__ */ N(Ba, { children: "Margin required" }), /* @__PURE__ */ N(Va, { children: w })] }),
			/* @__PURE__ */ P(za, { children: [/* @__PURE__ */ N(Ba, { children: "Opening fee" }), /* @__PURE__ */ N(Va, { children: T })] })
		] }) : null, /* @__PURE__ */ P(Ji, { children: [/* @__PURE__ */ N(Ha, {
			type: "button",
			$variant: "up",
			disabled: V,
			onClick: k,
			"aria-busy": D,
			children: /* @__PURE__ */ P(Ua, { children: [/* @__PURE__ */ N(zi, {}), D ? "..." : "UP"] })
		}), /* @__PURE__ */ N(Ha, {
			type: "button",
			$variant: "down",
			disabled: ee,
			onClick: A,
			"aria-busy": O,
			children: /* @__PURE__ */ P(Ua, { children: [/* @__PURE__ */ N(Bi, {}), O ? "..." : "DOWN"] })
		})] })] })] }) }), /* @__PURE__ */ P(Ka, { children: [/* @__PURE__ */ P(Wa, { children: [/* @__PURE__ */ N(Ga, {
			$variant: "primary",
			onClick: j,
			type: "button",
			children: "Deposit"
		}), /* @__PURE__ */ N(Ga, {
			$variant: "secondary",
			onClick: M,
			type: "button",
			children: "Withdraw"
		})] }), /* @__PURE__ */ P(qa, { children: [/* @__PURE__ */ P(Ja, { children: ["Unrealized PnL ", /* @__PURE__ */ N(c, {
			color: "textSubtle",
			width: "14px"
		})] }), /* @__PURE__ */ N(Ya, { children: F })] })] })]
	});
}, Qa = A.div`
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
`, $a = A.button`
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
`, eo = A.span`
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
`, to = A.span`
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
A.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`;
var no = A.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`, ro = A.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, io = A.span`
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
`, ao = A.span`
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
`, oo = A.span`
  display: flex;
  width: 20px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, so = A.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, co = A.span`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.32px;
  line-height: 1.2;
  color: ${({ theme: e }) => e.colors.text};
`, lo = A.span`
  display: flex;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  background: ${({ $positive: e }) => e ? "#EAFBF7" : "#FFF0F9"};
  font-size: 16px;
  color: ${({ theme: e }) => e.colors.text};
`, uo = A.span`
  display: inline-flex;
  align-items: center;
  color: ${({ $positive: e }) => e ? "#129E7D" : "#ED4B9E"};
`, fo = A.div`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  min-width: 0;
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
`, po = A(g)`
  align-items: center;
  gap: 24px;
  height: 56px;
  flex-shrink: 0;
`, mo = A.span`
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
`, ho = A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`, go = A.span`
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, _o = A.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, vo = () => /* @__PURE__ */ N("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", {
		d: "M1.90301 9.83956C1.65374 9.83956 1.47213 9.73331 1.35818 9.52081C1.24423 9.30831 1.25374 9.0988 1.3867 8.89228L5.49051 2.73574C5.61516 2.5553 5.78491 2.46509 5.99977 2.46509C6.21462 2.46509 6.38437 2.5553 6.50901 2.73574L10.6128 8.89228C10.7458 9.0988 10.7553 9.30831 10.6414 9.52081C10.5274 9.73331 10.3458 9.83956 10.0965 9.83956H1.90301Z",
		fill: "currentColor"
	})
}), yo = () => /* @__PURE__ */ N("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", {
		d: "M1.90301 2.16044C1.65374 2.16044 1.47213 2.26669 1.35818 2.47919C1.24423 2.69169 1.25374 2.9012 1.3867 3.10772L5.49051 9.26426C5.61516 9.4447 5.78491 9.53491 5.99977 9.53491C6.21462 9.53491 6.38437 9.4447 6.50901 9.26426L10.6128 3.10772C10.7458 2.9012 10.7553 2.69169 10.6414 2.47919C10.5274 2.26669 10.3458 2.16044 10.0965 2.16044H1.90301Z",
		fill: "currentColor"
	})
}), bo = () => /* @__PURE__ */ N("svg", {
	width: "20",
	height: "20",
	viewBox: "0 0 20 20",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ N("path", {
		d: "M7.25878 9.75835L9.41712 11.9167C9.74212 12.2417 10.2671 12.2417 10.5921 11.9167L12.7504 9.75835C13.2754 9.23335 12.9004 8.33335 12.1588 8.33335H7.84212C7.10045 8.33335 6.73378 9.23335 7.25878 9.75835Z",
		fill: "currentColor"
	})
}), xo = A.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 13, 95, 0.60);
  z-index: 1000;
`, So = A.div`
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
`, Co = A.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`, wo = A.button`
  border: 0;
  background: transparent;
  padding: 4px 0;
  font-family: Kanit;
  font-size: 16px;
  font-weight: ${({ $active: e }) => e ? 600 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.secondary : t.colors.textSubtle};
  cursor: pointer;
  &:hover { color: ${({ theme: e }) => e.colors.text}; }
`, To = A.label`
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
`, Eo = A.input`
  flex: 1;
  border: 0;
  background: transparent;
  outline: none;
  font-family: Kanit;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.text};
  &::placeholder { color: ${({ theme: e }) => e.colors.textSubtle}; }
`, Do = A.div`
  display: grid;
  grid-template-columns: 24px 1fr 1fr 1fr 1fr;
  align-items: center;
  align-self: stretch;
  row-gap: 4px;
`, Oo = A.div`
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
`, ko = A.button`
  display: contents;
  border: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
`, Ao = A.div`
  padding: 12px 12px;
  font-family: Kanit;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
  font-variant-numeric: tabular-nums;
  ${ko}:hover & { background: ${({ theme: e }) => e.colors.cardSecondary}; }
`, jo = A(Ao)`
  padding-left: 8px;
  padding-right: 0;
  color: #F0B90B;
`, Mo = A(Ao)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`, No = A.span`
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
`, Po = A(Ao)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`, Fo = A.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme: e, $up: t }) => t ? e.colors.success : e.colors.failure};
  font-weight: 600;
`, Io = [
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
], Lo = ({ isOpen: e, onClose: t }) => e ? /* @__PURE__ */ N(xo, {
	onClick: t,
	children: /* @__PURE__ */ P(So, {
		onClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ P(Co, { children: [/* @__PURE__ */ N(wo, {
				type: "button",
				$active: !0,
				children: "Favorites"
			}), /* @__PURE__ */ N(wo, {
				type: "button",
				children: "All markets"
			})] }),
			/* @__PURE__ */ P(To, { children: [/* @__PURE__ */ N("svg", {
				width: "20",
				height: "20",
				viewBox: "0 0 24 24",
				fill: "currentColor",
				"aria-hidden": !0,
				children: /* @__PURE__ */ N("path", { d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
			}), /* @__PURE__ */ N(Eo, {
				type: "text",
				placeholder: "All tokens"
			})] }),
			/* @__PURE__ */ P(Do, {
				role: "table",
				children: [
					/* @__PURE__ */ N(Oo, { children: "SYMBOLS" }),
					/* @__PURE__ */ N(Oo, {}),
					/* @__PURE__ */ N(Oo, { children: "LAST PRICE" }),
					/* @__PURE__ */ N(Oo, { children: "1D CHANGE" }),
					/* @__PURE__ */ N(Oo, { children: "1D VOLUME (USDT)" }),
					Io.map((e) => /* @__PURE__ */ P(ko, {
						type: "button",
						children: [
							/* @__PURE__ */ N(jo, { children: "★" }),
							/* @__PURE__ */ P(Mo, { children: [/* @__PURE__ */ N(No, {
								$color: e.color,
								children: e.symbol.slice(0, 1)
							}), /* @__PURE__ */ N("span", { children: e.symbol })] }),
							/* @__PURE__ */ N(Po, { children: e.lastPrice }),
							/* @__PURE__ */ N(Po, { children: /* @__PURE__ */ P(Fo, {
								$up: e.change >= 0,
								children: [
									e.change >= 0 ? "▲" : "▼",
									" ",
									Math.abs(e.change).toFixed(1),
									"%"
								]
							}) }),
							/* @__PURE__ */ N(Po, { children: e.volume })
						]
					}, e.symbol))
				]
			})
		]
	})
}) : null, Ro = ({ baseAsset: e, pair: t, price: n, pricePnlPct: r, volume24h: i, openInterest: a, fundingRate: o, nextFunding: s, onSymbolClick: c, renderTokenIcon: l }) => {
	let u = r >= 0, d = l?.(), f = O(null), p = O(null), [m, h] = k(!1), [g, _] = k(!1);
	return w(() => {
		let e = f.current, t = p.current;
		if (!e || !t) return;
		let n = () => h(t.scrollWidth > e.clientWidth + 1);
		n();
		let r = new ResizeObserver(n);
		return r.observe(e), r.observe(t), () => r.disconnect();
	}, []), /* @__PURE__ */ P(Qa, { children: [
		/* @__PURE__ */ P($a, {
			type: "button",
			onClick: () => {
				c?.(), _(!0);
			},
			"aria-label": `Change market · ${t}`,
			children: [d == null ? /* @__PURE__ */ N(eo, { children: e }) : /* @__PURE__ */ N(to, { children: d }), /* @__PURE__ */ P(no, { children: [/* @__PURE__ */ N(ro, { children: /* @__PURE__ */ P(io, { children: [/* @__PURE__ */ N(ao, { children: t }), /* @__PURE__ */ N(oo, {
				"aria-hidden": !0,
				children: /* @__PURE__ */ N(bo, {})
			})] }) }), /* @__PURE__ */ P(so, { children: [/* @__PURE__ */ N(co, { children: n }), /* @__PURE__ */ P(lo, {
				$positive: u,
				children: [
					/* @__PURE__ */ N(uo, {
						$positive: u,
						children: N(u ? vo : yo, {})
					}),
					r.toFixed(2),
					"%"
				]
			})] })] })]
		}),
		/* @__PURE__ */ P(fo, {
			ref: f,
			children: [/* @__PURE__ */ P(po, {
				ref: p,
				children: [
					/* @__PURE__ */ P(ho, { children: [/* @__PURE__ */ N(go, { children: "24h Volume" }), /* @__PURE__ */ N(_o, { children: i })] }),
					/* @__PURE__ */ P(ho, { children: [/* @__PURE__ */ N(go, { children: "Open Interest" }), /* @__PURE__ */ N(_o, { children: a })] }),
					/* @__PURE__ */ P(ho, { children: [/* @__PURE__ */ N(go, { children: "Funding Rate" }), /* @__PURE__ */ N(_o, { children: o })] }),
					/* @__PURE__ */ P(ho, { children: [/* @__PURE__ */ N(go, { children: "Next Funding" }), /* @__PURE__ */ N(_o, { children: s })] })
				]
			}), /* @__PURE__ */ N(mo, {
				$visible: m,
				"aria-hidden": !0,
				children: /* @__PURE__ */ N("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					fill: "currentColor",
					children: /* @__PURE__ */ N("path", { d: "M7.05 14.95 12 10 7.05 5.05 8.46 3.64 14.83 10l-6.37 6.36z" })
				})
			})]
		}),
		/* @__PURE__ */ N(Lo, {
			isOpen: g,
			onClose: () => _(!1)
		})
	] });
}, zo = A(I)`
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
`, Bo = A.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
`, Vo = A.button`
  border: 0;
  background: transparent;
  font-family: inherit;
  padding: 0;
  font-size: ${({ $active: e }) => e ? "13px" : "14px"};
  font-weight: ${({ $active: e }) => e ? 700 : 400};
  color: ${({ $active: e, theme: t }) => e ? t.colors.primary : t.colors.textSubtle};
  cursor: pointer;
`, Ho = A.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`, Uo = A.div`
  flex: 1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
`, Wo = A.div`
  position: relative;
  overflow: visible;
`, Go = A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  text-align: left;
  padding-top: 6px;
  padding-bottom: 24px;
`, Ko = A.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  padding-top: 8px;
`, qo = A.span`
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
`, Jo = 1e3, Yo = 360, Xo = 20, Zo = 70;
function Qo(e) {
	if (e.length < 2) return null;
	let t = Math.min(...e.map((e) => e.price)), n = Math.max(...e.map((e) => e.price)) - t || 1, r = e.map((t, n) => n / (e.length - 1) * Jo), i = e.map((e) => Xo + (1 - (e.price - t) / n) * (Yo - Xo - Zo)), a = `M ${r[0].toFixed(2)} ${i[0].toFixed(2)}`;
	for (let e = 0; e < r.length - 1; e++) {
		let t = r[e - 1] ?? r[e], n = i[e - 1] ?? i[e], o = r[e], s = i[e], c = r[e + 1], l = i[e + 1], u = r[e + 2] ?? r[e + 1], d = i[e + 2] ?? i[e + 1], f = o + (c - t) / 6, p = s + (l - n) / 6, m = c - (u - o) / 6, h = l - (d - s) / 6;
		a += ` C ${f.toFixed(2)} ${p.toFixed(2)}, ${m.toFixed(2)} ${h.toFixed(2)}, ${c.toFixed(2)} ${l.toFixed(2)}`;
	}
	let o = `${a} L ${Jo} ${Yo} L 0 ${Yo} Z`, s = i[i.length - 1];
	return {
		line: a,
		area: o,
		endY: s
	};
}
var $o = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n", es = "\n  M 0 290\n  C 60 290, 110 280, 170 250\n  C 230 220, 290 175, 360 145\n  C 420 120, 470 110, 510 130\n  C 560 150, 590 195, 660 230\n  C 720 260, 770 280, 830 250\n  C 880 230, 920 195, 960 200\n  L 1000 200\n  L 1000 360\n  L 0 360\n  Z\n", ts = 200, ns = ({ timeframe: e, timeframes: t, onTimeframeChange: n, points: r, currentPriceLabel: i, yTicks: a, xTicks: o }) => {
	let s = j(), c = `simple-chart-fill-${T().replace(/:/g, "")}`, l = s?.colors?.primary ?? "#1FC7D4", u = D(() => Qo(r), [r]), d = u?.line ?? $o, f = u?.area ?? es, p = u?.endY ?? ts;
	return /* @__PURE__ */ P(zo, { children: [/* @__PURE__ */ N(Bo, {
		role: "tablist",
		children: t.map((t) => /* @__PURE__ */ N(Vo, {
			type: "button",
			role: "tab",
			"aria-selected": e === t,
			$active: e === t,
			onClick: () => n(t),
			children: t
		}, t))
	}), /* @__PURE__ */ P(Ho, { children: [/* @__PURE__ */ P(Uo, { children: [/* @__PURE__ */ P(Wo, { children: [/* @__PURE__ */ P("svg", {
		viewBox: `0 0 ${Jo} ${Yo}`,
		preserveAspectRatio: "none",
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		},
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ N("defs", { children: /* @__PURE__ */ P("linearGradient", {
				id: c,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ N("stop", {
					offset: "0%",
					stopColor: l,
					stopOpacity: "0.30"
				}), /* @__PURE__ */ N("stop", {
					offset: "100%",
					stopColor: l,
					stopOpacity: "0.02"
				})]
			}) }),
			/* @__PURE__ */ N("path", {
				d: f,
				fill: `url(#${c})`
			}),
			/* @__PURE__ */ N("path", {
				d,
				fill: "none",
				stroke: l,
				strokeWidth: "2"
			}),
			/* @__PURE__ */ N("line", {
				x1: "0",
				y1: p,
				x2: Jo - 10,
				y2: p,
				stroke: l,
				strokeWidth: "1",
				strokeDasharray: "4 4",
				opacity: "0.7"
			})
		]
	}), /* @__PURE__ */ N(qo, {
		style: {
			right: -8,
			top: `calc(${p}/${Yo} * 100% - 14px)`
		},
		children: i
	})] }), /* @__PURE__ */ N(Go, {
		"aria-hidden": !0,
		children: a.map((e, t) => /* @__PURE__ */ N("span", { children: e }, `${e}-${t}`))
	})] }), /* @__PURE__ */ N(Ko, {
		"aria-hidden": !0,
		children: o.map((e, t) => /* @__PURE__ */ N("span", { children: e }, `${e}-${t}`))
	})] })] });
}, rs = A(I)`
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
`, is = A.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  align-self: stretch;
`, as = A.button`
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
`, os = A.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 56px;
  align-items: center;
`, ss = A.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`, Q = A.div`
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
`, $ = A.div`
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
`, cs = A($)`
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
`, ls = A.span`
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
`, us = A.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`, ds = A.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text};
`, fs = A.span`
  font-size: 12px;
  color: ${({ theme: e }) => e.colors.textSubtle};
`, ps = A($)`
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
`, ms = A($)`
  color: ${({ $sign: e, theme: t }) => e === "positive" ? "var(--pcs-colors-positive60, #129E7D)" : e === "negative" ? t.colors.failure : t.colors.text};
  text-align: right;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
`, hs = A($)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`, gs = A.div`
  flex: 1;
  height: 6px;
  border-radius: 999px;
  background: ${({ theme: e }) => e.colors.input};
  overflow: hidden;
  max-width: 94px;
`, _s = A.div`
  height: 100%;
  width: ${({ $pct: e }) => `${Math.max(0, Math.min(100, e))}%`};
  background: ${({ $status: e, theme: t }) => e === "safe" ? t.colors.success : e === "warn" ? t.colors.warning : t.colors.failure};
  border-radius: 999px;
`, vs = A.button`
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
`, ys = A.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 16px;
  color: ${({ theme: e }) => e.colors.textSubtle};
  font-size: 14px;
`, bs = A.span`
  color: ${({ $side: e, theme: t }) => e === "BUY" ? t.colors.success : t.colors.failure};
  font-weight: 600;
`, xs = {
	BNB: "#F0B90B",
	BTC: "#F7931A",
	ETH: "#627EEA",
	USDC: "#2775CA",
	USDT: "#26A17B",
	CAKE: "#23CAD5"
}, Ss = (e) => xs[e.toUpperCase()] ?? "#7A6EAA", Cs = (e) => e === "up" ? "↑" : "↓", ws = (e) => e === "up" ? "Up/Long" : "Down/Short", Ts = () => /* @__PURE__ */ N("svg", {
	width: "18",
	height: "18",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": !0,
	children: /* @__PURE__ */ N("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
}), Es = ({ tab: e, onTabChange: t, positions: n, openOrders: r, historyEmpty: i = !0, onClosePosition: a, renderTokenIcon: o }) => /* @__PURE__ */ P(rs, { children: [
	/* @__PURE__ */ P(is, {
		role: "tablist",
		children: [
			/* @__PURE__ */ N(as, {
				type: "button",
				role: "tab",
				"aria-selected": e === "positions",
				$active: e === "positions",
				onClick: () => t("positions"),
				children: "Positions"
			}),
			/* @__PURE__ */ N(as, {
				type: "button",
				role: "tab",
				"aria-selected": e === "orders",
				$active: e === "orders",
				onClick: () => t("orders"),
				children: "Open Orders"
			}),
			/* @__PURE__ */ N(as, {
				type: "button",
				role: "tab",
				"aria-selected": e === "history",
				$active: e === "history",
				onClick: () => t("history"),
				children: "Transaction history"
			})
		]
	}),
	e === "positions" && (n.length === 0 ? /* @__PURE__ */ N(ys, { children: "No open positions" }) : /* @__PURE__ */ P(os, {
		role: "table",
		children: [
			/* @__PURE__ */ N(Q, { children: "Token" }),
			/* @__PURE__ */ N(Q, { children: "Direction" }),
			/* @__PURE__ */ N(Q, { children: "Unrealized PnL" }),
			/* @__PURE__ */ N(Q, { children: "Entry Price" }),
			/* @__PURE__ */ N(Q, { children: "Liq. Price" }),
			/* @__PURE__ */ N(Q, { children: "Distance to Liq" }),
			/* @__PURE__ */ N(Q, {}),
			n.map((e) => /* @__PURE__ */ P(b.Fragment, { children: [
				/* @__PURE__ */ P(cs, { children: [o?.(e) ?? /* @__PURE__ */ N(ls, {
					$color: e.iconColor ?? Ss(e.symbol),
					children: e.symbol.slice(0, 1)
				}), /* @__PURE__ */ P(us, { children: [/* @__PURE__ */ N(ds, { children: e.symbol }), /* @__PURE__ */ N(fs, { children: e.chainLabel })] })] }),
				/* @__PURE__ */ P(ps, {
					$direction: e.direction,
					children: [
						Cs(e.direction),
						" ",
						ws(e.direction)
					]
				}),
				/* @__PURE__ */ N(ms, {
					$sign: e.pnlSign,
					children: e.unrealizedPnl
				}),
				/* @__PURE__ */ N($, { children: e.entryPrice }),
				/* @__PURE__ */ N($, { children: e.liqPrice }),
				/* @__PURE__ */ P(hs, { children: [/* @__PURE__ */ N(gs, { children: /* @__PURE__ */ N(_s, {
					$pct: e.liqDistancePct,
					$status: e.liqStatus
				}) }), /* @__PURE__ */ N("span", { children: e.liqStatusLabel })] }),
				/* @__PURE__ */ N(vs, {
					type: "button",
					"aria-label": "Close position",
					onClick: () => a(e.id),
					children: /* @__PURE__ */ N(Ts, {})
				})
			] }, e.id))
		]
	})),
	e === "orders" && (r.length === 0 ? /* @__PURE__ */ N(ys, { children: "No open orders" }) : /* @__PURE__ */ P(ss, {
		role: "table",
		children: [
			/* @__PURE__ */ N(Q, { children: "Symbol" }),
			/* @__PURE__ */ N(Q, { children: "Side" }),
			/* @__PURE__ */ N(Q, { children: "Type" }),
			/* @__PURE__ */ N(Q, { children: "Price" }),
			/* @__PURE__ */ N(Q, { children: "Size" }),
			/* @__PURE__ */ N(Q, { children: "Filled" }),
			/* @__PURE__ */ N(Q, { children: "Status" }),
			r.map((e) => /* @__PURE__ */ P(b.Fragment, { children: [
				/* @__PURE__ */ N($, { children: e.symbol }),
				/* @__PURE__ */ N($, { children: /* @__PURE__ */ N(bs, {
					$side: e.side,
					children: e.side
				}) }),
				/* @__PURE__ */ N($, { children: e.type }),
				/* @__PURE__ */ N($, { children: e.price }),
				/* @__PURE__ */ N($, { children: e.origQty }),
				/* @__PURE__ */ N($, { children: e.executedQty }),
				/* @__PURE__ */ N($, { children: e.status })
			] }, e.id))
		]
	})),
	e === "history" && /* @__PURE__ */ N(ys, { children: "No transaction history" })
] });
//#endregion
export { ie as AccountPanel, Qn as BookTradesPanel, qn as ChartPanel, Ti as DepositModal, Di as EnableTradingModal, le as LeverageModal, ht as MarketsDropdown, vn as OrderBook, Ke as OrderConfirmModal, ri as OrderForm, Se as PerpsErrorMessage, I as PerpsPanel, In as PositionsPanel, ve as RecentTrades, Za as SimpleBetPanel, ns as SimpleChartCard, Es as SimplePositionsCard, Ro as SimpleTickerCard, zt as SymbolHeader, Wn as TpSlModal, z as UnderlineTab, B as UnderlineTabs, Re as WithdrawModal };

//# sourceMappingURL=widgets.js.map