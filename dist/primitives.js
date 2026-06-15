import { $ as e, $i as t, $n as n, $r as r, $t as i, A as a, Aa as o, Ai as s, An as c, Ar as l, At as u, B as d, Ba as f, Bi as p, Bn as m, Br as h, Bt as g, Ca as ee, Ci as te, Cn as ne, Cr as re, Ct as ie, Da as ae, Di as oe, Dn as se, Dr as ce, Dt as le, Ea as ue, Ei as de, En as fe, Er as pe, Et as me, F as he, Fa as ge, Fi as _e, Fn as ve, Fr as ye, Ft as be, G as xe, Ga as Se, Gi as Ce, Gn as we, Gr as Te, Gt as Ee, H as De, Ha as Oe, Hi as ke, Hn as Ae, Hr as je, Ht as Me, I as Ne, Ia as Pe, Ii as Fe, In as Ie, Ir as Le, It as Re, J as ze, Ja as Be, Ji as Ve, Jn as He, Jr as Ue, Jt as _, K as v, Ka as We, Ki as Ge, Kn as Ke, Kr as qe, Kt as Je, L as y, La as Ye, Li as Xe, Ln as Ze, Lr as Qe, Lt as $e, M as et, Ma as tt, Mi as nt, Mn as rt, Mr as it, Mt as at, N as ot, Na as st, Ni as ct, Nn as lt, Nr as ut, Nt as dt, O as ft, Oa as pt, Oi as mt, On as ht, Or as gt, Ot as _t, P as vt, Pa as yt, Pi as bt, Pn as xt, Pr as St, Pt as Ct, Q as wt, Qa as Tt, Qi as Et, Qn as Dt, Qr as Ot, Qt as kt, R as At, Ra as jt, Ri as Mt, Rn as Nt, Rr as Pt, Rt as Ft, S as b, Sa as It, Si as Lt, Sn as Rt, Sr as zt, St as Bt, Ta as Vt, Ti as Ht, Tn as Ut, Tr as Wt, Tt as Gt, U as Kt, Ua as qt, Ui as Jt, Un as Yt, Ur as Xt, Ut as Zt, V as Qt, Va as $t, Vi as en, Vn as tn, Vr as nn, Vt as rn, W as x, Wa as an, Wi as on, Wn as sn, Wr as cn, Wt as ln, X as un, Xa as dn, Xi as fn, Xn as pn, Xr as mn, Xt as S, Y as C, Ya as w, Yi as hn, Yn as gn, Yr as _n, Yt as vn, Z as yn, Za as bn, Zi as xn, Zn as Sn, Zr as Cn, Zt as wn, _ as Tn, _a as En, _i as Dn, _n as On, _r as kn, _t as An, a as jn, aa as Mn, ai as Nn, an as Pn, ar as Fn, at as In, b as Ln, ba as Rn, bi as zn, bn as Bn, br as Vn, bt as Hn, c as Un, ca as Wn, ci as Gn, cn as Kn, cr as qn, ct as Jn, d as Yn, da as Xn, di as Zn, dn as Qn, dr as $n, dt as er, ea as tr, ei as nr, en as rr, er as ir, et as ar, f as or, fa as sr, fi as cr, fn as lr, fr as ur, ft as dr, g as fr, ga as pr, gi as mr, gn as hr, gr, gt as _r, h as vr, ha as yr, hi as br, hn as xr, hr as Sr, ht as Cr, i as wr, ia as Tr, ii as Er, in as Dr, ir as T, it as Or, j as kr, ja as Ar, ji as jr, jn as Mr, jr as Nr, jt as Pr, k as Fr, ka as Ir, ki as Lr, kn as Rr, kr as zr, kt as Br, l as Vr, la as Hr, li as Ur, ln as Wr, lr as Gr, lt as Kr, m as qr, ma as Jr, mi as Yr, mn as Xr, mr as Zr, mt as Qr, n as $r, na as ei, ni as ti, nn as ni, nr as ri, nt as ii, o as ai, oa as oi, oi as si, on as ci, or as li, ot as ui, p as di, pa as fi, pi, pn as mi, pr as hi, pt as gi, q as E, qa as _i, qi as vi, qn as yi, qr as bi, qt as xi, r as D, ra as Si, ri as Ci, rn as wi, rr as Ti, rt as Ei, s as Di, sa as Oi, si as ki, sn as Ai, sr as ji, st as Mi, t as Ni, ta as Pi, ti as Fi, tn as Ii, tr as Li, tt as Ri, u as zi, ua as Bi, ui as Vi, un as Hi, ur as Ui, ut as Wi, v as Gi, va as Ki, vi as qi, vn as Ji, vr as Yi, vt as Xi, wa as Zi, wi as Qi, wn as $i, wr as ea, wt as ta, x as na, xa as ra, xi as ia, xn as aa, xr as oa, xt as sa, y as ca, ya as la, yi as ua, yn as da, yr as fa, yt as pa, z as ma, za as ha, zi as ga, zn as _a, zr as va, zt as ya } from "./chunks/Modal-mV5fzsa6.js";
import O, { Children as ba, cloneElement as k, createContext as xa, useCallback as A, useContext as j, useEffect as M, useLayoutEffect as Sa, useMemo as N, useRef as P, useState as Ca } from "react";
import F, { styled as I, useTheme as wa } from "styled-components";
import { Fragment as Ta, jsx as L, jsxs as R } from "react/jsx-runtime";
import "react-dom";
//#region src/primitives/TabMenu/TabMenu.tsx
var Ea = I(C)`
  border-bottom: ${({ isShowBorderBottom: e, theme: t }) => e ? `2px solid ${t.colors.input}` : "none"};
  overflow-x: auto;
  padding: ${({ fullWidth: e }) => e ? 0 : "16px 16px 0 16px"};

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`, Da = I(C)`
  justify-content: space-between;

  & > button + button {
    margin-left: ${({ gap: e }) => e || "4px"};
  }

  & > button {
    flex-grow: ${({ fullWidth: e }) => +!!e};
  }

  ${({ theme: e }) => e.mediaQueries.md} {
    flex-grow: ${({ fullWidth: e }) => +!!e};
  }

  flex-grow: ${({ fullWidth: e }) => +!!e};
`, Oa = ({ activeIndex: e = 0, onItemClick: t, children: n, fullWidth: r, gap: i, isColorInverse: a = !1, isShowBorderBottom: o = !0, variant: s = "default" }) => /* @__PURE__ */ L(Ea, {
	p: s === "text" ? "0" : ["0 4px", "0 16px"],
	fullWidth: r,
	isShowBorderBottom: s === "text" ? !1 : o,
	children: /* @__PURE__ */ L(Da, {
		fullWidth: r,
		gap: i,
		children: ba.map(n, (n, r) => {
			let i = e === r;
			return s === "text" ? k(n, {
				isActive: i,
				onClick: t ? () => t(r) : void 0,
				color: i ? "secondary" : "textSubtle",
				backgroundColor: "transparent",
				variant: "text"
			}) : k(n, {
				isActive: i,
				onClick: t ? () => t(r) : void 0,
				color: a ? i ? "textSubtle" : "backgroundAlt" : i ? "backgroundAlt" : "textSubtle",
				backgroundColor: a ? i ? "input" : "textSubtle" : i ? "textSubtle" : "input"
			});
		})
	})
}), z = I.button`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  padding: ${({ scale: e, variant: t }) => t === "text" ? "12px" : e === "md" ? "8px" : "16px"};
  border-radius: ${({ scale: e, variant: t }) => t === "text" ? "16px" : e === "md" ? "16px 16px 0 0" : "24px 24px 0 0"};
  font-size: 16px;
  font-weight: ${({ variant: e, isActive: t }) => e === "text" ? t ? 600 : 400 : 600};

  ${({ theme: e }) => e.mediaQueries.md} {
    flex-grow: 0;
  }

  ${bn}
`;
z.defaultProps = { scale: "md" };
//#endregion
//#region src/primitives/TableView/SortArrowButton.tsx
var ka = I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 1px 2px 3px;
  margin-left: 4px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  background: ${({ theme: e }) => e.colors.tertiary};
  overflow: hidden;
  path {
    fill: ${({ theme: e }) => e.colors.textDisabled};
  }
  &.descend {
    background: ${({ theme: e }) => e.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path:first-child { fill: rgba(255, 255, 255, 1); }
    path:last-child { fill: rgba(255, 255, 255, 0.3); }
  }
  &.ascend {
    background: ${({ theme: e }) => e.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path:first-child { fill: rgba(255, 255, 255, 0.3); }
    path:last-child { fill: rgba(255, 255, 255, 1); }
  }
`, Aa = I.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  padding: 1px 2px 3px;
  margin-left: 4px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  cursor: pointer;
  background: ${({ theme: e }) => e.colors.tertiary};
  overflow: hidden;
  path {
    fill: ${({ theme: e }) => e.colors.textDisabled};
  }
  &.descend {
    background: ${({ theme: e }) => e.colors.textSubtle};
    border-bottom-color: rgba(0, 0, 0, 0.3);
    path { fill: rgba(255, 255, 255, 1); }
  }
`, ja = /* @__PURE__ */ function(e) {
	return e[e.NULL = 0] = "NULL", e[e.ASC = 1] = "ASC", e[e.DESC = -1] = "DESC", e;
}({}), Ma = (e) => {
	let { onSort: t, sortOrder: n, onlyDESC: r, width: i = "14px", ...a } = e, [o, s] = Ca(0), c = N(() => t ? n : o, [
		n,
		o,
		t
	]), l = A(() => {
		let e = c === 0 ? -1 : +(c === -1);
		t ? t(e) : s(e);
	}, [t, c]), u = N(() => {
		switch (c) {
			case -1: return "descend";
			case 1: return "ascend";
			default: return "";
		}
	}, [c]);
	return r ? /* @__PURE__ */ L(Aa, {
		onClick: l,
		className: u,
		children: /* @__PURE__ */ L(Jt, {
			width: i,
			height: i
		})
	}) : /* @__PURE__ */ L(ka, {
		onClick: l,
		className: u,
		children: /* @__PURE__ */ L(en, {
			width: i,
			height: i
		})
	});
}, Na = F.table`
  width: 100%;

  tr {
    th,
    td {
      padding: 16px;
      vertical-align: middle;
    }

    td {
      display: table-cell;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      align-self: stretch;
    }

    th {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`, Pa = F.thead`
  text-align: left;
  th {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    vertical-align: middle;
    color: ${({ theme: e }) => e.colors.secondary};

    button {
      margin-left: 8px;
    }
  }
`, Fa = F.tbody``, B = F.tr`
  border-top: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  transition: background 0.2s ease-in-out;
  ${({ $withLink: e, theme: t }) => e && `
    cursor: pointer;

    &:hover {
      background: ${t.isDark ? t.colors.v2Disabled10 : t.colors.backgroundHover};
    }

    &:active {
      background: ${t.colors.backgroundTapped};
    }
  `}

  &:last-child {
    border-bottom: 1px solid ${({ theme: e }) => e.colors.cardBorder};
  }
`, Ia = F.td``, La = ({ col: e, data: t, idx: n }) => /* @__PURE__ */ L(Ia, {
	style: {
		display: e.display === !1 ? "none" : "table-cell",
		textAlign: e.align ?? "left"
	},
	"data-un-clickable": e.clickable === !1 ? !0 : void 0,
	children: e.render ? e.render(e.dataIndex ? t[e.dataIndex] : t, t, n) : e.dataIndex ? t[e.dataIndex] : null
}, e.key), Ra = ({ columns: e, data: t, rowKey: n, getRowKey: r, onSort: i, sortOrder: a, sortField: o, onRowClick: s, rowStyle: c }) => {
	let l = A((e) => r ? r(e) : n ? e[n] : e.key ?? Object.values(e).slice(0, 2).join("-"), [n, r]), u = A((e, t) => {
		i?.({
			order: e,
			dataIndex: t
		});
	}, [i]), d = A((e, t) => {
		t.target instanceof Element && t.target.closest("[data-un-clickable]") || s?.(e, t);
	}, [s]);
	return /* @__PURE__ */ R(Na, { children: [/* @__PURE__ */ L(Pa, { children: /* @__PURE__ */ L(B, {
		style: c,
		children: e.map((e) => /* @__PURE__ */ R("th", {
			style: {
				minWidth: e.minWidth ?? "auto",
				width: e.width ?? "auto",
				display: e.display === !1 ? "none" : "table-cell",
				textAlign: e.align ?? "left"
			},
			children: [typeof e.title == "function" ? e.title() : typeof e.title == "string" ? e.title.toUpperCase() : e.title, e.sorter ? /* @__PURE__ */ L(Ma, {
				onlyDESC: !0,
				width: "14px",
				onSort: (t) => u(t, e.dataIndex),
				sortOrder: o === e.dataIndex ? a : ja.NULL
			}) : null]
		}, e.key))
	}) }), /* @__PURE__ */ L(Fa, { children: t.map((t) => /* @__PURE__ */ L(B, {
		style: c,
		$withLink: !!s,
		onClick: (e) => d(t, e),
		children: e.map((e, n) => /* @__PURE__ */ L(La, {
			col: e,
			data: t,
			idx: n
		}, e.key))
	}, l(t))) })] });
}, V = {
	SM: "sm",
	MD: "md",
	LG: "lg"
}, za = {
	sm: {
		handleHeight: "16px",
		handleWidth: "16px",
		handleLeft: "2px",
		handleTop: "2px",
		checkedLeft: "calc(100% - 18px)",
		toggleHeight: "20px",
		toggleWidth: "36px"
	},
	md: {
		handleHeight: "26px",
		handleWidth: "26px",
		handleLeft: "3px",
		handleTop: "3px",
		checkedLeft: "calc(100% - 30px)",
		toggleHeight: "32px",
		toggleWidth: "56px"
	},
	lg: {
		handleHeight: "32px",
		handleWidth: "32px",
		handleLeft: "4px",
		handleTop: "4px",
		checkedLeft: "calc(100% - 36px)",
		toggleHeight: "40px",
		toggleWidth: "72px"
	}
}, H = (e) => ({ scale: t = V.LG }) => za[t][e], U = I.div`
  background-color: ${({ theme: e }) => e.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${H("handleHeight")};
  left: ${H("handleLeft")};
  position: absolute;
  top: ${H("handleTop")};
  transition: left 200ms ease-in;
  width: ${H("handleWidth")};
  z-index: 1;
`, Ba = I.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${U} {
    left: ${H("checkedLeft")};
  }

  &:focus + ${U} {
    box-shadow: ${({ theme: e }) => e.shadows.focus};
  }

  &:hover + ${U}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme: e }) => e.shadows.focus};
  }
