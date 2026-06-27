import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { leadApi } from "@/lib/api";
import skylineHero from "@/assets/skyline-hero.jpg";
import karanImg from "@/assets/karan.png";
import deveshImg from "@/assets/devesh.png";
import deepamImg from "@/assets/deepam.png";
import ecLogoAsset from "@/assets/ec_logo.png";
import {
  GraduationCap,
  LineChart,
  Calculator,
  Landmark,
  Briefcase,
  TrendingUp,
} from "lucide-react";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Thin progress bar tracking page scroll
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

// Track scroll position for parallax
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

// Track which section is currently in view for nav highlighting
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join(",")]);
  return active;
}

// Mouse-follow spotlight glow on any element with the `spotlight-card` class
function useSpotlight() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(".spotlight-card");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      target.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
}

// Sequentially reveal a list of steps one after another when scrolled into view
function Steps({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLOListElement>(null);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, i) => {
            window.setTimeout(() => setShown((s) => Math.max(s, i + 1)), i * 320);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [items.length]);
  return (
    <ol ref={containerRef} className="relative space-y-0">
      <span
        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent"
        aria-hidden
      />
      {items.map((t, i) => (
        <li
          key={t}
          className={`step-item relative flex items-start gap-5 py-4 ${
            i < shown ? "is-visible" : ""
          }`}
        >
          <span
            className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-500 ${
              i < shown
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground"
            }`}
          >
            {i + 1}
          </span>
          <span className="pt-1.5 text-sm sm:text-base">{t}</span>
        </li>
      ))}
    </ol>
  );
}

// Clearly compartmentalised Day heading badge
function DayBadge({ day, label }: { day: string; label: string }) {
  return (
    <div className="inline-flex items-stretch overflow-hidden rounded-md border border-primary/40 shadow-lg shadow-primary/5">
      <span className="flex items-center bg-primary px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground">
        {day}
      </span>
      <span className="flex items-center bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

// Registration form modal with disclaimer
const EDU_OPTIONS = [
  "Graduate",
  "Post Graduate",
  "MBA",
  "CA/CFA/ACCA/CMA",
  "Engineering",
  "Others",
];
const WORK_OPTIONS = [
  "Fresher",
  "Audit",
  "Research",
  "Consulting & Strategy",
  "Taxation",
  "Operations",
  "Corp Finance",
  "Credit",
  "Sales & BD",
];

function RegistrationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    transition: "",
    education: [] as string[],
    work: [] as string[],
    openOffline: "",
    openPaid: "",
  });

  const toggle = (key: "education" | "work", value: string) =>
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }));

  if (!open) return null;

  const labelCls = "text-xs font-semibold uppercase tracking-widest text-[#e8d9ad]";
  const inputCls =
    "mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-[rgba(214,178,99,0.4)] bg-card p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <p className="font-display text-2xl gold-text">You're on the list!</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Thank you, {form.name || "there"}. We'll reach out to you shortly with the next steps.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="font-display text-2xl gold-text">Reserve Your Seat</p>
            <form
              className="mt-6 space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();
                setError("");
                setIsSubmitting(true);
                try {
                  const notes = [
                    form.openOffline &&
                      `Open to offline workshop (Andheri, Mumbai): ${form.openOffline}`,
                    form.openPaid && `Open to ₹2999 ticket: ${form.openPaid}`,
                    form.transition && `Transitioning to IB: ${form.transition}`,
                    form.education.length > 0 && `Education: ${form.education.join(", ")}`,
                    form.work.length > 0 && `Work experience: ${form.work.join(", ")}`,
                  ]
                    .filter(Boolean)
                    .join("\n");

                  await leadApi.register({
                    name: form.name,
                    phone: form.phone,
                    email: form.email,
                    source: "live event july",
                    notes,
                  });
                  setSubmitted(true);
                } catch (err) {
                  setError(
                    err instanceof Error ? err.message : "Something went wrong. Please try again.",
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <div>
                <label className={labelCls}>Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputCls}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className={labelCls}>Phone Number</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputCls}
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputCls}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className={labelCls}>
                  Are you open to attending an offline workshop in Andheri, Mumbai?
                </label>
                <select
                  required
                  value={form.openOffline}
                  onChange={(e) => setForm((f) => ({ ...f, openOffline: e.target.value }))}
                  className={inputCls}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Are you open to the ticket price of ₹2999/-?</label>
                <select
                  required
                  value={form.openPaid}
                  onChange={(e) => setForm((f) => ({ ...f, openPaid: e.target.value }))}
                  className={inputCls}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Are you looking to transition into IB?</label>
                <select
                  required
                  value={form.transition}
                  onChange={(e) => setForm((f) => ({ ...f, transition: e.target.value }))}
                  className={inputCls}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe / Exploring</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>
                  What is your educational qualification?{" "}
                  <span className="normal-case text-muted-foreground">(Select all that apply)</span>
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {EDU_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={form.education.includes(opt)}
                        onChange={() => toggle("education", opt)}
                        className="h-4 w-4 accent-[#d4af37]"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelCls}>
                  Where have you worked previously?{" "}
                  <span className="normal-case text-muted-foreground">(Select all that apply)</span>
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {WORK_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={form.work.includes(opt)}
                        onChange={() => toggle("work", opt)}
                        className="h-4 w-4 accent-[#d4af37]"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-gradient-to-r from-[#f7e7b0] via-[#d4af37] to-[#b8860b] px-7 py-3 text-sm font-semibold text-[#1a1407] shadow-lg shadow-[#d4af37]/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting…" : "Submit Registration"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "2-Day Investment Banking Immersion - From AI to Closed Deals" },
      {
        name: "description",
        content:
          "A 2-day Investment Banking immersion weekend in Mumbai. Learn AI-powered financial modelling, M&A and Private Equity, and a live deal simulation. Limited seats available.",
      },
      { property: "og:title", content: "From Claude to Closed Deals — IB Immersion Weekend" },
      {
        property: "og:description",
        content:
          "Financial modelling with Claude, M&A & PE deep-dives, and a live M&A case simulation. 11th and 12th\u00a0 June\u00a0, Mumbai.",
      },
      { property: "og:image", content: skylineHero },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Schedule", href: "#schedule" },
  { label: "Speakers", href: "#speakers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Register", href: "#register" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
      {children}
    </span>
  );
}

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`border-t border-border px-6 py-20 sm:py-28 ${className}`}>
      <Reveal className="mx-auto w-full max-w-6xl">{children}</Reveal>
    </section>
  );
}

function Index() {
  const scrollY = useScrollY();
  const active = useActiveSection(NAV.map((n) => n.href.replace("#", "")));
  useSpotlight();
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <RegistrationModal open={formOpen} onClose={() => setFormOpen(false)} />
      <ScrollProgress />
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="flex items-center gap-2 font-display text-lg tracking-tight transition-opacity hover:opacity-70"
          >
            <img src={ecLogoAsset} alt="Encoding Careers" className="h-10 w-auto" />
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => {
              const isActive = active === n.href.replace("#", "");
              return (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className={`relative text-sm transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                      isActive ? "text-foreground after:w-full" : "text-muted-foreground after:w-0"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
          >
            Reserve Seat
          </button>
        </nav>
      </header>

      {/* Section 1 — Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
      >
        <img
          src={skylineHero}
          alt="Financial district skyline at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.05)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div
          className="relative mx-auto w-full max-w-6xl py-24"
          style={{
            transform: `translateY(${scrollY * -0.08}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        >
          <Eyebrow>A 2-Day Investment Banking Immersion Weekend</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            From AI to Closed Deals.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn the Financial Modelling framework being used on live Investment Banking deals,
            understand how M&amp;A and Private Equity transactions actually work, and participate in
            a live M&amp;A deal simulation.
          </p>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {[
              ["Dates", "11th and 12th\u00a0 June\u00a0"],
              ["Timing", "4 PM – 8 PM"],
              ["Location", "Mumbai"],
              ["Seats", "Very Limited Seats\u00a0"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() =>
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-sm bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              Reserve Your Seat
            </button>
            <a
              href="#experience"
              className="rounded-sm border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View the Agenda
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 — Why This Event Exists */}
      <Section id="why">
        <Eyebrow>Why This Event Exists</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
          Most Finance Aspirants Are Learning the Wrong Way
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Most candidates spend months:</p>
            <ul className="mt-4 space-y-3">
              {[
                "Watching random YouTube videos",
                "Buying disconnected courses",
                "Learning financial modelling without understanding deals",
                "Networking without a strategy",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <span className="text-muted-foreground">—</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              The result? A lot of effort. Very little clarity.
            </p>
          </div>
          <div className="spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <p className="text-sm text-muted-foreground">
              This event is designed to bridge the gap between:
            </p>
            <div className="mt-6 space-y-5">
              {["Technical Skills", "Industry Knowledge", "Professional Networking"].map((t) => (
                <p key={t} className="font-display text-2xl">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3 — Day 1 */}
      <Section id="experience">
        <DayBadge day="Day 1" label="What You'll Experience" />
        <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
          Financial Modelling Using Claude
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Learn the exact framework used to build financial models efficiently using AI.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <ul className="space-y-4">
            {[
              "6-Step Framework to Build Financial Models Across Industries",
              "Master Prompt to Build Research Guides for Any Listed Company",
              "Reference Financial Modelling Guide",
              "Model Quality Checks Across 8 Sectors",
              "Live Financial Model Demonstration",
            ].map((t) => (
              <li key={t} className="flex gap-3 border-b border-border pb-4 text-sm">
                <span className="text-muted-foreground">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <Eyebrow>Session Led By</Eyebrow>
            <p className="mt-4 font-display text-2xl">Karan Damania</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Managing Partner EC Capitals · Co-Founder, Encoding Careers
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              The framework taught in this session has already been adopted by finance professionals
              and used in live Investment Banking engagements.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4 — Day 2 */}
      <Section>
        <DayBadge day="Day 2" label="Inside Investment Banking" />
        <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
          Learn Directly From Professionals Working In The Industry
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "How M&A Transactions Actually Work",
              name: "Deepam Gala",
              role: "Associate – Inga Ventures",
              img: deepamImg,
              topics: [
                "Deal Origination",
                "Pitching Process",
                "Buyer Identification",
                "Due Diligence",
                "Negotiation Process",
                "Deal Closure",
              ],
              note: "Understand the complete M&A lifecycle from start to finish.",
            },
            {
              title: "How Private Equity Deals Work",
              name: "Devesh Bhardwaj",
              role: "Senior Analyst – Anand Rathi Investment Banking",
              img: deveshImg,
              topics: [
                "PE Investment Process",
                "Deal Sourcing",
                "Due Diligence",
                "Investment Evaluation",
                "Funding & Execution",
              ],
              note: "Including a walkthrough of a real transaction.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-16 w-16 shrink-0 rounded-full border-2 border-primary/40 object-cover"
                />
                <div>
                  <p className="font-display text-xl">{s.title}</p>
                  <p className="mt-1 text-sm font-medium">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.role}</p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                {s.topics.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 5 — Live M&A Simulation */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Live M&amp;A Case Simulation</Eyebrow>
            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Think Like An Investment Banker
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              You won't just listen. You'll participate. Experience the type of thinking analysts
              use during live transactions.
            </p>
          </div>
          <Steps
            items={[
              "Participants divided into teams",
              "Mock M&A transaction assigned",
              "Analyse the deal",
              "Evaluate key questions",
              "Prepare a Deal Summary",
              "Present recommendations",
            ]}
          />
        </div>
      </Section>

      {/* Section 6 + 7 — Networking & Dinner */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <Eyebrow>Session 3 — Career Strategy</Eyebrow>
            <h3 className="mt-4 font-display text-2xl">
              Networking & Your Path Into Investment Banking
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Hosted by Karan Damania</p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {[
                "The 3-Step Framework To Break Into Investment Banking",
                "Building Relevant Skills",
                "Strategic Networking",
                "Creating Interview Opportunities",
              ].map((t) => (
                <li key={t}>— {t}</li>
              ))}
            </ul>
          </div>
          <div className="spotlight-card rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <Eyebrow>Bonus — Networking Dinner</Eyebrow>
            <h3 className="mt-4 font-display text-2xl">Continue The Conversation</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              After Day 2, join us for a casual networking dinner with Investment Banking
              professionals, fellow participants, and event speakers. No presentations, no formal
              agenda — just meaningful conversations over good food.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Dinner expenses to be borne individually by participants.
            </p>
          </div>
        </div>
      </Section>

      {/* Section 8 + 9 — Who Should Attend / Walk Away */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Who Should Attend</Eyebrow>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Finance Students", Icon: GraduationCap },
                { label: "CFA Candidates", Icon: LineChart },
                { label: "CA Students", Icon: Calculator },
                { label: "MBA Students", Icon: Landmark },
                { label: "Aspiring Investment Bankers", Icon: Briefcase },
                { label: "Early Career Finance Professionals", Icon: TrendingUp },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="spotlight-card flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f7e7b0]/20 via-[#d4af37]/15 to-[#b8860b]/10 ring-1 ring-[#d4af37]/30">
                    <Icon className="h-6 w-6 text-[#d4af37]" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm font-medium leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>What You'll Walk Away With</Eyebrow>
            <ul className="mt-6 space-y-3">
              {[
                "A Financial Modelling Framework You Can Apply Immediately",
                "AI Prompts For Research & Modelling",
                "Understanding Of M&A Transactions",
                "Understanding Of Private Equity Deals",
                "Experience Solving A Live Deal Case",
                "New Industry Connections",
                "Clearer Roadmap Towards Investment Banking",
              ].map((t) => (
                <li key={t} className="flex gap-3 border-b border-border pb-3 text-sm">
                  <span className="text-muted-foreground">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Speakers — photo placeholders */}
      <Section id="speakers">
        <Eyebrow>Speakers</Eyebrow>
        <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
          Led by Practitioners From the Industry
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { name: "Karan Damania", role: "Managing Partner, EC Capitals\u00a0", img: karanImg },
            { name: "Deepam Gala", role: "Associate – Inga Ventures", img: deepamImg },
            { name: "Devesh Bhardwaj", role: "Senior Analyst – Anand Rathi IB", img: deveshImg },
          ].map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden spotlight-card rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={p.img}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-display text-xl">{p.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 10 — Schedule */}
      <Section id="schedule">
        <Eyebrow>Event Schedule</Eyebrow>
        <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
          Two Days, Eight Hours Each
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            {
              day: "Saturday, 11th July",
              items: [
                ["4:00 PM", "Financial Modelling Using Claude"],
                ["6:00 PM", "Hi Tea Break"],
                ["6:30 PM", "Live Model Demonstration & Q&A"],
                ["8:00 PM", "Close"],
              ],
            },
            {
              day: "Sunday, 12th July",
              items: [
                ["4:00 PM", "M&A Process in Investment Banking"],
                ["5:00 PM", "Private Equity Deal Walkthrough"],
                ["6:00 PM", "Hi Tea Break"],
                ["6:30 PM", "M&A Case Simulation"],
                ["7:30 PM", "Networking & Next Steps"],
                ["8:00 PM", "Event Close"],
              ],
            },
          ].map((d) => (
            <div key={d.day}>
              <h3 className="font-display text-xl">{d.day}</h3>
              <ul className="mt-5">
                {d.items.map(([time, label]) => (
                  <li
                    key={time + label}
                    className="grid grid-cols-[5rem_1fr] gap-4 border-b border-border py-3 text-sm"
                  >
                    <span className="text-muted-foreground">{time}</span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 11 — Pricing */}
      <Section id="pricing">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
          Limited Seats available{"\u00a0"}
          <br />
          <br />
        </h2>
        <div className="mt-12">
          <div className="golden-ticket mx-auto max-w-3xl rounded-2xl p-px">
            <span className="ticket-notch -left-3.5" />
            <span className="ticket-notch -right-3.5" />
            <div className="relative z-[1] rounded-2xl p-8 sm:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="border-b border-dashed border-[rgba(214,178,99,0.35)] pb-8 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
                    Admit One · VIP
                  </p>
                  <p className="mt-4 font-display text-3xl gold-text sm:text-4xl">
                    The Golden Ticket
                  </p>
                  <p className="mt-3 max-w-sm text-sm text-[#e8d9ad]/80">
                    A 2-day Investment Banking immersion. Financial modelling, M&amp;A, Private
                    Equity, a live deal simulation &amp; an exclusive networking dinner.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-[#e8d9ad]/70">
                    <span>11th &amp; 12th June · Mumbai</span>
                    <span>Very Limited Seats</span>
                  </div>
                </div>
                <div className="shrink-0 text-center sm:pl-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#e8d9ad]/70">Investment</p>
                  <p className="mt-2 font-display text-3xl gold-text sm:text-4xl">
                    Be an Early Bird
                  </p>
                  <button
                    onClick={() => setFormOpen(true)}
                    className="mt-6 inline-block rounded-md bg-gradient-to-r from-[#f7e7b0] via-[#d4af37] to-[#b8860b] px-7 py-3 text-sm font-semibold text-[#1a1407] shadow-lg shadow-[#d4af37]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#d4af37]/40"
                  >
                    Claim Your Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 12 — Final CTA */}
      <Section id="register" className="text-center">
        <Eyebrow>The Finance Industry Is Evolving</Eyebrow>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          The professionals who thrive will understand AI, Modelling, IB, PE & Networking.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
          This weekend is designed to help you build all five.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-sm bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
          >
            Reserve Your Seat Today
          </button>
        </div>
      </Section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <span className="flex items-center gap-2 font-display text-foreground">
            <img src={ecLogoAsset} alt="Encoding Careers" className="h-8 w-auto" />
          </span>
          <span>© 2026 · Investment Banking Immersion Weekend · Mumbai</span>
        </div>
      </footer>
    </div>
  );
}
