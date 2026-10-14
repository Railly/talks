"use client";

import { Card, EASE, Eyebrow, Foot, Mark, R, type Slide, tone, Words } from "@talks/deck";
import { motion } from "motion/react";
import { CORNER, COVER, Faces } from "./faces";

function Stat({ i, value, label }: { i: number; value: string; label: string }) {
  return (
    <R i={i} className="stat">
      <b>{value}</b>
      <span>{label}</span>
    </R>
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

export const slides: Slide[] = [
  {
    id: "portada",
    notes: "Bienvenida. Hoy: recap de lo que OpenAI lanzó en DevDay 2026 y después construimos con Codex. Gracias a la FISI por el espacio.",
    render: () => (
      <>
        <Faces faces={COVER} />
        <Eyebrow>OpenAI · DevDay Exchange Community Event</Eyebrow>
        <div className="body" style={{ maxWidth: 760 }}>
          <h1><Words text="DevDay Exchange: Lima." /></h1>
          <R i={4} as="p" className="lead">Recap de DevDay 2026 y build session con Codex.</R>
        </div>
        <Foot left="21 de octubre de 2026 · FISI, UNMSM" />
      </>
    ),
  },
  {
    id: "agenda",
    notes: "Agenda de la noche. Ajustar horas el mismo día según la apertura real.",
    render: (n) => (
      <>
        <Eyebrow>Esta noche</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Primero vemos qué cambió. Después lo usamos.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} num="01" title="Recap" text="Lo más importante de DevDay 2026 para builders." />
            <Card i={3} tone={tone.green} num="02" title="Demo" text="Codex en vivo, de la idea al deploy." />
            <Card i={4} tone={tone.lilac} num="03" title="Build" text="Tu laptop, tu idea, Codex." />
            <Card i={5} tone={tone.sand} num="04" title="Demos" text="Dos minutos cada uno para mostrar lo que hiciste." />
          </div>
        </div>
        <Foot left="18:00 a 21:00, hora de Lima" right={n} />
      </>
    ),
  },
  {
    id: "host",
    notes: "Presentación corta. Codex Ambassador de Perú, trabajo en Vercel Labs, fundador de Crafter Station.",
    render: (n) => (
      <>
        <Eyebrow>Quién les habla</Eyebrow>
        <div className="body" style={{ maxWidth: 900 }}>
          <h2><Words text="Railly Hugo." /></h2>
          <div className="stats">
            <Stat i={3} value="Codex" label="Ambassador de Perú" />
            <Stat i={4} value="Vercel" label="Software Engineer en Vercel Labs" />
            <Stat i={5} value="Crafter" label="Fundador de Crafter Station" />
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
    notes: "En el keynote Sam habló de unos veinte lanzamientos. No vamos a ver todos: solo los que cambian cómo construimos.",
    render: (n) => <Section k="01 / Recap" title="Unos 20 lanzamientos en un día." sub="Estos son los que más cambian cómo construimos." n={n} />,
  },
  {
    id: "sol",
    notes: "GPT-6.1 Sol: cerca del nivel de Astra a una quinta parte del precio. El input cacheado tiene 95% de descuento, así que los agentes que reutilizan contexto salen mucho más baratos. Pensado como el modelo de todos los días.",
    render: (n) => (
      <>
        <Eyebrow>Modelos</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>GPT-6.1 Sol: tu modelo de <Mark delay={0.9}>todos los días</Mark>.</R>
          <div className="stats">
            <Stat i={3} value="≈ Astra" label="casi la misma inteligencia" />
            <Stat i={4} value="1/5" label="del precio de Astra" />
            <Stat i={5} value="−95%" label="en input cacheado frente al estándar" />
          </div>
        </div>
        <Foot left="Fuente: keynote de DevDay 2026" right={n} />
      </>
    ),
  },
  {
    id: "ultrafast",
    dark: true,
    notes: "Ultrafast en API, ChatGPT y Codex. Fast ya era 2x velocidad a 2x precio. Ultrafast es 8x velocidad a 6x precio, unos 300 tokens por segundo. Hoy con Astra, pronto con Sol.",
    render: (n) => (
      <>
        <Eyebrow>Velocidad</Eyebrow>
        <div className="body">
          <div className="display huge"><Words text="300 tokens" /><br /><span className="hl"><Words text="por segundo." i={2} /></span></div>
          <div className="cards">
            <Card i={5} title="Standard" text="1x velocidad, 1x precio." />
            <Card i={6} title="Fast" text="2x velocidad, 2x precio." />
            <Card i={7} title="Ultrafast" text="8x velocidad, 6x precio. En API, ChatGPT y Codex." />
          </div>
        </div>
        <Foot left="Hoy con Astra, pronto con GPT-6.1 Sol" right={n} />
      </>
    ),
  },
  {
    id: "decisions",
    notes: "Decisions API (preview), corre en GPT-6 Luna. Le das texto o imagen, la pregunta y las opciones posibles, y responde en una fracción de segundo. En la demo, menos de 100 ms del lado del servidor. Casos: rutear tickets, clasificar leads, elegir la acción siguiente de un agente, manejar un auto en un juego eligiendo carril, expresiones de un personaje con GPT Live.",
    render: (n) => (
      <>
        <Eyebrow>APIs · Preview</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Decisions API: elegir en <Mark delay={0.9}>menos de 100 ms</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 3 }}>
            <Card i={2} tone={tone.blue} num="Entrada" title="Texto o imagen" text="Más la pregunta y las opciones posibles." />
            <Card i={3} tone={tone.green} num="Modelo" title="GPT-6 Luna" text="Enfocado en elegir, casi 10 veces más rápido." />
            <Card i={4} tone={tone.sand} num="Casos" title="Rutear y clasificar" text="Tickets, leads, imágenes o la siguiente acción de un agente." />
          </div>
        </div>
        <Foot left="Para tareas complejas de computer use, sigue siendo Astra" right={n} />
      </>
    ),
  },
  {
    id: "agents-api",
    notes: "Agents API en beta pública: el harness de Codex hospedado. OpenAI maneja orquestación, sesiones y contexto. Conectas herramientas por MCP, das instrucciones con skills, eliges el sandbox (de OpenAI, de terceros o tuyo). Programmatic tool calling para filtrar logs en código y gastar menos tokens. Multi-agente, compaction y computer use. También en AWS con Bedrock Managed Agents.",
    render: (n) => (
      <>
        <Eyebrow>APIs · Beta pública</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Agents API: el harness de Codex, para tu app.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} title="Herramientas" text="MCPs y skills, como en Codex." />
            <Card i={3} tone={tone.green} title="Sandbox" text="De OpenAI, de terceros o tu infraestructura." />
            <Card i={4} tone={tone.lilac} title="Contexto largo" text="Compaction y tool calling programático." />
            <Card i={5} tone={tone.sand} title="Multi-agente" text="Subagentes y computer use." />
          </div>
        </div>
        <Foot left="También en AWS: Bedrock Managed Agents powered by OpenAI" right={n} />
      </>
    ),
  },
  {
    id: "s-codex",
    dark: true,
    notes: "Ahora lo que más nos importa esta noche: Codex.",
    render: (n) => <Section k="02 / Codex" title="Codex dejó la laptop." sub="Cloud, un CLI nuevo, revisión de código y seguridad." n={n} />,
  },
  {
    id: "cloud",
    notes: "Codex Cloud: empiezas una tarea en el celular y la sigues en el navegador o el desktop. Ya no tienes que dejar la laptop abierta. Al crear un entorno eliges repos y Codex lo configura solo: detecta dependencias y escribe un script de arranque y una skill de arranque. Snapshots del filesystem para arrancar más rápido. Recursos privados con Tailscale u OIDC. Pregunta para el público: ¿quién compró una Mac Mini o un VPS solo para tener agentes corriendo?",
    render: (n) => (
      <>
        <Eyebrow>Codex Cloud</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Cierra la laptop. El agente <Mark delay={0.9}>sigue trabajando</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} title="Donde quieras" text="Empieza en el celular, sigue en el desktop." />
            <Card i={3} tone={tone.green} title="Setup automático" text="Detecta dependencias y escribe su skill de arranque." />
            <Card i={4} tone={tone.lilac} title="Arranque rápido" text="Snapshots del filesystem y updates en segundo plano." />
            <Card i={5} tone={tone.sand} title="Recursos privados" text="Tailscale y OIDC, sin exponerlos a internet." />
          </div>
        </div>
        <Foot left="¿Quién compró una Mac Mini solo para tener agentes corriendo?" right={n} />
      </>
    ),
  },
  {
    id: "cli",
    dark: true,
    notes: "El Codex CLI se renovó. Interfaz a pantalla completa. Modo voz bidireccional con GPT Live: le dictas tres tareas y arrancan en paralelo. Vista de agentes para filtrar, agrupar y saltar a cada tarea. Fork de la conversación a un worktree nuevo. Control remoto desde el celular. Analíticas de uso, y diagramas Mermaid y LaTeX renderizados en la terminal.",
    render: (n) => (
      <>
        <Eyebrow>Codex CLI</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Para los que viven en la terminal.</R>
          <div className="cards" style={{ ["--n" as string]: 3 }}>
            <Card i={2} title="Voz en la terminal" text="Dictas tres tareas y arrancan en paralelo." />
            <Card i={3} title="Vista de agentes" text="Filtra, agrupa y salta a cualquier tarea." />
            <Card i={4} title="Fork a worktree" text="El mismo contexto, otro checkout." />
            <Card i={5} title="Desde el celular" text="Remote control de tu sesión local." />
            <Card i={6} title="Analíticas" text="Tus chats, plugins y skills más usados." />
            <Card i={7} title="Mermaid y LaTeX" text="Renderizados dentro de la terminal." />
          </div>
        </div>
        <Foot left="Fuente: Meet the New Codex CLI" right={n} />
      </>
    ),
  },
  {
    id: "review-security",
    notes: "Code review como nuevo cuello de botella: Codex trae un inbox con los PRs de GitHub, la primera revisión corre sola y cada PR tiene un chat privado con tus skills y guías. Codex Security Cloud: escanea continuamente, deduplica, programa escaneos y prepara fixes verificados para revisar.",
    render: (n) => (
      <>
        <Eyebrow>Revisión y seguridad</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Si los agentes escriben más código, alguien tiene que <Mark delay={1}>revisarlo</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 2 }}>
            <Card i={2} tone={tone.blue} title="Code review en Codex" text="Inbox de PRs, primera revisión automática y un chat privado por PR con tus guías." />
            <Card i={3} tone={tone.green} title="Codex Security Cloud" text="Escaneos continuos y programados, deduplicación y fixes verificados para revisar." />
          </div>
        </div>
        <Foot left="Code review is no longer the bottleneck · Keynote" right={n} />
      </>
    ),
  },
  {
    id: "s-dots",
    dark: true,
    notes: "Tercer bloque: agentes que están siempre encendidos y que trabajan en equipo.",
    render: (n) => <Section k="03 / Agentes siempre activos" title="De asistente a compañero de equipo." sub="Dots, Space y ChatGPT en Slack y Teams." n={n} />,
  },
  {
    id: "dots",
    notes: "Dots: agentes siempre activos, potenciados por Astra. No les das una tarea, les das una responsabilidad: monitorear reportes de bugs, probar fixes y abrir PRs. Ejemplo real de OpenAI: alguien deja un session ID y un bug en un canal de feedback, el dot de Gabe lo investiga y abre un PR. Sus ingenieros arreglan decenas de bugs al día así. Disponible en Pro, Business Premium y Enterprise; las conversaciones con tu dot no consumen tu uso.",
    render: (n) => (
      <>
        <Eyebrow>Dots</Eyebrow>
        <div className="body" style={{ maxWidth: 1100 }}>
          <R as="h2" i={1}>No le das una tarea. Le das una <Mark delay={0.9}>responsabilidad</Mark>.</R>
          <R i={3} as="p" className="lead">«Monitorea los reportes de bugs, prueba los fixes y abre los PRs.» En OpenAI, los dots ya arreglan <strong>decenas de bugs al día</strong>.</R>
        </div>
        <Foot left="Pro, Business Premium y Enterprise · El chat con tu dot no consume tu uso" right={n} />
        <Faces faces={CORNER} delay={0.5} />
      </>
    ),
  },
  {
    id: "space",
    dark: true,
    notes: "ChatGPT Space: páginas donde trabajan personas y agentes. Cada página puede tener instrucciones propias, como un AGENTS.md para documentos. Tu dot es una extensión tuya, con tu memoria y tus entornos, local y cloud. @ChatGPT en Slack y Teams es para colaborar en un hilo, y solo ve los entornos cloud compartidos.",
    render: (n) => (
      <>
        <Eyebrow>Space · Slack · Teams</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Un lugar donde trabajan personas y agentes.</R>
          <div className="cards" style={{ ["--n" as string]: 3 }}>
            <Card i={2} title="Space" text="Páginas vivas con instrucciones propias: un AGENTS.md para tus documentos." />
            <Card i={3} title="Tu dot" text="Extensión tuya: tu memoria, tus entornos locales y cloud." />
            <Card i={4} title="@ChatGPT" text="Para colaborar en un hilo. Solo ve los entornos cloud compartidos." />
          </div>
        </div>
        <Foot left="From Single Player to Multiplayer with Codex" right={n} />
      </>
    ),
  },
  {
    id: "appshots",
    notes: "Tip de Jason, de Developer Experience: los AppShots. Tomas una captura de cualquier app y se lleva todo el contexto: metadata, URLs, lo que está fuera de pantalla. Cerca del 30% de sus sesiones de Codex empiezan con un AppShot. El agente te encuentra donde estás.",
    render: (n) => (
      <>
        <Eyebrow>Un tip para mañana</Eyebrow>
        <div className="body">
          <div className="display huge"><Words text="30%" /></div>
          <R i={3} as="p" className="lead">de las sesiones de Codex de Jason, de Developer Experience en OpenAI, empiezan con un <strong>AppShot</strong>: una captura que lleva el contexto entero de la app.</R>
        </div>
        <Foot left="El agente te encuentra donde estás" right={n} />
      </>
    ),
  },
  {
    id: "s-builders",
    dark: true,
    notes: "Cuarto bloque, el más importante si quieren monetizar: ChatGPT como plataforma.",
    render: (n) => <Section k="04 / Para builders" title="1.200 millones de personas por semana." sub="ChatGPT ahora es una plataforma para tu producto." n={n} />,
  },
  {
    id: "platform",
    notes: "Sign in with ChatGPT: el usuario entra a tu app y usa los tokens de su plan, tú no pagas su consumo. Plugin extensions: apps completas dentro de ChatGPT y Codex. Descubrimiento dentro de la conversación. Envío de plugins más simple. OpenAI Marketplace: más de 30 partners de lanzamiento, como CodeRabbit, Notion y Vercel; las empresas pueden usar su compromiso con OpenAI para comprar tu producto.",
    render: (n) => (
      <>
        <Eyebrow>Distribución</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Construye una vez. Distribuye en ChatGPT.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} title="Sign in with ChatGPT" text="El usuario trae su plan. Tú no pagas sus tokens." />
            <Card i={3} tone={tone.green} title="Plugin extensions" text="Apps completas, nativas en ChatGPT y Codex." />
            <Card i={4} tone={tone.lilac} title="Descubrimiento" text="ChatGPT sugiere tu plugin en la conversación." />
            <Card i={5} tone={tone.sand} title="Marketplace" text="30+ partners al lanzar, como Notion y Vercel." />
          </div>
        </div>
        <Foot left="Las empresas pueden usar su compromiso con OpenAI para comprar tu producto" right={n} />
      </>
    ),
  },
  {
    id: "more",
    notes: "Rápido, otros anuncios: GPT Live 1 en la API, full duplex, 5 centavos por minuto el modelo de frente. Responses API creció 100x en un año con más de 99% de confiabilidad; time to first token bajó 45% y las tool calls son 30% más rápidas. Private Intelligence en preview: ZDR con procesamiento de seguridad privado. Planes: Pro 500 con 25x el uso de Plus y Ultrafast; vuelve Pro 200.",
    render: (n) => (
      <>
        <Eyebrow>También</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Más rápido, más privado y en voz.</R>
          <div className="stats">
            <Stat i={2} value="100x" label="crecimiento de la Responses API en un año" />
            <Stat i={3} value="−45%" label="time to first token" />
            <Stat i={4} value="$0.05" label="por minuto, GPT Live 1 en la API" />
            <Stat i={5} value="25x" label="el uso de Plus en el nuevo Pro 500" />
          </div>
        </div>
        <Foot left="Además: OpenAI Private Intelligence en preview · Vuelve Pro 200" right={n} />
      </>
    ),
  },
  {
    id: "try",
    dark: true,
    notes: "El cierre de la charla de Dominic, Codex Has Left The Laptop: tres cosas para probar. Uno, Codex Cloud si dejas la laptop entreabierta. Dos, Space si copias planes entre docs y Codex. Tres, dale a tu dot una responsabilidad que hoy haces a mano.",
    render: (n) => (
      <>
        <Eyebrow>Si te llevas tres cosas</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Pruébalo esta semana.</R>
          <div className="cards">
            <Card i={2} num="01" title="Codex Cloud" text="Si todavía dejas la laptop entreabierta para que el agente siga." />
            <Card i={3} num="02" title="Space" text="Si copias planes entre docs y Codex." />
            <Card i={4} num="03" title="Tu dot" text="Dale una responsabilidad que hoy haces a mano." />
          </div>
        </div>
        <Foot left="Dominic, Developer Experience en OpenAI" right={n} />
      </>
    ),
  },
  {
    id: "s-build",
    dark: true,
    notes: "Pasamos a construir. Primero una demo en vivo con Codex, después ustedes.",
    render: (n) => <Section k="05 / Build session" title="You can just ship things." sub="Demo en vivo y luego construyen ustedes." n={n} />,
  },
  {
    id: "rules",
    notes: "Reglas simples. Idea chica que puedas mostrar hoy. Codex hace el trabajo; tú diriges y verificas. Al final, demo de dos minutos. Pidan ayuda a los facilitadores.",
    render: (n) => (
      <>
        <Eyebrow>Cómo funciona</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Una idea chica. Un demo que funcione.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.blue} num="01" title="Elige" text="Algo que puedas mostrar hoy." />
            <Card i={3} tone={tone.green} num="02" title="Dirige" text="Codex ejecuta. Tú defines y revisas." />
            <Card i={4} tone={tone.lilac} num="03" title="Verifica" text="Que funcione de verdad, no que lo diga." />
            <Card i={5} tone={tone.sand} num="04" title="Muestra" text="Dos minutos al final." />
          </div>
        </div>
        <Foot left="¿Te trabas? Levanta la mano, los facilitadores te ayudan" right={n} />
      </>
    ),
  },
  {
    id: "cierre",
    dark: true,
    notes: "Cierre: las sesiones están en openai.com/devday/2026. Únanse a Crafter Station en crafters.chat. Para hablar conmigo, railly.dev/meet. Esta presentación también la hicieron agentes y es open source.",
    render: (n) => (
      <>
        <Faces faces={CORNER} delay={0.3} />
        <Eyebrow>Gracias</Eyebrow>
        <div className="body">
          <h2><Words text="Sigan construyendo." /></h2>
          <R i={4} className="links" >
            <div><small>Las sesiones</small><span style={{ fontSize: 40 }}>openai.com/devday/2026</span></div>
            <div><small>La comunidad</small><span style={{ fontSize: 40 }}>crafters.chat</span></div>
            <div><small>Hablemos</small><span style={{ fontSize: 40 }}>railly.dev/meet</span></div>
          </R>
          <R i={6} as="p" className="lead">Esta presentación la hicieron agentes. Código: <strong>github.com/Railly/talks</strong></R>
        </div>
        <Foot left="DevDay Exchange Community: Lima" right={n} />
      </>
    ),
  },
];