`, Va = I.div`
  align-items: center;
  background-color: ${({ theme: e, $checked: t, $checkedColor: n, $defaultColor: r, disabled: i }) => e.colors[t && !i ? n : r]};
  border-radius: 24px;
  box-shadow: ${({ theme: e }) => e.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${H("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${H("toggleWidth")};
`, Ha = ({ checked: e, defaultColor: t = "input", checkedColor: n = "success", scale: r = V.LG, startIcon: i, endIcon: a, disabled: o, ...s }) => /* @__PURE__ */ R(Va, {
	disabled: o,
	$checked: !!e,
	$checkedColor: n,
	$defaultColor: t,
	scale: r,
	children: [/* @__PURE__ */ L(Ba, {
		disabled: o,
		checked: e,
		scale: r,
		...s,
		type: "checkbox"
	}), i && a ? /* @__PURE__ */ R(Ta, { children: [/* @__PURE__ */ L(U, {
		scale: r,
		children: /* @__PURE__ */ L(C, {
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
			children: e ? a(e) : i(!e)
		})
	}), /* @__PURE__ */ R(C, {
		width: "100%",
		height: "100%",
		justifyContent: "space-around",
		alignItems: "center",
		children: [i(), a()]
	})] }) : /* @__PURE__ */ L(U, { scale: r })]
}), W = {
	SM: "sm",
	MD: "md"
}, Ua = ({ scale: e }) => {
	switch (e) {
		case W.SM: return "24px";
		case W.MD:
		default: return "32px";
	}
}, Wa = ({ scale: e }) => {
	switch (e) {
		case W.SM: return "12px";
		case W.MD:
		default: return "20px";
	}
}, Ga = I.input.attrs({ type: "radio" }).withConfig({ shouldForwardProp: kr })`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${Ua};
  width: ${Ua};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: ${({ theme: e }) => e.isDark ? `solid 1px ${e.colors.disabled}` : "0"};
  border-radius: 50%;
  background-color: ${({ theme: e }) => e.colors.cardBorder};
  box-shadow: ${({ theme: e }) => e.shadows.inset};

  &:after {
    border-radius: 50%;
    content: "";
    height: ${Wa};
    left: 6px;
    position: absolute;
    top: 6px;
    width: ${Wa};
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${({ theme: e }) => e.shadows.focus};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme: e }) => e.shadows.focus};
  }

  &:checked {
    border: 0;
    background-color: ${({ theme: e }) => e.colors.success};
    &:after {
      background-color: ${({ theme: e }) => e.radio.handleBackground};
    }
  }

  &:disabled {
    border: 0;
    cursor: default;
    opacity: 0.6;
  }
  ${w}
