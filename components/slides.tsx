"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Boat, Coffee, Conversation, Cube, Diploma, Hub, Megaphone, Notebook, Orbit, Spark, Stack } from "./art";
import { Logo } from "./logo";
import { EASE, Line, R, Words } from "./motion";

export type Slide = { id: string; dark?: boolean; notes: string; render: (n: string) => ReactNode };

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <R className="eyebrow">
      <i />
      {children}
    </R>
  );
}

function Foot({ left, right }: { left: ReactNode; right?: ReactNode }) {
  return (
    <R className="foot" i={6}>
      <span>{left}</span>
      <span>{right}</span>
    </R>
  );
}

function Mark({ children, delay = 0.7 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="mark">
      <span>{children}</span>
      <Line delay={delay} />
    </span>
  );
}

function Card({ i, tone, num, title, text, art }: { i: number; tone?: string; num?: string; title: string; text: string; art?: ReactNode }) {
  return (
    <R i={i} className={`card ${tone ?? ""}`}>
      {art}
      {num && <span className="num">{num}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </R>
  );
}

function Contours() {
  return (
    <svg className="art" viewBox="0 0 1600 900" style={{ inset: 0, width: "100%", height: "100%" }} fill="none" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, k) => (
        <motion.ellipse
          key={k}
          cx="800"
          cy="250"
          rx={260 + k * 120}
          ry={110 + k * 70}
          stroke="#f8e9a4"
          strokeOpacity={0.12 - k * 0.01}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: EASE, delay: 0.1 + k * 0.08 }}
        />
      ))}
    </svg>
  );
}

const tone = { green: "c-green", blue: "c-blue", lilac: "c-lilac", sand: "c-sand" };

