import { r as __toESM } from "../_runtime.mjs";
import { t as skyline_hero_default } from "./skyline-hero-DY7qzsrF.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Briefcase, i as Calculator, n as Landmark, o as ChartLine, r as GraduationCap, t as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CM-J4qpO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BASE = "https://app.encodingcareers.com";
async function apiFetch(path, options = {}) {
	const res = await fetch(`${BASE}${path}`, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...options.headers
		}
	});
	if (!res.ok) {
		let msg = `${res.status} ${res.statusText}`;
		try {
			const body = await res.json();
			msg = body.error || body.message || msg;
		} catch {}
		throw new Error(msg);
	}
	return res.json();
}
var leadApi = { register: (body) => apiFetch("/api/v1/leads/register", {
	method: "POST",
	body: JSON.stringify(body)
}) };
var karan_default = "/assets/karan-iO1MTfK4.png";
var devesh_default = "/assets/devesh-Bsqiw6WB.png";
var deepam_default = "/assets/deepam-CmYI_V4u.png";
var ec_logo_default = "/assets/ec_logo-DwkBZysJ.png";
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				obs.disconnect();
			}
		}, { threshold: .15 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return {
		ref,
		visible
	};
}
function Reveal({ children, className = "", delay = 0 }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`,
		children
	});
}
function ScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
			setProgress(Math.min(1, Math.max(0, scrolled)));
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-primary transition-[width] duration-150 ease-out",
			style: { width: `${progress * 100}%` }
		})
	});
}
function useScrollY() {
	const [y, setY] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setY(window.scrollY);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return y;
}
function useActiveSection(ids) {
	const [active, setActive] = (0, import_react.useState)(ids[0] ?? "");
	(0, import_react.useEffect)(() => {
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]) setActive(visible[0].target.id);
		}, {
			rootMargin: "-40% 0px -55% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, [ids.join(",")]);
	return active;
}
function useSpotlight() {
	(0, import_react.useEffect)(() => {
		const onMove = (e) => {
			const target = e.target?.closest(".spotlight-card");
			if (!target) return;
			const rect = target.getBoundingClientRect();
			target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
			target.style.setProperty("--my", `${e.clientY - rect.top}px`);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
}
function Steps({ items }) {
	const containerRef = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = containerRef.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				items.forEach((_, i) => {
					window.setTimeout(() => setShown((s) => Math.max(s, i + 1)), i * 320);
				});
				obs.disconnect();
			}
		}, { threshold: .25 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
		ref: containerRef,
		className: "relative space-y-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent",
			"aria-hidden": true
		}), items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: `step-item relative flex items-start gap-5 py-4 ${i < shown ? "is-visible" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-500 ${i < shown ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground"}`,
				children: i + 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pt-1.5 text-sm sm:text-base",
				children: t
			})]
		}, t))]
	});
}
function DayBadge({ day, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-stretch overflow-hidden rounded-md border border-primary/40 shadow-lg shadow-primary/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex items-center bg-primary px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground",
			children: day
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex items-center bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground",
			children: label
		})]
	});
}
var EDU_OPTIONS = [
	"Graduate",
	"Post Graduate",
	"MBA",
	"CA/CFA/ACCA/CMA",
	"Engineering",
	"Others"
];
var WORK_OPTIONS = [
	"Fresher",
	"Audit",
	"Research",
	"Consulting & Strategy",
	"Taxation",
	"Operations",
	"Corp Finance",
	"Credit",
	"Sales & BD"
];
function RegistrationModal({ open, onClose }) {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		transition: "",
		education: [],
		work: [],
		openOffline: "",
		openPaid: ""
	});
	const toggle = (key, value) => setForm((f) => ({
		...f,
		[key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value]
	}));
	if (!open) return null;
	const labelCls = "text-xs font-semibold uppercase tracking-widest text-[#e8d9ad]";
	const inputCls = "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-h-[90vh] w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-[rgba(214,178,99,0.4)] bg-card p-8 shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				"aria-label": "Close",
				className: "absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground",
				children: "✕"
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl gold-text",
						children: "You're on the list!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: [
							"Thank you, ",
							form.name || "there",
							". We'll reach out to you shortly with the next steps."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "mt-6 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90",
						children: "Done"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl gold-text",
				children: "Reserve Your Seat"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 space-y-5",
				onSubmit: async (e) => {
					e.preventDefault();
					setError("");
					setIsSubmitting(true);
					try {
						const notes = [
							form.openOffline && `Open to offline workshop (Andheri, Mumbai): ${form.openOffline}`,
							form.openPaid && `Open to ₹2999 ticket: ${form.openPaid}`,
							form.transition && `Transitioning to IB: ${form.transition}`,
							form.education.length > 0 && `Education: ${form.education.join(", ")}`,
							form.work.length > 0 && `Work experience: ${form.work.join(", ")}`
						].filter(Boolean).join("\n");
						await leadApi.register({
							name: form.name,
							phone: form.phone,
							email: form.email,
							source: "live event july",
							notes
						});
						setSubmitted(true);
					} catch (err) {
						setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
					} finally {
						setIsSubmitting(false);
					}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: form.name,
						onChange: (e) => setForm((f) => ({
							...f,
							name: e.target.value
						})),
						className: inputCls,
						placeholder: "Enter your full name"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						children: "Phone Number"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "tel",
						value: form.phone,
						onChange: (e) => setForm((f) => ({
							...f,
							phone: e.target.value
						})),
						className: inputCls,
						placeholder: "Enter your phone number"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "email",
						value: form.email,
						onChange: (e) => setForm((f) => ({
							...f,
							email: e.target.value
						})),
						className: inputCls,
						placeholder: "Enter your email"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						children: "Are you open to attending an offline workshop in Andheri, Mumbai?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						required: true,
						value: form.openOffline,
						onChange: (e) => setForm((f) => ({
							...f,
							openOffline: e.target.value
						})),
						className: inputCls,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select an option"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Yes",
								children: "Yes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "No",
								children: "No"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						children: "Are you open to the ticket price of ₹2999/-?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						required: true,
						value: form.openPaid,
						onChange: (e) => setForm((f) => ({
							...f,
							openPaid: e.target.value
						})),
						className: inputCls,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select an option"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Yes",
								children: "Yes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "No",
								children: "No"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						children: "Are you looking to transition into IB?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						required: true,
						value: form.transition,
						onChange: (e) => setForm((f) => ({
							...f,
							transition: e.target.value
						})),
						className: inputCls,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select an option"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Yes",
								children: "Yes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "No",
								children: "No"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Maybe",
								children: "Maybe / Exploring"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: labelCls,
						children: [
							"What is your educational qualification?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "normal-case text-muted-foreground",
								children: "(Select all that apply)"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: EDU_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2 text-sm text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form.education.includes(opt),
								onChange: () => toggle("education", opt),
								className: "h-4 w-4 accent-[#d4af37]"
							}), opt]
						}, opt))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: labelCls,
						children: [
							"Where have you worked previously?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "normal-case text-muted-foreground",
								children: "(Select all that apply)"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-2",
						children: WORK_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2 text-sm text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: form.work.includes(opt),
								onChange: () => toggle("work", opt),
								className: "h-4 w-4 accent-[#d4af37]"
							}), opt]
						}, opt))
					})] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-red-500",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: isSubmitting,
						className: "w-full rounded-md bg-gradient-to-r from-[#f7e7b0] via-[#d4af37] to-[#b8860b] px-7 py-3 text-sm font-semibold text-[#1a1407] shadow-lg shadow-[#d4af37]/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed",
						children: isSubmitting ? "Submitting…" : "Submit Registration"
					})
				]
			})] })]
		})
	});
}
var NAV = [
	{
		label: "Home",
		href: "#hero"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Schedule",
		href: "#schedule"
	},
	{
		label: "Speakers",
		href: "#speakers"
	},
	{
		label: "Pricing",
		href: "#pricing"
	},
	{
		label: "Register",
		href: "#register"
	}
];
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground",
		children
	});
}
function Section({ id, className = "", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `border-t border-border px-6 py-20 sm:py-28 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mx-auto w-full max-w-6xl",
			children
		})
	});
}
function Index() {
	const scrollY = useScrollY();
	const active = useActiveSection(NAV.map((n) => n.href.replace("#", "")));
	useSpotlight();
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationModal, {
				open: formOpen,
				onClose: () => setFormOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#hero",
							className: "flex items-center gap-2 font-display text-lg tracking-tight transition-opacity hover:opacity-70",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ec_logo_default,
								alt: "Encoding Careers",
								className: "h-10 w-auto"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "hidden items-center gap-7 md:flex",
							children: NAV.map((n) => {
								const isActive = active === n.href.replace("#", "");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: n.href,
									className: `relative text-sm transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${isActive ? "text-foreground after:w-full" : "text-muted-foreground after:w-0"}`,
									children: n.label
								}) }, n.href);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }),
							className: "rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20",
							children: "Reserve Seat"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "hero",
				className: "relative flex min-h-screen items-center overflow-hidden px-6 pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: skyline_hero_default,
						alt: "Financial district skyline at dusk",
						width: 1920,
						height: 1080,
						className: "absolute inset-0 h-[120%] w-full object-cover will-change-transform",
						style: { transform: `translateY(${scrollY * .3}px) scale(1.05)` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-6xl py-24",
						style: {
							transform: `translateY(${scrollY * -.08}px)`,
							opacity: Math.max(0, 1 - scrollY / 600)
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "A 2-Day Investment Banking Immersion Weekend" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
								children: "From AI to Closed Deals."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "Learn the Financial Modelling framework being used on live Investment Banking deals, understand how M&A and Private Equity transactions actually work, and participate in a live M&A deal simulation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4",
								children: [
									["Dates", "11th and 12th\xA0 June\xA0"],
									["Timing", "4 PM – 8 PM"],
									["Location", "Mumbai"],
									["Seats", "Very Limited Seats\xA0"]
								].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm font-medium",
									children: v
								})] }, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }),
									className: "rounded-sm bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20",
									children: "Reserve Your Seat"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#experience",
									className: "rounded-sm border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary",
									children: "View the Agenda"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "why",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why This Event Exists" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Most Finance Aspirants Are Learning the Wrong Way"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-12 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Most candidates spend months:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: [
									"Watching random YouTube videos",
									"Buying disconnected courses",
									"Learning financial modelling without understanding deals",
									"Networking without a strategy"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "—"
									}), t]
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-muted-foreground",
								children: "The result? A lot of effort. Very little clarity."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "This event is designed to bridge the gap between:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-5",
								children: [
									"Technical Skills",
									"Industry Knowledge",
									"Professional Networking"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl",
									children: t
								}, t))
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "experience",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayBadge, {
						day: "Day 1",
						label: "What You'll Experience"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Financial Modelling Using Claude"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm text-muted-foreground",
						children: "Learn the exact framework used to build financial models efficiently using AI."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-12 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4",
							children: [
								"6-Step Framework to Build Financial Models Across Industries",
								"Master Prompt to Build Research Guides for Any Listed Company",
								"Reference Financial Modelling Guide",
								"Model Quality Checks Across 8 Sectors",
								"Live Financial Model Demonstration"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 border-b border-border pb-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "✓"
								}), t]
							}, t))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Session Led By" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-2xl",
									children: "Karan Damania"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "Managing Partner EC Capitals · Co-Founder, Encoding Careers"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-sm leading-relaxed text-muted-foreground",
									children: "The framework taught in this session has already been adopted by finance professionals and used in live Investment Banking engagements."
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayBadge, {
					day: "Day 2",
					label: "Inside Investment Banking"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl",
					children: "Learn Directly From Professionals Working In The Industry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [{
						title: "How M&A Transactions Actually Work",
						name: "Deepam Gala",
						role: "Associate – Inga Ventures",
						img: deepam_default,
						topics: [
							"Deal Origination",
							"Pitching Process",
							"Buyer Identification",
							"Due Diligence",
							"Negotiation Process",
							"Deal Closure"
						],
						note: "Understand the complete M&A lifecycle from start to finish."
					}, {
						title: "How Private Equity Deals Work",
						name: "Devesh Bhardwaj",
						role: "Senior Analyst – Anand Rathi Investment Banking",
						img: devesh_default,
						topics: [
							"PE Investment Process",
							"Deal Sourcing",
							"Due Diligence",
							"Investment Evaluation",
							"Funding & Execution"
						],
						note: "Including a walkthrough of a real transaction."
					}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-6 flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.img,
									alt: s.name,
									className: "h-16 w-16 shrink-0 rounded-full border-2 border-primary/40 object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium",
										children: s.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: s.role
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 grid grid-cols-2 gap-x-4 gap-y-2",
								children: s.topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm text-muted-foreground",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-muted-foreground",
								children: s.note
							})
						]
					}, s.title))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Live M&A Case Simulation" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Think Like An Investment Banker"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "You won't just listen. You'll participate. Experience the type of thinking analysts use during live transactions."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
					"Participants divided into teams",
					"Mock M&A transaction assigned",
					"Analyse the deal",
					"Evaluate key questions",
					"Prepare a Deal Summary",
					"Present recommendations"
				] })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Session 3 — Career Strategy" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl",
							children: "Networking & Your Path Into Investment Banking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Hosted by Karan Damania"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2 text-sm text-muted-foreground",
							children: [
								"The 3-Step Framework To Break Into Investment Banking",
								"Building Relevant Skills",
								"Strategic Networking",
								"Creating Interview Opportunities"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", t] }, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Bonus — Networking Dinner" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl",
							children: "Continue The Conversation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "After Day 2, join us for a casual networking dinner with Investment Banking professionals, fellow participants, and event speakers. No presentations, no formal agenda — just meaningful conversations over good food."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "Dinner expenses to be borne individually by participants."
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Who Should Attend" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-4",
					children: [
						{
							label: "Finance Students",
							Icon: GraduationCap
						},
						{
							label: "CFA Candidates",
							Icon: ChartLine
						},
						{
							label: "CA Students",
							Icon: Calculator
						},
						{
							label: "MBA Students",
							Icon: Landmark
						},
						{
							label: "Aspiring Investment Bankers",
							Icon: Briefcase
						},
						{
							label: "Early Career Finance Professionals",
							Icon: TrendingUp
						}
					].map(({ label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "spotlight-card flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7e7b0]/20 via-[#d4af37]/15 to-[#b8860b]/10 ring-1 ring-[#d4af37]/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-6 w-6 text-[#d4af37]",
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium leading-snug",
							children: label
						})]
					}, label))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What You'll Walk Away With" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: [
						"A Financial Modelling Framework You Can Apply Immediately",
						"AI Prompts For Research & Modelling",
						"Understanding Of M&A Transactions",
						"Understanding Of Private Equity Deals",
						"Experience Solving A Live Deal Case",
						"New Industry Connections",
						"Clearer Roadmap Towards Investment Banking"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 border-b border-border pb-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "✓"
						}), t]
					}, t))
				})] })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "speakers",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Speakers" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Led by Practitioners From the Industry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-3",
						children: [
							{
								name: "Karan Damania",
								role: "Managing Partner, EC Capitals\xA0",
								img: karan_default
							},
							{
								name: "Deepam Gala",
								role: "Associate – Inga Ventures",
								img: deepam_default
							},
							{
								name: "Devesh Bhardwaj",
								role: "Senior Analyst – Anand Rathi IB",
								img: devesh_default
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group overflow-hidden spotlight-card rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.name,
										className: "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-xl",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: p.role
								})
							]
						}, p.name))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "schedule",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Event Schedule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-3xl font-medium tracking-tight sm:text-4xl",
						children: "Two Days, Eight Hours Each"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-10 md:grid-cols-2",
						children: [{
							day: "Saturday, 11th July",
							items: [
								["4:00 PM", "Financial Modelling Using Claude"],
								["6:00 PM", "Hi Tea Break"],
								["6:30 PM", "Live Model Demonstration & Q&A"],
								["8:00 PM", "Close"]
							]
						}, {
							day: "Sunday, 12th July",
							items: [
								["4:00 PM", "M&A Process in Investment Banking"],
								["5:00 PM", "Private Equity Deal Walkthrough"],
								["6:00 PM", "Hi Tea Break"],
								["6:30 PM", "M&A Case Simulation"],
								["7:30 PM", "Networking & Next Steps"],
								["8:00 PM", "Event Close"]
							]
						}].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: d.day
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5",
							children: d.items.map(([time, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[5rem_1fr] gap-4 border-b border-border py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: time
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
							}, time + label))
						})] }, d.day))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "pricing",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Pricing" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 text-3xl font-medium tracking-tight sm:text-4xl",
						children: [
							"Limited Seats available",
							"\xA0",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "golden-ticket mx-auto max-w-3xl rounded-2xl p-px",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ticket-notch -left-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ticket-notch -right-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-[1] rounded-2xl p-8 sm:p-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-b border-dashed border-[rgba(214,178,99,0.35)] pb-8 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]",
													children: "Admit One · VIP"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 font-display text-3xl gold-text sm:text-4xl",
													children: "The Golden Ticket"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 max-w-sm text-sm text-[#e8d9ad]/80",
													children: "A 2-day Investment Banking immersion. Financial modelling, M&A, Private Equity, a live deal simulation & an exclusive networking dinner."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-[#e8d9ad]/70",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "11th & 12th June · Mumbai" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Very Limited Seats" })]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "shrink-0 text-center sm:pl-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs uppercase tracking-[0.3em] text-[#e8d9ad]/70",
													children: "Investment"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 font-display text-3xl gold-text sm:text-4xl",
													children: "Be an Early Bird"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setFormOpen(true),
													className: "mt-6 inline-block rounded-md bg-gradient-to-r from-[#f7e7b0] via-[#d4af37] to-[#b8860b] px-7 py-3 text-sm font-semibold text-[#1a1407] shadow-lg shadow-[#d4af37]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d4af37]/40",
													children: "Claim Your Ticket"
												})
											]
										})]
									})
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "register",
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Finance Industry Is Evolving" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl",
						children: "The professionals who thrive will understand AI, Modelling, IB, PE & Networking."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-sm text-muted-foreground",
						children: "This weekend is designed to help you build all five."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }),
							className: "rounded-sm bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20",
							children: "Reserve Your Seat Today"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border px-6 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex items-center gap-2 font-display text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ec_logo_default,
							alt: "Encoding Careers",
							className: "h-8 w-auto"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 · Investment Banking Immersion Weekend · Mumbai" })]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
