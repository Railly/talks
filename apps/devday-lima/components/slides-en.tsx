"use client";

import { Card, EASE, Eyebrow, Foot, Mark, R, type Slide, tone, Words } from "@talks/deck";
import { motion } from "motion/react";
import { CORNER, COVER, Faces } from "./faces";
import { Duo, Full, Side } from "./media";

function Stat({ i, value, label }: { i: number; value: string; label: string }) {
  return (
    <R i={i} className="stat">
      <b>{value}</b>
      <span>{label}</span>
    </R>
  );
}

function Host({ name, eb, stats, site, img, n }: { name: string; eb: string; stats: [string, string][]; site: string; img: string; n: string }) {
  return (
    <>
      <Eyebrow>{eb}</Eyebrow>
      <div className="body" style={{ maxWidth: 900 }}>
        <h2><Words text={name} /></h2>
        <div className="stats">
          {stats.map(([v, l], k) => <Stat key={v} i={3 + k} value={v} label={l} />)}
        </div>
      </div>
      <Foot left={site} right={n} />
      <motion.div className="portrait" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}>
        <div className="blob" />
        {/* biome-ignore lint/performance/noImgElement: static cutout */}
        <img src={img} alt={name} />
      </motion.div>
    </>
  );
}

function Section({ k, title, sub, n }: { k: string; title: string; sub: string; n: string }) {
  return (
    <>
      <Eyebrow>{k}</Eyebrow>
      <div className="body">
        <h1><Words text={title} /></h1>
        <R i={5} as="p" className="lead">{sub}</R>
      </div>
      <Foot left="DevDay Exchange Community: Lima" right={n} />
      <Faces faces={CORNER} delay={0.4} />
    </>
  );
}

