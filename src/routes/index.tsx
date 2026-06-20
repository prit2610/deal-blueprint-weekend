import { createFileRoute } from "@tanstack/react-router";
import skylineHero from "@/assets/skyline-hero.jpg";
import karanImg from "@/assets/karan.png";
import deveshImg from "@/assets/devesh.png";
import deepamImg from "@/assets/deepam.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "From Claude to Closed Deals — 2-Day Investment Banking Immersion" },
      {
        name: "description",
        content:
          "A 2-day Investment Banking immersion weekend in Mumbai. Learn AI-powered financial modelling, M&A and Private Equity, and a live deal simulation. Limited to 25 seats.",
      },
      { property: "og:title", content: "From Claude to Closed Deals — IB Immersion Weekend" },
      {
        property: "og:description",
        content:
          "Financial modelling with Claude, M&A & PE deep-dives, and a live M&A case simulation. 4th & 5th July 2026, Mumbai.",
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
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-display text-lg tracking-tight">
            Encoding Careers.&nbsp;
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#register"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Reserve Seat
          </a>
        </nav>
      </header>

      {/* Section 1 — Hero */}
      <section id="hero" className="relative flex min-h-screen items-center px-6 pt-20">
        <img
          src={skylineHero}
          alt="Financial district skyline at dusk"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="relative mx-auto w-full max-w-6xl py-24">
          <Eyebrow>A 2-Day Investment Banking Immersion Weekend</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            From Claude to Closed Deals.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn the Financial Modelling framework being used on live Investment Banking deals,
            understand how M&amp;A and Private Equity transactions actually work, and participate in
            a live M&amp;A deal simulation.
          </p>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {[
              ["Dates", "4th & 5th July 2026"],
              ["Timing", "4 PM – 8 PM"],
              ["Location", "Mumbai"],
              ["Seats", "Limited to 25"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-sm font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#register"
              className="rounded-sm bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reserve Your Seat
            </a>
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
          <div className="rounded-sm border border-border bg-card p-8">
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
        <Eyebrow>Day 1 — What You'll Experience</Eyebrow>
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
          <div className="rounded-sm border border-border bg-card p-8">
            <Eyebrow>Session Led By</Eyebrow>
            <p className="mt-4 font-display text-2xl">Karan Damania</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Managing Partner, Encoding Careers · Co-Founder, Encoding Careers
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
        <Eyebrow>Day 2 — Inside Investment Banking</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl">
          Learn Directly From Professionals Working In The Industry
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "How M&A Transactions Actually Work",
              name: "Deepam Gala",
              role: "Associate – Inga Ventures",
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
            <div key={s.title} className="rounded-sm border border-border bg-card p-8">
              <p className="font-display text-xl">{s.title}</p>
              <p className="mt-3 text-sm font-medium">{s.name}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
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
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Participants divided into teams",
              "Mock M&A transaction assigned",
              "Analyse the deal",
              "Evaluate key questions",
              "Prepare a Deal Summary",
              "Present recommendations",
            ].map((t) => (
              <li
                key={t}
                className="rounded-sm border border-border bg-card px-5 py-4 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Section 6 + 7 — Networking & Dinner */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-sm border border-border bg-card p-8">
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
          <div className="rounded-sm border border-border bg-card p-8">
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
            <ul className="mt-6 space-y-3">
              {[
                "Finance Students",
                "CFA Candidates",
                "CA Students",
                "MBA Students",
                "Aspiring Investment Bankers",
                "Early Career Finance Professionals",
              ].map((t) => (
                <li key={t} className="border-b border-border pb-3 text-sm">
                  {t}
                </li>
              ))}
            </ul>
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
            { name: "Karan Damania", role: "Managing Partner, Encoding Careers" },
            { name: "Deepam Gala", role: "Associate – Inga Ventures" },
            { name: "Devesh Bhardwaj", role: "Senior Analyst – Anand Rathi IB" },
          ].map((p) => (
            <div key={p.name} className="rounded-sm border border-border bg-card p-6">
              {/* Add a guest photo here. Drop the image in src/assets and use, e.g.:
                  import karan from "@/assets/karan.jpg";
                  <img src={karan} alt="Karan Damania" className="aspect-square w-full rounded-sm object-cover" /> */}
              <div className="flex aspect-square w-full items-center justify-center rounded-sm border border-dashed border-border bg-secondary text-xs text-muted-foreground">
                Photo
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
        <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">Two Days, Eight Hours Each</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {[
            {
              day: "Saturday, 4th July",
              items: [
                ["4:00 PM", "Financial Modelling Using Claude"],
                ["6:00 PM", "Hi Tea Break"],
                ["6:30 PM", "Live Model Demonstration & Q&A"],
                ["8:00 PM", "Close"],
              ],
            },
            {
              day: "Sunday, 5th July",
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
          Only 25 Seats Available
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { tier: "Early Bird Pricing", price: "[Price]", note: "Limited availability" },
            { tier: "Regular Pricing", price: "[Price]", note: "Standard registration" },
          ].map((p) => (
            <div key={p.tier} className="rounded-sm border border-border bg-card p-8">
              <p className="text-sm text-muted-foreground">{p.tier}</p>
              <p className="mt-3 font-display text-4xl">{p.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
            </div>
          ))}
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
          <a
            href="mailto:hello@eccapitalpartners.com?subject=Reserve%20Seat%20-%20IB%20Immersion%20Weekend"
            className="rounded-sm bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Reserve Your Seat Today
          </a>
        </div>
      </Section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display text-foreground">EC Capital Partners</span>
          <span>© 2026 · Investment Banking Immersion Weekend · Mumbai</span>
        </div>
      </footer>
    </div>
  );
}
