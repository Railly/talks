"use client";

import { motion } from "motion/react";
import { Hub, Megaphone, Notebook, Orbit, Spark, Stack } from "./art";
import { EASE, R, Words } from "./motion";
import { Card, Eyebrow, Foot, Mark, type Slide, tone } from "./slides";

export function PhotoSlot({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className="photo-slot"
      style={style}
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
    >
      <span>{label}</span>
    </motion.div>
  );
}

function Shot({ src, alt, caption, style, rotate = -1.2, delay = 0.45 }: { src: string; alt: string; caption?: string; style?: React.CSSProperties; rotate?: number; delay?: number }) {
  return (
    <motion.div
      className="shot"
      style={style}
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {/* biome-ignore lint/performance/noImgElement: static screenshot */}
      <img src={src} alt={alt} />
      {caption && <span className="caption">{caption}</span>}
    </motion.div>
  );
}

const reports = [
  ["#041", "Bomba P-3", "Vibración alta. Se cambió el rodamiento."],
  ["#058", "Bomba P-3", "Ruido en el eje, temperatura elevada."],
  ["#063", "Faja F-12", "Desalineada, se ajustó la tensión."],
  ["#077", "Bomba P-3", "Rodamiento dañado otra vez."],
];

const results = [
  ["Rodamiento, bomba P-3", "7", "#041 #058 #077 +4"],
  ["Desalineación, faja F-12", "4", "#063 #090 +2"],
  ["Sobrecalentamiento, motor M-2", "3", "#071 #104 #118"],
];

