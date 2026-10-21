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
    render: (n) => <Section k="Agentes siempre activos" title="Unos 20 lanzamientos en un día." sub="Empezamos por el que abrió el keynote: Dots." n={n} />,
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
    notes: "Ultrafast: hasta 8x más rápido generando tokens en Codex y hasta 6x en la API, unos 300 tokens por segundo. Útil cuando la velocidad de iteración es lo que más importa. En Work y Codex está en Pro 500 y Enterprise/Edu elegibles. Hoy con Astra, Sol Ultrafast llega pronto.",
    render: (n) => (
      <>
        <Eyebrow>Velocidad</Eyebrow>
        <div className="body">
          <div className="display huge"><Words text="300 tokens" /><br /><span className="hl"><Words text="por segundo." i={2} /></span></div>
          <div className="cards">
            <Card i={5} title="Codex" text="Hasta 8x más rápido generando tokens." />
            <Card i={6} title="API" text="Hasta 6x más rápido generando tokens." />
            <Card i={7} title="Acceso" text="Pro 500 y Enterprise/Edu elegibles en Work y Codex." />
          </div>
        </div>
        <Foot left="Hoy con Astra, GPT-6.1 Sol Ultrafast llega pronto" right={n} />
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
    render: (n) => <Section k="Codex" title="Codex dejó la laptop." sub="Cloud, un CLI nuevo, revisión de código y seguridad." n={n} />,
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
    render: (n) => <Section k="Para builders" title="1.200 millones de personas por semana." sub="ChatGPT ahora es una plataforma para tu producto." n={n} />,
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
            <Card i={3} tone={tone.green} title="Plugin extensions" text="Barra lateral, paneles y visores de archivos." />
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
        <Foot left="Además: vuelve Pro 200" right={n} />
      </>
    ),
  },
  {
    id: "try",
    dark: true,
    notes: "El cierre de la charla de Dominic, Codex Has Left The Laptop: tres cosas para probar. Uno, Codex Cloud si dejas la laptop entreabierta. Dos, el Codex CLI: vista de agentes y fork a worktree. Tres, dale a tu dot una responsabilidad que hoy haces a mano.",
    render: (n) => (
      <>
        <Eyebrow>Si te llevas tres cosas</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Pruébalo esta semana.</R>
          <div className="cards">
            <Card i={2} num="01" title="Codex Cloud" text="Si todavía dejas la laptop entreabierta para que el agente siga." />
            <Card i={3} num="02" title="Codex CLI" text="Vista de agentes y fork a worktree en tu próximo proyecto." />
            <Card i={4} num="03" title="Tu dot" text="Dale una responsabilidad que hoy haces a mano." />
          </div>
        </div>
        <Foot left="Basado en Codex Has Left The Laptop" right={n} />
      </>
    ),
  },
  {
    id: "s-build",
    dark: true,
    notes: "Pasamos a construir. Primero una demo en vivo con Codex, después ustedes.",
    render: (n) => <Section k="Build session" title="You can just ship things." sub="Demo en vivo y luego construyen ustedes." n={n} />,
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
    notes: "Cierre: todos los anuncios están en openai.com/index/devday-2026-recap; guías en developers.openai.com y learn.chatgpt.com. Únanse a Crafter Station en crafters.chat. Para hablar conmigo, railly.dev/meet. Esta presentación también la hicieron agentes y es open source.",
    render: (n) => (
      <>
        <Faces faces={CORNER} delay={0.3} />
        <Eyebrow>Gracias</Eyebrow>
        <div className="body">
          <h2><Words text="Sigan construyendo." /></h2>
          <R i={4} className="links" >
            <div><small>Todos los anuncios</small><span style={{ fontSize: 40 }}>openai.com/index/devday-2026-recap</span></div>
            <div><small>La comunidad</small><span style={{ fontSize: 40 }}>crafters.chat</span></div>
            <div><small>Hablemos</small><span style={{ fontSize: 40 }}>railly.dev/meet</span></div>
          </R>
          <R i={5} as="p" className="lead">Guías: <strong>developers.openai.com</strong> · <strong>learn.chatgpt.com</strong></R>
          <R i={6} as="p" className="lead">Esta presentación la hicieron agentes. Código: <strong>github.com/Railly/talks</strong></R>
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
    notes: "Abrir con energía: el video Codex Originals. «Estos son los builders, los makers de nuestro tiempo». Dejarlo correr unos segundos sin hablar.",
    render: () => <Full clip="originals" title="These are the builders." sub="Los makers de nuestro tiempo. Eso son ustedes esta noche." src="Codex Originals · OpenAI" />,
  },
  {
    id: "community",
    notes: "Del video Building the Codex community. El programa empezó con la idea de tener 15 a 20 ambassadors. Hoy son más de 150 en más de 80 países, con más de 300 eventos. En Build Week hubo más de 60 eventos en una semana. Su evento favorito: los ambassadors de Kochi, India, que hicieron un evento de Codex en un metro en movimiento. Hoy Lima se suma a esa lista.",
    render: (n) => (
      <>
        <Eyebrow>La comunidad Codex</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>De 15 ambassadors a más de 150.</R>
          <div className="stats" style={{ flexWrap: "wrap", rowGap: 28 }}>
            <R i={2} className="stat"><b>150+</b><span>ambassadors</span></R>
            <R i={3} className="stat"><b>80+</b><span>países</span></R>
            <R i={4} className="stat"><b>300+</b><span>eventos</span></R>
          </div>
          <R i={5} as="p" className="lead">Hasta un evento de Codex en un metro en movimiento, en Kochi. Hoy se suma <strong>Lima</strong>.</R>
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
    notes: "El anuncio con el que abrió el keynote: Dots. «Piensen en esa IA del futuro que imaginaban: sabe qué pasa, sabe qué te importa, no tienes que decirle cada cosa».",
    render: () => <Full clip="dots-stage" title="«Today, we're introducing Dots.»" sub="Agentes siempre activos, con su propia identidad." src={KEY} />,
  },
  {
    id: "dots-alf",
    notes: "El video de lanzamiento de Dots. «Hey, I'm your dot. Te voy a llamar Alfred.» Le pone nombre y avatar, y el dot sigue con la web, el deck del board, la migración de la app y hasta el pastel de una boda.",
    render: () => <Full clip="dots-alf" title="«I'm gonna call you Alfred.»" sub="Le pones nombre, avatar y responsabilidades." src="Introducing dots" />,
  },
  {
    id: "dots-mobile",
    notes: "Dots también en móvil, iOS y Android. Se configura solo: botón Meet Dot, le das acceso a calendario y correo, y tiene su propia computadora y acceso a la tuya. En la demo le pide por voz que prototipe un widget de iOS.",
    render: (n) => (
      <>
        <Eyebrow>Dots en el celular</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Lo llamas por voz y prototipa.</R>
          <R i={2} as="p" className="lead">iOS y Android. Tu dot tiene su propia computadora y acceso a la tuya. En la demo, le pide un <strong>widget de iOS</strong> por llamada.</R>
        </div>
        <Foot left="Set up your dot in the ChatGPT mobile app" right={n} />
        <Side clip="dots-mobile" src="ChatGPT mobile" />
      </>
    ),
  },
  {
    id: "space-video",
    dark: true,
    notes: "ChatGPT Space en acción: le pide a ChatGPT que junte todo el chat en una página con prioridades y decisiones, la comparte con Vic de marketing y editan en tiempo real. Tu chat queda privado; la página es compartida.",
    render: () => <Full clip="space-video" title="Del chat a una página compartida." sub="Prioridades, decisiones y pendientes, editados en tiempo real por personas y ChatGPT." src="Work with your team in ChatGPT Space" />,
  },
  {
    id: "single-player",
    dark: true,
    notes: "Jason, en From Single Player to Multiplayer: hace seis meses él era el pegamento de todo. Un super IC que micromaneja agentes. Su meta ahora es que el equipo entero avance, no solo él.",
    render: () => <Full clip="single-player" title="Hace seis meses: single player." sub="«Era el pegamento de todos estos sistemas, y el cuello de botella.»" src="From Single Player to Multiplayer" />,
  },
  {
    id: "three-acts",
    notes: "Sus tres actos: 1, juntar el contexto (escritorio, navegador, Slack, la cabeza de tus compañeros). 2, mantener el trabajo en movimiento. 3, compartirlo con el equipo y subirles el nivel.",
    render: (n) => (
      <>
        <Eyebrow>Multiplayer, en tres actos</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Contexto, movimiento, equipo.</R>
          <div className="cards">
            <Card i={2} tone={tone.blue} num="01" title="Juntar el contexto" text="Escritorio, navegador, Slack y la cabeza de tu equipo." />
            <Card i={3} tone={tone.green} num="02" title="Mantenerlo en movimiento" text="Automatizaciones y un dot que hace seguimiento." />
            <Card i={4} tone={tone.lilac} num="03" title="Compartirlo" text="Skills y plugins que el equipo reutiliza." />
          </div>
        </div>
        <Foot left="Jason, Developer Experience en OpenAI" right={n} />
      </>
    ),
  },
  {
    id: "page-instructions",
    dark: true,
    notes: "Page instructions: un AGENTS.md para tus documentos. Defines cómo se actualiza cada página, y así los agentes de todos tus compañeros pueden contribuir sin hacer un desastre.",
    render: () => <Full clip="page-instructions" title="Un AGENTS.md para tus documentos." sub="Así los agentes de todo el equipo contribuyen sin romper nada." src="From Single Player to Multiplayer" />,
  },
  {
    id: "champions",
    notes: "How OpenAI Puts ChatGPT to Work: entrevistaron a los usuarios más intensivos de ChatGPT Work dentro de OpenAI. Ejemplo: un dot revisó 90 días de transcripciones de llamadas de venta y encontró razones de deals perdidos que no estaban en el CRM.",
    render: (n) => (
      <>
        <Eyebrow>ChatGPT Work</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>90 días de llamadas, en una tarde.</R>
          <R i={2} as="p" className="lead">Un dot revisó 90 días de transcripciones de ventas y encontró por qué se perdían deals. <strong>Eso no estaba en el CRM.</strong></R>
        </div>
        <Foot left="How OpenAI Puts ChatGPT to Work" right={n} />
        <Side clip="champions" src="Power users en OpenAI" />
      </>
    ),
  },
  {
    id: "s-models",
    dark: true,
    notes: "Bloque de modelos, velocidad y costo.",
    render: (n) => <Section k="Modelos y costo" title="Más inteligente, más rápido, más barato." sub="GPT-6.1 Sol, Ultrafast y cómo dejar de pagar de más." n={n} />,
  },
  {
    id: "ultrafast-stage",
    dark: true,
    notes: "Ultrafast en el escenario.",
    render: () => <Full clip="ultrafast-stage" title="Ultrafast." sub="En Codex, ChatGPT Work y la API." src={KEY} />,
  },
  {
    id: "ultrafast-compare",
    notes: "Comparación lado a lado: misma tarea, standard contra ultrafast. Pedirle al público que mire cuál termina primero.",
    render: (n) => (
      <>
        <Eyebrow>Lado a lado</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>La misma tarea. ¿Cuál termina primero?</R>
          <Duo items={[{ clip: "ultrafast-rocket", title: "Keynote", text: "Un cohete generado con y sin Ultrafast." }, { clip: "ultrafast-car", title: "Demo", text: "Standard contra Ultrafast en una simulación." }]} />
        </div>
        <Foot left="Ultrafast, now in the API, ChatGPT Work and Codex" right={n} />
      </>
    ),
  },
  {
    id: "pro500",
    dark: true,
    notes: "Pro 500: el plan con más uso, 25 veces Plus, con Ultrafast y uso en apps de partners con Sign in with ChatGPT. Vuelve Pro 200.",
    render: () => <Full clip="pro500" title="Pro 500: 25x el uso de Plus." sub="Con Ultrafast. Y vuelve Pro 200." src={KEY} />,
  },
  {
    id: "cost-per-task",
    notes: "Stop Overpaying for Intelligence. Error número uno: mirar el precio por token. Lo que importa es el costo por tarea. Un modelo barato puede gastar más tokens o no terminar, y entonces una persona tiene que intervenir. Ejemplo del chatbot de aerolínea que terminó en un humano. Perplexity: Astra fue 9% más preciso a la mitad de costo. Notion: al migrar a 5.6 Sol, mejor precisión y la mitad del costo por tarea.",
    render: (n) => (
      <>
        <Eyebrow>Stop overpaying for intelligence</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Mide el costo por <Mark delay={0.9}>tarea</Mark>, no por token.</R>
          <div className="cards">
            <Card i={2} tone={tone.sand} title="El chatbot barato" text="No resolvió el caso y terminó en una persona. El costo real incluye al humano." />
            <Card i={3} tone={tone.blue} title="Perplexity" text="Con Astra, 9% más preciso a la mitad del costo." />
            <Card i={4} tone={tone.green} title="Notion" text="Al migrar a 5.6 Sol, mejor precisión y la mitad del costo por tarea." />
          </div>
        </div>
        <Foot left="Equipo de AI Deployment Engineering, OpenAI" right={n} />
      </>
    ),
  },
  {
    id: "levers",
    dark: true,
    notes: "Cuatro palancas más allá del modelo. 1, prompt caching para el texto repetido. 2, programmatic tool calling: un programa coordina las tools y devuelve un resumen; Clio redujo 38% los prompt tokens sin perder calidad. 3, reasoning effort: empieza bajo en tareas rutinarias y mide con evals. 4, Batch: ventana de 24 horas a 50% menos. Y Luna maxing: con reasoning alto, Luna le gana a modelos más grandes de generaciones anteriores.",
    render: (n) => (
      <>
        <Eyebrow>Cuatro palancas</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Antes de cambiar de modelo, prueba esto.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} num="01" title="Prompt caching" text="Reutiliza el texto que se repite." />
            <Card i={3} num="02" title="Tool calling programático" text="Clio: 38% menos prompt tokens." />
            <Card i={4} num="03" title="Reasoning effort" text="Empieza bajo y mide con evals." />
            <Card i={5} num="04" title="Batch" text="24 horas de espera, 50% menos." />
          </div>
        </div>
        <Foot left="Y prueba «Luna maxing»: Luna con reasoning alto" right={n} />
      </>
    ),
  },
  {
    id: "s-apis",
    dark: true,
    notes: "Bloque de APIs para construir.",
    render: (n) => <Section k="APIs" title="Lo que puedes construir desde mañana." sub="Decisions, Agents, GPT Live y la plataforma." n={n} />,
  },
  {
    id: "decisions-demo",
    notes: "La demo de Decisions API: le dan frames de una carretera y decide si el auto se queda en su carril o va a la izquierda o derecha. Aunque suban la velocidad, sigue esquivando, en una fracción del tiempo de un modelo de razonamiento.",
    render: (n) => (
      <>
        <Eyebrow>Decisions API · Demo</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Izquierda, centro o derecha.</R>
          <R i={2} as="p" className="lead">Le pasan frames de la carretera y elige el carril. <strong>Sin acelerar el video.</strong></R>
        </div>
        <Foot left="Introducing the Decisions API" right={n} />
        <Side clip="decisions-driving" src="Decisions API" />
      </>
    ),
  },
  {
    id: "decisions-more",
    notes: "Más casos: leads de ventas clasificados en menos de 100 ms; un personaje que elige su expresión mientras GPT Live 1 habla; y un robot de Hugging Face.",
    render: (n) => (
      <>
        <Eyebrow>Decisions API · Casos</Eyebrow>
        <div className="body">
          <Duo three items={[{ clip: "decisions-sales", title: "Ventas", text: "Leads clasificados en menos de 100 ms." }, { clip: "decisions-frog", title: "Voz", text: "La expresión del personaje mientras habla." }, { clip: "decisions-robot", title: "Robótica", text: "Un robot programable de Hugging Face." }]} />
        </div>
        <Foot left="Introducing the Decisions API" right={n} />
      </>
    ),
  },
  {
    id: "agents-harness",
    notes: "Agents API: tu app habla con el harness hospedado, y el harness con el sandbox que elijas. Ejemplo: un agente que investiga incidentes en producción con MCPs de observabilidad y una skill con el runbook.",
    render: (n) => (
      <>
        <Eyebrow>Agents API · Arquitectura</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Tu app, el harness, tu sandbox.</R>
          <R i={2} as="p" className="lead">OpenAI maneja orquestación, sesiones y contexto. Tú eliges herramientas por <strong>MCP</strong>, instrucciones con <strong>skills</strong> y dónde corre.</R>
        </div>
        <Foot left="Introducing the Agents API" right={n} />
        <Side clip="agents-harness" src="Agents API" />
      </>
    ),
  },
  {
    id: "ptc",
    dark: true,
    notes: "El número que más me impactó: con tool calls directos, 170.126 tokens de resultados entraron al modelo. Con programmatic tool calling, 11. El modelo filtra los logs en código en vez de leerlos todos.",
    render: (n) => (
      <>
        <Eyebrow>Programmatic tool calling</Eyebrow>
        <div className="body">
          <div className="stats" style={{ gap: 120 }}>
            <R i={1} className="stat"><b style={{ fontSize: 150 }}>170.126</b><span>tokens con tool calls directos</span></R>
            <R i={3} className="stat"><b style={{ fontSize: 150 }} className="hl">11</b><span>tokens con programmatic tool calling</span></R>
          </div>
          <R i={5} as="p" className="lead">El agente filtra los logs en código. El modelo solo lee lo que importa.</R>
        </div>
        <Foot left="Introducing the Agents API" right={n} />
      </>
    ),
  },
  {
    id: "gpt-live",
    notes: "GPT Live 1 en la API: full duplex, escucha y habla al mismo tiempo, aguanta ruido e interrupciones, y delega razonamiento y tools a un modelo de backend. Cinco centavos por minuto el modelo de frente; el backend se cobra aparte.",
    render: (n) => (
      <>
        <Eyebrow>GPT Live 1 · En la API</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Escucha y habla al mismo tiempo.</R>
          <Duo three items={[{ clip: "live-board", title: "Full duplex", text: "Aguanta ruido e interrupciones." }, { clip: "live-wave", title: "Frontend y backend", text: "Delega tools y razonamiento." }, { clip: "live-price", title: "$0.05 por minuto", text: "El modelo de frente." }]} />
        </div>
        <Foot left="GPT-Live-1 is now in the API" right={n} />
      </>
    ),
  },
  {
    id: "aws",
    dark: true,
    notes: "Bedrock Managed Agents powered by OpenAI: construyes agentes de OpenAI dentro de AWS, junto a tus datos. También Astra, Ultrafast, Codex y ChatGPT Work para clientes de AWS.",
    render: () => <Full clip="aws" title="OpenAI dentro de AWS." sub="Bedrock Managed Agents, Astra con Ultrafast, Codex y ChatGPT Work." src={KEY} />,
  },
  {
    id: "features-300",
    dark: true,
    notes: "Dominic abrió Codex Has Left the Laptop así: más de 300 features de Codex en el último año. Es imposible seguirles el ritmo, por eso esta charla.",
    render: () => <Full clip="features-300" title="300+ features de Codex en un año." sub="Imposible seguirles el ritmo. Por eso estamos aquí." src="Codex Has Left The Laptop" />,
  },
  {
    id: "macmini",
    dark: true,
    notes: "Pregunta al público, a mano alzada: ¿quién compró una Mac Mini, una Raspberry Pi o un VPS solo para tener agentes corriendo? Más máquinas significa más mantenimiento: setup, updates, disco.",
    render: () => <Full clip="macmini" title="¿Quién compró una Mac Mini para sus agentes?" sub="Setup, updates, espacio en disco. Más máquinas, más mantenimiento." src="Codex Has Left The Laptop" />,
  },
  {
    id: "cloud-stage",
    dark: true,
    notes: "La respuesta: Codex en la nube.",
    render: () => <Full clip="cloud-stage" title="Codex, en la nube." src={KEY} />,
  },
  {
    id: "cloud-demo",
    notes: "En el composer eliges dónde trabaja: esta computadora, cloud o remoto. El onboarding del entorno es un chat: investiga qué necesita el repo, red, variables y secretos. Queda un snapshot reutilizable para todo el equipo.",
    render: (n) => (
      <>
        <Eyebrow>Codex Cloud · Demo</Eyebrow>
        <div className="body">
          <Duo items={[{ clip: "cloud-workin", title: "Elige dónde", text: "Esta computadora, cloud o remoto." }, { clip: "cloud-env", title: "Entorno por chat", text: "Red, variables y secretos. Queda un snapshot." }]} />
        </div>
        <Foot left="Meet the all new Codex Cloud" right={n} />
      </>
    ),
  },
  {
    id: "cloud-phone",
    dark: true,
    notes: "«Ya no necesito dejar esto abierto»: cierra la laptop y la tarea sigue. La retoma desde el celular, incluso por voz mientras camina.",
    render: () => <Full clip="cloud-phone" title="Cierra la laptop. Sigue desde el celular." sub="Incluso por voz, mientras caminas." src="Meet the all new Codex Cloud" />,
  },
  {
    id: "shader",
    notes: "Ejemplo de Dominic: mandó un AppShot de un shader diseñado en Figma a su entorno cloud. Codex lo implementó con el plugin de Figma, lo probó y armó un playground desplegado para ajustarlo.",
    render: (n) => (
      <>
        <Eyebrow>Codex Cloud · Un caso</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>De Figma a un shader, en la nube.</R>
          <R i={2} as="p" className="lead">Un AppShot del diseño, el plugin de Figma y un <strong>playground desplegado</strong> para ajustarlo.</R>
        </div>
        <Foot left="Codex Has Left The Laptop" right={n} />
        <Side clip="shader" src="Codex Has Left The Laptop" />
      </>
    ),
  },
  {
    id: "cli-stage",
    dark: true,
    notes: "El Codex CLI renovado, en vivo en el keynote: «construye una app que elija tres asistentes al azar para darles entradas gratis el próximo año». Con Ultrafast, listo en segundos.",
    render: () => <Full clip="cli-stage" title="El CLI, renovado y en vivo." sub="Una app para sortear entradas entre asistentes, en segundos." src={KEY} />,
  },
  {
    id: "cli-demo",
    notes: "Del video Meet the New Codex CLI: la vista de agentes con todas las tareas, y el control remoto desde el celular para ver progreso y responder preguntas lejos del teclado.",
    render: (n) => (
      <>
        <Eyebrow>Codex CLI · Demo</Eyebrow>
        <div className="body">
          <Duo items={[{ clip: "cli-agents", title: "Agent command center", text: "Filtra, agrupa y salta a cualquier tarea." }, { clip: "cli-phone", title: "Remote control", text: "Tus tareas locales, desde el celular." }]} />
        </div>
        <Foot left="Meet the New Codex CLI" right={n} />
      </>
    ),
  },
  {
    id: "review-demo",
    notes: "Code review: un inbox con los PRs de todos tus repos, la primera pasada automática y un chat privado por PR. Puedes personalizar cómo revisa: resumen corto y análisis de riesgo.",
    render: (n) => (
      <>
        <Eyebrow>Code review en Codex</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>La revisión ya no es el cuello de botella.</R>
          <R i={2} as="p" className="lead">Inbox de PRs, primera pasada automática y un chat privado por PR con tus guías. GitHub hoy, merge requests de GitLab en preview.</R>
        </div>
        <Foot left="Code review is no longer the bottleneck" right={n} />
        <Side clip="review-inbox" src="Codex code review" />
      </>
    ),
  },
  {
    id: "security",
    dark: true,
    notes: "Codex Security Cloud: escanea continuamente, deduplica y prepara fixes verificados. Escaneos programados e interfaz nueva.",
    render: () => <Full clip="security-cloud" title="Codex Security Cloud." sub="Encuentra vulnerabilidades y prepara fixes verificados para que los revises." src={KEY} />,
  },
  {
    id: "grafana",
    notes: "Production Monitoring with Codex: son las 3 a.m., los errores de checkout suben a casi 20%. Codex con una skill junta la evidencia de Grafana, Kubernetes y el código, propone el fix y tú apruebas. El error vuelve a 0, sin hacer rollback: siguen en V2.",
    render: (n) => (
      <>
        <Eyebrow>Codex en producción</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>3 a.m. Errores al 20%.</R>
          <R i={2} as="p" className="lead">Codex junta la evidencia, propone el fix y tú apruebas. Error en 0, <strong>sin rollback</strong>.</R>
        </div>
        <Foot left="Production Monitoring with Codex" right={n} />
        <Side clip="grafana" src="Grafana + Codex" />
      </>
    ),
  },
  {
    id: "s-eco",
    dark: true,
    notes: "Bloque de ecosistema: open source, partners y cómo distribuir lo que construyas.",
    render: (n) => <Section k="Ecosistema" title="Open source, partners y distribución." sub="Lo que otros están construyendo encima." n={n} />,
  },
  {
    id: "openclaw",
    dark: true,
    notes: "ClawLabs, con Peter, el creador de OpenClaw: plataforma open source de agentes persistentes, de la OpenClaw Foundation, una nonprofit independiente que OpenAI apoya. Su concepto: no seas un meat proxy, el humano que solo pasa mensajes entre la IA y el equipo. Hicieron visibles las sesiones de todo el equipo: incómodo un día, después normal. «Show me the prompt.»",
    render: () => <Full clip="openclaw-peter" title="«Let's not be a meat proxy.»" sub="OpenClaw: sesiones visibles para todo el equipo. «Show me the prompt.»" src="ClawLabs: Building Open Source Together" />,
  },
  {
    id: "jellyware",
    notes: "Otra idea de Peter: los dashboards son una sesión que genera un artefacto y una automatización que lo actualiza. Iteramos tan rápido que ya no es software, es jellyware. Y su tesis: los modelos mejoran tan rápido que los flujos de hace seis meses ya se sienten viejos, hasta el CI.",
    render: (n) => (
      <>
        <Eyebrow>OpenClaw</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>¿Software? <Mark delay={0.9}>Jellyware</Mark>.</R>
          <R i={2} as="p" className="lead">Un dashboard es una sesión que genera un artefacto y una automatización que lo actualiza. <strong>Lo cambias con una frase.</strong></R>
        </div>
        <Foot left="ClawLabs: Building Open Source Together" right={n} />
        <Side clip="openclaw-server" src="OpenClaw" />
      </>
    ),
  },
  {
    id: "partners",
    notes: "Sesiones de partners. Qodo, «el mejor amigo de Codex»: junta el conocimiento tribal del equipo para darle contexto a Codex y revisar lo que escribe. Stack Overflow: Stack Internal y Stack Overflow for Agents, donde no solo humanos sino agentes interactúan. Higgsfield: agentes que eligen modelos y levantan GPUs; un stream interactivo pasó de 2 a más de 10 horas.",
    render: (n) => (
      <>
        <Eyebrow>Partners en DevDay</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Construyendo encima de Codex.</R>
          <div className="cards">
            <Card i={2} tone={tone.lilac} title="Qodo" text="El contexto tribal del equipo, para generar y revisar con Codex." />
            <Card i={3} tone={tone.sand} title="Stack Overflow" text="Stack Internal y Stack Overflow for Agents." />
            <Card i={4} tone={tone.green} title="Higgsfield" text="Agentes que eligen modelos y levantan su propio cómputo." />
          </div>
        </div>
        <Foot left="Sesiones de partners, DevDay 2026" right={n} />
      </>
    ),
  },
  {
    id: "plugins-demo",
    notes: "Plugin extensions: tu producto con un hogar en la barra lateral o un panel junto a la conversación. Code review y Meetings ya están hechos con este mismo sistema. Ejemplo: un editor de diseño donde seleccionas un elemento y le pides a ChatGPT otro layout.",
    render: (n) => (
      <>
        <Eyebrow>Plugin extensions</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Tu producto, dentro de ChatGPT.</R>
          <R i={2} as="p" className="lead">Un hogar en la barra lateral o un panel junto al chat. <strong>Code review y Meetings</strong> ya usan este sistema.</R>
        </div>
        <Foot left="Build Plugins for ChatGPT" right={n} />
        <Side clip="plugin-sidebar" src="Plugin extensions" />
      </>
    ),
  },
  {
    id: "marketplace",
    dark: true,
    notes: "OpenAI Marketplace: más de 30 partners al lanzar, como CodeRabbit, Notion y Vercel. Las empresas pueden usar parte de su compromiso con OpenAI para comprar tu producto.",
    render: () => <Full clip="marketplace" title="OpenAI Marketplace." sub="30+ partners al lanzar. Las empresas compran con su compromiso con OpenAI." src={KEY} />,
  },
  {
    id: "pages",
    notes: "Pages: un documento vivo donde escribes, investigas y creas gráficos e imágenes con IA. Los compañeros aportan ideas y feedback en el mismo lugar. Pro, Business y Enterprise.",
    render: (n) => (
      <>
        <Eyebrow>Pages</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Un documento vivo, con IA adentro.</R>
          <R i={2} as="p" className="lead">Escribe, investiga, crea gráficos e imágenes en una página. Invita al equipo a comentar y aportar en el mismo lugar.</R>
        </div>
        <Foot left="Pro, Business y Enterprise" right={n} />
        <Side clip="/img/official/pages.jpg" src="Pages · OpenAI" />
      </>
    ),
  },
  {
    id: "team-work",
    notes: "Tres anuncios de trabajo en equipo. Slides colaborativos: arrancas desde una conversación o un template, editan y comentan juntos personas y agentes, y exportas a PowerPoint o Google Slides; coming soon. Teams y tareas compartidas: compartes pages, plugins, slides y hojas de cálculo, y defines tareas recurrentes cuyas instrucciones el equipo refina; Business y Enterprise. Meetings plugin: notas y resúmenes con action items en Space, el audio se borra cuando las notas están listas; beta en macOS para Pro y Business.",
    render: (n) => (
      <>
        <Eyebrow>ChatGPT Work en equipo</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>El trabajo recurrente, como flujo del equipo.</R>
          <Duo three items={[{ clip: "/img/official/slides.jpg", title: "Slides colaborativos", text: "Desde un chat o template. Exporta a PowerPoint y Google Slides." }, { clip: "/img/official/tasks.jpg", title: "Tareas compartidas", text: "Recurrentes, con instrucciones que el equipo ajusta." }, { clip: "/img/official/meetings.jpg", title: "Meetings", text: "Notas y action items en Space. El audio se borra." }]} />
        </div>
        <Foot left="Slides: coming soon · Tasks: Business y Enterprise · Meetings: beta en macOS" right={n} />
      </>
    ),
  },
  {
    id: "plugin-creator",
    notes: "Plugin Creator ayuda a ensamblar tu plugin. El flujo de envío se rediseñó con feedback más claro. Y hay más formas de que la gente lo descubra. Los usuarios eligen sus plugins y aprueban el acceso de cada uno.",
    render: (n) => (
      <>
        <Eyebrow>Plugins</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>De la idea al descubrimiento.</R>
          <R i={2} as="p" className="lead"><strong>Plugin Creator</strong> te ayuda a armarlo, el envío nuevo da feedback más claro y la gente lo encuentra en ChatGPT. Cada usuario aprueba el acceso que recibe.</R>
        </div>
        <Foot left="Crear, enviar, descubrir" right={n} />
        <Side clip="/img/official/plugins.jpg" src="Build and discover plugins" />
      </>
    ),
  },
  {
    id: "mcp-events",
    notes: "MCP events: los eventos de plugins disparan automatizaciones cuando cambian las apps conectadas. Un mensaje nuevo o un comentario en un documento arranca el flujo que definas. Para builders de MCP esto es clave: tu servidor ya no solo responde, también despierta al agente.",
    render: (n) => (
      <>
        <Eyebrow>MCP events</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Que el trabajo arranque cuando algo pasa.</R>
          <R i={2} as="p" className="lead">Un mensaje nuevo o un comentario en un doc dispara la automatización que definas. Eventos de plugins, en Work y en tu dot.</R>
        </div>
        <Foot left="Work en web, cloud y desktop · dots" right={n} />
        <Side clip="/img/official/mcp-events.jpg" src="MCP events" />
      </>
    ),
  },
  {
    id: "sites",
    notes: "Sites con plugins conectados: armas herramientas compartidas sin dar a todos el mismo acceso a datos, cada uno conecta sus cuentas. Por ahora las herramientas conectadas son de solo lectura. Perfiles compartibles: juntan tus Sites y tu actividad para que otros descubran lo que construiste; web y desktop.",
    render: (n) => (
      <>
        <Eyebrow>Sites y perfiles</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Una app compartida, con los datos de cada uno.</R>
          <Duo items={[{ clip: "/img/official/sites.jpg", title: "Sites con plugins conectados", text: "Cada compañero conecta sus cuentas y permisos." }, { clip: "/img/official/profiles.jpg", title: "Perfiles compartibles", text: "Tus Sites y tu actividad en un solo lugar." }]} />
        </div>
        <Foot left="Sites: Business, Enterprise, Healthcare y Edu, solo lectura por ahora" right={n} />
      </>
    ),
  },
  {
    id: "private",
    notes: "Private Intelligence. Private Safety Processing: revisiones de seguridad automatizadas sin que personal acceda al contenido. Private Inference: confidential computing con controles verificables, preview planeada para otoño de 2026.",
    render: (n) => (
      <>
        <Eyebrow>Private Intelligence</Eyebrow>
        <div className="body half">
          <R as="h2" i={1}>Más control para datos sensibles.</R>
          <R i={2} as="p" className="lead"><strong>Private Safety Processing:</strong> revisiones automáticas sin que nadie vea el contenido. <strong>Private Inference:</strong> confidential computing verificable, preview en otoño 2026.</R>
        </div>
        <Foot left="Para evaluar IA de frontera con requisitos de privacidad" right={n} />
        <Side clip="/img/official/private.jpg" src="Private Intelligence" />
      </>
    ),
  },
];

const blocks: [string, string[]][] = [
  ["Railly", ["portada", "originals", "agenda", "host", "community"]],
  ["Edward", ["s-recap", "dots-stage", "dots", "appshots", "s-builders", "platform", "plugins-demo", "plugin-creator", "mcp-events", "openclaw"]],
  ["Carlos", ["s-models", "sol", "ultrafast-stage", "ultrafast", "levers", "s-apis", "decisions", "decisions-demo", "agents-api", "ptc", "gpt-live"]],
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