const all: Slide[] = [
  {
    id: "portada",
    notes: "Welcome. Tonight: a recap of what OpenAI shipped at DevDay 2026, then we build with Codex. Thanks to FISI for hosting.",
    render: () => (
      <>
        <Faces faces={COVER} />
        <Eyebrow>OpenAI · DevDay Exchange Community Event</Eyebrow>
        <div className="body" style={{ maxWidth: 760 }}>
          <h1><Words text="DevDay Exchange: Lima." /></h1>
          <R i={4} as="p" className="lead">A DevDay 2026 recap and a Codex build session.</R>
        </div>
        <Foot left="October 21, 2026 · FISI, UNMSM, Lima" />
      </>
    ),
  },
  {
    id: "agenda",
    notes: "Tonight's agenda. Adjust times on the day based on the actual start.",
    render: (n) => (
      <>
        <Eyebrow>Tonight</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>First, what changed. Then we use it.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} num="01" title="Recap" text="The DevDay 2026 launches that matter most to builders." />
            <Card i={3} tone={tone.green} num="02" title="Demo" text="Codex live, from idea to deploy." />
            <Card i={4} tone={tone.lilac} num="03" title="Build" text="Your laptop, your idea, Codex." />
            <Card i={5} tone={tone.sand} num="04" title="Demos" text="Two minutes each to show what you built." />
          </div>
        </div>
        <Foot left="6:00 to 9:00 PM, Lima time (GMT-5)" right={n} />
      </>
    ),
  },
  {
    id: "host",
    notes: "Short intro. Codex Ambassador for Peru, I work at Vercel Labs, founder of Crafter Station.",
    render: (n) => (
      <>
        <Eyebrow>Your host</Eyebrow>
        <div className="body" style={{ maxWidth: 900 }}>
          <h2><Words text="Railly Hugo." /></h2>
          <div className="stats">
            <Stat i={3} value="Codex" label="Ambassador, Peru" />
            <Stat i={4} value="Vercel" label="Software Engineer, Vercel Labs" />
            <Stat i={5} value="Crafter" label="Founder, Crafter Station" />
          </div>
        </div>
        <Foot left="railly.dev" right={n} />
        <motion.div className="portrait" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}>
          <div className="blob" />
          {/* biome-ignore lint/performance/noImgElement: static cutout */}
          <img src="/shared/railly.webp" alt="Railly Hugo" />
        </motion.div>
      </>
    ),
  },
  {
    id: "s-recap",
    dark: true,
    notes: "In the keynote Sam mentioned about twenty launches. We won't cover all of them, only the ones that change how we build.",
    render: (n) => <Section k="Always-on agents" title="About 20 launches in one day." sub="Starting with the one that opened the keynote: Dots." n={n} />,
  },
  {
    id: "sol",
    notes: "GPT-6.1 Sol: close to Astra-level intelligence at a fifth of the price. Cached input is 95% off, so agents that reuse context get much cheaper. Meant as the everyday model.",
    render: (n) => (
      <>
        <Eyebrow>Models</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>GPT-6.1 Sol: your <Mark delay={0.9}>everyday model</Mark>.</R>
          <div className="stats">
            <Stat i={3} value="≈ Astra" label="near the same intelligence" />
            <Stat i={4} value="1/5" label="of Astra's price" />
            <Stat i={5} value="−95%" label="on cached input vs. standard" />
          </div>
        </div>
        <Foot left="Source: DevDay 2026 keynote" right={n} />
      </>
    ),
  },
  {
    id: "ultrafast",
    dark: true,
    notes: "Ultrafast: up to 8x faster token generation in Codex and up to 6x in the API, about 300 tokens per second. Useful when iteration speed matters most. In Work and Codex it ships on Pro 500 and eligible Enterprise/Edu. Available with Astra now, Sol Ultrafast coming soon.",
    render: (n) => (
      <>
        <Eyebrow>Speed</Eyebrow>
        <div className="body">
          <div className="display huge"><Words text="300 tokens" /><br /><span className="hl"><Words text="per second." i={2} /></span></div>
          <div className="cards">
            <Card i={5} title="Codex" text="Up to 8x faster token generation." />
            <Card i={6} title="API" text="Up to 6x faster token generation." />
            <Card i={7} title="Access" text="Pro 500 and eligible Enterprise/Edu in Work and Codex." />
          </div>
        </div>
        <Foot left="Astra today, GPT-6.1 Sol Ultrafast coming soon" right={n} />
      </>
    ),
  },
  {
    id: "decisions",
    notes: "Decisions API (preview), running on GPT-6 Luna. You give it text or an image, the question and the possible answers, and it responds in a fraction of a second. In the demo, under 100 ms server-side. Use cases: routing tickets, classifying leads, choosing an agent's next action, steering a car in a game, picking a character's expression with GPT Live.",
    render: (n) => (
      <>
        <Eyebrow>APIs · Preview</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Decisions API: choose in <Mark delay={0.9}>under 100 ms</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 3 }}>
            <Card i={2} tone={tone.blue} num="Input" title="Text or image" text="Plus the question and the possible answers." />
            <Card i={3} tone={tone.green} num="Model" title="GPT-6 Luna" text="Focused on choosing, nearly 10x faster." />
            <Card i={4} tone={tone.sand} num="Use cases" title="Route and classify" text="Tickets, leads, images or an agent's next action." />
          </div>
        </div>
        <Foot left="For complex computer use, Astra is still the pick" right={n} />
      </>
    ),
  },
  {
    id: "agents-api",
    notes: "Agents API in public beta: the hosted Codex harness. OpenAI handles orchestration, sessions and context. You connect tools through MCP, give instructions with skills, and choose the sandbox (OpenAI's, a third party's, or your own). Programmatic tool calling filters logs in code to spend fewer tokens. Multi-agent, compaction and computer use. Also on AWS through Bedrock Managed Agents.",
    render: (n) => (
      <>
        <Eyebrow>APIs · Public beta</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Agents API: the Codex harness, for your app.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} title="Tools" text="MCPs and skills, like in Codex." />
            <Card i={3} tone={tone.green} title="Sandbox" text="OpenAI's, a third party's or your own." />
            <Card i={4} tone={tone.lilac} title="Long context" text="Compaction and programmatic tool calling." />
            <Card i={5} tone={tone.sand} title="Multi-agent" text="Subagents and computer use." />
          </div>
        </div>
        <Foot left="Also on AWS: Bedrock Managed Agents powered by OpenAI" right={n} />
      </>
    ),
  },
  {
    id: "s-codex",
    dark: true,
    notes: "Now the part that matters most tonight: Codex.",
    render: (n) => <Section k="Codex" title="Codex left the laptop." sub="Cloud, a new CLI, code review and security." n={n} />,
  },
  {
    id: "cloud",
    notes: "Codex Cloud: start a task on your phone and pick it up in the browser or on desktop. No more leaving your laptop open. When you create an environment you pick repos and Codex sets it up: detects dependencies and writes a startup script and a startup skill. File system snapshots for faster starts. Private resources through Tailscale or OIDC. Ask the room: who bought a Mac Mini or a VPS just to keep agents running?",
    render: (n) => (
      <>
        <Eyebrow>Codex Cloud</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Close the laptop. The agent <Mark delay={0.9}>keeps working</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} title="Anywhere" text="Start on your phone, continue on desktop." />
            <Card i={3} tone={tone.green} title="Automatic setup" text="Detects dependencies and writes its startup skill." />
            <Card i={4} tone={tone.lilac} title="Fast startup" text="File system snapshots and background updates." />
            <Card i={5} tone={tone.sand} title="Private resources" text="Tailscale and OIDC, without exposing them to the internet." />
          </div>
        </div>
        <Foot left="Who bought a Mac Mini just to keep agents running?" right={n} />
      </>
    ),
  },
  {
    id: "cli",
    dark: true,
    notes: "The Codex CLI got a refresh. Full-screen interface. Two-way voice mode with GPT Live: dictate three tasks and they run in parallel. Agents view to filter, group and jump into each task. Fork a conversation into a new worktree. Remote control from your phone. Usage analytics, plus Mermaid and LaTeX rendered in the terminal.",
    render: (n) => (
      <>
        <Eyebrow>Codex CLI</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>For those who live in the terminal.</R>
          <div className="cards" style={{ ["--n" as string]: 3 }}>
            <Card i={2} title="Voice in the terminal" text="Dictate three tasks and they run in parallel." />
            <Card i={3} title="Agents view" text="Filter, group and jump into any task." />
            <Card i={4} title="Fork a worktree" text="Same context, separate checkout." />
            <Card i={5} title="From your phone" text="Remote control for your local session." />
            <Card i={6} title="Analytics" text="Your top chats, plugins and skills." />
            <Card i={7} title="Mermaid and LaTeX" text="Rendered right in the terminal." />
          </div>
        </div>
        <Foot left="Source: Meet the New Codex CLI" right={n} />
      </>
    ),
  },
  {
    id: "review-security",
    notes: "Code review as the new bottleneck: Codex brings a GitHub PR inbox, the first review runs automatically and each PR has a private chat with your skills and guidelines. Codex Security Cloud: continuous scanning, deduplication, scheduled scans and verified fixes to review.",
    render: (n) => (
      <>
        <Eyebrow>Review and security</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>If agents write more code, someone has to <Mark delay={1}>review it</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 2 }}>
            <Card i={2} tone={tone.blue} title="Code review in Codex" text="PR inbox, automatic first review and a private chat per PR with your guidelines." />
            <Card i={3} tone={tone.green} title="Codex Security Cloud" text="Continuous and scheduled scans, deduplication and verified fixes to review." />
          </div>
        </div>
        <Foot left="Code review is no longer the bottleneck · Keynote" right={n} />
      </>
    ),
  },
  {
    id: "s-dots",
    dark: true,
    notes: "Third block: always-on agents that work with your team.",
    render: (n) => <Section k="03 / Always-on agents" title="From assistant to teammate." sub="Dots, Space and ChatGPT in Slack and Teams." n={n} />,
  },
  {
    id: "dots",
    notes: "Dots: always-on agents powered by Astra. You don't give them a task, you give them a responsibility: watch bug reports, test fixes and open PRs. A real OpenAI example: someone drops a session ID and a bug in a feedback channel, Gabe's dot investigates it and opens a PR. Their engineers fix dozens of bugs a day this way. Available on Pro, Business Premium and Enterprise; conversations with your dot don't count against your usage.",
    render: (n) => (
      <>
        <Eyebrow>Dots</Eyebrow>
        <div className="body" style={{ maxWidth: 1100 }}>
          <R as="h2" i={1}>You don't give it a task. You give it a <Mark delay={0.9}>responsibility</Mark>.</R>
          <R i={3} as="p" className="lead">«Watch bug reports, test fixes and open PRs.» At OpenAI, dots already fix <strong>dozens of bugs a day</strong>.</R>
        </div>
        <Foot left="Pro, Business Premium and Enterprise · Chatting with your dot doesn't use your limits" right={n} />
        <Faces faces={CORNER} delay={0.5} />
      </>
    ),
  },
  {
    id: "space",
    dark: true,
    notes: "ChatGPT Space: pages where people and agents work together. Each page can have its own instructions, like an AGENTS.md for documents. Your dot is an extension of you, with your memory and your local and cloud environments. @ChatGPT in Slack and Teams is for collaborating in a thread and only sees shared cloud environments.",
    render: (n) => (
      <>
        <Eyebrow>Space · Slack · Teams</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>A place where people and agents work together.</R>
          <div className="cards" style={{ ["--n" as string]: 3 }}>
            <Card i={2} title="Space" text="Living pages with their own instructions: an AGENTS.md for your docs." />
            <Card i={3} title="Your dot" text="An extension of you: your memory, your local and cloud environments." />
            <Card i={4} title="@ChatGPT" text="For collaborating in a thread. Only sees shared cloud environments." />
          </div>
        </div>
        <Foot left="From Single Player to Multiplayer with Codex" right={n} />
      </>
    ),
  },
  {
    id: "appshots",
    notes: "A tip from Jason on Developer Experience: AppShots. You capture any app and it carries the full context: metadata, URLs, everything below the fold. About 30% of his Codex sessions start with an AppShot. The agent meets you where you are.",
    render: (n) => (
      <>
        <Eyebrow>A tip for tomorrow</Eyebrow>
        <div className="body">
          <div className="display huge"><Words text="30%" /></div>
          <R i={3} as="p" className="lead">of Codex sessions for Jason, on Developer Experience at OpenAI, start with an <strong>AppShot</strong>: a capture that carries the app's full context.</R>
        </div>
        <Foot left="The agent meets you where you are" right={n} />
      </>
    ),
  },
  {
    id: "s-builders",
    dark: true,
    notes: "Fourth block, the most important one if you want to make money: ChatGPT as a platform.",
    render: (n) => <Section k="For builders" title="1.2 billion people every week." sub="ChatGPT is now a platform for your product." n={n} />,
  },
  {
    id: "platform",
    notes: "Sign in with ChatGPT: users sign into your app and use the tokens in their plan, so you don't pay for their usage. Plugin extensions: full apps inside ChatGPT and Codex. Discovery inside the conversation. Simpler plugin submission. OpenAI Marketplace: 30+ launch partners, including CodeRabbit, Notion and Vercel; companies can use their OpenAI commitment to buy your product.",
    render: (n) => (
      <>
        <Eyebrow>Distribution</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Build once. Distribute in ChatGPT.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} title="Sign in with ChatGPT" text="Users bring their plan. You don't pay for their tokens." />
            <Card i={3} tone={tone.green} title="Plugin extensions" text="Sidebar entries, panels and file viewers." />
            <Card i={4} tone={tone.lilac} title="Discovery" text="ChatGPT suggests your plugin in the conversation." />
            <Card i={5} tone={tone.sand} title="Marketplace" text="30+ launch partners, including Notion and Vercel." />
          </div>
        </div>
        <Foot left="Companies can use their OpenAI commitment to buy your product" right={n} />
      </>
    ),
  },
  {
    id: "more",
    notes: "Quick, other announcements: GPT Live 1 in the API, full duplex, 5 cents per minute for the front-end model. The Responses API grew 100x in a year with over 99% reliability; time to first token dropped 45% and tool calls are 30% faster. Private Intelligence in preview: ZDR with private safety processing. Plans: Pro 500 with 25x Plus usage and Ultrafast; Pro 200 is back.",
    render: (n) => (
      <>
        <Eyebrow>Also</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Faster, more private and in voice.</R>
          <div className="stats">
            <Stat i={2} value="100x" label="Responses API growth in a year" />
            <Stat i={3} value="−45%" label="time to first token" />
            <Stat i={4} value="$0.05" label="per minute, GPT Live 1 in the API" />
            <Stat i={5} value="25x" label="Plus usage in the new Pro 500" />
          </div>
        </div>
        <Foot left="Also: Pro 200 is back" right={n} />
      </>
    ),
  },
  {
    id: "try",
    dark: true,
    notes: "How Dominic closed Codex Has Left The Laptop: three things to try. One, Codex Cloud if you leave your laptop cracked open. Two, the Codex CLI: agent view and fork to worktree. Three, give your dot a responsibility you handle by hand today.",
    render: (n) => (
      <>
        <Eyebrow>If you take three things</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Try it this week.</R>
          <div className="cards">
            <Card i={2} num="01" title="Codex Cloud" text="If you still leave your laptop cracked open so the agent keeps going." />
            <Card i={3} num="02" title="Codex CLI" text="Agent view and fork to worktree on your next project." />
            <Card i={4} num="03" title="Your dot" text="Give it a responsibility you handle by hand today." />
          </div>
        </div>
        <Foot left="Based on Codex Has Left The Laptop" right={n} />
      </>
    ),
  },
  {
    id: "s-build",
    dark: true,
    notes: "Time to build. First a live Codex demo, then it's your turn.",
    render: (n) => <Section k="Build session" title="You can just ship things." sub="A live demo, then you build." n={n} />,
  },
  {
    id: "rules",
    notes: "Simple rules. A small idea you can show today. Codex does the work; you direct and verify. A two-minute demo at the end. Ask the facilitators for help.",
    render: (n) => (
      <>
        <Eyebrow>How it works</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>A small idea. A demo that works.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} num="01" title="Pick" text="Something you can show today." />
            <Card i={3} tone={tone.green} num="02" title="Direct" text="Codex executes. You define and review." />
            <Card i={4} tone={tone.lilac} num="03" title="Verify" text="Make sure it works, not that it says so." />
            <Card i={5} tone={tone.sand} num="04" title="Show" text="Two minutes at the end." />
          </div>
        </div>
        <Foot left="Stuck? Raise your hand and a facilitator will help" right={n} />
      </>
    ),
  },
  {
    id: "cierre",
    dark: true,
    notes: "Close: all announcements are at openai.com/index/devday-2026-recap; guides at developers.openai.com and learn.chatgpt.com. Join Crafter Station at crafters.chat. To talk with me, railly.dev/meet. This deck was also built by agents and it's open source.",
    render: (n) => (
      <>
        <Faces faces={CORNER} delay={0.3} />
        <Eyebrow>Thank you</Eyebrow>
        <div className="body">
          <h2><Words text="Keep building." /></h2>
          <R i={4} className="links" >
            <div><small>All announcements</small><span style={{ fontSize: 40 }}>openai.com/index/devday-2026-recap</span></div>
            <div><small>The community</small><span style={{ fontSize: 40 }}>crafters.chat</span></div>
            <div><small>Let's talk</small><span style={{ fontSize: 40 }}>railly.dev/meet</span></div>
          </R>
          <R i={5} as="p" className="lead">Guides: <strong>developers.openai.com</strong> · <strong>learn.chatgpt.com</strong></R>
          <R i={6} as="p" className="lead">This deck was built by agents. Code: <strong>github.com/Railly/talks</strong></R>
        </div>
        <Foot left="DevDay Exchange Community: Lima" right={n} />
      </>
    ),
  },
];