`;
Ga.defaultProps = {
	scale: W.MD,
	m: 0
};
//#endregion
//#region src/primitives/Tag/types.ts
var G = {
	PRIMARY: "primary",
	SECONDARY: "secondary",
	SUCCESS: "success",
	TEXTDISABLED: "textDisabled",
	TEXTSUBTLE: "textSubtle",
	BINANCE: "binance",
	FAILURE: "failure",
	WARNING: "warning",
	GRADIENTBOLD: "gradientBold",
	SUCCESS_LOW_CONTRAST: "successLowContrast",
	FAILURE_LOW_CONTRAST: "failureLowContrast",
	TERTIARY: "tertiary",
	PRIMARY60: "primary60"
}, K = {
	MD: "md",
	SM: "sm"
}, Ka = {
	[K.MD]: {
		height: "28px",
		padding: "0 8px",
		fontSize: "14px"
	},
	[K.SM]: {
		height: "24px",
		padding: "0 4px",
		fontSize: "12px"
	}
}, qa = {
	[G.PRIMARY]: { backgroundColor: "primary" },
	[G.SECONDARY]: { backgroundColor: "secondary" },
	[G.SUCCESS]: { backgroundColor: "success" },
	[G.TEXTDISABLED]: { backgroundColor: "textDisabled" },
	[G.TEXTSUBTLE]: { backgroundColor: "textSubtle" },
	[G.BINANCE]: { backgroundColor: "binance" },
	[G.FAILURE]: { backgroundColor: "failure" },
	[G.WARNING]: { backgroundColor: "warning" },
	[G.GRADIENTBOLD]: { bg: "gradientBold" },
	[G.FAILURE_LOW_CONTRAST]: {
		backgroundColor: "destructive10",
		color: "destructive",
		border: "2px solid",
		borderColor: "destructive20"
	},
	[G.SUCCESS_LOW_CONTRAST]: {
		backgroundColor: "positive10",
		color: "positive60",
		border: "2px solid",
		borderColor: "positive20"
	},
	[G.TERTIARY]: {
		backgroundColor: "tertiary",
		color: "textSubtle",
		border: "2px solid",
		borderColor: "tertiary20"
	},
	[G.PRIMARY60]: {
		backgroundColor: "primary10",
		color: "primary60",
		border: "2px solid",
		borderColor: "primary20"
	}
}, Ja = I.div.withConfig({ shouldForwardProp: (e) => ![
	"variant",
	"scale",
	"outline",
	"textTransform",
	"startIcon",
	"endIcon"
].includes(e) })`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${({ textTransform: e }) => e && `text-transform: ${e};`}

  ${Be({
	prop: "scale",
	variants: Ka
})}
  ${Be({ variants: qa })}
  ${w}
  ${dn}

  ${({ outline: e, theme: t, variant: n = G.PRIMARY }) => {
	if (e) {
		let e = qa[n].backgroundColor, r = t.colors[e];
		return `
      color: ${r};
      background: none;
      border: 2px solid ${r};
    `;
	}
	return "";
}}
`, Ya = ({ startIcon: e, endIcon: t, variant: n = "primary", scale: r = K.MD, outline: i = !1, children: a, ...o }) => /* @__PURE__ */ R(Ja, {
	variant: n,
	scale: r,
	outline: i,
	...o,
	children: [
		O.isValidElement(e) && O.cloneElement(e, { mr: "0.5em" }),
		a,
		O.isValidElement(t) && O.cloneElement(t, { ml: "0.5em" })
	]
}), Xa = I(y)`
  display: flex;
  font-weight: 600;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`, Za = ({ external: e, color: t = "primary", ...n }) => /* @__PURE__ */ L(Xa, {
	as: "a",
	color: t,
	...e ? ze : {},
	...n
}), Qa = ({ children: e, showExternalIcon: t = !0, color: n = "primary", ...r }) => /* @__PURE__ */ R(Za, {
	external: !0,
	color: n,
	...r,
	children: [e, t && /* @__PURE__ */ L(Ue, { style: {
		marginLeft: 4,
		width: 20,
		height: 20
	} })]
}), $a = I(E)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`, eo = I(E)`
  overflow: hidden;
`, to = I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(0deg);
  transition: transform 0.25s ease;
  cursor: pointer;
  &.open {
    transform: rotate(180deg);
  }
