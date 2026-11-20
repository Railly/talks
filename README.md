# talks

Railly Hugo's talk decks. Every deck is a Next.js app on a shared engine, built with agents.

| Talk | App | Live |
|---|---|---|
| La nueva generación de ingenieros (UNAT, Semana Industrial 2026) | `apps/unat` | https://unat.crafter.run |
| Second Brain: cómo construirlo y mantenerlo vivo | `apps/react-ba` | https://react-ba.crafter.run |
| DevDay Exchange Community: Lima (OpenAI DevDay 2026 recap) | `apps/devday-lima` | https://devday.crafter.run |
| Taste hacking: desarma cualquier web, animación o video y reconstrúyelo con IA (hack0 workshop 01) | private | https://taste-hacking.crafter.run (attendees only) |

`packages/deck` holds the engine (navigation, transitions, speaker notes), the Crafter UI styles, illustrations, fonts and shared assets. Apps copy `packages/deck/public` into their own `public` on `dev` and `build`.

```sh
bun install
cd apps/unat && bun run dev
```

Keys: arrows or space to move, `N` speaker notes, `F` fullscreen, `#12` in the URL jumps to a slide.

## Taste hacking

Taste hacking is a paid workshop from [hack0](https://hack0.dev). It runs on this same deck engine, but its source stays out of this repo because it ships paid material, like the real Claude Code sessions and the workshop recording.

The deck is live at [taste-hacking.crafter.run](https://taste-hacking.crafter.run) for people who bought a ticket. Sign in with the hack0 key (`h0_...`) that reached your email from `workshops@updates.hack0.dev`. If you lost it, run `npx @crafter/hack0 auth recover you@email.com` and a new one arrives at the same address.

The public page, the gallery and the next editions are at [hack0.dev/taste-hacking](https://hack0.dev/taste-hacking).
