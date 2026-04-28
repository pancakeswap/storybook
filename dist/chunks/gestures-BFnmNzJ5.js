import { Fragment as e } from "react";
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/array.mjs
function t(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function n(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/clamp.mjs
var r = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/format-error-message.mjs
function i(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/errors.mjs
var a = () => {}, o = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (a = (e, t, n) => {
	!e && typeof console < "u" && console.warn(i(t, n));
}, o = (e, t, n) => {
	if (!e) throw Error(i(t, n));
});
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/global-config.mjs
var s = {}, c = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-object.mjs
function l(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var u = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/memo.mjs
/* @__NO_SIDE_EFFECTS__ */
function d(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/noop.mjs
var f = /* @__NO_SIDE_EFFECTS__ */ (e) => e, p = (e, t) => (n) => t(e(n)), m = (...e) => e.reduce(p), h = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, g = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return t(this.subscriptions, e), () => n(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, _ = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, v = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/velocity-per-second.mjs
function y(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/warn-once.mjs
var b = /* @__PURE__ */ new Set();
function x(e, t, n) {
	e || b.has(t) || (console.warn(i(t, n)), b.add(t));
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var S = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, C = 1e-7, w = 12;
function T(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = S(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > C && ++s < w);
	return o;
}
function E(e, t, n, r) {
	if (e === t && n === r) return f;
	let i = (t) => T(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : S(i(e), t, r);
}
//#endregion
//#region node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var D = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ee = (e) => (t) => 1 - e(1 - t), te = /* @__PURE__ */ E(.33, 1.53, .69, .99), ne = /* @__PURE__ */ ee(te), re = /* @__PURE__ */ D(ne), ie = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * ne(e) : .5 * (2 - 2 ** (-10 * (e - 1))), ae = (e) => 1 - Math.sin(Math.acos(e)), oe = ee(ae), se = D(ae), ce = /* @__PURE__ */ E(.42, 0, 1, 1), le = /* @__PURE__ */ E(0, 0, .58, 1), ue = /* @__PURE__ */ E(.42, 0, .58, 1), de = (e) => Array.isArray(e) && typeof e[0] != "number", fe = (e) => Array.isArray(e) && typeof e[0] == "number", pe = {
	linear: f,
	easeIn: ce,
	easeInOut: ue,
	easeOut: le,
	circIn: ae,
	circInOut: se,
	circOut: oe,
	backIn: ne,
	backInOut: re,
	backOut: te,
	anticipate: ie
}, me = (e) => typeof e == "string", he = (e) => {
	if (fe(e)) {
		o(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return E(t, n, r, i);
	} else if (me(e)) return o(pe[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), pe[e];
	return e;
}, ge = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], O = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function _e(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && O.value && O.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var ve = 40;
function ye(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = ge.reduce((e, n) => (e[n] = _e(a, t ? n : void 0), e), {}), { setup: c, read: l, resolveKeyframes: u, preUpdate: d, update: f, preRender: p, render: m, postRender: h } = o, g = () => {
		let a = s.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, ve), 1)), i.timestamp = o, i.isProcessing = !0, c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), h.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
	}, _ = () => {
		n = !0, r = !0, i.isProcessing || e(g);
	};
	return {
		schedule: ge.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || _(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < ge.length; t++) o[ge[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: k, cancel: be, state: xe, steps: Se } = /* @__PURE__ */ ye(typeof requestAnimationFrame < "u" ? requestAnimationFrame : f, !0), Ce;
function we() {
	Ce = void 0;
}
var A = {
	now: () => (Ce === void 0 && A.set(xe.isProcessing || s.useManualTiming ? xe.timestamp : performance.now()), Ce),
	set: (e) => {
		Ce = e, queueMicrotask(we);
	}
}, Te = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, Ee = (e) => (t) => typeof t == "string" && t.startsWith(e), De = /* @__PURE__ */ Ee("--"), Oe = /* @__PURE__ */ Ee("var(--"), ke = (e) => Oe(e) ? Ae.test(e.split("/*")[0].trim()) : !1, Ae = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function je(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var j = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, Me = {
	...j,
	transform: (e) => r(0, 1, e)
}, Ne = {
	...j,
	default: 1
}, M = (e) => Math.round(e * 1e5) / 1e5, Pe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Fe(e) {
	return e == null;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Ie = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Le = (e, t) => (n) => !!(typeof n == "string" && Ie.test(n) && n.startsWith(e) || t && !Fe(n) && Object.prototype.hasOwnProperty.call(n, t)), Re = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Pe);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, ze = (e) => r(0, 255, e), Be = {
	...j,
	transform: (e) => Math.round(ze(e))
}, N = {
	test: /* @__PURE__ */ Le("rgb", "red"),
	parse: /* @__PURE__ */ Re("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Be.transform(e) + ", " + Be.transform(t) + ", " + Be.transform(n) + ", " + M(Me.transform(r)) + ")"
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function Ve(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var He = {
	test: /* @__PURE__ */ Le("#"),
	parse: Ve,
	transform: N.transform
}, P = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), F = /* @__PURE__ */ P("deg"), I = /* @__PURE__ */ P("%"), L = /* @__PURE__ */ P("px"), Ue = /* @__PURE__ */ P("vh"), We = /* @__PURE__ */ P("vw"), Ge = {
	...I,
	parse: (e) => I.parse(e) / 100,
	transform: (e) => I.transform(e * 100)
}, R = {
	test: /* @__PURE__ */ Le("hsl", "hue"),
	parse: /* @__PURE__ */ Re("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + I.transform(M(t)) + ", " + I.transform(M(n)) + ", " + M(Me.transform(r)) + ")"
}, z = {
	test: (e) => N.test(e) || He.test(e) || R.test(e),
	parse: (e) => N.test(e) ? N.parse(e) : R.test(e) ? R.parse(e) : He.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? N.transform(e) : R.transform(e),
	getAnimatableNone: (e) => {
		let t = z.parse(e);
		return t.alpha = 0, z.transform(t);
	}
}, Ke = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function qe(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Pe)?.length || 0) + (e.match(Ke)?.length || 0) > 0;
}
var Je = "number", Ye = "color", Xe = "var", Ze = "var(", Qe = "${}", $e = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function B(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace($e, (e) => (z.test(e) ? (r.color.push(a), i.push(Ye), n.push(z.parse(e))) : e.startsWith(Ze) ? (r.var.push(a), i.push(Xe), n.push(e)) : (r.number.push(a), i.push(Je), n.push(parseFloat(e))), ++a, Qe)).split(Qe),
		indexes: r,
		types: i
	};
}
function et(e) {
	return B(e).values;
}
function tt({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Je ? i += M(r[a]) : e === Ye ? i += z.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function nt(e) {
	return tt(B(e));
}
var rt = (e) => typeof e == "number" ? 0 : z.test(e) ? z.getAnimatableNone(e) : e, it = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : rt(e);
function at(e) {
	let t = B(e);
	return tt(t)(t.values.map((e, n) => it(e, t.split[n])));
}
var V = {
	test: qe,
	parse: et,
	createTransformer: nt,
	getAnimatableNone: at
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function ot(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function st({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = ot(s, r, e + 1 / 3), a = ot(s, r, e), o = ot(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function ct(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var H = (e, t, n) => e + (t - e) * n, lt = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, ut = [
	He,
	N,
	R
], dt = (e) => ut.find((t) => t.test(e));
function ft(e) {
	let t = dt(e);
	if (a(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === R && (n = st(n)), n;
}
var pt = (e, t) => {
	let n = ft(e), r = ft(t);
	if (!n || !r) return ct(e, t);
	let i = { ...n };
	return (e) => (i.red = lt(n.red, r.red, e), i.green = lt(n.green, r.green, e), i.blue = lt(n.blue, r.blue, e), i.alpha = H(n.alpha, r.alpha, e), N.transform(i));
}, mt = new Set(["none", "hidden"]);
function ht(e, t) {
	return mt.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function gt(e, t) {
	return (n) => H(e, t, n);
}
function _t(e) {
	return typeof e == "number" ? gt : typeof e == "string" ? ke(e) ? ct : z.test(e) ? pt : xt : Array.isArray(e) ? vt : typeof e == "object" ? z.test(e) ? pt : yt : ct;
}
function vt(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => _t(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function yt(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = _t(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function bt(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var xt = (e, t) => {
	let n = V.createTransformer(t), r = B(e), i = B(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? mt.has(e) && !i.values.length || mt.has(t) && !r.values.length ? ht(e, t) : m(vt(bt(r, i), i.values), n) : (a(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), ct(e, t));
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function St(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : _t(e)(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Ct = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => k.update(t, e),
		stop: () => be(t),
		now: () => xe.isProcessing ? xe.timestamp : A.now()
	};
}, wt = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Tt = 2e4;
function Et(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Dt(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Et(r), Tt);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ v(i)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var U = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function Ot(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var kt = 12;
function At(e, t, n) {
	let r = n;
	for (let n = 1; n < kt; n++) r -= e(r) / t(r);
	return r;
}
var jt = .001;
function Mt({ duration: e = U.duration, bounce: t = U.bounce, velocity: n = U.velocity, mass: i = U.mass }) {
	let o, s;
	a(e <= /* @__PURE__ */ _(U.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let c = 1 - t;
	c = r(U.minDamping, U.maxDamping, c), e = r(U.minDuration, U.maxDuration, /* @__PURE__ */ v(e)), c < 1 ? (o = (t) => {
		let r = t * c, i = r * e, a = r - n, o = Ot(t, c), s = Math.exp(-i);
		return jt - a / o * s;
	}, s = (t) => {
		let r = t * c * e, i = r * n + n, a = c ** 2 * t ** 2 * e, s = Math.exp(-r), l = Ot(t ** 2, c);
		return (-o(t) + jt > 0 ? -1 : 1) * ((i - a) * s) / l;
	}) : (o = (t) => {
		let r = Math.exp(-t * e), i = (t - n) * e + 1;
		return -jt + r * i;
	}, s = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let l = 5 / e, u = At(o, s, l);
	if (e = /* @__PURE__ */ _(e), isNaN(u)) return {
		stiffness: U.stiffness,
		damping: U.damping,
		duration: e
	};
	{
		let t = u ** 2 * i;
		return {
			stiffness: t,
			damping: c * 2 * Math.sqrt(i * t),
			duration: e
		};
	}
}
var Nt = ["duration", "bounce"], Pt = [
	"stiffness",
	"damping",
	"mass"
];
function Ft(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function It(e) {
	let t = {
		velocity: U.velocity,
		stiffness: U.stiffness,
		damping: U.damping,
		mass: U.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Ft(e, Pt) && Ft(e, Nt)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, i = 2 * Math.PI / (n * 1.2), a = i * i, o = 2 * r(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
		t = {
			...t,
			mass: U.mass,
			stiffness: a,
			damping: o
		};
	} else {
		let n = Mt({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: U.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Lt(e = U.visualDuration, t = U.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = It({
		...n,
		velocity: -/* @__PURE__ */ v(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, y = /* @__PURE__ */ v(Math.sqrt(c / u)), b = Math.abs(g) < 5;
	r ||= b ? U.restSpeed.granular : U.restSpeed.default, i ||= b ? U.restDelta.granular : U.restDelta.default;
	let x, S, C, w, T, E;
	if (h < 1) C = Ot(y, h), w = (m + h * y * g) / C, x = (e) => o - Math.exp(-h * y * e) * (w * Math.sin(C * e) + g * Math.cos(C * e)), T = h * y * w + g * C, E = h * y * g - w * C, S = (e) => Math.exp(-h * y * e) * (T * Math.sin(C * e) + E * Math.cos(C * e));
	else if (h === 1) {
		x = (e) => o - Math.exp(-y * e) * (g + (m + y * g) * e);
		let e = m + y * g;
		S = (t) => Math.exp(-y * t) * (y * e * t - m);
	} else {
		let e = y * Math.sqrt(h * h - 1);
		x = (t) => {
			let n = Math.exp(-h * y * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * y * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * y * g) / e, n = h * y * t - g * e, r = h * y * g - t * e;
		S = (t) => {
			let i = Math.exp(-h * y * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let D = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ _(S(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * y * e), n = Math.sin(C * e), a = Math.cos(C * e), c = o - t * (w * n + g * a), l = /* @__PURE__ */ _(t * (T * n + E * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = x(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ _(S(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Et(D), Tt), t = wt((t) => D.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return D;
}
Lt.applyToOptions = (e) => {
	let t = Dt(e, 100, Lt);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ _(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Rt = 5;
function zt(e, t, n) {
	let r = Math.max(t - Rt, 0);
	return y(n - e(r), t - r);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Bt({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Lt({
			keyframes: [f.value, m(f.value)],
			velocity: zt(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Vt(e, t, n) {
	let r = [], i = n || s.mix || St, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = m(Array.isArray(t) ? t[n] || f : t, a)), r.push(a);
	}
	return r;
}
function Ht(e, t, { clamp: n = !0, ease: i, mixer: a } = {}) {
	let s = e.length;
	if (o(s === t.length, "Both input and output ranges must be the same length", "range-length"), s === 1) return () => t[0];
	if (s === 2 && t[0] === t[1]) return () => t[1];
	let c = e[0] === e[1];
	e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let l = Vt(t, i, a), u = l.length, d = (n) => {
		if (c && n < e[0]) return t[0];
		let r = 0;
		if (u > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ h(e[r], e[r + 1], n);
		return l[r](i);
	};
	return n ? (t) => d(r(e[0], e[s - 1], t)) : d;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function Ut(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ h(0, t, r);
		e.push(H(n, 1, i));
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Wt(e) {
	let t = [0];
	return Ut(t, e.length - 1), t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Gt(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Kt(e, t) {
	return e.map(() => t || ue).splice(0, e.length - 1);
}
function W({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = de(r) ? r.map(he) : he(r), a = {
		done: !1,
		value: t[0]
	}, o = Ht(Gt(n && n.length === t.length ? n : Wt(t), e), t, { ease: Array.isArray(i) ? i : Kt(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var qt = (e) => e !== null;
function Jt(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(qt), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Yt = {
	decay: Bt,
	inertia: Bt,
	tween: W,
	keyframes: W,
	spring: Lt
};
function Xt(e) {
	typeof e.type == "string" && (e.type = Yt[e.type]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Zt = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, Qt = (e) => e / 100, $t = class extends Zt {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== A.now() && this.tick(A.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, Te.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		Xt(e);
		let { type: t = W, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: s } = e, c = t || W;
		process.env.NODE_ENV !== "production" && c !== W && o(s.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${s}`, "spring-two-frames"), c !== W && typeof s[0] != "number" && (this.mixKeyframes = m(Qt, St(s[0], s[1])), s = [0, 100]);
		let l = c({
			...e,
			keyframes: s
		});
		i === "mirror" && (this.mirroredGenerator = c({
			...e,
			keyframes: [...s].reverse(),
			velocity: -a
		})), l.calculatedDuration === null && (l.calculatedDuration = Et(l));
		let { calculatedDuration: u } = l;
		this.calculatedDuration = u, this.resolvedDuration = u + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = l;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: i, mixKeyframes: a, mirroredGenerator: o, resolvedDuration: s, calculatedDuration: c } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: l = 0, keyframes: u, repeat: d, repeatType: f, repeatDelay: p, type: m, onUpdate: h, finalKeyframe: g } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let _ = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), v = this.playbackSpeed >= 0 ? _ < 0 : _ > i;
		this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
		let y = this.currentTime, b = n;
		if (d) {
			let e = Math.min(this.currentTime, i) / s, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, d + 1), t % 2 && (f === "reverse" ? (n = 1 - n, p && (n -= p / s)) : f === "mirror" && (b = o)), y = r(0, 1, n) * s;
		}
		let x;
		v ? (this.delayState.value = u[0], x = this.delayState) : x = b.next(y), a && !v && (x.value = a(x.value));
		let { done: S } = x;
		!v && c !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
		let C = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
		return C && m !== Bt && (x.value = Jt(u, this.options, g, this.speed)), h && h(x.value), C && this.finish(), x;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ v(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ v(e);
	}
	get time() {
		return /* @__PURE__ */ v(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ _(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return zt((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(A.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ v(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Ct, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(A.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Te.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function en(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var G = (e) => e * 180 / Math.PI, tn = (e) => rn(G(Math.atan2(e[1], e[0]))), nn = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: tn,
	rotateZ: tn,
	skewX: (e) => G(Math.atan(e[1])),
	skewY: (e) => G(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, rn = (e) => (e %= 360, e < 0 && (e += 360), e), an = tn, on = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), sn = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), cn = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: on,
	scaleY: sn,
	scale: (e) => (on(e) + sn(e)) / 2,
	rotateX: (e) => rn(G(Math.atan2(e[6], e[5]))),
	rotateY: (e) => rn(G(Math.atan2(-e[2], e[0]))),
	rotateZ: an,
	rotate: an,
	skewX: (e) => G(Math.atan(e[4])),
	skewY: (e) => G(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ln(e) {
	return e.includes("scale") ? 1 : 0;
}
function un(e, t) {
	if (!e || e === "none") return ln(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = cn, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = nn, i = t;
	}
	if (!i) return ln(t);
	let a = r[t], o = i[1].split(",").map(fn);
	return typeof a == "function" ? a(o) : o[a];
}
var dn = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return un(n, t);
};
function fn(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var K = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], q = new Set(K), pn = (e) => e === j || e === L, mn = new Set([
	"x",
	"y",
	"z"
]), hn = K.filter((e) => !mn.has(e));
function gn(e) {
	let t = [];
	return hn.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
	}), t;
}
var J = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => un(t, "x"),
	y: (e, { transform: t }) => un(t, "y")
};
J.translateX = J.x, J.translateY = J.y;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var Y = /* @__PURE__ */ new Set(), _n = !1, vn = !1, yn = !1;
function bn() {
	if (vn) {
		let e = Array.from(Y).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = gn(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	vn = !1, _n = !1, Y.forEach((e) => e.complete(yn)), Y.clear();
}
function xn() {
	Y.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (vn = !0);
	});
}
function Sn() {
	yn = !0, xn(), bn(), yn = !1;
}
var Cn = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Y.add(this), _n || (_n = !0, k.read(xn), k.resolveKeyframes(bn))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		en(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Y.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Y.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, wn = (e) => e.startsWith("--");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Tn(e, t, n) {
	wn(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var En = {};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Dn(e, t) {
	let n = /* @__PURE__ */ d(e);
	return () => En[t] ?? n();
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var On = /* @__PURE__ */ Dn(() => window.ScrollTimeline !== void 0, "scrollTimeline"), kn = /* @__PURE__ */ Dn(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), An = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, jn = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ An([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ An([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ An([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ An([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Mn(e, t) {
	if (e) return typeof e == "function" ? kn() ? wt(e, t) : "ease-out" : fe(e) ? An(e) : Array.isArray(e) ? e.map((e) => Mn(e, t) || jn.easeOut) : jn[e];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Nn(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Mn(s, i);
	Array.isArray(d) && (u.easing = d), O.value && Te.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return O.value && p.finished.finally(() => {
		Te.waapi--;
	}), p;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Pn(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Fn({ type: e, ...t }) {
	return Pn(e) && kn() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var In = class extends Zt {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: s, onComplete: c } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, o(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let l = Fn(e);
		this.animation = Nn(t, n, r, l, i), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Jt(r, this.options, s, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Tn(t, n, e), this.animation.cancel();
			}
			c?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ v(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ v(e);
	}
	get time() {
		return /* @__PURE__ */ v(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ _(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && On() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), f) : r(this);
	}
}, Ln = {
	anticipate: ie,
	backInOut: re,
	circInOut: se
};
function Rn(e) {
	return e in Ln;
}
function zn(e) {
	typeof e.ease == "string" && Rn(e.ease) && (e.ease = Ln[e.ease]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Bn = 10, Vn = class extends In {
	constructor(e) {
		zn(e), Xt(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: i, element: a, ...o } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let s = new $t({
			...o,
			autoplay: !1
		}), c = Math.max(Bn, A.now() - this.startTime), l = r(0, Bn, c - Bn), u = s.sample(c).value, { name: d } = this.options;
		a && d && Tn(a, d, u), t.setWithVelocity(s.sample(Math.max(0, c - l)).value, u, l), s.stop();
	}
}, Hn = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (V.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Un(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Wn(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let o = e[e.length - 1], s = Hn(i, t), c = Hn(o, t);
	return a(s === c, `You are trying to animate ${t} from "${i}" to "${o}". "${s ? o : i}" is not an animatable value.`, "value-not-animatable"), !s || !c ? !1 : Un(e) || (n === "spring" || Pn(n)) && r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Gn(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var Kn = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), qn = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Jn(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && qn.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Yn = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), Xn = /* @__PURE__ */ d(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Zn(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Xn() && n && (Kn.has(n) || Yn.has(n) && Jn(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var Qn = 40, $n = class extends Zt {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = A.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		};
		this.keyframeResolver = new (l?.KeyframeResolver || Cn)(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: c, isHandoff: l, onUpdate: u } = n;
		this.resolvedAt = A.now();
		let d = !0;
		Wn(e, i, a, o) || (d = !1, (s.instantAnimations || !c) && u?.(Jt(e, n, t)), e[0] = e[e.length - 1], Gn(n), n.repeat = 0);
		let p = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Qn ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, m = d && !l && Zn(p), h = p.motionValue?.owner?.current, g;
		if (m) try {
			g = new Vn({
				...p,
				element: h
			});
		} catch {
			g = new $t(p);
		}
		else g = new $t(p);
		g.finished.then(() => {
			this.notifyFinished();
		}).catch(f), this.pendingTimeline &&= (this.stopTimeline = g.attachTimeline(this.pendingTimeline), void 0), this._animation = g;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), Sn()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function er(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var tr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function nr(e) {
	let t = tr.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var rr = 4;
function ir(e, t, n = 1) {
	o(n <= rr, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = nr(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return c(e) ? parseFloat(e) : e;
	}
	return ke(i) ? ir(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var ar = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, or = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), sr = {
	type: "keyframes",
	duration: .8
}, cr = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, lr = (e, { keyframes: t }) => t.length > 2 ? sr : q.has(e) ? e.startsWith("scale") ? or(t[1]) : ar : cr;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function ur(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function dr(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : ur(n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var fr = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function pr(e) {
	for (let t in e) if (!fr.has(t)) return !0;
	return !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var mr = (e, t, n, r = {}, i, a) => (o) => {
	let c = dr(r, e) || {}, l = c.delay || r.delay || 0, { elapsed: u = 0 } = r;
	u -= /* @__PURE__ */ _(l);
	let d = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...c,
		delay: -u,
		onUpdate: (e) => {
			t.set(e), c.onUpdate && c.onUpdate(e);
		},
		onComplete: () => {
			o(), c.onComplete && c.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	pr(c) || Object.assign(d, lr(e, d)), d.duration &&= /* @__PURE__ */ _(d.duration), d.repeatDelay &&= /* @__PURE__ */ _(d.repeatDelay), d.from !== void 0 && (d.keyframes[0] = d.from);
	let f = !1;
	if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (Gn(d), d.delay === 0 && (f = !0)), (s.instantAnimations || s.skipAnimations || i?.shouldSkipAnimations) && (f = !0, Gn(d), d.delay = 0), d.allowFlatten = !c.type && !c.ease, f && !a && t.get() !== void 0) {
		let e = Jt(d.keyframes, c);
		if (e !== void 0) {
			k.update(() => {
				d.onUpdate(e), d.onComplete();
			});
			return;
		}
	}
	return c.isSync ? new $t(d) : new $n(d);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function hr(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function gr(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = hr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = hr(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function X(e, t, n) {
	let r = e.getProps();
	return gr(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var _r = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...K
]), vr = 30, yr = (e) => !isNaN(parseFloat(e)), br = { current: void 0 }, xr = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = A.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = A.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = yr(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && x(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new g());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), k.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return br.current && br.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = A.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > vr) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, vr);
		return y(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function Sr(e, t) {
	return new xr(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Cr = (e) => Array.isArray(e);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function wr(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Sr(n));
}
function Tr(e) {
	return Cr(e) ? e[e.length - 1] || 0 : e;
}
function Er(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = X(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) wr(e, t, Tr(i[t]));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var Z = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Dr(e) {
	return !!(Z(e) && e.add);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Or(e, t) {
	let n = e.getValue("willChange");
	if (Dr(n)) return n.add(t);
	if (!n && s.WillChange) {
		let n = new s.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function kr(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Ar = "data-" + kr("framerAppearId");
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function jr(e) {
	return e.props[Ar];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Mr({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Nr(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? ur(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && Mr(d, t)) continue;
		let o = {
			delay: n,
			...dr(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			k.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = jr(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, k);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		Or(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(mr(t, r, i, p && _r.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => k.update(() => {
			o && Er(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function Pr(e, t, n = {}) {
	let r = X(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Nr(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Fr(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Fr(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(Pr(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + er(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Ir(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Pr(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Pr(e, t, n);
	else {
		let i = typeof t == "function" ? X(e, t, n.custom) : t;
		r = Promise.all(Nr(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/auto.mjs
var Lr = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Rr = (e) => (t) => t.test(e), zr = [
	j,
	L,
	I,
	F,
	We,
	Ue,
	Lr
], Br = (e) => zr.find(Rr(e));
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Vr(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || u(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var Hr = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Ur(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Pe) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = Hr.has(t) ? 1 : 0;
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Wr = /\b([a-z-]*)\(.*?\)/gu, Gr = {
	...V,
	getAnimatableNone: (e) => {
		let t = e.match(Wr);
		return t ? t.map(Ur).join(" ") : e;
	}
}, Kr = {
	...V,
	getAnimatableNone: (e) => {
		let t = V.parse(e);
		return V.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, qr = {
	...j,
	transform: Math.round
}, Jr = {
	borderWidth: L,
	borderTopWidth: L,
	borderRightWidth: L,
	borderBottomWidth: L,
	borderLeftWidth: L,
	borderRadius: L,
	borderTopLeftRadius: L,
	borderTopRightRadius: L,
	borderBottomRightRadius: L,
	borderBottomLeftRadius: L,
	width: L,
	maxWidth: L,
	height: L,
	maxHeight: L,
	top: L,
	right: L,
	bottom: L,
	left: L,
	inset: L,
	insetBlock: L,
	insetBlockStart: L,
	insetBlockEnd: L,
	insetInline: L,
	insetInlineStart: L,
	insetInlineEnd: L,
	padding: L,
	paddingTop: L,
	paddingRight: L,
	paddingBottom: L,
	paddingLeft: L,
	paddingBlock: L,
	paddingBlockStart: L,
	paddingBlockEnd: L,
	paddingInline: L,
	paddingInlineStart: L,
	paddingInlineEnd: L,
	margin: L,
	marginTop: L,
	marginRight: L,
	marginBottom: L,
	marginLeft: L,
	marginBlock: L,
	marginBlockStart: L,
	marginBlockEnd: L,
	marginInline: L,
	marginInlineStart: L,
	marginInlineEnd: L,
	fontSize: L,
	backgroundPositionX: L,
	backgroundPositionY: L,
	rotate: F,
	rotateX: F,
	rotateY: F,
	rotateZ: F,
	scale: Ne,
	scaleX: Ne,
	scaleY: Ne,
	scaleZ: Ne,
	skew: F,
	skewX: F,
	skewY: F,
	distance: L,
	translateX: L,
	translateY: L,
	translateZ: L,
	x: L,
	y: L,
	z: L,
	perspective: L,
	transformPerspective: L,
	opacity: Me,
	originX: Ge,
	originY: Ge,
	originZ: L,
	zIndex: qr,
	fillOpacity: Me,
	strokeOpacity: Me,
	numOctaves: qr
}, Yr = {
	...Jr,
	color: z,
	backgroundColor: z,
	outlineColor: z,
	fill: z,
	stroke: z,
	borderColor: z,
	borderTopColor: z,
	borderRightColor: z,
	borderBottomColor: z,
	borderLeftColor: z,
	filter: Gr,
	WebkitFilter: Gr,
	mask: Kr,
	WebkitMask: Kr
}, Xr = (e) => Yr[e], Zr = /* @__PURE__ */ new Set([Gr, Kr]);
function Qr(e, t) {
	let n = Xr(e);
	return Zr.has(n) || (n = V), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var $r = new Set([
	"auto",
	"none",
	"0"
]);
function ei(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !$r.has(t) && B(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Qr(n, i);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var ti = class extends Cn {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), ke(r))) {
				let i = ir(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !_r.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Br(r), o = Br(i);
		if (je(r) !== je(i) && J[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (pn(a) && pn(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else J[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Vr(e[t])) && n.push(t);
		n.length && ei(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = J[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = J[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ni(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var ri = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function ii(e) {
	return l(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: ai, cancel: oi } = /* @__PURE__ */ ye(queueMicrotask, !1), si = {
	x: !1,
	y: !1
};
function ci() {
	return si.x || si.y;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function li(e, t) {
	let n = ni(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/hover.mjs
function ui(e) {
	return !(e.pointerType === "touch" || ci());
}
function di(e, t, n = {}) {
	let [r, i, a] = li(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!ui(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var fi = (e, t) => t ? e === t ? !0 : fi(e, t.parentElement) : !1, pi = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, mi = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function hi(e) {
	return mi.has(e.tagName) || e.isContentEditable === !0;
}
var gi = new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function _i(e) {
	return gi.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var vi = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function yi(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function bi(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var xi = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = yi(() => {
		if (vi.has(n)) return;
		bi(n, "down");
		let e = yi(() => {
			bi(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => bi(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Si(e) {
	return pi(e) && !ci();
}
var Ci = /* @__PURE__ */ new WeakSet();
function wi(e, t, n = {}) {
	let [r, i, a] = li(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Si(e) || Ci.has(e)) return;
		vi.add(r), n.stopPropagation && Ci.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), vi.has(r) && vi.delete(r), Si(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || fi(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), ii(e) && (e.addEventListener("focus", (e) => xi(e, i)), !hi(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var Ti = [
	...zr,
	z,
	V
], Ei = (e) => Ti.find(Rr(e)), Di = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Oi = () => ({
	x: Di(),
	y: Di()
}), ki = () => ({
	min: 0,
	max: 0
}), Ai = () => ({
	x: ki(),
	y: ki()
}), ji = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function Mi(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function Ni(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var Pi = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], Fi = ["initial", ...Pi];
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function Ii(e) {
	return Mi(e.animate) || Fi.some((t) => Ni(e[t]));
}
function Li(e) {
	return !!(Ii(e) || e.variants);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function Ri(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (Z(i)) e.addValue(r, i);
		else if (Z(a)) e.addValue(r, Sr(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Sr(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var zi = { current: null }, Bi = { current: !1 }, Vi = typeof window < "u";
function Hi() {
	if (Bi.current = !0, Vi) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => zi.current = e.matches;
		e.addEventListener("change", t), t();
	} else zi.current = !1;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var Ui = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Wi = {};
function Gi(e) {
	Wi = e;
}
function Ki() {
	return Wi;
}
var qi = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Cn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = A.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, k.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Ii(t), this.isVariantNode = Li(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && Z(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, ji.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Bi.current || Hi(), this.shouldReduceMotion = zi.current), process.env.NODE_ENV !== "production" && x(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), be(this.notifyUpdate), be(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && Kn.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new In({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ _(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = q.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && k.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Wi) {
			let t = Wi[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ai();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Ui.length; t++) {
			let n = Ui[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Ri(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Sr(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (c(n) || u(n)) ? n = parseFloat(n) : !Ei(n) && V.test(t) && (n = Qr(e, t)), this.setBaseTarget(e, Z(n) ? n.get() : n)), Z(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = gr(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !Z(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new g()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		ai.render(this.render);
	}
}, Ji = class extends qi {
	constructor() {
		super(...arguments), this.KeyframeResolver = ti;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		Z(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Q = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Yi({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Xi({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Zi(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function Qi(e) {
	return e === void 0 || e === 1;
}
function $i({ scale: e, scaleX: t, scaleY: n }) {
	return !Qi(e) || !Qi(t) || !Qi(n);
}
function ea(e) {
	return $i(e) || ta(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function ta(e) {
	return na(e.x) || na(e.y);
}
function na(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function ra(e, t, n) {
	return n + t * (e - n);
}
function ia(e, t, n, r, i) {
	return i !== void 0 && (e = ra(e, i, r)), ra(e, n, r) + t;
}
function aa(e, t = 0, n = 1, r, i) {
	e.min = ia(e.min, t, n, r, i), e.max = ia(e.max, t, n, r, i);
}
function oa(e, { x: t, y: n }) {
	aa(e.x, t.translate, t.scale, t.originPoint), aa(e.y, n.translate, n.scale, n.originPoint);
}
var sa = .999999999999, ca = 1.0000000000001;
function la(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (ua(e.x, -a.scroll.offset.x), ua(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, oa(e, o)), r && ea(a.latestValues) && pa(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < ca && t.x > sa && (t.x = 1), t.y < ca && t.y > sa && (t.y = 1);
}
function ua(e, t) {
	e.min += t, e.max += t;
}
function da(e, t, n, r, i = .5) {
	aa(e, t, n, H(e.min, e.max, i), r);
}
function fa(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function pa(e, t, n) {
	let r = n ?? e;
	da(e.x, fa(t.x, r.x), t.scaleX, t.scale, t.originX), da(e.y, fa(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function ma(e, t) {
	return Yi(Zi(e.getBoundingClientRect(), t));
}
function ha(e, t, n) {
	let r = ma(e, n), { scroll: i } = t;
	return i && (ua(r.x, i.offset.x), ua(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var ga = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, _a = K.length;
function va(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < _a; a++) {
		let o = K[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === (o.startsWith("scale") ? 1 : 0);
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ri(s, Jr[o]);
			if (!c) {
				i = !1;
				let t = ga[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function ya(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (q.has(e)) {
			o = !0;
			continue;
		} else if (De(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ri(n, Jr[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = va(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function ba(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function xa(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Sa = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (L.test(e)) e = parseFloat(e);
	else return e;
	return `${xa(e, t.target.x)}% ${xa(e, t.target.y)}%`;
} }, Ca = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = V.parse(e);
	if (i.length > 5) return r;
	let a = V.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = H(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, wa = {
	borderRadius: {
		...Sa,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Sa,
	borderTopRightRadius: Sa,
	borderBottomLeftRadius: Sa,
	borderBottomRightRadius: Sa,
	boxShadow: Ca
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function Ta(e, { layout: t, layoutId: n }) {
	return q.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!wa[e] || e === "opacity");
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function Ea(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (Z(r[t]) || i && Z(i[t]) || Ta(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function Da(e) {
	return window.getComputedStyle(e);
}
var Oa = class extends Ji {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = ba;
	}
	readValueFromInstance(e, t) {
		if (q.has(t)) return this.projection?.isProjecting ? ln(t) : dn(e, t);
		{
			let n = Da(e), r = (De(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return ma(e, t);
	}
	build(e, t, n) {
		ya(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Ea(e, t, n);
	}
}, ka = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, Aa = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function ja(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? ka : Aa;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var Ma = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function Na(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (ya(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of Ma) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && ja(d, i, a, o, !1);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var Pa = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), Fa = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function Ia(e, t, n, r) {
	ba(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(Pa.has(n) ? n : kr(n), t.attrs[n]);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function La(e, t, n) {
	let r = Ea(e, t, n);
	for (let n in e) if (Z(e[n]) || Z(t[n])) {
		let t = K.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var Ra = class extends Ji {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ai;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (q.has(t)) {
			let e = Xr(t);
			return e && e.default || 0;
		}
		return t = Pa.has(t) ? t : kr(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return La(e, t, n);
	}
	build(e, t, n) {
		Na(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		Ia(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Fa(e.tagName), super.mount(e);
	}
}, za = Fi.length;
function Ba(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Ba(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < za; n++) {
		let r = Fi[n], i = e.props[r];
		(Ni(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function Va(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var Ha = [...Pi].reverse(), Ua = Pi.length;
function Wa(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Ir(e, t, n)));
}
function Ga(e) {
	let t = Wa(e), n = qa(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = X(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = Ba(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < Ua; t++) {
			let p = Ha[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = Ni(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || Mi(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = Ka(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, T = {
				...w,
				...C
			}, E = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in T) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Cr(t) && Cr(n) ? !Va(t, n) : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let D = v && y;
			b && (!D || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !D && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = X(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = er(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = X(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = qa(), i = !0;
		}
	};
}
function Ka(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Va(t, e) : !1;
}
function $(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function qa() {
	return {
		animate: $(!0),
		whileInView: $(),
		whileHover: $(),
		whileTap: $(),
		whileDrag: $(),
		whileFocus: $(),
		exit: $()
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function Ja(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var Ya = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Xa(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Ya.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var Za = (t, n) => n.isSVG ?? Xa(t) ? new Ra(n) : new Oa(n, { allowProjection: t !== e }), Qa = class extends Q {
	constructor(e) {
		super(e), e.animationState ||= Ga(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		Mi(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, $a = 0, eo = {
	animation: { Feature: Qa },
	exit: { Feature: class extends Q {
		constructor() {
			super(...arguments), this.id = $a++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string") {
						let n = X(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/events/event-info.mjs
function to(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var no = (e) => (t) => pi(t) && e(t, to(t));
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/gestures/hover.mjs
function ro(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && k.postRender(() => i(t, to(t)));
}
var io = class extends Q {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = di(e, (e, t) => (ro(this.node, t, "Start"), (e) => ro(this.node, e, "End"))));
	}
	unmount() {}
}, ao = class extends Q {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = m(Ja(this.node.current, "focus", () => this.onFocus()), Ja(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/gestures/press.mjs
function oo(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && k.postRender(() => i(t, to(t)));
}
var so = class extends Q {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = wi(e, (e, t) => (oo(this.node, t, "Start"), (e, { success: t }) => oo(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, co = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), uo = (e) => {
	let t = co.get(e.target);
	t && t(e);
}, fo = (e) => {
	e.forEach(uo);
};
function po({ root: e, ...t }) {
	let n = e || document;
	lo.has(n) || lo.set(n, {});
	let r = lo.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(fo, {
		root: e,
		...t
	})), r[i];
}
function mo(e, t, n) {
	let r = po(t);
	return co.set(e, n), r.observe(e), () => {
		co.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var ho = {
	some: 0,
	all: 1
}, go = class extends Q {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : ho[r]
		};
		this.stopObserver = mo(this.node.current, a, (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(_o(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function _o({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var vo = {
	inView: { Feature: go },
	tap: { Feature: so },
	focus: { Feature: ao },
	hover: { Feature: io }
};
//#endregion
export { A as $, Li as A, ni as B, ea as C, Ki as D, Q as E, _i as F, Sr as G, Ar as H, pi as I, dr as J, gr as K, si as L, Mi as M, Ai as N, Gi as O, Oi as P, Te as Q, ai as R, $i as S, Xi as T, Or as U, jr as V, Z as W, I as X, H as Y, L as Z, la as _, t as _t, Za as a, oe as at, ua as b, La as c, _ as ct, Ea as d, m as dt, be as et, Ta as f, f as ft, oa as g, r as gt, ha as h, a as ht, eo as i, O as it, Ni as j, Ii as k, Fa as l, g as lt, ya as m, o as mt, no as n, xe as nt, Xa as o, x as ot, wa as p, l as pt, mr as q, to as r, Se as rt, Ja as s, v as st, vo as t, k as tt, Na as u, h as ut, ra as v, n as vt, Yi as w, ta as x, pa as y, ii as z };

//# sourceMappingURL=gestures-BFnmNzJ5.js.map