`, no = I(E)`
  overflow: hidden;
  display: flex;
  width: 100%;
  flex-direction: column;
  will-change: height;
  transition: height 0.25s ease-in-out;
`, ro = ({ title: e, content: t, isOpen: n, onToggle: r, recalculateDep: i = !1, titleBoxProps: a, contentBoxProps: o, contentExtendableMaxHeight: s, ...c }) => {
	let l = P(null), u = P(null), d = P(null), f = () => {
		r?.();
	};
	return M(() => {
		if (!l.current || !u.current || !d.current) return;
		let e = l.current.scrollHeight, t = u.current.scrollHeight, r = s ?? e;
		d.current.style.height = `${n ? t + r : t}px`;
	}, [
		n,
		i,
		s
	]), /* @__PURE__ */ R(no, {
		ref: d,
		...c,
		children: [/* @__PURE__ */ R($a, {
			ref: u,
			onClick: f,
			...a,
			children: [e, /* @__PURE__ */ L(to, {
				className: n ? "open" : void 0,
				children: /* @__PURE__ */ L(S, {
					color: "textSubtle",
					width: "24px"
				})
			})]
		}), /* @__PURE__ */ L(eo, {
			ref: l,
			...o,
			children: t
		})]
	});
}, io = ({ theme: e, variant: t }) => e.colors[t === v.SUBTLE ? "input" : "tertiary"], ao = ({ theme: e, variant: t }) => e.colors[t === v.SUBTLE ? "inputSecondary" : "disabled"], oo = I.div.withConfig({ shouldForwardProp: (e) => !["fullWidth", "noButtonMargin"].includes(e) })`
  ${(e) => e.variant === v.TEXT ? "" : `
    background-color: ${io(e)};
    border: 1px solid ${ao(e)};
    `}
  border-radius: 16px;
  display: ${({ fullWidth: e }) => e ? "flex" : "inline-flex"};
  width: ${({ fullWidth: e }) => e ? "100%" : "auto"};
  align-items: center;
  & > button,
  & > a {
    flex: ${({ fullWidth: e }) => e ? 1 : "auto"};
  }

  & > button + button,
  & > a + a {
    margin-left: ${({ noButtonMargin: e }) => e ? "0px" : "2px"};
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled: e, theme: t, variant: n }) => e ? `
        opacity: 0.5;

        & > button:disabled {
          color: ${n === v.PRIMARY ? t.colors.primary : t.colors.textSubtle};
        }
    ` : ""}
  ${w}
`, so = ({ activeIndex: e = 0, scale: t = xe.MD, variant: n = v.PRIMARY, onItemClick: r, disabled: i, children: a, fullWidth: o = !1, ...s }) => /* @__PURE__ */ L(oo, {
	disabled: i,
	variant: n,
	fullWidth: o,
	...s,
	children: ba.map(a, (a, o) => k(a, {
		isActive: e === o,
		onClick: r ? (e) => r(o, e) : void 0,
		scale: t,
		variant: n,
		disabled: i
	}))
}), co = I(x)`
  font-weight: 400;
  background-color: transparent;
  color: ${({ theme: e, variant: t }) => t === v.PRIMARY ? e.colors.primary : e.colors.textSubtle};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`, lo = ({ isActive: e = !1, variant: t = v.PRIMARY, as: n, ...r }) => e ? /* @__PURE__ */ L(x, {
	as: n,
	variant: t,
	...r
}) : /* @__PURE__ */ L(co, {
	forwardedAs: n,
	variant: t,
	...r
}), q = {
	INFO: "info",
	DANGER: "danger",
	SUCCESS: "success",
	WARNING: "warning"
}, uo = ({ theme: e, variant: t = q.INFO }) => {
	switch (t) {
		case q.DANGER: return e.colors.failure;
		case q.WARNING: return e.colors.warning;
		case q.SUCCESS: return e.colors.success;
		case q.INFO:
		default: return e.colors.secondary;
	}
}, fo = (e = q.INFO) => {
	switch (e) {
		case q.DANGER: return me;
		case q.WARNING: return rt;
		case q.SUCCESS: return _;
		case q.INFO:
		default: return T;
	}
}, po = I.div`
  background-color: ${uo};
  border-radius: 16px 0 0 16px;
  color: ${({ theme: e }) => e.alert.background};
  padding: 12px;