export const slides: Slide[] = [
  {
    id: "portada",
    dark: true,
    notes: "Saludo. Gracias a Ronald y a la organización. Hoy no es una clase de herramientas: es sobre qué tipo de ingeniero conviene llegar a ser ahora que la IA existe.",
    render: (n) => (
      <>
        <Contours />
        <Eyebrow>Semana Industrial · 14 al 16 de octubre de 2026</Eyebrow>
        <div className="body">
          <h1>
            <Words text="La nueva generación de ingenieros." />
          </h1>
          <R i={5} className="lead">
            Pensar, construir e investigar <span className="hl">con IA</span>.
          </R>
        </div>
        <Foot
          left="Railly Hugo · Sala #1 (virtual) · 09:45"
          right={
            <span className="host-logos">
              {/* biome-ignore lint/performance/noImgElement: static logo */}
              <img src="/img/unat.png" alt="UNAT" />
              {/* biome-ignore lint/performance/noImgElement: static logo */}
              <img src="/img/epii.png" alt="Escuela Profesional de Ingeniería Industrial" />
            </span>
          }
        />
        <Orbit size={520} className="art" style={{ right: 60, top: 300, color: "#f8e9a4" }} />
      </>
    ),
  },
  {
    id: "gracias",
    dark: true,
    notes: "Agradecer primero, antes de presentarme. A Herminio y a Ronald Paucar por hacer posible esta conversación, y a la Escuela de Ingeniería Industrial de la UNAT por la invitación a su Semana Industrial.",
    render: (n) => (
      <>
        <motion.div
          className="photo"
          initial={{ opacity: 0, scale: 1.04, clipPath: "inset(0 0 0 100%)" }}
          animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0 0%)" }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
        >
          {/* biome-ignore lint/performance/noImgElement: static photo */}
          <img src="/img/semana.webp" alt="Estudiantes de Ingeniería Industrial de la UNAT" />
        </motion.div>
        <Eyebrow>Antes de empezar</Eyebrow>
        <div className="body" style={{ maxWidth: 820 }}>
          <h2>
            <Words text="Gracias, Herminio y Ronald Paucar." />
          </h2>
          <R i={5} as="p" className="lead">
            Por hacer posible esta conversación. Y a la Escuela Profesional de Ingeniería Industrial de la <strong>UNAT «Daniel Hernández Morillo»</strong> por la invitación.
          </R>
          <R i={6} className="host-logos big">
            {/* biome-ignore lint/performance/noImgElement: static logo */}
            <img src="/img/unat.png" alt="UNAT" />
            {/* biome-ignore lint/performance/noImgElement: static logo */}
            <img src="/img/epii.png" alt="Escuela Profesional de Ingeniería Industrial" />
          </R>
        </div>
        <Foot left="Semana Industrial 2026" />
      </>
    ),
  },
  {
    id: "formal",
    notes: "Leerlo con tono formal, casi solemne. Así me anunció el programa.",
    render: (n) => (
      <>
        <Eyebrow>La versión del programa</Eyebrow>
        <div className="body" style={{ gap: 36 }}>
          <R as="h2" i={1}>Mg. Railly Angelo Hugo Quispe</R>
          <div className="creds">
            <R i={2} className="cred">
              <span className="cred-logo">{/* biome-ignore lint/performance/noImgElement: static logo */}<img src="/img/unmsm.png" alt="UNMSM" style={{ height: 76 }} /></span>
              <span>Bachiller en Ingeniería de Software</span>
            </R>
            <R i={3} className="cred">
              <span className="cred-logo">{/* biome-ignore lint/performance/noImgElement: static logo */}<img src="/img/unir.svg" alt="UNIR" style={{ height: 60 }} /></span>
              <span>Magíster en Inteligencia Artificial</span>
            </R>
            <R i={4} className="cred">
              <span className="cred-logo">{/* biome-ignore lint/performance/noImgElement: static logo */}<img src="/img/vercel.svg" alt="Vercel" style={{ height: 44 }} /></span>
              <span>Member of Technical Staff, Software Engineer</span>
            </R>
          </div>
        </div>
        <Foot left="Todo cierto" right={n} />
        <Diploma size={300} className="art" style={{ right: 96, top: 60, color: "var(--sand-ink)" }} />
      </>
    ),
  },
  {
    id: "builder",
    notes: "Pausa. Todo eso es cierto, pero no es como me presento. Prefiero esto.",
    render: (n) => (
      <>
        <motion.div
          className="portrait"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
        >
          <div className="blob" />
          {/* biome-ignore lint/performance/noImgElement: static cutout */}
          <img src="/img/railly.webp" alt="Railly Hugo" />
        </motion.div>
        <Eyebrow>La versión de verdad</Eyebrow>
        <div className="body" style={{ gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <R i={0} className="lead">
              <span className="strike">Mg. Railly Angelo Hugo Quispe<Line delay={0.45} /></span>
            </R>
            <R i={1} className="lead" >
              <span className="strike" style={{ fontSize: 28 }}>Bachiller · Magíster · Member of Technical Staff<Line delay={0.6} /></span>
            </R>
          </div>
          <motion.div
            className="display huge"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.95 }}
          >
            Railly Hugo.
          </motion.div>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 1.25 }}
          >
            <Mark delay={1.6}><strong>Builder.</strong></Mark> Hago cosas y las publico.
          </motion.p>
        </div>
        <Foot left="Así me gusta presentarme" />
      </>
    ),
  },
  {
    id: "recorrido",
    notes: "Generar cercanía: egresé en octubre de 2023. Menos de 5 años de experiencia. Hace muy poco estaba donde están ustedes.",
    render: (n) => (
      <>
        <Eyebrow>Recién empiezo, igual que ustedes</Eyebrow>
        <div className="body">
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={1} tone={tone.green} num="Oct 2023" title="Egresé" text="Ingeniería de Software, UNMSM" art={<Orbit className="icon" />} />
            <Card i={2} tone={tone.blue} num="Open source" title="midudev" text="Proyectos con el mayor streamer tech en español" art={<Stack className="icon" />} />
            <Card i={3} tone={tone.lilac} num="2025" title="Clerk" text="AI Software Engineer" art={<Cube className="icon" />} />
            <Card i={4} tone={tone.sand} num="2026" title="Vercel" text="Vercel Labs, Buenos Aires" art={<Hub className="icon" />} />
          </div>
          <R i={5} as="p" className="lead">
            Menos de 5 años de experiencia. <strong>El futuro está más cerca de lo que creen.</strong>
          </R>
        </div>
        <Foot left="Recorrido" right={n} />
      </>
    ),
  },
  {
    id: "bulla",
    dark: true,
    notes: "La idea central de esta parte: nadie me buscó por mi CV. Me encontraron por lo que publiqué: repos, tweets, proyectos. Internet hace el resto si te la crees.",
    render: (n) => (
      <>
        <Eyebrow>Lo que cambió todo</Eyebrow>
        <div className="body">
          <p className="quote" style={{ maxWidth: 1000 }}>
            <Words text="Si nunca hubiera hecho bulla, nunca me hubieran encontrado." />
          </p>
          <R i={7} as="p" className="lead">
            Internet + <span className="hl">creérsela</span> + publicar tu trabajo.
          </R>
        </div>
        <Foot left="Midudev, Clerk y Vercel llegaron por lo que publiqué" right={n} />
        <Megaphone size={440} className="art" style={{ right: 70, top: 250, color: "#f8e9a4", ["--surface" as string]: "#22251f" }} />
      </>
    ),
  },
  {
    id: "ship",
    dark: true,
    notes: "Frase de la cultura builder. Hoy un estudiante de Industrial puede construir en una tarde lo que antes pedía un equipo. No es un tutorial: es un cambio de lo que es posible.",
    render: (n) => (
      <>
        <Eyebrow>El cambio</Eyebrow>
        <div className="body">
          <div className="display huge">
            <Words text="You can just" />
            <br />
            <span className="hl"><Words text="ship things." i={3} /></span>
          </div>
          <R i={6} as="p" className="lead" >
            Lo que antes pedía un equipo y meses, hoy lo arma una persona que sabe qué quiere construir.
          </R>
        </div>
        <Foot left="Ya es posible" right={n} />
        <Boat size={520} className="art" style={{ right: 40, top: 110 }} />
      </>
    ),
  },
  {
    id: "inviable",
    notes: "Pendiente: afinar con la grabación de Hunter. Idea: como ingeniero, hoy es económicamente inviable no usar agentes, porque aceleran demasiado. Quien no los usa compite en desventaja de tiempo y costo.",
    render: (n) => (
      <>
        <Eyebrow>La realidad económica</Eyebrow>
        <div className="body">
          <h2 style={{ maxWidth: 1250 }}>
            <Words text="Hoy es económicamente inviable" /> <Mark delay={1.1}><Words text="no usar agentes." i={4} /></Mark>
          </h2>
          <R i={7} as="p" className="lead">
            Aceleran demasiado. Un ingeniero que no los usa compite en desventaja de <strong>tiempo y costo</strong>.
          </R>
        </div>
        <Foot left="Como ingenieros, no como usuarios" right={n} />
        <Cube size={300} className="art" style={{ right: 100, top: 70, color: "var(--muted)" }} />
      </>
    ),
  },
  {
    id: "pensar",
    notes: "Primer eje. La mayoría ve la IA como un asistente que responde preguntas. Un ingeniero la ve como una capacidad que dirige hacia un problema.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>No es un asistente. Es una capacidad que <Mark delay={0.9}>diriges</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 2 }}>
            <Card i={2} title="Como asistente" text="Le pregunto y copio la respuesta." />
            <Card i={3} tone="c-ink" title="Como ingeniero" text="Defino el problema, le doy contexto, reviso y decido." />
          </div>
        </div>
        <Foot left="Pensar" right={n} />
      </>
    ),
  },
  {
    id: "no-delega",
    notes: "No van a ser gurús de la programación, y no hace falta. Lo que no se delega es el criterio. Una respuesta convincente no es una respuesta correcta.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Lo que no se delega.</R>
          <div className="cards">
            <Card i={2} tone={tone.green} title="El problema" text="Qué vale la pena resolver en tu entorno." art={<Orbit className="icon" />} />
            <Card i={3} tone={tone.blue} title="El criterio" text="Distinguir una respuesta convincente de una correcta." art={<Hub className="icon" />} />
            <Card i={4} tone={tone.sand} title="La verificación" text="Probar que funciona antes de decir que funciona." art={<Cube className="icon" />} />
          </div>
        </div>
        <Foot left="No van a ser gurús de la programación. No hace falta." right={n} />
      </>
    ),
  },
  {
    id: "construir",
    notes: "Segundo eje. Caso: reportes de mantenimiento con fallas recurrentes. No es tutorial: es mostrar cómo se dirige un agente. Le das objetivo y contexto, revisas el plan, corriges, validas.",
    render: (n) => (
      <>
        <Eyebrow>02 / Construir dirigiendo un agente</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Caso: fallas recurrentes en mantenimiento.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} tone={tone.green} num="01" title="Objetivo" text="Ordenar 200 reportes y encontrar las fallas que se repiten." />
            <Card i={3} tone={tone.blue} num="02" title="Plan" text="El agente propone cómo hacerlo. Tú lo revisas." />
            <Card i={4} tone={tone.lilac} num="03" title="Ejecución" text="Clasifica y cita el reporte original." />
            <Card i={5} tone={tone.sand} num="04" title="Validación" text="Comparas una muestra contra lo que diría una persona." />
          </div>
        </div>
        <Foot left="Tú diriges, el agente ejecuta" right={n} />
        <Stack size={300} className="art" style={{ right: 80, top: 60, color: "var(--muted)" }} />
      </>
    ),
  },
  {
    id: "errores",
    dark: true,
    notes: "Lo más importante del caso: mostrar dónde falla. Inventa, clasifica mal y lo dice con seguridad. Por eso exigir que cite la fuente y revisar una muestra.",
    render: (n) => (
      <>
        <Eyebrow>02 / Construir</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Dónde se equivoca.</R>
          <div className="cards">
            <Card i={2} title="Inventa" text="Datos que no estaban en el reporte." art={<Spark size={44} style={{ color: "#f8e9a4" }} />} />
            <Card i={3} title="Clasifica mal" text="Confunde fallas que se parecen." art={<Spark size={44} style={{ color: "#f8e9a4" }} />} />
            <Card i={4} title="Suena seguro" text="Siempre. Incluso cuando está mal." art={<Spark size={44} style={{ color: "#f8e9a4" }} />} />
          </div>
          <R i={5} as="p" className="lead">
            Por eso le pides que <strong>cite la fuente</strong> y revisas una muestra.
          </R>
        </div>
        <Foot left="El error es parte del método" right={n} />
      </>
    ),
  },
  {
    id: "investigar",
    notes: "Tercer eje. Un demo llamativo no es evidencia. Para que sea investigación: alternativa, métrica, errores reportados, reproducible.",
    render: (n) => (
      <>
        <Eyebrow>03 / Investigar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>De prototipo a <Mark delay={0.9}>evidencia</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 4 }}>
            <Card i={2} title="Alternativa" text="¿Contra qué comparas?" />
            <Card i={3} title="Métrica" text="Tiempo, aciertos, costo." />
            <Card i={4} title="Errores" text="Reportarlos, no esconderlos." />
            <Card i={5} title="Reproducible" text="Que otra persona pueda repetirlo." />
          </div>
        </div>
        <Foot left="Un demo no es una contribución" right={n} />
        <Notebook size={420} className="art" style={{ right: 60, top: 40, color: "var(--lilac-ink)" }} />
      </>
    ),
  },
  {
    id: "pregunta",
    dark: true,
    notes: "Ejemplo de pregunta de investigación que sale del caso. Eso ya es una tesis o un proyecto de curso serio.",
    render: (n) => (
      <>
        <Eyebrow>03 / Investigar</Eyebrow>
        <div className="body">
          <p className="quote">
            <Words text="¿Cuánto tiempo ahorra frente al proceso manual, y qué errores introduce?" />
          </p>
          <R i={8} as="p" className="lead">
            Eso ya es un <span className="hl">proyecto de investigación</span>.
          </R>
        </div>
        <Foot left="Una buena pregunta vale más que un buen demo" right={n} />
      </>
    ),
  },
  {
    id: "temprano",
    notes: "La universidad tiene 8 o 9 años. Está construyendo su ecosistema ahora. Ustedes pueden ser parte desde el primer ciclo: proyectos propios, hackatones, comunidad.",
    render: (n) => (
      <>
        <Eyebrow>04 / Empezar temprano</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Una universidad joven es una ventaja.</R>
          <div className="cards">
            <Card i={2} tone={tone.green} title="Proyectos propios" text="Desde el primer ciclo, no al final." />
            <Card i={3} tone={tone.lilac} title="Hackatones" text="Construir con presión y con otros." />
            <Card i={4} tone={tone.sand} title="Comunidad" text="Rodearte de gente que construye." />
          </div>
        </div>
        <Foot left="El ecosistema se está armando ahora" right={n} />
        <Conversation size={340} className="art" style={{ right: 90, top: 70, color: "var(--muted)" }} />
      </>
    ),
  },
  {
    id: "crafter",
    dark: true,
    notes: "Qué es Crafter Station: comunidad sin fines de lucro para construir el ecosistema tech del Perú. Más de 1,000 builders, hackatones, meetups. Invitación a unirse.",
    render: (n) => (
      <>
        <Eyebrow>Crafter Station</Eyebrow>
        <div className="body">
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <motion.div initial={{ opacity: 0, rotate: -40, scale: 0.6 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}>
              <Logo size={96} color="#f8e9a4" />
            </motion.div>
            <h2 style={{ maxWidth: 900 }}><Words text="Craft. Ship. Repeat." i={1} /></h2>
          </div>
          <R i={4} as="p" className="lead">Una comunidad sin fines de lucro que convierte curiosidad en proyectos.</R>
          <div className="cards">
            <Card i={5} title="1,000+ builders" text="Construyendo el ecosistema tech del Perú." />
            <Card i={6} title="Hackatones" text="Peru AI Hackathon, She Ships y Bounties." />
            <Card i={7} title="Hot Reload" text="Meetups en Lima, Bogotá y Madrid." />
          </div>
        </div>
        <Foot left="Únete en crafters.chat" right={n} />
        <Coffee size={300} className="art" style={{ right: 100, top: 60, color: "#f8e9a4", ["--canvas" as string]: "#191b17" }} />
      </>
    ),
  },
  {
    id: "cierre",
    notes: "Cierre. Repetir la frase con el matiz del ingeniero. Dejar los dos links en pantalla durante las preguntas.",
    render: (n) => (
      <>
        <Eyebrow>Para llevar</Eyebrow>
        <div className="body">
          <div className="display" style={{ fontSize: 124, lineHeight: 1 }}>
            <Words text="You can just ship things." />
            <br />
            <Mark delay={1.1}><Words text="Pero verifíquenlo." i={5} /></Mark>
          </div>
          <R i={8} className="links">
            <div><small>Conversemos 30 min</small><span>railly.dev/meet</span></div>
            <div><small>Únete a la comunidad</small><span>crafters.chat</span></div>
          </R>
        </div>
        <Foot left="Railly Hugo · Gracias" right="Preguntas" />
      </>
    ),
  },
];