const KEY = "Keynote, DevDay 2026";

const more: Slide[] = [
  {
    id: "originals",
    dark: true,
    notes: "Open with energy: the Codex Originals video. «These are the builders, the makers of our time.» Let it play a few seconds without talking.",
    render: () => <Full clip="originals" title="These are the builders." sub="The makers of our time. That's you tonight." src="Codex Originals · OpenAI" />,
  },
  {
    id: "community",
    notes: "From Building the Codex community. The program started with the idea of 15 to 20 ambassadors. Today there are 150+ across 80+ countries, with 300+ events. Build Week had 60+ events in one week. Their favorite: the Kochi, India ambassadors who ran a Codex event on a moving metro. Tonight Lima joins that list.",
    render: (n) => (
      <>
        <Eyebrow>The Codex community</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>From 15 ambassadors to 150+.</R>
          <div className="stats" style={{ flexWrap: "wrap", rowGap: 28 }}>
            <R i={2} className="stat"><b>150+</b><span>ambassadors</span></R>
            <R i={3} className="stat"><b>80+</b><span>countries</span></R>
            <R i={4} className="stat"><b>300+</b><span>events</span></R>
          </div>
          <R i={5} as="p" className="lead">Even a Codex event on a moving metro in Kochi. Tonight we add <strong>Lima</strong>.</R>
        </div>
        <Foot left="Building the Codex community" right={n} />
        <Side clip="community-metro" src="Kochi, India" style={{ width: 420, top: 110, right: 520 }} />
        <Side clip="community-buildweek" src="Build Week" style={{ width: 420, top: 380, right: 70 }} />
      </>
    ),
  },
  {
    id: "dots-stage",
    dark: true,
    notes: "The announcement that opened the keynote: Dots. «Think about that AI from the future you imagined: it knows what's going on, what matters to you, and you don't have to tell it every little thing.»",
    render: () => <Full clip="dots-stage" title="«Today, we're introducing Dots.»" sub="Always-on agents with their own identity." src={KEY} />,
  },
  {
    id: "dots-alf",
    notes: "The Dots launch video. «Hey, I'm your dot. I'm gonna call you Alfred.» You give it a name and an avatar, and the dot keeps the website, the board deck, the app migration and even a wedding cake moving.",
    render: () => <Full clip="dots-alf" title="«I'm gonna call you Alfred.»" sub="You give it a name, an avatar and responsibilities." src="Introducing dots" />,
  },
  {
    id: "dots-mobile",
    notes: "Dots on mobile too, iOS and Android. It sets itself up: tap Meet Dot, give it calendar and email access, and it has its own computer plus access to yours. In the demo he asks it by voice to prototype an iOS widget.",
    render: (n) => (
      <>
        <Eyebrow>Dots on mobile</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Call it and it prototypes.</R>
          <R i={2} as="p" className="lead">iOS and Android. Your dot has its own computer and access to yours. In the demo, he asks for an <strong>iOS widget</strong> over a call.</R>
        </div>
        <Foot left="Set up your dot in the ChatGPT mobile app" right={n} />
        <Side clip="dots-mobile" src="ChatGPT mobile" />
      </>
    ),
  },
  {
    id: "space-video",
    dark: true,
    notes: "ChatGPT Space in action: she asks ChatGPT to pull the whole chat into a page with priorities and decisions, shares it with Vic from marketing and they edit in real time. Your chat stays private; the page is shared.",
    render: () => <Full clip="space-video" title="From a chat to a shared page." sub="Priorities, decisions and open items, edited live by people and ChatGPT." src="Work with your team in ChatGPT Space" />,
  },
  {
    id: "single-player",
    dark: true,
    notes: "Jason, in From Single Player to Multiplayer: six months ago he was the glue for everything. A super IC micromanaging agents. Now the goal is moving the whole team forward, not just himself.",
    render: () => <Full clip="single-player" title="Six months ago: single player." sub="«I was the glue for all these systems, and the bottleneck.»" src="From Single Player to Multiplayer" />,
  },
  {
    id: "three-acts",
    notes: "His three acts: 1, gather the context (desktop, browser, Slack, your teammates' heads). 2, keep the work moving. 3, share it with the team and level them up.",
    render: (n) => (
      <>
        <Eyebrow>Multiplayer, in three acts</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Context, momentum, team.</R>
          <div className="cards">
            <Card i={2} tone={tone.blue} num="01" title="Gather the context" text="Desktop, browser, Slack and your team's heads." />
            <Card i={3} tone={tone.green} num="02" title="Keep it moving" text="Automations and a dot that follows up." />
            <Card i={4} tone={tone.lilac} num="03" title="Share it" text="Skills and plugins the team reuses." />
          </div>
        </div>
        <Foot left="Jason, Developer Experience at OpenAI" right={n} />
      </>
    ),
  },
  {
    id: "page-instructions",
    dark: true,
    notes: "Page instructions: an AGENTS.md for your documents. You define how each page gets updated, so all your teammates' agents can contribute without making a mess.",
    render: () => <Full clip="page-instructions" title="An AGENTS.md for your documents." sub="So everyone's agents can contribute without breaking anything." src="From Single Player to Multiplayer" />,
  },
  {
    id: "champions",
    notes: "How OpenAI Puts ChatGPT to Work: they interviewed the heaviest ChatGPT Work users inside OpenAI. Example: a dot went through 90 days of sales call transcripts and found reasons for lost deals that weren't in the CRM.",
    render: (n) => (
      <>
        <Eyebrow>ChatGPT Work</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>90 days of calls, in one afternoon.</R>
          <R i={2} as="p" className="lead">A dot went through 90 days of sales transcripts and found why deals were lost. <strong>That wasn't in the CRM.</strong></R>
        </div>
        <Foot left="How OpenAI Puts ChatGPT to Work" right={n} />
        <Side clip="champions" src="Power users at OpenAI" />
      </>
    ),
  },
  {
    id: "s-models",
    dark: true,
    notes: "Models, speed and cost.",
    render: (n) => <Section k="Models and cost" title="Smarter, faster, cheaper." sub="GPT-6.1 Sol, Ultrafast and how to stop overpaying." n={n} />,
  },
  {
    id: "ultrafast-stage",
    dark: true,
    notes: "Ultrafast on stage.",
    render: () => <Full clip="ultrafast-stage" title="Ultrafast." sub="In Codex, ChatGPT Work and the API." src={KEY} />,
  },
  {
    id: "ultrafast-compare",
    notes: "Side by side: same task, standard vs ultrafast. Ask the room to watch which one finishes first.",
    render: (n) => (
      <>
        <Eyebrow>Side by side</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Same task. Which one finishes first?</R>
          <Duo items={[{ clip: "ultrafast-rocket", title: "Keynote", text: "A rocket generated with and without Ultrafast." }, { clip: "ultrafast-car", title: "Demo", text: "Standard vs. Ultrafast in a simulation." }]} />
        </div>
        <Foot left="Ultrafast, now in the API, ChatGPT Work and Codex" right={n} />
      </>
    ),
  },
  {
    id: "pro500",
    dark: true,
    notes: "Pro 500: the highest-usage plan, 25x Plus, with Ultrafast and usage in partner apps through Sign in with ChatGPT. Pro 200 is back.",
    render: () => <Full clip="pro500" title="Pro 500: 25x Plus usage." sub="With Ultrafast. And Pro 200 is back." src={KEY} />,
  },
  {
    id: "cost-per-task",
    notes: "Stop Overpaying for Intelligence. Mistake number one: looking at price per token. What matters is cost per task. A cheap model can burn more tokens or fail, and then a person has to step in. The airline chatbot example that ended with a human. Perplexity: Astra was 9% more accurate at half the cost. Notion: moving to 5.6 Sol gave better accuracy at half the cost per task.",
    render: (n) => (
      <>
        <Eyebrow>Stop overpaying for intelligence</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Measure cost per <Mark delay={0.9}>task</Mark>, not per token.</R>
          <div className="cards">
            <Card i={2} tone={tone.sand} title="The cheap chatbot" text="It couldn't resolve the case and ended with a person. The real cost includes the human." />
            <Card i={3} tone={tone.blue} title="Perplexity" text="With Astra, 9% more accurate at half the cost." />
            <Card i={4} tone={tone.green} title="Notion" text="Moving to 5.6 Sol: better accuracy at half the cost per task." />
          </div>
        </div>
        <Foot left="AI Deployment Engineering team, OpenAI" right={n} />
      </>
    ),
  },
  {
    id: "levers",
    dark: true,
    notes: "Four levers beyond the model. 1, prompt caching for repeated text. 2, programmatic tool calling: a program coordinates the tools and returns a summary; Clio cut prompt tokens 38% with no quality loss. 3, reasoning effort: start low on routine tasks and measure with evals. 4, Batch: a 24-hour window at 50% off. And Luna maxing: with high reasoning, Luna beats bigger models from previous generations.",
    render: (n) => (
      <>
        <Eyebrow>Four levers</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Before switching models, try this.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} num="01" title="Prompt caching" text="Reuse the text that repeats." />
            <Card i={3} num="02" title="Programmatic tool calling" text="Clio: 38% fewer prompt tokens." />
            <Card i={4} num="03" title="Reasoning effort" text="Start low and measure with evals." />
            <Card i={5} num="04" title="Batch" text="A 24-hour window, 50% off." />
          </div>
        </div>
        <Foot left="And try «Luna maxing»: Luna with high reasoning" right={n} />
      </>
    ),
  },
  {
    id: "s-apis",
    dark: true,
    notes: "APIs to build with.",
    render: (n) => <Section k="APIs" title="What you can build starting tomorrow." sub="Decisions, Agents, GPT Live and the platform." n={n} />,
  },
  {
    id: "decisions-demo",
    notes: "The Decisions API demo: it gets frames of a road and decides whether the car stays in its lane or moves left or right. Even when they speed it up, it keeps dodging, in a fraction of the time a reasoning model would take.",
    render: (n) => (
      <>
        <Eyebrow>Decisions API · Demo</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Left, center or right.</R>
          <R i={2} as="p" className="lead">It gets frames of the road and picks the lane. <strong>Not sped up.</strong></R>
        </div>
        <Foot left="Introducing the Decisions API" right={n} />
        <Side clip="decisions-driving" src="Decisions API" />
      </>
    ),
  },
  {
    id: "decisions-more",
    notes: "More use cases: sales leads classified in under 100 ms; a character picking its expression while GPT Live 1 talks; and a Hugging Face robot.",
    render: (n) => (
      <>
        <Eyebrow>Decisions API · Use cases</Eyebrow>
        <div className="body">
          <Duo three items={[{ clip: "decisions-sales", title: "Sales", text: "Leads classified in under 100 ms." }, { clip: "decisions-frog", title: "Voice", text: "The character's expression as it talks." }, { clip: "decisions-robot", title: "Robotics", text: "A programmable Hugging Face robot." }]} />
        </div>
        <Foot left="Introducing the Decisions API" right={n} />
      </>
    ),
  },
  {
    id: "agents-harness",
    notes: "Agents API: your app talks to the hosted harness, and the harness to the sandbox you choose. Example: an agent that investigates production incidents with observability MCPs and a runbook skill.",
    render: (n) => (
      <>
        <Eyebrow>Agents API · Architecture</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Your app, the harness, your sandbox.</R>
          <R i={2} as="p" className="lead">OpenAI handles orchestration, sessions and context. You choose tools through <strong>MCP</strong>, instructions with <strong>skills</strong> and where it runs.</R>
        </div>
        <Foot left="Introducing the Agents API" right={n} />
        <Side clip="agents-harness" src="Agents API" />
      </>
    ),
  },
  {
    id: "ptc",
    dark: true,
    notes: "The number that struck me most: with direct tool calls, 170,126 tokens of results went into the model. With programmatic tool calling, 11. The model filters the logs in code instead of reading all of them.",
    render: (n) => (
      <>
        <Eyebrow>Programmatic tool calling</Eyebrow>
        <div className="body">
          <div className="stats" style={{ gap: 120 }}>
            <R i={1} className="stat"><b style={{ fontSize: 150 }}>170,126</b><span>tokens with direct tool calls</span></R>
            <R i={3} className="stat"><b style={{ fontSize: 150 }} className="hl">11</b><span>tokens with programmatic tool calling</span></R>
          </div>
          <R i={5} as="p" className="lead">The agent filters logs in code. The model only reads what matters.</R>
        </div>
        <Foot left="Introducing the Agents API" right={n} />
      </>
    ),
  },
  {
    id: "gpt-live",
    notes: "GPT Live 1 in the API: full duplex, listens and speaks at the same time, handles noise and interruptions, and delegates reasoning and tools to a back-end model. Five cents per minute for the front-end model; the back end is billed separately.",
    render: (n) => (
      <>
        <Eyebrow>GPT Live 1 · In the API</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Listens and speaks at the same time.</R>
          <Duo three items={[{ clip: "live-board", title: "Full duplex", text: "Handles noise and interruptions." }, { clip: "live-wave", title: "Front end and back end", text: "Delegates tools and reasoning." }, { clip: "live-price", title: "$0.05 per minute", text: "For the front-end model." }]} />
        </div>
        <Foot left="GPT-Live-1 is now in the API" right={n} />
      </>
    ),
  },
  {
    id: "aws",
    dark: true,
    notes: "Bedrock Managed Agents powered by OpenAI: build OpenAI agents inside AWS, next to your data. Plus Astra, Ultrafast, Codex and ChatGPT Work for AWS customers.",
    render: () => <Full clip="aws" title="OpenAI inside AWS." sub="Bedrock Managed Agents, Astra with Ultrafast, Codex and ChatGPT Work." src={KEY} />,
  },
  {
    id: "features-300",
    dark: true,
    notes: "Dominic opened Codex Has Left the Laptop like this: 300+ Codex features in the last year. Impossible to keep up, which is why this talk exists.",
    render: () => <Full clip="features-300" title="300+ Codex features in one year." sub="Impossible to keep up. That's why we're here." src="Codex Has Left The Laptop" />,
  },
  {
    id: "macmini",
    dark: true,
    notes: "Ask the room for a show of hands: who bought a Mac Mini, a Raspberry Pi or a VPS just to keep agents running? More machines means more upkeep: setup, updates, disk.",
    render: () => <Full clip="macmini" title="Who bought a Mac Mini for their agents?" sub="Setup, updates, disk space. More machines, more upkeep." src="Codex Has Left The Laptop" />,
  },
  {
    id: "cloud-stage",
    dark: true,
    notes: "The answer: Codex in the cloud.",
    render: () => <Full clip="cloud-stage" title="Codex, in the cloud." src={KEY} />,
  },
  {
    id: "cloud-demo",
    notes: "In the composer you choose where it works: this computer, cloud or remote. Environment onboarding is a chat: it researches what the repo needs, networking, variables and secrets. The result is a reusable snapshot for the whole team.",
    render: (n) => (
      <>
        <Eyebrow>Codex Cloud · Demo</Eyebrow>
        <div className="body">
          <Duo items={[{ clip: "cloud-workin", title: "Pick where", text: "This computer, cloud or remote." }, { clip: "cloud-env", title: "Environment by chat", text: "Networking, variables and secrets. Saved as a snapshot." }]} />
        </div>
        <Foot left="Meet the all new Codex Cloud" right={n} />
      </>
    ),
  },
  {
    id: "cloud-phone",
    dark: true,
    notes: "«I don't need to leave this open anymore»: close the laptop and the task keeps going. Pick it back up from your phone, even by voice while walking.",
    render: () => <Full clip="cloud-phone" title="Close the laptop. Keep going from your phone." sub="Even by voice, while you walk." src="Meet the all new Codex Cloud" />,
  },
  {
    id: "shader",
    notes: "Dominic's example: he sent an AppShot of a shader designed in Figma to his cloud environment. Codex implemented it with the Figma plugin, tested it and deployed a playground to tweak it.",
    render: (n) => (
      <>
        <Eyebrow>Codex Cloud · A case</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>From Figma to a shader, in the cloud.</R>
          <R i={2} as="p" className="lead">An AppShot of the design, the Figma plugin and a <strong>deployed playground</strong> to tweak it.</R>
        </div>
        <Foot left="Codex Has Left The Laptop" right={n} />
        <Side clip="shader" src="Codex Has Left The Laptop" />
      </>
    ),
  },
  {
    id: "cli-stage",
    dark: true,
    notes: "The refreshed Codex CLI, live in the keynote: «build an app that picks three attendees at random for free tickets next year.» With Ultrafast, done in seconds.",
    render: () => <Full clip="cli-stage" title="The refreshed CLI, live." sub="An app that raffles tickets among attendees, in seconds." src={KEY} />,
  },
  {
    id: "cli-demo",
    notes: "From Meet the New Codex CLI: the agents view with every task, and remote control from your phone to check progress and answer questions away from the keyboard.",
    render: (n) => (
      <>
        <Eyebrow>Codex CLI · Demo</Eyebrow>
        <div className="body">
          <Duo items={[{ clip: "cli-agents", title: "Agent command center", text: "Filter, group and jump into any task." }, { clip: "cli-phone", title: "Remote control", text: "Your local tasks, from your phone." }]} />
        </div>
        <Foot left="Meet the New Codex CLI" right={n} />
      </>
    ),
  },
  {
    id: "review-demo",
    notes: "Code review: an inbox with PRs from all your repos, an automatic first pass and a private chat per PR. You can customize how it reviews: a short summary and a risk analysis.",
    render: (n) => (
      <>
        <Eyebrow>Code review in Codex</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Review is no longer the bottleneck.</R>
          <R i={2} as="p" className="lead">PR inbox, an automatic first pass and a private chat per PR with your guidelines. GitHub today, GitLab merge requests in preview.</R>
        </div>
        <Foot left="Code review is no longer the bottleneck" right={n} />
        <Side clip="review-inbox" src="Codex code review" />
      </>
    ),
  },
  {
    id: "security",
    dark: true,
    notes: "Codex Security Cloud: continuous scanning, deduplication and verified fixes. Scheduled scans and a new interface.",
    render: () => <Full clip="security-cloud" title="Codex Security Cloud." sub="Finds vulnerabilities and prepares verified fixes for you to review." src={KEY} />,
  },
  {
    id: "grafana",
    notes: "Production Monitoring with Codex: it's 3 a.m. and checkout errors climb to almost 20%. Codex with a skill gathers evidence from Grafana, Kubernetes and the code, proposes a fix and you approve. Errors go back to 0, with no rollback: still on V2.",
    render: (n) => (
      <>
        <Eyebrow>Codex in production</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>3 a.m. Errors at 20%.</R>
          <R i={2} as="p" className="lead">Codex gathers the evidence, proposes the fix and you approve. Errors at 0, <strong>no rollback</strong>.</R>
        </div>
        <Foot left="Production Monitoring with Codex" right={n} />
        <Side clip="grafana" src="Grafana + Codex" />
      </>
    ),
  },
  {
    id: "s-eco",
    dark: true,
    notes: "The ecosystem: open source, partners and how to distribute what you build.",
    render: (n) => <Section k="Ecosystem" title="Open source, partners and distribution." sub="What others are building on top." n={n} />,
  },
  {
    id: "openclaw",
    dark: true,
    notes: "ClawLabs, with Peter, creator of OpenClaw: an open source platform for persistent agents, owned by the OpenClaw Foundation, an independent nonprofit that OpenAI supports. His idea: don't be a meat proxy, the human who just passes messages between the AI and the team. They made the whole team's sessions visible: awkward for a day, then normal. «Show me the prompt.»",
    render: () => <Full clip="openclaw-peter" title="«Let's not be a meat proxy.»" sub="OpenClaw: sessions visible to the whole team. «Show me the prompt.»" src="ClawLabs: Building Open Source Together" />,
  },
  {
    id: "jellyware",
    notes: "Another idea from Peter: dashboards are a session that generates an artifact plus an automation that updates it. We iterate so fast it's not software anymore, it's jellyware. His thesis: models improve so fast that workflows from six months ago already feel dated, even CI.",
    render: (n) => (
      <>
        <Eyebrow>OpenClaw</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Software? <Mark delay={0.9}>Jellyware</Mark>.</R>
          <R i={2} as="p" className="lead">A dashboard is a session that generates an artifact plus an automation that updates it. <strong>You change it with a sentence.</strong></R>
        </div>
        <Foot left="ClawLabs: Building Open Source Together" right={n} />
        <Side clip="openclaw-server" src="OpenClaw" />
      </>
    ),
  },
  {
    id: "partners",
    notes: "Partner sessions. Qodo, «Codex's best friend»: collects the team's tribal knowledge to give Codex context and review what it writes. Stack Overflow: Stack Internal and Stack Overflow for Agents, where agents interact too, not only people. Higgsfield: agents that pick models and spin up GPUs; an interactive stream went from 2 to 10+ hours.",
    render: (n) => (
      <>
        <Eyebrow>Partners at DevDay</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Building on top of Codex.</R>
          <div className="cards">
            <Card i={2} tone={tone.lilac} title="Qodo" text="The team's tribal knowledge, for generating and reviewing with Codex." />
            <Card i={3} tone={tone.sand} title="Stack Overflow" text="Stack Internal and Stack Overflow for Agents." />
            <Card i={4} tone={tone.green} title="Higgsfield" text="Agents that pick models and provision their own compute." />
          </div>
        </div>
        <Foot left="Partner sessions, DevDay 2026" right={n} />
      </>
    ),
  },
  {
    id: "plugins-demo",
    notes: "Plugin extensions: your product gets a home in the sidebar or a panel next to the conversation. Code review and Meetings are already built on this same system. Example: a design editor where you select an element and ask ChatGPT for another layout.",
    render: (n) => (
      <>
        <Eyebrow>Plugin extensions</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Your product, inside ChatGPT.</R>
          <R i={2} as="p" className="lead">A home in the sidebar or a panel next to the chat. <strong>Code review and Meetings</strong> already use this system.</R>
        </div>
        <Foot left="Build Plugins for ChatGPT" right={n} />
        <Side clip="plugin-sidebar" src="Plugin extensions" />
      </>
    ),
  },
  {
    id: "marketplace",
    dark: true,
    notes: "OpenAI Marketplace: 30+ launch partners, including CodeRabbit, Notion and Vercel. Companies can use part of their OpenAI commitment to buy your product.",
    render: () => <Full clip="marketplace" title="OpenAI Marketplace." sub="30+ launch partners. Companies buy with their OpenAI commitment." src={KEY} />,
  },
  {
    id: "pages",
    notes: "Pages: a living document where you write, research and create charts and images with AI. Teammates add ideas and feedback in one place. Pro, Business and Enterprise.",
    render: (n) => (
      <>
        <Eyebrow>Pages</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>A living document, with AI inside.</R>
          <R i={2} as="p" className="lead">Write, research, create charts and images on a page. Invite teammates to add ideas and feedback in one place.</R>
        </div>
        <Foot left="Pro, Business and Enterprise" right={n} />
        <Side clip="/img/official/pages.jpg" src="Pages · OpenAI" />
      </>
    ),
  },
  {
    id: "team-work",
    notes: "Three team announcements. Collaborative slides: start from a conversation or template, people and agents edit and comment together, export to PowerPoint or Google Slides; coming soon. Teams and shared tasks: share pages, plugins, slides and spreadsheets, and set up recurring tasks whose instructions the team refines; Business and Enterprise. Meetings plugin: notes and summaries with action items in Space, audio deleted once notes are ready; macOS beta for Pro and Business.",
    render: (n) => (
      <>
        <Eyebrow>ChatGPT Work for teams</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Recurring work as a team workflow.</R>
          <Duo three items={[{ clip: "/img/official/slides.jpg", title: "Collaborative slides", text: "From a chat or template. Export to PowerPoint and Google Slides." }, { clip: "/img/official/tasks.jpg", title: "Shared tasks", text: "Recurring, with instructions the team refines." }, { clip: "/img/official/meetings.jpg", title: "Meetings", text: "Notes and action items in Space. Audio is deleted." }]} />
        </div>
        <Foot left="Slides: coming soon · Tasks: Business and Enterprise · Meetings: macOS beta" right={n} />
      </>
    ),
  },
  {
    id: "plugin-creator",
    notes: "Plugin Creator helps assemble your plugin. The submission flow was redesigned with clearer feedback. And there are more ways for people to discover it. Users choose their plugins and approve the access each one gets.",
    render: (n) => (
      <>
        <Eyebrow>Plugins</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>From idea to discovery.</R>
          <R i={2} as="p" className="lead"><strong>Plugin Creator</strong> helps you build it, the new submission flow gives clearer feedback, and people find it in ChatGPT. Each user approves the access it gets.</R>
        </div>
        <Foot left="Create, submit, discover" right={n} />
        <Side clip="/img/official/plugins.jpg" src="Build and discover plugins" />
      </>
    ),
  },
  {
    id: "mcp-events",
    notes: "MCP events: plugin events trigger automations when connected apps change. A new message or a document comment starts the workflow you define. For MCP builders this is key: your server no longer just answers, it also wakes the agent up.",
    render: (n) => (
      <>
        <Eyebrow>MCP events</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Start work when something happens.</R>
          <R i={2} as="p" className="lead">A new message or a doc comment triggers the automation you define. Plugin events, in Work and in your dot.</R>
        </div>
        <Foot left="Work on web, cloud and desktop · dots" right={n} />
        <Side clip="/img/official/mcp-events.jpg" src="MCP events" />
      </>
    ),
  },
  {
    id: "sites",
    notes: "Sites with connected plugins: build shared tools without giving everyone the same data access, each person connects their own accounts. Connected tools are read-only for now. Shareable profiles: bring your Sites and activity together so others discover what you built; web and desktop.",
    render: (n) => (
      <>
        <Eyebrow>Sites and profiles</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>A shared app, with each person's own data.</R>
          <Duo items={[{ clip: "/img/official/sites.jpg", title: "Sites with connected plugins", text: "Each teammate connects their own accounts and permissions." }, { clip: "/img/official/profiles.jpg", title: "Shareable profiles", text: "Your Sites and activity in one place." }]} />
        </div>
        <Foot left="Sites: Business, Enterprise, Healthcare and Edu, read-only for now" right={n} />
      </>
    ),
  },
  {
    id: "private",
    notes: "Private Intelligence. Private Safety Processing: automated safety reviews without personnel accessing the content. Private Inference: confidential computing with verifiable controls, preview planned for fall 2026.",
    render: (n) => (
      <>
        <Eyebrow>Private Intelligence</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>More control for sensitive data.</R>
          <R i={2} as="p" className="lead"><strong>Private Safety Processing:</strong> automated reviews without anyone seeing the content. <strong>Private Inference:</strong> verifiable confidential computing, preview in fall 2026.</R>
        </div>
        <Foot left="For evaluating frontier AI with stronger privacy requirements" right={n} />
        <Side clip="/img/official/private.jpg" src="Private Intelligence" />
      </>
    ),
  },
  {
    id: "host-edward",
    notes: "Edward Ramos is a Senior Frontend Developer at Atlantic City Casino & Sports and a co-founder of Crafter Station. Software Engineering graduate from UNMSM with 4+ years in tech. He specializes in web interfaces and features, leads solutions for complex scenarios and owns production quality.",
    render: (n) => <Host name="Edward Ramos." eb="Up next" stats={[["Senior Frontend", "at Atlantic City Casino & Sports"], ["Co-founder", "of Crafter Station"], ["4+ years", "Software Engineering, UNMSM"]]} site="edwardr.dev" img="/shared/edward.webp" n={n} />,
  },
  {
    id: "host-carlos",
    notes: "Carlos Tarmeño is a Frontend Developer at Kambista and a co-founder of Crafter Station. Trained in Software Engineering at UNMSM, with four years building web and mobile apps for fintech and enterprise systems. He also brings AI tools into product development.",
    render: (n) => <Host name="Carlos Tarmeño." eb="Up next" stats={[["Frontend", "at Kambista, fintech"], ["Co-founder", "of Crafter Station"], ["4 years", "web, mobile and AI · UNMSM"]]} site="carlostarmeno.com" img="/shared/tarmeno.webp" n={n} />,
  },
  {
    id: "crafter",
    dark: true,
    className: "crafter",
    notes: "Crafter Station: a nonprofit building Peru's tech ecosystem. 6,500+ GitHub stars across 214 open source repos; Petdex alone has 4,200+. The hack0 Luma calendar has about 10k LATAM subscribers. The 2025 v0 hackathon had 220+ registered across Lima, Medellin, Bogota and Arequipa. Edward and Carlos are co-founders.",
    render: (n) => (
      <>
        <div className="body">
          <R i={1}>
            {/* biome-ignore lint/performance/noImgElement: static mark */}
            <div className="cs-wordmark"><img src="/shared/crafter-mark.svg" alt="" /><span>crafter<br />station</span></div>
          </R>
          <R as="p" i={2} className="lead">We build <strong>Peru's</strong> tech ecosystem.</R>
          <div className="stats">
            <Stat i={3} value="6,500+" label="GitHub stars, all open source" />
            <Stat i={4} value="4,200+" label="stars on Petdex alone" />
            <Stat i={5} value="10K" label="LATAM subscribers to the hack0 calendar" />
            <Stat i={6} value="4 cities" label="v0 hackathon, 220+ registered" />
          </div>
        </div>
        <Foot left="Nonprofit · crafter.run" right={n} />
      </>
    ),
  },
  {
    id: "crafter-join",
    dark: true,
    className: "crafter",
    notes: "How to join today. The WhatsApp community: crafters.chat. Bounties: numbered challenges with real prizes; the first one gave away AI Frontier Conf tickets. Hot Reload, our meetup in Lima. And everything we do is open source. What you build tonight can be your first bounty.",
    render: (n) => (
      <>
        <Eyebrow>Join us</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>What you build tonight doesn't stay here.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} title="Community" text="1,000+ builders at crafters.chat." />
            <Card i={3} tone={tone.green} title="Bounties" text="Challenges with real prizes at crafter.run/bounties." />
            <Card i={4} tone={tone.lilac} title="Hot Reload" text="Our builder meetup in Lima." />
            <Card i={5} tone={tone.sand} title="Open source" text="All of it on GitHub: crafter-station." />
          </div>
        </div>
        <Foot left="Your project tonight can be your first bounty" right={n} />
      </>
    ),
  },
];

const blocks: [string, string[]][] = [
  ["Railly", ["portada", "originals", "agenda", "host", "crafter", "crafter-join", "community"]],
  ["Edward", ["host-edward", "s-recap", "dots-stage", "dots", "appshots", "s-builders", "platform", "plugins-demo", "plugin-creator", "mcp-events", "openclaw"]],
  ["Carlos", ["host-carlos", "s-models", "sol", "ultrafast-stage", "ultrafast", "levers", "s-apis", "decisions", "decisions-demo", "agents-api", "ptc", "gpt-live"]],
  ["Railly", ["s-codex", "features-300", "macmini", "cloud-stage", "cloud", "cloud-phone", "shader", "cli-stage", "cli", "cli-demo", "review-demo", "try", "s-build", "rules", "cierre"]],
];

const byId = new Map([...all, ...more].map((s) => [s.id, s]));
export const slides: Slide[] = blocks.flatMap(([speaker, ids]) =>
  ids.map((id) => {
    const s = byId.get(id);
    if (!s) throw new Error(`missing slide ${id}`);
    return { ...s, speaker };
  }),
);