`, mo = 52, ho = I.div`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ $hasHandler: e }) => e ? `${mo}px` : "12px"};
  padding-top: 12px;
`, go = I.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`, _o = I(C)`
  position: relative;
  background-color: ${({ theme: e }) => e.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`, vo = ({ title: e, children: t, variant: n, onClick: r }) => /* @__PURE__ */ R(_o, { children: [
	/* @__PURE__ */ L(po, {
		variant: n,
		children: /* @__PURE__ */ L(fo(n), {
			color: "currentColor",
			width: "24px"
		})
	}),
	/* @__PURE__ */ R(ho, {
		$hasHandler: !!r,
		children: [typeof e == "string" ? /* @__PURE__ */ L(y, {
			bold: !0,
			children: e
		}) : e, typeof t == "string" ? /* @__PURE__ */ L(y, {
			style: { wordBreak: "break-word" },
			as: "p",
			children: t
		}) : t]
	}),
	r && /* @__PURE__ */ L(go, { children: /* @__PURE__ */ L(Kt, {
		scale: "sm",
		variant: "text",
		onClick: r,
		"aria-label": "Close",
		children: /* @__PURE__ */ L(Dr, {
			width: "24px",
			color: "currentColor"
		})
	}) })
] }), J = {
	SUCCESS: "success",
	DANGER: "danger",
	WARNING: "warning",
	INFO: "info"
}, yo = {
	[J.INFO]: q.INFO,
	[J.SUCCESS]: q.SUCCESS,
	[J.DANGER]: q.DANGER,
	[J.WARNING]: q.WARNING
}, bo = I.div`
  max-width: calc(100% - 32px);
  width: 100%;

  ${({ theme: e }) => e.mediaQueries?.sm ?? "@media screen and (min-width: 576px)"} {
    max-width: 400px;
  }
`, xo = ({ toast: e, onRemove: t }) => {
	let { id: n, title: r, description: i, type: a } = e, o = A(() => t(n), [n, t]);
	return /* @__PURE__ */ L(bo, { children: /* @__PURE__ */ L(vo, {
		title: r,
		variant: yo[a],
		onClick: o,
		children: i
	}) });
};
//#endregion
//#region node_modules/.pnpm/sonner@2.0.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/sonner/dist/index.mjs
function So(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
Array(12).fill(0);
var Y = 1, X = new class {
	constructor() {
		this.subscribe = (e) => (this.subscribers.push(e), () => {
			let t = this.subscribers.indexOf(e);
			this.subscribers.splice(t, 1);
		}), this.publish = (e) => {
			this.subscribers.forEach((t) => t(e));
		}, this.addToast = (e) => {
			this.publish(e), this.toasts = [...this.toasts, e];
		}, this.create = (e) => {
			let { message: t, ...n } = e, r = typeof e?.id == "number" || e.id?.length > 0 ? e.id : Y++, i = this.toasts.find((e) => e.id === r), a = e.dismissible === void 0 ? !0 : e.dismissible;
			return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), i ? this.toasts = this.toasts.map((n) => n.id === r ? (this.publish({
				...n,
				...e,
				id: r,
				title: t
			}), {
				...n,
				...e,
				id: r,
				dismissible: a,
				title: t
			}) : n) : this.addToast({
				title: t,
				...n,
				dismissible: a,
				id: r
			}), r;
		}, this.dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
			id: e,
			dismiss: !0
		})))) : this.toasts.forEach((e) => {
			this.subscribers.forEach((t) => t({
				id: e.id,
				dismiss: !0
			}));
		}), e), this.message = (e, t) => this.create({
			...t,
			message: e
		}), this.error = (e, t) => this.create({
			...t,
			message: e,
			type: "error"
		}), this.success = (e, t) => this.create({
			...t,
			type: "success",
			message: e
		}), this.info = (e, t) => this.create({
			...t,
			type: "info",
			message: e
		}), this.warning = (e, t) => this.create({
			...t,
			type: "warning",
			message: e
		}), this.loading = (e, t) => this.create({
			...t,
			type: "loading",
			message: e
		}), this.promise = (e, t) => {
			if (!t) return;
			let n;
			t.loading !== void 0 && (n = this.create({
				...t,
				promise: e,
				type: "loading",
				message: t.loading,
				description: typeof t.description == "function" ? void 0 : t.description
			}));
			let r = Promise.resolve(e instanceof Function ? e() : e), i = n !== void 0, a, o = r.then(async (e) => {
				if (a = ["resolve", e], O.isValidElement(e)) i = !1, this.create({
					id: n,
					type: "default",
					message: e
				});
				else if (wo(e) && !e.ok) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error, a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description, o = typeof r == "object" && !O.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...o
					});
				} else if (e instanceof Error) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !O.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...o
					});
				} else if (t.success !== void 0) {
					i = !1;
					let r = typeof t.success == "function" ? await t.success(e) : t.success, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !O.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "success",
						description: a,
						...o
					});
				}
			}).catch(async (e) => {
				if (a = ["reject", e], t.error !== void 0) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, o = typeof r == "object" && !O.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...o
					});
				}
			}).finally(() => {
				i && (this.dismiss(n), n = void 0), t.finally == null || t.finally.call(t);
			}), s = () => new Promise((e, t) => o.then(() => a[0] === "reject" ? t(a[1]) : e(a[1])).catch(t));
			return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
		}, this.custom = (e, t) => {
			let n = t?.id || Y++;
			return this.create({
				jsx: e(n),
				id: n,
				...t
			}), n;
		}, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
}(), Co = (e, t) => {
	let n = t?.id || Y++;
	return X.addToast({
		title: e,
		...t,
		id: n
	}), n;
}, wo = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Z = Object.assign(Co, {
	success: X.success,
	info: X.info,
	warning: X.warning,
	error: X.error,
	custom: X.custom,
	message: X.message,
	promise: X.promise,
	dismiss: X.dismiss,
	loading: X.loading
}, {
	getHistory: () => X.toasts,
	getToasts: () => X.getActiveToasts()
});
So("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
//#endregion
//#region src/primitives/Toast/ToastProvider.tsx
var To = xa(void 0);
function Q(e) {
	return (t, n) => Z.custom((r) => /* @__PURE__ */ L(xo, {
		toast: {
			id: r,
			title: t,
			description: n,
			type: e
		},
		onRemove: () => Z.dismiss(r)
	}));
}
var Eo = ({ children: e }) => {
	let t = A(Q(J.DANGER), []), n = A(Q(J.INFO), []), r = A(Q(J.SUCCESS), []), i = A(Q(J.WARNING), []), a = A(() => Z.dismiss(), []), o = A((e) => Z.dismiss(e), []), s = N(() => ({
		clear: a,
		remove: o,
		toastError: t,
		toastInfo: n,
		toastSuccess: r,
		toastWarning: i
	}), [
		a,
		o,
		t,
		n,
		r,
		i
	]);
	return /* @__PURE__ */ L(To.Provider, {
		value: s,
		children: e
	});
}, Do = () => {
	let e = j(To);
	if (!e) throw Error("useToast must be used within ToastsProvider");
	return e;
}, Oo = I.div`
  position: absolute;
  top: 16px;
  left: calc(50% - 18px);
  width: 36px;
  height: 4px;
  background-color: ${({ theme: e }) => e.colors.v2Inverse};
  opacity: 0.1;
`, ko = ({ drawerContainerStyle: e = {}, content: t, isOpen: n, setIsOpen: r, hideCloseButton: i = !1 }) => /* @__PURE__ */ L(D, {
	isOpen: n,
	onDismiss: () => r(!1),
	closeOnOverlayClick: !0,
	children: /* @__PURE__ */ L($r, {
		onDismiss: () => r(!1),
		children: /* @__PURE__ */ R(qr, {
			style: e,
			children: [i ? /* @__PURE__ */ L(Oo, {}) : /* @__PURE__ */ L(b, {
				position: "absolute",
				right: "24px",
				top: "24px",
				children: /* @__PURE__ */ L(zi, { onDismiss: () => r(!1) })
			}), t]
		})
	})
}), Ao = ({ children: e, onDismiss: t, hideCloseButton: n, minHeight: r, ...i }) => {
	let { isMobile: a } = Tn(), o = P(null), s = P(null);
	return Sa(() => {
		let e = new ResizeObserver((e) => {
			for (let t of e) {
				let { height: e } = t.contentRect;
				o.current && (o.current.style.height = `${e}px`);
			}
		});
		return s.current && e.observe(s.current), () => {
			e.disconnect();
		};
	}, []), /* @__PURE__ */ L(Yn, {
		drag: a && !n ? "y" : !1,
		dragConstraints: {
			top: 0,
			bottom: 600
		},
		dragElastic: { top: 0 },
		dragSnapToOrigin: !0,
		onDragStart: () => {
			o.current && (o.current.style.animation = "none");
		},
		onDragEnd: (e, n) => {
			n.velocity.y > 300 && t && t();
		},
		ref: o,
		style: {
			overflow: "hidden",
			willChange: "height",
			transition: "height 0.3s cubic-bezier(.19,.23,.75,1.05)"
		},
		$minHeight: r,
		children: /* @__PURE__ */ L(b, {
			ref: s,
			overflow: "hidden",
			borderRadius: "32px",
			...i,
			children: e
		})
	});
}, jo = ({ title: e, onDismiss: t, onBack: n, children: r, hideCloseButton: i = !1, headerPadding: o = "12px 24px", bodyPadding: s = "24px", headerBackground: c = "transparent", minWidth: l = "320px", minHeight: u = "300px", headerRightSlot: d, bodyAlignItems: f, headerBorderColor: p, bodyTop: m = "0px", ...h }) => {
	let g = j(wr)?.onDismiss || t, ee = wa();
	return /* @__PURE__ */ R(Ao, {
		minWidth: l,
		minHeight: u,
		onDismiss: g,
		hideCloseButton: i,
		...h,
		children: [/* @__PURE__ */ R(or, {
			background: vr(ee, `colors.${c}`, c),
			style: { padding: o },
			headerBorderColor: p,
			children: [
				/* @__PURE__ */ R(di, { children: [n && /* @__PURE__ */ L(Un, { onBack: n }), /* @__PURE__ */ L(a, { children: e })] }),
				d,
				!i && /* @__PURE__ */ L(zi, {
					onDismiss: g,
					mb: "-4px"
				})
			]
		}), /* @__PURE__ */ L(Vr, {
			position: "relative",
			top: m,
			onPointerDownCapture: (e) => e.stopPropagation(),
			p: s,
			style: { alignItems: f ?? "normal" },
			children: r
		})]
	});
}, Mo = /* @__PURE__ */ Tt(fr(), 1);
function No(e, t) {
	return e.slice(0, t).join(".") || ".";
}
function Po(e, t) {
	let { length: n } = e;
	for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
	return 0;
}
function Fo(e, t) {
	let n = typeof e == "function", r = typeof t == "function", i = [], a = [];
	return function(o, s) {
		if (typeof s == "object") if (i.length) {
			let e = Po(i, this);
			e === 0 ? i[i.length] = this : (i.splice(e), a.splice(e)), a[a.length] = o;
			let n = Po(i, s);
			if (n !== 0) return r ? t.call(this, o, s, No(a, n)) : `[ref=${No(a, n)}]`;
		} else i[0] = s, a[0] = o;
		return n ? e.call(this, o, s) : s;
	};
}
function Io(e, t, n, r) {
	return JSON.stringify(e, Fo((e, n) => {
		let r = typeof n == "bigint" ? `#bigint.${n.toString()}` : n;
		return t?.(e, r) || r;
	}, r), n ?? void 0);
}
//#endregion
//#region src/primitives/Modal/useModal.ts
var Lo = (e, t = !0, n = !1, r = "defaultNodeId") => {
	let i = P();
	i.current = e;
	let a = P(), { isOpen: o, nodeId: s, modalNode: c, setModalNode: l, onPresent: u, onDismiss: d } = j(ai), f = A(() => {
		u(i.current, r, t);
	}, [
		r,
		u,
		t
	]);
	M(() => {
		a.current = s;
	}, [s]);
	let p = A(() => {
		r === a.current && d?.();
	}, [d, r]);
	return M(() => {
		if (n && o && s === r) {
			let t = (0, Mo.default)(e, "props"), n = (0, Mo.default)(c, "props");
			t && n && Io(t) !== Io(n) && l(e);
		}
	}, [
		n,
		s,
		r,
		o,
		e,
		c,
		l
	]), [f, p];
}, $ = (e) => `var(--pcs-colors-${e})`, Ro = {
	colors: {
		primary: $("primary"),
		primaryBright: $("primary-bright"),
		primaryDark: $("primary-dark"),
		secondary: $("secondary"),
		tertiary: $("tertiary"),
		success: $("success"),
		failure: $("failure"),
		warning: $("warning"),
		binance: $("binance"),
		background: $("background"),
		backgroundAlt: $("background-alt"),
		backgroundDisabled: $("background-disabled"),
		backgroundHover: $("background-hover"),
		backgroundTapped: $("background-tapped"),
		backgroundOverlay: $("background-overlay"),
		card: $("card"),
		cardBorder: $("card-border"),
		cardSecondary: $("card-secondary"),
		input: $("input"),
		inputSecondary: $("input-secondary"),
		text: $("text"),
		textSubtle: $("text-subtle"),
		textDisabled: $("text-disabled"),
		contrast: $("contrast"),
		invertedContrast: $("inverted-contrast"),
		disabled: $("disabled"),
		primary10: $("primary10"),
		primary20: $("primary20"),
		primary60: $("primary60"),
		gradientBubblegum: $("bubblegum"),
		white: "#FFFFFF",
		transparent: "transparent"
	},
	radii: {
		small: "4px",
		default: "16px",
		card: "24px",
		circle: "50%"
	},
	shadows: {
		level1: "var(--pcs-shadows-card)",
		active: "var(--pcs-shadows-active)",
		success: "var(--pcs-shadows-success)",
		warning: "var(--pcs-shadows-warning)",
		danger: "var(--pcs-shadows-danger)",
		focus: "var(--pcs-shadows-focus)",
		inset: "var(--pcs-shadows-inset)",
		tooltip: "var(--pcs-shadows-dropdown)"
	},
	toggle: { handleBackground: $("background-alt") },
	radio: { handleBackground: $("background-alt") },
	card: {
		background: $("card"),
		boxShadow: "var(--pcs-shadows-card)",
		boxShadowActive: "var(--pcs-shadows-active)",
		boxShadowSuccess: "var(--pcs-shadows-success)",
		boxShadowWarning: "var(--pcs-shadows-warning)",
		cardHeaderBackground: {
			default: $("card-header"),
			blue: $("card-header-blue"),
			bubblegum: $("card-header-bubblegum"),
			violet: $("card-header-violet"),
			pale: $("card-header-pale")
		},
		dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))"
	},
	alert: { background: $("background-alt") },
	breakpoints: [
		"576px",
		"852px",
		"968px",
		"1080px",
		"1200px"
	],
	zIndices: {
		dropdown: 10,
		ribbon: 9,
		modal: 100
	},
	modal: { background: $("card") },
	isDark: !1,
	mediaQueries: {
		xs: "",
		sm: "@media screen and (min-width: 576px)",
		md: "@media screen and (min-width: 852px)",
		lg: "@media screen and (min-width: 968px)",
		xl: "@media screen and (min-width: 1080px)",
		xxl: "@media screen and (min-width: 1200px)"
	}
};
//#endregion
export { un as AccountFilledIcon, yn as AccountIcon, wt as ActivityIcon, e as AddCircleIcon, ar as AddIcon, vo as Alert, Ri as AlertTriangleIcon, ii as AllBlogIcon, Ei as AlpIcon, Or as AptosIcon, In as ArbitrumIcon, ui as ArrowBackIcon, Mi as ArrowDownIcon, Jn as ArrowDropDownIcon, Kr as ArrowDropUpIcon, Wi as ArrowFirstIcon, er as ArrowForwardIcon, dr as ArrowLastIcon, gi as ArrowRightIcon, Qr as ArrowUpDownIcon, Cr as ArrowUpIcon, _r as AutoRenewIcon, An as BackForwardIcon, Xi as BarChart2Icon, pa as BarChartIcon, Hn as BaseIcon, sa as BellIcon, Bt as BidAskGraphIcon, ie as BinanceChainIcon, ta as BinanceIcon, Gt as BirthdayIcon, me as BlockIcon, le as BloctoIcon, _t as BnbUsdtPairTokenIcon, ko as BottomDrawer, b as Box, Br as BraveIcon, u as BridgeIcon, Pr as BscScanIcon, at as BscTraceIcon, dt as BulbIcon, Ct as BunnyCardsIcon, be as BunnyFillIcon, x as Button, so as ButtonMenu, lo as ButtonMenuItem, Re as CalculateIcon, $e as CalenderIcon, Ft as CameraIcon, ya as CandleGraphIcon, g as CandlestickIcon, De as Card, Qt as CardBody, ma as CardFooter, d as CardHeader, At as CardRibbon, rn as CardViewIcon, Me as CardsIcon, Zt as ChartDisableIcon, ln as ChartIcon, Ee as CheckCircleIcon, Je as CheckIcon, vt as Checkbox, xi as CheckmarkCircleFillIcon, _ as CheckmarkCircleIcon, vn as CheckmarkIcon, S as ChevronDownIcon, wn as ChevronLeftIcon, kt as ChevronRightIcon, i as ChevronUpIcon, rr as ChevronsCollapseIcon, Ii as ChevronsExpandIcon, ni as CircleOutlineIcon, wi as CloseCircleIcon, Dr as CloseIcon, Pn as CogIcon, ci as Coin98Icon, Ai as CoinbaseWalletIcon, Kn as CoinsIcon, ro as Collapse, Wr as CommunityFilledIcon, Hi as CommunityIcon, Qn as CopyIcon, lr as CrossIcon, mi as CrownIcon, Xr as CurrencyIcon, xr as CurveGraphIcon, hr as CurvedChartIcon, On as DefaultTokenIcon, Ji as DeleteOutlineIcon, da as DepositIcon, Bn as DiscordIcon, aa as DonateIcon, Rt as DotIcon, ne as DragIcon, $i as EarnFillIcon, Ut as EarnFilledIcon, fe as EarnIcon, se as EditIcon, ht as EllipsisIcon, Rr as EmptyIcon, c as EmptyRewardIcon, Mr as ErrorFillIcon, rt as ErrorIcon, lt as EthChainIcon, xt as ExpandIcon, ve as ExternalLinkIcon, Ie as FarmIcon, Ze as FavoriteBorderIcon, Nt as FilterIcon, na as Flex, _a as GameIcon, m as GithubIcon, tn as GlassGlobeIcon, Ae as GlobeIcon, Yt as GovernanceIcon, Ln as Grid, sn as GridIcon, we as GroupsIcon, Ke as HamburgerCloseIcon, yi as HamburgerIcon, a as Heading, He as HelpFilledIcon, gn as HelpIcon, pn as HistoryIcon, Sn as HomeIcon, Dt as HookFeatureIcon, n as HooksIcon, ir as HotDisableIcon, Li as HotIcon, Kt as IconButton, ri as IfoIcon, Ti as InfoFilledIcon, T as InfoIcon, ot as Input, et as InputGroup, Fn as InsertChartOutlinedIcon, li as InstagramIcon, ji as LanguageCurrencyIcon, qn as LanguageIcon, Gr as LaurelLeftIcon, Ui as LaurelRightIcon, $n as LayersIcon, ur as LibraryIcon, hi as LightBulbIcon, Zr as LineGraphIcon, Sr as LineaIcon, Za as Link, Qa as LinkExternal, gr as LinkIcon, kn as LinkPlusIcon, Yi as LinkSlashedIcon, fa as ListViewIcon, Vn as LocationIcon, oa as LockIcon, zt as LogOutIcon, re as LoginIcon, ea as LogoIcon, Wt as LogoRoundIcon, pe as LogoWithTextIcon, ce as LogoutIcon, Gi as MatchBreakpointsProvider, gt as MathWalletIcon, zr as MedalBronzeIcon, l as MedalGoldIcon, Nr as MedalPurpleIcon, it as MedalSilverIcon, ut as MedalTealIcon, St as MediumIcon, ye as MenuIcon, ft as Message, Fr as MessageText, Le as MetamaskIcon, Qe as MinusIcon, Pt as MiscellaneousIcon, Ni as Modal, Di as ModalProvider, D as ModalV2, va as MoonIcon, h as MoreHorizontalIcon, nn as MoreIcon, je as MoreVerticalIcon, jo as MotionModal, Xt as NftFillIcon, cn as NftFilledIcon, Te as NftIcon, qe as NotificationBellIcon, bi as OkxWalletIcon, Ue as OpenNewIcon, _n as OperaIcon, mn as PancakeProtectorIcon, Cn as PancakeRoundIcon, Ot as PancakesIcon, r as PauseCircleIcon, nr as PencilIcon, Fi as PetraWalletIcon, ti as PieChartIcon, Ci as PixelAvatarIcon, Er as PlayCircleOutlineIcon, Nn as PlusIcon, si as PocketWatchIcon, ki as PoolIcon, Gn as PoolTypeIcon, Ur as PoolsChartIcon, Ne as PreTitle, Vi as PredictionsIcon, Zn as PresentCheckIcon, cr as PresentNoneIcon, pi as PresentWonIcon, Yr as PrizeIcon, br as ProgressBunnyIcon, mr as ProposalIcon, Ga as Radio, Dn as RedditIcon, qi as RefreshIcon, ua as RemoveIcon, zn as ResourcesFilledIcon, ia as ResourcesIcon, Lt as RiskAlertIcon, te as RocketIcon, Qi as RocketSmallIcon, Ht as SafePalIcon, de as SearchIcon, oe as SellIcon, mt as SettingsIcon, Lr as ShareIcon, s as ShieldCheckIcon, jr as ShieldIcon, nt as ShoppingBasketFilledIcon, ct as ShoppingBasketIcon, bt as ShrinkIcon, _e as SingletonIcon, ca as Slider, Fe as SmallDotIcon, Xe as SmartContractIcon, Mt as SocialLoginDiscordIcon, ga as SocialLoginTelegramIcon, p as SocialLoginXIcon, en as SortArrowIcon, ke as SortArrowSmallIcon, Jt as SortDESCIcon, on as SortIcon, Ce as SplitIcon, Ge as SpotGraphIcon, vi as StarCircleIcon, Ve as StarFillIcon, hn as StarLineIcon, fn as StoreIcon, Xa as StyledLink, xn as SunIcon, Et as SwapFillIcon, t as SwapHorizIcon, tr as SwapIcon, Pi as SwapVertIcon, ei as SyncAltIcon, z as Tab, Oa as TabMenu, Ra as TableView, Ya as Tag, Si as TeamBattleIcon, Tr as TeamPlayerIcon, Mn as TelegramIcon, oi as TestnetIcon, y as Text, Oi as TicketFillIcon, Wn as TicketIcon, Hr as TicketRoundIcon, Bi as TimerIcon, xo as Toast, Eo as ToastsProvider, Ha as Toggle, Xn as TokenPocketIcon, sr as TokensOnPCSIcon, he as TooltipText, fi as TradeFilledIcon, Jr as TradeIcon, yr as TradingViewIcon, pr as TrendingDownIcon, En as TrendingUpIcon, Ki as TrophyFillIcon, la as TrophyGoldIcon, Rn as TrophyIcon, ra as TrustWalletIcon, It as TuneIcon, ee as TwitterIcon, Zi as UnlockIcon, Vt as VerifiedIcon, ue as VisibilityOffIcon, ae as VisibilityOnIcon, pt as VolumeIcon, Ir as VolumeOffIcon, o as VolumeUpIcon, Ar as VoteIcon, tt as WaitIcon, st as WalletConnectIcon, yt as WalletFilledIcon, ge as WalletFilledV2Icon, Pe as WalletIcon, Ye as WalletRegisterIcon, jt as WarningIcon, ha as WaterIcon, f as WithdrawIcon, $t as XCircleIcon, Oe as YoutubeIcon, qt as ZapIcon, an as ZkEVMIcon, Se as ZkSyncIcon, We as ZoomInIcon, _i as ZoomOutIcon, q as alertVariants, Ro as pcsTheme, J as toastTypes, Tn as useMatchBreakpoints, Lo as useModal, jn as useModalV2, Do as useToast };

//# sourceMappingURL=primitives.js.map