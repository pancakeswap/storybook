import { $ as e, B as t, C as n, E as r, F as i, G as a, I as o, J as s, L as c, N as l, P as u, Q as d, R as f, S as p, T as ee, U as te, V as ne, W as re, X as m, Y as h, Z as ie, _ as ae, _t as oe, at as se, b as g, ct as ce, dt as le, et as _, ft as v, g as ue, gt as de, h as fe, it as y, lt as pe, mt as me, n as he, nt as b, p as ge, pt as _e, q as ve, r as ye, rt as x, s as S, st as be, tt as C, ut as w, v as xe, vt as T, w as Se, x as Ce, y as E } from "./gestures-BFnmNzJ5.js";
import { Component as we, createContext as D, useCallback as Te, useContext as O, useEffect as Ee, useId as De } from "react";
import { jsx as Oe } from "react/jsx-runtime";
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var ke = D({}), Ae = /* @__PURE__ */ D(null);
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function je(e) {
	return e === "x" || e === "y" ? c[e] ? null : (c[e] = !0, () => {
		c[e] = !1;
	}) : c.x || c.y ? null : (c.x = c.y = !0, () => {
		c.x = c.y = !1;
	});
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function k(e) {
	return _e(e) && "ownerSVGElement" in e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var A = /* @__PURE__ */ new WeakMap(), j, Me = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : k(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Ne = /* @__PURE__ */ Me("inline", "width", "offsetWidth"), Pe = /* @__PURE__ */ Me("block", "height", "offsetHeight");
function Fe({ target: e, borderBoxSize: t }) {
	A.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Ne(e, t);
			},
			get height() {
				return Pe(e, t);
			}
		});
	});
}
function Ie(e) {
	e.forEach(Fe);
}
function Le() {
	typeof ResizeObserver > "u" || (j = new ResizeObserver(Ie));
}
function Re(e, n) {
	j || Le();
	let r = t(e);
	return r.forEach((e) => {
		let t = A.get(e);
		t || (t = /* @__PURE__ */ new Set(), A.set(e, t)), t.add(n), j?.observe(e);
	}), () => {
		r.forEach((e) => {
			let t = A.get(e);
			t?.delete(n), t?.size || j?.unobserve(e);
		});
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var M = /* @__PURE__ */ new Set(), N;
function ze() {
	N = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		M.forEach((t) => t(e));
	}, window.addEventListener("resize", N);
}
function Be(e) {
	return M.add(e), N || ze(), () => {
		M.delete(e), !M.size && typeof N == "function" && (window.removeEventListener("resize", N), N = void 0);
	};
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/index.mjs
function Ve(e, t) {
	return typeof e == "function" ? Be(e) : Re(e, t);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function He(e) {
	return k(e) && e.tagName === "svg";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function P(e, t) {
	e.min = t.min, e.max = t.max;
}
function F(e, t) {
	P(e.x, t.x), P(e.y, t.y);
}
function Ue(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var We = 1e-4, Ge = 1 - We, Ke = 1 + We, qe = .01, Je = 0 - qe, Ye = 0 + qe;
function I(e) {
	return e.max - e.min;
}
function Xe(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Ze(e, t, n, r = .5) {
	e.origin = r, e.originPoint = h(t.min, t.max, e.origin), e.scale = I(n) / I(t), e.translate = h(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Ge && e.scale <= Ke || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Je && e.translate <= Ye || isNaN(e.translate)) && (e.translate = 0);
}
function L(e, t, n, r) {
	Ze(e.x, t.x, n.x, r ? r.originX : void 0), Ze(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Qe(e, t, n, r = 0) {
	e.min = (r ? h(n.min, n.max, r) : n.min) + t.min, e.max = e.min + I(t);
}
function $e(e, t, n, r) {
	Qe(e.x, t.x, n.x, r?.x), Qe(e.y, t.y, n.y, r?.y);
}
function et(e, t, n, r = 0) {
	let i = r ? h(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + I(t);
}
function R(e, t, n, r) {
	et(e.x, t.x, n.x, r?.x), et(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function tt(e, t, n, r, i) {
	return e -= t, e = xe(e, 1 / n, r), i !== void 0 && (e = xe(e, 1 / i, r)), e;
}
function nt(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (m.test(t) && (t = parseFloat(t), t = h(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = h(a.min, a.max, r);
	e === a && (s -= t), e.min = tt(e.min, t, n, s, i), e.max = tt(e.max, t, n, s, i);
}
function rt(e, t, [n, r, i], a, o) {
	nt(e, t[n], t[r], t[i], t.scale, a, o);
}
var it = [
	"x",
	"scaleX",
	"originX"
], at = [
	"y",
	"scaleY",
	"originY"
];
function ot(e, t, n, r) {
	rt(e.x, t, it, n ? n.x : void 0, r ? r.x : void 0), rt(e.y, t, at, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function st(e) {
	return e.translate === 0 && e.scale === 1;
}
function ct(e) {
	return st(e.x) && st(e.y);
}
function lt(e, t) {
	return e.min === t.min && e.max === t.max;
}
function ut(e, t) {
	return lt(e.x, t.x) && lt(e.y, t.y);
}
function dt(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ft(e, t) {
	return dt(e.x, t.x) && dt(e.y, t.y);
}
function pt(e) {
	return I(e.x) / I(e.y);
}
function mt(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function z(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function ht(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var gt = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
], _t = gt.length, vt = (e) => typeof e == "string" ? parseFloat(e) : e, yt = (e) => typeof e == "number" || ie.test(e);
function bt(e, t, n, r, i, a) {
	i ? (e.opacity = h(0, n.opacity ?? 1, St(r)), e.opacityExit = h(t.opacity ?? 1, 0, Ct(r))) : a && (e.opacity = h(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < _t; i++) {
		let a = gt[i], o = xt(t, a), s = xt(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || yt(o) === yt(s) ? (e[a] = Math.max(h(vt(o), vt(s), r), 0), (m.test(s) || m.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = h(t.rotate || 0, n.rotate || 0, r));
}
function xt(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var St = /* @__PURE__ */ wt(0, .5, se), Ct = /* @__PURE__ */ wt(.5, .95, v);
function wt(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(w(e, t, r));
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function Tt(e, t, n) {
	let r = re(e) ? e : a(e);
	return r.start(ve("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var Et = (e, t) => e.depth - t.depth, Dt = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		oe(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		T(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(Et), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/delay.mjs
function Ot(t, n) {
	let r = e.now(), i = ({ timestamp: e }) => {
		let a = e - r;
		a >= n && (_(i), t(a - n));
	};
	return C.setup(i, !0), () => _(i);
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function B(e) {
	return re(e) ? e.get() : e;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var kt = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		oe(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (T(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (T(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, V = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, H = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, U = [
	"",
	"X",
	"Y",
	"Z"
], At = 1e3, jt = 0;
function W(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Mt(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = ne(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", C, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Mt(r);
}
function Nt({ attachResizeListener: t, defaultParent: r, measureScroll: i, checkIsScrollRoot: o, resetTransform: c }) {
	return class {
		constructor(e = {}, t = r?.()) {
			this.id = jt++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, y.value && (H.nodes = H.calculatedTargetDeltas = H.calculatedProjections = 0), this.nodes.forEach(It), this.nodes.forEach(Gt), this.nodes.forEach(Kt), this.nodes.forEach(Lt), y.addProjectionMetrics && y.addProjectionMetrics(H);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = t ? t.root || t : this, this.path = t ? [...t.path, t] : [], this.parent = t, this.depth = t ? t.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Dt());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new pe()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(e) {
			if (this.instance) return;
			this.isSVG = k(e) && !He(e), this.instance = e;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), t) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				C.read(() => {
					r = window.innerWidth;
				}), t(e, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Ot(i, 250), V.hasAnimatedSinceResize && (V.hasAnimatedSinceResize = !1, this.nodes.forEach(Wt)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || $t, { onLayoutAnimationStart: o, onLayoutAnimationComplete: c } = i.getProps(), l = !this.targetLayout || !ft(this.targetLayout, r), u = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || u || t && (l || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...s(a, "layout"),
						onPlay: o,
						onComplete: c
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, u);
				} else t || Wt(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), _(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(qt), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Mt(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Bt), this.nodes.forEach(zt);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Vt);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Ht), this.nodes.forEach(Ut), this.nodes.forEach(Pt), this.nodes.forEach(Ft)) : this.nodes.forEach(Vt), this.clearAllSnapshots();
			let t = e.now();
			b.delta = de(0, 1e3 / 60, t - b.timestamp), b.timestamp = t, b.isProcessing = !0, x.update.process(b), x.preRender.process(b), x.render.process(b), b.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, f.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Rt), this.sharedNodes.forEach(Jt);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, C.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			C.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !I(this.snapshot.measuredBox.x) && !I(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= l(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = o(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: i(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!c) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !ct(this.projectionDelta), r = this.getTransformTemplate(), i = r ? r(this.latestValues, "") : void 0, a = i !== this.prevTransformTemplateValue;
			e && this.instance && (t || n(this.latestValues) || a) && (c(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), rn(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return l();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(on))) {
				let { scroll: e } = this.root;
				e && (g(t.x, e.offset.x), g(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = l();
			if (F(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && F(t, e), g(t.x, i.offset.x), g(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, r) {
			let i = r || l();
			F(i, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				!t && r.options.layoutScroll && r.scroll && r !== r.root && (g(i.x, -r.scroll.offset.x), g(i.y, -r.scroll.offset.y)), n(r.latestValues) && E(i, r.latestValues, r.layout?.layoutBox);
			}
			return n(this.latestValues) && E(i, this.latestValues, this.layout?.layoutBox), i;
		}
		removeTransform(e) {
			let t = l();
			F(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				if (!n(r.latestValues)) continue;
				let i;
				r.instance && (p(r.latestValues) && r.updateSnapshot(), i = l(), F(i, r.measurePageBox())), ot(t, r.latestValues, r.snapshot?.layoutBox, i);
			}
			return n(this.latestValues) && ot(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== b.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = b.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = l(), this.targetWithTransforms = l()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), $e(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : F(this.target, this.layout.layoutBox), ue(this.target, this.targetDelta)) : F(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), y.value && H.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || p(this.parent.latestValues) || Ce(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = l(), this.relativeTargetOrigin = l(), R(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), F(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === b.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			F(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			ae(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = l());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ue(this.prevProjectionDelta.x, this.projectionDelta.x), Ue(this.prevProjectionDelta.y, this.projectionDelta.y)), L(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !mt(this.projectionDelta.x, this.prevProjectionDelta.x) || !mt(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), y.value && H.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = u(), this.projectionDelta = u(), this.projectionDeltaWithTransform = u();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = u();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = l(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), d = !c || c.members.length <= 1, f = !!(s && !d && this.options.crossfade === !0 && !this.path.some(Qt));
			this.animationProgress = 0;
			let p;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Yt(a.x, e.x, n), Yt(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (R(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Zt(this.relativeTarget, this.relativeTargetOrigin, o, n), p && ut(this.relativeTarget, p) && (this.isProjectionDirty = !1), p ||= l(), F(p, this.relativeTarget)), s && (this.animationValues = i, bt(i, r, this.latestValues, n, f, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (_(this.pendingAnimation), void 0), this.pendingAnimation = C.update(() => {
				V.hasAnimatedSinceResize = !0, d.layout++, this.motionValue ||= a(0), this.motionValue.jump(0, !1), this.currentAnimation = Tt(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						d.layout--;
					},
					onComplete: () => {
						d.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(At), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && an(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || l();
					let t = I(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = I(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				F(t, n), E(t, i), L(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new kt()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && W("z", e, r, this.animationValues);
			for (let t = 0; t < U.length; t++) W(`rotate${U[t]}`, e, r, this.animationValues), W(`skew${U[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let r = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = B(t?.pointerEvents) || "", e.transform = r ? r(this.latestValues, "") : "none";
				return;
			}
			let i = this.getLead();
			if (!this.projectionDelta || !this.layout || !i.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = B(t?.pointerEvents) || ""), this.hasProjected && !n(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let a = i.animationValues || i.latestValues;
			this.applyTransformsToTarget();
			let o = ht(this.projectionDeltaWithTransform, this.treeScale, a);
			r && (o = r(a, o)), e.transform = o;
			let { x: s, y: c } = this.projectionDelta;
			e.transformOrigin = `${s.origin * 100}% ${c.origin * 100}% 0`, i.animationValues ? e.opacity = i === this ? a.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : e.opacity = i === this ? a.opacity === void 0 ? "" : a.opacity : a.opacityExit === void 0 ? 0 : a.opacityExit;
			for (let t in ge) {
				if (a[t] === void 0) continue;
				let { correct: n, applyTo: r, isCSSVariable: s } = ge[t], c = o === "none" ? a[t] : n(a[t], i);
				if (r) {
					let t = r.length;
					for (let n = 0; n < t; n++) e[r[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = i === this ? B(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(zt), this.root.sharedNodes.clear();
		}
	};
}
function Pt(e) {
	e.updateLayout();
}
function Ft(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") z((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = I(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			P(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else an(i, t.layoutBox, n) && z((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = I(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = u();
		L(o, n, t.layoutBox);
		let s = u();
		a ? L(s, e.applyTransform(r, !0), t.measuredBox) : L(s, n, t.layoutBox);
		let c = !ct(o), d = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = l();
					R(s, t.layoutBox, i.layoutBox, o);
					let c = l();
					R(c, n, a.layoutBox, o), ft(s, c) || (d = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: d
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function It(e) {
	y.value && H.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Lt(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Rt(e) {
	e.clearSnapshot();
}
function zt(e) {
	e.clearMeasurements();
}
function Bt(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Vt(e) {
	e.isLayoutDirty = !1;
}
function Ht(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Ut(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Wt(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Gt(e) {
	e.resolveTargetDelta();
}
function Kt(e) {
	e.calcProjection();
}
function qt(e) {
	e.resetSkewAndRotation();
}
function Jt(e) {
	e.removeLeadSnapshot();
}
function Yt(e, t, n) {
	e.translate = h(t.translate, 0, n), e.scale = h(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Xt(e, t, n, r) {
	e.min = h(t.min, n.min, r), e.max = h(t.max, n.max, r);
}
function Zt(e, t, n, r) {
	Xt(e.x, t.x, n.x, r), Xt(e.y, t.y, n.y, r);
}
function Qt(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var $t = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, en = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), tn = en("applewebkit/") && !en("chrome/") ? Math.round : v;
function nn(e) {
	e.min = tn(e.min), e.max = tn(e.max);
}
function rn(e) {
	nn(e.x), nn(e.y);
}
function an(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Xe(pt(t), pt(n), .2);
}
function on(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var sn = Nt({
	attachResizeListener: (e, t) => S(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), G = { current: void 0 }, cn = Nt({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!G.current) {
			let e = new sn({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), G.current = e;
		}
		return G.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function ln(e = !0) {
	let t = O(Ae);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = De();
	Ee(() => {
		if (e) return i(a);
	}, [e]);
	let o = Te(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var un = D({});
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function K(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function q(e, t, n, r) {
	return S(e, t, he(n), r);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var dn = ({ current: e }) => e ? e.ownerDocument.defaultView : null, fn = (e, t) => Math.abs(e - t);
function pn(e, t) {
	let n = fn(e.x, t.x), r = fn(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var mn = /* @__PURE__ */ new Set(["auto", "scroll"]), hn = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: s } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = J(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = Y(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = pn(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = b;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = J(t, this.transformPagePoint), C.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = Y(e.type === "pointercancel" ? this.lastMoveEventInfo : J(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !o(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let c = J(ye(e), this.transformPagePoint), { point: l } = c, { timestamp: u } = b;
		this.history = [{
			...l,
			timestamp: u
		}];
		let { onSessionStart: d } = t;
		d && d(e, Y(c, this.history)), this.removeListeners = le(q(this.contextWindow, "pointermove", this.handlePointerMove), q(this.contextWindow, "pointerup", this.handlePointerUp), q(this.contextWindow, "pointercancel", this.handlePointerUp)), s && this.startScrollTracking(s);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(mn.has(e.overflowX) || mn.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), C.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), _(this.updatePoint);
	}
};
function J(e, t) {
	return t ? { point: t(e.point) } : e;
}
function gn(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Y({ point: e }, t) {
	return {
		point: e,
		delta: gn(e, vn(t)),
		offset: gn(e, _n(t)),
		velocity: yn(t, .1)
	};
}
function _n(e) {
	return e[0];
}
function vn(e) {
	return e[e.length - 1];
}
function yn(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = vn(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > ce(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > ce(t) * 2 && (r = e[1]);
	let a = be(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function bn(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? h(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? h(n, e, r.max) : Math.min(e, n)), e;
}
function xn(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Sn(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: xn(e.x, n, i),
		y: xn(e.y, t, r)
	};
}
function Cn(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function wn(e, t) {
	return {
		x: Cn(e.x, t.x),
		y: Cn(e.y, t.y)
	};
}
function Tn(e, t) {
	let n = .5, r = I(e), i = I(t);
	return i > r ? n = w(t.min, t.max - r, e.min) : r > i && (n = w(e.min, e.max - i, t.min)), de(0, 1, n);
}
function En(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var X = .35;
function Dn(e = X) {
	return e === !1 ? e = 0 : e === !0 && (e = X), {
		x: On(e, "left", "right"),
		y: On(e, "top", "bottom")
	};
}
function On(e, t, n) {
	return {
		min: kn(e, t),
		max: kn(e, n)
	};
}
function kn(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var An = /* @__PURE__ */ new WeakMap(), jn = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = l(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(ye(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = je(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), z((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (m.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = I(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && C.update(() => i(e, t), !1, !0), te(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = Pn(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && C.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new hn(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: dn(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && C.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !Z(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = bn(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && K(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = Sn(n.layoutBox, e) : this.constraints = !1, this.elastic = Dn(t), r !== this.constraints && !K(e) && n && this.constraints && !this.hasMutatedConstraints && z((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = En(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !K(e)) return !1;
		let n = e.current;
		me(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = fe(n, r.root, this.visualElement.getTransformPagePoint()), a = wn(r.layout.layoutBox, i);
		if (t) {
			let e = t(ee(a));
			this.hasMutatedConstraints = !!e, e && (a = Se(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = z((o) => {
			if (!Z(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return te(this.visualElement, e), n.start(ve(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		z((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		z((t) => {
			let { drag: n } = this.getProps();
			if (!Z(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - h(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!K(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		z((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Tn({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), z((t) => {
			if (!Z(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(h(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		An.set(this.visualElement, this);
		let e = this.visualElement.current, t = q(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), a = t.target, o = a !== e && i(a);
			n && r && !o && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			K(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Nn(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: a } = this.visualElement, o = a.addEventListener("measure", r);
		a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), C.read(r);
		let s = S(window, "resize", () => this.scalePositionWithinConstraints()), c = a.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (z((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			s(), t(), o(), c && c(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = X, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Mn(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function Nn(e, t, n) {
	let r = Ve(e, Mn(n)), i = Ve(t, Mn(n));
	return () => {
		r(), i();
	};
}
function Z(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Pn(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var Fn = class extends r {
	constructor(e) {
		super(e), this.removeGroupControls = v, this.removeListeners = v, this.controls = new jn(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || v;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, Q = (e) => (t, n) => {
	e && C.update(() => e(t, n), !1, !0);
}, In = class extends r {
	constructor() {
		super(...arguments), this.removePointerDownListener = v;
	}
	onPointerDown(e) {
		this.session = new hn(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: dn(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Q(e),
			onStart: Q(t),
			onMove: Q(n),
			onEnd: (e, t) => {
				delete this.session, r && C.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = q(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, $ = !1, Ln = class extends we {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), $ && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), V.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), $ = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || C.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), f.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		$ = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Rn(e) {
	let [t, n] = ln(), r = O(ke);
	return Oe(Ln, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: O(un),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region node_modules/.pnpm/framer-motion@12.38.0_@emotion+is-prop-valid@1.4.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var zn = {
	pan: { Feature: In },
	drag: {
		Feature: Fn,
		ProjectionNode: cn,
		MeasureLayout: Rn
	}
}, Bn = { layout: {
	ProjectionNode: cn,
	MeasureLayout: Rn
} };
//#endregion
export { ln as a, ke as c, un as i, zn as n, B as o, K as r, Ae as s, Bn as t };

//# sourceMappingURL=layout-C2rrIB6b.js.map