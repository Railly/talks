# talks

Railly Hugo's talk decks. Every deck is a Next.js app on a shared engine, built with agents.

| Talk | App | Live |
|---|---|---|
| La nueva generación de ingenieros (UNAT, Semana Industrial 2026) | `apps/unat` | https://unat.crafter.run |
| Second Brain: cómo construirlo y mantenerlo vivo | `apps/react-ba` | https://react-ba.crafter.run |
| DevDay Exchange Community: Lima (OpenAI DevDay 2026 recap) | `apps/devday-lima` | local |

`packages/deck` holds the engine (navigation, transitions, speaker notes), the Crafter UI styles, illustrations, fonts and shared assets. Apps copy `packages/deck/public` into their own `public` on `dev` and `build`.

```sh
bun install
cd apps/unat && bun run dev
```

Keys: arrows or space to move, `N` speaker notes, `F` fullscreen, `#12` in the URL jumps to a slide.