export const extra: Slide[] = [
  {
    id: "ingredientes",
    notes: "Para hacer bulla se necesitan tres ingredientes. Internet: imprescindible. Creérsela: mentalidad. Publicar: compartir lo que haces.",
    render: (n) => (
      <>
        <Eyebrow>Hacer bulla</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Tres ingredientes.</R>
          <div className="cards">
            <Card i={2} tone={tone.blue} num="01" title="Internet" text="Imprescindible. Te conecta con el mundo entero." art={<Hub className="icon" />} />
            <Card i={3} tone={tone.sand} num="02" title="Creérsela" text="Es mentalidad. Si tú no crees en ti, nadie lo hará primero." art={<Orbit className="icon" />} />
            <Card i={4} tone={tone.green} num="03" title="Publicar" text="Compartir lo que haces, aunque no esté perfecto." art={<Stack className="icon" />} />
          </div>
        </div>
        <Foot left="Bulla, en el buen sentido" right={n} />
      </>
    ),
  },
  {
    id: "juego",
    dark: true,
    notes: "Veo la vida como un juego. Nadie entra a un juego para perder: puedes disfrutar con tus amigos, pero el objetivo es ganar. Si antes de jugar dices 'no puedo', ya perdiste. Date permiso de ser vulnerable, conoce tus debilidades y mejora poco a poco. No necesitas pedir permiso para crear, compartir o salir de tu zona. Mejor pedir perdón que pedir permiso: eso es clave para innovar e investigar.",
    render: (n) => (
      <>
        <Eyebrow>02 / Creérsela</Eyebrow>
        <div className="body">
          <p className="quote" style={{ maxWidth: 1150 }}>
            <Words text="Nadie entra a un juego para perder." />
          </p>
          <R i={6} as="p" className="lead">
            Si antes de jugar dices «no puedo», ya perdiste el partido. <strong>No necesitas permiso</strong> para crear, para compartir ni para salir de tu zona.
          </R>
          <R i={8} className="pill">Mejor pedir perdón que pedir permiso.</R>
        </div>
        <Foot left="La vida como un juego" right={n} />
        <Orbit size={440} className="art" style={{ right: 80, top: 230, color: "#f8e9a4" }} />
      </>
    ),
  },
  {
    id: "cv",
    notes: "En esta época los agentes automatizan contenido, programación, investigación. Hay gente y agentes publicando 24/7. Si sales solo con un CV en papel, no alcanza. He conversado con reclutadores: muchos descartan por CV, y cada vez más el primer filtro es una IA. Publicar te diferencia y construye tu marca personal.",
    render: (n) => (
      <>
        <Eyebrow>03 / Publicar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Un CV ya no <Mark delay={0.9}>alcanza</Mark>.</R>
          <div className="cards">
            <Card i={2} title="Compites con muchos" text="Personas y agentes publicando 24/7." />
            <Card i={3} title="El primer filtro es IA" text="Muchos CV se descartan antes de que los lea una persona." />
            <Card i={4} tone="c-ink" title="Tu trabajo habla" text="Lo que publicas es tu marca personal." />
          </div>
        </div>
        <Foot left="Lo que reclutadores me han contado" right={n} />
        <Megaphone size={260} className="art" style={{ right: 100, top: 50, color: "var(--muted)" }} />
      </>
    ),
  },
  {
    id: "antes",
    notes: "Historia: en la universidad, con el profesor Herminio Paucar, tenía un proyecto de realidad aumentada. No tenía idea de cómo hacerlo ni sabía inglés, y todos los recursos estaban en inglés. Me tomó mes y medio, dos meses. Con marcadores, al apuntar con la cámara salía el sistema solar rotando. El profesor me mandó a ayudar a otros alumnos, incluso de ciclos superiores.",
    render: (n) => (
      <>
        <Eyebrow>Una historia · 2020, en la universidad</Eyebrow>
        <div className="body" style={{ maxWidth: 820 }}>
          <R as="h2" i={1}>Realidad aumentada, con el profesor Herminio Paucar.</R>
          <div className="stats">
            <R i={2} className="stat"><b>~2 meses</b><span>de tutoriales y prueba y error</span></R>
            <R i={3} className="stat"><b>0</b><span>inglés, y todo estaba en inglés</span></R>
          </div>
          <R i={4} as="p" className="lead">Marcadores, una cámara y el sistema solar rotando encima.</R>
        </div>
        <Foot left="Antes" right={n} />
        <Shot src="/img/ar-2020.png" alt="AR Solar System, 2020" caption="AR-Solar-System · Computación Gráfica 2020-II" style={{ right: 90, top: 160, width: 600 }} />
      </>
    ),
  },
  {
    id: "hoy",
    dark: true,
    notes: "Hace poco hice el ejercicio de replicarlo con las tecnologías actuales. Me tomó una hora o menos, con mucha más calidad. Corre en el navegador, sin hardware especial, y le agregué manipulación con gestos: rotas con un dedo. Lo que me tomó mes y medio como principiante, el agente lo hizo con calidad superior en una hora. Estamos viendo el futuro literalmente. (Mostrar video o link.)",
    render: (n) => (
      <>
        <Eyebrow>La misma idea · 2026</Eyebrow>
        <div className="body" style={{ maxWidth: 640 }}>
          <h2><Words text="El mismo proyecto, en una hora." /></h2>
          <div className="stats compact">
            <R i={4} className="stat"><b>&lt;1&nbsp;h</b><span>con un agente</span></R>
            <R i={5} className="stat"><b>Web</b><span>sin hardware especial</span></R>
            <R i={6} className="stat"><b>Gestos</b><span>rotas con un dedo</span></R>
          </div>
          <R i={7} as="p" className="lead">Y con <span className="hl">mucha más calidad</span>.</R>
        </div>
        <Foot left="Hoy" right={n} />
        <motion.div className="shot video" style={{ right: 70, top: 170, width: 720 }} initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}>
          <video src="/video/solar-2026.mp4" poster="/img/solar-poster.jpg" autoPlay muted loop playsInline />
          <span className="caption">solar-system.crafter.run</span>
        </motion.div>
      </>
    ),
  },
  {
    id: "pensar",
    notes: "Hay que ver al agente como un compañero de trabajo. Por más absurdo que suene. No como tu inferior, ni como tu superior, porque tú eres el responsable humano. Como un par que te ayuda a una velocidad inhumana, pero el criterio lo pones tú. Como asistente: preguntas, copias la respuesta, no revisas nada. Como ingeniero: defines el problema, le das contexto, revisas y decides.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>Un agente es un <Mark delay={0.9}>compañero de trabajo</Mark>.</R>
          <div className="cards">
            <Card i={2} title="Ni tu inferior" text="No le das órdenes sin contexto." />
            <Card i={3} title="Ni tu superior" text="El responsable eres tú." />
            <Card i={4} tone="c-ink" title="Un par" text="Trabaja a una velocidad inhumana. El criterio lo pones tú." />
          </div>
        </div>
        <Foot left="Como ingeniero: defines, das contexto, revisas, decides" right={n} />
      </>
    ),
  },
  {
    id: "criterio",
    dark: true,
    notes: "El criterio no es algo nuevo. Imagínate que fuera un compañero humano. ¿Le creerías todo lo que te dice, sin ningún criterio de tu lado? No. Siempre tienes que ser crítico, investigar y formar tu propio criterio para saber cuándo algo es correcto y argumentar por qué. Un agente puede decirte 'tienes toda la razón, eres un genio'. Convincente no es lo mismo que correcto.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar · El criterio</Eyebrow>
        <div className="body">
          <p className="quote" style={{ maxWidth: 1200 }}>
            <Words text="Si fuera una persona, ¿le creerías todo lo que te dice?" />
          </p>
          <R i={8} as="p" className="lead">
            «Tienes toda la razón» es <strong>convincente</strong>. No significa que sea <span className="hl">correcto</span>.
          </R>
        </div>
        <Foot left="Esto no es nuevo: es criterio de siempre" right={n} />
      </>
    ),
  },
  {
    id: "verificar",
    notes: "Verificación: probar que funciona antes de decir que funciona. Un agente te dice 'todo funciona'. Pídele que te lo muestre. Tests automatizados, pruebas de estrés, intentar romper la solución. Muchas veces encuentras huecos que no habías contemplado. Mientras más rigurosas las pruebas, más puedes confiar. Y no es confiar en el agente: es confiar en que tu solución es resiliente.",
    render: (n) => (
      <>
        <Eyebrow>01 / Pensar · La verificación</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>«Todo funciona». <Mark delay={0.9}>Muéstramelo.</Mark></R>
          <div className="cards">
            <Card i={2} tone={tone.green} num="01" title="Pruebas automáticas" text="Que la solución se pruebe sola, cada vez." />
            <Card i={3} tone={tone.lilac} num="02" title="Intenta romperla" text="Ahí aparecen los huecos que no viste." />
            <Card i={4} tone={tone.sand} num="03" title="Resiliencia" text="Que aguante y se recupere de los errores." />
          </div>
        </div>
        <Foot left="No confías en el agente: confías en tu evidencia" right={n} />
      </>
    ),
  },
  {
    id: "construir",
    notes: "Caso concreto (datos de ejemplo). Una planta tiene 200 reportes de mantenimiento escritos a mano. Le das el objetivo al agente: encontrar las fallas que se repiten. Te propone un plan, lo revisas. Clasifica y cita el reporte original de cada falla. Y tú validas una muestra contra lo que diría el técnico. El humano siempre revisa la solución.",
    render: (n) => (
      <>
        <Eyebrow>02 / Construir · Un caso concreto</Eyebrow>
        <div className="body" style={{ gap: 32 }}>
          <R as="h2" i={1}>200 reportes de mantenimiento. ¿Qué falla se repite?</R>
          <div className="case">
            <R i={2} className="case-col">
              <span className="num">Entrada · reportes escritos a mano</span>
              {reports.map(([id, eq, t]) => (
                <div key={id} className="report"><b>{id}</b><span><strong>{eq}.</strong> {t}</span></div>
              ))}
            </R>
            <motion.div className="case-arrow" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}>
              <Spark size={36} />
            </motion.div>
            <R i={5} className="case-col out">
              <span className="num">Salida · el agente agrupa y cita</span>
              {results.map(([f, c, refs]) => (
                <div key={f} className="result"><span>{f}</span><b>{c}</b><small>{refs}</small></div>
              ))}
              <span className="check">Tú validas 20 al azar contra el técnico</span>
            </R>
          </div>
        </div>
        <Foot left="Datos de ejemplo · Tú diriges, el agente ejecuta, tú validas" right={n} />
      </>
    ),
  },
  {
    id: "investigar",
    notes: "Investigar. Primero el estado del arte: qué ya existe, qué se probó. Luego la pregunta. Después: contra qué comparas, qué mides (tiempo, aciertos, costo), reportar errores, y que otra persona pueda repetirlo. Un demo llamativo no es una contribución.",
    render: (n) => (
      <>
        <Eyebrow>03 / Investigar</Eyebrow>
        <div className="body">
          <R as="h2" i={1}>De prototipo a <Mark delay={0.9}>evidencia</Mark>.</R>
          <div className="cards" style={{ ["--n" as string]: 5 }}>
            <Card i={2} tone={tone.lilac} num="01" title="Estado del arte" text="¿Qué ya existe?" />
            <Card i={3} num="02" title="Alternativa" text="¿Contra qué comparas?" />
            <Card i={4} num="03" title="Métrica" text="Tiempo, aciertos, costo." />
            <Card i={5} num="04" title="Errores" text="Reportarlos, no esconderlos." />
            <Card i={6} num="05" title="Reproducible" text="Que otro pueda repetirlo." />
          </div>
        </div>
        <Foot left="Un demo no es una contribución" right={n} />
        <Notebook size={360} className="art" style={{ right: 60, top: 40, color: "var(--lilac-ink)" }} />
      </>
    ),
  },
  {
    id: "cris",
    dark: true,
    notes: "Les quiero presentar a un crack: Cristian Olivera Chávez. Estudia en la Universidad Nacional Micaela Bastidas de Apurímac. Ganó la Hackathon 2026 de midudev y CubePath con openvid, un editor de video en el navegador. Midudev lo anunció en vivo como ganador. Lo conocí por internet y este sábado lo conozco en persona: lo invité a Lima al Hot Reload. Futuro miembro de Crafter Station. Por esto apoyo el talento.",
    render: (n) => (
      <>
        <Eyebrow>04 / Empezar temprano · Un crack</Eyebrow>
        <div className="body" style={{ maxWidth: 860 }}>
          <motion.div className="avatar" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}>
            {/* biome-ignore lint/performance/noImgElement: avatar */}
            <img src="/img/cris.png" alt="Cristian Olivera Chávez" />
          </motion.div>
          <h2><Words text="Cristian Olivera Chávez." i={1} /></h2>
          <div className="stats">
            <R i={4} className="stat"><b>1.er lugar</b><span>Hackathon 2026 de midudev y CubePath</span></R>
            <R i={5} className="stat"><b>openvid</b><span>editor de video en el navegador</span></R>
          </div>
          <R i={6} as="p" className="lead">Universidad Nacional Micaela Bastidas de Apurímac. Este sábado lo conozco en persona, en Lima.</R>
        </div>
        <Foot left="@CrisOliveraDev · github.com/cristianolivera1" right={n} />
        <Shot src="/img/cris-linkedin.png" alt="Post de LinkedIn de Cristian al ganar la hackathon" style={{ right: 110, top: 70, width: 470 }} rotate={1.5} />
      </>
    ),
  },
  {
    id: "cris-web",
    notes: "Su web es un buen ejemplo de landing personal: no es solo un CV y redes, que son indispensables, sino que muestra todos sus proyectos, con qué los hizo y qué hacen. Eso es lo que un reclutador quiere ver.",
    render: (n) => (
      <>
        <Eyebrow>Publicar · Un buen ejemplo</Eyebrow>
        <div className="body" style={{ maxWidth: 560 }}>
          <R as="h2" i={1}>Tu web es tu <Mark delay={0.9}>vitrina</Mark>.</R>
          <R i={2} as="p" className="lead">CV y redes son indispensables. Pero lo que convence son <strong>los proyectos</strong>: qué hacen y con qué los hiciste.</R>
        </div>
        <Foot left="cristianolivera1.github.io" right={n} />
        <Shot src="/img/cris-web.png" alt="Web personal de Cristian Olivera" style={{ right: 70, top: 150, width: 860 }} rotate={-1} />
      </>
    ),
  },
  {
    id: "cris-publica",
    dark: true,
    notes: "Y publica todo. Este tweet es de hace tres días: lanza Mdverse, en inglés, construyendo en público. Y su post de LinkedIn al ganar la hackathon: estuvo casi dos días sin luz ni teléfono en su ciudad, se conectó, vio el directo de midu y se enteró de que había ganado. 780 reacciones. Internet, creérsela, publicar.",
    render: (n) => (
      <>
        <Eyebrow>Publicar · En público y en inglés</Eyebrow>
        <div className="body" style={{ maxWidth: 520 }}>
          <R as="h2" i={1}>Shipea en público.</R>
          <div className="stats" style={{ flexDirection: "column", gap: 28 }}>
            <R i={2} className="stat"><b>780</b><span>reacciones en LinkedIn al ganar</span></R>
            <R i={3} className="stat"><b>En inglés</b><span>lanza sus proyectos para el mundo</span></R>
          </div>
        </div>
        <Foot left="Internet + creérsela + publicar" right={n} />
        <Shot src="/img/cris-tweet.png" alt="Tweet de Cristian lanzando Mdverse" style={{ right: 470, top: 120, width: 520 }} rotate={-2} delay={0.4} />
        <Shot src="/img/cris-linkedin.png" alt="Post de LinkedIn de Cristian" style={{ right: 70, top: 70, width: 420 }} rotate={2} delay={0.65} />
      </>
    ),
  },
];

export const ORDER = [
  "portada", "gracias", "formal", "builder", "recorrido",
  "bulla", "ingredientes", "juego", "cv",
  "ship", "antes", "hoy", "inviable",
  "pensar", "no-delega", "criterio", "verificar",
  "construir", "errores",
  "investigar", "pregunta",
  "temprano", "cris", "cris-web", "cris-publica", "crafter", "cierre",
];
